import { BusinessConfig } from '../types';

export const initialBusinessConfig: BusinessConfig = {
  brandName: 'Catering Acara',
  legalEntityNote: 'Layanan Katering Acara, Prasmanan, Nasi Kotak & Syukuran — Beroperasi di BSD City & Jabodetabek',
  tagline: 'Sajian Lezat & Berkesan untuk Berbagai Acara Istimewa',
  subTagline: 'Spesialis Prasmanan, Nasi Kotak, Tumpeng & Snack Box Terpercaya',
  location: {
    name: 'Central Production Kitchen',
    subdistrict: 'Serpong',
    city: 'BSD City, Tangerang Selatan',
    province: 'Banten',
    country: 'Indonesia',
    mapsQueryUrl: 'https://www.google.com/maps/search/?api=1&query=BSD+City%2C+Serpong%2C+Tangerang+Selatan',
    isVerifiedKitchenAddress: false,
    note: 'Fasilitas dapur pusat produksi katering acara berskala besar dengan standar higienis tinggi. Melayani pengantaran ke seluruh area Jabodetabek.'
  },
  operationalHours: {
    production: 'Setiap Hari: 04.00 – 19.00 WIB (Menyesuaikan Jadwal Acara)',
    deliveryWindow: 'Tiba H-1 Jam sebelum acara dimulai (Garansi Tepat Waktu)',
    csWeekdays: 'Senin – Minggu: 08.00 – 21.00 WIB',
    csSaturday: 'Sabtu – Minggu: 08.00 – 21.00 WIB',
    sundayHolidays: 'Tetap Melayani Pengiriman di Hari Minggu & Hari Libur Nasional',
    preorderCutoff: 'Pemesanan Nasi Kotak min. H-1, Prasmanan & Tumpeng min. H-3'
  },
  whatsapp: {
    number: '',
    verified: false,
    displayPlaceholder: '+62 812-8899-7700 (Hotline Pemesanan Acara)'
  },
  email: {
    address: 'order@nutriboxcatering.com',
    verified: false
  },
  social: {
    instagram: {
      handle: '@nutriboxcatering',
      url: 'https://instagram.com/nutriboxcatering',
      verified: false
    },
    tiktok: {
      handle: '@nutriboxcatering',
      url: 'https://tiktok.com/@nutriboxcatering',
      verified: false
    },
    facebook: {
      handle: 'Nutribox Catering Acara',
      url: 'https://facebook.com/nutriboxcatering',
      verified: false
    }
  },
  founder: {
    name: 'Nadia Putri Maheswari',
    role: 'Managing Director & Culinary Operations',
    bio: 'Berpengalaman memimpin operasional katering acara keluarga, gathering korporasi, hingga pesta pernikahan dengan standar kelezatan dan ketepatan waktu tinggi.',
    isVerifiedPublic: false
  }
};

const STORAGE_KEY = 'catering_business_config';

export function getStoredBusinessConfig(): BusinessConfig {
  if (typeof window === 'undefined') return initialBusinessConfig;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialBusinessConfig;
    return { ...initialBusinessConfig, ...JSON.parse(raw) };
  } catch {
    return initialBusinessConfig;
  }
}

export function saveStoredBusinessConfig(config: BusinessConfig): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch (e) {
    console.error('Failed to save business config', e);
  }
}
