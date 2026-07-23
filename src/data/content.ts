import { ConstructionPackage, ReadyToMoveHome, ServiceItem, Testimonial, VastuTip } from '../types';
import heroVillaImg from '../assets/images/hero_modern_villa_1784792154052.jpg';
import readyMoveHouseImg from '../assets/images/ready_move_house_1784792178520.jpg';
import interiorKitchenImg from '../assets/images/interior_kitchen_1784792189873.jpg';
import companyLogoImg from '../assets/images/company_logo.jpg';

export const COMPANY_LOGO = companyLogoImg;

export const COMPANY_DETAILS = {
  name: 'BUILTEX GROUP',
  logo: companyLogoImg,
  tagline: {
    hi: 'आपके सपनों का घर, हमारी जिम्मेदारी!',
    en: 'Your Dream Home, Our Responsibility!',
  },
  phone: '+91-9005190777',
  phoneDisplay: '+91 9005190777',
  whatsappNumber: '919005190777',
  startingRate: 1299,
  address: {
    hi: 'बिल्टेक्स कॉर्पोरेट टावर, मुख्य रोड, लखनऊ / वाराणसी (उत्तर प्रदेश)',
    en: 'Builtex Corporate Tower, Main Road, Lucknow / Varanasi (Uttar Pradesh)',
  },
  email: 'info@builtexgroup.in',
  workingHours: {
    hi: 'सोमवार - रविवार: प्रातः 9:00 बजे से सायं 8:00 बजे तक',
    en: 'Monday - Sunday: 9:00 AM to 8:00 PM',
  },
};

export const HERO_IMAGE = heroVillaImg;
export const READY_HOUSE_IMAGE = readyMoveHouseImg;
export const INTERIOR_KITCHEN_IMAGE = interiorKitchenImg;

