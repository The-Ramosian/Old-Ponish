
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-8 bg-[#fdfcf0] border-t border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-bold text-[#1e293b]">
            © The Ramosian
          </div>
        </div>
        <div className="text-sm max-w-sm text-left md:text-right text-[#64748b]">
          "My Little Pony" and its related products are registered trademarks of Hasbro Inc.
          <br />This site is a fan-made project for creative and linguistic purposes.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
