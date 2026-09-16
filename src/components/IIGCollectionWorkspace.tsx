import React, { useState, useMemo } from 'react';
import { opportunityRepository } from '../infrastructure/repositories/InvestmentRepository';
import { globalStagingQueue } from '../ingestion/staging';
import { DuplicateDetector } from '../ingestion/duplicates';
import {
  FolderKanban,
  Plus,
  Edit2,
  Trash2,
  Copy,
  Download,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  ShieldCheck,
  RotateCcw,
  Check,
  FileCode
} from 'lucide-react';

export interface IIGWorkspaceRecord {
  id: string; // client temporary id
  iigProjectId: string;
  title: string;
  officialSourceUrl: string;
  sourceName: string;
  sourceType: string;
  verificationDate: string;
  description?: string;
  state?: string;
  district?: string;
  sector?: string;
  projectStatus?: string;
  investmentValue?: string;
  employmentPotential?: string;
  projectStage?: string;
  projectType?: string;
  implementingAgency?: string;
  contactInformation?: string;
}

const DEFAULT_FORM: Omit<IIGWorkspaceRecord, 'id'> = {
  iigProjectId: '',
  title: '',
  officialSourceUrl: 'https://indiainvestmentgrid.gov.in/project/',
  sourceName: 'India Investment Grid',
  sourceType: 'Official Government/Investment Platform Source',
  verificationDate: new Date().toISOString().split('T')[0],
  description: '',
  state: '',
  district: '',
  sector: '',
  projectStatus: 'Active',
  investmentValue: '',
  employmentPotential: '',
  projectStage: 'Under Implementation',
  projectType: 'Greenfield',
  implementingAgency: '',
  contactInformation: ''
};

