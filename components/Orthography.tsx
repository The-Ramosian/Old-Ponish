
import React, { useState, useMemo } from 'react';

const Orthography: React.FC = () => {
  const [input, setInput] = useState('');

  const letters = [
    { glyph: 'A', ipa: '/æ/' },
    { glyph: 'Āā', ipa: '/ɑ:/' },
    { glyph: 'Bb', ipa: '/b/' },
    { glyph: 'Cc', ipa: '/k/' },
    { glyph: 'Ćć', ipa: '/t͡ʃ/' },
    { glyph: 'Dd', ipa: '/d/' },
    { glyph: 'Ēē', ipa: '/e:/' },
    { glyph: 'Ee', ipa: '/e/' },
    { glyph: 'Ff', ipa: '/f/' },
    { glyph: 'Ǵǵ', ipa: '/ʝ/' },
    { glyph: 'Gg', ipa: '/g/' },
    { glyph: 'Ğğ', ipa: '/d͡ʒ/' },
    { glyph: 'Hh', ipa: '/x/' },
    { glyph: 'Ii', ipa: '/i/' },
    { glyph: 'Īī', ipa: '/i:/' },
    { glyph: 'Ll', ipa: '/l/' },
    { glyph: 'Mm', ipa: '/m/' },
    { glyph: 'Nn', ipa: '/n/' },
    { glyph: 'Oo', ipa: '/o/' },
    { glyph: 'Ōō', ipa: '/o:/' },
    { glyph: 'Pp', ipa: '/p/' },
    { glyph: 'Rr', ipa: '/r/' },
    { glyph: 'Ss', ipa: '/s/' },
    { glyph: 'SĆ sć', ipa: '/ʃ/' },
    { glyph: 'Tt', ipa: '/t/' },
    { glyph: 'Uu', ipa: '/u/' },
    { glyph: 'Ūū', ipa: '/u:/' },
    { glyph: 'Ww', ipa: '/w/' },
    { glyph: 'Ȳȳ', ipa: '/y:/' },
    { glyph: 'Yy', ipa: '/y/' },
    { glyph: 'Þþ', ipa: '/θ/' },
  ];

  const runes = [
    { letter: 'F', rune: 'ᚠ', ipa: '/f/' },
    { letter: 'U', rune: 'ᚢ', ipa: '/u/' },
    { letter: 'Þ', rune: 'ᚦ', ipa: '/θ/' },
    { letter: 'Ā', rune: 'ᚨ', ipa: '/ɑ:/' },
    { letter: 'R', rune: 'ᚱ', ipa: '/r/' },
    { letter: 'C', rune: 'ᚲ', ipa: '/k/' },
    { letter: 'G', rune: 'ᚷ', ipa: '/g/' },
    { letter: 'W', rune: 'ᚹ', ipa: '/w/' },
    { letter: 'H', rune: 'ᚺ', ipa: '/x/' },
    { letter: 'N', rune: 'ᚾ', ipa: '/n/' },
    { letter: 'I', rune: 'ᛁ', ipa: '/i/' },
    { letter: 'Ǵ', rune: 'ᛃ', ipa: '/ʝ/' },
    { letter: 'A', rune: 'ᛇ', ipa: '/æ/' },
    { letter: 'P', rune: 'ᛈ', ipa: '/p/' },
    { letter: 'S', rune: 'ᛋ', ipa: '/s/' },
    { letter: 'T', rune: 'ᛏ', ipa: '/t/' },
    { letter: 'B', rune: 'ᛒ', ipa: '/b/' },
    { letter: 'E', rune: 'ᛖ', ipa: '/e/' },
    { letter: 'M', rune: 'ᛗ', ipa: '/m/' },
    { letter: 'L', rune: 'ᛚ', ipa: '/l/' },
    { letter: 'Ng', rune: 'ᛜ', ipa: '/ŋ/' },
    { letter: 'O', rune: 'ᛟ', ipa: '/o/' },
    { letter: 'D', rune: 'ᛞ', ipa: '/d/' },
    { letter: 'Y', rune: 'ᚣ', ipa: '/y/' },
  ];

  const conversionMap: Record<string, string> = {
    'f': 'ᚠ', 'u': 'ᚢ', 'þ': 'ᚦ', 'ā': 'ᚨ', 'r': 'ᚱ', 'c': 'ᚲ', 'g': 'ᚷ', 'w': 'ᚹ',
    'h': 'ᚺ', 'n': 'ᚾ', 'i': 'ᛁ', 'ǵ': 'ᛃ', 'a': 'ᛇ', 'p': 'ᛈ', 's': 'ᛋ', 't': 'ᛏ',
    'b': 'ᛒ', 'e': 'ᛖ', 'm': 'ᛗ', 'l': 'ᛚ', 'ŋ': 'ᛜ', 'o': 'ᛟ', 'd': 'ᛞ', 'y': 'ᚣ',
    'ć': 'ᚲ', 'ğ': 'ᚷ', 'ī': 'ᛁ', 'ē': 'ᛖ', 'ō': 'ᛟ', 'ū': 'ᚢ', 'Ȳ': 'ᚣ', 'ȳ': 'ᚣ'
  };

  const output = useMemo(() => {
    const lowerInput = input.toLowerCase();
    const chars = lowerInput.split('');
    return chars.map((char, index) => {
      if (char === 'a' && chars[index + 1] === 'n') {
        return 'ᚨ';
      }
      return conversionMap[char] || char;
    }).join('');
  }, [input]);

  return (
    <div className="max-w-6xl mx-auto px-8 py-20 border-t border-[#e2e8f0]">
      <h2 className="text-5xl font-bold text-[#1e293b] mb-12 text-center uppercase tracking-widest">Orthography of Old Ponish</h2>
      
      <div className="prose prose-lg max-w-none text-[#334155] mb-16 italic font-medium text-center">
        <p>
          The Old Ponish script utilizes a modified Latin alphabet supplemented by diacritics 
          to accurately represent its diverse phonemic inventory. This system was standardized 
          during the Early Runic Period to facilitate diplomatic correspondence across the borders.
        </p>
      </div>

      <div className="mb-20">
        <h3 className="text-3xl font-bold text-[#1e293b] mb-8 border-l-4 border-[#4c1d95] pl-4 uppercase tracking-wider">Latin Character Key</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {letters.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-white border border-[#e2e8f0] shadow-sm rounded-sm hover:border-[#4c1d95] transition-colors">
              <span className="text-2xl font-bold text-[#1e293b]">{item.glyph}</span>
              <span className="text-xl font-medium text-[#4c1d95]">{item.ipa}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-20">
        <h3 className="text-3xl font-bold text-[#1e293b] mb-8 border-l-4 border-[#4c1d95] pl-4 uppercase tracking-wider">Rune Key</h3>
        <div className="bg-[#f8f7eb] p-8 border border-[#e2e8f0] rounded-sm">
          <p className="mb-8 text-[#334155]">
            In archaic contexts, Old Ponish is written using <strong>Old Ponish runes</strong>. 
            Below is the primary mapping between the modern Latinized script and its runic antecedents, sorted by the requested Futhark order.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
            {runes.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center p-4 bg-white border border-[#cbd5e1] rounded hover:shadow-md transition-shadow relative group">
                <span className="runic-text text-5xl mb-3 text-[#4c1d95]">{item.rune}</span>
                <div className="flex flex-col items-center">
                   <span className="text-xs uppercase tracking-tighter text-[#64748b] font-bold">{item.letter}</span>
                   <span className="text-sm text-[#1e293b] font-medium mt-1">{item.ipa}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-20 bg-white border-2 border-[#e2e8f0] p-8 rounded-sm shadow-sm">
        <h3 className="text-3xl font-bold text-[#1e293b] mb-8 border-l-4 border-[#4c1d95] pl-4 uppercase tracking-wider">Script Converter</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-3">
            <label className="text-sm font-bold text-[#4c1d95] uppercase tracking-widest">Latin Input</label>
            <textarea
              className="w-full h-48 p-4 bg-white border border-[#cbd5e1] rounded-sm focus:border-[#4c1d95] outline-none transition-colors text-lg"
              placeholder="Enter Latin text (e.g., ić im ain euhw)..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold text-[#4c1d95] uppercase tracking-widest">Runic Output</label>
              <button 
                onClick={() => navigator.clipboard.writeText(output)}
                className="text-xs font-bold uppercase tracking-tighter hover:text-[#4c1d95]"
              >
                Copy Output
              </button>
            </div>
            <div className="w-full h-48 p-4 bg-[#f8fafc] border border-[#cbd5e1] rounded-sm text-4xl runic-text leading-relaxed overflow-y-auto break-words">
              {output}
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-lg max-w-none text-[#334155] mt-16 text-justify">
        <p>
          Orthographic conventions dictate that long vowels are always marked with a macron, 
          while specific palatalized consonants use a caron or acute accent. The preservation 
          of the character Þ (Thorn) is a hallmark of Old Ponish, serving to distinguish it 
          from more contemporary variants that have shifted towards the 'th' digraph. 
          Runic inscriptions are typically read from left to right, though archaic boustrophedon 
          examples have been discovered in the northern reaches of the continent.
        </p>
      </div>
    </div>
  );
};

export default Orthography;
