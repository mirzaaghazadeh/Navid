import React from 'react';
import HeroSection from './components/HeroSection';
import ProjectsShowcase from './components/GamesSection';
import AboutSection from './components/AboutSection';
import TechStackButton from './components/TechStack/TechStackButton';
import EmailProtection from './components/EmailProtection';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <main className="container mx-auto px-4 py-12">
        <HeroSection />
        <ProjectsShowcase />
        <AboutSection />
      </main>
      <div className="text-center py-8 text-gray-600">
        Contact: <EmailProtection />
      </div>
      <TechStackButton />
    </div>
  );
}

export default App;