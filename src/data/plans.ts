import { PlanPricing } from '../types';

export const planPricings: PlanPricing[] = [
  {
    category: 'box',
    label: 'Paket Nasi Kotak Acara',
    dailyPrice: 35000,   // Tier 15-30 pax
    weeklyPrice: 33000,  // Tier 30-75 pax (hemat volume)
    monthlyPrice: 30000, // Tier 75-200+ pax
    features: [
      'Pilihan menu ayam bakar madu, liwet, atau bento',
      'Kemasan bento box sekat anti-tumpah & higienis',
      'Sudah termasuk sendok, garpu, tisu & tusuk gigi',
      'Bebas kustom sambal & pilihan sayuran',
      'Garansi pengantaran tiba H-1 jam sebelum acara'
    ]
  },
  {
    category: 'buffet',
    label: 'Paket Prasmanan Lengkap',
    dailyPrice: 75000,   // Tier 15-30 pax
    weeklyPrice: 72000,  // Tier 30-75 pax
    monthlyPrice: 68000, // Tier 75-200+ pax
    features: [
      '6–7 variasi menu lauk daging, ayam, sup, sayur & dessert',
      'Termasuk set meja buffet bercover rapi & dekorasi',
      'Chafing dish pemanas roll-top stainless steel mewah',
      'Peralatan makan piring keramik & sendok garpu lengkap',
      'Staf pramusaji profesional standby selama acara berlangsung'
    ]
  },
  {
    category: 'snack',
    label: 'Paket Snack Box Rapat & Seminar',
    dailyPrice: 18000,   // Tier 20-30 pax
    weeklyPrice: 17000,  // Tier 30-75 pax
    monthlyPrice: 15500, // Tier 75-200+ pax
    features: [
      'Kombinasi 3 kue pilihan (2 asin gurih + 1 manis legit)',
      'Termasuk air mineral cup 220ml dingin / sejuk',
      'Box kraft estetik ramah lingkungan dengan sekat rapi',
      'Setiap kue dibungkus plastik seal individual higienis',
      'Pengantaran terjadwal tepat sebelum sesi jeda / break acara'
    ]
  },
  {
    category: 'tumpeng',
    label: 'Paket Tumpeng & Hantaran Syukuran',
    dailyPrice: 45000,   // Tier tumpeng mini per box
    weeklyPrice: 42000,
    monthlyPrice: 39000,
    features: [
      'Pilihan Tumpeng Mini box mika atau Tumpeng Besar tampah',
      'Nasi kuning gurih kunyit alami beraroma rempah',
      '7 macam lauk komplit tradisional nusantara',
      'Free stiker / kartu ucapan kustom nama acara',
      'Pengantaran dengan pengamanan packaging ekstra'
    ]
  }
];

export const durationOptions = [
  {
    id: 'single',
    label: 'Acara Keluarga & Intimate (15–30 Pax)',
    days: 1,
    desc: 'Cocok untuk arisan, syukuran keluarga, tasyakuran anak, atau rapat tim kecil.'
  },
  {
    id: 'weekly',
    label: 'Acara Kantor & Komunitas (30–75 Pax)',
    days: 5,
    desc: 'Pilihan paling populer untuk seminar kantor, workshop, syukuran rumah baru, atau reuni.'
  },
  {
    id: 'monthly',
    label: 'Acara Akbar / Pesta (75–200+ Pax)',
    days: 20,
    desc: 'Layanan terpadu untuk resepsi pernikahan, gathering akbar perusahaan, atau peluncuran produk.'
  }
];
