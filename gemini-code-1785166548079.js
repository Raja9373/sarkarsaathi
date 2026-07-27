import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-sarkar-card border-t border-sarkar-border text-sarkar-textMuted text-xs sm:text-sm mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
        
        {/* Col 1 */}
        <div className="col-span-2">
          <h3 className="text-white font-bold text-lg mb-2">SarkarSaathi.org</h3>
          <p className="text-xs text-sarkar-textMuted leading-relaxed mb-4">
            India's Independent Government Assistance Platform. We simplify government services, documentation, tools, and guides for every citizen without fees or data tracking.
          </p>
          <p className="text-[11px] text-sarkar-textMuted/60">
            Disclaimer: SarkarSaathi.org is an informational directory and is NOT affiliated with any government agency. All links redirect exclusively to official .gov.in or .nic.in websites.
          </p>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Hubs</h4>
          <ul className="space-y-2">
            <li><Link to="/delhi/finders" className="hover:text-sarkar-orange">Government Finders</Link></li>
            <li><Link to="/delhi/banking" className="hover:text-sarkar-orange">Banking Hub</Link></li>
            <li><Link to="/delhi/life-events" className="hover:text-sarkar-orange">Life Events Help</Link></li>
            <li><Link to="/delhi/calculators" className="hover:text-sarkar-orange">Tax & Calculators</Link></li>
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="text-white font-semibold mb-3">Legal & Policy</h4>
          <ul className="space-y-2">
            <li><Link to="/about-us" className="hover:text-sarkar-orange">About Us</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-sarkar-orange">Privacy Policy</Link></li>
            <li><Link to="/disclaimer" className="hover:text-sarkar-orange">Disclaimer</Link></li>
            <li><Link to="/terms" className="hover:text-sarkar-orange">Terms & Conditions</Link></li>
            <li><Link to="/editorial-policy" className="hover:text-sarkar-orange">Editorial Policy</Link></li>
          </ul>
        </div>

        {/* Col 4 */}
        <div>
          <h4 className="text-white font-semibold mb-3">Support & Feedback</h4>
          <ul className="space-y-2">
            <li><Link to="/contact" className="hover:text-sarkar-orange">Contact Us</Link></li>
            <li><Link to="/report-broken-link" className="hover:text-sarkar-orange">Report Broken Link</Link></li>
            <li><Link to="/suggest-service" className="hover:text-sarkar-orange">Suggest Service</Link></li>
            <li><Link to="/accessibility" className="hover:text-sarkar-orange">Accessibility Statement</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-sarkar-border py-4 text-center text-xs">
        © {new Date().getFullYear()} SarkarSaathi.org • Built for Public Good • No Login • Free Forever
      </div>
    </footer>
  );
};