export const PACKAGES: ConstructionPackage[] = [
  {
    id: 'essential',
    name: {
      hi: 'बेसिक क्लासिक (Basic Classic)',
      en: 'Basic Classic Package',
    },
    pricePerSqFt: 1299,
    popular: true,
    description: {
      hi: 'बजट-फ्रेंडली और मजबूत निर्माण। सिर्फ ₹1299 प्रति वर्गफुट में पाएं पूर्ण घर निर्माण guarantee.',
      en: 'Budget-friendly, high quality civil construction starting at just ₹1299/sq.ft.',
    },
    features: [
      { hi: 'वास्तु अनुसार 2D फ्लोर प्लान और 3D फ्रंट डिज़ाइन', en: 'Vastu Compliant 2D Floor Plan & 3D Front Elevation' },
      { hi: 'FE-550 ग्रेड TMT स्टील (Kamdhenu / Prime)', en: 'FE-550 Grade TMT Steel (Kamdhenu / Prime)' },
      { hi: 'प्रीमियम अल्ट्राटेक/एसीसी सीमेंट (RCC और चिनाई)', en: 'Ultratech/ACC Cement for RCC & Brickwork' },
      { hi: 'प्रथम श्रेणी लाल ईंट या ACC फ्लाई-ऐश ब्लॉक', en: '1st Class Red Clay Bricks / ACC Blocks' },
      { hi: 'विट्रिफाइड टाइल्स (2x2 फुट) - Kajaria/Somany', en: 'Vitrified Flooring Tiles (2x2 ft) - Kajaria/Somany' },
      { hi: 'ब्रांडेड सीपीवीसी और पीवीसी पाइप (Finolex/Supreme)', en: 'Branded CPVC & PVC Piping (Finolex/Supreme)' },
      { hi: 'प्रीमियम सेनेटरी और सीपी फिटिंग्स', en: 'Quality Sanitaryware & Bath Fittings' },
      { hi: 'एंटी-टर्माइट (दीमक रोधी) ट्रीटमेंट', en: 'Anti-Termite Chemical Soil Treatment' },
      { hi: '10 साल की स्ट्रक्चरल वारंटी', en: '10-Year Structural Warranty Guarantee' },
    ],
    materials: {
      cement: 'Ultratech / ACC / Birla Gold',
      steel: 'Kamdhenu / Prime TMT FE-550',
      bricks: 'First Class Red Clay Bricks',
      flooring: 'Vitrified Tiles (₹55/sq.ft range)',
      bathFittings: 'Cera / Hindware Standard Range',
      kitchen: 'Granite Countertop (Black Galaxy) + SS Sink',
      paint: 'Asian Paints Tractor Emulsion + Putty',
      wiring: 'Havells / Polycab Flame Retardant Wires',
    },
  },
  {
    id: 'premium',
    name: {
      hi: 'प्रीमियम रॉयल (Premium Royal)',
      en: 'Premium Royal Package',
    },
    pricePerSqFt: 1699,
    popular: false,
    description: {
      hi: 'आधुनिक इंटीरियर, मॉड्यूलर किचन और ब्रांडेड बाथरूम फिटिंग के साथ प्रीमियम घर।',
      en: 'Premium finishes with modular kitchen, branded bath fittings & false ceiling.',
    },
    features: [
      { hi: 'सम्पूर्ण वास्तु अनुसार 3D डिज़ाइन और इंटीरियर लेआउट', en: 'Complete Vastu 3D Architectural & Interior Design' },
      { hi: 'टाटा टिस्कॉन / जिंदल पैंथर FE-550D TMT स्टील', en: 'Tata Tiscon / Jindal Panther FE-550D TMT Steel' },
      { hi: 'प्रीमियम विट्रिफाइड डबल चार्ज्ड टाइल्स (4x2 फुट)', en: 'Double Charged Vitrified Tiles (4x2 ft)' },
      { hi: 'समीकृत मॉड्यूलर किचन (HGL एक्रिलिक और बास्केट्स)', en: 'Semi-Modular Kitchen with Soft-Close Baskets' },
      { hi: 'जैक्वार (Jaquar) / सेरा प्रीमियम बाथरूम फिटिंग्स', en: 'Jaquar / Cera Premium Bath Diverters & Fittings' },
      { hi: 'हॉल और मास्टर बेडरूम में LED फॉल्स सीलिंग', en: 'Designer False Ceiling with LED Profiles in Living Room' },
      { hi: 'सागौन लकड़ी (Teakwood) का मुख्य दरवाजा', en: 'Teakwood Main Entrance Door with Digital Lock' },
      { hi: 'एशियन पेंट रॉयले (Asian Paints Royale) इंटीरियर पेंट', en: 'Asian Paints Royale Luxury Interior Emulsion' },
    ],
    materials: {
      cement: 'Ultratech Super / Ambuja Kawach Waterproof',
      steel: 'Tata Tiscon / Jindal Panther FE-550D',
      bricks: 'Super Class Kiln Red Bricks',
      flooring: 'Double Charged Vitrified (₹85/sq.ft range)',
      bathFittings: 'Jaquar / Kohler Concealed Fittings',
      kitchen: 'Semi-Modular Marine Plywood + Quartz Counter',
      paint: 'Asian Paints Royale Emulsion + 2 Coat Putty',
      wiring: 'Finolex / Anchor Modular Switches & Wires',
    },
  },
  {
    id: 'luxury_palace',
    name: {
      hi: 'लक्जरी पैलेस (Luxury Palace)',
      en: 'Luxury Palace Package',
    },
    pricePerSqFt: 2199,
    popular: false,
    description: {
      hi: 'इटैलियन मार्बल, कम्पलीट मॉड्यूलर किचन, स्मार्ट होम ऑटोमेशन और 5-स्टार फिनिश।',
      en: 'Italian marble, fully loaded modular kitchen, smart home wiring & 5-star elegance.',
    },
    features: [
      { hi: 'वीआईपी आर्किटेक्ट द्वारा 3D एनिमेटेड वॉकथ्रू और वास्तु प्लान', en: '3D Video Walkthrough & Master Vastu Architecture' },
      { hi: 'इटैलियन मार्बल / लक्जरी जीवीटी टाइल्स फ्लोरिंग', en: 'Italian Marble Flooring / Luxury GVT Slabs' },
      { hi: 'फुल एक्रिलिक चिमनी और हॉब युक्त मॉड्यूलर किचन', en: 'Fully Loaded Modular Kitchen with Chimney & Hob' },
      { hi: 'कोहलर (Kohler) / ग्रोहे (Grohe) लक्जरी बाथरूम फिटिंग', en: 'Kohler / Grohe Luxury Bath Fixtures & Glass Enclosures' },
      { hi: 'स्मार्ट टच स्विच बोर्ड्स और CCTV सिक्यूरिटी वायरिंग', en: 'Smart Touch Switches & CCTV/Video Door Phone Wiring' },
      { hi: 'पूरे घर में सीलिंग जिप्सम वर्क और प्रोफाईल लाइट्स', en: 'Full House Gypsum False Ceiling & Cove Lighting' },
      { hi: 'टफेंड ग्लास रेलिंग और यूपीवीसी विंडोज', en: 'Toughened Glass Balcony Railings & UPVC Windows' },
      { hi: '15 साल की वारंटी + 1 साल का फ्री मेंटेनेंस', en: '15-Year Structural Warranty + 1 Year Free Maintenance' },
    ],
    materials: {
      cement: 'Ultratech Weather Plus Waterproof Cement',
      steel: 'Tata Tiscon SD FE-550D High Ductile',
      bricks: 'High-Density Wire Cut Bricks',
      flooring: 'Italian Marble / Premium GVT (₹150+/sq.ft)',
      bathFittings: 'Kohler / Grohe Thermostatic Diverters',
      kitchen: 'Full German Hardware Soft-close Modular Kitchen',
      paint: 'Asian Paints Royale Aspira / PU Polish Wooden elements',
      wiring: 'Schneider Electric / Legrand Smart Automation',
    },
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'civil_construction',
    iconName: 'Building2',
    title: {
      hi: 'मजबूत निर्माण (Civil Construction)',
      en: 'Turnkey House Construction',
    },
    description: {
      hi: 'फाउंडेशन (नींव) से लेकर फिनिशिंग तक, बेहतरीन गुणवत्ता की सीमेंट, स्टील और ईंटों से समय पर पक्का निर्माण।',
      en: 'End-to-end structural & civil construction using top-tier cement, steel, and bricks with strict timeline adherence.',
    },
    highlights: [
      { hi: 'सिर्फ ₹1299/sq.ft से शुरू', en: 'Starting @ ₹1299/sq.ft' },
      { hi: '100% मटेरियल क्वालिटी टेस्टिंग', en: '100% Tested Certified Materials' },
      { hi: 'साइट इंजीनियर की 24x7 देखरेख', en: 'Dedicated Site Engineer Supervision' },
    ],
    image: HERO_IMAGE,
  },
  {
    id: 'vastu_design',
    iconName: 'Compass',
    title: {
      hi: 'वास्तु और आकर्षक डिज़ाइन (Vastu Architecture & 3D Plan)',
      en: 'Vastu Compliant Architecture & 3D Design',
    },
    description: {
      hi: 'घर में सुख-समृद्धि के लिए पूर्ण वास्तु शास्त्र नियमों के अनुसार मुख्य द्वार, रसोई, पूजा घर और कमरों का सटीक नियोजन।',
      en: 'Scientific Vastu layout ensuring positive energy, natural light, and space optimization with 3D elevation renders.',
    },
    highlights: [
      { hi: 'ईशान कोण में पूजा स्थल', en: 'Pooja Room in North-East (Ishanya)' },
      { hi: 'आग्नेय कोण में मॉड्यूलर किचन', en: 'Kitchen in South-East (Agni)' },
      { hi: 'नैरृत्य कोण में मुख्य बेडरूम', en: 'Master Bedroom in South-West' },
    ],
    image: READY_HOUSE_IMAGE,
  },
  {
    id: 'interior_work',
    iconName: 'Palette',
    title: {
      hi: 'इंटीरियर वर्क और फॉल्स सीलिंग (Interior Work)',
      en: 'Custom Interior Design & Woodwork',
    },
    description: {
      hi: 'आपके घर को दें 5-स्टार लक्जरी लुक। वार्डरोब, टीवी यूनिट, जिप्सम फॉल्स सीलिंग, वॉल पैनलिंग और एम्बिएंट लाइटिंग।',
      en: 'Elevate your living spaces with luxury wall paneling, false ceilings, custom wardrobes, and ambient lighting.',
    },
    highlights: [
      { hi: '3D इंटीरियर व्यू पहले देखें', en: '3D Interior Visualization First' },
      { hi: 'दीमक-रोधी कमर्शियल प्लाईवुड', en: 'Anti-Termite Commercial Plywood' },
      { hi: 'प्रीमियम फिनिशिंग और पॉलिश', en: 'Premium PU & Laminate Finishes' },
    ],
    image: INTERIOR_KITCHEN_IMAGE,
  },
  {
    id: 'modular_kitchen',
    iconName: 'UtensilsCrossed',
    title: {
      hi: 'मॉड्यूलर किचन (Modular Kitchen)',
      en: 'Modern Modular Kitchen Setup',
    },
    description: {
      hi: 'स्मार्ट स्टोरेज, सॉफ्ट-क्लोज बास्केट्स, एक्रिलिक शटर, कोरियन/क्वार्ट्स काउंटरटॉप और ऑटो-क्लीन चिमनी सेटअप।',
      en: 'Ergonomic kitchen designs with soft-close drawers, durable quartz tops, and chimney-ready ventilation.',
    },
    highlights: [
      { hi: '100% वाटरप्रूफ और फायर-रिटार्डेंट प्लाई', en: '100% Waterproof Marine Plywood' },
      { hi: 'Hettich / Ebco जर्मन हार्डवेयर', en: 'Hettich / Ebco Soft-close Hardware' },
      { hi: 'आसान सफाई और आधुनिक लुक', en: 'Easy Clean Acrylic & Glass Finishes' },
    ],
    image: INTERIOR_KITCHEN_IMAGE,
  },
  {
    id: 'bathroom_fitting',
    iconName: 'ShowerHead',
    title: {
      hi: 'प्रीमियम बाथरूम फिटिंग (Bathroom Fitting)',
      en: 'Luxury Bathroom & Plumbing Solutions',
    },
    description: {
      hi: 'जैक्वार, सेरा और कोहलर की ब्रांडेड फिटिंग्स, एंटी-स्किड टाइलिंग, कंसील्ड डाइवर्टर और आधुनिक शावर एनक्लोजर।',
      en: 'Hotel-like bathrooms with anti-skid floor tiles, glass shower walls, and branded sanitaryware.',
    },
    highlights: [
      { hi: '10 साल की लीकेज-फ्री प्लंबिंग वारंटी', en: '10-Year Leak-Proof Plumbing Warranty' },
      { hi: 'Jaquar / Kohler / Cera फिटिंग्स', en: 'Jaquar / Kohler / Cera Certified' },
      { hi: 'आधुनिक वॉल-हंग कमोड और वॉशबेसिन', en: 'Wall-Hung Closets & Glass Enclosures' },
    ],
    image: READY_HOUSE_IMAGE,
  },
  {
    id: 'ready_to_move',
    iconName: 'Home',
    title: {
      hi: 'रेडी टू मूव घर (Ready to Move Homes)',
      en: 'Ready to Move Modern Villas & Duplexes',
    },
    description: {
      hi: 'बिना इंतजार किए सीधे अपने सपनों के घर में रहें। प्राइम लोकेशन में पूरी तरह से निर्मित, Vastu-सम्मत और रेडी-टू-शिफ्ट घर।',
      en: 'Beautifully crafted villas and duplexes ready for immediate possession in premium prime locations.',
    },
    highlights: [
      { hi: 'रेजिडेंशियल अप्रूव्ड और होम लोन उपलब्ध', en: 'Approved Layouts & 80-90% Home Loan' },
      { hi: 'तत्काल रजिस्ट्री और पजेशन', en: 'Immediate Possession & Registry' },
      { hi: 'गेटेड कम्युनिटी और 24x7 सुरक्षा', en: 'Gated Community with Security & Parks' },
    ],
    image: READY_HOUSE_IMAGE,
  },
];

