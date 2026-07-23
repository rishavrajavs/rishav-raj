export type Language = 'hi' | 'en';

export type AppTheme = 'obsidian' | 'royal-cream' | 'sapphire' | 'emerald';
export type AppFont = 'classic' | 'modern' | 'regal';

export interface ConstructionPackage {
  id: string;
  name: { hi: string; en: string };
  pricePerSqFt: number;
  popular?: boolean;
  description: { hi: string; en: string };
  features: { hi: string; en: string }[];
  materials: {
    cement: string;
    steel: string;
    bricks: string;
    flooring: string;
    bathFittings: string;
    kitchen: string;
    paint: string;
    wiring: string;
  };
}

export interface ReadyToMoveHome {
  id: string;
  title: { hi: string; en: string };
  location: { hi: string; en: string };
  price: number; // in Lakhs or Crores
  plotAreaSqFt: number;
  builtUpAreaSqFt: number;
  bedrooms: number;
  bathrooms: number;
  facing: { hi: string; en: string };
  vastuCompliant: boolean;
  image: string;
  gallery: string[];
  features: { hi: string; en: string }[];
  status: 'Ready to Move' | 'Under Construction' | 'Hot Deal';
}

export interface ServiceItem {
  id: string;
  iconName: string;
  title: { hi: string; en: string };
  description: { hi: string; en: string };
  highlights: { hi: string; en: string }[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: { hi: string; en: string };
  projectType: { hi: string; en: string };
  avatar?: string;
}

export interface VastuTip {
  room: { hi: string; en: string };
  direction: { hi: string; en: string };
  advice: { hi: string; en: string };
  importance: { hi: string; en: string };
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  serviceType: 'custom_construction' | 'ready_to_move' | 'interior_design' | 'vastu_consultation';
  plotAreaSqFt: number;
  floors: string;
  location: string;
  budgetRange: string;
  selectedPackageId: string;
  message: string;
}
