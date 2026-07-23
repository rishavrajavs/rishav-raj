import React, { useState } from 'react';
import { Compass, CheckCircle2, ShieldCheck, Sun, Sparkles, MapPin } from 'lucide-react';
import { VASTU_TIPS } from '../data/content';
import { Language } from '../types';

interface VastuGuideProps {
  lang: Language;
  onOpenConsultation: () => void;
}

export const VastuGuide: React.FC<VastuGuideProps> = ({ lang, onOpenConsultation }) => {
  const isHi = lang === 'hi';
  const [selectedDirection, setSelectedDirection] = useState<'NE' | 'SE' | 'SW' | 'NW'>('NE');

  const compassData = {
    NE: {
      name: isHi ? 'उत्तर-पूर्व (ईशान कोण / Ishanya)' : 'North-East (Ishanya Corner)',
      deity: isHi ? 'भगवान शिव व गुरु गृह' : 'Divine Energy & Light',
      bestFor: isHi ? 'पूजा घर, मुख्य द्वार, जल स्रोत (बोरवेल)' : 'Pooja Room, Main Entrance, Water Source',
      color: 'from-amber-500/20 to-blue-500/20 border-amber-500',
      description: isHi
        ? 'यह घर का सबसे पवित्र और ऊर्जावान कोण है। यहाँ पूजा घर और मुख्य द्वार बनाने से घर में सुख, शांति और समृद्धि आती है।'
        : 'The most auspicious direction in Vastu. Ideal for prayer room and main gate to invite wisdom and abundance.',
    },
    SE: {
      name: isHi ? 'दक्षिण-पूर्व (आग्नेय कोण / Agni)' : 'South-East (Agni Corner)',
      deity: isHi ? 'अग्नि देव (Fire Element)' : 'Fire Element & Energy',
      bestFor: isHi ? 'मॉड्यूलर किचन, इलेक्ट्रिक मीटर, ट्रांसफार्मर' : 'Modular Kitchen, Cooktop, Electrical Board',
      color: 'from-orange-500/20 to-red-500/20 border-orange-500',
      description: isHi
        ? 'अग्नि तत्व का स्थान। यहाँ किचन बनाने से घर के सदस्यों का स्वास्थ्य और भोजन का स्वाद बेहतरीन रहता है।'
        : 'Associated with Fire element. Placing the kitchen here brings vitality, warmth, and health to the household.',
    },
    SW: {
      name: isHi ? 'दक्षिण-पश्चिम (नैरृत्य कोण / Nairitya)' : 'South-West (Earth Element)',
      deity: isHi ? 'पृथ्वी तत्व (Stability)' : 'Earth Element & Power',
      bestFor: isHi ? 'मास्टर बेडरूम, तिजोरी, ओवरहेड वॉटर टैक' : 'Master Bedroom, Treasury, Heavy Structure',
      color: 'from-emerald-500/20 to-amber-500/20 border-emerald-500',
      description: isHi
        ? 'स्थायित्व और नेतृत्व की दिशा। यहाँ घर के मुखिया का मास्टर बेडरूम होना चाहिए।'
        : 'Represents stability and authority. Perfect placement for Master Bedroom and family leadership.',
    },
    NW: {
      name: isHi ? 'उत्तर-पश्चिम (वायव्य कोण / Vayavya)' : 'North-West (Air Element)',
      deity: isHi ? 'वायु देव (Air Element)' : 'Air Element & Movement',
      bestFor: isHi ? 'गेस्ट रूम, स्टोर रूम, वाहन पार्किंग' : 'Guest Bedroom, Parking, Storage',
      color: 'from-cyan-500/20 to-indigo-500/20 border-cyan-500',
      description: isHi
        ? 'गति और बदलाव का प्रतीक। मेहमानों के कमरे और पार्किंग के लिए उत्तम स्थान।'
        : 'Governs circulation and guest relations. Ideal for guest rooms and garage.',
    },
  };

  const currentInfo = compassData[selectedDirection];

  return (
    <section className="py-16 bg-slate-900 text-white border-b border-slate-800" id="vastu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>{isHi ? '100% वास्तु शास्त्र सम्मत निर्माण' : '100% VASTU COMPLIANT CONSTRUCTION'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-serif">
            {isHi ? 'घर में सुख-समृद्धि के लिए वास्तु निर्देश' : 'Scientific Vastu Guidelines For Your Home'}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            {isHi
              ? 'BUILTEX GROUP का हर 2D/3D हाउस प्लान वैज्ञानिक वास्तु सिद्धांतों पर आधारित होता है।'
              : 'Every BUILTEX GROUP blueprint is engineered according to ancient Vastu Shastra principles for light, health, and harmony.'}
          </p>
        </div>

        {/* Interactive Vastu Compass Viewer */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Compass Controls (5 cols) */}
          <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-6 text-center">
            <p className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              {isHi ? 'दिशा चुनें और वास्तु नियम देखें:' : 'Click a direction on compass:'}
            </p>

            {/* Visual Compass Wheel */}
            <div className="relative w-64 h-64 mx-auto rounded-full border-4 border-slate-800 bg-slate-900 flex items-center justify-center shadow-inner">
              <div className="absolute inset-0 rounded-full border border-amber-500/20 animate-spin-slow pointer-events-none" />

              {/* Center Icon */}
              <div className="w-16 h-16 rounded-full bg-amber-500 text-slate-950 flex flex-col items-center justify-center shadow-lg font-black text-xs z-10">
                <Compass className="w-6 h-6" />
                <span>VASTU</span>
              </div>

              {/* NE Button */}
              <button
                onClick={() => setSelectedDirection('NE')}
                className={`absolute top-4 right-4 w-16 h-16 rounded-xl font-black text-xs transition-all flex flex-col items-center justify-center gap-0.5 ${
                  selectedDirection === 'NE'
                    ? 'bg-amber-500 text-slate-950 scale-110 shadow-lg ring-2 ring-amber-300'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <span>N-E</span>
                <span className="text-[9px] font-semibold">{isHi ? 'ईशान' : 'Ishanya'}</span>
              </button>

              {/* SE Button */}
              <button
                onClick={() => setSelectedDirection('SE')}
                className={`absolute bottom-4 right-4 w-16 h-16 rounded-xl font-black text-xs transition-all flex flex-col items-center justify-center gap-0.5 ${
                  selectedDirection === 'SE'
                    ? 'bg-amber-500 text-slate-950 scale-110 shadow-lg ring-2 ring-amber-300'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <span>S-E</span>
                <span className="text-[9px] font-semibold">{isHi ? 'आग्नेय' : 'Agni'}</span>
              </button>

              {/* SW Button */}
              <button
                onClick={() => setSelectedDirection('SW')}
                className={`absolute bottom-4 left-4 w-16 h-16 rounded-xl font-black text-xs transition-all flex flex-col items-center justify-center gap-0.5 ${
                  selectedDirection === 'SW'
                    ? 'bg-amber-500 text-slate-950 scale-110 shadow-lg ring-2 ring-amber-300'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <span>S-W</span>
                <span className="text-[9px] font-semibold">{isHi ? 'नैरृत्य' : 'Nairitya'}</span>
              </button>

              {/* NW Button */}
              <button
                onClick={() => setSelectedDirection('NW')}
                className={`absolute top-4 left-4 w-16 h-16 rounded-xl font-black text-xs transition-all flex flex-col items-center justify-center gap-0.5 ${
                  selectedDirection === 'NW'
                    ? 'bg-amber-500 text-slate-950 scale-110 shadow-lg ring-2 ring-amber-300'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <span>N-W</span>
                <span className="text-[9px] font-semibold">{isHi ? 'वायव्य' : 'Vayavya'}</span>
              </button>
            </div>

            <p className="text-xs text-slate-400">
              {isHi
                ? 'नक्शा बनवाते समय BUILTEX के वास्तु विशेषज्ञ से निःशुल्क परामर्श पाएं।'
                : 'Get free expert Vastu plan analysis before initiating civil foundation.'}
            </p>
          </div>

          {/* Direction Details Panel (7 cols) */}
          <div className="lg:col-span-7 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  {isHi ? 'चयनित कोण विश्लेषण' : 'DIRECTIONAL ANALYSIS'}
                </span>
                <h3 className="text-2xl font-black text-white font-serif mt-1">{currentInfo.name}</h3>
              </div>
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <Sun className="w-6 h-6" />
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 space-y-1">
                <span className="text-xs font-bold text-slate-400 uppercase">{isHi ? 'सर्वोत्तम उपयोग:' : 'Best Suited For:'}</span>
                <p className="text-base font-bold text-amber-300">{currentInfo.bestFor}</p>
              </div>

              <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 space-y-1">
                <span className="text-xs font-bold text-slate-400 uppercase">{isHi ? 'वास्तु प्रभाव व नियम:' : 'Vastu Impact:'}</span>
                <p className="text-sm text-slate-200 leading-relaxed">{currentInfo.description}</p>
              </div>
            </div>

            {/* Vastu Tips Summary Cards */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {VASTU_TIPS.map((tip, idx) => (
                <div key={idx} className="bg-slate-900/60 p-3 rounded-xl border border-slate-800 space-y-1 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-amber-400">{tip.room[lang]}</span>
                    <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">{tip.direction[lang]}</span>
                  </div>
                  <p className="text-slate-300 line-clamp-2">{tip.advice[lang]}</p>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenConsultation}
              className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2 transition-all shadow"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isHi ? 'वास्तु अनुसार 2D/3D हाउस मैप बुक करें' : 'Get Custom Vastu Compliant 2D/3D Floor Plan'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
