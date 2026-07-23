import React, { useState } from 'react';
import { Calculator, CheckCircle2, MessageCircle, Phone, Sparkles, PieChart, Clock, Layers, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS, MATERIAL_RATIO_PIE, PACKAGES } from '../data/content';
import { Language } from '../types';

interface CostCalculatorProps {
  lang: Language;
  onOpenConsultation: (details?: string) => void;
}

export const CostCalculator: React.FC<CostCalculatorProps> = ({
  lang,
  onOpenConsultation,
}) => {
  const isHi = lang === 'hi';

  const [plotArea, setPlotArea] = useState<number>(1200);
  const [numFloors, setNumFloors] = useState<number>(2); // G+1 = 2 floors
  const [selectedPackageId, setSelectedPackageId] = useState<string>('essential');

  const selectedPkg = PACKAGES.find((p) => p.id === selectedPackageId) || PACKAGES[0];

  // Total built up area = plotArea * numFloors
  const builtUpArea = plotArea * numFloors;
  const totalCost = builtUpArea * selectedPkg.pricePerSqFt;
  const totalCostLakhs = (totalCost / 100000).toFixed(2);

  // Duration estimate in months
  const monthsEstimate = Math.ceil(4 + (builtUpArea / 800));

  const floorLabels = [
    { value: 1, hi: 'ग्राउंड फ्लोर (G)', en: 'Ground Floor Only (G)' },
    { value: 2, hi: 'G + 1 मंजिल (2 Floors)', en: 'G + 1 Floor (2 Floors)' },
    { value: 3, hi: 'G + 2 मंजिल (3 Floors)', en: 'G + 2 Floors (3 Floors)' },
    { value: 4, hi: 'G + 3 मंजिल (4 Floors)', en: 'G + 3 Floors (4 Floors)' },
  ];

  const handleWhatsAppSend = () => {
    const text = isHi
      ? `नमस्ते BUILTEX GROUP! मैंने आपकी वेबसाइट पर घर निर्माण लागत कैलकुलेट की है:\n\n- प्लॉट एरिया: ${plotArea} sq.ft\n- कुल मंजिल: ${numFloors} (Builtup: ${builtUpArea} sq.ft)\n- चुना गया पैकेज: ${selectedPkg.name.hi} (@ ₹${selectedPkg.pricePerSqFt}/sq.ft)\n- अनुमानित कुल बजट: ₹${totalCost.toLocaleString('en-IN')} (लगभग ₹${totalCostLakhs} लाख)\n\nकृपया विस्तृत मटेरियल लिस्ट और साइट विजिट की जानकारी भेजें।`
      : `Hello BUILTEX GROUP! I estimated my house construction cost on your website:\n\n- Plot Area: ${plotArea} sq.ft\n- Floors: ${numFloors} (Total Builtup: ${builtUpArea} sq.ft)\n- Selected Package: ${selectedPkg.name.en} (@ ₹${selectedPkg.pricePerSqFt}/sq.ft)\n- Estimated Investment: ₹${totalCost.toLocaleString('en-IN')} (~₹${totalCostLakhs} Lakhs)\n\nPlease share the detailed material list and schedule a site visit.`;

    window.open(`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="py-12 sm:py-16 bg-slate-900 text-white border-b border-slate-800" id="calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>{isHi ? 'तत्काल निर्माण लागत कैलकुलेटर' : 'Instant Construction Cost Estimator'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-serif">
            {isHi ? 'अपने सपनों के घर की लागत का अनुमान लगाएं' : 'Estimate Your Home Construction Investment'}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            {isHi
              ? 'प्लाट का आकार और पैकेज चुनें, और पाएं पारदर्शी बजट अनुमान। कोई छुपा हुआ खर्च नहीं!'
              : 'Choose plot dimensions, floors & package tier to calculate transparent, turn-key construction costs instantly.'}
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-800 p-5 sm:p-7 rounded-2xl shadow-xl space-y-6">
            {/* Step 1: Plot Area Slider & Input */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-slate-200 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 text-xs font-black flex items-center justify-center">1</span>
                  <span>{isHi ? 'प्लॉट एरिया (वर्गफुट में):' : 'Plot Area (in sq. ft.):'}</span>
                </label>
                <div className="flex items-center gap-1 bg-slate-900 border border-amber-500/40 rounded-lg px-3 py-1 text-amber-400 font-bold text-base">
                  <input
                    type="number"
                    min="400"
                    max="10000"
                    step="50"
                    value={plotArea}
                    onChange={(e) => setPlotArea(Math.max(100, Number(e.target.value)))}
                    className="w-20 bg-transparent text-right text-amber-400 font-black focus:outline-none"
                  />
                  <span className="text-xs text-slate-400 font-normal">sq.ft</span>
                </div>
              </div>

              <input
                type="range"
                min="500"
                max="5000"
                step="50"
                value={plotArea}
                onChange={(e) => setPlotArea(Number(e.target.value))}
                className="w-full accent-amber-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
              />

              {/* Common Quick Sizes Preset */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="text-xs text-slate-400 font-semibold">{isHi ? 'लोकप्रिय आकार:' : 'Presets:'}</span>
                {[800, 1000, 1200, 1500, 2000, 2500].map((size) => (
                  <button
                    key={size}
                    onClick={() => setPlotArea(size)}
                    className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                      plotArea === size
                        ? 'bg-amber-500 text-slate-950 font-bold'
                        : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-amber-500/40'
                    }`}
                  >
                    {size} sq.ft
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Number of Floors */}
            <div className="space-y-3 pt-2 border-t border-slate-800">
              <label className="text-sm font-bold text-slate-200 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 text-xs font-black flex items-center justify-center">2</span>
                <span>{isHi ? 'मंजिलों की संख्या (Floors):' : 'Number of Floors:'}</span>
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {floorLabels.map((item) => (
                  <button
                    key={item.value}
                    onClick={() => setNumFloors(item.value)}
                    className={`p-2.5 rounded-xl border text-xs font-bold text-center transition-all ${
                      numFloors === item.value
                        ? 'bg-amber-500/15 border-amber-500 text-amber-300 shadow-md'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-sm font-extrabold">{isHi ? item.hi : item.en}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Select Package Tier */}
            <div className="space-y-3 pt-2 border-t border-slate-800">
              <label className="text-sm font-bold text-slate-200 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 text-xs font-black flex items-center justify-center">3</span>
                <span>{isHi ? 'निर्माण पैकेज चुनें:' : 'Select Construction Package:'}</span>
              </label>

              <div className="grid sm:grid-cols-3 gap-3">
                {PACKAGES.map((pkg) => {
                  const isSelected = selectedPackageId === pkg.id;
                  return (
                    <div
                      key={pkg.id}
                      onClick={() => setSelectedPackageId(pkg.id)}
                      className={`relative cursor-pointer p-3.5 rounded-xl border transition-all ${
                        isSelected
                          ? 'bg-slate-900 border-amber-500 ring-1 ring-amber-500/50 shadow-lg'
                          : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {pkg.popular && (
                        <span className="absolute -top-2.5 right-2 bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded shadow">
                          {isHi ? 'सर्वाधिक लोकप्रिय' : 'Most Popular'}
                        </span>
                      )}
                      <div className="text-xs font-bold text-slate-300">{pkg.name[lang]}</div>
                      <div className="text-lg font-black text-amber-400 mt-1">
                        ₹{pkg.pricePerSqFt}
                        <span className="text-[11px] font-normal text-slate-400"> /sq.ft</span>
                      </div>
                      <p className="text-[11px] text-slate-400 line-clamp-2 mt-1">
                        {pkg.description[lang]}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Material Ratio Breakdown Header */}
            <div className="pt-2 border-t border-slate-800">
              <p className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                {isHi ? 'बजट वितरण अनुमान (Estimated Material Allocation):' : 'Estimated Expense Breakdown:'}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]">
                {MATERIAL_RATIO_PIE.map((mat, i) => (
                  <div key={i} className="flex items-center gap-1.5 bg-slate-900 p-1.5 rounded border border-slate-800">
                    <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: mat.color }} />
                    <span className="text-slate-300 truncate">{mat.name.split('(')[0]}</span>
                    <span className="text-amber-400 font-bold ml-auto">{mat.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Results Summary Box (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-amber-500/40 p-6 rounded-2xl shadow-2xl space-y-6 sticky top-24">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  {isHi ? 'अनुमानित कुल लागत' : 'ESTIMATED TOTAL INVESTMENT'}
                </span>
                <div className="text-3xl sm:text-4xl font-black text-white font-serif mt-1">
                  ₹{totalCost.toLocaleString('en-IN')}
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400">{isHi ? 'लाख में (In Lakhs):' : 'In Lakhs:'}</span>
                <div className="text-2xl font-extrabold text-amber-400">₹{totalCostLakhs} {isHi ? 'लाख' : 'Lakhs'}</div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                <div className="text-slate-400">{isHi ? 'कुल निर्मित क्षेत्रफल:' : 'Total Built-up Area:'}</div>
                <div className="text-base font-extrabold text-white mt-0.5">{builtUpArea.toLocaleString()} sq.ft</div>
                <div className="text-[10px] text-slate-400">({plotArea} x {numFloors} {isHi ? 'मंजिल' : 'floors'})</div>
              </div>

              <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                <div className="text-slate-400">{isHi ? 'अनुमानित निर्माण अवधि:' : 'Est. Construction Time:'}</div>
                <div className="text-base font-extrabold text-amber-400 mt-0.5">{monthsEstimate} {isHi ? 'माह' : 'Months'}</div>
                <div className="text-[10px] text-slate-400">{isHi ? 'ऑन-टाइम गारंटी' : 'On-time Delivery'}</div>
              </div>
            </div>

            {/* Key Features included in selected package */}
            <div className="space-y-2">
              <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                {isHi ? 'पैकेज में क्या-क्या शामिल है?' : 'Highlights included:'}
              </p>
              <ul className="space-y-1.5 text-xs text-slate-200">
                {selectedPkg.features.slice(0, 5).map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{isHi ? feat.hi : feat.en}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Primary Action Buttons */}
            <div className="space-y-2.5 pt-2">
              <button
                onClick={handleWhatsAppSend}
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25 transition-all active:scale-95"
                id="calculator-whatsapp-send-btn"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>{isHi ? 'व्हाट्सएप पर विस्तृत कोटेशन पाएं' : 'Get Full Estimate on WhatsApp'}</span>
              </button>

              <button
                onClick={() =>
                  onOpenConsultation(
                    `Plot: ${plotArea} sqft, Floors: ${numFloors}, Package: ${selectedPkg.name[lang]}, Estimate: ₹${totalCostLakhs} Lakhs`
                  )
                }
                className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 transition-all active:scale-95"
                id="calculator-book-callback-btn"
              >
                <Phone className="w-4 h-4" />
                <span>{isHi ? 'साइट विजिट व मुफ्त सलाह के लिए कॉल करें' : 'Book Free Site Visit & Consultation'}</span>
              </button>
            </div>

            <div className="text-center pt-1 border-t border-slate-800">
              <p className="text-[11px] text-slate-400 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>{isHi ? '100% पक्का बिल, क्वालिटी टेस्टेड मटेरियल और कोई हिडन चार्ज नहीं' : '100% Official Bill, Certified Quality & Zero Hidden Charges'}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
