import React from 'react';
import { Award, Clock, Compass, Layers, ShieldCheck, ThumbsUp } from 'lucide-react';
import { Language } from '../types';

interface TrustBarProps {
  lang: Language;
}

export const TrustBar: React.FC<TrustBarProps> = ({ lang }) => {
  const isHi = lang === 'hi';

  const stats = [
    {
      icon: Layers,
      value: '₹1299 / sq.ft',
      label: isHi ? 'शुरुआती निर्माण दर' : 'Starting Construction Rate',
      subtext: isHi ? 'पारदर्शी मटेरियल लिस्ट' : 'Transparent Material List',
    },
    {
      icon: Clock,
      value: '100% On-Time',
      label: isHi ? 'समय पर डिलीवरी गारंटी' : 'Guaranteed On-Time Delivery',
      subtext: isHi ? 'प्रति दिन लेग पेनल्टी क्लॉज' : 'Daily Penalty Clause on Delay',
    },
    {
      icon: Compass,
      value: '100% Vastu',
      label: isHi ? 'शास्त्र सम्मत वास्तु प्लान' : 'Vastu Architecture',
      subtext: isHi ? 'सुख-समृद्धि एवं शांति' : 'Positive Energy & Light',
    },
    {
      icon: ShieldCheck,
      value: '10+ Years',
      label: isHi ? 'स्ट्रक्चरल वारंटी' : 'Structural Guarantee',
      subtext: isHi ? 'अनुभवी इंजीनियर्स टीम' : 'Certified Engineers Team',
    },
  ];

  return (
    <div className="bg-slate-900 border-b border-slate-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-slate-800/60 border border-slate-700/50 hover:border-amber-500/40 transition-all"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-black text-amber-400 font-serif leading-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-200">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium hidden sm:block">
                    {stat.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
