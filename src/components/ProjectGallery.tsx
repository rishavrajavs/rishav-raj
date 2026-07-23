import React, { useState } from 'react';
import { Camera, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { HERO_IMAGE, READY_HOUSE_IMAGE, INTERIOR_KITCHEN_IMAGE } from '../data/content';
import { Language } from '../types';

interface ProjectGalleryProps {
  lang: Language;
  onOpenConsultation: () => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ lang, onOpenConsultation }) => {
  const isHi = lang === 'hi';
  const [activeFilter, setActiveFilter] = useState<'all' | 'exterior' | 'interior' | 'kitchen'>('all');

  const galleryItems = [
    {
      id: 1,
      type: 'exterior',
      title: isHi ? '3 BHK रॉयल डुप्लेक्स विला' : '3 BHK Royal Duplex Villa',
      location: isHi ? 'गोमती नगर, लखनऊ' : 'Gomti Nagar, Lucknow',
      area: '2100 sq.ft',
      image: READY_HOUSE_IMAGE,
      tag: isHi ? 'कंस्ट्रक्शन पैकेज ₹1299' : 'Construction @ ₹1299/sq.ft',
    },
    {
      id: 2,
      type: 'interior',
      title: isHi ? 'मॉड्यूलर किचन & एक्रिलिक फिनिश' : 'Modern Acrylic Modular Kitchen',
      location: isHi ? 'सुल्तानपुर रोड, लखनऊ' : 'Sultanpur Road, Lucknow',
      area: '180 sq.ft Kitchen',
      image: INTERIOR_KITCHEN_IMAGE,
      tag: isHi ? 'इंटीरियर वर्क' : 'Premium Interior Work',
    },
    {
      id: 3,
      type: 'exterior',
      title: isHi ? '4 BHK लक्जरी पैलेस विला' : '4 BHK Luxury Palace Villa',
      location: isHi ? 'शिवपुर, वाराणसी' : 'Shivpur, Varanasi',
      area: '3200 sq.ft',
      image: HERO_IMAGE,
      tag: isHi ? 'रेडी टू मूव' : 'Ready To Move',
    },
    {
      id: 4,
      type: 'kitchen',
      title: isHi ? 'क्वार्ट्ज काउंटरटॉप & सॉफ्ट-क्लोज ड्रॉअर्स' : 'Quartz Top & German Hardware Kitchen',
      location: isHi ? 'रायबरेली रोड, लखनऊ' : 'Raebareli Road, Lucknow',
      area: 'Modular Setup',
      image: INTERIOR_KITCHEN_IMAGE,
      tag: isHi ? 'मॉड्यूलर किचन' : 'Modular Kitchen',
    },
    {
      id: 5,
      type: 'exterior',
      title: isHi ? '2 BHK इंडिपेंडेंट मॉडर्न हाउस' : '2 BHK Independent Modern House',
      location: isHi ? 'PGI कैम्पस के पास, लखनऊ' : 'Near PGI, Lucknow',
      area: '1450 sq.ft',
      image: READY_HOUSE_IMAGE,
      tag: isHi ? 'समय पर डिलीवरी' : 'On-Time Delivery',
    },
    {
      id: 6,
      type: 'interior',
      title: isHi ? 'लक्जरी लिविंग रूम फॉल्स सीलिंग & LED' : 'Luxury Living Room False Ceiling',
      location: isHi ? 'वाराणसी' : 'Varanasi',
      area: 'Living Room',
      image: HERO_IMAGE,
      tag: isHi ? '100% वास्तु सम्मत' : '100% Vastu',
    },
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.type === activeFilter;
  });

  return (
    <section className="py-16 bg-slate-950 text-white border-b border-slate-800" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5" />
            <span>{isHi ? 'हमारे पूरे हुए प्रोजेक्ट्स' : 'OUR COMPLETED PROJECTS'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-serif">
            {isHi ? 'BUILTEX GROUP की बेहतरीन कारीगरी की झलक' : 'Showcase of Our Construction & Interior Craftsmanship'}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            {isHi
              ? 'लखनऊ और आसपास के शहरों में हमारे द्वारा निर्मित वास्तविक घर, इंटीरियर और मॉड्यूलर किचन कार्य।'
              : 'Real photos of custom homes, luxury villas, and modular kitchens built by BUILTEX GROUP.'}
          </p>

          {/* Filter Tabs */}
          <div className="flex justify-center flex-wrap gap-2 pt-2">
            {[
              { id: 'all', label: isHi ? 'सभी वर्क (All Work)' : 'All Projects' },
              { id: 'exterior', label: isHi ? 'घर निर्माण (Civil Exterior)' : 'Exterior Construction' },
              { id: 'interior', label: isHi ? 'इंटीरियर & सीलिंग (Interiors)' : 'Interiors' },
              { id: 'kitchen', label: isHi ? 'मॉड्यूलर किचन (Kitchen)' : 'Modular Kitchen' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeFilter === tab.id
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/40 transition-all shadow-xl"
            >
              <div className="h-64 overflow-hidden bg-slate-800">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Tag Pill */}
              <div className="absolute top-3 right-3 bg-amber-500 text-slate-950 font-black text-[10px] uppercase px-2.5 py-1 rounded-full shadow">
                {item.tag}
              </div>

              {/* Overlay Content */}
              <div className="p-4 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent">
                <h3 className="text-base font-bold text-white font-serif group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-slate-300 mt-1">
                  <span className="flex items-center gap-1 text-slate-400">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    {item.location}
                  </span>
                  <span className="font-bold text-amber-300">{item.area}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Footer */}
        <div className="text-center pt-10">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm transition-all shadow-lg active:scale-95"
          >
            <span>{isHi ? 'अपने प्लाट के लिए ऐसा घर बनवाएं — निःशुल्क सलाह' : 'Build a Similar House on Your Plot — Request Consultation'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
