import React from 'react';
import { Building2, Compass, Palette, UtensilsCrossed, ShowerHead, Home, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../data/content';
import { Language } from '../types';

interface ServicesGridProps {
  lang: Language;
  onOpenConsultation: (serviceTitle?: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ lang, onOpenConsultation }) => {
  const isHi = lang === 'hi';

  const iconMap: Record<string, React.ReactNode> = {
    Building2: <Building2 className="w-6 h-6 text-amber-400" />,
    Compass: <Compass className="w-6 h-6 text-amber-400" />,
    Palette: <Palette className="w-6 h-6 text-amber-400" />,
    UtensilsCrossed: <UtensilsCrossed className="w-6 h-6 text-amber-400" />,
    ShowerHead: <ShowerHead className="w-6 h-6 text-amber-400" />,
    Home: <Home className="w-6 h-6 text-amber-400" />,
  };

  return (
    <section className="py-16 bg-slate-950 text-white border-b border-slate-800" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <span>{isHi ? 'हमारी सेवाएं — सब एक ही छत के नीचे' : 'ALL SERVICES UNDER ONE ROOF'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-serif">
            {isHi ? 'BUILTEX GROUP की सम्पूर्ण निर्माण सेवाएं' : 'Complete Home Construction & Interior Solutions'}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            {isHi
              ? 'मजबूत निर्माण, आकर्षक डिजाइन और वास्तु अनुसार प्लानिंग से लेकर इंटीरियर, मॉड्यूलर किचन व बाथरूम तक—हर काम में सर्वश्रेष्ठ गुणवत्ता।'
              : 'From civil foundation & 3D Vastu designs to modern modular kitchens, luxury bath fittings, and ready-to-move homes.'}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-2xl overflow-hidden shadow-lg transition-all hover:-translate-y-1 flex flex-col"
            >
              {/* Card Image Header */}
              <div className="relative h-48 overflow-hidden bg-slate-800">
                <img
                  src={service.image}
                  alt={service.title[lang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                <div className="absolute top-3 left-3 p-2.5 rounded-xl bg-slate-950/90 border border-amber-500/30 backdrop-blur-md">
                  {iconMap[service.iconName] || <Building2 className="w-6 h-6 text-amber-400" />}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white font-serif group-hover:text-amber-400 transition-colors">
                    {service.title[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {service.description[lang]}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                  {service.highlights.map((hl, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-amber-300/90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{isHi ? hl.hi : hl.en}</span>
                    </div>
                  ))}
                </div>

                {/* Card Action */}
                <button
                  onClick={() => onOpenConsultation(service.title[lang])}
                  className="w-full mt-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 text-xs font-bold flex items-center justify-center gap-2 transition-all border border-slate-700"
                >
                  <span>{isHi ? 'जानकारी / कोटेशन लें' : 'Get Quote & Consultation'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