export const READY_TO_MOVE_HOMES: ReadyToMoveHome[] = [
  {
    id: 'rtm-1',
    title: {
      hi: '3 BHK वास्तु रॉयल डुप्लेक्स विला',
      en: '3 BHK Vastu Royal Duplex Villa',
    },
    location: {
      hi: 'गोमती नगर एक्सटेंशन / सुलतानपुर रोड, लखनऊ',
      en: 'Gomti Nagar Extension, Lucknow',
    },
    price: 68.5, // Lakhs
    plotAreaSqFt: 1250,
    builtUpAreaSqFt: 2100,
    bedrooms: 3,
    bathrooms: 3,
    facing: { hi: 'पूर्वमुखी (East Facing)', en: 'East Facing (Vastu Compliant)' },
    vastuCompliant: true,
    image: READY_HOUSE_IMAGE,
    gallery: [READY_HOUSE_IMAGE, HERO_IMAGE, INTERIOR_KITCHEN_IMAGE],
    features: [
      { hi: 'मॉड्यूलर किचन मुफ्त', en: 'Complimentary Modular Kitchen' },
      { hi: '3 बेडरूम + 3 बाथरूम + 2 बालकनी', en: '3 Bedrooms + 3 Bathrooms + 2 Balconies' },
      { hi: 'कवर्ड कार पार्किंग', en: 'Covered Car Parking' },
      { hi: '24 घंटे मीठा पानी और बिजली सप्लाई', en: '24/7 Water & Power Backup Support' },
    ],
    status: 'Hot Deal',
  },
  {
    id: 'rtm-2',
    title: {
      hi: '2 BHK स्वतंत्र ईस्ट-फेसिंग हाउस',
      en: '2 BHK Independent East-Facing House',
    },
    location: {
      hi: 'रायबरेली रोड / PGI के पास, लखनऊ',
      en: 'Near PGI, Raebareli Road, Lucknow',
    },
    price: 45.0, // Lakhs
    plotAreaSqFt: 1000,
    builtUpAreaSqFt: 1450,
    bedrooms: 2,
    bathrooms: 2,
    facing: { hi: 'उत्तर-पूर्व (North-East)', en: 'North-East Facing' },
    vastuCompliant: true,
    image: HERO_IMAGE,
    gallery: [HERO_IMAGE, READY_HOUSE_IMAGE],
    features: [
      { hi: 'फॉल्स सीलिंग और वार्डरोब शामिल', en: 'False Ceiling & Wardrobes Included' },
      { hi: '80% तक बैंक लोन की सुविधा', en: 'Up to 80% Bank Loan Approved' },
      { hi: '30 फुट चौड़ी डामर रोड', en: '30 Feet Wide Blacktop Road' },
    ],
    status: 'Ready to Move',
  },
  {
    id: 'rtm-3',
    title: {
      hi: '4 BHK लक्जरी पैलेस विला विद गार्डन',
      en: '4 BHK Luxury Palace Villa with Garden',
    },
    location: {
      hi: 'शिवपुर / बाबतपुर एयरपोर्ट रोड, वाराणसी',
      en: 'Airport Road, Shivpur, Varanasi',
    },
    price: 98.0, // Lakhs
    plotAreaSqFt: 1800,
    builtUpAreaSqFt: 3200,
    bedrooms: 4,
    bathrooms: 4,
    facing: { hi: 'उत्तर मुखी (North Facing)', en: 'North Facing (Kuber Corner)' },
    vastuCompliant: true,
    image: HERO_IMAGE,
    gallery: [HERO_IMAGE, INTERIOR_KITCHEN_IMAGE, READY_HOUSE_IMAGE],
    features: [
      { hi: 'इटैलियन मार्बल फ्लोरिंग', en: 'Italian Marble Flooring' },
      { hi: 'निजी छत गार्डन और रूफटॉप गजेबो', en: 'Private Terrace Garden & Gazebo' },
      { hi: 'स्मार्ट होम ऑटोमेशन सिस्टम', en: 'Smart Home Automation Installed' },
    ],
    status: 'Ready to Move',
  },
];

