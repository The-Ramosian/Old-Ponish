
import React from 'react';

const Literature: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-8 py-20 bg-[#fdfcf0]">
      <h2 className="text-5xl font-bold text-[#1e293b] mb-16 text-center uppercase tracking-[0.2em] font-serif">
        Old Ponish Literature
      </h2>

      <div className="space-y-32">
        {/* SECTION: CANON LINES */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-0.5 flex-grow bg-[#e2e8f0]"></div>
            <h3 className="text-2xl font-bold text-[#1e293b] uppercase tracking-widest shrink-0">
              Canon Lines
            </h3>
            <div className="h-0.5 flex-grow bg-[#e2e8f0]"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <FragmentCard 
              rune="ᚻᛇᚱᚷ"
              ponish="Haerg sielfum se Ponhenge"
              translation="The Temple of Ponhenge"
              literal="The temple belongs to Ponhenge"
            />
            <FragmentCard 
              rune="ᛏᛟᚹᛇᚱᛞ"
              ponish="Toward dol grimliċ of Fola Firgenbeorg"
              translation="At the base of Foal Mountain"
              literal="Toward (the) vally-base of Foal Mountain"
            />
            <FragmentCard 
              rune="ᚢᛋᛖᚱ"
              ponish="ūser endemest sċield"
              translation="Our last stand"
            />
            <FragmentCard 
              rune="ᚻᛚᛁᛖᛏ"
              ponish="Hliet foresettan pliht!"
              translation="Reward prefers risk!"
            />
          </div>
        </section>

        {/* SECTION: POETRY (STYGIAN'S LAMENT) */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-0.5 flex-grow bg-[#e2e8f0]"></div>
            <h3 className="text-2xl font-bold text-[#1e293b] uppercase tracking-widest shrink-0">
              Poetry & Lamentation
            </h3>
            <div className="h-0.5 flex-grow bg-[#e2e8f0]"></div>
          </div>

          <div className="bg-white border border-[#e2e8f0] p-10 md:p-16 rounded-sm shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
               <div className="runic-text text-[12rem] leading-none">ᚷᚱᛗᛇ</div>
            </div>
            
            <div className="text-center mb-16 relative z-10">
              <h4 className="text-3xl font-serif font-bold text-[#1e293b] mb-2">Styǵianes Gramasang</h4>
              <p className="text-lg text-[#64748b] italic">Stygian’s Lament</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative z-10">
              <div className="space-y-10">
                <Stanza ponish="Ić ǵaedurōda þan crīǵera, þan baeld and beurht.&#10;Ić brang hia saman, standan fir þan feuht.&#10;Ain ǵeliener wīgstierancraftas, ainfaeldmōd and aeþi&#10;Ić folgōda in hia sćadwa, and fēlōda unweurþiǵ" />
                <Stanza ponish="Ić wīsćōda standan hwar crīǵera standōd&#10;Wīsan ić was aellan, wīsan ić was gōd&#10;Ić tēc þa maiþ, tōgaduran in þan feuht" />
                <Stanza ponish="Ne aisćung wārun spirad, and ne wēǵþ wārun wīsad&#10;Se win hwilić ić lubōda, turnōdun andsaca ūser wad&#10;Þus ić fand þa deup waellan hwar þan deurcnassi wunōde&#10;And wećemōda þan ćaeld hwar þan habiǵ saiwl hydōde" />
                <Stanza ponish="Ain þūsund langa iāra in ain sunnlaess nīwal&#10;Mīn heurt fraewandlōdun tō stain, galić ain deup-suncwen hwal&#10;Ić waerōda þan blac mantel, ain sćadu macōndi firhtan&#10;Bīdandi fir sameuhw haeran" />
                <Stanza ponish="Se rād wīgstierancrafteras is brokan in twain,&#10;In þan midel deurcas unhierias and þan euhw ić knēuw.&#10;Ić laibōda þan sunn macōn hia seuhwand,&#10;Þat se sćadu was aell is laibad." />
              </div>
              <div className="space-y-10">
                <Stanza english="I gathered the heros, the bold and bright.&#10;I brought them together, to stand for the fight.&#10;A scholar of strategy, humble and easy.&#10;I followed in their shadows, and felt unworthy." />
                <Stanza english="I wanted to stand where heros stood&#10;To show I was brave, to show I was good&#10;I took the relics, to be together in the fight" />
                <Stanza english="No questions were asked, and no mercy was shown&#10;The friends who I loved, turned against our pledge&#10;Thus I found a deep well where the darkness lives&#10;And (I) welcomed the cold who the heavy soul hides" />
                <Stanza english="A thousand long years in a sunless abyss&#10;My heart turned to stone, like a deep-sunken whale&#10;I wore the black mantel, a shadow made to scare&#10;Waiting for somepony to hear." />
                <Stanza english="The strategist's plan is broken in two,&#10;In the middle of a dark monster and the pony I knew,&#10;I left the sun to make them see&#10;That the shadow was all is left." />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: PROSE & NON-CANON */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-0.5 flex-grow bg-[#e2e8f0]"></div>
            <h3 className="text-2xl font-bold text-[#1e293b] uppercase tracking-widest shrink-0">
              Non-Canon Fragments
            </h3>
            <div className="h-0.5 flex-grow bg-[#e2e8f0]"></div>
          </div>

          <div className="space-y-12">
            <ProseCard 
              title="The Mare in the Moon"
              ponish={[
                "Se maerhe in þan mānan, untriewespeull fram aeldenn euhw tīman.",
                "Ain waeldfull euhw hwā winsċide waeldan Euhwland, unwan Firisþingo Aileudi and liċan in þan mānan. Untriewespeoll sagēþ in langemest dag of se þūsundoþ iār, steurraan wiell hielpid in hesa fleuh, and hia wiell sċaewaþ naehttīma aeċ."
              ]}
              english={[
                "The Mare in the Moon, myth from olden pony times.",
                "A powerful pony who wanted to rule Equestria, defeated by the Elements of Harmony and imprisoned in the moon. Legend has it that on the longest day of the thousandth year, the stars will aid in her escape, and she will bring about nighttime eternal."
              ]}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FragmentCard 
                attribution="Cwānling Mān (Princess Luna)"
                ponish='"Se winn habēþ betwai!"'
                translation='"The fun has been doubled!"'
              />
              <FragmentCard 
                attribution="Traditional Rhyme"
                ponish='"Dō þīn dail, hōf tō heurt!"'
                translation='"Do your part, hoof to heart!"'
              />
            </div>

            <ProseCard 
              title="Winter Greeting"
              ponish={[
                "Se ćaeld winter is nāehw, ain snaiwsturm wiell cwimd. Cwim in mīn waerm hūs mīn win. Welćem! Cwim hēr, siew and saelta, et and drinc. Þat is mīn rād. Wi habbiāþ water, beur, and meluc hwilīć is frisć frām þan ca, O, and waerm sopa!"
              ]}
              english={[
                "The cold winter is near, a snowstorm will come. Come in my warm house my friend. Welcome! Come here, sing and dance, eat and drink. That is my plan. We have water, beer, and milk fresh from the cow. Oh, and warm soup!"
              ]}
            />
          </div>
        </section>

        {/* Footer Note */}
        <div className="prose prose-lg max-w-none text-[#334155] text-center italic opacity-70 border-t border-[#e2e8f0] pt-12">
          <p>
            These fragments represent the few surviving remnants of archaic equestrian speech, 
            carefully preserved and translated to reflect the naturalistic evolution of the language.
          </p>
        </div>
      </div>
    </div>
  );
};

// HELPER COMPONENTS

const FragmentCard: React.FC<{ 
  rune?: string; 
  ponish: string; 
  translation: string; 
  literal?: string;
  attribution?: string;
}> = ({ rune, ponish, translation, literal, attribution }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white border border-[#e2e8f0] rounded-sm group hover:border-[#4c1d95]/30 transition-colors shadow-sm">
    {rune && (
      <div className="runic-text text-xl text-[#4c1d95] mb-2 opacity-30 group-hover:opacity-100 transition-opacity">
        {rune}
      </div>
    )}
    <p className="text-lg font-bold text-[#1e293b] mb-2 italic leading-tight">{ponish}</p>
    <div className="w-8 h-px bg-[#4c1d95]/20 mb-2"></div>
    <p className="text-sm text-[#64748b] font-medium leading-snug">{translation}</p>
    {literal && <p className="text-[10px] text-[#64748b]/60 italic mt-1 font-medium">Literal: {literal}</p>}
    {attribution && <p className="text-[10px] font-bold uppercase tracking-widest text-[#4c1d95] mt-4 border-t border-[#e2e8f0] pt-2 w-full">{attribution}</p>}
  </div>
);

const Stanza: React.FC<{ ponish?: string; english?: string }> = ({ ponish, english }) => (
  <div className="min-h-[6rem]">
    {ponish && (
      <p className="text-lg font-bold text-[#1e293b] italic leading-relaxed whitespace-pre-line">
        {ponish}
      </p>
    )}
    {english && (
      <p className="text-lg text-[#475569] leading-relaxed whitespace-pre-line">
        {english}
      </p>
    )}
  </div>
);

const ProseCard: React.FC<{ 
  title: string; 
  ponish: string[]; 
  english: string[] 
}> = ({ title, ponish, english }) => (
  <div className="bg-white border border-[#e2e8f0] p-8 md:p-12 rounded-sm shadow-sm">
    <h4 className="text-xs font-bold text-[#4c1d95] uppercase tracking-[0.3em] mb-8 border-b border-[#4c1d95]/10 pb-2">
      {title}
    </h4>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
      <div className="space-y-6">
        {ponish.map((p, i) => (
          <p key={i} className="text-lg font-bold text-[#1e293b] leading-relaxed italic">
            {p}
          </p>
        ))}
      </div>
      <div className="space-y-6">
        {english.map((e, i) => (
          <p key={i} className="text-lg text-[#64748b] leading-relaxed">
            {e}
          </p>
        ))}
      </div>
    </div>
  </div>
);

export default Literature;
