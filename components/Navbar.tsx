
import React, { useState } from 'react';

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
    <nav className="border-b border-[#e2e8f0] bg-[#fdfcf0]/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-3">
        
        {/* Left: Hamburger Menu */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-[#1e293b] hover:bg-[#f1f5f9] rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#4c1d95]/20"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
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

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#fdfcf0] border-b border-[#e2e8f0] shadow-xl animate-in fade-in slide-in-from-top-1 duration-200 z-40">
          <div className="flex flex-col py-4 px-6 gap-2 max-w-lg">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`text-left text-lg font-bold uppercase tracking-widest py-3 px-2 border-b border-dashed border-[#e2e8f0] last:border-0 hover:bg-[#f8fafc] hover:pl-4 transition-all duration-200 ${
                  currentView === item.id ? 'text-[#4c1d95] border-l-4 border-l-[#4c1d95] pl-4' : 'text-[#334155]'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
