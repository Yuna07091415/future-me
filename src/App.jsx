import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Toast from './components/Toast';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Discover from './pages/Discover';
import Results from './pages/Results';
import Careers from './pages/Careers';
import Roadmap from './pages/Roadmap';

import './styles/App.css';

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <ScrollToTop />
        <div className="app-layout">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/results" element={<Results />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
          <Toast />
        </div>
      </AppProvider>
    </BrowserRouter>
  );
}
