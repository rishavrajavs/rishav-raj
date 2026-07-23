import React, { useState } from 'react';
import { Check, ShieldCheck, Sparkles, Phone, MessageCircle, Info } from 'lucide-react';
import { PACKAGES } from '../data/content';
import { Language } from '../types';

interface PackagesComparisonProps {
  lang: Language;
  onOpenConsultation: (packageTitle?: string) => void;
}

export const PackagesComparison: React.FC<PackagesComparisonProps> = ({
  lang,
  onOpenConsultation,
}) => {
  const isHi = lang === 'hi';
  const [activeTab, setActiveTab] = useState<'features' | 'materials'>('features');

  return (
    <section className="py-16 bg-slate-900 text-white border-b border-slate-800" id="packages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isHi ? 'निर्माण पैकेज और पारदर्शी दरें' : 'Construction Packages & Transparent Rates'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-serif">
            {isHi ? 'कंस्ट्रक्शन वर्क सिर्फ ₹1299 प्रति वर्गफुट से शुरू!' : 'Construction Work Starting @ Just ₹1299/sq.ft!'}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            {isHi
              ? 'बिना किसी छुपे हुए चार्ज के पाएँ पारदर्शी निर्माण। अपनी जरूरत और बजट के अनुसार सबसे सही पैकेज चुनें।'
              : 'Choose the ideal construction tier with itemized material guarantees, certified engineering, and fixed budgets.'}
          </p>

          {/* Toggle Tab */}
          <div className="flex justify-center pt-2">
            <div className="inline-flex bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setActiveTab('features')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'features'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {isHi ? 'मुख्य विशेषताएं (Features)' : 'Key Features'}
              </button>
              <button
                onClick={() => setActiveTab('materials')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'materials'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {isHi ? 'सामग्री सूची (Material Specs)' : 'Material Specifications'}
              </button>
            </div>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PACKAGES.map((pkg) => {
            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl p-6 flex flex-col justify-between transition-all ${
                  pkg.popular
                    ? 'bg-slate-950 border-2 border-amber-500 shadow-2xl shadow-amber-500/10 ring-1 ring-amber-500/50'
                    : 'bg-slate-950/80 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-amber-500 text-slate-950 font-black text-xs px-4 py-1 rounded-full uppercase tracking-widest shadow-md">
                    {isHi ? 'सर्वाधिक लोकप्रिय पैकेज' : 'Most Popular Choice'}
                  </div>
                )}

                <div className="space-y-4">
                  {/* Package Title & Price */}
                  <div className="border-b border-slate-800 pb-4">
                    <h3 className="text-xl font-bold text-white font-serif">{pkg.name[lang]}</h3>
                    <p className="text-xs text-slate-400 mt-1 min-h-[32px]">{pkg.description[lang]}</p>
                    <div className="mt-3 flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-black text-amber-400 font-serif">
                        ₹{pkg.pricePerSqFt}
                      </span>
                      <span className="text-xs text-slate-300 font-semibold">/ {isHi ? 'वर्गफुट' : 'sq. ft.'}</span>
                    </div>
                  </div>

                  {/* Content View Based on Active Tab */}
                  {activeTab === 'features' ? (
                    <div className="space-y-2.5 py-2">
                      <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                        {isHi ? 'शामिल सेवाएं:' : 'What is included:'}
                      </p>
                      <ul className="space-y-2 text-xs text-slate-200">
                        {pkg.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                            <span>{isHi ? feat.hi : feat.en}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className="space-y-2.5 py-2">
                      <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                        {isHi ? 'सामग्री ब्रांड्स (Material Brands):' : 'Material Specifications:'}
                      </p>
                      <div className="space-y-2 text-xs divide-y divide-slate-800/80">
                        <div className="pt-1">
                          <span className="text-slate-400 font-semibold">{isHi ? 'सीमेंट:' : 'Cement:'}</span>{' '}
                          <span className="text-amber-300 font-bold">{pkg.materials.cement}</span>
                        </div>
                        <div className="pt-1">
                          <span className="text-slate-400 font-semibold">{isHi ? 'सरिया (Steel):' : 'Steel:'}</span>{' '}
                          <span className="text-amber-300 font-bold">{pkg.materials.steel}</span>
                        </div>
                        <div className="pt-1">
                          <span className="text-slate-400 font-semibold">{isHi ? 'ईंटें (Bricks):' : 'Bricks:'}</span>{' '}
                          <span className="text-slate-200">{pkg.materials.bricks}</span>
                        </div>
                        <div className="pt-1">
                          <span className="text-slate-400 font-semibold">{isHi ? 'टाइल्स:' : 'Flooring:'}</span>{' '}
                          <span className="text-slate-200">{pkg.materials.flooring}</span>
                        </div>
                        <div className="pt-1">
                          <span className="text-slate-400 font-semibold">{isHi ? 'बाथरूम:' : 'Bath:'}</span>{' '}
                          <span className="text-slate-200">{pkg.materials.bathFittings}</span>
                        </div>
                        <div className="pt-1">
                          <span className="text-slate-400 font-semibold">{isHi ? 'रसोई (Kitchen):' : 'Kitchen:'}</span>{' '}
                          <span className="text-slate-200">{pkg.materials.kitchen}</span>
                        </div>
                        <div className="pt-1">
                          <span className="text-slate-400 font-semibold">{isHi ? 'पेंट:' : 'Paint:'}</span>{' '}
                          <span className="text-slate-200">{pkg.materials.paint}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Package Card Bottom CTA */}
                <div className="pt-6 border-t border-slate-800 space-y-2">
                  <button
                    onClick={() => onOpenConsultation(pkg.name[lang])}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all shadow-md active:scale-95 ${
                      pkg.popular
                        ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 font-black'
                        : 'bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700'
                    }`}
                  >
                    {isHi ? 'यह पैकेज चुनें व सलाह लें' : 'Select Package & Request Call'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Guarantee Callout */}
        <div className="mt-12 bg-slate-950 border border-amber-500/30 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/30 text-amber-400 shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-serif">
                {isHi ? 'पारदर्शी मटेरियल बिलिंग और ऑन-साइट क्वालिटी टेस्टिंग' : 'Transparent Material Billing & On-site Quality Tests'}
              </h4>
              <p className="text-xs text-slate-300">
                {isHi
                  ? 'हर सीमेंट बोरी, स्टील बंडल और टाइल्स बॉक्स आपकी मौजूदगी में चेक और अप्रूव किए जाते हैं।'
                  : 'Every cement batch, steel rod, and tile box is verified and certified prior to structure casting.'}
              </p>
            </div>
          </div>

          <a
            href="#calculator"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm transition-all"
          >
            {isHi ? 'लागत की गणना करें' : 'Calculate Cost'}
          </a>
        </div>
      </div>
    </section>
  );
};
