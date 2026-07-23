import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles, MessageCircle, Phone, Calculator, Clock, Compass, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/content';
import { Language } from '../types';

interface FaqSectionProps {
  lang: Language;
  onOpenConsultation: (details?: string) => void;
}

interface FaqItem {
  id: string;
  category: 'cost' | 'timeline' | 'vastu' | 'materials';
  question: { hi: string; en: string };
  answer: { hi: string; en: string };
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang, onOpenConsultation }) => {
  const isHi = lang === 'hi';

  const [activeCategory, setActiveCategory] = useState<'all' | 'cost' | 'timeline' | 'vastu' | 'materials'>('all');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      category: 'cost',
      question: {
        hi: 'BUILTEX GROUP में घर निर्माण की शुरुआती दर क्या है और इसमें क्या-क्या शामिल है?',
        en: 'What is the starting house construction rate at BUILTEX GROUP and what is included?',
      },
      answer: {
        hi: 'हमारी शुरुआती निर्माण दर ₹1299 प्रति वर्गफुट (Basic Classic Package) है। इसमें नींव (Foundation) से लेकर सिविल स्ट्रक्चर, 2D/3D वास्तु हाउस प्लान, फर्स्ट-क्लास लाल ईंट/ACC ब्लॉक, TMT FE-550 स्टील, अल्ट्राटेक/एसीसी सीमेंट, टाइल्स फ्लोरिंग, प्लंबिंग और पेंटिंग वर्क—सब कुछ शामिल है। कोई अतिरिक्त या छुपा हुआ खर्च नहीं होता।',
        en: 'Our turnkey construction package starts at just ₹1299/sq.ft. It includes complete foundation to civil superstructure, 2D/3D Vastu floor plans, 1st class red bricks, FE-550 TMT steel, Ultratech/ACC cement, vitrified flooring, plumbing, sanitary, and painting with zero hidden fees.',
      },
    },
    {
      id: 'faq-2',
      category: 'timeline',
      question: {
        hi: 'एक 1200 से 2000 sq.ft का मकान बनाने में कितना समय लगता है?',
        en: 'How long does it take to construct a 1200 to 2000 sq.ft home?',
      },
      answer: {
        hi: 'ग्राउंड फ्लोर (G) या G+1 डुप्लेक्स मकान के निर्माण में सामान्यतः 5 से 7 महीने का समय लगता है। हम एग्रीमेंट में पजेशन की पक्की तिथि (Guaranteed Handover Date) लिखते हैं। यदि कार्य में हमारी वजह से कोई देरी होती है, तो दैनिक लेग पेनल्टी (Daily Penalty) क्लॉज लागू होता है।',
        en: 'On average, a Ground floor or G+1 duplex home takes 5 to 7 months for complete construction. We specify a guaranteed completion date in our legal agreement, backed by a daily penalty clause for any unexcused delay.',
      },
    },
    {
      id: 'faq-3',
      category: 'vastu',
      question: {
        hi: 'क्या आपका हाउस प्लान 100% वास्तु शास्त्र के अनुसार होता है?',
        en: 'Are your house floor plans 100% Vastu Shastra compliant?',
      },
      answer: {
        hi: 'हाँ, बिल्कुल! BUILTEX GROUP का प्रत्येक 2D एवं 3D हाउस प्लान अनुभवी वास्तु विशेषज्ञों द्वारा तैयार किया जाता है। मुख्य द्वार (Main Entrance), रसोईघर (Agni Cone), पूजा घर (Ishanya Cone), और मास्टर बेडरूम (Nairitya Cone) को सटीक दिशाओं में नियोजित किया जाता है ताकि घर में सुख, शांति और प्राकृतिक प्रकाश बना रहे।',
        en: 'Yes, absolutely. Every 2D architectural blueprint and 3D elevation is mapped according to scientific Vastu rules. We meticulously optimize the Main Gate, Kitchen (South-East), Pooja Room (North-East), and Master Bedroom (South-West) for maximum positive energy and ventilation.',
      },
    },
    {
      id: 'faq-4',
      category: 'materials',
      question: {
        hi: 'निर्माण के दौरान प्रयुक्त होने वाली सामग्रियों (Materials) की गुणवत्ता कैसे जाँची जाती है?',
        en: 'How is material quality verified during the construction process?',
      },
      answer: {
        hi: 'हम केवल ब्रांडेड व टेस्टेड मटेरियल ही इस्तेमाल करते हैं (जैसे Ultratech/ACC Cement, Kamdhenu/Tata Tiscon Steel, Kajaria/Somany Tiles, Jaquar/Cera Bath Fittings)। साइट पर मटेरियल पहुँचते ही आपकी उपस्थिति में क्वालिटी टेस्ट और बिल चेक कराया जाता है। इसके अलावा हमारे समर्पित साइट इंजीनियर रोज फोटो/वीडियो अपडेट भेजते हैं।',
        en: 'We strictly source factory-certified materials including Ultratech/ACC cement, Tata Tiscon/Kamdhenu steel, Kajaria tiles, and Jaquar bath fittings. Each delivery batch is inspected on site in your presence, and our site engineers provide daily photo and video progress reports.',
      },
    },
    {
      id: 'faq-5',
      category: 'cost',
      question: {
        hi: 'भुगतान (Payment) का तरीका क्या है? क्या एक साथ सारा पैसा देना होता है?',
        en: 'What is the payment structure? Do I need to pay everything upfront?',
      },
      answer: {
        hi: 'जी नहीं, भुगतान बिल्कुल भी एक साथ नहीं लिया जाता। पेमेंट 6 से 8 आसान चरणबद्ध किश्तों (Stage-wise Payment Schedule) में लिया जाता है—जैसे नीव (Foundation) पूरा होने पर, लेंटर/स्लैब ढलाई (RCC Slab Cast) पर, प्लस्तर पर, और फाइनल फिनिशिंग पर। आप काम से पूरी तरह संतुष्ट होने के बाद ही अगली किश्त देते हैं।',
        en: 'No upfront bulk payment is required. Payments are divided into 6 to 8 milestone-based installments linked strictly to construction progress (e.g., Plinth completion, RCC Slab casting, Brickwork, Plaster, and Final Finishing). You only pay the next installment after approving the current stage.',
      },
    },
    {
      id: 'faq-6',
      category: 'materials',
      question: {
        hi: 'क्या घर निर्माण पर कोई वारंटी दी जाती है?',
        en: 'Is there any warranty provided on structural construction?',
      },
      answer: {
        hi: 'हाँ! BUILTEX GROUP अपने हर निर्माण पर 10 साल की स्ट्रक्चरल वारंटी (10-Year Structural Guarantee) देता है। इसके अतिरिक्त, प्लंबिंग और सीपेज (Waterproofing) के लिए 10 साल की लीकेज-फ्री गारंटी और 1 साल का फ्री मेंटेनेंस सपोर्ट भी शामिल है।',
        en: 'Yes! We provide a 10-Year Structural Guarantee on the building frame. In addition, you get a 10-year anti-leakage plumbing and waterproofing warranty along with 1-year complimentary post-handover maintenance.',
      },
    },
    {
      id: 'faq-7',
      category: 'cost',
      question: {
        hi: 'क्या BUILTEX GROUP बैंक होम लोन (Home Loan) पास कराने में मदद करता है?',
        en: 'Does BUILTEX GROUP assist in securing bank Home Loans?',
      },
      answer: {
        hi: 'हाँ, हमारी लीगल व फाइनेंस टीम प्रमुख राष्ट्रीयकृत बैंकों (SBI, HDFC, ICICI, Bank of Baroda, PNB) से 80% से 90% तक होम लोन स्वीकृत कराने में सम्पूर्ण सहयोग प्रदान करती है। इसमें एस्टीमेट मैप, 3D प्लान और बैंक वैल्यूएशन रिपोर्ट की सुविधा भी शामिल है।',
        en: 'Yes, our dedicated home loan cell assists you in obtaining 80% to 90% home loan sanctions from leading nationalized and private banks (SBI, HDFC, ICICI, BOB, PNB) with full documentation, estimation maps, and technical valuation reports.',
      },
    },
  ];

  const filteredFaqs = faqs.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="py-16 bg-slate-900 text-white border-b border-slate-800" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{isHi ? 'अक्सर पूछे जाने वाले सवाल (FAQ)' : 'FREQUENTLY ASKED QUESTIONS'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-serif">
            {isHi ? 'घर निर्माण से जुड़े सभी सवालों के जवाब' : 'Got Questions? We Have Complete Transparent Answers'}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            {isHi
              ? 'लागत, समय-सीमा, वास्तु नियम और सामग्री की गुणवत्ता से सम्बंधित आपके मन की हर शंका का समाधान।'
              : 'Clear, transparent information regarding rates, timelines, Vastu rules, and bank loans.'}
          </p>

          {/* Category Filter Pills */}
          <div className="flex justify-center flex-wrap gap-2 pt-3">
            {[
              { id: 'all', label: isHi ? 'सभी प्रश्न (All)' : 'All FAQs', icon: Sparkles },
              { id: 'cost', label: isHi ? 'लागत व लोन (Costs & Loan)' : 'Costs & Budget', icon: Calculator },
              { id: 'timeline', label: isHi ? 'समय-सीमा (Timelines)' : 'Timelines', icon: Clock },
              { id: 'vastu', label: isHi ? 'वास्तु शास्त्र (Vastu)' : 'Vastu Rules', icon: Compass },
              { id: 'materials', label: isHi ? 'मटेरियल व वारंटी' : 'Quality & Warranty', icon: ShieldCheck },
            ].map((tab) => {
              const IconComp = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as any)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeCategory === tab.id
                      ? 'bg-amber-500 text-slate-950 shadow-md ring-1 ring-amber-300'
                      : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Accordion Container */}
        <div className="max-w-4xl mx-auto space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-950 border-amber-500/60 shadow-xl ring-1 ring-amber-500/20'
                    : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-100 hover:text-amber-400 focus:outline-none transition-colors"
                  aria-expanded={isOpen}
                  id={`faq-toggle-${faq.id}`}
                >
                  <span className="font-serif leading-snug">{faq.question[lang]}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-amber-500 text-slate-950 border-amber-400' : 'text-amber-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-slate-900 text-xs sm:text-sm text-slate-300 leading-relaxed space-y-3 animate-in fade-in slide-in-from-top-1">
                    <p>{faq.answer[lang]}</p>
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => onOpenConsultation(`FAQ Question Inquiry: ${faq.question[lang]}`)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500 hover:text-slate-950 text-xs font-bold transition-all"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>{isHi ? 'इस सवाल पर एक्सपर्ट से बात करें' : 'Discuss this with Expert'}</span>
                      </button>

                      <a
                        href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(
                          isHi
                            ? `नमस्ते BUILTEX GROUP! मुझे निम्नलिखित प्रश्न के बारे में जानकारी चाहिए: ${faq.question.hi}`
                            : `Hello BUILTEX GROUP! I have a question regarding: ${faq.question.en}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-bold hover:underline"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-emerald-400/20" />
                        <span>{isHi ? 'व्हाट्सएप पर पूछें' : 'Ask on WhatsApp'}</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Callout */}
        <div className="mt-12 text-center bg-slate-950 p-6 rounded-2xl border border-slate-800 max-w-3xl mx-auto space-y-3">
          <h3 className="text-lg font-bold text-white font-serif">
            {isHi ? 'क्या आपका कोई और सवाल है?' : 'Still Have Questions or Need Custom Advice?'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            {isHi
              ? 'हमारे सीनियर साइट इंजीनियर और आर्किटेक्ट से मुफ़्त सलाह लें। हम आपकी सभी शंकाओं का समाधान करने के लिए सदैव तत्पर हैं।'
              : 'Get free one-on-one expert guidance from our lead architects and civil construction team.'}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 pt-1">
            <button
              onClick={() => onOpenConsultation('General Construction FAQ Consultation')}
              className="py-2.5 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm transition-all shadow-md active:scale-95"
            >
              {isHi ? 'निःशुल्क परामर्श बुक करें' : 'Book Free Consultation'}
            </button>
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="py-2.5 px-5 rounded-xl bg-slate-900 border border-slate-700 text-amber-300 font-bold text-xs sm:text-sm transition-all"
            >
              {COMPANY_DETAILS.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
