import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import DeveloperSection from './components/DeveloperSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <DeveloperSection />
      <TeamSection />
      <Footer />
    </div>
  );
}

export default App;