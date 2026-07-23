import React, { useState } from 'react';
import { Home, MapPin, BedDouble, Bath, Compass, CheckCircle, Eye, Phone, MessageCircle, Sparkles } from 'lucide-react';
import { READY_TO_MOVE_HOMES, COMPANY_DETAILS } from '../data/content';
import { Language, ReadyToMoveHome } from '../types';

interface ReadyToMoveHomesProps {
  lang: Language;
  onSelectHome: (home: ReadyToMoveHome) => void;
  onOpenConsultation: (homeTitle?: string) => void;
}

export const ReadyToMoveHomes: React.FC<ReadyToMoveHomesProps> = ({
  lang,
  onSelectHome,
  onOpenConsultation,
}) => {
  const isHi = lang === 'hi';
  const [filterBhk, setFilterBhk] = useState<number | 'all'>('all');

  const filteredHomes = READY_TO_MOVE_HOMES.filter((home) => {
    if (filterBhk === 'all') return true;
    return home.bedrooms === filterBhk;
  });

  return (
    <section className="py-16 bg-slate-950 text-white border-b border-slate-800" id="ready-homes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Home className="w-3.5 h-3.5" />
            <span>{isHi ? 'रेडी टू मूव घर' : 'READY TO MOVE HOMES'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-serif">
            {isHi ? 'खूबसूरत रेडी टू मूव घर — तुरंत शिफ्ट हों!' : 'Beautiful Ready-To-Move Houses & Luxury Villas'}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            {isHi
              ? 'बिना किसी इंतजार के सीधे अपने सपनों के घर में रहें। 100% वास्तु-सम्मत, होम लोन अप्रूव्ड और प्राइम लोकेशन में स्थित।'
              : 'Move into your ready-to-shift home immediately. Fully Vastu compliant, loan approved with clear registry.'}
          </p>

          {/* BHK Filter Pills */}
          <div className="flex justify-center gap-2 pt-2">
            {[
              { id: 'all', label: isHi ? 'सभी घर (All Homes)' : 'All Homes' },
              { id: 2, label: '2 BHK' },
              { id: 3, label: '3 BHK' },
              { id: 4, label: '4 BHK' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterBhk(tab.id as number | 'all')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  filterBhk === tab.id
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredHomes.map((home) => (
            <div
              key={home.id}
              className="group bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-2xl overflow-hidden shadow-xl transition-all hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Image Banner */}
              <div className="relative h-56 overflow-hidden bg-slate-800">
                <img
                  src={home.image}
                  alt={home.title[lang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/40" />

                {/* Status Badge */}
                <div className="absolute top-3 left-3 bg-amber-500 text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow">
                  {home.status}
                </div>

                {/* Price Badge */}
                <div className="absolute bottom-3 right-3 bg-slate-950/90 text-amber-400 font-serif font-black text-xl px-3.5 py-1 rounded-xl border border-amber-500/30 backdrop-blur-md">
                  ₹{home.price} {isHi ? 'लाख' : 'Lakhs'}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white font-serif group-hover:text-amber-400 transition-colors">
                    {home.title[lang]}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{home.location[lang]}</span>
                  </div>
                </div>

                {/* Key Property Specs */}
                <div className="grid grid-cols-2 gap-2 text-xs bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <BedDouble className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{home.bedrooms} {isHi ? 'बेडरूम' : 'Bedrooms'}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Bath className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{home.bathrooms} {isHi ? 'बाथरूम' : 'Baths'}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Home className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{home.builtUpAreaSqFt} sq.ft</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Compass className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="truncate">{home.facing[lang]}</span>
                  </div>
                </div>

                {/* Features Highlights */}
                <div className="space-y-1 text-xs text-slate-300">
                  {home.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="truncate">{isHi ? feat.hi : feat.en}</span>
                    </div>
                  ))}
                </div>

                {/* Card CTA Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
                  <button
                    onClick={() => onSelectHome(home)}
                    className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center justify-center gap-1.5 border border-slate-700 transition-all"
                  >
                    <Eye className="w-3.5 h-3.5 text-amber-400" />
                    <span>{isHi ? 'विवरण देखें' : 'View Photos'}</span>
                  </button>

                  <button
                    onClick={() => onOpenConsultation(`Ready Home Visit: ${home.title[lang]}`)}
                    className="py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black flex items-center justify-center gap-1.5 transition-all shadow"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{isHi ? 'साइट विजिट' : 'Book Visit'}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
