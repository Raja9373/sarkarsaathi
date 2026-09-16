import React, { useState } from 'react';
import { globalStagingQueue } from '../ingestion/staging';
import { opportunityRepository } from '../infrastructure/repositories/InvestmentRepository';
import { DuplicateDetector } from '../ingestion/duplicates';
import { StagedOpportunity } from '../ingestion/types';
import {
  ClipboardList,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  FileCode,
  ShieldCheck,
  RotateCcw,
  Layers
} from 'lucide-react';

export interface IIGBatchPasteRecord {
  iigProjectId?: string;
  projectId?: string;
  title?: string;
  description?: string;
  state?: string;
  district?: string;
  sector?: string;
  projectStatus?: string;
  investmentValue?: string | number;
  employmentPotential?: string | number;
  projectStage?: string;
  projectType?: string;
  implementingAgency?: string;
  contactInformation?: string;
  officialSourceUrl?: string;
  sourceUrl?: string;
  sourceName?: string;
  sourceType?: string;
  verificationDate?: string;
  [key: string]: any;
}

export interface IIGBatchPasteSummary {
  inputCount: number;
  validCount: number;
  invalidCount: number;
  duplicateCount: number;
  newCount: number;
  stagedCount: number;
  publishedCount: number;
  errors: { index: number; iigProjectId?: string; reason: string }[];
}

