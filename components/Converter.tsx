
import React, { useState, useMemo } from 'react';

const Converter: React.FC = () => {
  const [input, setInput] = useState('');

  const mapping: Record<string, string> = {
    'f': 'ᚠ', 'u': 'ᚢ', 'þ': 'ᚦ', 'ā': 'ᚨ', 'r': 'ᚱ', 'c': 'ᚲ', 'g': 'ᚷ', 'w': 'ᚹ',
    'h': 'ᚺ', 'n': 'ᚾ', 'i': 'ᛁ', 'ǵ': 'ᛃ', 'a': 'ᛇ', 'p': 'ᛈ', 's': 'ᛋ', 't': 'ᛏ',
    'b': 'ᛒ', 'e': 'ᛖ', 'm': 'ᛗ', 'l': 'ᛚ', 'ŋ': 'ᛜ', 'o': 'ᛟ', 'd': 'ᛞ', 'y': 'ᚣ',
    // Handle some accented forms by mapping to closest base or specific rules
    'ć': 'ᚲ', // Simplified mapping for palatals if no specific rune
    'ğ': 'ᚷ',
    'ī': 'ᛁ',
    'ē': 'ᛖ',
    'ō': 'ᛟ',
    'ū': 'ᚢ',
    'ȳ': 'ᚣ',
  };

  const convertText = (text: string) => {
    return text.toLowerCase().split('').map(char => mapping[char] || char).join('');
  };

  const output = useMemo(() => convertText(input), [input]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <div className="max-w-4xl mx-auto px-8 py-20 w-full">
      <h1 className="text-5xl font-bold text-[#1e293b] mb-4 text-center">Script Converter</h1>
      <p className="text-xl text-center text-[#64748b] mb-12 italic">
        Translate Latinized Old Ponish into Equestrian Futhorc
      </p>

      <div className="space-y-8">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-[#4c1d95] uppercase tracking-widest">Latin Input</label>
          <textarea
            className="w-full h-40 p-6 bg-white border-2 border-[#e2e8f0] rounded-sm focus:border-[#4c1d95] outline-none transition-colors text-xl font-medium"
            placeholder="Type Old Ponish here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-end">
            <label className="text-sm font-bold text-[#4c1d95] uppercase tracking-widest">Runic Output</label>
            <button 
              onClick={copyToClipboard}
              className="text-xs font-bold uppercase tracking-tighter text-[#4c1d95] hover:underline"
            >
              Copy Text
            </button>
          </div>
          <div className="w-full min-h-[10rem] p-6 bg-[#f8f7eb] border-2 border-[#e2e8f0] rounded-sm text-4xl runic-text leading-relaxed break-words text-[#1e293b]">
            {output || <span className="opacity-20">ᚹᛖᛚᚲᛖᛗ...</span>}
          </div>
        </div>

        <div className="bg-[#f1f5f9] p-6 rounded-sm border border-[#cbd5e1]">
          <h3 className="font-bold text-[#1e293b] mb-3 uppercase tracking-wider text-sm">Notes on Conversion</h3>
          <ul className="text-sm text-[#475569] space-y-2 list-disc pl-5">
            <li>The converter uses a 1:1 phonemic mapping based on the standardized Equestrian Futhorc.</li>
            <li>Diacritics like the macron (ā) and acute (ǵ) are handled automatically.</li>
            <li>Punctuation and unknown characters are preserved in their original form.</li>
            <li>The output is best viewed with a font that supports the Runic Unicode block (e.g., Noto Sans Runic).</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Converter;
