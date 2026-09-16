import React, { useState } from 'react';
import { BatchImporter } from '../ingestion/batchImporter';
import { BatchImportResult } from '../ingestion/types';
import { IIGManualCaptureForm } from './IIGManualCaptureForm';
import { opportunityRepository, tenderRepository } from '../infrastructure/repositories/InvestmentRepository';
import { globalStagingQueue } from '../ingestion/staging';
import { parseCsvToObjects } from '../ingestion/csvParser';

export const AdminImport = () => {
  const [file, setFile] = useState<File | null>(null);
  const [jsonPaste, setJsonPaste] = useState('');
  const [targetCatalog, setTargetCatalog] = useState<'Opportunities' | 'Tenders'>('Opportunities');
  const [result, setResult] = useState<BatchImportResult | null>(null);
  const [activeTab, setActiveTab] = useState<'batch' | 'manual' | 'staged'>('batch');
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState<{ processed: number; total: number; percent: number } | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setErrorMsg(null);
    }
  };

  const handleImport = async () => {
    if (!file && !jsonPaste.trim()) {
      setErrorMsg('Please select a CSV/JSON file or paste a JSON array.');
      return;
    }

    setIsProcessing(true);
    setErrorMsg(null);
    setResult(null);
    setProgress(null);

    try {
      let records: any[] = [];
      let sourceSystem = 'Authorized Admin Ingestion';

      if (file) {
        sourceSystem = file.name;
        const text = await file.text();
        const trimmed = text.trim();

        if (file.name.endsWith('.json') || trimmed.startsWith('[') || trimmed.startsWith('{')) {
          const parsed = JSON.parse(trimmed);
          records = Array.isArray(parsed) ? parsed : [parsed];
        } else {
          // Parse CSV using chunked line parser
          records = parseCsvToObjects(text);
        }
      } else {
        const trimmed = jsonPaste.trim();
        if (trimmed.startsWith('[') || trimmed.startsWith('{')) {
          const parsed = JSON.parse(trimmed);
          records = Array.isArray(parsed) ? parsed : [parsed];
        } else {
          records = parseCsvToObjects(trimmed);
        }
      }

      if (!records || records.length === 0) {
        setErrorMsg('No valid records found in the provided input.');
        setIsProcessing(false);
        return;
      }

      const importer = new BatchImporter(
        opportunityRepository.getAll(),
        tenderRepository.getAll()
      );

      const batchId = `batch-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;

      let importResult: BatchImportResult;

      if (targetCatalog === 'Opportunities') {
        importResult = await importer.importOpportunityBatch(
          {
            batchId,
            sourceSystem,
            records,
            autoApproveVerified: false // Auto-publish MUST remain disabled
          },
          {
            chunkSize: 1000,
            onProgress: (processed, total) => {
              setProgress({
                processed,
                total,
                percent: Math.round((processed / total) * 100)
              });
            }
          }
        );
      } else {
        importResult = await importer.importTenderBatch(
          {
            batchId,
            sourceSystem,
            records,
            autoApproveVerified: false // Auto-publish MUST remain disabled
          },
          {
            chunkSize: 1000,
            onProgress: (processed, total) => {
              setProgress({
                processed,
                total,
                percent: Math.round((processed / total) * 100)
              });
            }
          }
        );
      }

      setResult(importResult);
    } catch (err: any) {
      setErrorMsg(`Import failed: ${err?.message || 'Error processing file'}`);
    } finally {
      setIsProcessing(false);
      setProgress(null);
    }
  };

  const stagedOpps = globalStagingQueue.getStagedOpportunities();
  const stagedTenders = globalStagingQueue.getStagedTenders();

  return (
    <div className="p-4 sm:p-8 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Admin Ingestion Engine</h1>
          <p className="text-sm text-slate-600 mt-1">
            Large-batch Opportunity &amp; Tender ingestion pipeline. Scalable to 10K+ Opportunities &amp; 100K+ Tenders.
          </p>
        </div>
        <div className="mt-3 sm:mt-0 flex items-center space-x-2">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
            Auto-Publish: Disabled
          </span>
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200">
            Batch Size: 1,000
          </span>
        </div>
      </div>

      <div className="flex space-x-2 mb-6 border-b border-slate-200">
        <button
          onClick={() => setActiveTab('batch')}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === 'batch'
              ? 'border-b-2 border-blue-600 text-blue-700 font-semibold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Large-Batch Ingestion
        </button>
        <button
          onClick={() => setActiveTab('manual')}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === 'manual'
              ? 'border-b-2 border-blue-600 text-blue-700 font-semibold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          IIG Manual Capture
        </button>
        <button
          onClick={() => setActiveTab('staged')}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === 'staged'
              ? 'border-b-2 border-blue-600 text-blue-700 font-semibold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Staged Queue ({stagedOpps.length + stagedTenders.length})
        </button>
      </div>

      {activeTab === 'batch' && (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Target Catalogue</label>
            <select
              value={targetCatalog}
              onChange={(e) => setTargetCatalog(e.target.value as any)}
              className="w-full sm:w-80 border border-slate-300 p-2.5 rounded-lg text-sm bg-slate-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="Opportunities">Opportunities (India Investment Grid / IIG)</option>
              <option value="Tenders">Tenders (CPPP / GeM / eProcure)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Select Real Source-Backed File (CSV or JSON Array)
            </label>
            <p className="text-xs text-slate-500 mb-2">
              Supports 1,000+ records per batch. Processes in memory-efficient chunks with progress feedback.
            </p>
            <input
              type="file"
              accept=".csv,.json"
              onChange={handleFileChange}
              disabled={isProcessing}
              className="block w-full text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-5 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-slate-400 font-medium">Or Paste Direct Content</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Paste JSON Array or CSV Text
            </label>
            <textarea
              value={jsonPaste}
              onChange={(e) => setJsonPaste(e.target.value)}
              disabled={isProcessing}
              className="w-full border border-slate-300 p-3 rounded-lg font-mono text-xs text-slate-800 bg-slate-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows={5}
              placeholder={
                targetCatalog === 'Opportunities'
                  ? `[{"projectId": "IIG-2026-001", "title": "...", "description": "...", "authority": "...", "category": "...", "sourceName": "India Investment Grid", "sourceUrl": "https://indiainvestmentgrid.gov.in/project/1", "deadline": "2026-12-31"}]`
                  : `[{"id": "CPPP-2026-001", "title": "...", "description": "...", "authority": "...", "category": "...", "sourceName": "CPPP eProcure", "sourceUrl": "https://eprocure.gov.in/tender/1", "tenderValue": "₹10 Crores", "submissionDeadline": "2026-11-30", "location": "New Delhi"}]`
              }
            />
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3.5 text-xs text-amber-800 flex items-start space-x-2">
            <span className="font-bold shrink-0">STAGING SAFETY PIPELINE:</span>
            <span>
              IMPORT → VALIDATE → DEDUPLICATE → STAGE → REVIEW → PUBLISH.
              All records will be safely queued into the Staging Queue. Never overwrites published records. Auto-publish remains disabled.
            </span>
          </div>

          {errorMsg && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-xs text-red-700 font-medium">
              {errorMsg}
            </div>
          )}

          {isProcessing && progress && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-2">
              <div className="flex justify-between text-xs font-semibold text-blue-900">
                <span>Processing batch chunk...</span>
                <span>{progress.processed} / {progress.total} records ({progress.percent}%)</span>
              </div>
              <div className="w-full bg-blue-200 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                  style={{ width: `${progress.percent}%` }}
                />
              </div>
            </div>
          )}

          <div className="pt-2">
            <button
              onClick={handleImport}
              disabled={isProcessing}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold text-white transition-colors shadow-sm ${
                isProcessing
                  ? 'bg-slate-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
              }`}
            >
              {isProcessing ? 'Ingesting In Chunks...' : 'Run Large-Batch Ingestion'}
            </button>
          </div>
        </div>
      )}

      {activeTab === 'manual' && <IIGManualCaptureForm />}

      {activeTab === 'staged' && (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Staging Queue</h2>
            <div className="space-x-2">
              <button
                onClick={() => {
                  globalStagingQueue.clear();
                  setResult(null);
                }}
                className="text-xs text-red-600 hover:text-red-800 font-semibold px-3 py-1.5 border border-red-200 rounded"
              >
                Clear Queue
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">
                Staged Opportunities ({stagedOpps.length})
              </h3>
              {stagedOpps.length === 0 ? (
                <p className="text-xs text-slate-500 italic">No opportunities currently staged.</p>
              ) : (
                <div className="max-h-60 overflow-y-auto border border-slate-200 rounded divide-y divide-slate-100 text-xs">
                  {stagedOpps.slice(0, 50).map((opp, i) => (
                    <div key={opp.id || i} className="p-2.5 flex justify-between items-center hover:bg-slate-50">
                      <div>
                        <div className="font-semibold text-slate-800">{opp.title}</div>
                        <div className="text-slate-500">Project ID: {opp.projectId} | {opp.authority} | {opp.category}</div>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">
                        {opp.verificationStatus}
                      </span>
                    </div>
                  ))}
                  {stagedOpps.length > 50 && (
                    <div className="p-2 text-center text-slate-400 italic">
                      + {stagedOpps.length - 50} more records in queue
                    </div>
                  )}
                </div>
              )}
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">
                Staged Tenders ({stagedTenders.length})
              </h3>
              {stagedTenders.length === 0 ? (
                <p className="text-xs text-slate-500 italic">No tenders currently staged.</p>
              ) : (
                <div className="max-h-60 overflow-y-auto border border-slate-200 rounded divide-y divide-slate-100 text-xs">
                  {stagedTenders.slice(0, 50).map((tnd, i) => (
                    <div key={tnd.id || i} className="p-2.5 flex justify-between items-center hover:bg-slate-50">
                      <div>
                        <div className="font-semibold text-slate-800">{tnd.title}</div>
                        <div className="text-slate-500">Ref ID: {tnd.id} | {tnd.authority} | {tnd.tenderValue}</div>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">
                        {tnd.verificationStatus}
                      </span>
                    </div>
                  ))}
                  {stagedTenders.length > 50 && (
                    <div className="p-2 text-center text-slate-400 italic">
                      + {stagedTenders.length - 50} more records in queue
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Structured Import Summary specified by requirements */}
      {result && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-slate-200 space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-lg font-bold text-slate-900">Import Summary</h2>
            <p className="text-xs text-slate-500">Batch ID: {result.batchId}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
              <div className="text-xs font-semibold text-slate-500">INPUT:</div>
              <div className="text-2xl font-bold text-slate-800">{result.totalReceived}</div>
            </div>
            <div className="bg-emerald-50 p-3.5 rounded-lg border border-emerald-200">
              <div className="text-xs font-semibold text-emerald-700">VALID:</div>
              <div className="text-2xl font-bold text-emerald-800">
                {result.totalReceived - result.validationFailed}
              </div>
            </div>
            <div className="bg-red-50 p-3.5 rounded-lg border border-red-200">
              <div className="text-xs font-semibold text-red-700">INVALID:</div>
              <div className="text-2xl font-bold text-red-800">{result.validationFailed}</div>
            </div>
            <div className="bg-amber-50 p-3.5 rounded-lg border border-amber-200">
              <div className="text-xs font-semibold text-amber-700">DUPLICATES:</div>
              <div className="text-2xl font-bold text-amber-800">{result.duplicatesDetected}</div>
            </div>
            <div className="bg-blue-50 p-3.5 rounded-lg border border-blue-200">
              <div className="text-xs font-semibold text-blue-700">NEW:</div>
              <div className="text-2xl font-bold text-blue-800">{result.successfullyStaged}</div>
            </div>
            <div className="bg-purple-50 p-3.5 rounded-lg border border-purple-200">
              <div className="text-xs font-semibold text-purple-700">STAGED:</div>
              <div className="text-2xl font-bold text-purple-800">{result.successfullyStaged}</div>
            </div>
          </div>

          <div className="bg-slate-50 p-3 rounded text-xs text-slate-600 flex items-center justify-between border">
            <div>
              <span className="font-semibold">Auto-Publish:</span> Disabled (Staged records require human review before publishing)
            </div>
            <div>
              <span className="font-semibold">Published:</span> 0 (Existing catalogue protected)
            </div>
          </div>

          {result.errors && result.errors.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">
                Failed Records / Reasons ({result.errors.length})
              </h3>
              <div className="max-h-56 overflow-y-auto border border-red-200 rounded-lg divide-y divide-red-100 bg-red-50/40 text-xs">
                {result.errors.slice(0, 100).map((error, i) => (
                  <div key={i} className="p-2.5">
                    <span className="font-bold text-red-700">Record #{error.index + 1}:</span>{' '}
                    <span className="text-slate-800 font-medium">{error.title || 'Untitled'}</span> —{' '}
                    <span className="text-red-600">{error.message}</span>
                  </div>
                ))}
                {result.errors.length > 100 && (
                  <div className="p-2 text-center text-red-500 italic">
                    + {result.errors.length - 100} more error records
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
