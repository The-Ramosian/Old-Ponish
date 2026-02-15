
import React, { useState, useEffect } from 'react';

const FlagIcon: React.FC = () => (
  <svg 
    viewBox="0 0 100 120" 
    className="w-10 h-12 drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Flag Background */}
    <path 
      d="M5 5 H95 V100 L50 115 L5 100 Z" 
      fill="#a3d5e8" 
      stroke="#cbd5e1" 
      strokeWidth="2"
    />
    
    {/* Stars Grid */}
    <g fill="white">
      {[...Array(6)].map((_, r) => (
        [...Array(6)].map((_, c) => (
          <circle key={`${r}-${c}`} cx={15 + c * 14} cy={15 + r * 14} r="1.5" />
        ))
      ))}
    </g>

    {/* Central Elements */}
    <path 
      d="M35 30 Q20 40 25 70 Q40 85 45 75" 
      fill="none" 
      stroke="#1d4ed8" 
      strokeWidth="4" 
      strokeLinecap="round" 
    />
    <path 
      d="M35 30 Q25 25 20 35" 
      fill="#7e22ce" 
    />
    <path 
      d="M65 30 Q80 40 75 70 Q60 85 55 75" 
      fill="none" 
      stroke="white" 
      strokeWidth="4" 
      strokeLinecap="round" 
    />
    <path 
      d="M65 30 Q75 25 80 35" 
      fill="#5eead4" 
    />
    <circle cx="50" cy="40" r="8" fill="#fde047" />
    <g stroke="#f97316" strokeWidth="1">
      {[...Array(8)].map((_, i) => (
        <line 
          key={i} 
          x1="50" y1="40" 
          x2={50 + 12 * Math.cos(i * Math.PI / 4)} 
          y2={40 + 12 * Math.sin(i * Math.PI / 4)} 
        />
      ))}
    </g>
    <circle cx="50" cy="65" r="8" fill="#a855f7" />
    <circle cx="55" cy="65" r="8" fill="#a3d5e8" />
  </svg>
);

interface NavbarProps {
  onNavigate: (view: string) => void;
  currentView: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Phonology', id: 'phonology' },
    { name: 'Orthography', id: 'orthography' },
    { name: 'Grammar', id: 'grammar' },
    { name: 'Literature', id: 'literature' },
    { name: 'Dictionary', id: 'dictionary' },
    { name: 'Critique', id: 'critique' }
  ];

  const handleNav = (id: string) => {
    onNavigate(id);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className="border-b border-[#e2e8f0] bg-[#fdfcf0]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 py-3">
          
          {/* Left: Hamburger Menu */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="p-2 text-[#1e293b] hover:bg-[#f1f5f9] rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#4c1d95]/20"
            aria-label="Open Menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Right: Brand Identity */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => handleNav('home')}
          >
            <span className="text-xl md:text-2xl font-bold tracking-tight text-[#1e293b] mr-3 font-serif">Old Ponish</span>
            <FlagIcon />
          </div>
        </div>
      </nav>

      {/* Side Menu Drawer */}
      <div 
        className={`fixed inset-0 z-[60] transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Drawer Content */}
        <div 
          className={`absolute top-0 left-0 w-[280px] md:w-[320px] h-full bg-[#fdfcf0] shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          {/* Drawer Header */}
          <div className="p-6 border-b border-[#e2e8f0] flex items-center justify-between">
            <span className="text-xl font-bold text-[#1e293b] uppercase tracking-widest font-serif">Menu</span>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-[#1e293b] hover:bg-[#f1f5f9] rounded-md transition-colors"
              aria-label="Close Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Drawer Links */}
          <div className="flex-grow overflow-y-auto py-8 px-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`w-full text-left text-lg font-bold uppercase tracking-[0.2em] py-4 px-4 rounded-sm transition-all duration-200 group relative overflow-hidden ${
                  currentView === item.id 
                    ? 'text-[#4c1d95] bg-[#4c1d95]/5' 
                    : 'text-[#334155] hover:bg-[#f1f5f9] hover:pl-6'
                }`}
              >
                {item.name}
                {currentView === item.id && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#4c1d95]"></div>
                )}
              </button>
            ))}
          </div>

          {/* Drawer Footer */}
          <div className="p-8 border-t border-[#e2e8f0]">
             <div className="flex flex-col items-center gap-4">
                <FlagIcon />
                <span className="text-xs font-bold text-[#94a3b8] uppercase tracking-[0.3em]">The Ramosian</span>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
