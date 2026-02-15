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

type View = 'home' | 'phonology' | 'orthography' | 'grammar' | 'dictionary' | 'critique';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <Hero />
            <About />
          </>
        );
      case 'phonology': return <Phonology />;
      case 'orthography': return <Orthography />;
      case 'grammar': return <Grammar />;
      case 'dictionary': return <Dictionary />;
      case 'critique': return <Criticism />;
      default: return (
        <>
          <Hero />
          <About />
        </>
      );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fdfcf0]">
      <Navbar currentView={currentView} onNavigate={(view) => setCurrentView(view as View)} />
      <main className="flex-grow flex flex-col">
        {renderView()}
      </main>
      <Footer />
    </div>
  );
};

export default App;