
import React, { useMemo } from 'react';

const Hero: React.FC = () => {
  // Generate random positions and animation properties for the stars
  const stars = useMemo(() => Array.from({ length: 45 }).map((_, i) => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2.5 + 1,
    delay: `${Math.random() * 5}s`,
    duration: `${Math.random() * 3 + 2}s`,
  })), []);

  return (
    <section className="relative py-32 flex flex-col items-center justify-center text-center px-4 bg-[#a3d5e8] overflow-hidden min-h-[50vh]">
      <style>
        {`
          @keyframes twinkle {
            0%, 100% { opacity: 0.1; transform: scale(0.8); }
            50% { opacity: 1; transform: scale(1.2); }
          }
          .twinkle-star {
            position: absolute;
            background: white;
            border-radius: 50%;
            pointer-events: none;
            box-shadow: 0 0 6px rgba(255, 255, 255, 0.9);
          }
          @keyframes pulse-slow {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }
          .animate-pulse-slow {
            animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `}
      </style>
      
      {/* Star Field Background */}
      <div className="absolute inset-0 z-0">
        {stars.map((star, i) => (
          <div 
            key={i} 
            className="twinkle-star" 
            style={{ 
              top: star.top, 
              left: star.left, 
              width: `${star.size}px`, 
              height: `${star.size}px`,
              animation: `twinkle ${star.duration} infinite ease-in-out`,
              animationDelay: star.delay
            }} 
          />
        ))}
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="runic-text text-7xl mb-12 font-bold text-[#4c1d95] animate-pulse-slow drop-shadow-md">
          ᚹᛖᛚᚲᛖᛗ!
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-[#1e293b] leading-tight max-w-3xl mb-4 drop-shadow-sm">
          Welcome to the page for <span className="text-[#4c1d95] block md:inline font-extrabold">Old Ponish</span>!
        </h1>
        <div className="text-2xl md:text-3xl text-[#1e293b]/70 font-medium italic tracking-wide">
          Euhwisć <span className="text-lg md:text-xl font-normal not-italic opacity-70 ml-2">[eɯxʷiʃ]</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