export const IIGCollectionWorkspace: React.FC = () => {
  const [records, setRecords] = useState<IIGWorkspaceRecord[]>([]);
  const [formData, setFormData] = useState<Omit<IIGWorkspaceRecord, 'id'>>({ ...DEFAULT_FORM });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [copiedNotification, setCopiedNotification] = useState(false);
  const [showJsonModal, setShowJsonModal] = useState(false);

  // Duplicate detector instance against published & staged records
  const publishedOpps = useMemo(() => opportunityRepository.getAll(), []);
  const stagedOpps = useMemo(() => globalStagingQueue.getStagedOpportunities(), []);
  
  const duplicateDetector = useMemo(() => {
    return new DuplicateDetector(
      [...publishedOpps, ...(stagedOpps as any[])],
      []
    );
  }, [publishedOpps, stagedOpps]);

  const validateUrl = (url: string): boolean => {
    try {
      const parsed = new URL(url.trim());
      return parsed.protocol === 'http:' || parsed.protocol === 'https:';
    } catch {
      return false;
    }
  };

  const handleSaveRecord = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    // 1. Capacity limit check
    if (!editingId && records.length >= 100) {
      setFormError('Workspace capacity reached (100 records maximum). Please export the batch before adding more records.');
      return;
    }

    const cleanProjectId = formData.iigProjectId.trim();
    const cleanTitle = formData.title.trim();
    const cleanUrl = formData.officialSourceUrl.trim();
    const cleanSourceName = formData.sourceName.trim();
    const cleanSourceType = formData.sourceType.trim();
    const cleanDate = formData.verificationDate.trim();

    // 2. Required fields validation
    if (!cleanProjectId) {
      setFormError('IIG Project ID is required.');
      return;
    }
    if (!cleanTitle) {
      setFormError('Project Title is required.');
      return;
    }
    if (!cleanUrl) {
      setFormError('Official Source URL is required.');
      return;
    }
    if (!validateUrl(cleanUrl)) {
      setFormError('Official Source URL must be a valid HTTP/HTTPS URL (e.g. https://indiainvestmentgrid.gov.in/project/...).');
      return;
    }
    if (!cleanSourceName) {
      setFormError('Source Name is required.');
      return;
    }
    if (!cleanSourceType) {
      setFormError('Source Type is required.');
      return;
    }
    if (!cleanDate) {
      setFormError('Verification Date is required.');
      return;
    }

    // 3. Intra-workspace duplicate check
    const duplicateInWorkspace = records.some(
      r => r.iigProjectId.toLowerCase() === cleanProjectId.toLowerCase() && r.id !== editingId
    );
    if (duplicateInWorkspace) {
      setFormError(`Duplicate Project ID: "${cleanProjectId}" already exists in this workspace batch.`);
      return;
    }

    // 4. External duplicate check (Published + Staged)
    const dupCheck = duplicateDetector.isOpportunityDuplicate({
      id: `iig-${cleanProjectId}`,
      projectId: cleanProjectId,
      title: cleanTitle,
      sourceUrl: cleanUrl
    });

    if (dupCheck.isDuplicate) {
      setFormError(`Duplicate Detected in Catalogue: ${dupCheck.reason || 'This IIG Project ID or URL already exists in Published or Staged Opportunities.'}`);
      return;
    }

    // Construct cleaned record
    const cleanedRecord: IIGWorkspaceRecord = {
      id: editingId || `ws-rec-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      iigProjectId: cleanProjectId,
      title: cleanTitle,
      officialSourceUrl: cleanUrl,
      sourceName: cleanSourceName,
      sourceType: cleanSourceType,
      verificationDate: cleanDate,
      description: formData.description?.trim() || undefined,
      state: formData.state?.trim() || undefined,
      district: formData.district?.trim() || undefined,
      sector: formData.sector?.trim() || undefined,
      projectStatus: formData.projectStatus?.trim() || undefined,
      investmentValue: formData.investmentValue?.trim() || undefined,
      employmentPotential: formData.employmentPotential?.trim() || undefined,
      projectStage: formData.projectStage?.trim() || undefined,
      projectType: formData.projectType?.trim() || undefined,
      implementingAgency: formData.implementingAgency?.trim() || undefined,
      contactInformation: formData.contactInformation?.trim() || undefined
    };

    if (editingId) {
      setRecords(prev => prev.map(r => r.id === editingId ? cleanedRecord : r));
      setEditingId(null);
    } else {
      setRecords(prev => [...prev, cleanedRecord]);
    }

    // Reset form to defaults
    setFormData({
      ...DEFAULT_FORM,
      verificationDate: new Date().toISOString().split('T')[0]
    });
  };

  const handleEdit = (record: IIGWorkspaceRecord) => {
    setEditingId(record.id);
    setFormData({
      iigProjectId: record.iigProjectId,
      title: record.title,
      officialSourceUrl: record.officialSourceUrl,
      sourceName: record.sourceName,
      sourceType: record.sourceType,
      verificationDate: record.verificationDate,
      description: record.description || '',
      state: record.state || '',
      district: record.district || '',
      sector: record.sector || '',
      projectStatus: record.projectStatus || 'Active',
      investmentValue: record.investmentValue || '',
      employmentPotential: record.employmentPotential || '',
      projectStage: record.projectStage || 'Under Implementation',
      projectType: record.projectType || 'Greenfield',
      implementingAgency: record.implementingAgency || '',
      contactInformation: record.contactInformation || ''
    });
    setFormError(null);
  };

  const handleDelete = (id: string) => {
    setRecords(prev => prev.filter(r => r.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setFormData({ ...DEFAULT_FORM });
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData({ ...DEFAULT_FORM });
    setFormError(null);
  };

  const handleClearWorkspace = () => {
    if (records.length === 0) return;
    if (window.confirm('Are you sure you want to clear all unexported records in this workspace?')) {
      setRecords([]);
      setEditingId(null);
      setFormData({ ...DEFAULT_FORM });
      setFormError(null);
    }
  };

  // Generate clean exportable JSON matching IIG Batch Paste specification
  const formattedJsonBatch = useMemo(() => {
    const exportable = records.map(r => ({
      iigProjectId: r.iigProjectId,
      title: r.title,
      officialSourceUrl: r.officialSourceUrl,
      sourceName: r.sourceName,
      sourceType: r.sourceType,
      verificationDate: r.verificationDate,
      ...(r.description ? { description: r.description } : {}),
      ...(r.state ? { state: r.state } : {}),
      ...(r.district ? { district: r.district } : {}),
      ...(r.sector ? { sector: r.sector } : {}),
      ...(r.projectStatus ? { projectStatus: r.projectStatus } : {}),
      ...(r.investmentValue ? { investmentValue: r.investmentValue } : {}),
      ...(r.employmentPotential ? { employmentPotential: r.employmentPotential } : {}),
      ...(r.projectStage ? { projectStage: r.projectStage } : {}),
      ...(r.projectType ? { projectType: r.projectType } : {}),
      ...(r.implementingAgency ? { implementingAgency: r.implementingAgency } : {}),
      ...(r.contactInformation ? { contactInformation: r.contactInformation } : {})
    }));
    return JSON.stringify(exportable, null, 2);
  }, [records]);

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(formattedJsonBatch);
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 2500);
    } catch {
      // Fallback
      setCopiedNotification(false);
    }
  };

  const handleDownloadJson = () => {
    const blob = new Blob([formattedJsonBatch], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `iig_batch_${records.length}_records_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Workspace Header */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
          <div>
            <div className="flex items-center space-x-2">
              <FolderKanban className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-bold text-slate-900">IIG Collection Workspace</h2>
              <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
                {records.length} / 100 Records
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Manually capture and prepare up to 100 verified India Investment Grid (IIG) opportunity records for the IIG Batch Paste workflow.
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() => setShowJsonModal(true)}
              disabled={records.length === 0}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-colors ${
                records.length === 0
                  ? 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
                  : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <FileCode className="w-3.5 h-3.5 text-slate-500" />
              <span>View JSON</span>
            </button>
            <button
              type="button"
              onClick={handleCopyToClipboard}
              disabled={records.length === 0}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-colors ${
                records.length === 0
                  ? 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800'
              }`}
            >
              {copiedNotification ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedNotification ? 'Copied!' : 'Copy Batch JSON'}</span>
            </button>
            <button
              type="button"
              onClick={handleDownloadJson}
              disabled={records.length === 0}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-colors ${
                records.length === 0
                  ? 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
                  : 'bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-800'
              }`}
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download JSON</span>
            </button>
            <button
              type="button"
              onClick={handleClearWorkspace}
              disabled={records.length === 0}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-colors ${
                records.length === 0
                  ? 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
                  : 'border border-red-200 text-red-700 hover:bg-red-50'
              }`}
            >
              <RotateCcw className="w-3.5 h-3.5 text-red-500" />
              <span>Clear</span>
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-medium text-slate-600">
            <span>Workspace Batch Progress</span>
            <span className="font-bold text-slate-900">{records.length} / 100 ({records.length}%)</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden border border-slate-200">
            <div
              className={`h-full transition-all duration-300 ${
                records.length >= 100
                  ? 'bg-emerald-600'
                  : records.length >= 50
                  ? 'bg-blue-600'
                  : 'bg-indigo-600'
              }`}
              style={{ width: `${Math.min(records.length, 100)}%` }}
            />
          </div>
        </div>

        {/* Safeguards Notice */}
        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 flex items-start space-x-2">
          <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-slate-900">Workspace Safeguards: </span>
            This workspace prepares records for human review. It does NOT automatically stage or publish records. All outputs must proceed through the standard IIG Batch Paste and human approval pipeline.
          </div>
        </div>
      </div>

      {/* Manual Input Form */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
          <h3 className="text-sm font-bold text-slate-900 flex items-center space-x-2">
            <Plus className="w-4 h-4 text-blue-600" />
            <span>{editingId ? 'Edit Workspace Record' : 'Add New IIG Opportunity Record'}</span>
          </h3>
          {editingId && (
            <button
              type="button"
              onClick={handleCancelEdit}
              className="text-xs font-medium text-slate-500 hover:text-slate-800"
            >
              Cancel Edit
            </button>
          )}
        </div>

        {formError && (
          <div className="p-3.5 bg-red-50 border border-red-200 rounded-lg text-xs font-medium text-red-800 flex items-start space-x-2">
            <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
            <span>{formError}</span>
          </div>
        )}

        <form onSubmit={handleSaveRecord} className="space-y-4">
          {/* Mandatory Fields Group */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-3">
            <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Mandatory Fields
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  IIG Project ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. IIG-2026-8801"
                  value={formData.iigProjectId}
                  onChange={e => setFormData({ ...formData, iigProjectId: e.target.value })}
                  className="w-full text-xs p-2 border border-slate-300 rounded bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Project Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mega Food Park Phase II"
                  value={formData.title}
                  onChange={e => setFormData({ ...formData, title: e.target.value })}
                  className="w-full text-xs p-2 border border-slate-300 rounded bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Official Source URL <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://indiainvestmentgrid.gov.in/project/..."
                  value={formData.officialSourceUrl}
                  onChange={e => setFormData({ ...formData, officialSourceUrl: e.target.value })}
                  className="w-full text-xs p-2 border border-slate-300 rounded bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Source Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.sourceName}
                  onChange={e => setFormData({ ...formData, sourceName: e.target.value })}
                  className="w-full text-xs p-2 border border-slate-300 rounded bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Source Type <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.sourceType}
                  onChange={e => setFormData({ ...formData, sourceType: e.target.value })}
                  className="w-full text-xs p-2 border border-slate-300 rounded bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Verification Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  required
                  value={formData.verificationDate}
                  onChange={e => setFormData({ ...formData, verificationDate: e.target.value })}
                  className="w-full text-xs p-2 border border-slate-300 rounded bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Optional Fields Group */}
          <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-3">
            <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Optional Fields (Capture when displayed on IIG portal)
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">State</label>
                <input
                  type="text"
                  placeholder="e.g. Gujarat"
                  value={formData.state || ''}
                  onChange={e => setFormData({ ...formData, state: e.target.value })}
                  className="w-full text-xs p-2 border border-slate-300 rounded bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">District</label>
                <input
                  type="text"
                  placeholder="e.g. Surat"
                  value={formData.district || ''}
                  onChange={e => setFormData({ ...formData, district: e.target.value })}
                  className="w-full text-xs p-2 border border-slate-300 rounded bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Sector</label>
                <input
                  type="text"
                  placeholder="e.g. Food Processing"
                  value={formData.sector || ''}
                  onChange={e => setFormData({ ...formData, sector: e.target.value })}
                  className="w-full text-xs p-2 border border-slate-300 rounded bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Project Status</label>
                <input
                  type="text"
                  placeholder="e.g. Under Implementation"
                  value={formData.projectStatus || ''}
                  onChange={e => setFormData({ ...formData, projectStatus: e.target.value })}
                  className="w-full text-xs p-2 border border-slate-300 rounded bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Investment Value</label>
                <input
                  type="text"
                  placeholder="e.g. 250 Crore"
                  value={formData.investmentValue || ''}
                  onChange={e => setFormData({ ...formData, investmentValue: e.target.value })}
                  className="w-full text-xs p-2 border border-slate-300 rounded bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Employment Potential</label>
                <input
                  type="text"
                  placeholder="e.g. 1500"
                  value={formData.employmentPotential || ''}
                  onChange={e => setFormData({ ...formData, employmentPotential: e.target.value })}
                  className="w-full text-xs p-2 border border-slate-300 rounded bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Project Stage</label>
                <input
                  type="text"
                  placeholder="e.g. DPR Approved"
                  value={formData.projectStage || ''}
                  onChange={e => setFormData({ ...formData, projectStage: e.target.value })}
                  className="w-full text-xs p-2 border border-slate-300 rounded bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Project Type</label>
                <input
                  type="text"
                  placeholder="e.g. Greenfield / Brownfield"
                  value={formData.projectType || ''}
                  onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full text-xs p-2 border border-slate-300 rounded bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">Implementing Agency</label>
                <input
                  type="text"
                  placeholder="e.g. Gujarat Industrial Development Corporation"
                  value={formData.implementingAgency || ''}
                  onChange={e => setFormData({ ...formData, implementingAgency: e.target.value })}
                  className="w-full text-xs p-2 border border-slate-300 rounded bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">Contact Information</label>
                <input
                  type="text"
                  placeholder="e.g. contact@gidc.gov.in"
                  value={formData.contactInformation || ''}
                  onChange={e => setFormData({ ...formData, contactInformation: e.target.value })}
                  className="w-full text-xs p-2 border border-slate-300 rounded bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2 lg:col-span-4">
                <label className="block text-xs font-semibold text-slate-700 mb-1">Description</label>
                <textarea
                  rows={2}
                  placeholder="Brief official project scope and objectives..."
                  value={formData.description || ''}
                  onChange={e => setFormData({ ...formData, description: e.target.value })}
                  className="w-full text-xs p-2 border border-slate-300 rounded bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-2 pt-2">
            {editingId && (
              <button
                type="button"
                onClick={handleCancelEdit}
                className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg text-xs font-semibold hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              disabled={records.length >= 100 && !editingId}
              className={`px-5 py-2 rounded-lg text-xs font-bold text-white transition-colors flex items-center space-x-1.5 ${
                records.length >= 100 && !editingId
                  ? 'bg-slate-300 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{editingId ? 'Update Record' : 'Add to Batch Workspace'}</span>
            </button>
          </div>
        </form>
      </div>

      {/* Workspace Records Table */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
          <h3 className="text-sm font-bold text-slate-900">
            Collected Workspace Records ({records.length} of 100)
          </h3>
          <span className="text-xs text-slate-500">
            {100 - records.length} slots remaining in batch
          </span>
        </div>

        {records.length === 0 ? (
          <div className="p-8 text-center bg-slate-50 border border-slate-200 border-dashed rounded-lg">
            <FolderKanban className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <div className="text-xs font-semibold text-slate-700">No records collected in this workspace yet.</div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              Fill out the form above to add up to 100 verified IIG records.
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto border border-slate-200 rounded-lg">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                <tr>
                  <th className="p-2.5 w-12 text-center">#</th>
                  <th className="p-2.5">Project ID</th>
                  <th className="p-2.5">Title</th>
                  <th className="p-2.5">State / Sector</th>
                  <th className="p-2.5">Value</th>
                  <th className="p-2.5">Verification Date</th>
                  <th className="p-2.5 w-24 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {records.map((rec, idx) => (
                  <tr key={rec.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-2.5 text-center font-mono text-slate-500">{idx + 1}</td>
                    <td className="p-2.5 font-mono font-bold text-blue-700">{rec.iigProjectId}</td>
                    <td className="p-2.5 font-medium text-slate-900 max-w-xs truncate" title={rec.title}>
                      {rec.title}
                    </td>
                    <td className="p-2.5 text-slate-600">
                      {rec.state || '-'}{rec.sector ? ` / ${rec.sector}` : ''}
                    </td>
                    <td className="p-2.5 text-slate-700">{rec.investmentValue || '-'}</td>
                    <td className="p-2.5 font-mono text-slate-500">{rec.verificationDate}</td>
                    <td className="p-2.5 text-right space-x-1.5">
                      <button
                        type="button"
                        onClick={() => handleEdit(rec)}
                        className="p-1 hover:bg-slate-200 rounded text-slate-600 transition-colors"
                        title="Edit Record"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(rec.id)}
                        className="p-1 hover:bg-red-100 rounded text-red-600 transition-colors"
                        title="Delete Record"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* JSON Viewer Modal */}
      {showJsonModal && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full p-6 border border-slate-200 shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 flex items-center space-x-2">
                <FileCode className="w-4 h-4 text-blue-600" />
                <span>Exportable IIG Batch JSON ({records.length} records)</span>
              </h3>
              <button
                type="button"
                onClick={() => setShowJsonModal(false)}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800"
              >
                Close
              </button>
            </div>

            <textarea
              readOnly
              rows={14}
              value={formattedJsonBatch}
              className="w-full font-mono text-xs p-3.5 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none"
            />

            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={handleCopyToClipboard}
                className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg text-xs font-semibold transition-colors flex items-center space-x-1.5"
              >
                {copiedNotification ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedNotification ? 'Copied!' : 'Copy to Clipboard'}</span>
              </button>
              <button
                type="button"
                onClick={() => setShowJsonModal(false)}
                className="px-4 py-2 border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-lg text-xs font-semibold transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
