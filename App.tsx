import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Phonology from './components/Phonology';
import Orthography from './components/Orthography';
import Grammar from './components/Grammar';
import Criticism from './components/Criticism';
import Dictionary from './components/Dictionary';
import Footer from './components/Footer';

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