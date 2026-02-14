
import React from 'react';

const Table: React.FC<{ title?: string; headers: string[]; rows: string[][] }> = ({ title, headers, rows }) => (
  <div className="mb-8">
    {title && <h4 className="text-lg font-bold text-[#1e293b] mb-3 italic">{title}</h4>}
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-[#cbd5e1] text-[#1e293b] text-sm md:text-base">
        <thead className="bg-[#f1f5f9]">
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="p-3 border border-[#cbd5e1] text-left">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#fafafa]'}>
              {row.map((cell, j) => (
                <td key={j} className={`p-3 border border-[#cbd5e1] ${j === 0 ? 'font-bold bg-[#f8fafc]' : ''}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mb-16">
    <h2 className="text-3xl font-bold text-[#1e293b] mb-8 border-l-4 border-[#4c1d95] pl-4 uppercase tracking-wider">{title}</h2>
    {children}
  </section>
);

const Grammar: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-8 py-20">
      <h1 className="text-5xl font-bold text-[#1e293b] mb-4 text-center">Quick Grammar Guide</h1>
      <p className="text-xl text-center text-[#64748b] mb-16 italic">By The Ramosian</p>

      <Section title="Nouns">
        <div className="prose prose-lg max-w-none text-[#334155] mb-8 italic">
          <p>
            Old Ponish uses 9 noun stems. Old Ponish has 4 cases, and 2 numbers. For cases: <strong>Nominative</strong>, for the subject; 
            <strong>Accusative</strong>, for the object; <strong>Genitive</strong>, for possession; and <strong>Dative</strong>, for the indirect object. 
            For Numbers: <strong>Singular</strong>, for one, and <strong>plural</strong> for many.
          </p>
        </div>

        <Table title="A-stem (Masculine/Neuter, from PGmc *-az or *-ą)" 
          headers={['Case', 'Singular', 'Plural']} 
          rows={[
            ['Nominative', 'daǵ', 'daǵa'],
            ['Accusative', 'daǵ', 'daǵa'],
            ['Genitive', 'daǵas', 'daǵa'],
            ['Dative', 'daǵe', 'dagum'],
          ]} 
        />

        <Table title="O-stem (Feminine, from PGmc *-ō)" 
          headers={['Case', 'Singular', 'Plural']} 
          rows={[
            ['Nominative', 'eurd', 'eurda'],
            ['Accusative', 'eurda', 'eurda'],
            ['Genitive', 'eurda', 'eurda'],
            ['Dative', 'eurde', 'eurdum'],
          ]} 
        />

        <Table title="I-stem (Neuter, from PGmc *-iz)" 
          headers={['Case', 'Singular', 'Plural']} 
          rows={[
            ['Nominative', 'saiw', 'saiwi'],
            ['Accusative', 'saiw', 'saiwi'],
            ['Genitive', 'saiwi', 'saiwa'],
            ['Dative', 'saiwi', 'saiwum'],
          ]} 
        />

        <Table title="U-stem (from PGmc *-uz)" 
          headers={['Case', 'Singular', 'Plural']} 
          rows={[
            ['Nominative', 'appel, craft', 'appla, crafta'],
            ['Accusative', 'appel, craft', 'appla, crafta'],
            ['Genitive', 'appla, crafta', 'appliwa, craftiwa'],
            ['Dative', 'appla, crafta', 'applum, crafum'],
          ]} 
        />

        <Table title="R-stem (Masculine, from PGmc *-er)" 
          headers={['Case', 'Singular', 'Plural']} 
          rows={[
            ['Nominative', 'fader', 'fader'],
            ['Accusative', 'fader', 'fader'],
            ['Genitive', 'fador', 'fadra'],
            ['Dative', 'fadur', 'fadra'],
          ]} 
        />

        <Table title="An-stem" 
          headers={['Case', 'Singular', 'Plural']} 
          rows={[
            ['Nominative', 'sticca', 'sticcan'],
            ['Accusative', 'sticcan', 'sticcan'],
            ['Genitive', 'sticcan', 'sticcana'],
            ['Dative', 'sticcan', 'sticcum'],
          ]} 
        />

        <Table title="On-stem" 
          headers={['Case', 'Singular']} 
          rows={[
            ['Nominative', 'heahi'],
            ['Accusative', 'heahin'],
            ['Genitive', 'heahin'],
            ['Dative', 'heahin'],
          ]} 
        />

        <div className="bg-[#f1f5f9] p-6 mb-8 rounded-sm">
          <h4 className="text-xl font-bold mb-4">Consonant Stem</h4>
          <p className="text-[#475569] mb-4">
            These nouns originate from the Proto-Germanic consonant stem and undergo ablaut. 
            These are the origin of pairs like mouse/mice and tooth/teeth.
          </p>
          <Table headers={['Case', 'Singular', 'Plural']} 
            rows={[
              ['Nominative', 'mūs, brōc, tāþ', 'mīs, brēć, tāþ'],
              ['Accusative', 'mūs, brōc, tāþ', 'mīs, brēć, tāþ'],
              ['Genitive', 'mīs, brēć, tāþ', 'mūsa, brōca, tāþa'],
              ['Dative', 'mīs, brēć, tāþ', 'mūsum, brōcum, tāþum'],
            ]} 
          />
        </div>

        <Table title="Irregular Nouns (ca)" 
          headers={['Case', 'Singular', 'Plural']} 
          rows={[
            ['Nominative', 'ca', 'ćē'],
            ['Accusative', 'ca', 'ćē'],
            ['Genitive', 'cī', 'cwa'],
            ['Dative', 'cī', 'cūm'],
          ]} 
        />
      </Section>

      <Section title="Pronouns">
        <h3 className="text-2xl font-bold text-[#1e293b] mb-6">Pony Pronouns</h3>
        <Table headers={['Case', '1st Person', '2nd Person', '3rd Person (m/f/n)']} 
          title="Singular"
          rows={[
            ['Nominative', 'ić', 'þū', 'hi / hia / hit'],
            ['Accusative', 'mi', 'þi', 'hina / hio / hit'],
            ['Possessive', 'mīn', 'þīn', 'hes / heu / hes'],
          ]} 
        />
        <Table headers={['Case', '1st Person', '2nd Person', '3rd Person']} 
          title="Dual"
          rows={[
            ['Nominative', 'wit', 'īt', '-'],
            ['Accusative', 'unc', 'īw', '-'],
            ['Possessive', 'unćer', 'incwer', '-'],
          ]} 
        />
        <Table headers={['Case', '1st Person', '2nd Person', '3rd Person']} 
          title="Plural"
          rows={[
            ['Nominative', 'wi', 'ī', 'hī / hia / hia'],
            ['Accusative', 'ūs', 'iew', 'hin / hio / hia'],
            ['Possessive', 'ūser', 'hae', '-'],
          ]} 
        />
        
        <div className="bg-[#f8f7eb] p-6 mb-8 border border-[#e2e8f0]">
          <h4 className="font-bold mb-2">Examples:</h4>
          <ul className="list-disc pl-5 text-[#334155]">
            <li><strong>Ić im ain euhw</strong> – I am a pony</li>
            <li><strong>Þū ir gōd</strong> – You are good</li>
          </ul>
        </div>

        <h3 className="text-2xl font-bold text-[#1e293b] mb-6">Reflexive Pronouns</h3>
        <p className="mb-4 text-[#475569]">Formed by compounding the accusative pronoun + <em>sielf</em>.</p>
        <Table headers={['Person', 'Singular', 'Dual', 'Plural']} 
          rows={[
            ['1st', 'misielf', 'uncsielf', 'ūssielf'],
            ['2nd', 'þisielf', 'īwsielf', 'iewsielf'],
            ['3rd', 'hinasielf (m.), hiosielf (f.), sīn (n.)', 'sīn', 'hinsielf (m.), hiosielf (f.), sīn (n.)'],
          ]} 
        />
      </Section>

      <Section title="Articles & Demonstratives">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-[#1e293b] mb-4">Articles (A, An, The)</h3>
          <p className="mb-4 text-[#334155]">Old Ponish uses both indefinite and definite articles. They must agree with the noun in case, number, and gender.</p>
          <Table headers={['Case', 'Sg. Masc.', 'Sg. Fem.', 'Sg. Neut.', 'Pl. Masc.', 'Pl. Fem.', 'Pl. Neut.']} 
            rows={[
              ['Nominative', 'se', 'sō', 'þat', 'þai', 'þar', 'þō'],
              ['Accusative', 'þan', 'þa', 'þat', 'þās', 'þar', 'þō'],
            ]} 
          />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#1e293b] mb-4">Demonstratives</h3>
          <Table headers={['Type', 'Singular', 'Plural']} 
            rows={[
              ['Proximal (This)', 'þis', 'þies'],
              ['Distal (That)', 'þat', 'þō'],
            ]} 
          />
        </div>
      </Section>

      <Section title="Adjectives & Adverbs">
        <p className="mb-4 text-[#334155]">Adjectives precede the noun and agree in case and number. Old Ponish primarily uses strong declensions.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Table title="A-stem (aeld)" headers={['Case', 'Singular', 'Plural']} 
            rows={[
              ['Nominative', 'aeld', 'aeld'],
              ['Accusative', 'aeld', 'aeld'],
              ['Genitive', 'aelda', 'aeldera'],
              ['Dative', 'aldum', 'aelduma'],
            ]} 
          />
          <Table title="Ja-stem (grēni)" headers={['Case', 'Singular', 'Plural']} 
            rows={[
              ['Nominative', 'grēni', 'grēni'],
              ['Accusative', 'grēni', 'grēni'],
              ['Genitive', 'grēnias', 'grēniara'],
              ['Dative', 'grēniem', 'grēniema'],
            ]} 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Table title="N-stem (maira)" headers={['Case', 'Singular', 'Plural']} 
            rows={[
              ['Nominative', 'maira', 'mairan'],
              ['Accusative', 'maira', 'mairan'],
              ['Genitive', 'mairin', 'mairana'],
              ['Dative', 'mairan', 'mairuma'],
            ]} 
          />
          <Table title="Wa-stem (cwic, ǵelu)" headers={['Case', 'Singular', 'Plural']} 
            rows={[
              ['Nominative', 'cwic, ǵelu', 'cwic, ǵelu'],
              ['Accusative', 'cwic, ǵelu', 'cwic, ǵelu'],
              ['Genitive', 'cwicwas, ǵelwas', 'cwicwera, ǵelwera'],
              ['Dative', 'cwicum, ǵelum', 'cwicuma, ǵeluma'],
            ]} 
          />
        </div>

        <h3 className="text-2xl font-bold text-[#1e293b] mb-6">Comparative & Superlatives</h3>
        <Table headers={['Base Adjective', 'Comparative', 'Superlative']} 
          rows={[
            ['daegul (secret)', 'daegulra', 'daegulmest'],
            ['falsći (false)', 'falsćira', 'falsćiramest'],
          ]} 
        />
      </Section>

      <Section title="Verbs">
        <h3 className="text-2xl font-bold text-[#1e293b] mb-6">Strong Verbs (Ablaut Classes)</h3>
        <Table headers={['Class', 'Inf.', 'Past 1Sg', 'Pres 2Sg', 'Past Pl.', 'Past Part.']} 
          rows={[
            ['1', 'rīd', 'raid', 'rīd', 'rid', 'ridan'],
            ['2a', 'freus', 'fraes', 'fries', 'frur', 'froran'],
            ['2b', 'lūc', 'laeć', 'līć', 'luc', 'locan'],
            ['3a', 'bind', 'band', 'bind', 'bund', 'bundan'],
            ['3b', 'weurþ', 'waerþ', 'wirþ', 'wurd', 'wordan'],
            ['4', 'ber', 'bar', 'bir', 'bār', 'boran'],
            ['5', 'les', 'las', 'lis', 'ler', 'leran'],
            ['6', 'al', 'al', 'al', 'al', 'alan'],
          ]} 
        />

        <Table title="Classes 7a-7e" headers={['Class', 'Inf.', 'Past 1Sg', 'Pres 2Sg', 'Past Pl.', 'Past Part.']} 
          rows={[
            ['7a', 'hait', 'hēt', 'hait', 'hēt', 'haitan'],
            ['7b', 'hlaep', 'hlēup', 'hlaep', 'hlēup', 'hlaepan'],
            ['7c', 'haeld', 'haeld', 'haeld', 'haeld', 'haeldan'],
            ['7d', 'rād', 'rēd', 'rād', 'rēd', 'rādan'],
            ['7e', 'blōt', 'blēut', 'blōt', 'blēut', 'blōtan'],
          ]} 
        />

        <div className="bg-[#f1f5f9] p-6 mb-12 rounded-sm border border-[#cbd5e1]">
          <h4 className="font-bold text-xl mb-4">Strong Verb Conjugation Pattern</h4>
          <Table headers={['Mode', 'Present', 'Past']} 
            rows={[
              ['1st Sg.', 'Part 1', 'Part 2'],
              ['2nd Sg.', 'Part 3 + ir', 'Part 4 + i (or 3+i for 3a/b)'],
              ['3rd Sg.', 'Part 3 + id', 'Part 2'],
              ['Plural', 'Part 1 + and', 'Part 4 + un'],
            ]} 
          />
          <div className="grid grid-cols-2 gap-4 mt-4 text-sm italic text-[#475569]">
            <div><strong>Infinitive:</strong> Part 1 + an</div>
            <div><strong>Imperative:</strong> Sg: Part 1, Pl: Part 3 + id</div>
            <div><strong>Pres. Participle:</strong> Part 1 + andi</div>
            <div><strong>Past Participle:</strong> Part 5</div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-[#1e293b] mb-6">Weak Verbs</h3>
        <p className="mb-4 text-[#334155]">There is only 1 class of weak verbs. Remove suffix <em>-an</em> for the base.</p>
        <Table headers={['Form', 'Present', 'Past']} 
          rows={[
            ['1st Sg.', 'Base + a', 'Base + ōda'],
            ['2nd Sg.', 'Base + as', 'Base + ōdes'],
            ['3rd Sg.', 'Base + aþ', 'Base + ōde'],
            ['Plural', 'Base + aþ', 'Base + ōdun'],
            ['Imperative', 'Sg: Base+a, Pl: Base+aþ', '-'],
            ['Participle', 'Pres: Base+ōndi', 'Past: Base+ad'],
          ]} 
        />

        <h3 className="text-2xl font-bold text-[#1e293b] mt-12 mb-6 uppercase tracking-wider">Irregular Verbs</h3>
        
        <div className="space-y-12">
          <Table title="To Be (wesan)" headers={['Form', 'Present', 'Past']} 
            rows={[
              ['1st Sg.', 'im', 'was'],
              ['2nd Sg.', 'ir', 'wāri'],
              ['3rd Sg.', 'is', 'was'],
              ['Plural', 'sind', 'wārun'],
              ['Imperative', 'Sg: wes, Pl: wisid', '-'],
              ['Participle', 'Pres: wesandi', 'Past: weran'],
            ]} 
          />

          <Table title="To Go (gān)" headers={['Form', 'Present', 'Past']} 
            rows={[
              ['1st Sg.', 'gā', 'geng'],
              ['2nd Sg.', 'gaist', 'gengest'],
              ['3rd Sg.', 'gaiþ', 'geng'],
              ['Plural', 'gāþand', 'gengun'],
              ['Imperative', 'Sg: gā, Pl: gāþ', '-'],
              ['Participle', 'Pres: gāndi', 'Past: gangan'],
            ]} 
          />

          <Table title="To Do (dōn)" headers={['Form', 'Present', 'Past']} 
            rows={[
              ['1st Sg.', 'dōm', 'ded'],
              ['2nd Sg.', 'dōs', 'dedes'],
              ['3rd Sg.', 'dōþ', 'dādum'],
              ['Plural', 'dōþ', 'dādun'],
              ['Imperative', 'Sg: dō, Pl: dōþ', '-'],
              ['Participle', 'Pres: dōndi', 'Past: dān'],
            ]} 
          />

          <Table title="To Can (cunnan)" headers={['Form', 'Present', 'Past']} 
            rows={[
              ['1st Sg.', 'can', 'cūþa'],
              ['2nd Sg.', 'canst', 'cūþst'],
              ['3rd Sg.', 'can', 'cūþa'],
              ['Plural', 'cunnon', 'cūþun'],
              ['Imperative', '-', '-'],
              ['Participle', 'Pres: cunnandi', 'Past: cūþ'],
            ]} 
          />
        </div>
      </Section>
    </div>
  );
};

export default Grammar;
