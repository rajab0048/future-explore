import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyKidsLoveIt from "./components/WhyKidsLoveIt";
import GetStartedSteps from "./components/GetStartedSteps";
import PricingSection from "./components/PricingSection";
import FamiliesCTA from "./components/FamiliesCTA";
import SiteFooter from "./components/SiteFooter";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import CreateExplorer from "./components/CreateExplorer";

// Landing page component
const LandingPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-[#fff7f3] via-[#f4fbff] to-[#fff5ff] text-slate-900">
    <Navbar />
    <main className="px-4 sm:px-8 lg:px-16 xl:px-24 pb-16">
      <Hero />
      <WhyKidsLoveIt />
      <GetStartedSteps />
      <PricingSection />
      <FamiliesCTA />
    </main>
    <SiteFooter />
  </div>
);

// Dashboard wrapper component
const DashboardWrapper = () => {
  // Check if explorers exist
  const explorers = localStorage.getItem('explorers');
  
  if (!explorers || JSON.parse(explorers).length === 0) {
    return <CreateExplorer />;
  }
  
  return <Dashboard />;
};

// Auth wrapper component
const AuthWrapper = () => {
  const { isAuthenticated } = useAuth();
  const [currentView, setCurrentView] = useState('login');

  if (isAuthenticated) {
    return <DashboardWrapper />;
  }

  return (
    <>
      {currentView === 'login' ? (
        <Login onSwitchToSignup={() => setCurrentView('signup')} />
      ) : (
        <Signup onSwitchToLogin={() => setCurrentView('login')} />
      )}
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthWrapper />} />
        <Route path="/create-explorer" element={
          <ProtectedRoute>
            <CreateExplorer />
          </ProtectedRoute>
        } />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <DashboardWrapper />
          </ProtectedRoute>
        } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  );
}

// Protected route component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }
  
  return children;
};

export default App;