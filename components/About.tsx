
import React from 'react';

const TreeItem: React.FC<{ name: string; isLast?: boolean; branches?: string[] }> = ({ name, isLast, branches }) => (
  <div className="flex flex-col items-center relative w-full mb-1">
    {/* Main Node */}
    <div className="bg-white border-2 border-[#1e293b] px-4 py-2 rounded-sm shadow-sm z-10 w-full max-w-[240px] text-center hover:bg-[#f1f5f9] transition-colors cursor-default">
      <span className="font-bold text-[#1e293b] tracking-wider uppercase text-xs md:text-sm">{name}</span>
    </div>
    
    {/* Connector Line for Single Descent */}
    {!isLast && !branches && (
      <div className="h-8 w-0.5 bg-[#4c1d95]/20 my-0 relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-[#4c1d95]/20"></div>
      </div>
    )}

    {/* Connector for Branches */}
    {branches && (
      <div className="flex flex-col items-center w-full">
        <div className="h-6 w-0.5 bg-[#4c1d95]/20"></div>
        <div className="w-full max-w-[90%] h-0.5 bg-[#4c1d95]/20 relative"></div>
        <div className="flex justify-between w-full max-w-full mt-0">
          {branches.map((branch, i) => (
            <div key={i} className="flex flex-col items-center flex-1">
              <div className="h-6 w-0.5 bg-[#4c1d95]/20"></div>
              <div className="bg-[#fdfcf0] border border-[#cbd5e1] px-2 py-1 rounded-sm text-[10px] font-bold text-[#1e293b] uppercase tracking-tighter shadow-sm whitespace-nowrap">
                {branch}
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

const About: React.FC = () => {
  return (
    <section className="bg-[#f8f7eb] py-24">
      <div className="max-w-6xl mx-auto px-8">
        {/* Original Position Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#1e293b] uppercase tracking-[0.2em] mb-12">About Old Ponish</h2>
          <p className="text-xl leading-relaxed text-justify md:text-center text-[#334155] italic font-medium opacity-90">
            Old Ponish is a postriori conlang which was made in an attempt to reconstruct a language from the show <strong>My Little Pony: Friendship is Magic</strong>. This conlang was created and is being maintained by <strong>The Ramosian</strong>. We have few lines to work with in the show, primarily originating from Season 7 Episode 24. The language is structurally assumed to be a <strong>West Germanic Language</strong>. The language was (and still is) hosted on <a href="https://conworkshop.com/dictionary.php?L=OLDP" target="_blank" rel="noopener noreferrer" className="text-[#4c1d95] font-bold hover:underline">Conworkshop</a>, but because of Conworkshop's gated content, The Ramosian has moved the most basic stuff into this website.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start border-t border-[#e2e8f0] pt-16 mb-24">
          {/* Tree Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-[#1e293b] mb-12 uppercase tracking-[0.3em] opacity-80 border-b-2 border-[#4c1d95]/20 pb-2">Linguistic Lineage</h3>
            <div className="flex flex-col items-center w-full space-y-0">
              <TreeItem name="Proto-Indo-European" />
              <TreeItem name="Proto-Germanic" />
              <TreeItem name="Proto-West Germanic" />
              <TreeItem name="Anglo-Frisian" />
              <TreeItem name="Old Ponish" />
              <TreeItem name="Ponish" branches={['Niosh', 'Wealdish', 'Havougish']} />
            </div>
          </div>

          {/* Disclaimer Section */}
          <div className="flex flex-col h-full">
            <h3 className="text-xl font-bold text-[#1e293b] mb-12 uppercase tracking-[0.3em] opacity-80 border-b-2 border-[#4c1d95]/20 pb-2">Disclaimer</h3>
            <div className="bg-white/50 p-8 border border-[#e2e8f0] rounded-sm shadow-sm h-full flex flex-col justify-start">
              <p className="text-base leading-relaxed text-[#475569] mb-4">
                This version of the language is not affiliated with or related to the <a href="https://oldponish.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-[#4c1d95] font-bold hover:underline">Other Old Ponish</a> project, woth the primary difference being this version is fully naturalistic. Therefore, this you can expect that this version's grammar is significaly more complicated than the other reconstruction.
              </p>
            </div>
          </div>
        </div>

        {/* Development Section */}
        <div className="border-t border-[#e2e8f0] pt-16 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-[#1e293b] mb-8 text-center uppercase tracking-widest">
            The Development of Old Ponish
          </h3>
          <div className="prose prose-lg max-w-none text-[#334155] space-y-6">
            <p>
              This article outlines the developmental history of Old Ponish, specifically, its classification.
            </p>
            <p>
              Before I start there are two fan-made versions of Old Ponish, the <a href="https://oldponish.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-[#4c1d95] font-bold hover:underline">first one</a>, is a collaborative project made by a group. This version is NOT naturalistic, it was never intended to be so. This version was made to be simple for other fans of the show to use without the nitty-gritty aspects of linguistics.
            </p>
            <p>
              Now, the second version, is My version, Old Ponish. Unlike the first version, I intended this to be naturalistic, even if it sacrifices simplicity.
            </p>

            <h4 className="text-2xl font-bold text-[#1e293b] mt-12 mb-4">Classification</h4>
            <p>
              If you've watched <a href="https://www.youtube.com/watch?v=ehVmHphkvQs&t=286s" target="_blank" rel="noopener noreferrer" className="text-[#4c1d95] font-bold hover:underline">Season 7 Episode 24 of My Little Pony: Friendship is Magic</a>, it's quite obvious the language is Germanic, and in most cases, this is the closest we would be able to go. Here's the thing, there is one word which tells us what branch of the (West) Germanic language family this language belongs to. This word is what Starlight pronounces as <span className="italic">/ˈusɚ/</span>. This word, which based on the Germanic vocabulary means "our", comes from PWG <span className="italic">*unsar</span>.
            </p>
            <p>
              In the Anglo-Frisian branch of the West Germanic family tree, there is a specific sound change which occurs. This sound change is the Ingvaeonic nasal spirant law. Quoting from Wikipedia:
            </p>
            <blockquote className="border-l-4 border-[#4c1d95]/30 pl-6 py-2 italic bg-[#1e293b]/5 rounded-r-sm text-[#475569]">
              "The sound change affected sequences of vowel + nasal consonant + fricative consonant. (Spirant is an older term for 'fricative'.) The sequences in question are -ns-, -mf-, and -nþ-, preceded by any vowel. The nasal consonant disappeared, sometimes causing nasalization and compensatory lengthening of the vowel before it. The nasalization disappeared relatively soon after in many dialects along the coast, but it was retained long enough to prevent Anglo-Frisian brightening of /ɑː/ to /æː/. The resulting long nasalized vowel /ɑ̃ː/ was rounded to /oː/ in most languages under various circumstances."
            </blockquote>
            <p>
              In simpler terms, the sound change is defined by the PhoMo rule <span className="font-mono bg-white px-2 py-0.5 rounded border border-[#cbd5e1]">VNF/VːF</span>, where V = vowel, N = nasal, and F = fricative. This sound change affected PWG <span className="italic">*unsar</span> due to <span className="underline decoration-[#4c1d95]/40 font-bold">uns</span>ar. We can see this in the Anglo-Frisian languages, such as English <i>our</i>, and West Frisian <i>ús</i>, in contrast to German <i>unser</i> and Dutch <i>ons</i>. So, we can say, with near certainty, that Old Ponish is Anglo-Frisian.
            </p>
            <p>
              Based on this, I made sound changes that reflect this, such as palatalization (seen in words like <span className="italic">ić</span>, <span className="italic">hail</span> (g-palatalization)), and i-mutation (seen in words like <span className="italic">winn</span> 'via Pre-Old Ponish *wynnu').
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
