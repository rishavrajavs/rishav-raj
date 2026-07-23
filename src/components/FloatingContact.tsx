import React, { useState } from 'react';
import { Phone, MessageCircle, Calculator, Sparkles, ChevronUp, X, Send } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/content';
import { Language } from '../types';

interface FloatingContactProps {
  lang: Language;
  onOpenCalculator: () => void;
}

export const FloatingContact: React.FC<FloatingContactProps> = ({ lang, onOpenCalculator }) => {
  const isHi = lang === 'hi';
  const [showOptions, setShowOptions] = useState(false);

  const defaultWhatsappMessage = encodeURIComponent(
    isHi
      ? 'नमस्ते BUILTEX GROUP! मुझे घर निर्माण/इंटीरियर प्रोजेक्ट के संबंध में तत्काल कंसलटेंट से बात करनी है।'
      : 'Hello BUILTEX GROUP! I would like to initiate an immediate construction inquiry with your expert.'
  );

  const quickInquiries = [
    {
      label: isHi ? '₹1299/sq.ft पैकेज कोटेशन' : '₹1299/sq.ft Package Quote',
      text: isHi
        ? 'नमस्ते BUILTEX GROUP! मुझे ₹1299/sq.ft टर्नकी पैकेज की विस्तृत जानकारी चाहिए।'
        : 'Hello BUILTEX GROUP! Please share full details for the ₹1299/sq.ft turnkey package.',
    },
    {
      label: isHi ? 'वास्तु हाउस प्लान एडवाइस' : 'Vastu Floor Plan Advice',
      text: isHi
        ? 'नमस्ते! मुझे मेरे प्लाट साइज़ के अनुसार 100% वास्तु हाउस प्लान के बारे में जानकारी चाहिए।'
        : 'Hello! I need expert guidance for a Vastu-compliant house floor plan for my plot.',
    },
    {
      label: isHi ? 'बैंक होम लोन सहायता' : 'Bank Home Loan Support',
      text: isHi
        ? 'नमस्ते! मुझे 80%-90% बैंक होम लोन अप्रूवल प्रक्रिया के बारे में जानकारी चाहिए।'
        : 'Hello! I want information regarding 80%-90% home loan sanction support.',
    },
  ];

  return (
    <>
      {/* Floating Action Buttons Container (Desktop & Tablet) */}
      <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        {/* Quick Inquiry Options Popup */}
        {showOptions && (
          <div className="bg-slate-900 border-2 border-emerald-500/80 rounded-2xl p-4 shadow-2xl max-w-xs w-72 text-white animate-in slide-in-from-bottom-3 duration-200 space-y-2.5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <div className="flex items-center gap-1.5 text-xs font-black text-emerald-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isHi ? 'तत्काल व्हाट्सएप पूछताछ:' : 'Quick WhatsApp Inquiry:'}</span>
              </div>
              <button
                onClick={() => setShowOptions(false)}
                className="text-slate-400 hover:text-white p-0.5 rounded"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-[11px] text-slate-300">
              {isHi
                ? 'विषय चुनें और सीधे BUILTEX एक्सपर्ट से चैट शुरू करें:'
                : 'Select a topic to initiate an immediate WhatsApp chat:'}
            </p>

            <div className="space-y-1.5">
              {quickInquiries.map((inq, idx) => (
                <a
                  key={idx}
                  href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(inq.text)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowOptions(false)}
                  className="w-full text-left p-2 rounded-xl bg-slate-950 hover:bg-emerald-950/80 border border-slate-800 hover:border-emerald-500/50 text-xs font-bold text-slate-200 hover:text-emerald-300 transition-all flex items-center justify-between group"
                >
                  <span>{inq.label}</span>
                  <Send className="w-3 h-3 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Cost Calculator Floating Bubble */}
        <button
          onClick={onOpenCalculator}
          className="group flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold text-xs shadow-xl transition-all transform hover:scale-105 active:scale-95 border border-amber-500/40 backdrop-blur-md"
          title="Cost Calculator"
          id="floating-calculator-btn"
        >
          <Calculator className="w-4 h-4 stroke-[2.5]" />
          <span className="font-extrabold text-xs">
            {isHi ? 'लागत कैलकुलेटर' : 'Cost Calculator'}
          </span>
        </button>

        {/* Direct Floating WhatsApp Chat Button */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setShowOptions(!showOptions)}
            className="p-2.5 rounded-full bg-slate-900 border border-emerald-500/40 text-emerald-400 hover:bg-slate-800 transition-all shadow-lg"
            title="Toggle Quick Inquiries"
          >
            <ChevronUp className={`w-4 h-4 transition-transform ${showOptions ? 'rotate-180' : ''}`} />
          </button>

          <a
            href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${defaultWhatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-600/40 transition-all transform hover:scale-105 active:scale-95 border-2 border-emerald-400/30"
            title={isHi ? 'व्हाट्सएप पर तुरंत चैट शुरू करें' : 'Start Immediate WhatsApp Chat'}
            id="floating-whatsapp-btn"
          >
            <div className="relative flex items-center justify-center">
              <MessageCircle className="w-5.5 h-5.5 fill-white/20" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 rounded-full animate-ping" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-black tracking-wide leading-none">
                {isHi ? 'व्हाट्सएप डायरेक्ट चैट' : 'Direct WhatsApp Chat'}
              </span>
              <span className="text-[10px] text-emerald-100/90 font-medium leading-tight mt-0.5 hidden sm:block">
                {isHi ? 'इंजीनियर ऑनलाइन है • त्वरित जवाब' : 'Consultant Online • Instant Reply'}
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* Sticky Bottom Bar for Mobile Screen ONLY */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950/98 border-t border-amber-500/30 p-2 backdrop-blur-md grid grid-cols-2 gap-2 shadow-2xl">
        <a
          href={`tel:${COMPANY_DETAILS.phone}`}
          className="py-2.5 px-3 rounded-xl bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 shadow active:scale-95 transition-transform"
          id="sticky-mobile-call"
        >
          <Phone className="w-4 h-4" />
          <span>{isHi ? 'कॉल करें: 9005190777' : 'Call 9005190777'}</span>
        </a>

        <a
          href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${defaultWhatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs flex items-center justify-center gap-1.5 shadow active:scale-95 transition-transform"
          id="sticky-mobile-whatsapp"
        >
          <MessageCircle className="w-4 h-4 fill-white/20" />
          <span>{isHi ? 'व्हाट्सएप चैट' : 'WhatsApp Chat'}</span>
        </a>
      </div>
    </>
  );
};

