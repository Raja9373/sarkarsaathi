import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppState } from '../../context/StateContext';
import { Shield, ChevronDown } from 'lucide-react';

export const Header = () => {
  const { currentState, setCurrentState, SUPPORTED_STATES } = useAppState();
  const navigate = useNavigate();

  const handleStateChange = (e) => {
    const val = e.target.value;
    setCurrentState(val);
    navigate(`/${val}`);
  };

  return (
    <header className="sticky top-0 z-50 bg-sarkar-dark/95 backdrop-blur border-b border-sarkar-border">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link to={`/${currentState}`} className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-sarkar-orange flex items-center justify-center font-bold text-xl text-white shadow-lg">
            S
          </div>
          <div>
            <span className="text-xl font-extrabold text-white tracking-wide">Sarkar<span className="text-sarkar-orange">Saathi</span></span>
            <span className="block text-[10px] text-sarkar-textMuted tracking-tight">.org • official assist</span>
          </div>
        </Link>

        {/* State Selector & Main Nav */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          <div className="relative">
            <select
              value={currentState}
              onChange={handleStateChange}
              className="bg-sarkar-card text-sarkar-orange font-semibold border border-sarkar-orange/50 rounded-lg px-3 py-1.5 text-xs sm:text-sm appearance-none pr-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-sarkar-orange"
            >
              {SUPPORTED_STATES.map((st) => (
                <option key={st.id} value={st.id} disabled={!st.active} className="bg-sarkar-card text-white">
                  {st.name} {!st.active ? '(Coming Soon)' : ''}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-sarkar-orange absolute right-2 top-2.5 pointer-events-none" />
          </div>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link to={`/${currentState}/finders`} className="hover:text-sarkar-orange transition-colors">Finders</Link>
            <Link to={`/${currentState}/banking`} className="hover:text-sarkar-orange transition-colors">Banking Hub</Link>
            <Link to={`/${currentState}/tools`} className="hover:text-sarkar-orange transition-colors">Calculators</Link>
            <Link to={`/${currentState}/life-events`} className="hover:text-sarkar-orange transition-colors">Life Events</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};