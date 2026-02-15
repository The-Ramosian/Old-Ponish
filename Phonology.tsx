
import React from 'react';

const Phonology: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-8 py-20 border-t border-[#e2e8f0]">
      <h2 className="text-5xl font-bold text-[#1e293b] mb-12 text-center">Phonology of Old Ponish</h2>
      
      <div className="prose prose-lg max-w-none text-[#334155] mb-16 italic font-medium">
        <p>
          The phonological system of Old Ponish represents a complex intersection of ancient equestrian vocalizations 
          and structured runic articulation. Below is a comprehensive overview of the phonemes recognized 
          in the standard dialect, categorizing the sounds by their place and manner of articulation.
        </p>
      </div>

      <div className="mb-20">
        <h3 className="text-3xl font-bold text-[#1e293b] mb-8 border-l-4 border-[#4c1d95] pl-4 uppercase tracking-wider">Consonants</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-[#cbd5e1] text-[#1e293b]">
            <thead className="bg-[#f1f5f9]">
              <tr className="text-left font-bold text-sm">
                <th className="p-4 border border-[#cbd5e1] bg-[#e2e8f0]">Consonants</th>
                <th className="p-4 border border-[#cbd5e1]">Bilabial</th>
                <th className="p-4 border border-[#cbd5e1]">Labio-<br/>dental</th>
                <th className="p-4 border border-[#cbd5e1]">Dental</th>
                <th className="p-4 border border-[#cbd5e1]">Alveolar</th>
                <th className="p-4 border border-[#cbd5e1]">Post-<br/>Alveolar</th>
                <th className="p-4 border border-[#cbd5e1]">Palatal</th>
                <th className="p-4 border border-[#cbd5e1]">Labio-<br/>velar</th>
                <th className="p-4 border border-[#cbd5e1]">Velar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border border-[#cbd5e1] font-bold bg-[#f1f5f9]">Nasal</td>
                <td className="p-4 border border-[#cbd5e1] text-center">m</td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
                <td className="p-4 border border-[#cbd5e1] text-center">n</td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
                <td className="p-4 border border-[#cbd5e1] text-center">ŋ</td>
              </tr>
              <tr>
                <td className="p-4 border border-[#cbd5e1] font-bold bg-[#f1f5f9]">Plosive</td>
                <td className="p-4 border border-[#cbd5e1] text-center font-medium">p &nbsp; b</td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
                <td className="p-4 border border-[#cbd5e1] text-center font-medium">t &nbsp; d</td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
                <td className="p-4 border border-[#cbd5e1] text-center font-medium">k &nbsp; g</td>
              </tr>
              <tr>
                <td className="p-4 border border-[#cbd5e1] font-bold bg-[#f1f5f9]">Fricative</td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
                <td className="p-4 border border-[#cbd5e1] text-center">f</td>
                <td className="p-4 border border-[#cbd5e1] text-center">θ</td>
                <td className="p-4 border border-[#cbd5e1] text-center">s</td>
                <td className="p-4 border border-[#cbd5e1] text-center">ʃ</td>
                <td className="p-4 border border-[#cbd5e1] text-center">ʝ</td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
                <td className="p-4 border border-[#cbd5e1] text-center">x</td>
              </tr>
              <tr>
                <td className="p-4 border border-[#cbd5e1] font-bold bg-[#f1f5f9]">Affricate</td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
                <td className="p-4 border border-[#cbd5e1] text-center font-medium">t͡ʃ &nbsp; d͡ʒ</td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
              </tr>
              <tr>
                <td className="p-4 border border-[#cbd5e1] font-bold bg-[#f1f5f9]">Lateral approximant</td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
                <td className="p-4 border border-[#cbd5e1] text-center">l</td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
              </tr>
              <tr>
                <td className="p-4 border border-[#cbd5e1] font-bold bg-[#f1f5f9]">Approximant</td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
                <td className="p-4 border border-[#cbd5e1] text-center">j</td>
                <td className="p-4 border border-[#cbd5e1] text-center">w</td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
              </tr>
              <tr>
                <td className="p-4 border border-[#cbd5e1] font-bold bg-[#f1f5f9]">Trill</td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
                <td className="p-4 border border-[#cbd5e1] text-center">r</td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-20">
        <h3 className="text-3xl font-bold text-[#1e293b] mb-8 border-l-4 border-[#4c1d95] pl-4 uppercase tracking-wider">Vowels</h3>
        <div className="overflow-x-auto max-w-2xl">
          <table className="w-full border-collapse border border-[#cbd5e1] text-[#1e293b]">
            <thead className="bg-[#f1f5f9]">
              <tr className="text-left font-bold text-sm">
                <th className="p-4 border border-[#cbd5e1] bg-[#e2e8f0]">Vowels</th>
                <th className="p-4 border border-[#cbd5e1]">Front</th>
                <th className="p-4 border border-[#cbd5e1]">Back</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border border-[#cbd5e1] font-bold bg-[#f1f5f9]">Close</td>
                <td className="p-4 border border-[#cbd5e1] text-center">i &emsp; i: &emsp; y &emsp; y:</td>
                <td className="p-4 border border-[#cbd5e1] text-center">u &emsp; u:</td>
              </tr>
              <tr>
                <td className="p-4 border border-[#cbd5e1] font-bold bg-[#f1f5f9]">Close-mid</td>
                <td className="p-4 border border-[#cbd5e1] text-center">e &emsp; e:</td>
                <td className="p-4 border border-[#cbd5e1] text-center">o &emsp; o:</td>
              </tr>
              <tr>
                <td className="p-4 border border-[#cbd5e1] font-bold bg-[#f1f5f9]">Near-open</td>
                <td className="p-4 border border-[#cbd5e1] text-center">æ<sup>1</sup></td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
              </tr>
              <tr>
                <td className="p-4 border border-[#cbd5e1] font-bold bg-[#f1f5f9]">Open</td>
                <td className="p-4 border border-[#cbd5e1] text-center"></td>
                <td className="p-4 border border-[#cbd5e1] text-center">ɑ:</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-4 text-sm text-[#64748b]">
            <sup>1</sup> due to Anglo-Frisian brightning
          </p>
        </div>
      </div>

      <div className="prose prose-lg max-w-none text-[#334155] mt-16 text-justify">
        <p>
          Historical analysis suggests that these phonemes evolved through a period of intense linguistic adaptation. 
          The presence of the Anglo-Frisian brightening in the vowel shift indicates a specific migratory pattern 
          among the early settlers of the Ponish heartlands. Scholars continue to debate the exact phonetic 
          quality of the labio-velar approximant [w] in formal courtly speech versus common agrarian dialects.
        </p>
      </div>
    </div>
  );
};

export default Phonology;
