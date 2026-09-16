import React, { useState, useEffect } from 'react';
import { BatchImporter } from '../ingestion/batchImporter';
import { PreImportAnalyzer } from '../ingestion/preImportAnalyzer';
import { parseImportFile } from '../ingestion/fileParsers';
import { BatchImportResult, PreImportSummary, ImportErrorDetail, ImportJobHistory, VerifiedSource } from '../ingestion/types';
import { IIGManualCaptureForm } from './IIGManualCaptureForm';
import { IIGBatchPaste } from './IIGBatchPaste';
import { TenderBatchPaste } from './TenderBatchPaste';
import { IIGCollectionWorkspace } from './IIGCollectionWorkspace';
import { BulkImportQueueTab } from './BulkImportQueueTab';
import { StagedRecordReview } from './StagedRecordReview';
import { opportunityRepository, tenderRepository } from '../infrastructure/repositories/InvestmentRepository';
import { globalStagingQueue } from '../ingestion/staging';
import { globalImportHistory } from '../ingestion/importHistoryStore';
import { globalSourceRegistry } from '../ingestion/sourceRegistry';
import { globalBulkImportQueue } from '../ingestion/queueManager';
import {
  UploadCloud,
  FileText,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  ShieldCheck,
  Download,
  Clock,
  Database,
  Layers,
  ArrowRight,
  RefreshCw,
  Lock,
  Unlock,
  AlertCircle,
  Calendar,
  Building,
  Check,
  ExternalLink,
  PlusCircle,
  Info,
  ListOrdered,
  ClipboardList
} from 'lucide-react';