export const IIGBatchPaste: React.FC<{ onStaged?: () => void }> = ({ onStaged }) => {
  const [jsonInput, setJsonInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [summary, setSummary] = useState<IIGBatchPasteSummary | null>(null);
  const [parseError, setParseError] = useState<string | null>(null);

  const handleProcessBatch = () => {
    setParseError(null);
    setSummary(null);

    const trimmed = jsonInput.trim();
    if (!trimmed) {
      setParseError('Please paste a JSON array of IIG records.');
      return;
    }

    let parsed: any;
    try {
      parsed = JSON.parse(trimmed);
    } catch (err: any) {
      setParseError(`Malformed JSON syntax: ${err?.message || 'Invalid JSON format'}`);
      return;
    }

    if (!Array.isArray(parsed)) {
      setParseError('Input must be a JSON array (e.g. `[ { "iigProjectId": "...", ... } ]`).');
      return;
    }

    if (parsed.length === 0) {
      setParseError('The JSON array is empty. Please provide between 1 and 100 records.');
      return;
    }

    if (parsed.length > 100) {
      setParseError(`Maximum batch size is 100 records. Supplied: ${parsed.length} records. Please split into batches of 100 or fewer.`);
      return;
    }

    setIsProcessing(true);

    try {
      const publishedOpps = opportunityRepository.getAll();
      const stagedOpps = globalStagingQueue.getStagedOpportunities();
      const duplicateDetector = new DuplicateDetector(
        [...publishedOpps, ...(stagedOpps as any[])],
        []
      );

      const errors: { index: number; iigProjectId?: string; reason: string }[] = [];
      let validCount = 0;
      let invalidCount = 0;
      let duplicateCount = 0;
      let newCount = 0;
      let stagedCount = 0;

      const stagedBatch: StagedOpportunity[] = [];

      parsed.forEach((rawRecord: any, idx: number) => {
        const recordIndex = idx + 1;
        const iigProjectId = (rawRecord.iigProjectId || rawRecord.projectId || '').toString().trim();
        const officialSourceUrl = (rawRecord.officialSourceUrl || rawRecord.sourceUrl || '').toString().trim();
        const sourceName = (rawRecord.sourceName || '').toString().trim();
        const sourceType = (rawRecord.sourceType || '').toString().trim();
        const verificationDate = (rawRecord.verificationDate || '').toString().trim();
        const title = (rawRecord.title || '').toString().trim();

        // Validate Mandatory Fields
        if (!iigProjectId) {
          errors.push({ index: recordIndex, iigProjectId: undefined, reason: 'Missing mandatory field: iigProjectId' });
          invalidCount++;
          return;
        }

        if (!officialSourceUrl) {
          errors.push({ index: recordIndex, iigProjectId, reason: 'Missing mandatory field: officialSourceUrl' });
          invalidCount++;
          return;
        }

        if (!sourceName) {
          errors.push({ index: recordIndex, iigProjectId, reason: 'Missing mandatory field: sourceName' });
          invalidCount++;
          return;
        }

        if (!sourceType) {
          errors.push({ index: recordIndex, iigProjectId, reason: 'Missing mandatory field: sourceType' });
          invalidCount++;
          return;
        }

        if (!verificationDate) {
          errors.push({ index: recordIndex, iigProjectId, reason: 'Missing mandatory field: verificationDate' });
          invalidCount++;
          return;
        }

        if (!title) {
          errors.push({ index: recordIndex, iigProjectId, reason: 'Missing mandatory field: title' });
          invalidCount++;
          return;
        }

        validCount++;

        // Duplicate checking
        const dupCheck = duplicateDetector.isOpportunityDuplicate({
          id: `iig-${iigProjectId}`,
          projectId: iigProjectId,
          title,
          sourceUrl: officialSourceUrl
        });

        if (dupCheck.isDuplicate) {
          duplicateCount++;
          errors.push({
            index: recordIndex,
            iigProjectId,
            reason: `Duplicate detected (${dupCheck.reason || 'Already exists in published or staged catalogue'})`
          });
          return;
        }

        // Register in detector so subsequent records in the same batch won't duplicate
        duplicateDetector.registerOpportunity({
          id: `iig-${iigProjectId}`,
          projectId: iigProjectId,
          title,
          sourceUrl: officialSourceUrl
        });

        newCount++;

        // Construct Staged Record preserving supplied values exactly
        const stagedRecord: StagedOpportunity = {
          id: `iig-${iigProjectId}`,
          projectId: iigProjectId,
          title: title,
          slug: `iig-${iigProjectId.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
          description: rawRecord.description || '',
          state: rawRecord.state || undefined,
          location: rawRecord.district && rawRecord.state
            ? `${rawRecord.district}, ${rawRecord.state}`
            : (rawRecord.state || rawRecord.district || rawRecord.location || undefined),
          sector: rawRecord.sector || undefined,
          category: rawRecord.sector || rawRecord.category || 'Infrastructure & Investment',
          projectStatus: rawRecord.projectStatus || 'ACTIVE',
          status: 'ACTIVE',
          fundingAmount: rawRecord.investmentValue ? rawRecord.investmentValue.toString() : (rawRecord.fundingAmount || undefined),
          totalProjectCost: rawRecord.investmentValue ? rawRecord.investmentValue.toString() : (rawRecord.totalProjectCost || undefined),
          authority: rawRecord.implementingAgency || rawRecord.authority || sourceName,
          sourceAuthority: sourceName,
          sourceName: sourceName,
          sourceUrl: officialSourceUrl,
          verificationStatus: 'PENDING',
          reviewStatus: 'PENDING_REVIEW',
          lifecycleStatus: 'NEEDS_REVIEW',
          deadline: rawRecord.deadline || '',
          opportunityType: rawRecord.projectType || 'Government Project',
          provenance: {
            sourceSystem: 'IIG',
            importedAt: new Date().toISOString(),
            batchId: `iig-paste-${Date.now()}`,
            rawRecordHash: JSON.stringify(rawRecord),
            confidenceScore: 1.0
          },
          validationErrors: []
        };

        stagedBatch.push(stagedRecord);
      });

      // Stage all valid new records
      stagedBatch.forEach(rec => {
        globalStagingQueue.addOpportunity(rec);
        stagedCount++;
      });

      setSummary({
        inputCount: parsed.length,
        validCount,
        invalidCount,
        duplicateCount,
        newCount,
        stagedCount,
        publishedCount: 0,
        errors
      });

      if (onStaged) {
        onStaged();
      }
    } catch (err: any) {
      setParseError(`Processing failed: ${err?.message || 'Unknown processing error'}`);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleClear = () => {
    setJsonInput('');
    setSummary(null);
    setParseError(null);
  };

  const loadExampleTemplate = () => {
    const template: IIGBatchPasteRecord[] = [
      {
        iigProjectId: "IIG-2026-9001",
        title: "Western Dedicated Solar & Renewable Energy Corridor",
        description: "Development of high-capacity transmission grid and utility-scale solar park cluster.",
        state: "Rajasthan",
        district: "Jodhpur",
        sector: "Renewable Energy",
        projectStatus: "Under Implementation",
        investmentValue: "4500 Crore",
        employmentPotential: "3200",
        projectStage: "Tendering",
        projectType: "Greenfield",
        implementingAgency: "Rajasthan Renewable Energy Corporation Limited",
        contactInformation: "nodal-officer@rrecl.gov.in",
        officialSourceUrl: "https://indiainvestmentgrid.gov.in/project/IIG-2026-9001",
        sourceName: "India Investment Grid (IIG)",
        sourceType: "Official Government Portal",
        verificationDate: new Date().toISOString().split('T')[0]
      }
    ];
    setJsonInput(JSON.stringify(template, null, 2));
    setParseError(null);
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <ClipboardList className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-bold text-slate-900">IIG Batch Paste (Up to 100 Verified Records)</h2>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Paste a JSON array of individually verified India Investment Grid (IIG) opportunity records to validate, deduplicate, and stage for administrator review.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={loadExampleTemplate}
            className="px-3 py-1.5 border border-slate-300 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-700 transition-colors flex items-center space-x-1.5"
          >
            <FileCode className="w-3.5 h-3.5 text-slate-500" />
            <span>Load Template</span>
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="px-3 py-1.5 border border-slate-300 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-700 transition-colors flex items-center space-x-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
            <span>Clear</span>
          </button>
        </div>
      </div>

      {/* Rules Notice */}
      <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 space-y-1">
        <div className="font-bold text-slate-800 flex items-center space-x-1.5">
          <ShieldCheck className="w-4 h-4 text-blue-600" />
          <span>Statutory Data Integrity &amp; Staging Safeguards</span>
        </div>
        <div className="text-[11px] text-slate-600 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 pt-1">
          <div>&bull; Maximum: <strong>100 records</strong> per submission</div>
          <div>&bull; Required fields: <code>iigProjectId</code>, <code>officialSourceUrl</code>, <code>sourceName</code>, <code>sourceType</code>, <code>verificationDate</code>, <code>title</code></div>
          <div>&bull; Deduplication: Evaluates both <strong>Published</strong> &amp; <strong>Staged</strong> catalogues</div>
          <div>&bull; Lifecycle: Records enter as <code>PENDING_REVIEW</code> (Auto-publish: Disabled)</div>
        </div>
      </div>

      {/* Input Area */}
      <div className="space-y-2">
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
          Paste JSON Array
        </label>
        <textarea
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          placeholder={`[\n  {\n    "iigProjectId": "IIG-2026-XXXX",\n    "title": "Project Title",\n    "state": "State",\n    "sector": "Sector",\n    "officialSourceUrl": "https://indiainvestmentgrid.gov.in/...",\n    "sourceName": "India Investment Grid (IIG)",\n    "sourceType": "Official Government Portal",\n    "verificationDate": "${new Date().toISOString().split('T')[0]}"\n  }\n]`}
          rows={10}
          className="w-full font-mono text-xs p-3.5 border border-slate-300 rounded-lg bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Parse Error Notification */}
      {parseError && (
        <div className="p-3.5 bg-red-50 border border-red-200 rounded-lg text-xs font-medium text-red-800 flex items-start space-x-2">
          <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
          <span className="break-all">{parseError}</span>
        </div>
      )}

      {/* Execution Button */}
      <div>
        <button
          type="button"
          onClick={handleProcessBatch}
          disabled={isProcessing || !jsonInput.trim()}
          className={`px-5 py-2.5 rounded-lg text-xs font-bold text-white transition-colors flex items-center space-x-2 shadow-sm ${
            isProcessing || !jsonInput.trim()
              ? 'bg-slate-300 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>{isProcessing ? 'Validating & Deduplicating...' : 'Validate & Stage IIG Batch'}</span>
        </button>
      </div>

      {/* Summary Report */}
      {summary && (
        <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Batch Ingestion Summary</span>
            </h3>
            <span className="text-[11px] font-semibold text-slate-500">
              Auto-Publish: <span className="text-amber-700">DISABLED</span>
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-center">
            <div className="p-3 bg-white border border-slate-200 rounded-lg">
              <div className="text-[10px] uppercase font-bold text-slate-500">Input</div>
              <div className="text-lg font-bold text-slate-900 mt-0.5">{summary.inputCount}</div>
            </div>
            <div className="p-3 bg-white border border-slate-200 rounded-lg">
              <div className="text-[10px] uppercase font-bold text-emerald-600">Valid</div>
              <div className="text-lg font-bold text-emerald-700 mt-0.5">{summary.validCount}</div>
            </div>
            <div className="p-3 bg-white border border-slate-200 rounded-lg">
              <div className="text-[10px] uppercase font-bold text-red-600">Invalid</div>
              <div className="text-lg font-bold text-red-700 mt-0.5">{summary.invalidCount}</div>
            </div>
            <div className="p-3 bg-white border border-slate-200 rounded-lg">
              <div className="text-[10px] uppercase font-bold text-amber-600">Duplicates</div>
              <div className="text-lg font-bold text-amber-700 mt-0.5">{summary.duplicateCount}</div>
            </div>
            <div className="p-3 bg-white border border-slate-200 rounded-lg">
              <div className="text-[10px] uppercase font-bold text-blue-600">New</div>
              <div className="text-lg font-bold text-blue-700 mt-0.5">{summary.newCount}</div>
            </div>
            <div className="p-3 bg-white border border-emerald-300 rounded-lg bg-emerald-50/50">
              <div className="text-[10px] uppercase font-bold text-emerald-700">Staged</div>
              <div className="text-lg font-bold text-emerald-800 mt-0.5">{summary.stagedCount}</div>
            </div>
            <div className="p-3 bg-white border border-slate-200 rounded-lg">
              <div className="text-[10px] uppercase font-bold text-slate-400">Published</div>
              <div className="text-lg font-bold text-slate-500 mt-0.5">0</div>
            </div>
          </div>

          {/* Validation & Duplicate Errors List */}
          {summary.errors.length > 0 && (
            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Errors &amp; Duplicate Exclusions ({summary.errors.length})
              </div>
              <div className="max-h-48 overflow-y-auto border border-slate-200 rounded-lg divide-y divide-slate-100 bg-white text-xs">
                {summary.errors.map((err, idx) => (
                  <div key={idx} className="p-2.5 flex items-start space-x-2 text-slate-700">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900">Record #{err.index}</span>
                      {err.iigProjectId && <span className="text-slate-500"> ({err.iigProjectId})</span>}
                      : <span className="text-slate-600">{err.reason}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
