import React from 'react';
import { Building2, Phone, MessageCircle, Mail, MapPin, Compass, ArrowUp } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/content';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const isHi = lang === 'hi';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-amber-500/40 p-0.5 flex items-center justify-center overflow-hidden shadow-md shrink-0">
                <img
                  src={COMPANY_DETAILS.logo}
                  alt="BUILTEX GROUP Logo"
                  className="w-full h-full object-cover rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xl font-black text-white font-serif tracking-tight">
                BUILTEX <span className="text-amber-500">GROUP</span>
              </span>
            </div>
            <p className="text-amber-400 font-bold text-xs">
              {COMPANY_DETAILS.tagline[lang]}
            </p>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              {isHi
                ? 'मजबूत निर्माण, आकर्षक डिजाइन और वास्तु के अनुसार निर्माण से लेकर इंटीरियर वर्क, मॉड्यूलर किचन और प्रीमियम बाथरूम फिटिंग तक—सब एक ही छत के नीचे।'
                : 'Complete turnkey residential home construction starting @ ₹1299/sq.ft with 100% Vastu compliance & 10-year structural warranty.'}
            </p>
          </div>

          {/* Core Services Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif">
              {isHi ? 'मुख्य सेवाएं' : 'OUR SERVICES'}
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#calculator" className="hover:text-amber-400 transition-colors">
                  {isHi ? 'घर निर्माण (₹1299/sq.ft)' : 'House Construction (@ ₹1299/sq.ft)'}
                </a>
              </li>
              <li>
                <a href="#vastu" className="hover:text-amber-400 transition-colors">
                  {isHi ? 'वास्तु अनुसार 2D/3D नक्शा' : 'Vastu Architecture & 3D Plans'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {isHi ? 'मॉड्यूलर किचन & इंटीरियर' : 'Modular Kitchen & Interior Work'}
                </a>
              </li>
              <li>
                <a href="#ready-homes" className="hover:text-amber-400 transition-colors">
                  {isHi ? 'रेडी टू मूव घर' : 'Ready to Move Modern Villas'}
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-amber-400 transition-colors">
                  {isHi ? 'सामग्री और पैकेज दरें' : 'Packages & Material Specs'}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif">
              {isHi ? 'संपर्क जानकारी' : 'CONTACT INFO'}
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2 text-white font-bold text-sm">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${COMPANY_DETAILS.phone}`} className="hover:underline">
                  {COMPANY_DETAILS.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 fill-emerald-400/20" />
                <a
                  href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent('Hello BUILTEX GROUP!')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-emerald-400 font-semibold"
                >
                  WhatsApp: +91-9005190777
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{COMPANY_DETAILS.address[lang]}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{COMPANY_DETAILS.email}</span>
              </li>
            </ul>
          </div>

          {/* Guarantee Badges */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif">
              {isHi ? 'गुणवत्ता प्रतिबद्धता' : 'OUR COMMITMENT'}
            </h4>
            <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 space-y-2">
              <div className="text-amber-400 font-bold text-xs flex items-center gap-1.5">
                <Compass className="w-4 h-4" />
                <span>{isHi ? '100% वास्तु सम्मत नक्शा' : '100% Vastu Architecture'}</span>
              </div>
              <div className="text-amber-400 font-bold text-xs flex items-center gap-1.5">
                <Building2 className="w-4 h-4" />
                <span>{isHi ? '10 साल की स्ट्रक्चरल वारंटी' : '10-Year Structural Guarantee'}</span>
              </div>
              <p className="text-[10px] text-slate-400">
                {isHi ? 'समय पर काम पूरा करने की गारंटी।' : 'Guaranteed timeline with penalized delay policy.'}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <p>© {new Date().getFullYear()} BUILTEX GROUP. {isHi ? 'सर्वाधिकार सुरक्षित।' : 'All Rights Reserved.'}</p>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-amber-400 hover:underline font-bold"
            >
              <span>{isHi ? 'ऊपर जाएं' : 'Back to Top'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
