import React, { useState } from 'react';
import { Search, ExternalLink } from 'lucide-react';
import { SERVICES_DATABASE } from '../../data/servicesData';
import { Link } from 'react-router-dom';

export const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    const val = e.target.value;
    setQuery(val);
    if (val.trim().length > 1) {
      const filtered = SERVICES_DATABASE.filter(item => 
        item.title.toLowerCase().includes(val.toLowerCase()) ||
        item.category.toLowerCase().includes(val.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  };

  const sampleTags = ['Aadhaar', 'PAN', 'Passport', 'Driving Licence', 'Income Certificate', 'Property Tax', 'IFSC Code', 'Traffic Challan'];

  return (
    <div className="w-full max-w-3xl mx-auto relative">
      <div className="relative flex items-center">
        <Search className="w-6 h-6 text-sarkar-orange absolute left-4 pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="खोजें: Aadhaar, PAN, Passport, Income Certificate, IFSC, Property Tax..."
          className="w-full bg-sarkar-card text-white placeholder-sarkar-textMuted border-2 border-sarkar-border focus:border-sarkar-orange rounded-xl pl-12 pr-4 py-4 text-base sm:text-lg focus:outline-none shadow-2xl transition-all"
        />
      </div>

      {/* Suggested Fast Tags */}
      {query.length === 0 && (
        <div className="mt-3 flex flex-wrap gap-2 justify-center text-xs">
          <span className="text-sarkar-textMuted font-medium py-1">Quick Search:</span>
          {sampleTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleSearch({ target: { value: tag } })}
              className="bg-sarkar-card hover:border-sarkar-orange border border-sarkar-border text-sarkar-textLight px-2.5 py-1 rounded-md transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {/* Search Overlay Results */}
      {results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-sarkar-card border border-sarkar-border rounded-xl shadow-2xl z-50 max-h-96 overflow-y-auto divide-y divide-sarkar-border">
          {results.map((res) => (
            <Link
              key={res.id}
              to={`/delhi/service/${res.slug}`}
              onClick={() => { setQuery(''); setResults([]); }}
              className="p-4 flex items-center justify-between hover:bg-sarkar-border/40 transition-colors block"
            >
              <div>
                <span className="text-xs text-sarkar-orange font-semibold block">{res.category}</span>
                <span className="text-sm font-medium text-white">{res.title}</span>
              </div>
              <ExternalLink className="w-4 h-4 text-sarkar-textMuted" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};