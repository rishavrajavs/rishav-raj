import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calculator, ShieldCheck, Sparkles, ArrowRight, Home, Compass, CheckCircle, ChevronLeft, ChevronRight, Pause, Play, Images } from 'lucide-react';
import { COMPANY_DETAILS, HERO_IMAGE, READY_HOUSE_IMAGE, INTERIOR_KITCHEN_IMAGE, COMPANY_LOGO } from '../data/content';
import { Language } from '../types';

interface HeroSectionProps {
  lang: Language;
  onOpenCalculator: () => void;
  onOpenConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onOpenCalculator,
  onOpenConsultation,
}) => {
  const isHi = lang === 'hi';

  // Hero Slides List
  const heroSlides = [
    {
      id: 1,
      image: HERO_IMAGE,
      title: isHi ? '3 BHK / 4 BHK लक्जरी मॉडर्न विला' : '3 BHK & 4 BHK Luxury Modern Villa',
      subtitle: isHi ? '₹1299/sq.ft में वास्तु अनुसार टर्नकी निर्माण' : 'Vastu-Compliant Turnkey Construction @ ₹1299/sq.ft',
      badge: isHi ? 'लक्जरी हाउसिंग' : 'Luxury Housing',
    },
    {
      id: 2,
      image: READY_HOUSE_IMAGE,
      title: isHi ? 'रेडी टू मूव इंडिपेंडेंट मकान' : 'Turnkey Ready To Move Independent Homes',
      subtitle: isHi ? 'बैंक लोन स्वीकृत व तुरंत पजेशन उपलब्ध' : 'Instant Possession & Bank Home Loan Approved',
      badge: isHi ? 'रेडी टू मूव' : 'Ready To Move',
    },
    {
      id: 3,
      image: INTERIOR_KITCHEN_IMAGE,
      title: isHi ? 'मॉड्यूलर किचन व लक्जरी इंटीरियर डिजाइन' : 'German Modular Kitchens & Luxury Interiors',
      subtitle: isHi ? 'इटैलियन मार्बल फिनिश व क्वार्ट्ज काउंटरटॉप' : 'Italian Marble Finish & Quartz Countertops',
      badge: isHi ? 'इंटीरियर वर्क' : 'Luxury Interiors',
    },
    {
      id: 4,
      image: COMPANY_LOGO,
      title: isHi ? 'बिल्टेक्स ग्रुप — Built To Success' : 'BUILTEX GROUP — Built To Success',
      subtitle: isHi ? '10 साल की स्ट्रक्चरल वारंटी व ऑन-टाइम पजेशन' : '10-Year Guarantee & Guaranteed On-Time Delivery',
      badge: isHi ? 'भरोसेमंद नाम' : 'Trusted Brand',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto slide timer
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying, heroSlides.length]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const bulletPoints = [
    { hi: 'मजबूत निर्माण & 100% वास्तु अनुसार डिज़ाइन', en: 'Robust Construction & 100% Vastu Architecture' },
    { hi: 'इंटीरियर वर्क, मॉड्यूलर किचन & बाथरूम फिटिंग', en: 'Interiors, Modular Kitchen & Bath Fittings' },
    { hi: 'अनुभवी टीम & समय पर पजेशन की गारंटी', en: 'Experienced Team & Guaranteed On-Time Delivery' },
    { hi: 'खूबसूरत रेडी टू मूव घर भी उपलब्ध', en: 'Beautiful Ready-to-Move Homes Available' },
  ];

  return (
    <section className="relative bg-slate-950 text-white overflow-hidden pt-6 pb-12 lg:py-20 border-b border-amber-500/20" id="hero-section">
      {/* Background Sliding Images Carousel */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-40 sm:opacity-45 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center filter saturate-110 transform transition-transform duration-[6000ms] ease-out"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
        {/* Dark Gradient Overlay for optimal high contrast text reading */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Active Slide Banner Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 bg-slate-900/80 backdrop-blur-md border border-amber-500/30 rounded-xl px-3.5 py-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="font-bold text-amber-300 uppercase tracking-wider">{heroSlides[currentSlide].badge}:</span>
            <span className="text-slate-200 font-semibold">{heroSlides[currentSlide].title}</span>
          </div>

          {/* Slide Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1 rounded-md bg-slate-800 text-amber-400 hover:text-amber-300 hover:bg-slate-700 transition-colors"
              title={isPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={handlePrevSlide}
              className="p-1 rounded-md bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              title="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-[11px] font-bold text-slate-400 px-1">
              {currentSlide + 1} / {heroSlides.length}
            </span>
            <button
              onClick={handleNextSlide}
              className="p-1 rounded-md bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              title="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Hero Main Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Rate Badge Highlight */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold backdrop-blur-md animate-pulse">
              <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>
                {isHi
                  ? 'कंस्ट्रक्शन वर्क सिर्फ ₹1299 प्रति वर्गफुट से शुरू!'
                  : 'Construction starting @ just ₹1299 / sq. ft.!'}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.15] font-serif">
              {isHi ? (
                <>
                  क्या आप अपने <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">सपनों का घर</span> बनाना चाहते हैं?
                </>
              ) : (
                <>
                  Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">Dream Home</span> with Unmatched Quality
                </>
              )}
            </h1>

            {/* Tagline & Subtext */}
            <div className="space-y-2">
              <p className="text-xl sm:text-2xl font-bold text-amber-400 tracking-wide">
                {COMPANY_DETAILS.name} — {COMPANY_DETAILS.tagline[lang]}
              </p>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                {isHi
                  ? 'अब घर बनाने की हर जिम्मेदारी होगी BUILTEX GROUP की। मजबूत निर्माण, आकर्षक डिजाइन और वास्तु के अनुसार निर्माण से लेकर इंटीरियर वर्क, मॉड्यूलर किचन और प्रीमियम बाथरूम फिटिंग तक—हर काम होगा एक ही छत के नीचे।'
                  : 'From Vastu-compliant architecture & civil construction to luxury interiors, modular kitchens, and bath fittings—get complete turnkey home solutions under one single roof.'}
              </p>
            </div>

            {/* Bullet Highlights */}
            <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
              {bulletPoints.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 bg-slate-900/60 p-2 rounded-lg border border-slate-800">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{isHi ? item.hi : item.en}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-3">
              {/* Cost Calculator CTA */}
              <a
                href="#calculator"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenCalculator();
                }}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-sm sm:text-base shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:scale-95"
                id="hero-calculator-cta"
              >
                <Calculator className="w-5 h-5 stroke-[2.5]" />
                <span>{isHi ? 'लागत का अनुमान लगाएं (Calculator)' : 'Calculate Cost Estimate'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* WhatsApp Chat CTA */}
              <a
                href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(
                  isHi
                    ? 'नमस्ते BUILTEX GROUP! मुझे घर निर्माण/रेडी टू मूव घर के लिए परामर्श चाहिए।'
                    : 'Hello BUILTEX GROUP! I want a free consultation for home construction / ready homes.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base transition-all shadow-md shadow-emerald-600/20 active:scale-95"
                id="hero-whatsapp-cta"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>{isHi ? 'व्हाट्सएप पर संपर्क करें' : 'Chat on WhatsApp'}</span>
              </a>

              {/* Direct Call CTA */}
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 font-semibold text-sm border border-slate-700 transition-all"
                id="hero-call-cta"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{COMPANY_DETAILS.phoneDisplay}</span>
              </a>
            </div>

            {/* Slide Image Selector Thumbnails */}
            <div className="pt-2">
              <div className="flex items-center gap-1.5 text-xs text-amber-400 font-bold mb-2">
                <Images className="w-3.5 h-3.5" />
                <span>{isHi ? 'स्लाइडिंग इमेजेज पर क्लिक करें:' : 'Click to View Sliding Project Photos:'}</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {heroSlides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => {
                      setCurrentSlide(idx);
                      setIsPlaying(false);
                    }}
                    className={`relative rounded-lg overflow-hidden border-2 h-14 text-left transition-all group ${
                      currentSlide === idx
                        ? 'border-amber-400 ring-2 ring-amber-400/50 scale-105'
                        : 'border-slate-800 opacity-70 hover:opacity-100 hover:border-slate-600'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-transparent transition-colors" />
                    <span className="absolute bottom-0.5 left-0.5 right-0.5 bg-slate-950/80 text-[10px] font-bold text-white px-1 py-0.2 truncate rounded">
                      {slide.badge}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Card Feature Summary */}
          <div className="lg:col-span-5 pt-4 lg:pt-0">
            <div className="bg-slate-900/90 border border-amber-500/30 rounded-2xl p-5 sm:p-6 shadow-2xl backdrop-blur-md space-y-5 relative">
              <div className="absolute -top-3 -right-3 bg-amber-500 text-slate-950 font-black text-xs px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                {isHi ? '100% ऑन-टाइम गारंटी' : '100% On-Time Guarantee'}
              </div>

              <div className="border-b border-slate-800 pb-3">
                <p className="text-xs uppercase font-extrabold text-amber-400 tracking-wider">
                  {isHi ? 'BUILTEX विशेष पैकेज' : 'BUILTEX Special Offer'}
                </p>
                <h3 className="text-2xl font-black text-white font-serif mt-0.5">
                  {isHi ? 'टर्नकी घर निर्माण' : 'Turnkey Home Construction'}
                </h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-black text-amber-400">₹1,299</span>
                  <span className="text-slate-300 text-sm font-semibold">/ {isHi ? 'वर्गफुट (sq. ft.)' : 'sq. ft.'}</span>
                  <span className="text-xs text-slate-400 line-through ml-1">₹1,450</span>
                </div>
              </div>

              {/* What's Included under one roof */}
              <div className="space-y-2.5">
                <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  {isHi ? 'एक ही छत के नीचे सब कुछ:' : 'Everything Under One Roof:'}
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-200">
                  <div className="flex items-center gap-1.5 bg-slate-800/80 p-2 rounded border border-slate-700/60">
                    <Home className="w-3.5 h-3.5 text-amber-400" />
                    <span>{isHi ? 'मजबूत सिविल वर्क' : 'Civil Structure'}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-800/80 p-2 rounded border border-slate-700/60">
                    <Compass className="w-3.5 h-3.5 text-amber-400" />
                    <span>{isHi ? 'वास्तु 2D/3D प्लान' : 'Vastu Architecture'}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-800/80 p-2 rounded border border-slate-700/60">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>{isHi ? 'मॉड्यूलर किचन' : 'Modular Kitchen'}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-800/80 p-2 rounded border border-slate-700/60">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    <span>{isHi ? 'प्रीमियम बाथरूम' : 'Premium Plumbing'}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenConsultation}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-sm tracking-wide uppercase transition-all shadow-md active:scale-95"
                id="hero-book-site-visit-btn"
              >
                {isHi ? 'निःशुल्क साइट विजिट व प्लान बुक करें' : 'Book Free Site Visit & Plan'}
              </button>

              <div className="text-center">
                <p className="text-[11px] text-slate-400">
                  {isHi
                    ? 'संपर्क करें: +91-9005190777 | अनुभवी टीम व बेहतरीन गुणवत्ता'
                    : 'Contact: +91-9005190777 | Expert Team & Top Material Quality'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

