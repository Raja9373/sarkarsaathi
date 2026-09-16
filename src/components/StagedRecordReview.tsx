import React, { useState, useMemo } from 'react';
import {
  CheckCircle2,
  XCircle,
  Clock,
  Filter,
  Search,
  CheckSquare,
  Square,
  AlertTriangle,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Building,
  Tag,
  MapPin,
  FileText,
  AlertCircle,
  Database,
  Trash2,
  Eye,
  X
} from 'lucide-react';
import { StagedOpportunity, StagedTender, ReviewStatus } from '../ingestion/types';
import { globalStagingQueue } from '../ingestion/staging';
import { opportunityRepository, tenderRepository } from '../infrastructure/repositories/InvestmentRepository';

interface StagedRecordReviewProps {
  targetCatalog: 'Opportunities' | 'Tenders';
  onCatalogChange: (catalog: 'Opportunities' | 'Tenders') => void;
  onRefreshData: () => void;
}

export const StagedRecordReview: React.FC<StagedRecordReviewProps> = ({
  targetCatalog,
  onCatalogChange,
  onRefreshData
}) => {
  // Filters
  const [filterReviewStatus, setFilterReviewStatus] = useState<'ALL' | ReviewStatus | 'DUPLICATE' | 'INVALID'>('ALL');
  const [filterState, setFilterState] = useState<string>('ALL');
  const [filterSource, setFilterSource] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Bulk Selection
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  // Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 25;

  // Modals & Inputs
  const [rejectionModalOpen, setRejectionModalOpen] = useState<boolean>(false);
  const [rejectionTargetIds, setRejectionTargetIds] = useState<string[]>([]);
  const [rejectionReasonInput, setRejectionReasonInput] = useState<string>('');
  const [rejectionError, setRejectionError] = useState<string | null>(null);

  // Single Record Inspection Drawer
  const [inspectingRecord, setInspectingRecord] = useState<StagedOpportunity | StagedTender | null>(null);

  // Action / Feedback state
  const [actionFeedback, setActionFeedback] = useState<{ type: 'success' | 'error' | 'info'; message: string } | null>(null);
  const [isPublishing, setIsPublishing] = useState<boolean>(false);

  // Get current raw records from staging queue
  const stagedOpps = globalStagingQueue.getStagedOpportunities();
  const stagedTenders = globalStagingQueue.getStagedTenders();
  const currentRecords = targetCatalog === 'Opportunities' ? stagedOpps : stagedTenders;

  // Distinct sources & states for filters
  const uniqueStates = useMemo(() => {
    const states = new Set<string>();
    currentRecords.forEach((r) => {
      if (r.state && r.state.trim() !== '') {
        states.add(r.state.trim());
      }
    });
    return Array.from(states).sort();
  }, [currentRecords]);

  const uniqueSources = useMemo(() => {
    const sources = new Set<string>();
    currentRecords.forEach((r) => {
      const srcName = r.sourceName || r.sourceAuthority || r.provenance?.sourceName || r.authority;
      if (srcName && srcName.trim() !== '') {
        sources.add(srcName.trim());
      }
    });
    return Array.from(sources).sort();
  }, [currentRecords]);

  // Overall Progress Metrics
  const metrics = useMemo(() => {
    const total = currentRecords.length;
    let pending = 0;
    let approved = 0;
    let rejected = 0;
    let duplicates = 0;
    let invalid = 0;

    currentRecords.forEach((r) => {
      const rev = r.reviewStatus || (r.verificationStatus === 'VERIFIED' ? 'APPROVED' : r.verificationStatus === 'REJECTED' ? 'REJECTED' : 'PENDING_REVIEW');
      if (rev === 'APPROVED') approved++;
      else if (rev === 'REJECTED') rejected++;
      else pending++;

      if (r.isDuplicate) duplicates++;
      if (r.validationErrors && r.validationErrors.length > 0) invalid++;
    });

    const reviewedCount = approved + rejected;
    const reviewPercentage = total > 0 ? Math.round((reviewedCount / total) * 100) : 0;

    return { total, pending, approved, rejected, duplicates, invalid, reviewedCount, reviewPercentage };
  }, [currentRecords]);

  // Filtered dataset
  const filteredRecords = useMemo(() => {
    return currentRecords.filter((rec) => {
      const revStatus = rec.reviewStatus || (rec.verificationStatus === 'VERIFIED' ? 'APPROVED' : rec.verificationStatus === 'REJECTED' ? 'REJECTED' : 'PENDING_REVIEW');
      
      // Status filter
      if (filterReviewStatus === 'PENDING_REVIEW' && revStatus !== 'PENDING_REVIEW') return false;
      if (filterReviewStatus === 'APPROVED' && revStatus !== 'APPROVED') return false;
      if (filterReviewStatus === 'REJECTED' && revStatus !== 'REJECTED') return false;
      if (filterReviewStatus === 'DUPLICATE' && !rec.isDuplicate) return false;
      if (filterReviewStatus === 'INVALID' && (!rec.validationErrors || rec.validationErrors.length === 0)) return false;

      // State filter
      if (filterState !== 'ALL') {
        if (!rec.state || rec.state.toLowerCase() !== filterState.toLowerCase()) return false;
      }

      // Source filter
      if (filterSource !== 'ALL') {
        const src = rec.sourceName || rec.sourceAuthority || rec.provenance?.sourceName || rec.authority;
        if (!src || src.toLowerCase() !== filterSource.toLowerCase()) return false;
      }

      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const idMatch = rec.id?.toLowerCase().includes(q) || (rec as StagedOpportunity).projectId?.toLowerCase().includes(q);
        const titleMatch = rec.title?.toLowerCase().includes(q);
        const authorityMatch = rec.authority?.toLowerCase().includes(q);
        const categoryMatch = rec.category?.toLowerCase().includes(q);
        if (!idMatch && !titleMatch && !authorityMatch && !categoryMatch) return false;
      }

      return true;
    });
  }, [currentRecords, filterReviewStatus, filterState, filterSource, searchQuery]);

  // Paginated items
  const totalPages = Math.max(1, Math.ceil(filteredRecords.length / pageSize));
  const effectivePage = Math.min(currentPage, totalPages);
  const pagedRecords = useMemo(() => {
    const start = (effectivePage - 1) * pageSize;
    return filteredRecords.slice(start, start + pageSize);
  }, [filteredRecords, effectivePage, pageSize]);

  // Selection handlers
  const handleToggleSelectRecord = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleSelectPage = () => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      pagedRecords.forEach((r) => next.add(r.id));
      return next;
    });
  };

  const handleSelectAllVisible = () => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      filteredRecords.forEach((r) => next.add(r.id));
      return next;
    });
  };

  const handleClearSelection = () => {
    setSelectedIds(new Set());
  };

  const isPageFullySelected = pagedRecords.length > 0 && pagedRecords.every((r) => selectedIds.has(r.id));

  // Individual Actions
  const handleApproveSingle = (id: string) => {
    if (targetCatalog === 'Opportunities') {
      globalStagingQueue.approveOpportunity(id);
    } else {
      globalStagingQueue.approveTender(id);
    }
    setActionFeedback({
      type: 'success',
      message: `Record ${id} approved. Awaiting explicit publishing action.`
    });
    onRefreshData();
  };

  const handleOpenRejectSingle = (id: string) => {
    setRejectionTargetIds([id]);
    setRejectionReasonInput('');
    setRejectionError(null);
    setRejectionModalOpen(true);
  };

  const handleOpenRejectBulk = () => {
    if (selectedIds.size === 0) return;
    setRejectionTargetIds(Array.from(selectedIds));
    setRejectionReasonInput('');
    setRejectionError(null);
    setRejectionModalOpen(true);
  };

  const handleConfirmRejection = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rejectionReasonInput.trim()) {
      setRejectionError('A rejection reason is required.');
      return;
    }

    const reason = rejectionReasonInput.trim();
    let count = 0;

    if (targetCatalog === 'Opportunities') {
      count = globalStagingQueue.rejectOpportunities(rejectionTargetIds, reason);
    } else {
      count = globalStagingQueue.rejectTenders(rejectionTargetIds, reason);
    }

    // Clear rejected items from selection
    setSelectedIds((prev) => {
      const next = new Set(prev);
      rejectionTargetIds.forEach((id) => next.delete(id));
      return next;
    });

    setRejectionModalOpen(false);
    setActionFeedback({
      type: 'info',
      message: `Successfully rejected ${count} record(s) with reason: "${reason}". Original staged records preserved.`
    });
    onRefreshData();
  };

  // Bulk Approval
  const handleBulkApprove = () => {
    if (selectedIds.size === 0) return;
    const ids = Array.from(selectedIds);
    let count = 0;

    if (targetCatalog === 'Opportunities') {
      count = globalStagingQueue.approveOpportunities(ids);
    } else {
      count = globalStagingQueue.approveTenders(ids);
    }

    setActionFeedback({
      type: 'success',
      message: `Successfully approved ${count} selected record(s). Records are marked APPROVED and waiting for explicit publishing.`
    });
    onRefreshData();
  };

  // Publish Approved Records (Strict explicit safety)
  const handlePublishApproved = () => {
    setIsPublishing(true);
    setActionFeedback(null);

    setTimeout(() => {
      let result = { published: 0, skipped: 0 };
      if (targetCatalog === 'Opportunities') {
        result = globalStagingQueue.publishApprovedOpportunities(opportunityRepository);
      } else {
        result = globalStagingQueue.publishApprovedTenders(tenderRepository);
      }

      setIsPublishing(false);
      setSelectedIds(new Set());
      setActionFeedback({
        type: 'success',
        message: `Publish complete! Published ${result.published} approved ${targetCatalog.toLowerCase()} into live catalogue (${result.skipped} non-approved or duplicates retained safely in staging).`
      });
      onRefreshData();
    }, 400);
  };

  const handleClearStaging = () => {
    if (confirm(`Are you sure you want to clear all ${targetCatalog} in the staging queue?`)) {
      if (targetCatalog === 'Opportunities') {
        globalStagingQueue.getStagedOpportunities().forEach((o) => globalStagingQueue.removeStagedOpportunity(o.id));
      } else {
        globalStagingQueue.getStagedTenders().forEach((t) => globalStagingQueue.removeStagedTender(t.id));
      }
      setSelectedIds(new Set());
      onRefreshData();
    }
  };

  return (
    <div className="space-y-6">
      {/* 1. Review Header & Catalogue Selector */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
          <div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-bold text-slate-900">Staged Record Review &amp; Bulk Approval Control</h2>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Review, approve, or reject staged statutory records individually or in bulk. Approved records remain safely staged until explicit publish action.
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Catalogue:</label>
            <select
              value={targetCatalog}
              onChange={(e) => {
                onCatalogChange(e.target.value as 'Opportunities' | 'Tenders');
                setSelectedIds(new Set());
                setCurrentPage(1);
              }}
              className="border border-slate-300 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-800 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Opportunities">Opportunities ({stagedOpps.length})</option>
              <option value="Tenders">Tenders ({stagedTenders.length})</option>
            </select>
          </div>
        </div>

        {/* 2. Review Progress & Stats Banner */}
        <div className="space-y-3">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-center">
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Total Staged</span>
              <span className="text-lg font-extrabold text-slate-900">{metrics.total}</span>
            </div>
            <div className="bg-amber-50/60 p-3 rounded-lg border border-amber-200">
              <span className="text-[10px] uppercase font-bold text-amber-700 block">Pending Review</span>
              <span className="text-lg font-extrabold text-amber-800">{metrics.pending}</span>
            </div>
            <div className="bg-emerald-50/60 p-3 rounded-lg border border-emerald-200">
              <span className="text-[10px] uppercase font-bold text-emerald-700 block">Approved</span>
              <span className="text-lg font-extrabold text-emerald-800">{metrics.approved}</span>
            </div>
            <div className="bg-rose-50/60 p-3 rounded-lg border border-rose-200">
              <span className="text-[10px] uppercase font-bold text-rose-700 block">Rejected</span>
              <span className="text-lg font-extrabold text-rose-800">{metrics.rejected}</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Duplicates</span>
              <span className="text-lg font-extrabold text-slate-700">{metrics.duplicates}</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Validation Warnings</span>
              <span className="text-lg font-extrabold text-slate-700">{metrics.invalid}</span>
            </div>
            <div className="bg-blue-50/60 p-3 rounded-lg border border-blue-200">
              <span className="text-[10px] uppercase font-bold text-blue-700 block">Progress</span>
              <span className="text-lg font-extrabold text-blue-900">{metrics.reviewPercentage}%</span>
            </div>
          </div>

          {/* Progress Bar for large batches */}
          {metrics.total > 0 && (
            <div className="space-y-1">
              <div className="flex items-center justify-between text-[11px] text-slate-600 font-medium">
                <span>Review Completion Progress ({metrics.reviewedCount} of {metrics.total} reviewed)</span>
                <span className="font-bold text-blue-700">{metrics.reviewPercentage}% Complete</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden flex">
                <div
                  className="bg-emerald-500 h-2 transition-all duration-300"
                  style={{ width: `${(metrics.approved / Math.max(1, metrics.total)) * 100}%` }}
                  title={`Approved: ${metrics.approved}`}
                ></div>
                <div
                  className="bg-rose-500 h-2 transition-all duration-300"
                  style={{ width: `${(metrics.rejected / Math.max(1, metrics.total)) * 100}%` }}
                  title={`Rejected: ${metrics.rejected}`}
                ></div>
                <div
                  className="bg-amber-400 h-2 transition-all duration-300"
                  style={{ width: `${(metrics.pending / Math.max(1, metrics.total)) * 100}%` }}
                  title={`Pending: ${metrics.pending}`}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 3. Feedback Banner */}
      {actionFeedback && (
        <div
          className={`p-3.5 rounded-lg text-xs font-medium flex items-center space-x-2 border ${
            actionFeedback.type === 'success'
              ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
              : actionFeedback.type === 'error'
              ? 'bg-red-50 border-red-200 text-red-800'
              : 'bg-blue-50 border-blue-200 text-blue-800'
          }`}
        >
          {actionFeedback.type === 'success' ? (
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
          ) : actionFeedback.type === 'error' ? (
            <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
          ) : (
            <ShieldCheck className="w-4 h-4 shrink-0 text-blue-600" />
          )}
          <span className="flex-1">{actionFeedback.message}</span>
          <button onClick={() => setActionFeedback(null)} className="text-slate-400 hover:text-slate-600">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* 4. Filter Toolbar & Search */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Search box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search by ID, Project ID, Title, Authority, Sector..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg text-xs bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Quick Filter Selectors */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {/* Review Status Filter */}
            <div className="flex items-center space-x-1">
              <Filter className="w-3.5 h-3.5 text-slate-500" />
              <select
                value={filterReviewStatus}
                onChange={(e) => {
                  setFilterReviewStatus(e.target.value as any);
                  setCurrentPage(1);
                }}
                className="border border-slate-300 px-2.5 py-1.5 rounded-lg text-xs bg-slate-50 text-slate-800 font-medium focus:bg-white"
              >
                <option value="ALL">All Statuses ({metrics.total})</option>
                <option value="PENDING_REVIEW">Pending Review ({metrics.pending})</option>
                <option value="APPROVED">Approved ({metrics.approved})</option>
                <option value="REJECTED">Rejected ({metrics.rejected})</option>
                <option value="DUPLICATE">Duplicates ({metrics.duplicates})</option>
                <option value="INVALID">Validation Warnings ({metrics.invalid})</option>
              </select>
            </div>

            {/* State Filter */}
            {uniqueStates.length > 0 && (
              <select
                value={filterState}
                onChange={(e) => {
                  setFilterState(e.target.value);
                  setCurrentPage(1);
                }}
                className="border border-slate-300 px-2.5 py-1.5 rounded-lg text-xs bg-slate-50 text-slate-800 font-medium focus:bg-white"
              >
                <option value="ALL">All States ({uniqueStates.length})</option>
                {uniqueStates.map((st) => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
            )}

            {/* Source Filter */}
            {uniqueSources.length > 0 && (
              <select
                value={filterSource}
                onChange={(e) => {
                  setFilterSource(e.target.value);
                  setCurrentPage(1);
                }}
                className="border border-slate-300 px-2.5 py-1.5 rounded-lg text-xs bg-slate-50 text-slate-800 font-medium focus:bg-white max-w-[200px] truncate"
              >
                <option value="ALL">All Sources ({uniqueSources.length})</option>
                {uniqueSources.map((src) => (
                  <option key={src} value={src}>{src}</option>
                ))}
              </select>
            )}

            {(filterReviewStatus !== 'ALL' || filterState !== 'ALL' || filterSource !== 'ALL' || searchQuery.trim() !== '') && (
              <button
                onClick={() => {
                  setFilterReviewStatus('ALL');
                  setFilterState('ALL');
                  setFilterSource('ALL');
                  setSearchQuery('');
                  setCurrentPage(1);
                }}
                className="px-2.5 py-1.5 text-xs text-blue-600 hover:text-blue-800 font-semibold"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* 5. Bulk Action Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs">
          {/* Selection Controls */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleSelectPage}
              disabled={pagedRecords.length === 0}
              className="px-2.5 py-1.5 border border-slate-300 rounded text-slate-700 hover:bg-slate-100 font-medium flex items-center space-x-1"
            >
              <CheckSquare className="w-3.5 h-3.5 text-slate-500" />
              <span>Select Page ({pagedRecords.length})</span>
            </button>

            <button
              onClick={handleSelectAllVisible}
              disabled={filteredRecords.length === 0}
              className="px-2.5 py-1.5 border border-slate-300 rounded text-slate-700 hover:bg-slate-100 font-medium"
            >
              Select All Visible ({filteredRecords.length})
            </button>

            {selectedIds.size > 0 && (
              <button
                onClick={handleClearSelection}
                className="px-2.5 py-1.5 text-slate-500 hover:text-slate-800 font-medium"
              >
                Clear Selection ({selectedIds.size})
              </button>
            )}

            <span className="text-slate-400 font-mono text-[11px] ml-1">
              {selectedIds.size} selected
            </span>
          </div>

          {/* Bulk Operations Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleBulkApprove}
              disabled={selectedIds.size === 0}
              className={`px-3 py-1.5 rounded-lg font-bold flex items-center space-x-1.5 shadow-sm transition-colors ${
                selectedIds.size === 0
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Approve Selected ({selectedIds.size})</span>
            </button>

            <button
              onClick={handleOpenRejectBulk}
              disabled={selectedIds.size === 0}
              className={`px-3 py-1.5 rounded-lg font-bold flex items-center space-x-1.5 border transition-colors ${
                selectedIds.size === 0
                  ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                  : 'border-rose-300 bg-rose-50 text-rose-700 hover:bg-rose-100'
              }`}
            >
              <XCircle className="w-3.5 h-3.5 text-rose-600" />
              <span>Reject Selected ({selectedIds.size})</span>
            </button>

            {/* Explicit Publish Button for ALL Approved Records */}
            <button
              onClick={handlePublishApproved}
              disabled={metrics.approved === 0 || isPublishing}
              className={`px-4 py-1.5 rounded-lg font-bold flex items-center space-x-1.5 shadow-sm transition-colors text-white ${
                metrics.approved === 0 || isPublishing
                  ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
              }`}
              title="Publishes only APPROVED records into production catalogue with strict duplicate prevention."
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Publish Approved ({metrics.approved})</span>
            </button>

            {currentRecords.length > 0 && (
              <button
                onClick={handleClearStaging}
                className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded"
                title="Clear all staged items in this queue"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 6. Staged Records Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        {currentRecords.length === 0 ? (
          <div className="py-16 text-center border-2 border-dashed border-slate-200 rounded-xl m-4">
            <Database className="w-10 h-10 text-slate-300 mx-auto mb-2" />
            <p className="text-sm font-bold text-slate-700">No {targetCatalog.toLowerCase()} in staging queue</p>
            <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
              Add files in the Batch Ingestion or Bulk Import Queue tabs to stage records for statutory review.
            </p>
          </div>
        ) : filteredRecords.length === 0 ? (
          <div className="py-12 text-center text-slate-500 text-xs">
            <Filter className="w-8 h-8 text-slate-300 mx-auto mb-2" />
            <p className="font-semibold text-slate-700">No records match the selected filters.</p>
            <button
              onClick={() => {
                setFilterReviewStatus('ALL');
                setFilterState('ALL');
                setFilterSource('ALL');
                setSearchQuery('');
              }}
              className="mt-2 text-blue-600 hover:underline font-medium"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3 w-10 text-center">
                      <input
                        type="checkbox"
                        checked={isPageFullySelected}
                        onChange={(e) => {
                          if (e.target.checked) handleSelectPage();
                          else {
                            setSelectedIds((prev) => {
                              const next = new Set(prev);
                              pagedRecords.forEach((r) => next.delete(r.id));
                              return next;
                            });
                          }
                        }}
                        className="rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                      />
                    </th>
                    <th className="p-3 w-36">ID / Reference</th>
                    <th className="p-3 min-w-[220px]">Title &amp; Authority</th>
                    <th className="p-3 w-36">Source &amp; URL</th>
                    <th className="p-3 w-28">State / Location</th>
                    <th className="p-3 w-32">Sector / Category</th>
                    <th className="p-3 w-28 text-center">Review Status</th>
                    <th className="p-3 w-36 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {pagedRecords.map((record) => {
                    const isSelected = selectedIds.has(record.id);
                    const opp = targetCatalog === 'Opportunities' ? (record as StagedOpportunity) : null;
                    const tnd = targetCatalog === 'Tenders' ? (record as StagedTender) : null;
                    const refId = opp ? opp.projectId || opp.id : tnd ? tnd.id : record.id;
                    const revStatus = record.reviewStatus || (record.verificationStatus === 'VERIFIED' ? 'APPROVED' : record.verificationStatus === 'REJECTED' ? 'REJECTED' : 'PENDING_REVIEW');
                    const srcAuthority = record.sourceAuthority || record.sourceName || record.provenance?.sourceName || record.authority;
                    const srcUrl = record.sourceUrl || record.provenance?.officialUrl;

                    return (
                      <tr
                        key={record.id}
                        className={`transition-colors ${
                          isSelected
                            ? 'bg-blue-50/60'
                            : revStatus === 'APPROVED'
                            ? 'bg-emerald-50/20 hover:bg-slate-50/80'
                            : revStatus === 'REJECTED'
                            ? 'bg-rose-50/20 hover:bg-slate-50/80'
                            : 'hover:bg-slate-50/80'
                        }`}
                      >
                        {/* Checkbox */}
                        <td className="p-3 text-center">
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => handleToggleSelectRecord(record.id)}
                            className="rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                          />
                        </td>

                        {/* ID / Ref */}
                        <td className="p-3 font-mono">
                          <div className="font-bold text-slate-900 truncate max-w-[140px]" title={refId}>
                            {refId}
                          </div>
                          <div className="text-[10px] text-slate-400 truncate max-w-[140px]" title={record.id}>
                            Staged ID: {record.id}
                          </div>
                          {record.isDuplicate && (
                            <span className="inline-block mt-0.5 px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 text-[9px] font-bold">
                              DUPLICATE
                            </span>
                          )}
                        </td>

                        {/* Title & Authority */}
                        <td className="p-3 space-y-0.5">
                          <div className="font-semibold text-slate-900 line-clamp-2" title={record.title}>
                            {record.title}
                          </div>
                          <div className="text-[11px] text-slate-500 flex items-center space-x-1">
                            <Building className="w-3 h-3 text-slate-400 shrink-0" />
                            <span className="truncate max-w-[240px]" title={record.authority}>{record.authority}</span>
                          </div>
                          {record.rejectionReason && revStatus === 'REJECTED' && (
                            <div className="text-[10px] text-rose-700 font-medium bg-rose-50 px-1.5 py-0.5 rounded mt-0.5 border border-rose-200">
                              Rejection: {record.rejectionReason}
                            </div>
                          )}
                        </td>

                        {/* Source & URL */}
                        <td className="p-3 text-[11px]">
                          <div className="font-medium text-slate-800 truncate max-w-[130px]" title={srcAuthority}>
                            {srcAuthority}
                          </div>
                          {srcUrl ? (
                            <a
                              href={srcUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="text-[10px] text-blue-600 hover:underline flex items-center space-x-0.5 truncate max-w-[130px]"
                              title={srcUrl}
                            >
                              <span className="truncate">{srcUrl}</span>
                              <ExternalLink className="w-2.5 h-2.5 shrink-0 ml-0.5 inline" />
                            </a>
                          ) : (
                            <span className="text-[10px] text-slate-400">No URL</span>
                          )}
                          <div className="text-[9px] text-slate-400">
                            Batch: {record.provenance?.batchId || 'N/A'}
                          </div>
                        </td>

                        {/* State */}
                        <td className="p-3 text-[11px] text-slate-700">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                            <span>{record.state || (tnd?.location) || 'National / Multi'}</span>
                          </div>
                        </td>

                        {/* Sector / Category */}
                        <td className="p-3 text-[11px]">
                          <div className="font-medium text-slate-800 truncate max-w-[120px]" title={record.sector || record.category}>
                            {record.sector || record.category || 'General'}
                          </div>
                          {opp?.subSector && (
                            <div className="text-[10px] text-slate-500 truncate max-w-[120px]" title={opp.subSector}>
                              {opp.subSector}
                            </div>
                          )}
                          {tnd?.tenderValue && (
                            <div className="text-[10px] text-emerald-700 font-semibold truncate max-w-[120px]">
                              {tnd.tenderValue}
                            </div>
                          )}
                        </td>

                        {/* Review Status Badge */}
                        <td className="p-3 text-center">
                          <span
                            className={`inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              revStatus === 'APPROVED'
                                ? 'bg-emerald-100 text-emerald-800'
                                : revStatus === 'REJECTED'
                                ? 'bg-rose-100 text-rose-800'
                                : 'bg-amber-100 text-amber-800'
                            }`}
                          >
                            {revStatus === 'APPROVED' ? (
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            ) : revStatus === 'REJECTED' ? (
                              <XCircle className="w-3 h-3 text-rose-600" />
                            ) : (
                              <Clock className="w-3 h-3 text-amber-600" />
                            )}
                            <span>{revStatus}</span>
                          </span>
                        </td>

                        {/* Actions */}
                        <td className="p-3 text-right">
                          <div className="flex items-center justify-end space-x-1">
                            <button
                              onClick={() => setInspectingRecord(record)}
                              title="Inspect Full Record"
                              className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                            >
                              <Eye className="w-3.5 h-3.5" />
                            </button>

                            {revStatus !== 'APPROVED' && (
                              <button
                                onClick={() => handleApproveSingle(record.id)}
                                className="px-2 py-1 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 rounded text-[11px] font-semibold flex items-center space-x-0.5"
                                title="Approve this record"
                              >
                                <CheckCircle2 className="w-3 h-3" />
                                <span>Approve</span>
                              </button>
                            )}

                            {revStatus !== 'REJECTED' && (
                              <button
                                onClick={() => handleOpenRejectSingle(record.id)}
                                className="px-2 py-1 bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 rounded text-[11px] font-semibold flex items-center space-x-0.5"
                                title="Reject this record"
                              >
                                <XCircle className="w-3 h-3" />
                                <span>Reject</span>
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            <div className="p-3 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-600 gap-2">
              <div>
                Showing <strong>{((effectivePage - 1) * pageSize) + 1}</strong> to{' '}
                <strong>{Math.min(effectivePage * pageSize, filteredRecords.length)}</strong> of{' '}
                <strong>{filteredRecords.length}</strong> records (Page {effectivePage} of {totalPages})
              </div>

              <div className="flex items-center space-x-1.5">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={effectivePage <= 1}
                  className="px-2.5 py-1 rounded border border-slate-300 bg-white hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed flex items-center space-x-1"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Prev</span>
                </button>

                <span className="px-2 font-semibold text-slate-800">
                  {effectivePage} / {totalPages}
                </span>

                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={effectivePage >= totalPages}
                  className="px-2.5 py-1 rounded border border-slate-300 bg-white hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed flex items-center space-x-1"
                >
                  <span>Next</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 7. Rejection Reason Modal */}
      {rejectionModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-5 shadow-2xl border border-slate-200 space-y-4 animate-in fade-in zoom-in duration-150">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center space-x-2 text-rose-700">
                <XCircle className="w-5 h-5" />
                <h3 className="font-bold text-sm text-slate-900">
                  Reject {rejectionTargetIds.length} Staged Record(s)
                </h3>
              </div>
              <button
                onClick={() => setRejectionModalOpen(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-600">
              Please enter the statutory justification or validation defect reason for rejecting {rejectionTargetIds.length} record(s). Original staged history is preserved.
            </p>

            {rejectionError && (
              <div className="p-2.5 bg-rose-50 border border-rose-200 text-rose-800 rounded text-xs font-medium flex items-center space-x-1.5">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{rejectionError}</span>
              </div>
            )}

            <form onSubmit={handleConfirmRejection} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Rejection Reason *
                </label>
                <textarea
                  rows={3}
                  value={rejectionReasonInput}
                  onChange={(e) => {
                    setRejectionReasonInput(e.target.value);
                    setRejectionError(null);
                  }}
                  placeholder="e.g. Incomplete RFP documents, outdated submission date, non-statutory authority, or superseded tender notice."
                  className="w-full border border-slate-300 rounded-lg p-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-rose-500 focus:outline-none"
                  autoFocus
                />
              </div>

              <div className="flex items-center justify-end space-x-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setRejectionModalOpen(false)}
                  className="px-3.5 py-2 border border-slate-300 hover:bg-slate-100 rounded-lg text-slate-700 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-bold shadow-sm"
                >
                  Confirm Rejection
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 8. Record Inspector Drawer / Modal */}
      {inspectingRecord && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="flex items-start justify-between border-b border-slate-200 pb-3">
              <div>
                <span className="font-mono text-[11px] font-bold text-blue-600">
                  {inspectingRecord.id}
                </span>
                <h3 className="font-bold text-base text-slate-900">{inspectingRecord.title}</h3>
              </div>
              <button
                onClick={() => setInspectingRecord(null)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-50 p-2.5 rounded border">
                <strong>Authority:</strong> {inspectingRecord.authority}
              </div>
              <div className="bg-slate-50 p-2.5 rounded border">
                <strong>Review Status:</strong>{' '}
                <span className="font-bold text-blue-700">
                  {inspectingRecord.reviewStatus || inspectingRecord.verificationStatus}
                </span>
              </div>
              <div className="bg-slate-50 p-2.5 rounded border">
                <strong>Category / Sector:</strong> {inspectingRecord.category || (inspectingRecord as any).sector}
              </div>
              <div className="bg-slate-50 p-2.5 rounded border">
                <strong>State:</strong> {(inspectingRecord as any).state || (inspectingRecord as any).location || 'National'}
              </div>
              <div className="bg-slate-50 p-2.5 rounded border col-span-2">
                <strong>Official Source URL:</strong>{' '}
                <a
                  href={inspectingRecord.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline break-all"
                >
                  {inspectingRecord.sourceUrl}
                </a>
              </div>
            </div>

            {/* Provenance breakdown */}
            <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-lg text-xs space-y-1 text-blue-900">
              <div className="font-bold flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-700" />
                <span>Statutory Provenance Log</span>
              </div>
              <div className="text-[11px] text-blue-800 grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                <div><strong>Source System:</strong> {inspectingRecord.provenance?.sourceSystem}</div>
                <div><strong>Source ID:</strong> {inspectingRecord.provenance?.sourceId || 'N/A'}</div>
                <div><strong>Batch ID:</strong> {inspectingRecord.provenance?.batchId}</div>
                <div><strong>Imported At:</strong> {inspectingRecord.provenance?.importedAt}</div>
                <div><strong>Confidence:</strong> {Math.round((inspectingRecord.provenance?.confidenceScore || 0) * 100)}%</div>
                <div><strong>Access Type:</strong> {inspectingRecord.provenance?.accessType || 'ADMIN_UPLOAD'}</div>
              </div>
            </div>

            {inspectingRecord.rejectionReason && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-xs text-rose-800">
                <strong>Rejection Reason:</strong> {inspectingRecord.rejectionReason}
              </div>
            )}

            <div className="text-xs text-slate-700 bg-slate-50 p-3 rounded border space-y-1">
              <strong>Description:</strong>
              <p className="text-slate-600 leading-relaxed whitespace-pre-wrap">{inspectingRecord.description}</p>
            </div>

            <div className="flex justify-end pt-2 border-t border-slate-100">
              <button
                onClick={() => setInspectingRecord(null)}
                className="px-4 py-2 bg-slate-800 text-white rounded-lg text-xs font-semibold hover:bg-slate-900"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
