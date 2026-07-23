import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Globe, Building2, CheckCircle2, Palette, Type, Sparkles } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/content';
import { Language, AppTheme, AppFont } from '../types';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  theme: AppTheme;
  setTheme: (theme: AppTheme) => void;
  font: AppFont;
  setFont: (font: AppFont) => void;
  onOpenCalculator: () => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  setLang,
  theme,
  setTheme,
  font,
  setFont,
  onOpenCalculator,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [customizerOpen, setCustomizerOpen] = useState(false);

  const isHi = lang === 'hi';

  const themeOptions: { id: AppTheme; name: string; bg: string; border: string }[] = [
    { id: 'obsidian', name: isHi ? 'ऑब्सीडियन गोल्ड (Dark)' : 'Obsidian Gold (Dark)', bg: 'bg-slate-950', border: 'border-amber-500' },
    { id: 'royal-cream', name: isHi ? 'रॉयल क्रीम (Light)' : 'Royal Cream (Light)', bg: 'bg-amber-100', border: 'border-amber-600' },
    { id: 'sapphire', name: isHi ? 'मिडनाइट सैफायर' : 'Midnight Sapphire', bg: 'bg-blue-950', border: 'border-blue-400' },
    { id: 'emerald', name: isHi ? 'एमराल्ड पैलेस' : 'Emerald Palace', bg: 'bg-emerald-950', border: 'border-emerald-400' },
  ];

  const fontOptions: { id: AppFont; name: string; sample: string }[] = [
    { id: 'classic', name: isHi ? 'क्लासिक सेरिफ़ (Serif)' : 'Classic Serif', sample: 'Playfair Display' },
    { id: 'modern', name: isHi ? 'मॉडर्न जियोमेट्रिक' : 'Modern Geometric', sample: 'Outfit' },
    { id: 'regal', name: isHi ? 'रीगल हेरिटेज' : 'Regal Heritage', sample: 'Cinzel' },
  ];

  const navLinks = [
    { href: '#calculator', label: isHi ? 'लागत कैलकुलेटर' : 'Cost Calculator' },
    { href: '#packages', label: isHi ? 'पैकेज और दरें' : 'Packages & Rates' },
    { href: '#services', label: isHi ? 'हमारी सेवाएं' : 'Services' },
    { href: '#ready-homes', label: isHi ? 'रेडी टू मूव घर' : 'Ready Homes' },
    { href: '#vastu', label: isHi ? 'वास्तु निर्देश' : 'Vastu Guide' },
    { href: '#projects', label: isHi ? 'प्रोजेक्ट्स' : 'Projects' },
    { href: '#faq', label: isHi ? 'FAQ प्रश्न' : 'FAQ' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md text-white border-b border-amber-500/20 shadow-lg">
      {/* Top Banner Bar */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 px-4 py-1.5 text-xs sm:text-sm font-semibold">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="bg-slate-950 text-amber-400 px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider">
              {isHi ? 'ऑफर' : 'Offer'}
            </span>
            <span>
              {isHi
                ? 'घर निर्माण कार्य केवल ₹1299/वर्गफुट से शुरू! 100% वास्तु अनुसार।'
                : 'House Construction starting @ just ₹1299/sq.ft! 100% Vastu Compliant.'}
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs font-bold">
            {/* Quick Theme Toggle Button */}
            <button
              onClick={() => setCustomizerOpen(!customizerOpen)}
              className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-950/80 hover:bg-slate-950 text-amber-300 transition-all border border-amber-400/40"
              title="Change Theme & Font"
              id="theme-toggle-top-btn"
            >
              <Palette className="w-3.5 h-3.5 text-amber-400" />
              <span>{isHi ? 'थीम व फोंट चुनें' : 'Theme & Font'}</span>
            </button>

            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="hidden sm:flex items-center gap-1.5 hover:underline"
              id="header-top-call-link"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{COMPANY_DETAILS.phoneDisplay}</span>
            </a>
            <span className="hidden sm:inline">|</span>
            <a
              href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(
                isHi
                  ? 'नमस्ते BUILTEX GROUP! मुझे घर निर्माण/रेडी टू मूव घर के बारे में जानकारी चाहिए।'
                  : 'Hello BUILTEX GROUP! I would like details regarding home construction / ready-to-move homes.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 hover:underline"
              id="header-top-whatsapp-link"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-950 fill-emerald-950/20" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Theme & Font Customizer Dropdown Drawer */}
      {customizerOpen && (
        <div className="bg-slate-950 border-b border-amber-500/40 px-4 py-3 shadow-2xl animate-in slide-in-from-top-2">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Theme Selector */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5 uppercase tracking-wider">
                <Palette className="w-4 h-4" />
                <span>{isHi ? 'कलर थीम:' : 'Color Palette:'}</span>
              </span>
              <div className="flex flex-wrap gap-1.5">
                {themeOptions.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 border transition-all ${
                      theme === t.id
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md ring-1 ring-amber-300'
                        : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-500'
                    }`}
                  >
                    <span className={`w-2.5 h-2.5 rounded-full ${t.bg} ${t.border} border`} />
                    <span>{t.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Font Selector */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5 uppercase tracking-wider">
                <Type className="w-4 h-4" />
                <span>{isHi ? 'फोंट स्टाइल:' : 'Typography:'}</span>
              </span>
              <div className="flex flex-wrap gap-1.5">
                {fontOptions.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFont(f.id)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold border transition-all ${
                      font === f.id
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md ring-1 ring-amber-300'
                        : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-500'
                    }`}
                  >
                    <span>{f.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Close Customizer Button */}
            <button
              onClick={() => setCustomizerOpen(false)}
              className="p-1 rounded text-slate-400 hover:text-white"
              title="Close Panel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo Brand */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group" id="brand-logo-link">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-950 p-0.5 border border-amber-500/40 flex items-center justify-center overflow-hidden shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform shrink-0">
            <img
              src={COMPANY_DETAILS.logo}
              alt="BUILTEX GROUP Logo"
              className="w-full h-full object-cover rounded-lg"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-serif">
                BUILTEX
              </span>
              <span className="text-xs font-extrabold bg-amber-500 text-slate-950 px-1.5 py-0.5 rounded uppercase tracking-wider">
                GROUP
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-amber-200/90 font-medium tracking-wide">
              {COMPANY_DETAILS.tagline[lang]}
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-200">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-amber-400 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme & Font Quick Switcher Button */}
          <button
            onClick={() => setCustomizerOpen(!customizerOpen)}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-amber-500/40 bg-slate-800/80 text-amber-300 hover:bg-slate-800 text-xs font-bold transition-all shadow-sm"
            title="Theme & Typography Settings"
            id="header-theme-btn"
          >
            <Palette className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">{isHi ? 'थीम/फोंट' : 'Theme'}</span>
          </button>

          {/* Language Switcher */}
          <button
            onClick={() => setLang(isHi ? 'en' : 'hi')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-700 bg-slate-800/80 text-slate-200 hover:text-amber-400 hover:border-amber-500/50 text-xs font-semibold transition-all"
            title="Switch Language"
            id="language-switcher-btn"
          >
            <Globe className="w-3.5 h-3.5 text-amber-400" />
            <span>{isHi ? 'English' : 'हिन्दी'}</span>
          </button>

          {/* Direct Call Button */}
          <a
            href={`tel:${COMPANY_DETAILS.phone}`}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md shadow-amber-500/20 active:scale-95"
            id="header-call-button"
          >
            <Phone className="w-4 h-4" />
            <span>{COMPANY_DETAILS.phoneDisplay}</span>
          </a>

          {/* Quick Quote Button */}
          <button
            onClick={onOpenContact}
            className="hidden xl:flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-amber-400/40 hover:bg-amber-500/10 text-amber-300 font-semibold text-xs sm:text-sm transition-all"
            id="header-quote-button"
          >
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>{isHi ? 'परामर्श लें' : 'Get Callback'}</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-amber-400 hover:bg-slate-800 focus:outline-none"
            aria-label="Toggle Navigation Menu"
            id="mobile-menu-toggle-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-900/98 px-4 py-4 space-y-3 animate-in fade-in slide-in-from-top-2">
          <div className="grid grid-cols-2 gap-2 pb-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md bg-slate-800/60 text-slate-200 hover:text-amber-400 hover:bg-slate-800 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setCustomizerOpen(true);
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-slate-800 text-amber-300 font-bold text-xs border border-amber-500/40"
            >
              <Palette className="w-4 h-4 text-amber-400" />
              <span>{isHi ? 'थीम और फोंट स्टाइल बदलें' : 'Change Theme & Font'}</span>
            </button>

            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-sm shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>{isHi ? 'अभी कॉल करें' : 'Call Now'}: {COMPANY_DETAILS.phoneDisplay}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-amber-400/40 text-amber-300 font-semibold text-sm"
            >
              <span>{isHi ? 'निःशुल्क साइट विजिट बुक करें' : 'Book Free Site Visit'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
