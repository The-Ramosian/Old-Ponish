
import React from 'react';

const Gloss: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-xs font-bold uppercase tracking-tighter opacity-70" style={{ fontVariant: 'small-caps' }}>
    {children}
  </span>
);

const Criticism: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-8 py-20 bg-[#fdfcf0] border-t border-[#e2e8f0]">
      <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-8 text-center uppercase tracking-[0.1em]">
        Linguistic Criticism
      </h2>
      
      <div className="prose prose-lg max-w-none text-[#334155] space-y-8 leading-relaxed">
        <div className="bg-[#fefce8] border-l-4 border-yellow-400 p-6 italic mb-12 shadow-sm">
          To anyone who is reading this, I am not attacking this project, this project has a different goal and I am fine with that.
        </div>

        <p>
          This is a criticism of the <a href="https://oldponish.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-[#4c1d95] font-bold hover:underline">oldponish.netlify.app</a> reconstruction of Old Ponish, which is based on the fimfiction article "<a href="https://www.fimfiction.net/blog/771938/how-to-speak-old-ponish" target="_blank" rel="noopener noreferrer" className="text-[#4c1d95] font-bold hover:underline">How to Speak Old Ponish</a>" written by TimeLoad. My version is <i>NOT</i> based on the same article.
        </p>

        <p>
          I joined the oldponish.netlify.app project a while back (I'm actually still in their Discord server), but because of the things which I will outline here, and I know complaining isn't going to do anything since way too many writers have already used this language and to fix these mistakes, one would have to revamp the entire language, which is exactly what I did.
        </p>


        <section>
          <h3 className="text-2xl font-bold text-[#1e293b] uppercase tracking-widest mt-12 mb-4 border-b border-[#e2e8f0] pb-2">Orthography</h3>
          <p>
            The orthography, or writing of Old Ponish, in my opinion, is terrible. It seems to <i>try</i> to be as close as English with words like <i>þou</i> and <i>ighþ</i>, but also has some contradictory statements such as <i>j</i> being pronounced as /j/ even though this is pronounced /d͡ʒ/ in English.
          </p>
          <p>
            This is where a big problem occurs in Old Ponish, and you'll see this problem arise over and over again. Now the creators of Old Ponish wanted their language to be as simple for English speakers to use. But here's the thing, in an attempt to not make it just look like knockoff English they decided to make some features that make it NOT intuitive for English speakers. For example, they make the trigraph <span className="font-mono bg-white px-1">&lt;igh&gt;</span> as /aɪ/ (which doesn't make any sense for any other language other than English), BUT also let's add ŋ, ß, ƿ, þ, ȝ, and ð which absolutely NO English speaker actually has on their keyboard! Oh, and for the Germans out there, <span className="font-mono bg-white px-1">&lt;ß&gt;</span> is pronounced /ʃ/. Yes, /ʃ/.
          </p>
          <p>
            Remember how I said the no English speaker has the special characters on their keyboard? Well most fanfic writers don't even use them! ŋ, ß, ƿ, þ, ȝ, and ð are frequently replaced by ng, sc/sh, w, th, y, and th by fanfic writers which then brings up the problem of consistency. In fact, recently, they've replaced ß with ʃ and didn't tell anyone about it.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-[#1e293b] uppercase tracking-widest mt-12 mb-4 border-b border-[#e2e8f0] pb-2">Stress Patterns</h3>
          <p>
            According to the dictionary, stress with 2 syllables have stress in the first syllable, like most Germanic languages, while &gt;3 syllables land on the penultimate syllable, this is not a typical Germanic language stress, where all words are stressed on the first syllable.
          </p>
          <p>
            Now, we got that out of the way, it seems good and consistent, until we mention compound words and words with prefixes, where now either it's on the first word or on the root word? Really? The first thing is stress usually doesn't change based on the word's formation. Are you telling me that the fanfic writer has to look up the etymology of a word just to know stress?
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-[#1e293b] uppercase tracking-widest mt-12 mb-4 border-b border-[#e2e8f0] pb-2">Grammar</h3>
          <p>
            Due to this version's Old Ponish non naturalistic approach I'll give some slack. Though there are still some questionable things about its grammar.
          </p>
          
          <h4 className="text-xl font-bold text-[#1e293b] mt-8 mb-4 italic">Verbs</h4>
          <p>
            The verbs of Old Ponish are "too" regular. They are separated into 3 groups, -en, -a, and -an. The thing is, they are nearly identical. Here's a summary:
          </p>
          
          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse border border-[#cbd5e1] text-[#1e293b]">
              <thead className="bg-[#f1f5f9]">
                <tr>
                  <th className="p-3 border border-[#cbd5e1]">Person</th>
                  <th className="p-3 border border-[#cbd5e1]">-en</th>
                  <th className="p-3 border border-[#cbd5e1]">-a</th>
                  <th className="p-3 border border-[#cbd5e1]">-an</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-[#cbd5e1] font-bold"><Gloss>1S</Gloss></td>
                  <td className="p-3 border border-[#cbd5e1]">-e</td>
                  <td className="p-3 border border-[#cbd5e1]">-e</td>
                  <td className="p-3 border border-[#cbd5e1]">-e</td>
                </tr>
                <tr>
                  <td className="p-3 border border-[#cbd5e1] font-bold"><Gloss>2S</Gloss>, <Gloss>3S</Gloss></td>
                  <td className="p-3 border border-[#cbd5e1]">-est</td>
                  <td className="p-3 border border-[#cbd5e1]">-a</td>
                  <td className="p-3 border border-[#cbd5e1]">-as</td>
                </tr>
                <tr>
                  <td className="p-3 border border-[#cbd5e1] font-bold"><Gloss>PL</Gloss></td>
                  <td className="p-3 border border-[#cbd5e1]">-en</td>
                  <td className="p-3 border border-[#cbd5e1]">-en</td>
                  <td className="p-3 border border-[#cbd5e1]">-an</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>The Past and plural are formed by adding the prefixes <i>gen-</i> and <i>be-</i>.</p>

          <p>
            There are also Irregular verbs, which apparently have regular conjugation?? This defeats the entire purpose of Irregular verbs? Why not just add them to the list above?
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse border border-[#cbd5e1] text-[#1e293b]">
              <thead className="bg-[#f1f5f9]">
                <tr>
                  <th className="p-3 border border-[#cbd5e1]">Person</th>
                  <th className="p-3 border border-[#cbd5e1]">'Irregular' Consonant-Ending</th>
                  <th className="p-3 border border-[#cbd5e1]">'Irregular' Vowel-Ending</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-[#cbd5e1] font-bold"><Gloss>1S</Gloss></td>
                  <td className="p-3 border border-[#cbd5e1]"><i>Dictionary form</i></td>
                  <td className="p-3 border border-[#cbd5e1]"><i>Dictionary form</i></td>
                </tr>
                <tr>
                  <td className="p-3 border border-[#cbd5e1] font-bold"><Gloss>2S</Gloss>, <Gloss>3S</Gloss></td>
                  <td className="p-3 border border-[#cbd5e1]">-ast</td>
                  <td className="p-3 border border-[#cbd5e1]"><i>Dictionary form</i></td>
                </tr>
                <tr>
                  <td className="p-3 border border-[#cbd5e1] font-bold"><Gloss>PL</Gloss></td>
                  <td className="p-3 border border-[#cbd5e1]">-an</td>
                  <td className="p-3 border border-[#cbd5e1]">-en</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            While we're at it, it's quite weird that a Germanic language doesn't have Germanic strong verbs (think <i>fly</i> vs. <i>flew</i>). Here I'm going to reinstitute the balancing act of trying to make it intuitive for English speakers and also trying to make it unique at the same time. It's not intuitive for English speakers as they need to memorize these 'irregular' verbs (that could very much be regular), and It's not naturalistic either as this isn't how irregular verbs are formed. Again, it tries to get both and in turn, loses both. Additionally, <i>all</i> natural languages have irregularities (actual irregularities, not whatever that is), yes, even creoles/pidgins.
          </p>

          <h4 className="text-xl font-bold text-[#1e293b] mt-8 mb-4 italic">Genitive Particles</h4>
          <p>
            Unlike most Germanic (and Indo-European) languages, Old Ponish uses particles for the genitive <Gloss>GEN</Gloss> case. It also has 3 of them: <b>a</b>, <b>se</b> and <b>ulf</b>.
          </p>
          <ul className="list-disc pl-8 space-y-4">
            <li><b>Ulf</b> is for the <i>genitive of origin</i>. It signifies something being from another thing. Think the <i>wines of France</i>. You can replace 'of' with 'from' in this scenario.</li>
            <li><b>Se</b> is the <i>appositive genitive</i> <Gloss>APP</Gloss>. It signifies something being equal or the same. Think the <i>city of Rome</i>. You can replace 'of' with '='. This is the most questionable, as it's quite unusual that an Indo-European language has a separate particle for this.</li>
            <li><b>A</b> is the <i>general genitive</i> <Gloss>GEN</Gloss>. It is the default genitive, something owning something else.</li>
          </ul>
          <p>
            Now what I'm going to nitpick here is its completely unintuitive. Firstly, there is little reason to even add it because literally none of the languages that influenced Old Ponish have these. It is not intuitive for the in-universe speakers or the typical fanfic writer.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-[#1e293b] uppercase tracking-widest mt-12 mb-4 border-b border-[#e2e8f0] pb-2">Vocabulary</h3>
          <p>
            This is probably the least plausible thing here, and I want to ask the people creating the language's dictionary: Is Old Ponish Anglo-Frisian or not? Because you can't have <i>mouþ</i> (Ingvaeonic Spirant Law), but also <i>wier</i> (ʀ from *wiʀ seems to have dropped in Ingvaeonic) and <i>waeg</i> (with a hard g, in contrast to English <i>way</i> and Old Frisian <i>wei</i>).
          </p>
          
          <h4 className="text-xl font-bold text-[#1e293b] mt-8 mb-4 italic">Loan Words</h4>
          <p>
            Old Ponish, like any language, is not isolated. The problem is, some of the words don't make any sense within its timeline:
          </p>
          <ol className="list-decimal pl-8 space-y-4">
            <li>
              <b>kirus</b>: This word, meaning "a cirrus cloud" comes from Latin "<i>cirrus</i>". The pronunciation approximated to /ˈki.rʊs/. This is based on Classical Latin pronunciation, which wasn't devised until the 20th century.
            </li>
            <li>
              <b>orggis</b>: This word meaning "testicles" seems to be loaned directly from Proto-Indo-European <i>*h₁órǵʰis</i>. There are many things wrong with this, primarily that <i>*h₁órǵʰis</i> doesn't even have a Proto-Germanic descendant.
            </li>
          </ol>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-[#1e293b] uppercase tracking-widest mt-12 mb-4 border-b border-[#e2e8f0] pb-2">Its backstory makes little sense linguistically</h3>
          <p>
            Old Ponish at oldponish.netlify.app is a creole. According to its backstory, Old Ponish is a mix of 3 groups: Latin/Ancient Greek by the Pegasi, Old French for the unicorns, and... What exactly for the Earth Ponies? Why is Old Ponish a mix of 2 natural languages and 1 conlang?
          </p>
          <p>
            I have heard people say "The Earth Ponies provided the base vocabulary and grammar like English", but just like we've seen in the grammar, it's clearly not Germanic at all.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-[#1e293b] uppercase tracking-widest mt-12 mb-4 border-b border-[#e2e8f0] pb-2">Then if my version is "superior", then why isn't mine more popular?</h3>
          <p>There are two contributing factors to this:</p>
          <ol className="list-decimal pl-8 space-y-4">
            <li><b>Mine isn't as old.</b> The alternative was made in 2018. Mine was created just in 2024.</li>
            <li><b>Fanfic writers don't actually want a conlang.</b> Writers want a cypher. They don't care if it's actually realistic or not. Language is hard.</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default Criticism;
