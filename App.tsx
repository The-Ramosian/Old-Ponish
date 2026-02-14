import React, { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Phonology from './components/Phonology.tsx';
import Orthography from './components/Orthography.tsx';
import Grammar from './components/Grammar.tsx';
import Criticism from './components/Criticism.tsx';
import Dictionary from './components/Dictionary.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'phonology' | 'orthography' | 'grammar' | 'dictionary' | 'critique'>('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'phonology':
        return <Phonology />;
      case 'orthography':
        return <Orthography />;
      case 'grammar':
        return <Grammar />;
      case 'dictionary':
        return <Dictionary />;
      case 'critique':
        return <Criticism />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <About />
          </>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="flex-grow flex flex-col">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;