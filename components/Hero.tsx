
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-32 flex flex-col items-center justify-center text-center px-4">
      <div className="runic-text text-7xl mb-12 font-bold text-[#4c1d95] animate-pulse-slow">
        ᚹᛖᛚᚲᛖᛗ!
      </div>
      <h1 className="text-5xl md:text-6xl font-bold text-[#1e293b] leading-tight max-w-3xl mb-4">
        Welcome to the page for <span className="text-[#4c1d95] block md:inline underline decoration-wavy decoration-[#4c1d95]/30">Old Ponish</span>!
      </h1>
      <div className="text-2xl md:text-3xl text-[#64748b] font-medium italic tracking-wide">
        Euhwisć <span className="text-lg md:text-xl font-normal not-italic opacity-70 ml-2">[eɯxʷiʃ]</span>
      </div>
    </section>
  );
};

export default Hero;
