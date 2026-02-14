
import React from 'react';

const Dictionary: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-8 py-32 flex flex-col items-center justify-center text-center">
      <div className="w-24 h-24 border-4 border-[#4c1d95]/20 border-t-[#4c1d95] rounded-full animate-spin mb-8"></div>
      <h1 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-6 uppercase tracking-widest">
        Work in Progress
      </h1>
      <p className="text-xl text-[#64748b] mb-12 italic max-w-2xl leading-relaxed">
        The internal dictionary interface is currently under construction. We are working hard to bring you a searchable, comprehensive database of Old Ponish vocabulary.
      </p>
      
      <div className="bg-white border-2 border-[#e2e8f0] p-8 rounded-sm shadow-sm max-w-lg w-full">
        <h2 className="text-xl font-bold text-[#1e293b] mb-4 uppercase tracking-wider">Access the Draft</h2>
        <p className="text-[#475569] mb-6">
          In the meantime, you can view the live working document of the dictionary on Google Sheets:
        </p>
        <a 
          href="https://docs.google.com/spreadsheets/d/1tgkRy0f6AGpUpHwyP7Zt0EtQUK2NUyumr5jaszYopfU/edit?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-[#4c1d95] text-white font-bold py-3 px-8 rounded-sm hover:bg-[#3b1675] transition-colors uppercase tracking-widest text-sm shadow-md"
        >
          View Google Spreadsheet
        </a>
      </div>
    </div>
  );
};

export default Dictionary;
