import { BusinessConfig } from '../types';

export const initialBusinessConfig: BusinessConfig = {
  brandName: 'NutriBox Daily',
  legalEntityNote: 'Katering Makanan Sehat B2C — Beroperasi sejak 2025 di Tangerang Selatan',
  tagline: 'Modern Nutrition, Made for Everyday Life',
  subTagline: 'Makan Sehat, Tetap Praktis Setiap Hari',
  location: {
    name: 'NutriBox Daily Production Kitchen',
    subdistrict: 'Serpong',
    city: 'BSD City, Tangerang Selatan',
    province: 'Banten',
    country: 'Indonesia',
    mapsQueryUrl: 'https://www.google.com/maps/search/?api=1&query=BSD+City%2C+Serpong%2C+Tangerang+Selatan',
    isVerifiedKitchenAddress: false, // Dapur produksi tertutup, bukan restoran/titik publik bebas
    note: 'Fasilitas dapur produksi khusus katering meal-prep dan pengiriman. Bukan restoran atau tempat makan dine-in umum.'
  },
  operationalHours: {
    production: 'Senin – Jumat: 06.00 – 10.00 WIB',
    deliveryWindow: 'Senin – Jumat: 10.30 – 11.45 WIB (Tiba sebelum makan siang)',
    csWeekdays: 'Senin – Jumat: 08.00 – 17.00 WIB',
    csSaturday: 'Sabtu: 09.00 – 14.00 WIB (Hanya Customer Service)',
    sundayHolidays: 'Minggu & Hari Libur Nasional: Tutup (Tidak ada produksi)',
    preorderCutoff: 'Pre-order H-1 ditutup pukul 17.00 WIB setiap harinya'
  },
  whatsapp: {
    number: '', // Kosong secara default sesuai spesifikasi prompt; dapat diisi di panel konfigurasi
    verified: false, // Belum terverifikasi secara resmi oleh pemilik bisnis
    displayPlaceholder: '+62 811-0000-2480 (Ilustratif / Tahap Setup)'
  },
  email: {
    address: 'contact@nutriboxdaily.com',
    verified: false
  },
  social: {
    instagram: {
      handle: '@nutriboxdaily',
      url: 'https://instagram.com/nutriboxdaily',
      verified: false
    },
    tiktok: {
      handle: '@nutriboxdaily',
      url: 'https://tiktok.com/@nutriboxdaily',
      verified: false
    },
    facebook: {
      handle: 'NutriBox Daily',
      url: 'https://facebook.com/nutriboxdaily',
      verified: false
    }
  },
  founder: {
    name: 'Nadia Putri Maheswari',
    role: 'Founder & Business Manager',
    bio: 'Mengembangkan NutriBox Daily dengan misi menghadirkan makanan bernutrisi terukur, variatif, dan praktis bagi profesional urban.',
    isVerifiedPublic: false // Belum dikonfirmasi untuk publikasi publik sebagai fakta hukum
  }
};

const STORAGE_KEY = 'nutribox_business_config';

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
