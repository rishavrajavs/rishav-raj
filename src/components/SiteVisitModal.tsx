import React, { useState } from 'react';
import { X, MapPin, BedDouble, Bath, Home, Compass, Phone, MessageCircle, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/content';
import { Language, ReadyToMoveHome } from '../types';

interface SiteVisitModalProps {
  home: ReadyToMoveHome | null;
  lang: Language;
  onClose: () => void;
  onOpenConsultation: (details?: string) => void;
}

export const SiteVisitModal: React.FC<SiteVisitModalProps> = ({
  home,
  lang,
  onClose,
  onOpenConsultation,
}) => {
  if (!home) return null;

  const isHi = lang === 'hi';
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = home.gallery && home.gallery.length > 0 ? home.gallery : [home.image];

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col animate-in zoom-in-95">
        {/* Header Bar */}
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-extrabold uppercase bg-amber-500 text-slate-950 px-2 py-0.5 rounded">
              {home.status}
            </span>
            <h3 className="text-lg font-bold text-white font-serif mt-1">{home.title[lang]}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Gallery Slider */}
          <div className="relative h-64 sm:h-80 bg-slate-950 rounded-xl overflow-hidden border border-slate-800 group">
            <img
              src={images[currentImageIndex]}
              alt={home.title[lang]}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 text-white hover:bg-amber-500 hover:text-slate-950 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 text-white hover:bg-amber-500 hover:text-slate-950 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            <div className="absolute bottom-2 right-2 bg-slate-950/90 text-amber-400 text-xs px-2.5 py-1 rounded-md border border-slate-800">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>

          {/* Details & Specs */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="text-2xl font-black text-amber-400 font-serif">
                ₹{home.price} {isHi ? 'लाख' : 'Lakhs'}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{home.location[lang]}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-300">
                <Compass className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{home.facing[lang]}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs bg-slate-950 p-3 rounded-xl border border-slate-800">
              <div className="flex items-center gap-1.5 text-slate-300">
                <BedDouble className="w-4 h-4 text-amber-400" />
                <span>{home.bedrooms} Bedrooms</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <Bath className="w-4 h-4 text-amber-400" />
                <span>{home.bathrooms} Baths</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <Home className="w-4 h-4 text-amber-400" />
                <span>{home.builtUpAreaSqFt} sq.ft Builtup</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <Home className="w-4 h-4 text-amber-400" />
                <span>{home.plotAreaSqFt} sq.ft Plot</span>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              {isHi ? 'घर की विशेषताएं:' : 'Home Highlights:'}
            </h4>
            <div className="grid sm:grid-cols-2 gap-2 text-xs text-slate-200">
              {home.features.map((f, i) => (
                <div key={i} className="flex items-center gap-1.5 bg-slate-950 p-2 rounded border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{isHi ? f.hi : f.en}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="grid sm:grid-cols-2 gap-3 pt-2">
            <a
              href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(
                isHi
                  ? `नमस्ते BUILTEX GROUP! मुझे रेडी टू मूव घर (${home.title.hi}, ₹${home.price} लाख) की साइट विजिट बुक करनी है।`
                  : `Hello BUILTEX GROUP! I want to schedule a site visit for ${home.title.en} (₹${home.price} Lakhs).`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>{isHi ? 'व्हाट्सएप पर साइट विजिट बुक करें' : 'Schedule Visit on WhatsApp'}</span>
            </a>

            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow"
            >
              <Phone className="w-4 h-4" />
              <span>{isHi ? 'डायरेक्ट कॉल: +91-9005190777' : 'Call +91-9005190777'}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
