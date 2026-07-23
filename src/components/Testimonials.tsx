import React from 'react';
import { Star, Quote, ThumbsUp, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';
import { Language } from '../types';

interface TestimonialsProps {
  lang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ lang }) => {
  const isHi = lang === 'hi';

  return (
    <section className="py-16 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>{isHi ? 'हमारे संतुष्ट मकान मालिक' : 'CUSTOMER TESTIMONIALS'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-serif">
            {isHi ? 'जानिए ग्राहकों ने BUILTEX GROUP के बारे में क्या कहा' : 'What Homeowners Say About BUILTEX GROUP'}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            {isHi
              ? 'मजबूत निर्माण, समय पर डिलीवरी और पारदर्शी बजट की वजह से 150+ से अधिक परिवारों का भरोसा।'
              : 'Over 150+ happy families trust BUILTEX GROUP for on-time delivery, structural excellence, and Vastu precision.'}
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-slate-950 border border-slate-800 p-6 rounded-2xl shadow-xl flex flex-col justify-between space-y-4 hover:border-amber-500/30 transition-all"
            >
              <div className="space-y-3">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Comment Text */}
                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                  "{t.comment[lang]}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white font-serif">{t.name}</h4>
                  <p className="text-[11px] text-amber-400 font-medium">{t.location}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{t.projectType[lang]}</p>
                </div>
                <div className="p-2 rounded-full bg-amber-500/10 text-amber-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
