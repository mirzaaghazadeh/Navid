import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import GamesSection from './components/GamesSection';
import AboutSection from './components/AboutSection';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <HeroSection />
        <GamesSection />
        <AboutSection />
      </main>
      <div className="text-center py-8 text-gray-600">
        Contact: <a href="mailto:me@navidincome.com" className="text-indigo-600 hover:text-indigo-700">me@navidincome.com</a>
      </div>
    </div>
  );
}

export default App;