export const VASTU_TIPS: VastuTip[] = [
  {
    room: { hi: 'मुख्य द्वार (Main Entrance)', en: 'Main Entrance' },
    direction: { hi: 'उत्तर (North) या पूर्व (East)', en: 'North or East Direction' },
    advice: {
      hi: 'मुख्य द्वार घर का सबसे बड़ा और प्रकाशमान होना चाहिए। यह सकारात्मक ऊर्जा (Positive Energy) आकर्षित करता है।',
      en: 'The main door should be the largest and well-lit to welcome prosperity and maximum natural light.',
    },
    importance: { hi: 'अति महत्वपूर्ण (High)', en: 'Essential' },
  },
  {
    room: { hi: 'रसोईघर (Kitchen)', en: 'Kitchen (Agni Cone)' },
    direction: { hi: 'दक्षिण-पूर्व (South-East / आग्नेय)', en: 'South-East (Agni Corner)' },
    advice: {
      hi: 'खाना बनाते समय चेहरा पूर्व दिशा की ओर होना चाहिए। पानी का सिंक उत्तर-पश्चिम या उत्तर-पूर्व में रखें।',
      en: 'Cook facing East. Keep water sink in the North-East or North-West corner for elemental balance.',
    },
    importance: { hi: 'अति महत्वपूर्ण (High)', en: 'Essential' },
  },
  {
    room: { hi: 'मास्टर बेडरूम (Master Bedroom)', en: 'Master Bedroom' },
    direction: { hi: 'दक्षिण-पश्चिम (South-West / नैरृत्य)', en: 'South-West Corner' },
    advice: {
      hi: 'सोते समय सिर दक्षिण या पूर्व दिशा की ओर रखें। इससे मानसिक शांति और अच्छी नींद मिलती है।',
      en: 'Sleep with head pointing towards South or East for peace of mind, stability, and longevity.',
    },
    importance: { hi: 'महत्वपूर्ण (Medium)', en: 'High' },
  },
  {
    room: { hi: 'पूजा घर (Pooja Room)', en: 'Pooja Room' },
    direction: { hi: 'उत्तर-पूर्व (North-East / ईशान)', en: 'North-East (Ishanya Cone)' },
    advice: {
      hi: 'ईशान कोण में भगवान की स्थापना करें। पूजा करते समय आपका मुख पूर्व या उत्तर दिशा में होना चाहिए।',
      en: 'Place idols in the North-East corner. Face East or North while meditating or offering prayers.',
    },
    importance: { hi: 'अति महत्वपूर्ण (High)', en: 'Critical' },
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'राजेश सिंह (Rajesh Singh)',
    location: 'गोमती नगर, लखनऊ',
    rating: 5,
    comment: {
      hi: 'BUILTEX GROUP ने मेरा 1500 sq.ft का घर सिर्फ ₹1299/sq.ft पैकेज में ठीक 6 महीने में बनाकर दिया। मटेरियल क्वालिटी से लेकर वास्तु नियोजन तक हर काम शानदार था!',
      en: 'BUILTEX GROUP delivered my 1500 sq.ft custom house strictly within budget in 6 months. Exceptional structural steel quality and transparent daily photo updates!',
    },
    projectType: { hi: '1500 sq.ft इंडिपेंडेंट विला', en: '1500 sq.ft Independent Villa' },
  },
  {
    id: 't2',
    name: 'डॉ. अमित वर्मा (Dr. Amit Verma)',
    location: 'सुल्तानपुर रोड, लखनऊ',
    rating: 5,
    comment: {
      hi: 'इनका मॉड्यूलर किचन और बाथरूम फिटिंग का काम 5-स्टार होटल जैसा है। सबसे अच्छी बात यह है कि इन्होंने समय पर पजेशन दिया और कोई अतिरिक्त छुपा हुआ खर्च नहीं लिया।',
      en: 'Their modular kitchen and bathroom execution was top notch. Complete budget clarity with zero hidden charges. Highly recommended for house construction!',
    },
    projectType: { hi: '2100 sq.ft 3BHK डुप्लेक्स', en: '2100 sq.ft 3BHK Duplex' },
  },
  {
    id: 't3',
    name: 'इंजीनियर आलोक पाण्डेय (Er. Alok Pandey)',
    location: 'वाराणसी',
    rating: 5,
    comment: {
      hi: 'मैंने BUILTEX GROUP से रेडी-टू-मूव विला खरीदा। Vastu के अनुसार प्लानिंग और फिनिशिंग इतनी खूबसूरत थी कि परिवार तुरंत शिफ्ट हो गया। पूरी टीम बहुत ही प्रोफेशनल है!',
      en: 'Bought a Ready to Move Villa from Builtex Group. The Vastu-compliant plan and structural craftsmanship were so flawless that my family moved in right away!',
    },
    projectType: { hi: 'रेडी टू मूव विला', en: 'Ready to Move Villa' },
  },
];

export const MATERIAL_RATIO_PIE = [
  { name: 'सीमेंट और स्टील (Cement & Steel)', percentage: 32, color: '#2563eb' },
  { name: 'ईंट, बालू व गिट्टी (Bricks & Aggregates)', percentage: 22, color: '#d97706' },
  { name: 'टाइल्स, मार्बल व प्लाईवुड (Flooring & Interiors)', percentage: 18, color: '#059669' },
  { name: 'प्लंबिंग, सेनेटरी व सैनिटरी (Plumbing & Bath)', percentage: 10, color: '#7c3aed' },
  { name: 'इलेक्ट्रिकल व पेंट (Wiring & Paint)', percentage: 8, color: '#ec4899' },
  { name: 'मजदूरी व साइट सुपरविजन (Labor & Engineering)', percentage: 10, color: '#4b5563' },
];