export const AdminImport: React.FC = () => {
  // Admin authentication state
  const [isAdminAuthorized, setIsAdminAuthorized] = useState<boolean>(() => {
    return sessionStorage.getItem('sarkarsaathi_admin_authorized') === 'true';
  });
  const [adminPasscode, setAdminPasscode] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);

  // Active workflow tab
  const [activeTab, setActiveTab] = useState<'import' | 'queue' | 'review' | 'history' | 'workspace' | 'paste' | 'tender_paste' | 'manual' | 'registry'>('import');


  // Source Registry State
  const [registrySources, setRegistrySources] = useState<VerifiedSource[]>(() => globalSourceRegistry.getAllSources());
  const [selectedSourceId, setSelectedSourceId] = useState<string>('src-iig-portal');

  // New Source Registration Form State
  const [newSourceId, setNewSourceId] = useState('');
  const [newSourceName, setNewSourceName] = useState('');
  const [newAuthority, setNewAuthority] = useState('');
  const [newCatalogueType, setNewCatalogueType] = useState<'OPPORTUNITIES' | 'TENDERS' | 'BOTH'>('OPPORTUNITIES');
  const [newOfficialUrl, setNewOfficialUrl] = useState('');
  const [newAccessType, setNewAccessType] = useState<'API' | 'DOWNLOAD' | 'MANUAL_EXPORT' | 'ADMIN_UPLOAD' | 'UNKNOWN'>('ADMIN_UPLOAD');
  const [newVerificationStatus, setNewVerificationStatus] = useState<'VERIFIED' | 'UNVERIFIED' | 'NOT_AVAILABLE'>('VERIFIED');
  const [newNotes, setNewNotes] = useState('');
  const [registryFeedback, setRegistryFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Import configuration
  const [targetCatalog, setTargetCatalog] = useState<'Opportunities' | 'Tenders'>('Opportunities');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [sourceCategory, setSourceCategory] = useState<string>('India Investment Grid (IIG)');
  const [sourceAuthority, setSourceAuthority] = useState<string>('India Investment Grid (IIG)');
  const [sourceName, setSourceName] = useState<string>('India Investment Grid (IIG)');
  const [sourceUrl, setSourceUrl] = useState<string>('https://indiainvestmentgrid.gov.in');
  const [verificationDate, setVerificationDate] = useState<string>(() => new Date().toISOString().split('T')[0]);

  // Pre-Import analysis
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [preImportSummary, setPreImportSummary] = useState<PreImportSummary | null>(null);
  const [parsedRecords, setParsedRecords] = useState<Record<string, any>[] | null>(null);
  const [fileFormat, setFileFormat] = useState<string>('');

  // Staging / Import execution progress
  const [isStaging, setIsStaging] = useState(false);
  const [stagingProgress, setStagingProgress] = useState<{
    currentChunk: number;
    totalChunks: number;
    processed: number;
    total: number;
    remaining: number;
    percent: number;
    valid: number;
    invalid: number;
    duplicates: number;
    newStaged: number;
  } | null>(null);

  const [importResult, setImportResult] = useState<BatchImportResult | null>(null);
  const [activeJobId, setActiveJobId] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);

  // Publish state
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishFeedback, setPublishFeedback] = useState<string | null>(null);

  // Staged queue counts & list
  const [stagedOpps, setStagedOpps] = useState(() => globalStagingQueue.getStagedOpportunities());
  const [stagedTenders, setStagedTenders] = useState(() => globalStagingQueue.getStagedTenders());
  const [historyList, setHistoryList] = useState<ImportJobHistory[]>(() => globalImportHistory.getAll());

  // Refresh staged state
  const refreshStagedData = () => {
    setStagedOpps([...globalStagingQueue.getStagedOpportunities()]);
    setStagedTenders([...globalStagingQueue.getStagedTenders()]);
    setHistoryList([...globalImportHistory.getAll()]);
  };

  // Handle source change from registry
  const handleSourceSelect = (srcId: string) => {
    setSelectedSourceId(srcId);
    const src = globalSourceRegistry.getSourceById(srcId);
    if (src) {
      setSourceName(src.sourceName);
      setSourceAuthority(src.authority);
      setSourceUrl(src.officialUrl);
      setSourceCategory(src.sourceName);
      setStatusMessage(null);
    }
  };

  useEffect(() => {
    if (targetCatalog === 'Opportunities') {
      const defaultSrc = globalSourceRegistry.getSourceById('src-iig-portal') || registrySources.find(s => s.catalogueType === 'OPPORTUNITIES' || s.catalogueType === 'BOTH');
      if (defaultSrc) {
        setSelectedSourceId(defaultSrc.sourceId);
        setSourceCategory(defaultSrc.sourceName);
        setSourceAuthority(defaultSrc.authority);
        setSourceName(defaultSrc.sourceName);
        setSourceUrl(defaultSrc.officialUrl);
      }
    } else {
      const defaultSrc = globalSourceRegistry.getSourceById('src-cppp-eprocure') || registrySources.find(s => s.catalogueType === 'TENDERS' || s.catalogueType === 'BOTH');
      if (defaultSrc) {
        setSelectedSourceId(defaultSrc.sourceId);
        setSourceCategory(defaultSrc.sourceName);
        setSourceAuthority(defaultSrc.authority);
        setSourceName(defaultSrc.sourceName);
        setSourceUrl(defaultSrc.officialUrl);
      }
    }
  }, [targetCatalog]);

  // Handle registering a new source into Verified Source Registry
  const handleRegisterNewSource = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistryFeedback(null);
    const result = globalSourceRegistry.registerSource({
      sourceId: newSourceId.trim(),
      sourceName: newSourceName.trim(),
      authority: newAuthority.trim(),
      catalogueType: newCatalogueType,
      officialUrl: newOfficialUrl.trim(),
      accessType: newAccessType,
      verificationStatus: newVerificationStatus,
      notes: newNotes.trim(),
      lastVerified: new Date().toISOString().split('T')[0]
    });

    if (result.success) {
      setRegistryFeedback({
        type: 'success',
        text: `Source '${newSourceName.trim()}' (${newSourceId.trim()}) successfully registered into Verified Source Registry.`
      });
      setRegistrySources([...globalSourceRegistry.getAllSources()]);
      // Clear form
      setNewSourceId('');
      setNewSourceName('');
      setNewAuthority('');
      setNewOfficialUrl('');
      setNewNotes('');
    } else {
      setRegistryFeedback({
        type: 'error',
        text: result.error || 'Failed to register source.'
      });
    }
  };

  // Admin Authentication Handlers
  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Verify admin credentials
    if (adminPasscode.trim() === 'sarkarsaathi-admin' || adminPasscode.trim() === 'admin2026') {
      sessionStorage.setItem('sarkarsaathi_admin_authorized', 'true');
      setIsAdminAuthorized(true);
      setAuthError(null);
      setAdminPasscode('');
    } else {
      setAuthError('Invalid administrator authorization passcode. Access denied.');
    }
  };

  const handleAdminLogout = () => {
    sessionStorage.removeItem('sarkarsaathi_admin_authorized');
    setIsAdminAuthorized(false);
    setSelectedFile(null);
    setPreImportSummary(null);
    setParsedRecords(null);
  };

  // File selection & validation
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatusMessage(null);
    setPreImportSummary(null);
    setParsedRecords(null);
    setImportResult(null);

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const ext = file.name.split('.').pop()?.toLowerCase();
      if (ext !== 'csv' && ext !== 'json' && ext !== 'xml') {
        setStatusMessage({
          type: 'error',
          text: 'Invalid file extension. Please select a verified .csv, .json, or .xml file.'
        });
        setSelectedFile(null);
        return;
      }
      if (file.size > 50 * 1024 * 1024) {
        setStatusMessage({
          type: 'error',
          text: 'File exceeds 50MB safety limit. Please split the batch or select a smaller file.'
        });
        setSelectedFile(null);
        return;
      }
      setSelectedFile(file);
    }
  };

  // Step 1: Parse & Pre-Import Validation Analysis
  const handleAnalyzeFile = async () => {
    if (!selectedFile) {
      setStatusMessage({ type: 'error', text: 'Please select a CSV, JSON, or XML file first.' });
      return;
    }

    // Check source registry availability
    const avail = globalSourceRegistry.isSourceAvailableForImport(selectedSourceId);
    if (!avail.available) {
      setStatusMessage({
        type: 'error',
        text: avail.reason || 'Selected source is marked as NOT_AVAILABLE. Ingestion from this source is disabled.'
      });
      return;
    }

    if (!sourceAuthority.trim()) {
      setStatusMessage({ type: 'error', text: 'Source Authority is required for official data ingestion.' });
      return;
    }

    if (!sourceName.trim()) {
      setStatusMessage({ type: 'error', text: 'Source Name is required for official data ingestion.' });
      return;
    }

    if (!sourceUrl.trim()) {
      setStatusMessage({ type: 'error', text: 'Source Verification URL is required for official data ingestion.' });
      return;
    }

    if (!verificationDate.trim()) {
      setStatusMessage({ type: 'error', text: 'Verification Date is required for official data ingestion.' });
      return;
    }

    setIsAnalyzing(true);
    setStatusMessage(null);
    setPreImportSummary(null);
    setParsedRecords(null);

    try {
      const parsed = await parseImportFile(selectedFile);
      setFileFormat(parsed.format);

      if (!parsed.records || parsed.records.length === 0) {
        throw new Error('No valid records found in the uploaded file.');
      }

      // Fill source provenance requirements on individual records
      const normalizedRecords = parsed.records.map(rec => ({
        ...rec,
        sourceAuthority: rec.sourceAuthority || sourceAuthority.trim(),
        sourceName: rec.sourceName || sourceName.trim(),
        sourceUrl: rec.sourceUrl || sourceUrl.trim(),
        verificationDate: rec.verificationDate || verificationDate.trim()
      }));

      setParsedRecords(normalizedRecords);

      const analyzer = new PreImportAnalyzer(
        opportunityRepository.getAll(),
        tenderRepository.getAll()
      );

      let summary: PreImportSummary;
      if (targetCatalog === 'Opportunities') {
        summary = analyzer.analyzeOpportunities(normalizedRecords);
      } else {
        summary = analyzer.analyzeTenders(normalizedRecords);
      }

      setPreImportSummary(summary);
      setStatusMessage({
        type: 'info',
        text: `Analysis complete: ${summary.totalInput} records evaluated. ${summary.newRecords} new records ready for staging.`
      });
    } catch (err: any) {
      setStatusMessage({
        type: 'error',
        text: err?.message || 'Failed to parse and analyze file.'
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Step 2: Chunked Staging Execution (1,000 records per chunk)
  const handleStageRecords = async () => {
    if (!parsedRecords || parsedRecords.length === 0) {
      setStatusMessage({ type: 'error', text: 'No parsed records available to stage.' });
      return;
    }

    setIsStaging(true);
    setStatusMessage(null);
    setImportResult(null);

    const batchId = `job-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
    setActiveJobId(batchId);

    const chunkSize = 1000;
    const totalRecords = parsedRecords.length;
    const totalChunks = Math.ceil(totalRecords / chunkSize);

    setStagingProgress({
      currentChunk: 1,
      totalChunks,
      processed: 0,
      total: totalRecords,
      remaining: totalRecords,
      percent: 0,
      valid: 0,
      invalid: 0,
      duplicates: 0,
      newStaged: 0
    });

    try {
      const importer = new BatchImporter(
        opportunityRepository.getAll(),
        tenderRepository.getAll()
      );

      let result: BatchImportResult;

      if (targetCatalog === 'Opportunities') {
        result = await importer.importOpportunityBatch(
          {
            batchId,
            sourceSystem: sourceName,
            sourceId: selectedSourceId,
            records: parsedRecords,
            autoApproveVerified: false // Auto-publish strictly disabled
          },
          {
            chunkSize,
            onProgress: (processed, total, chunkIdx) => {
              const percent = Math.round((processed / total) * 100);
              setStagingProgress({
                currentChunk: chunkIdx,
                totalChunks,
                processed,
                total,
                remaining: total - processed,
                percent,
                valid: preImportSummary ? preImportSummary.validRecords : processed,
                invalid: preImportSummary ? preImportSummary.invalidRecords : 0,
                duplicates: preImportSummary ? preImportSummary.duplicateRecords : 0,
                newStaged: preImportSummary ? preImportSummary.newRecords : processed
              });
            }
          }
        );
      } else {
        result = await importer.importTenderBatch(
          {
            batchId,
            sourceSystem: sourceName,
            sourceId: selectedSourceId,
            records: parsedRecords,
            autoApproveVerified: false // Auto-publish strictly disabled
          },
          {
            chunkSize,
            onProgress: (processed, total, chunkIdx) => {
              const percent = Math.round((processed / total) * 100);
              setStagingProgress({
                currentChunk: chunkIdx,
                totalChunks,
                processed,
                total,
                remaining: total - processed,
                percent,
                valid: preImportSummary ? preImportSummary.validRecords : processed,
                invalid: preImportSummary ? preImportSummary.invalidRecords : 0,
                duplicates: preImportSummary ? preImportSummary.duplicateRecords : 0,
                newStaged: preImportSummary ? preImportSummary.newRecords : processed
              });
            }
          }
        );
      }

      setImportResult(result);

      // Record job in Import History with Source Registry Linkage
      const selectedSrc = globalSourceRegistry.getSourceById(selectedSourceId);
      const historyEntry: ImportJobHistory = {
        id: batchId,
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST',
        targetCatalogue: targetCatalog,
        sourceId: selectedSourceId,
        sourceName,
        sourceUrl,
        accessType: selectedSrc?.accessType || 'ADMIN_UPLOAD',
        inputCount: result.totalReceived,
        validCount: result.totalReceived - result.validationFailed,
        duplicateCount: result.duplicatesDetected,
        stagedCount: result.successfullyStaged,
        publishedCount: 0,
        status: 'STAGED'
      };
      globalImportHistory.addJob(historyEntry);

      refreshStagedData();

      setStatusMessage({
        type: 'success',
        text: `Successfully staged ${result.successfullyStaged} records. They are safely held in the Staging Queue for review before publishing.`
      });
    } catch (err: any) {
      setStatusMessage({
        type: 'error',
        text: `Staging error: ${err?.message || 'Error occurred during staging'}`
      });
    } finally {
      setIsStaging(false);
    }
  };

  // Step 3: Approve & Publish Control
  const handleApproveAll = () => {
    if (targetCatalog === 'Opportunities') {
      const count = globalStagingQueue.approveAllOpportunities();
      setPublishFeedback(`Approved ${count} staged opportunity record(s). Ready to publish.`);
    } else {
      const count = globalStagingQueue.approveAllTenders();
      setPublishFeedback(`Approved ${count} staged tender record(s). Ready to publish.`);
    }
    refreshStagedData();
  };

  const handlePublishApproved = () => {
    setIsPublishing(true);
    setPublishFeedback(null);

    try {
      if (targetCatalog === 'Opportunities') {
        const res = globalStagingQueue.publishApprovedOpportunities(opportunityRepository);
        if (res.published > 0) {
          if (activeJobId) {
            globalImportHistory.updateJobPublishedCount(activeJobId, res.published);
          }
          setPublishFeedback(
            `Published ${res.published} approved Opportunity records to live catalogue. Skipped ${res.skipped} existing records.`
          );
        } else {
          setPublishFeedback(
            'No records were published. Ensure staged records are approved (VERIFIED) before publishing.'
          );
        }
      } else {
        const res = globalStagingQueue.publishApprovedTenders(tenderRepository);
        if (res.published > 0) {
          if (activeJobId) {
            globalImportHistory.updateJobPublishedCount(activeJobId, res.published);
          }
          setPublishFeedback(
            `Published ${res.published} approved Tender records to live catalogue. Skipped ${res.skipped} existing records.`
          );
        } else {
          setPublishFeedback(
            'No records were published. Ensure staged records are approved (VERIFIED) before publishing.'
          );
        }
      }
      refreshStagedData();
    } catch (err: any) {
      setPublishFeedback(`Publication failed: ${err?.message || 'Error publishing records'}`);
    } finally {
      setIsPublishing(false);
    }
  };

  // Step 4: Export Error Report as CSV
  const handleExportErrorReport = () => {
    const errorsToExport: ImportErrorDetail[] =
      importResult?.errors || preImportSummary?.errors || [];

    if (errorsToExport.length === 0) {
      setStatusMessage({ type: 'info', text: 'No error records to export.' });
      return;
    }

    const headers = ['Record Number', 'Reference ID', 'Field', 'Failure Reason', 'Title'];
    const rows = errorsToExport.map(err => [
      `"${err.index + 1}"`,
      `"${(err.referenceId || '').replace(/"/g, '""')}"`,
      `"${(err.field || 'General').replace(/"/g, '""')}"`,
      `"${(err.reason || err.message || '').replace(/"/g, '""')}"`,
      `"${(err.title || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute(
      'download',
      `sarkarsaathi-import-errors-${targetCatalog.toLowerCase()}-${Date.now()}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // ADMIN AUTHORIZATION GATE
  if (!isAdminAuthorized) {
    return (
      <div className="max-w-xl mx-auto py-16 px-4">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-blue-50 text-blue-700 rounded-lg">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Admin-Only Import Center</h1>
              <p className="text-xs text-slate-500 mt-0.5">
                Authentication required to access production ingestion pipelines
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-600">
            The Import Center is restricted to authorized government dataset administrators to safeguard the existing production catalogues.
          </p>

          <form onSubmit={handleAdminLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Administrator Passcode
              </label>
              <input
                type="password"
                value={adminPasscode}
                onChange={(e) => setAdminPasscode(e.target.value)}
                placeholder="Enter administrative passcode"
                className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-lg bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {authError && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-colors flex items-center justify-center space-x-2 shadow-sm"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Verify &amp; Access Import Center</span>
            </button>
          </form>

          <div className="pt-4 border-t border-slate-100 text-center">
            <span className="text-[11px] text-slate-400">
              SarkarSaathi Production Data Protection Active (Read-Only Safeguards)
            </span>
          </div>
        </div>
      </div>
    );
  }

  const currentStagedCount = targetCatalog === 'Opportunities' ? stagedOpps.length : stagedTenders.length;

  return (
    <div className="p-4 sm:p-8 max-w-6xl mx-auto space-y-6">
      {/* Top Admin Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-200">
        <div>
          <div className="flex items-center space-x-2.5">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 mr-1" />
              Authorized Admin Session
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-100 text-amber-800 border border-amber-200">
              Auto-Publish: Disabled
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
            Production Import Center
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Scalable batch ingestion pipeline for official CSV, JSON, and XML datasets into Opportunities and Tenders.
          </p>
        </div>

        <div className="mt-4 sm:mt-0 flex items-center space-x-2">
          <button
            onClick={refreshStagedData}
            title="Refresh state"
            className="p-2 border border-slate-200 hover:bg-slate-100 rounded-lg text-slate-600 text-xs flex items-center space-x-1"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Refresh</span>
          </button>
          <button
            onClick={handleAdminLogout}
            className="px-3 py-1.5 border border-slate-300 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-700 flex items-center space-x-1.5"
          >
            <Unlock className="w-3.5 h-3.5 text-slate-500" />
            <span>Lock Session</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-2 border-b border-slate-200 overflow-x-auto text-sm">
        <button
          onClick={() => setActiveTab('import')}
          className={`px-4 py-2.5 font-medium whitespace-nowrap transition-colors flex items-center space-x-2 ${
            activeTab === 'import'
              ? 'border-b-2 border-blue-600 text-blue-700 font-semibold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <UploadCloud className="w-4 h-4" />
          <span>Batch File Ingestion</span>
        </button>
        <button
          onClick={() => setActiveTab('queue')}
          className={`px-4 py-2.5 font-medium whitespace-nowrap transition-colors flex items-center space-x-2 ${
            activeTab === 'queue'
              ? 'border-b-2 border-blue-600 text-blue-700 font-semibold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <ListOrdered className="w-4 h-4" />
          <span>Bulk Import Queue ({globalBulkImportQueue.getJobs().filter(j => j.status === 'QUEUED' || j.status === 'PROCESSING').length})</span>
        </button>
        <button
          onClick={() => setActiveTab('review')}
          className={`px-4 py-2.5 font-medium whitespace-nowrap transition-colors flex items-center space-x-2 ${
            activeTab === 'review'
              ? 'border-b-2 border-blue-600 text-blue-700 font-semibold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Review &amp; Publish Staged ({currentStagedCount})</span>
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className={`px-4 py-2.5 font-medium whitespace-nowrap transition-colors flex items-center space-x-2 ${
            activeTab === 'history'
              ? 'border-b-2 border-blue-600 text-blue-700 font-semibold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Clock className="w-4 h-4" />
          <span>Import History &amp; Audit ({historyList.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('workspace')}
          className={`px-4 py-2.5 font-medium whitespace-nowrap transition-colors flex items-center space-x-2 ${
            activeTab === 'workspace'
              ? 'border-b-2 border-blue-600 text-blue-700 font-semibold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Building className="w-4 h-4" />
          <span>IIG Collection Workspace</span>
        </button>
        <button
          onClick={() => setActiveTab('paste')}
          className={`px-4 py-2.5 font-medium whitespace-nowrap transition-colors flex items-center space-x-2 ${
            activeTab === 'paste'
              ? 'border-b-2 border-blue-600 text-blue-700 font-semibold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <ClipboardList className="w-4 h-4" />
          <span>IIG Batch Paste</span>
        </button>
        <button
          onClick={() => setActiveTab('tender_paste')}
          className={`px-4 py-2.5 font-medium whitespace-nowrap transition-colors flex items-center space-x-2 ${
            activeTab === 'tender_paste'
              ? 'border-b-2 border-indigo-600 text-indigo-700 font-semibold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Tender Batch Paste</span>
        </button>
        <button
          onClick={() => setActiveTab('manual')}
          className={`px-4 py-2.5 font-medium whitespace-nowrap transition-colors flex items-center space-x-2 ${
            activeTab === 'manual'
              ? 'border-b-2 border-blue-600 text-blue-700 font-semibold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>IIG Manual Capture</span>
        </button>
        <button
          onClick={() => setActiveTab('registry')}
          className={`px-4 py-2.5 font-medium whitespace-nowrap transition-colors flex items-center space-x-2 ${
            activeTab === 'registry'
              ? 'border-b-2 border-blue-600 text-blue-700 font-semibold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Building className="w-4 h-4" />
          <span>Verified Source Registry ({registrySources.length})</span>
        </button>
      </div>

      {/* Status Messages */}
      {statusMessage && (
        <div
          className={`p-4 rounded-lg text-sm flex items-start space-x-3 border ${
            statusMessage.type === 'success'
              ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
              : statusMessage.type === 'error'
              ? 'bg-red-50 border-red-200 text-red-800'
              : 'bg-blue-50 border-blue-200 text-blue-800'
          }`}
        >
          {statusMessage.type === 'success' ? (
            <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-600" />
          ) : statusMessage.type === 'error' ? (
            <XCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-600" />
          ) : (
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-blue-600" />
          )}
          <div className="flex-1">{statusMessage.text}</div>
        </div>
      )}

      {/* TAB 1: BATCH FILE INGESTION */}
      {activeTab === 'import' && (
        <div className="space-y-6">
          {/* REAL DATA INGESTION GATE BANNER */}
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-6 rounded-xl border border-blue-800 shadow-md">
            <div className="flex items-start justify-between">
              <div className="space-y-2 max-w-3xl">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-6 h-6 text-blue-300" />
                  <h2 className="text-lg font-bold tracking-tight text-white uppercase">
                    Official Real Data Ingestion Gate
                  </h2>
                  <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[11px] px-2.5 py-0.5 rounded-full font-semibold">
                    GATE ACTIVE
                  </span>
                </div>
                <p className="text-sm text-blue-100 leading-relaxed">
                  Before ingesting any dataset, verify that the file originates from an authorized government or official statutory source.
                  The ingestion pipeline operates under strict zero-fabrication protocols:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-blue-200 pt-1">
                  <div className="flex items-center space-x-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span><strong>Admin-Supplied Only:</strong> No automatic web scraping</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span><strong>Zero Invention:</strong> No simulated or sample records</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span><strong>Strict Provenance:</strong> Authority, URL &amp; verification date logged</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span><strong>No Direct Publish:</strong> Staged &rarr; Review &rarr; Approved &rarr; Published</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Config & File Selection Card */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
                1. Select Official Source &amp; Ingestion Target
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Choose the designated target catalogue and declare verifiable official origin metadata.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Target Catalogue */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Target Catalogue
                </label>
                <select
                  value={targetCatalog}
                  onChange={(e) => {
                    setTargetCatalog(e.target.value as any);
                    setPreImportSummary(null);
                    setParsedRecords(null);
                    setImportResult(null);
                  }}
                  className="w-full border border-slate-300 p-2.5 rounded-lg text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none font-medium"
                >
                  <option value="Opportunities">Opportunities (e.g. IIG, Grants)</option>
                  <option value="Tenders">Tenders (e.g. CPPP, GeM)</option>
                </select>
              </div>

              {/* Verified Source Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Verified Source Registry Reference
                </label>
                <select
                  value={selectedSourceId}
                  onChange={(e) => handleSourceSelect(e.target.value)}
                  className="w-full border border-slate-300 p-2.5 rounded-lg text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none font-medium"
                >
                  {registrySources
                    .filter(s => s.catalogueType === (targetCatalog === 'Opportunities' ? 'OPPORTUNITIES' : 'TENDERS') || s.catalogueType === 'BOTH')
                    .map(src => (
                      <option key={src.sourceId} value={src.sourceId}>
                        {src.sourceName} [{src.verificationStatus} - {src.accessType}]
                      </option>
                    ))}
                </select>
              </div>
            </div>

            {/* Selected Source Provenance Metadata Card */}
            {(() => {
              const src = globalSourceRegistry.getSourceById(selectedSourceId);
              const isAvail = globalSourceRegistry.isSourceAvailableForImport(selectedSourceId);
              if (!src) return null;
              return (
                <div className={`p-4 rounded-lg border text-xs space-y-2 ${
                  !isAvail.available
                    ? 'bg-amber-50/80 border-amber-300 text-amber-900'
                    : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="font-bold flex items-center space-x-2">
                      <Building className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{src.sourceName}</span>
                      <span className="font-mono text-[11px] text-slate-500">({src.sourceId})</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <span className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                        src.verificationStatus === 'VERIFIED'
                          ? 'bg-emerald-100 text-emerald-800'
                          : src.verificationStatus === 'NOT_AVAILABLE'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {src.verificationStatus}
                      </span>
                      <span className="px-2 py-0.5 rounded font-bold text-[10px] bg-blue-100 text-blue-800">
                        ACCESS: {src.accessType}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-600">
                    <div><strong>Authority:</strong> {src.authority}</div>
                    <div>
                      <strong>Official Portal:</strong>{' '}
                      <a href={src.officialUrl} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline inline-flex items-center space-x-0.5">
                        <span>{src.officialUrl}</span>
                        <ExternalLink className="w-3 h-3 ml-0.5 inline" />
                      </a>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-600">
                    <strong>Registry Notes:</strong> {src.notes}
                  </div>

                  {!isAvail.available && (
                    <div className="mt-2 p-2.5 bg-red-100 border border-red-300 rounded text-red-800 font-medium flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                      <span><strong>Intake Blocked:</strong> {isAvail.reason}</span>
                    </div>
                  )}
                </div>
              );
            })()}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
              {/* Source Authority */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Source Authority
                </label>
                <input
                  type="text"
                  value={sourceAuthority}
                  onChange={(e) => setSourceAuthority(e.target.value)}
                  placeholder="e.g. DPIIT / Ministry of Commerce & Industry"
                  className="w-full border border-slate-300 p-2.5 rounded-lg text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Source Verification URL */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Source Verification URL
                </label>
                <input
                  type="url"
                  value={sourceUrl}
                  onChange={(e) => setSourceUrl(e.target.value)}
                  placeholder="https://indiainvestmentgrid.gov.in"
                  className="w-full border border-slate-300 p-2.5 rounded-lg text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Verification Date */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Verification Date
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="date"
                    value={verificationDate}
                    onChange={(e) => setVerificationDate(e.target.value)}
                    className="w-full border border-slate-300 pl-9 pr-3 p-2.5 rounded-lg text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Schema Template Downloads */}
            <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-4 text-xs space-y-2">
              <div className="flex items-center space-x-2 font-bold text-amber-900">
                <FileText className="w-4 h-4 text-amber-700" />
                <span>Official Opportunity Schema Templates (SAMPLE)</span>
              </div>
              <p className="text-slate-600 text-[11px]">
                Download example schema templates to format official source datasets correctly. <strong>Clearly marked as SAMPLE and never inserted automatically into production.</strong>
              </p>
              <div className="flex items-center space-x-3 pt-1">
                <a
                  href="/sample_opportunity_import.json"
                  download="sample_opportunity_import.json"
                  className="px-3 py-1.5 bg-white hover:bg-amber-100 text-amber-900 rounded-lg border border-amber-300 font-semibold flex items-center space-x-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download sample_opportunity_import.json</span>
                </a>
                <a
                  href="/sample_opportunity_import.csv"
                  download="sample_opportunity_import.csv"
                  className="px-3 py-1.5 bg-white hover:bg-amber-100 text-amber-900 rounded-lg border border-amber-300 font-semibold flex items-center space-x-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download sample_opportunity_import.csv</span>
                </a>
              </div>
            </div>

            {/* File Upload Zone */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                4. Select Official Source File (CSV, JSON, or XML)
              </label>
              <div className="border-2 border-dashed border-slate-300 hover:border-blue-500 rounded-xl p-6 text-center bg-slate-50/50 hover:bg-blue-50/20 transition-all">
                <UploadCloud className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                <p className="text-sm font-medium text-slate-700">
                  {selectedFile ? (
                    <span className="text-blue-700 font-semibold">Selected: {selectedFile.name} ({(selectedFile.size / 1024).toFixed(1)} KB)</span>
                  ) : (
                    'Click to browse or drag and drop official dataset file'
                  )}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Supported formats: CSV, JSON array, or XML document (up to 50MB per file)
                </p>
                <input
                  type="file"
                  accept=".csv,.json,.xml"
                  onChange={handleFileChange}
                  disabled={isAnalyzing || isStaging}
                  className="mt-4 inline-block text-xs text-slate-500 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
                />
              </div>
            </div>

            {/* Safety Pipeline Banner */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3.5 text-xs text-slate-600 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>
                  <strong>Workflow:</strong> SELECT FILE &rarr; PARSE &rarr; VALIDATE &rarr; DEDUPLICATE &rarr; STAGE &rarr; REVIEW &rarr; PUBLISH.
                </span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500">
                Auto-Publish Disabled | Zero Production Overwrite
              </span>
            </div>

            {/* Analyze Action */}
            <div className="flex items-center space-x-3 pt-2">
              <button
                onClick={handleAnalyzeFile}
                disabled={!selectedFile || isAnalyzing || isStaging || !globalSourceRegistry.isSourceAvailableForImport(selectedSourceId).available}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-colors flex items-center space-x-2 shadow-sm ${
                  !selectedFile || isAnalyzing || isStaging || !globalSourceRegistry.isSourceAvailableForImport(selectedSourceId).available
                    ? 'bg-slate-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
                }`}
              >
                {isAnalyzing ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Analyzing File...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    <span>Analyze &amp; Pre-Validate File</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* PRE-IMPORT SUMMARY CARD (Requirement 4) */}
          {preImportSummary && (
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Pre-Import Summary</h2>
                  <p className="text-xs text-slate-500">
                    Format: {fileFormat} | Target: {targetCatalog} | Evaluated: {preImportSummary.totalInput} records
                  </p>
                </div>
                <div className="mt-2 sm:mt-0 flex items-center space-x-2">
                  {preImportSummary.errors.length > 0 && (
                    <button
                      onClick={handleExportErrorReport}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-colors border border-slate-300"
                    >
                      <Download className="w-3.5 h-3.5 text-slate-600" />
                      <span>Export Error Report (CSV)</span>
                    </button>
                  )}
                </div>
              </div>

              {/* 6 Required Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="text-xs font-semibold text-slate-500">TOTAL INPUT:</div>
                  <div className="text-2xl font-bold text-slate-900 mt-1">{preImportSummary.totalInput}</div>
                </div>

                <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
                  <div className="text-xs font-semibold text-emerald-700">VALID:</div>
                  <div className="text-2xl font-bold text-emerald-800 mt-1">{preImportSummary.validRecords}</div>
                </div>

                <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                  <div className="text-xs font-semibold text-red-700">INVALID:</div>
                  <div className="text-2xl font-bold text-red-800 mt-1">{preImportSummary.invalidRecords}</div>
                </div>

                <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                  <div className="text-xs font-semibold text-amber-700">DUPLICATES:</div>
                  <div className="text-2xl font-bold text-amber-800 mt-1">{preImportSummary.duplicateRecords}</div>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                  <div className="text-xs font-semibold text-blue-700">NEW RECORDS:</div>
                  <div className="text-2xl font-bold text-blue-800 mt-1">{preImportSummary.newRecords}</div>
                </div>

                <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
                  <div className="text-xs font-semibold text-purple-700">REQUIRING REVIEW:</div>
                  <div className="text-2xl font-bold text-purple-800 mt-1">{preImportSummary.requiringReview}</div>
                </div>
              </div>

              {/* Error Breakdown if any */}
              {preImportSummary.errors.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center space-x-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                      <span>Detected Issues ({preImportSummary.errors.length} records)</span>
                    </h3>
                  </div>
                  <div className="max-h-48 overflow-y-auto border border-slate-200 rounded-lg divide-y divide-slate-100 bg-slate-50 text-xs">
                    {preImportSummary.errors.slice(0, 100).map((err, i) => (
                      <div key={i} className="p-2.5 flex items-start justify-between">
                        <div>
                          <span className="font-bold text-slate-800">Record #{err.index + 1}:</span>{' '}
                          <span className="font-medium text-slate-900">{err.title}</span>
                          {err.field && <span className="ml-2 text-[10px] px-1.5 py-0.5 bg-slate-200 rounded text-slate-700 font-mono">Field: {err.field}</span>}
                          <div className="text-red-600 mt-0.5">{err.reason || err.message}</div>
                        </div>
                        {err.referenceId && (
                          <span className="text-[10px] text-slate-500 font-mono bg-white px-2 py-0.5 rounded border border-slate-200">
                            ID: {err.referenceId}
                          </span>
                        )}
                      </div>
                    ))}
                    {preImportSummary.errors.length > 100 && (
                      <div className="p-2 text-center text-slate-500 italic bg-white">
                        + {preImportSummary.errors.length - 100} more error records (export full CSV report)
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Trigger Staging Action */}
              <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                <div className="text-xs text-slate-500">
                  Clicking Proceed will place valid, non-duplicate records into the Staging Queue in chunks of 1,000.
                </div>
                <button
                  onClick={handleStageRecords}
                  disabled={preImportSummary.newRecords === 0 || isStaging}
                  className={`px-6 py-2.5 rounded-lg text-sm font-semibold text-white transition-colors flex items-center space-x-2 shadow-sm ${
                    preImportSummary.newRecords === 0 || isStaging
                      ? 'bg-slate-300 cursor-not-allowed'
                      : 'bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800'
                  }`}
                >
                  <Layers className="w-4 h-4" />
                  <span>Proceed to Stage {preImportSummary.newRecords} Records</span>
                </button>
              </div>
            </div>
          )}

          {/* IMPORT PROGRESS CARD (Requirement 5) */}
          {isStaging && stagingProgress && (
            <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-blue-900">
                    Chunked Import In Progress: Batch {stagingProgress.currentChunk} of {stagingProgress.totalChunks}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Processing 1,000 records per chunk. UI remains responsive during ingestion.
                  </p>
                </div>
                <span className="text-sm font-bold text-blue-700">{stagingProgress.percent}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden border border-slate-200">
                <div
                  className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${stagingProgress.percent}%` }}
                />
              </div>

              {/* Progress Metrics (Requirement 5: processed, remaining, valid, invalid, duplicates, new, failed) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 text-center text-xs">
                <div className="bg-slate-50 p-2 rounded border">
                  <span className="text-slate-500 block">Processed:</span>
                  <span className="font-bold text-slate-800">{stagingProgress.processed}</span>
                </div>
                <div className="bg-slate-50 p-2 rounded border">
                  <span className="text-slate-500 block">Remaining:</span>
                  <span className="font-bold text-slate-800">{stagingProgress.remaining}</span>
                </div>
                <div className="bg-emerald-50 p-2 rounded border border-emerald-200">
                  <span className="text-emerald-700 block">Valid:</span>
                  <span className="font-bold text-emerald-800">{stagingProgress.valid}</span>
                </div>
                <div className="bg-red-50 p-2 rounded border border-red-200">
                  <span className="text-red-700 block">Invalid:</span>
                  <span className="font-bold text-red-800">{stagingProgress.invalid}</span>
                </div>
                <div className="bg-amber-50 p-2 rounded border border-amber-200">
                  <span className="text-amber-700 block">Duplicates:</span>
                  <span className="font-bold text-amber-800">{stagingProgress.duplicates}</span>
                </div>
                <div className="bg-blue-50 p-2 rounded border border-blue-200">
                  <span className="text-blue-700 block">New:</span>
                  <span className="font-bold text-blue-800">{stagingProgress.newStaged}</span>
                </div>
                <div className="bg-slate-50 p-2 rounded border">
                  <span className="text-slate-500 block">Failed:</span>
                  <span className="font-bold text-slate-800">{stagingProgress.invalid + stagingProgress.duplicates}</span>
                </div>
              </div>
            </div>
          )}

          {/* STAGED RESULT CONFIRMATION */}
          {importResult && (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                  <div>
                    <h3 className="text-base font-bold text-emerald-900">
                      Staging Completed Successfully (Batch ID: {importResult.batchId})
                    </h3>
                    <p className="text-xs text-emerald-700 mt-0.5">
                      Successfully queued {importResult.successfullyStaged} records for review. Existing published records remain 100% untouched.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveTab('review')}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg flex items-center space-x-1.5 transition-colors shadow-sm"
                >
                  <span>Go to Review &amp; Publish</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB: BULK IMPORT QUEUE */}
      {activeTab === 'queue' && (
        <BulkImportQueueTab
          onNavigateToReview={() => setActiveTab('review')}
          onRefreshData={refreshStagedData}
        />
      )}

      {/* TAB 2: REVIEW & PUBLISH STAGED (Requirements 7 & 8) */}
      {activeTab === 'review' && (
        <StagedRecordReview
          targetCatalog={targetCatalog}
          onCatalogChange={(catalog) => setTargetCatalog(catalog)}
          onRefreshData={refreshStagedData}
        />
      )}

      {/* TAB 3: STAGED IMPORT HISTORY (Requirement 7) */}
      {activeTab === 'history' && (
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-lg font-bold text-slate-900">Staged Import History &amp; Audit Trail</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Complete audit log of all batch ingestion jobs with full provenance details.
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-lg">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                <tr>
                  <th className="p-3">Timestamp</th>
                  <th className="p-3">Target</th>
                  <th className="p-3">Source Name</th>
                  <th className="p-3 text-right">Input</th>
                  <th className="p-3 text-right">Valid</th>
                  <th className="p-3 text-right">Duplicates</th>
                  <th className="p-3 text-right">Staged</th>
                  <th className="p-3 text-right">Published</th>
                  <th className="p-3 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {historyList.map((job) => (
                  <tr key={job.id} className="hover:bg-slate-50/70">
                    <td className="p-3 text-slate-700 font-medium whitespace-nowrap">{job.timestamp}</td>
                    <td className="p-3 font-semibold text-slate-900">{job.targetCatalogue}</td>
                    <td className="p-3 text-slate-600 max-w-xs truncate">
                      <div>{job.sourceName}</div>
                      {job.sourceUrl && (
                        <div className="text-[10px] text-slate-400 truncate">{job.sourceUrl}</div>
                      )}
                    </td>
                    <td className="p-3 text-right font-mono text-slate-800">{job.inputCount}</td>
                    <td className="p-3 text-right font-mono text-emerald-700">{job.validCount}</td>
                    <td className="p-3 text-right font-mono text-amber-700">{job.duplicateCount}</td>
                    <td className="p-3 text-right font-mono text-blue-700">{job.stagedCount}</td>
                    <td className="p-3 text-right font-mono text-purple-700 font-bold">{job.publishedCount}</td>
                    <td className="p-3 text-center">
                      <span
                        className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          job.status === 'PUBLISHED'
                            ? 'bg-emerald-100 text-emerald-800'
                            : job.status === 'PARTIAL'
                            ? 'bg-blue-100 text-blue-800'
                            : job.status === 'STAGED'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {job.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 4: IIG COLLECTION WORKSPACE */}
      {activeTab === 'workspace' && <IIGCollectionWorkspace />}

      {/* TAB 5: IIG BATCH PASTE */}
      {activeTab === 'paste' && <IIGBatchPaste onStaged={refreshStagedData} />}

      {/* TAB 6: TENDER BATCH PASTE */}
      {activeTab === 'tender_paste' && <TenderBatchPaste onStaged={refreshStagedData} />}

      {/* TAB 7: IIG MANUAL CAPTURE FORM */}
      {activeTab === 'manual' && <IIGManualCaptureForm />}

      {/* TAB 5: VERIFIED SOURCE REGISTRY */}
      {activeTab === 'registry' && (
        <div className="space-y-6">
          {/* Registry Overview Card */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-2">
              <div>
                <div className="flex items-center space-x-2">
                  <Building className="w-5 h-5 text-blue-600" />
                  <h2 className="text-lg font-bold text-slate-900">Verified Source Registry</h2>
                  <span className="bg-blue-100 text-blue-800 text-[11px] font-bold px-2 py-0.5 rounded-full">
                    {registrySources.length} Sources Recorded
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Official registry of verified government data sources and statutory portals. Every real-data import job links to a registered source for full provenance.
                </p>
              </div>
            </div>

            {/* List of Registered Sources */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Registered Government &amp; Statutory Sources
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {registrySources.map((src) => (
                  <div
                    key={src.sourceId}
                    className={`p-4 rounded-xl border text-xs transition-all ${
                      src.verificationStatus === 'NOT_AVAILABLE'
                        ? 'bg-rose-50/40 border-rose-200'
                        : src.verificationStatus === 'VERIFIED'
                        ? 'bg-slate-50/60 border-slate-200 hover:border-blue-300'
                        : 'bg-amber-50/40 border-amber-200'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200/60">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-sm text-slate-900">{src.sourceName}</span>
                        <code className="text-[11px] px-1.5 py-0.5 bg-slate-200/70 text-slate-700 rounded font-mono">
                          {src.sourceId}
                        </code>
                      </div>
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 text-slate-800">
                          {src.catalogueType}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800">
                          ACCESS: {src.accessType}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            src.verificationStatus === 'VERIFIED'
                              ? 'bg-emerald-100 text-emerald-800'
                              : src.verificationStatus === 'NOT_AVAILABLE'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {src.verificationStatus}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-slate-600">
                      <div>
                        <strong>Authority:</strong> {src.authority}
                      </div>
                      <div>
                        <strong>Official URL:</strong>{' '}
                        <a
                          href={src.officialUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 hover:underline inline-flex items-center space-x-0.5"
                        >
                          <span className="truncate max-w-xs inline-block align-bottom">{src.officialUrl}</span>
                          <ExternalLink className="w-3 h-3 ml-0.5 shrink-0 inline" />
                        </a>
                      </div>
                    </div>

                    <div className="pt-2 text-slate-600 flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                      <div className="flex-1">
                        <strong>Intake Notes &amp; Policy:</strong> {src.notes}
                      </div>
                      <div className="text-slate-400 text-[11px] shrink-0">
                        Last Verified: {src.lastVerified}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Register New Source Form */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-5">
            <div className="border-b border-slate-200 pb-3">
              <div className="flex items-center space-x-2">
                <PlusCircle className="w-5 h-5 text-blue-600" />
                <h3 className="text-base font-bold text-slate-900">Register New Verified Government Source</h3>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Register a new statutory portal or ministry endpoint to allow verified data imports.
              </p>
            </div>

            {registryFeedback && (
              <div
                className={`p-3.5 rounded-lg text-xs font-medium flex items-center space-x-2 border ${
                  registryFeedback.type === 'success'
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                    : 'bg-red-50 border-red-200 text-red-800'
                }`}
              >
                {registryFeedback.type === 'success' ? (
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                ) : (
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                )}
                <span>{registryFeedback.text}</span>
              </div>
            )}

            <form onSubmit={handleRegisterNewSource} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Source ID */}
                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Source Identifier (Unique ID) *
                  </label>
                  <input
                    type="text"
                    value={newSourceId}
                    onChange={(e) => setNewSourceId(e.target.value)}
                    placeholder="e.g. src-state-invest-portal"
                    required
                    className="w-full border border-slate-300 p-2.5 rounded-lg bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <span className="text-[10px] text-slate-400 mt-0.5 block">Unique slug for registry tracking</span>
                </div>

                {/* Source Name */}
                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Source / Platform Name *
                  </label>
                  <input
                    type="text"
                    value={newSourceName}
                    onChange={(e) => setNewSourceName(e.target.value)}
                    placeholder="e.g. Haryana Enterprise Promotion Centre (HEPC)"
                    required
                    className="w-full border border-slate-300 p-2.5 rounded-lg bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Authority */}
                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Issuing Authority *
                  </label>
                  <input
                    type="text"
                    value={newAuthority}
                    onChange={(e) => setNewAuthority(e.target.value)}
                    placeholder="e.g. Government of Haryana / DPIIT"
                    required
                    className="w-full border border-slate-300 p-2.5 rounded-lg bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                {/* Target Catalogue */}
                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Catalogue Type *
                  </label>
                  <select
                    value={newCatalogueType}
                    onChange={(e) => setNewCatalogueType(e.target.value as any)}
                    className="w-full border border-slate-300 p-2.5 rounded-lg bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="OPPORTUNITIES">OPPORTUNITIES</option>
                    <option value="TENDERS">TENDERS</option>
                    <option value="BOTH">BOTH (Opportunities &amp; Tenders)</option>
                  </select>
                </div>

                {/* Access Type */}
                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Access Type *
                  </label>
                  <select
                    value={newAccessType}
                    onChange={(e) => setNewAccessType(e.target.value as any)}
                    className="w-full border border-slate-300 p-2.5 rounded-lg bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="ADMIN_UPLOAD">ADMIN_UPLOAD (Verified CSV/JSON upload)</option>
                    <option value="DOWNLOAD">DOWNLOAD (Public Portal Download)</option>
                    <option value="API">API (Verified REST Endpoint)</option>
                    <option value="MANUAL_EXPORT">MANUAL_EXPORT (Manual Statutory Export)</option>
                    <option value="UNKNOWN">UNKNOWN (Access not confirmed)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Official URL */}
                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Official Portal URL *
                  </label>
                  <input
                    type="url"
                    value={newOfficialUrl}
                    onChange={(e) => setNewOfficialUrl(e.target.value)}
                    placeholder="https://..."
                    required
                    className="w-full border border-slate-300 p-2.5 rounded-lg bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                {/* Verification Status */}
                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Verification Status *
                  </label>
                  <select
                    value={newVerificationStatus}
                    onChange={(e) => setNewVerificationStatus(e.target.value as any)}
                    className="w-full border border-slate-300 p-2.5 rounded-lg bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="VERIFIED">VERIFIED (Official government portal verified)</option>
                    <option value="UNVERIFIED">UNVERIFIED (Pending official confirmation)</option>
                    <option value="NOT_AVAILABLE">NOT_AVAILABLE (No public machine access / bulk import disabled)</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Intake Notes &amp; Verification Protocol
                </label>
                <textarea
                  value={newNotes}
                  onChange={(e) => setNewNotes(e.target.value)}
                  rows={2}
                  placeholder="Details regarding data availability, API access restrictions, or verification notes..."
                  className="w-full border border-slate-300 p-2.5 rounded-lg bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-xs transition-colors flex items-center space-x-1.5 shadow-sm"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Register &amp; Save Verified Source</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
