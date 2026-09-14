import React, { useState } from 'react';
import { BatchImporter } from '../ingestion/batchImporter';
import { BatchImportRequest, BatchImportResult } from '../ingestion/types';
import { IIGManualCaptureForm } from './IIGManualCaptureForm';

// NOTE: This interface is for administration purposes only.
// It is NOT linked to any authentication system yet. 
// INTEGRATION POINT: Add OAuth/Admin Auth guard here.

export const AdminImport = () => {
  const [file, setFile] = useState<File | null>(null);
  const [jsonPaste, setJsonPaste] = useState('');
  const [targetCatalog, setTargetCatalog] = useState('Opportunities');
  const [result, setResult] = useState<BatchImportResult | null>(null);
  const [isDryRun, setIsDryRun] = useState(true);
  const [activeTab, setActiveTab] = useState<'batch' | 'manual'>('batch');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  const handleImport = async () => {
    if (!file && !jsonPaste) return;

    // INTEGRATION POINT: Connect to Backend API for parsing and importing
    alert(`Importing from ${file ? file.name : 'pasted JSON'} to ${targetCatalog}. Dry Run: ${isDryRun}`);
    
    // Mocking a result for UI testing
    setResult({
      batchId: 'mock-id',
      totalReceived: 10,
      successfullyStaged: 8,
      autoApproved: 0,
      duplicatesDetected: 1,
      validationFailed: 1,
      errors: [{ index: 2, message: 'Invalid field' }]
    });
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Admin Import Portal</h1>
      
      <div className="flex mb-4 border-b">
        <button onClick={() => setActiveTab('batch')} className={`px-4 py-2 ${activeTab === 'batch' ? 'border-b-2 border-blue-600 font-semibold' : ''}`}>Batch Import</button>
        <button onClick={() => setActiveTab('manual')} className={`px-4 py-2 ${activeTab === 'manual' ? 'border-b-2 border-blue-600 font-semibold' : ''}`}>IIG Manual Capture</button>
      </div>

      {activeTab === 'batch' && (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Select File (CSV/JSON)</label>
            <input type="file" onChange={handleFileChange} className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Or Paste JSON Array</label>
            <textarea value={jsonPaste} onChange={(e) => setJsonPaste(e.target.value)} className="w-full border p-2 rounded" rows={5} placeholder='[{"title": "..."}]' />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Target Catalogue</label>
            <select value={targetCatalog} onChange={(e) => setTargetCatalog(e.target.value)} className="w-full border p-2 rounded">
              <option>Opportunities</option>
              <option>Tenders</option>
              <option>News</option>
              <option>Investment Schemes</option>
              <option>Investments</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input type="checkbox" checked={isDryRun} onChange={(e) => setIsDryRun(e.target.checked)} className="mr-2" />
              Dry Run Validation
            </label>
          </div>
          <button onClick={handleImport} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Run {isDryRun ? 'Dry Run' : 'Import'}
          </button>
        </div>
      )}

      {activeTab === 'manual' && <IIGManualCaptureForm />}

      {result && (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h2 className="text-xl font-semibold mb-4">Import Results</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-slate-50 p-4 rounded border">
              <div className="text-sm text-slate-500">Total Input</div>
              <div className="text-2xl font-bold">{result.totalReceived}</div>
            </div>
            <div className="bg-slate-50 p-4 rounded border">
              <div className="text-sm text-slate-500">Valid</div>
              <div className="text-2xl font-bold">{result.successfullyStaged + result.validationFailed}</div>
            </div>
            <div className="bg-slate-50 p-4 rounded border">
              <div className="text-sm text-slate-500">Invalid</div>
              <div className="text-2xl font-bold">{result.validationFailed}</div>
            </div>
            <div className="bg-slate-50 p-4 rounded border">
              <div className="text-sm text-slate-500">Duplicates</div>
              <div className="text-2xl font-bold">{result.duplicatesDetected}</div>
            </div>
            <div className="bg-slate-50 p-4 rounded border">
              <div className="text-sm text-slate-500">New</div>
              <div className="text-2xl font-bold">{result.successfullyStaged}</div>
            </div>
            <div className="bg-slate-50 p-4 rounded border">
              <div className="text-sm text-slate-500">Staged</div>
              <div className="text-2xl font-bold">{result.successfullyStaged}</div>
            </div>
            <div className="bg-slate-50 p-4 rounded border">
              <div className="text-sm text-slate-500">Published</div>
              <div className="text-2xl font-bold">0</div>
            </div>
          </div>
          {result.errors && result.errors.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Validation Errors</h3>
              <ul className="list-disc pl-5 text-sm text-red-600">
                {result.errors.map((error, i) => (
                  <li key={i}>Record {error.index}: {error.message}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
