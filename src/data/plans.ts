import { PlanPricing } from '../types';

export const planPricings: PlanPricing[] = [
  {
    category: 'balance',
    label: 'Daily Balance Plan',
    dailyPrice: 49000,
    weeklyPrice: 235000, // 5 hari
    monthlyPrice: 920000, // 20 hari
    features: [
      'Pilihan menu gizi seimbang harian',
      'Estimasi kalori 450–550 kcal per box',
      'Karbohidrat kompleks & sayur segar',
      'Tanpa penambahan MSG',
      'Pengiriman berjadwal 10.30–11.45 WIB'
    ]
  },
  {
    category: 'lean',
    label: 'Lean Weight Management Plan',
    dailyPrice: 52000,
    weeklyPrice: 250000, // 5 hari
    monthlyPrice: 980000, // 20 hari
    features: [
      'Kalori terukur 350–450 kcal',
      'Porsi sayuran melimpah & serat tinggi',
      'Dada ayam / ikan tanpa lemak berlebih',
      'Dressing / saus herbal takaran terukur',
      'Pengiriman berjadwal 10.30–11.45 WIB'
    ]
  },
  {
    category: 'protein',
    label: 'Power Protein Plan',
    dailyPrice: 62000,
    weeklyPrice: 295000, // 5 hari
    monthlyPrice: 1160000, // 20 hari
    features: [
      'Tinggi protein 35–45 gram per box',
      'Sumber protein hewani berkualitas pilihan',
      'Estimasi energi 500–650 kcal',
      'Mendukung pemulihan otot & stamina',
      'Pengiriman berjadwal 10.30–11.45 WIB'
    ]
  },
  {
    category: 'active',
    label: 'Active Meal Plan',
    dailyPrice: 59000,
    weeklyPrice: 280000, // 5 hari
    monthlyPrice: 1100000, // 20 hari
    features: [
      'Porsi makanan lebih besar (550–700 kcal)',
      'Densitas nutrisi tinggi untuk energi harian',
      'Karbohidrat lepas lambat tahan lapar',
      'Variasi menu gurih alami tanpa rasa kantuk',
      'Pengiriman berjadwal 10.30–11.45 WIB'
    ]
  }
];

export const durationOptions = [
  {
    id: 'single',
    label: 'Harian (1 Box)',
    days: 1,
    desc: 'Coba satu menu harian untuk mencicipi rasa dan kualitas NutriBox Daily.'
  },
  {
    id: 'weekly',
    label: 'Weekly Fit Plan (5 Hari)',
    days: 5,
    desc: 'Paket Senin–Jumat untuk rutinitas makan siang kerja teratur tanpa repot.'
  },
  {
    id: 'monthly',
    label: 'Monthly Fit Plan (20 Hari)',
    days: 20,
    desc: 'Langganan sebulan penuh (4 minggu kerja) dengan rotasi menu berganti tiap minggu.'
  }
];
