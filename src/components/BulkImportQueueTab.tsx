import React, { useState, useEffect, useRef } from 'react';
import {
  ListOrdered,
  UploadCloud,
  Play,
  Square,
  RotateCcw,
  Trash2,
  CheckCircle2,
  AlertCircle,
  XCircle,
  Clock,
  Building,
  ExternalLink,
  ShieldCheck,
  AlertTriangle,
  FileText,
  Layers,
  Info,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { globalBulkImportQueue, QueueProgressEvent } from '../ingestion/queueManager';
import { globalSourceRegistry } from '../ingestion/sourceRegistry';
import { QueueJobItem, QueueDashboardStats, VerifiedSource } from '../ingestion/types';

interface BulkImportQueueTabProps {
  onNavigateToReview?: () => void;
  onRefreshData?: () => void;
}

export const BulkImportQueueTab: React.FC<BulkImportQueueTabProps> = ({
  onNavigateToReview,
  onRefreshData
}) => {
  // Queue state
  const [jobs, setJobs] = useState<QueueJobItem[]>(() => globalBulkImportQueue.getJobs());
  const [stats, setStats] = useState<QueueDashboardStats>(() => globalBulkImportQueue.getDashboardStats());
  const [isProcessing, setIsProcessing] = useState<boolean>(() => globalBulkImportQueue.getIsProcessing());
  const [activeJobId, setActiveJobId] = useState<string | null>(() => globalBulkImportQueue.getCurrentJobId());

  // Multi-file upload form state
  const [targetCatalog, setTargetCatalog] = useState<'Opportunities' | 'Tenders'>('Opportunities');
  const [selectedSourceId, setSelectedSourceId] = useState<string>('src-iig-portal');
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadFeedback, setUploadFeedback] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);
  const [expandedErrorsJobId, setExpandedErrorsJobId] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync with queue updates
  useEffect(() => {
    const unsubscribe = globalBulkImportQueue.subscribe(() => {
      setJobs(globalBulkImportQueue.getJobs());
      setStats(globalBulkImportQueue.getDashboardStats());
      setIsProcessing(globalBulkImportQueue.getIsProcessing());
      setActiveJobId(globalBulkImportQueue.getCurrentJobId());
      if (onRefreshData) {
        onRefreshData();
      }
    });

    return () => {
      unsubscribe();
    };
  }, [onRefreshData]);

  // Adjust default source when catalog changes
  useEffect(() => {
    if (targetCatalog === 'Opportunities') {
      const defaultSrc = globalSourceRegistry.getSourceById('src-iig-portal') ||
        globalSourceRegistry.getAllSources().find(s => s.catalogueType === 'OPPORTUNITIES' || s.catalogueType === 'BOTH');
      if (defaultSrc) setSelectedSourceId(defaultSrc.sourceId);
    } else {
      const defaultSrc = globalSourceRegistry.getSourceById('src-cppp-eprocure') ||
        globalSourceRegistry.getAllSources().find(s => s.catalogueType === 'TENDERS' || s.catalogueType === 'BOTH');
      if (defaultSrc) setSelectedSourceId(defaultSrc.sourceId);
    }
  }, [targetCatalog]);

  const sources = globalSourceRegistry.getAllSources().filter(
    s => s.catalogueType === (targetCatalog === 'Opportunities' ? 'OPPORTUNITIES' : 'TENDERS') || s.catalogueType === 'BOTH'
  );

  const selectedSource = globalSourceRegistry.getSourceById(selectedSourceId);
  const sourceAvailability = globalSourceRegistry.isSourceAvailableForImport(selectedSourceId);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setSelectedFiles(filesArray);
      setUploadFeedback(null);
    }
  };

  const handleAddFilesToQueue = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedFiles.length === 0) {
      setUploadFeedback({ type: 'error', text: 'Please select one or more files to add to the queue.' });
      return;
    }

    if (!sourceAvailability.available) {
      setUploadFeedback({
        type: 'error',
        text: sourceAvailability.reason || 'Selected source is marked as NOT_AVAILABLE. Ingestion from this source is disabled.'
      });
      return;
    }

    const res = globalBulkImportQueue.addFilesToQueue(selectedFiles, {
      targetCatalogue: targetCatalog,
      sourceId: selectedSourceId,
      sourceName: selectedSource?.sourceName,
      sourceAuthority: selectedSource?.authority,
      sourceUrl: selectedSource?.officialUrl
    });

    if (res.addedCount > 0) {
      setUploadFeedback({
        type: 'success',
        text: `Successfully added ${res.addedCount} file(s) to the sequential bulk import queue.`
      });
      setSelectedFiles([]);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }

    if (res.errors.length > 0) {
      setUploadFeedback({
        type: 'error',
        text: `Some files could not be added: ${res.errors.join('; ')}`
      });
    }
  };

  const handleStartQueue = async () => {
    setUploadFeedback(null);
    await globalBulkImportQueue.processQueue();
    if (onRefreshData) onRefreshData();
  };

  const handleStopQueue = () => {
    globalBulkImportQueue.stopProcessing();
  };

  const handleRetryJob = (id: string) => {
    globalBulkImportQueue.retryJob(id);
  };

  const handleCancelJob = (id: string) => {
    globalBulkImportQueue.cancelJob(id);
  };

  const handleRemoveJob = (id: string) => {
    globalBulkImportQueue.removeJob(id);
  };

  const handleClearFinished = () => {
    globalBulkImportQueue.clearFinishedJobs();
  };

  return (
    <div className="space-y-6">
      {/* 1. Queue Dashboard Metrics Banner */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
          <div>
            <div className="flex items-center space-x-2">
              <ListOrdered className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-bold text-slate-900">Sequential Bulk Import Queue</h2>
              {isProcessing && (
                <span className="flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  <span>Processing Active</span>
                </span>
              )}
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Process multiple official statutory data files sequentially with automated deduplication and chunked memory streaming.
            </p>
          </div>

          {/* Action Toolbar */}
          <div className="flex flex-wrap items-center gap-2">
            {!isProcessing ? (
              <button
                onClick={handleStartQueue}
                disabled={stats.queued === 0}
                className={`px-4 py-2 rounded-lg text-xs font-semibold text-white flex items-center space-x-1.5 shadow-sm transition-colors ${
                  stats.queued === 0
                    ? 'bg-slate-300 cursor-not-allowed text-slate-500'
                    : 'bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800'
                }`}
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Start Queue ({stats.queued} Queued)</span>
              </button>
            ) : (
              <button
                onClick={handleStopQueue}
                className="px-4 py-2 rounded-lg text-xs font-semibold bg-rose-600 hover:bg-rose-700 text-white flex items-center space-x-1.5 shadow-sm transition-colors"
              >
                <Square className="w-3.5 h-3.5 fill-current" />
                <span>Stop After Current Job</span>
              </button>
            )}

            <button
              onClick={handleClearFinished}
              disabled={stats.completed === 0 && stats.failed === 0 && stats.cancelled === 0}
              className={`px-3 py-2 rounded-lg text-xs font-semibold border flex items-center space-x-1.5 transition-colors ${
                stats.completed === 0 && stats.failed === 0 && stats.cancelled === 0
                  ? 'border-slate-200 text-slate-400 cursor-not-allowed bg-slate-50'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Finished</span>
            </button>
          </div>
        </div>

        {/* Real-time Metric Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 pt-4 text-center">
          <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
            <span className="text-[10px] uppercase font-bold text-slate-500 block">Queued</span>
            <span className="text-lg font-extrabold text-blue-700">{stats.queued}</span>
          </div>
          <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
            <span className="text-[10px] uppercase font-bold text-slate-500 block">Processing</span>
            <span className="text-lg font-extrabold text-amber-600">{stats.processing}</span>
          </div>
          <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
            <span className="text-[10px] uppercase font-bold text-slate-500 block">Completed</span>
            <span className="text-lg font-extrabold text-emerald-700">{stats.completed}</span>
          </div>
          <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
            <span className="text-[10px] uppercase font-bold text-slate-500 block">Failed</span>
            <span className="text-lg font-extrabold text-rose-700">{stats.failed}</span>
          </div>
          <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
            <span className="text-[10px] uppercase font-bold text-slate-500 block">Cancelled</span>
            <span className="text-lg font-extrabold text-slate-600">{stats.cancelled}</span>
          </div>
          <div className="bg-blue-50/50 p-2.5 rounded-lg border border-blue-200">
            <span className="text-[10px] uppercase font-bold text-blue-700 block">Processed</span>
            <span className="text-lg font-extrabold text-blue-900">{stats.totalRecordsProcessed}</span>
          </div>
          <div className="bg-emerald-50/50 p-2.5 rounded-lg border border-emerald-200">
            <span className="text-[10px] uppercase font-bold text-emerald-700 block">New Staged</span>
            <span className="text-lg font-extrabold text-emerald-900">{stats.totalNewStaged}</span>
          </div>
          <div className="bg-amber-50/50 p-2.5 rounded-lg border border-amber-200">
            <span className="text-[10px] uppercase font-bold text-amber-700 block">Duplicates</span>
            <span className="text-lg font-extrabold text-amber-900">{stats.totalDuplicate}</span>
          </div>
        </div>
      </div>

      {/* 2. Multi-File Queue Upload Form */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
        <div className="border-b border-slate-200 pb-3">
          <div className="flex items-center space-x-2">
            <UploadCloud className="w-5 h-5 text-blue-600" />
            <h3 className="text-base font-bold text-slate-900">Add Files to Sequential Ingestion Queue</h3>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Select one or multiple government dataset files (.csv, .json, .xml) and attach a verified statutory source.
          </p>
        </div>

        {uploadFeedback && (
          <div
            className={`p-3.5 rounded-lg text-xs font-medium flex items-center space-x-2 border ${
              uploadFeedback.type === 'success'
                ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                : uploadFeedback.type === 'error'
                ? 'bg-red-50 border-red-200 text-red-800'
                : 'bg-blue-50 border-blue-200 text-blue-800'
            }`}
          >
            {uploadFeedback.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
            ) : uploadFeedback.type === 'error' ? (
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
            ) : (
              <Info className="w-4 h-4 shrink-0 text-blue-600" />
            )}
            <span className="flex-1">{uploadFeedback.text}</span>
          </div>
        )}

        <form onSubmit={handleAddFilesToQueue} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Target Catalogue */}
            <div>
              <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Target Catalogue *
              </label>
              <select
                value={targetCatalog}
                onChange={(e) => setTargetCatalog(e.target.value as 'Opportunities' | 'Tenders')}
                className="w-full border border-slate-300 p-2.5 rounded-lg bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none font-semibold text-slate-800"
              >
                <option value="Opportunities">Opportunities (India Investment Grid Projects &amp; PPPs)</option>
                <option value="Tenders">Tenders (CPPP / eProcure Statutory Procurement)</option>
              </select>
            </div>

            {/* Verified Source Registry Selector */}
            <div>
              <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Verified Source Registry Reference *
              </label>
              <select
                value={selectedSourceId}
                onChange={(e) => {
                  setSelectedSourceId(e.target.value);
                  setUploadFeedback(null);
                }}
                className="w-full border border-slate-300 p-2.5 rounded-lg bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none font-medium text-slate-800"
              >
                {sources.map(s => (
                  <option key={s.sourceId} value={s.sourceId}>
                    {s.sourceName} [{s.verificationStatus} - {s.accessType}]
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Selected Source Provenance Metadata Card */}
          {selectedSource && (
            <div className={`p-3.5 rounded-lg border space-y-1.5 ${
              !sourceAvailability.available
                ? 'bg-amber-50/80 border-amber-300 text-amber-900'
                : 'bg-slate-50 border-slate-200 text-slate-700'
            }`}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="font-bold flex items-center space-x-2">
                  <Building className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{selectedSource.sourceName}</span>
                  <span className="font-mono text-[10px] text-slate-500">({selectedSource.sourceId})</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                    selectedSource.verificationStatus === 'VERIFIED'
                      ? 'bg-emerald-100 text-emerald-800'
                      : selectedSource.verificationStatus === 'NOT_AVAILABLE'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    {selectedSource.verificationStatus}
                  </span>
                  <span className="px-2 py-0.5 rounded font-bold text-[10px] bg-blue-100 text-blue-800">
                    ACCESS: {selectedSource.accessType}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-600">
                <div><strong>Issuing Authority:</strong> {selectedSource.authority}</div>
                <div>
                  <strong>Official Portal:</strong>{' '}
                  <a
                    href={selectedSource.officialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline inline-flex items-center space-x-0.5"
                  >
                    <span>{selectedSource.officialUrl}</span>
                    <ExternalLink className="w-3 h-3 ml-0.5 inline" />
                  </a>
                </div>
              </div>

              {!sourceAvailability.available && (
                <div className="mt-2 p-2 bg-red-100 border border-red-300 rounded text-red-800 font-medium flex items-center space-x-2 text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                  <span><strong>Queue Intake Blocked:</strong> {sourceAvailability.reason}</span>
                </div>
              )}
            </div>
          )}

          {/* Multi-File Picker */}
          <div>
            <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Select One or Multiple Files (.csv, .json, .xml) *
            </label>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".csv,.json,.xml"
              onChange={handleFileChange}
              disabled={!sourceAvailability.available}
              className="w-full border border-slate-300 p-2.5 rounded-lg bg-slate-50 focus:bg-white focus:outline-none file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
            />
            <span className="text-[11px] text-slate-500 mt-1 block">
              {selectedFiles.length > 0
                ? `Selected ${selectedFiles.length} file(s): ${selectedFiles.map(f => f.name).join(', ')}`
                : 'You can select multiple files at once by holding Ctrl / Shift.'}
            </span>
          </div>

          <button
            type="submit"
            disabled={selectedFiles.length === 0 || !sourceAvailability.available}
            className={`px-5 py-2.5 rounded-lg text-xs font-semibold text-white flex items-center space-x-1.5 shadow-sm transition-colors ${
              selectedFiles.length === 0 || !sourceAvailability.available
                ? 'bg-slate-300 cursor-not-allowed text-slate-500'
                : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
            }`}
          >
            <ListOrdered className="w-4 h-4" />
            <span>Add {selectedFiles.length > 0 ? `${selectedFiles.length} File(s)` : ''} to Queue</span>
          </button>
        </form>
      </div>

      {/* 3. Staging Lifecycle Protection Notice */}
      <div className="p-3.5 bg-blue-50/60 border border-blue-200 rounded-lg text-xs text-blue-900 flex items-start space-x-2.5">
        <ShieldCheck className="w-4 h-4 text-blue-700 mt-0.5 shrink-0" />
        <div className="space-y-0.5">
          <span className="font-bold">Strict Staging &amp; Provenance Protocol:</span>
          <p className="text-blue-800">
            Lifecycle: <code className="font-mono bg-blue-100 px-1 py-0.5 rounded">QUEUED → PROCESSING → STAGED → REVIEW → APPROVED → PUBLISHED</code>. All records are staged for administrative inspection and never auto-published directly into production catalogues.
          </p>
        </div>
      </div>

      {/* 4. Queue Items List Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <FileText className="w-4 h-4 text-slate-600" />
            <h3 className="text-sm font-bold text-slate-900">Queued &amp; Processed Jobs ({jobs.length})</h3>
          </div>
          {onNavigateToReview && stats.totalNewStaged > 0 && (
            <button
              onClick={onNavigateToReview}
              className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center space-x-1"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Review Staged Records in Review Tab &rarr;</span>
            </button>
          )}
        </div>

        {jobs.length === 0 ? (
          <div className="p-8 text-center text-slate-500 text-xs">
            <ListOrdered className="w-8 h-8 text-slate-300 mx-auto mb-2" />
            <p className="font-medium">The bulk import queue is currently empty.</p>
            <p className="text-slate-400 mt-0.5">Add one or more official dataset files above to begin sequential batch processing.</p>
          </div>
        ) : (
          <div className="divide-y divide-slate-200">
            {jobs.map((job) => {
              const isJobActive = isProcessing && activeJobId === job.id;
              const hasErrors = (job.errors && job.errors.length > 0) || Boolean(job.failureReason);
              const isErrorsExpanded = expandedErrorsJobId === job.id;

              return (
                <div key={job.id} className={`p-4 text-xs transition-colors ${
                  isJobActive
                    ? 'bg-amber-50/40'
                    : job.status === 'COMPLETED'
                    ? 'bg-white hover:bg-slate-50/70'
                    : job.status === 'FAILED'
                    ? 'bg-rose-50/40 hover:bg-rose-50/60'
                    : 'bg-white hover:bg-slate-50/70'
                }`}>
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                    {/* Left: Job Meta */}
                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono font-bold text-slate-900">{job.id}</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-800 border border-slate-200">
                          {job.targetCatalogue}
                        </span>
                        <span className={`px-2.5 py-0.5 rounded-full font-bold text-[10px] flex items-center space-x-1 ${
                          job.status === 'QUEUED'
                            ? 'bg-blue-100 text-blue-800'
                            : job.status === 'PROCESSING'
                            ? 'bg-amber-100 text-amber-800 animate-pulse'
                            : job.status === 'COMPLETED'
                            ? 'bg-emerald-100 text-emerald-800'
                            : job.status === 'FAILED'
                            ? 'bg-rose-100 text-rose-800'
                            : 'bg-slate-200 text-slate-700'
                        }`}>
                          {job.status === 'PROCESSING' && <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping"></span>}
                          {job.status === 'COMPLETED' && <CheckCircle2 className="w-3 h-3 text-emerald-600" />}
                          {job.status === 'FAILED' && <XCircle className="w-3 h-3 text-rose-600" />}
                          <span>{job.status}</span>
                        </span>
                      </div>

                      <div className="text-slate-600 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px]">
                        <div>
                          <strong>File:</strong> <span className="font-mono text-slate-800">{job.fileName}</span> ({(job.fileSize / 1024).toFixed(1)} KB)
                        </div>
                        <div>
                          <strong>Source:</strong> {job.sourceName} <span className="text-slate-400">({job.sourceId})</span>
                        </div>
                        <div>
                          <strong>Created:</strong> {job.createdAt}
                        </div>
                      </div>

                      {/* Progress bar if processing */}
                      {job.status === 'PROCESSING' && (
                        <div className="pt-1.5 space-y-1">
                          <div className="flex items-center justify-between text-[11px] text-amber-800 font-semibold">
                            <span>Streaming and validating records...</span>
                            <span>{job.processedCount} {job.recordCount ? `/ ${job.recordCount}` : 'processed'}</span>
                          </div>
                          <div className="w-full bg-amber-200/70 rounded-full h-1.5 overflow-hidden">
                            <div
                              className="bg-amber-600 h-1.5 transition-all duration-200"
                              style={{
                                width: job.recordCount && job.recordCount > 0
                                  ? `${Math.min(100, Math.round((job.processedCount / job.recordCount) * 100))}%`
                                  : '60%'
                              }}
                            ></div>
                          </div>
                        </div>
                      )}

                      {/* Completed / Staged Metrics Tag Line */}
                      {(job.status === 'COMPLETED' || (job.status === 'FAILED' && job.processedCount > 0)) && (
                        <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px]">
                          <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
                            Total Received: <strong>{job.processedCount}</strong>
                          </span>
                          <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-medium">
                            New Staged: <strong>{job.newStagedCount}</strong>
                          </span>
                          <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-medium">
                            Duplicates: <strong>{job.duplicateCount}</strong>
                          </span>
                          <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-medium">
                            Invalid: <strong>{job.invalidCount}</strong>
                          </span>
                        </div>
                      )}

                      {/* Failure reason */}
                      {job.failureReason && (
                        <div className="mt-1 p-2 bg-rose-100 border border-rose-200 rounded text-rose-800 text-[11px] flex items-center space-x-1.5">
                          <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                          <span><strong>Failure:</strong> {job.failureReason}</span>
                        </div>
                      )}
                    </div>

                    {/* Right: Actions */}
                    <div className="flex items-center space-x-2 shrink-0">
                      {hasErrors && (
                        <button
                          onClick={() => setExpandedErrorsJobId(isErrorsExpanded ? null : job.id)}
                          className="px-2.5 py-1.5 rounded border border-slate-300 text-slate-600 hover:bg-slate-100 font-medium text-[11px] flex items-center space-x-1"
                        >
                          <span>Errors ({job.errors?.length || (job.failureReason ? 1 : 0)})</span>
                          {isErrorsExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                        </button>
                      )}

                      {(job.status === 'FAILED' || job.status === 'CANCELLED') && (
                        <button
                          onClick={() => handleRetryJob(job.id)}
                          className="px-3 py-1.5 rounded bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 font-semibold text-[11px] flex items-center space-x-1"
                        >
                          <RotateCcw className="w-3 h-3" />
                          <span>Retry</span>
                        </button>
                      )}

                      {job.status === 'QUEUED' && (
                        <button
                          onClick={() => handleCancelJob(job.id)}
                          className="px-3 py-1.5 rounded bg-slate-100 text-slate-700 hover:bg-slate-200 font-medium text-[11px]"
                        >
                          <span>Cancel</span>
                        </button>
                      )}

                      {job.status !== 'PROCESSING' && (
                        <button
                          onClick={() => handleRemoveJob(job.id)}
                          title="Remove from list"
                          className="p-1.5 rounded text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Expanded error log */}
                  {isErrorsExpanded && (
                    <div className="mt-3 p-3 bg-slate-900 text-slate-200 rounded-lg text-[11px] font-mono space-y-1.5 overflow-x-auto max-h-48 overflow-y-auto">
                      <div className="font-bold text-amber-400 pb-1 border-b border-slate-800">
                        Error Diagnostic Log for {job.id}:
                      </div>
                      {job.failureReason && (
                        <div className="text-rose-400">Error: {job.failureReason}</div>
                      )}
                      {job.errors && job.errors.length > 0 ? (
                        job.errors.slice(0, 50).map((err, errIdx) => (
                          <div key={errIdx} className="text-slate-300">
                            [Record #{err.index + 1}] {err.field ? `Field '${err.field}': ` : ''}{err.message} ({err.reason || 'Invalid'})
                          </div>
                        ))
                      ) : (
                        !job.failureReason && <div className="text-slate-500">No additional error details.</div>
                      )}
                      {job.errors && job.errors.length > 50 && (
                        <div className="text-slate-400 italic">...and {job.errors.length - 50} more error(s).</div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
