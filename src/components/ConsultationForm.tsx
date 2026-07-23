import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Send, CheckCircle2, MapPin, Mail, Clock, Building2, Sparkles, X, Check, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS, PACKAGES } from '../data/content';
import { Language, QuoteFormData } from '../types';

interface ConsultationFormProps {
  lang: Language;
  prefilledRequirement?: string;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  lang,
  prefilledRequirement,
}) => {
  const isHi = lang === 'hi';

  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    serviceType: 'custom_construction',
    plotAreaSqFt: 1200,
    floors: 'G + 1 Floor',
    location: '',
    budgetRange: '20-30 Lakhs',
    selectedPackageId: 'essential',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (prefilledRequirement) {
      setFormData((prev) => ({
        ...prev,
        message: `Requirement: ${prefilledRequirement}`,
      }));
    }
  }, [prefilledRequirement]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone || !formData.fullName) {
      alert(isHi ? 'कृपया अपना नाम और फोन नंबर दर्ज करें।' : 'Please enter your name and phone number.');
      return;
    }

    setSubmitted(true);
    setShowToast(true);

    // Auto trigger WhatsApp redirect
    const pkg = PACKAGES.find((p) => p.id === formData.selectedPackageId);
    const whatsappText = isHi
      ? `नमस्ते BUILTEX GROUP! मुझे परामर्श और साइट विजिट चाहिए:\n\n- नाम: ${formData.fullName}\n- मोबाइल: ${formData.phone}\n- सेवा: ${formData.serviceType}\n- प्लॉट एरिया: ${formData.plotAreaSqFt} sq.ft (${formData.floors})\n- स्थान: ${formData.location || 'उत्तर प्रदेश'}\n- पैकेज इच्छा: ${pkg?.name.hi || '₹1299/sq.ft'}\n- संदेश: ${formData.message || 'निःशुल्क साइट विजिट सेट करें'}`
      : `Hello BUILTEX GROUP! I would like a consultation & site visit:\n\n- Name: ${formData.fullName}\n- Phone: ${formData.phone}\n- Service: ${formData.serviceType}\n- Plot Area: ${formData.plotAreaSqFt} sq.ft (${formData.floors})\n- Location: ${formData.location || 'UP'}\n- Package: ${pkg?.name.en || '₹1299/sq.ft'}\n- Message: ${formData.message || 'Book site visit'}`;

    setTimeout(() => {
      window.open(`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(whatsappText)}`, '_blank');
    }, 1500);
  };

  return (
    <section className="relative py-16 bg-slate-950 text-white border-b border-amber-500/20" id="contact">
      {/* Toast Notification Popup */}
      {showToast && (
        <div className="fixed top-20 right-4 sm:right-6 z-50 max-w-sm w-full bg-slate-900/95 backdrop-blur-md border-2 border-emerald-500 rounded-2xl shadow-2xl p-4 text-white animate-in slide-in-from-top-4 duration-300">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center shrink-0 shadow-lg animate-bounce">
                <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-xs font-black text-emerald-400 uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{isHi ? 'फॉर्म सफलतापूर्वक सबमिट हुआ!' : 'Request Sent Successfully!'}</span>
                </div>
                <p className="text-sm font-bold text-white mt-0.5">
                  {isHi ? 'BUILTEX टीम को आपका अनुरोध प्राप्त हुआ' : 'Consultation Request Received'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowToast(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-300 mt-2.5 bg-slate-950/80 p-2 rounded-xl border border-slate-800">
            {isHi
              ? 'आपको कुछ ही पलों में व्हाट्सएप पर स्वचालित रिडायरेक्ट किया जा रहा है...'
              : 'Redirecting you to WhatsApp for instant engineer connect...'}
          </p>

          {/* Progress Bar Animation */}
          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-500 to-amber-400 h-full w-full origin-left animate-[pulse_1.5s_ease-in-out_infinite]" />
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Contact Info & Direct Phone/WhatsApp (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5" />
                <span>{isHi ? 'संपर्क करें — BUILTEX GROUP' : 'CONTACT BUILTEX GROUP'}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white font-serif">
                {isHi ? 'अपने सपनों का घर बनाने की दिशा में पहला कदम बढ़ाएं' : 'Take the First Step Towards Your Dream Home'}
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                {isHi
                  ? 'अनुभवी इंजीनियर्स, बेहतरीन मटेरियल और समय पर काम पूरा करने की प्रतिबद्धता के साथ। आज ही निःशुल्क साइट विजिट और 2D/3D हाउस मैप के लिए संपर्क करें।'
                  : 'Get expert guidance, transparent material pricing, and 3D architectural renders. Contact us today!'}
              </p>
            </div>

            {/* Direct Big Call & WhatsApp Cards */}
            <div className="space-y-3 pt-2">
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 shadow-xl font-bold transition-all hover:scale-[1.02] active:scale-95"
                id="contact-call-direct-card"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-extrabold text-slate-900 tracking-wider">
                      {isHi ? 'डायरेक्ट कॉल करें' : 'CALL DIRECTLY'}
                    </div>
                    <div className="text-xl font-black tracking-tight font-serif">
                      {COMPANY_DETAILS.phoneDisplay}
                    </div>
                  </div>
                </div>
                <span className="bg-slate-950 text-amber-300 text-xs px-3 py-1.5 rounded-lg font-black">
                  {isHi ? 'अभी कॉल करें' : 'Call Now'}
                </span>
              </a>

              <a
                href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(
                  isHi
                    ? 'नमस्ते BUILTEX GROUP! मुझे घर निर्माण/रेडी टू मूव घर के बारे में बात करनी है।'
                    : 'Hello BUILTEX GROUP! I want to discuss my house construction project.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-emerald-600 text-white shadow-xl font-bold transition-all hover:scale-[1.02] active:scale-95"
                id="contact-whatsapp-direct-card"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6 fill-emerald-400/20" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold text-emerald-100 tracking-wider">
                      {isHi ? 'व्हाट्सएप चैट' : 'WHATSAPP CHAT'}
                    </div>
                    <div className="text-lg font-bold">
                      {COMPANY_DETAILS.phoneDisplay}
                    </div>
                  </div>
                </div>
                <span className="bg-emerald-950 text-emerald-300 text-xs px-3 py-1.5 rounded-lg font-extrabold">
                  {isHi ? 'चैट करें' : 'Chat'}
                </span>
              </a>
            </div>

            {/* Office Details */}
            <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">{isHi ? 'कॉर्पोरेट कार्यालय:' : 'Corporate Office:'}</span>
                  <span>{COMPANY_DETAILS.address[lang]}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-slate-800">
                <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <span className="font-bold text-white block">{isHi ? 'कार्य समय:' : 'Working Hours:'}</span>
                  <span>{COMPANY_DETAILS.workingHours[lang]}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Lead Capture Form (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-900 border-2 border-amber-500/30 p-6 sm:p-8 rounded-2xl shadow-2xl">
            {submitted ? (
              <div className="text-center py-10 space-y-5 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 flex items-center justify-center mx-auto shadow-xl ring-4 ring-emerald-500/30 animate-bounce">
                  <CheckCircle2 className="w-12 h-12 stroke-[2.5]" />
                </div>

                <div className="space-y-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{isHi ? 'अनुरोध दर्ज हो गया है' : 'Request Confirmed'}</span>
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-serif">
                    {isHi ? 'धन्यवाद! आपकी रिक्वेस्ट सफलतापूर्वक दर्ज हो गई है।' : 'Thank You! Request Submitted Successfully.'}
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    {isHi
                      ? `BUILTEX GROUP की एक्सपर्ट टीम जल्द ही आपसे +91-9005190777 से संपर्क करेगी।`
                      : `Our senior engineer will review your requirements and reach out via +91-9005190777.`}
                  </p>
                </div>

                {/* Submitted Summary Details Box */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-left text-xs space-y-2 max-w-md mx-auto text-slate-300">
                  <div className="flex justify-between border-b border-slate-900 pb-1.5">
                    <span className="font-bold text-slate-400">{isHi ? 'नाम:' : 'Name:'}</span>
                    <span className="font-bold text-white">{formData.fullName}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-900 pb-1.5">
                    <span className="font-bold text-slate-400">{isHi ? 'फोन:' : 'Phone:'}</span>
                    <span className="font-bold text-amber-400">{formData.phone}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-900 pb-1.5">
                    <span className="font-bold text-slate-400">{isHi ? 'प्लाट एरिया:' : 'Plot Area:'}</span>
                    <span className="font-bold text-white">{formData.plotAreaSqFt} sq.ft</span>
                  </div>
                  {formData.location && (
                    <div className="flex justify-between">
                      <span className="font-bold text-slate-400">{isHi ? 'स्थान:' : 'Location:'}</span>
                      <span className="font-bold text-white">{formData.location}</span>
                    </div>
                  )}
                </div>

                <div className="pt-2 flex flex-wrap justify-center items-center gap-3">
                  <a
                    href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 fill-slate-950" />
                    <span>{isHi ? 'व्हाट्सएप चैट खोलें' : 'Open WhatsApp Chat'}</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setShowToast(false);
                    }}
                    className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition-all"
                  >
                    {isHi ? 'नया फॉर्म भरें' : 'Submit Another Request'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-800 pb-3">
                  <h3 className="text-xl font-bold text-white font-serif">
                    {isHi ? 'निःशुल्क परामर्श और साइट विजिट के लिए फॉर्म भरें' : 'Book Free Site Visit & Consultation'}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {isHi ? 'कंस्ट्रक्शन वर्क सिर्फ ₹1299/sq.ft से शुरू। 100% वास्तु अनुसार।' : 'Construction starting @ ₹1299/sq.ft.'}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      {isHi ? 'आपका पूरा नाम *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isHi ? 'उदा. राजेश शर्मा' : 'e.g. Rajesh Sharma'}
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      {isHi ? 'मोबाइल नंबर (WhatsApp) *' : 'Mobile Number (WhatsApp) *'}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={isHi ? 'उदा. 9876543210' : 'e.g. 9876543210'}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      {isHi ? 'आवश्यकता का प्रकार' : 'Requirement Type'}
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value as any })}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none"
                    >
                      <option value="custom_construction">
                        {isHi ? 'नया घर निर्माण (₹1299/sq.ft)' : 'New Home Construction'}
                      </option>
                      <option value="ready_to_move">
                        {isHi ? 'रेडी टू मूव घर (Ready Home)' : 'Ready to Move Villa'}
                      </option>
                      <option value="interior_design">
                        {isHi ? 'इंटीरियर व मॉड्यूलर किचन' : 'Interiors & Modular Kitchen'}
                      </option>
                      <option value="vastu_consultation">
                        {isHi ? 'वास्तु अनुसार 2D/3D नक्शा' : 'Vastu Architecture Plan'}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      {isHi ? 'प्लाट साइज (वर्गफुट में)' : 'Plot Area (sq. ft.)'}
                    </label>
                    <input
                      type="number"
                      placeholder="1200"
                      value={formData.plotAreaSqFt}
                      onChange={(e) => setFormData({ ...formData, plotAreaSqFt: Number(e.target.value) })}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      {isHi ? 'प्लाट का स्थान / शहर' : 'Plot Location / City'}
                    </label>
                    <input
                      type="text"
                      placeholder={isHi ? 'उदा. गोमती नगर, लखनऊ' : 'e.g. Lucknow / Varanasi'}
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      {isHi ? 'पसंद का पैकेज' : 'Preferred Construction Package'}
                    </label>
                    <select
                      value={formData.selectedPackageId}
                      onChange={(e) => setFormData({ ...formData, selectedPackageId: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none"
                    >
                      {PACKAGES.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name[lang]} (@ ₹{p.pricePerSqFt}/sq.ft)
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    {isHi ? 'अतिरिक्त संदेश या प्रश्न' : 'Additional Remarks / Questions'}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={isHi ? 'उदा. मुझे 3 बेडरूम का ईस्ट-फेसिंग हाउस प्लान चाहिए...' : 'Details about your house plan or timeline...'}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-500/20 active:scale-95"
                  id="submit-consultation-form-btn"
                >
                  <Send className="w-4 h-4" />
                  <span>{isHi ? 'फॉर्म सबमिट करें और व्हाट्सएप पर कोटेशन पाएं' : 'Submit & Get WhatsApp Quote'}</span>
                </button>

                <p className="text-[11px] text-slate-400 text-center">
                  {isHi ? 'आपकी जानकारी 100% सुरक्षित है। कोई स्पैम नहीं।' : 'Your contact details are 100% confidential.'}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

