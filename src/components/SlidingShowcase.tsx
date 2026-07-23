import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, MapPin, Maximize2, Sparkles, CheckCircle, ShieldCheck, Home, Camera } from 'lucide-react';
import { HERO_IMAGE, READY_HOUSE_IMAGE, INTERIOR_KITCHEN_IMAGE, COMPANY_LOGO, COMPANY_DETAILS } from '../data/content';
import { Language } from '../types';

interface SlidingShowcaseProps {
  lang: Language;
  onOpenConsultation: (pref?: string) => void;
}

export const SlidingShowcase: React.FC<SlidingShowcaseProps> = ({ lang, onOpenConsultation }) => {
  const isHi = lang === 'hi';

  const slides = [
    {
      id: 'slide-1',
      title: { hi: '3 BHK & 4 BHK रॉयल डुप्लेक्स विला', en: '3 BHK & 4 BHK Royal Duplex Villa' },
      location: { hi: 'गोमती नगर / सुल्तानपुर रोड, लखनऊ', en: 'Gomti Nagar / Sultanpur Road, Lucknow' },
      category: { hi: 'टर्नकी विला कंस्ट्रक्शन', en: 'Turnkey Villa Construction' },
      area: '2,200 - 3,500 sq. ft.',
      rate: '₹1299 / sq. ft.',
      image: HERO_IMAGE,
      features: [
        { hi: '100% वास्तु प्लान', en: '100% Vastu Blueprint' },
        { hi: 'RCC फ्रेम स्ट्रक्चर (FE-550 Steel)', en: 'RCC Frame Structure (FE-550)' },
        { hi: '3D एलीवेशन डिजाइन', en: '3D Elevation Design' },
        { hi: '10 साल की वारंटी', en: '10-Year Warranty' },
      ],
    },
    {
      id: 'slide-2',
      title: { hi: 'रेडी टू मूव इंडिपेंडेंट लक्जरी हाउस', en: 'Ready To Move Independent Luxury House' },
      location: { hi: 'रायबरेली रोड / शिवपुर, वाराणसी', en: 'Raebareli Road / Shivpur, Varanasi' },
      category: { hi: 'रेडी टू मूव हाउस', en: 'Ready To Move Home' },
      area: '1,500 - 2,100 sq. ft.',
      rate: 'Instant Possession',
      image: READY_HOUSE_IMAGE,
      features: [
        { hi: 'बैंक होम लोन अप्रूव्ड (80%-90%)', en: 'Bank Loan Approved (80-90%)' },
        { hi: 'प्राइम लोकेशन', en: 'Prime Location' },
        { hi: 'सीवरेज व पानी कनेक्शन', en: 'Sewerage & Water Line' },
        { hi: 'गेटेड कैंपस सुरक्षा', en: 'Gated Campus Security' },
      ],
    },
    {
      id: 'slide-3',
      title: { hi: 'डिजाइनर मॉड्यूलर किचन व लक्जरी इंटीरियर्स', en: 'Designer Modular Kitchen & Luxury Interiors' },
      location: { hi: 'लखनऊ व आसपास के सभी प्रोजेक्ट्स', en: 'All Lucknow & Regional Projects' },
      category: { hi: 'इंटीरियर & फिनिशिंग', en: 'Interiors & Finishing' },
      area: 'Custom Layouts',
      rate: 'Included in Premium Package',
      image: INTERIOR_KITCHEN_IMAGE,
      features: [
        { hi: 'जर्मन सॉफ्ट-क्लोज हार्डवेयर', en: 'German Soft-Close Fittings' },
        { hi: 'क्वार्ट्ज & इटैलियन मार्बल', en: 'Quartz & Italian Tops' },
        { hi: 'एक्रिलिक फिनिश शटर', en: 'Acrylic Finish Shutters' },
        { hi: 'सीपेज प्रूफ वारंटी', en: '10-Yr Seepage Proofing' },
      ],
    },
    {
      id: 'slide-4',
      title: { hi: 'बिल्टेक्स कॉर्पोरेट प्रोजेक्ट्स व क्वालिटी एश्योरेंस', en: 'BUILTEX Corporate Quality & Engineering Excellence' },
      location: { hi: 'उत्तर प्रदेश (लखनऊ, वाराणसी, कानपुर, अयोध्या)', en: 'Uttar Pradesh (Lucknow, Varanasi, Ayodhya)' },
      category: { hi: 'कॉर्पोरेट स्टैंडर्ड', en: 'Corporate Standards' },
      area: 'Statewide Projects',
      rate: '100% Guaranteed Handover',
      image: COMPANY_LOGO,
      features: [
        { hi: 'फर्स्ट क्लास लाल ईंटें', en: '1st Class Red Bricks' },
        { hi: 'अल्ट्राटेक/एसीसी सीमेंट', en: 'Ultratech/ACC Cement' },
        { hi: 'डेली फोटो/वीडियो रिपोर्ट', en: 'Daily Progress Reports' },
        { hi: 'शून्य अतिरिक्त शुल्क', en: 'Zero Hidden Charges' },
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const currentSlide = slides[activeIndex];

  return (
    <section className="py-16 bg-slate-950 text-white border-b border-amber-500/20" id="sliding-showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Camera className="w-3.5 h-3.5" />
              <span>{isHi ? 'प्रोजेक्ट स्लाइडर (Sliding Image Gallery)' : 'SLIDING IMAGE SHOWCASE'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-serif">
              {isHi ? 'हमारे निर्माण कार्यों की स्लाइडिंग तस्वीरें' : 'Explore Construction & Interior Photo Slider'}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-amber-400 text-xs font-bold hover:bg-slate-800 transition-colors"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? (isHi ? 'स्लाइडर रोकें' : 'Pause Slider') : (isHi ? 'स्लाइडर चलाएं' : 'Auto Play')}</span>
            </button>

            <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length)}
                className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 transition-all active:scale-95"
                title="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs font-bold text-amber-400 px-2">
                {activeIndex + 1} / {slides.length}
              </span>
              <button
                onClick={() => setActiveIndex((prev) => (prev + 1) % slides.length)}
                className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 transition-all active:scale-95"
                title="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Big Slider Stage */}
        <div className="grid lg:grid-cols-12 gap-6 bg-slate-900 rounded-3xl border border-amber-500/30 overflow-hidden shadow-2xl">
          {/* Big Image Viewer Container */}
          <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[420px] group overflow-hidden">
            <img
              key={currentSlide.id}
              src={currentSlide.image}
              alt={currentSlide.title[lang]}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

            {/* Floating Tag */}
            <div className="absolute top-4 left-4 bg-amber-500 text-slate-950 font-black text-xs px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
              <span>{currentSlide.category[lang]}</span>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
              <div className="flex items-center gap-1.5 text-amber-300 text-xs font-bold">
                <MapPin className="w-3.5 h-3.5" />
                <span>{currentSlide.location[lang]}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-serif drop-shadow-md">
                {currentSlide.title[lang]}
              </h3>
            </div>
          </div>

          {/* Right Details Panel */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-slate-900">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">
                    {isHi ? 'निर्माण दर / स्थिति:' : 'Rate / Status:'}
                  </p>
                  <p className="text-2xl font-black text-amber-400">{currentSlide.rate}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">
                    {isHi ? 'क्षेत्रफल (Area):' : 'Covered Area:'}
                  </p>
                  <p className="text-sm font-bold text-slate-200">{currentSlide.area}</p>
                </div>
              </div>

              {/* Specification Checklists */}
              <div className="space-y-2">
                <p className="text-xs font-extrabold text-amber-300 uppercase tracking-wider">
                  {isHi ? 'प्रमुख विशेषताएं व मानक:' : 'Key Specifications:'}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {currentSlide.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 bg-slate-950/80 p-2.5 rounded-xl border border-slate-800 text-xs font-medium text-slate-200"
                    >
                      <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{feat[lang]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Slide Navigation Thumbnails Reel */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                {isHi ? 'अन्य तस्वीरें देखने के लिए चुनें:' : 'Select Photo Slide:'}
              </p>
              <div className="grid grid-cols-4 gap-2">
                {slides.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setActiveIndex(idx);
                      setIsPlaying(false);
                    }}
                    className={`relative rounded-xl overflow-hidden border-2 h-16 transition-all group ${
                      activeIndex === idx
                        ? 'border-amber-400 ring-2 ring-amber-400/50 scale-105'
                        : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-700'
                    }`}
                  >
                    <img
                      src={s.image}
                      alt={s.title[lang]}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-transparent" />
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => onOpenConsultation(`Sliding Gallery Inquiry: ${currentSlide.title[lang]}`)}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-xs sm:text-sm tracking-wide uppercase transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>{isHi ? 'इस प्रोजेक्ट जैसा घर बनाने का कोटेशन पाएं' : 'Get Quote for Similar Home'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
