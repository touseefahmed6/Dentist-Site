
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { DesignSystem } from './components/DesignSystem';
import { View } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.LANDING);

  return (
    <div className="min-h-screen bg-[#0c0e12] text-[#f8fafc] selection:bg-[#2dd4bf] selection:text-[#0c0e12]">
      <Navbar onNavigate={setCurrentView} currentView={currentView} />
      
      <main>
        {currentView === View.LANDING ? (
          <LandingPage />
        ) : (
          <DesignSystem />
        )}
      </main>
    </div>
  );
};

export default App;
