import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TrustBar } from './components/TrustBar';
import { CostCalculator } from './components/CostCalculator';
import { ServicesGrid } from './components/ServicesGrid';
import { PackagesComparison } from './components/PackagesComparison';
import { ReadyToMoveHomes } from './components/ReadyToMoveHomes';
import { VastuGuide } from './components/VastuGuide';
import { ProjectGallery } from './components/ProjectGallery';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { SlidingShowcase } from './components/SlidingShowcase';
import { ConsultationForm } from './components/ConsultationForm';
import { FloatingContact } from './components/FloatingContact';
import { Footer } from './components/Footer';
import { SiteVisitModal } from './components/SiteVisitModal';

import { Language, ReadyToMoveHome, AppTheme, AppFont } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('hi');
  const [theme, setTheme] = useState<AppTheme>('obsidian');
  const [font, setFont] = useState<AppFont>('classic');
  const [selectedHome, setSelectedHome] = useState<ReadyToMoveHome | null>(null);
  const [consultationPrefill, setConsultationPrefill] = useState<string>('');

  const handleOpenConsultation = (prefillDetails?: string) => {
    if (prefillDetails) {
      setConsultationPrefill(prefillDetails);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCalculator = () => {
    const calcElem = document.getElementById('calculator');
    if (calcElem) {
      calcElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen theme-${theme} font-preset-${font} transition-colors duration-300 selection:bg-amber-500 selection:text-slate-950`}>
      {/* Header */}
      <Header
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
        font={font}
        setFont={setFont}
        onOpenCalculator={handleOpenCalculator}
        onOpenContact={() => handleOpenConsultation()}
      />

      {/* Main Content Sections */}
      <main>
        <HeroSection
          lang={lang}
          onOpenCalculator={handleOpenCalculator}
          onOpenConsultation={() => handleOpenConsultation('Free Site Visit Request')}
        />

        <TrustBar lang={lang} />

        <SlidingShowcase
          lang={lang}
          onOpenConsultation={(pref) => handleOpenConsultation(pref)}
        />

        <CostCalculator
          lang={lang}
          onOpenConsultation={(details) => handleOpenConsultation(details)}
        />

        <ServicesGrid
          lang={lang}
          onOpenConsultation={(serviceTitle) => handleOpenConsultation(serviceTitle)}
        />

        <PackagesComparison
          lang={lang}
          onOpenConsultation={(pkgName) => handleOpenConsultation(`Selected Package: ${pkgName}`)}
        />

        <ReadyToMoveHomes
          lang={lang}
          onSelectHome={(home) => setSelectedHome(home)}
          onOpenConsultation={(details) => handleOpenConsultation(details)}
        />

        <VastuGuide
          lang={lang}
          onOpenConsultation={() => handleOpenConsultation('Vastu Compliant 2D/3D Map Analysis')}
        />

        <ProjectGallery
          lang={lang}
          onOpenConsultation={() => handleOpenConsultation('Custom Construction Design Quote')}
        />

        <Testimonials lang={lang} />

        <FaqSection
          lang={lang}
          onOpenConsultation={(details) => handleOpenConsultation(details)}
        />

        <ConsultationForm
          lang={lang}
          prefilledRequirement={consultationPrefill}
        />
      </main>

      {/* Floating Action Bar */}
      <FloatingContact lang={lang} onOpenCalculator={handleOpenCalculator} />

      {/* Footer */}
      <Footer lang={lang} />

      {/* Property Details Modal */}
      <SiteVisitModal
        home={selectedHome}
        lang={lang}
        onClose={() => setSelectedHome(null)}
        onOpenConsultation={(details) => handleOpenConsultation(details)}
      />
    </div>
  );
}
