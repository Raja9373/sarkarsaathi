import React from 'react';
import { FileQuestion, Home, ArrowLeft, Search } from 'lucide-react';

interface NotFoundViewProps {
  onNavigate: (route: string, slug?: string) => void;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-center">
        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <FileQuestion className="w-8 h-8" />
        </div>
        
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Page Not Found</h1>
        <p className="text-slate-600 text-sm mb-8">
          The official scheme, service, or page you are looking for does not exist or has been removed from SarkarSaathi.
        </p>

        <div className="space-y-3">
          <button
            onClick={() => onNavigate('/')}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-xl transition-colors text-sm shadow-sm"
          >
            <Home className="w-4 h-4" />
            Go to Homepage
          </button>
          
          <button
            onClick={() => window.history.back()}
            className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-2.5 px-4 rounded-xl transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-400">
          SarkarSaathi &bull; Verified Government Schemes & Services
        </div>
      </div>
    </div>
  );
};
