import React, { useState } from 'react';
import { globalStagingQueue } from '../ingestion/staging';
import { validateOpportunityRecord } from '../ingestion/validation';

export const IIGManualCaptureForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    location: '',
    fundingAmount: '',
    authority: '',
    status: 'ACTIVE',
    sourceUrl: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct record
    const record = {
      ...formData,
      sourceName: 'India Investment Grid (IIG) / Invest India',
      verificationStatus: 'PENDING' as const,
    };

    // Run validation
    const val = validateOpportunityRecord(record as any);

    if (!val.isValid) {
      alert(`Validation failed: ${val.errors.join(', ')}`);
      return;
    }

    // Stage
    globalStagingQueue.addOpportunity({
      ...record,
      id: `iig-manual-${Date.now()}`,
      slug: `iig-${Date.now()}`,
      status: 'PENDING' as any,
      sourceAuthority: 'India Investment Grid (IIG) / Invest India',
      provenance: {
        sourceSystem: 'IIG',
        importedAt: new Date().toISOString(),
        batchId: `manual-${Date.now()}`,
        rawRecordHash: JSON.stringify(record),
        confidenceScore: 0.95
      },
      validationErrors: [],
      lifecycleStatus: 'NEEDS_REVIEW',
      deadline: new Date().toISOString().split('T')[0]
    });

    alert('Opportunity staged successfully!');
    setFormData({
        title: '',
        description: '',
        category: '',
        location: '',
        fundingAmount: '',
        authority: '',
        status: 'ACTIVE',
        sourceUrl: '',
      });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 mt-6">
      <h2 className="text-xl font-bold mb-4">IIG Manual Capture</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input placeholder="Title *" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="border p-2 rounded" required />
        <input placeholder="Category *" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="border p-2 rounded" required />
        <input placeholder="Location" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} className="border p-2 rounded" />
        <input placeholder="Authority" value={formData.authority} onChange={e => setFormData({...formData, authority: e.target.value})} className="border p-2 rounded" />
        <input placeholder="Funding Amount" value={formData.fundingAmount} onChange={e => setFormData({...formData, fundingAmount: e.target.value})} className="border p-2 rounded" />
        <input placeholder="IIG Project URL *" value={formData.sourceUrl} onChange={e => setFormData({...formData, sourceUrl: e.target.value})} className="border p-2 rounded" required />
      </div>
      <textarea placeholder="Description *" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full border p-2 rounded mt-4" required />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded mt-4 hover:bg-green-700">Stage Opportunity</button>
    </form>
  );
};
