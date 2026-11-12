export type MealCategory = 'box' | 'buffet' | 'snack' | 'tumpeng' | 'balance' | 'lean' | 'protein' | 'active';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: MealCategory;
  categoryLabel: string;
  price: number;
  formattedPrice: string;
  caloriesRange?: string;
  caloriesEstimate?: number;
  portionInfo?: string; // e.g. "Min. 15 Pax", "Porsi 20–25 Orang"
  proteinEstimate?: string;
  carbsEstimate?: string;
  fatEstimate?: string;
  image: string;
  badge?: string;
  ingredients: string[];
  features: string[];
  nutritionNote?: string;
}

export interface CalendarMenuItem {
  id: string;
  date: string; // YYYY-MM-DD
  dayName: string; // Senin, Selasa, etc.
  name: string;
  description: string;
  image: string;
  category: MealCategory;
  categoryLabel: string;
  calories?: number;
  protein?: number;
  carbohydrates?: number;
  fat?: number;
  portionInfo?: string;
  isPublished: boolean;
  isExample: boolean;
  composition: string[];
}

export interface PlanPricing {
  category: MealCategory;
  label: string;
  dailyPrice: number; // price per pax for small events
  weeklyPrice: number; // price for medium events (e.g. 50 pax)
  monthlyPrice: number; // price for large events (e.g. 100 pax)
  features: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'product' | 'plans' | 'delivery' | 'order' | 'allergy';
}

export interface BusinessConfig {
  brandName: string;
  legalEntityNote: string;
  tagline: string;
  subTagline: string;
  location: {
    name: string;
    subdistrict: string;
    city: string;
    province: string;
    country: string;
    mapsQueryUrl: string;
    isVerifiedKitchenAddress: boolean;
    note: string;
  };
  operationalHours: {
    production: string;
    deliveryWindow: string;
    csWeekdays: string;
    csSaturday: string;
    sundayHolidays: string;
    preorderCutoff: string;
  };
  whatsapp: {
    number: string;
    verified: boolean;
    displayPlaceholder: string;
  };
  email: {
    address: string;
    verified: boolean;
  };
  social: {
    instagram: { handle: string; url: string; verified: boolean };
    tiktok: { handle: string; url: string; verified: boolean };
    facebook: { handle: string; url: string; verified: boolean };
  };
  founder: {
    name: string;
    role: string;
    bio: string;
    isVerifiedPublic: boolean;
  };
}
