import React, { useState } from 'react';
import { Download, FileText, Copy, Check, ExternalLink, Search, Printer } from 'lucide-react';
import { DOWNLOADS_LIST } from '../data/downloadsData';

export const DownloadCentre: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'all',
    'Govt Forms',
    'Self Declaration',
    'Affidavits',
    'NOC Formats'
  ];

  const filteredDownloads = DOWNLOADS_LIST.filter(item => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesQuery = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.hindiTitle.includes(searchQuery);
    return matchesCat && matchesQuery;
  });

  const handleCopyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDownloadTxtFile = (title: string, text: string) => {
    const header = `=================================================================\nSARKARSAATHI DELHI - OFFICIAL FORMAT & APPLICATION TEMPLATE\n${title.toUpperCase()}\n=================================================================\n\n`;
    const fullContent = header + text + `\n\n-----------------------------------------------------------------\nDownloaded from SarkarSaathi Delhi Govt Citizen Portal\nWeb: https://myaadhaar.uidai.gov.in/ | e-District Delhi\n-----------------------------------------------------------------`;
    
    const blob = new Blob([fullContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const cleanFileName = title.toLowerCase().replace(/[^a-z0-9]/g, '_').substring(0, 40) + '_format.txt';
    link.download = cleanFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrintPdfFormat = (title: string, text: string, dept: string) => {
    const printWindow = window.open('', '_blank', 'width=800,height=900');
    if (!printWindow) return;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${title} - SarkarSaathi Legal Format</title>
          <style>
            body { font-family: 'Times New Roman', Times, serif; padding: 40px; color: #000; line-height: 1.6; }
            .header { text-align: center; border-bottom: 2px solid #000; padding-bottom: 12px; margin-bottom: 24px; }
            .dept { font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #555; }
            .title { font-size: 18px; font-weight: bold; margin-top: 6px; }
            .content { font-size: 14px; white-space: pre-wrap; margin-top: 20px; }
            .footer { margin-top: 40px; border-top: 1px solid #ccc; pt-8; font-size: 10px; color: #666; text-align: center; }
            @media print {
              body { padding: 20px; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="dept">${dept}</div>
            <div class="title">${title}</div>
          </div>
          <div class="content">${text}</div>
          <div class="footer">Printed from SarkarSaathi Citizen Information Portal • Govt of NCT of Delhi</div>
          <script>
            window.onload = function() {
              window.print();
            };
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto bg-[#0B0F17] text-zinc-100">
      <div className="mb-8 border-b border-zinc-800 pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-400 border border-cyan-800/60 text-xs font-bold uppercase mb-2">
          <Download className="w-3.5 h-3.5" /> Official Downloads & Format Centre
        </div>
        <h2 className="text-3xl font-black text-white">Government Forms & Legal Affidavit Formats</h2>
        <p className="text-sm text-zinc-400 mt-1 max-w-2xl">
          Instantly download editable text formats, print ready-to-use notarized affidavit layouts, or visit official government department portals.
        </p>
      </div>

      {/* Filter Tabs & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex flex-wrap gap-1.5 bg-[#121824] p-1.5 rounded-xl border border-zinc-800">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition capitalize ${
                selectedCategory === cat 
                  ? 'bg-[#FF6B00] text-white' 
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              {cat === 'all' ? 'All Formats' : cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search forms, affidavit, NOC..."
            className="w-full bg-[#121824] border border-zinc-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF6B00]"
          />
        </div>
      </div>

      {/* Downloads List */}
      <div className="space-y-6">
        {filteredDownloads.map((item) => (
          <div key={item.id} className="p-6 rounded-2xl bg-[#121824] border border-zinc-800 space-y-4 shadow-xl">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-zinc-800 pb-3">
              <div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-zinc-900 text-[#FF6B00] border border-zinc-800 mb-1 inline-block">
                  {item.category} • {item.department}
                </span>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-xs text-zinc-400 mt-0.5">{item.hindiTitle}</p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {item.formatText && (
                  <>
                    <button
                      onClick={() => handleDownloadTxtFile(item.title, item.formatText!)}
                      className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#E65100] text-white text-xs font-bold shadow-lg hover:brightness-110 transition flex items-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Text File</span>
                    </button>

                    <button
                      onClick={() => handlePrintPdfFormat(item.title, item.formatText!, item.department)}
                      className="px-3 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-cyan-300 text-xs font-bold transition flex items-center gap-1.5"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Print / Save PDF</span>
                    </button>

                    <button
                      onClick={() => handleCopyText(item.id, item.formatText!)}
                      className="px-3 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 text-xs font-bold transition flex items-center gap-1.5"
                    >
                      {copiedId === item.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-amber-400" />}
                      <span>{copiedId === item.id ? 'Copied!' : 'Copy Text'}</span>
                    </button>
                  </>
                )}

                <a
                  href={item.officialPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-bold transition flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Official Portal</span>
                </a>
              </div>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed">{item.description}</p>

            {/* Format Text Box if Available */}
            {item.formatText && (
              <div className="bg-[#090D14] border border-zinc-800 rounded-xl p-4 font-mono text-[11px] text-zinc-300 leading-relaxed max-h-60 overflow-y-auto custom-scrollbar">
                <pre className="whitespace-pre-wrap font-sans">{item.formatText}</pre>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

