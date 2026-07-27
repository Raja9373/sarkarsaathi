import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { StateProvider } from './context/StateContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Home } from './pages/Home';
import { ServiceDetail } from './pages/ServiceDetail';
import { BankingHub } from './pages/BankingHub';

export default function App() {
  return (
    <HelmetProvider>
      <StateProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col bg-sarkar-dark text-sarkar-textLight">
            <Header />
            <main className="flex-grow">
              <Routes>
                {/* Default redirect to Delhi Phase 1 */}
                <Route path="/" element={<Navigate to="/delhi" replace />} />
                
                {/* State dynamic routes */}
                <Route path="/:stateId" element={<Home />} />
                <Route path="/:stateId/service/:slug" element={<ServiceDetail />} />
                <Route path="/:stateId/banking" element={<BankingHub />} />
                <Route path="/:stateId/life-events" element={<Home />} />
                <Route path="/:stateId/finders" element={<Home />} />
                <Route path="/:stateId/tools" element={<Home />} />

                {/* Fallback */}
                <Route path="*" element={<Navigate to="/delhi" replace />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </StateProvider>
    </HelmetProvider>
  );
}