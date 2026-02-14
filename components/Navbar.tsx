import React from 'react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'phonology' | 'orthography' | 'grammar' | 'dictionary' | 'critique') => void;
  currentPage: string;
}

const FlagIcon: React.FC = () => (
  <svg 
    viewBox="0 0 100 120" 
    className="w-10 h-12 mr-4 drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Flag Background */}
    <path 
      d="M5 5 H95 V100 L50 115 L5 100 Z" 
      fill="#a3d5e8" 
      stroke="#cbd5e1" 
      strokeWidth="2"
    />
    
    {/* Stars Grid (Simplified Representation) */}
    <g fill="white">
      {[...Array(6)].map((_, r) => (
        [...Array(6)].map((_, c) => (
          <circle key={`${r}-${c}`} cx={15 + c * 14} cy={15 + r * 14} r="1.5" />
        ))
      ))}
    </g>

    {/* Central Elements */}
    {/* Left Figure (Blue) */}
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

    {/* Right Figure (White/Mint) */}
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

    {/* Sun */}
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

    {/* Moon */}
    <circle cx="50" cy="65" r="8" fill="#a855f7" />
    <circle cx="55" cy="65" r="8" fill="#a3d5e8" />
  </svg>
);

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const navItems = [
    { name: 'Phonology', id: 'phonology' },
    { name: 'Orthography', id: 'orthography' },
    { name: 'Grammar', id: 'grammar' },
    { name: 'Dictionary', id: 'dictionary' },
    { name: 'Critique', id: 'critique' }
  ];

  return (
    <nav className="border-b border-[#e2e8f0] flex items-center justify-between px-8 py-4 bg-[#fdfcf0]/80 backdrop-blur-sm sticky top-0 z-50">
      <div 
        className="flex items-center cursor-pointer group"
        onClick={() => onNavigate('home')}
      >
        <FlagIcon />
        <span className="text-2xl font-bold tracking-tight text-[#1e293b]">Old Ponish</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              onNavigate(item.id as any);
            }}
            className={`text-sm font-bold transition-colors duration-200 cursor-pointer uppercase tracking-widest ${
              currentPage === item.id 
                ? 'text-[#4c1d95] border-b-2 border-[#4c1d95]' 
                : 'text-[#1e293b] hover:text-[#4c1d95]'
            }`}
          >
            {item.name}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;