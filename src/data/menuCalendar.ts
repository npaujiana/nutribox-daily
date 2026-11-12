import { CalendarMenuItem } from '../types';

// Data rotasi rekomendasi menu acara mingguan
export const sampleCalendarMenus: CalendarMenuItem[] = [
  {
    id: 'menu-ex-001',
    date: '2026-11-09', // Senin
    dayName: 'Senin',
    name: 'Nasi Kotak Ayam Bakar Madu Spesial',
    description: 'Pilihan terfavorit rapat awal pekan kantor. Ayam bakar bumbu madu karamelisasi, tahu tempe bacem, lalapan segar, sambal bajak & kerupuk udang.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    category: 'box',
    categoryLabel: 'Nasi Kotak & Bento',
    calories: 650,
    protein: 36,
    carbohydrates: 78,
    fat: 20,
    portionInfo: 'Porsi Kenyang Dewasa • Min. 15 Box',
    isPublished: true,
    isExample: true,
    composition: ['Nasi putih wangi pulen pandan', 'Ayam bakar madu legit', 'Tahu & tempe bacem gurih', 'Lalapan segar timun kemangi', 'Sambal terasi bajak matang', 'Kerupuk udang renyah']
  },
  {
    id: 'menu-ex-002',
    date: '2026-11-10', // Selasa
    dayName: 'Selasa',
    name: 'Nasi Liwet Solo Komplit Daun Pisang',
    description: 'Aroma wangi rempah tradisional dengan ayam goreng lengkuas gurih, telur pindang cokelat legit, dan urap sayur kelapa sangrai harum.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    category: 'box',
    categoryLabel: 'Nasi Kotak & Bento',
    calories: 680,
    protein: 34,
    carbohydrates: 82,
    fat: 22,
    portionInfo: 'Porsi Kenyang Dewasa • Min. 15 Box',
    isPublished: true,
    isExample: true,
    composition: ['Nasi liwet serai kasturi teri', 'Ayam goreng rempah lengkuas', 'Telur pindang wangi', 'Urap sayur kelapa sangrai', 'Sambal bawang matang']
  },
  {
    id: 'menu-ex-003',
    date: '2026-11-11', // Rabu
    dayName: 'Rabu',
    name: 'Paket Prasmanan Nusantara Gold (Buffet)',
    description: 'Layanan prasmanan lengkap untuk acara gathering & seminar. Termasuk rendang sapi empuk, ayam suwir rica kemangi, sup kimlo, buah potong, dan es kopyor.',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80',
    category: 'buffet',
    categoryLabel: 'Prasmanan / Buffet',
    calories: 760,
    protein: 45,
    carbohydrates: 88,
    fat: 25,
    portionInfo: 'Lengkap Meja Buffet & Pemanas • Min. 50 Pax',
    isPublished: true,
    isExample: true,
    composition: ['Nasi putih pulen & nasi goreng', 'Rendang daging sapi padang empuk', 'Ayam suwir kemangi gurih', 'Sup kimlo bakso jamur sedap', 'Capcay seafood sayur segar', 'Buah potong & es kopyor segar']
  },
  {
    id: 'menu-ex-004',
    date: '2026-11-12', // Kamis
    dayName: 'Kamis',
    name: 'Snack Box Rapat & Coffee Break Premium',
    description: 'Kombinasi 3 kue pilihan premium (risoles ragout ayam creamy, pastel sayur telur, dan fudge brownies almond) lengkap air mineral cup.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    category: 'snack',
    categoryLabel: 'Snack Box & Kudapan',
    calories: 390,
    protein: 12,
    carbohydrates: 54,
    fat: 14,
    portionInfo: 'Kombinasi 3 Kue + Air Mineral • Min. 20 Box',
    isPublished: true,
    isExample: true,
    composition: ['Risoles ragout ayam creamy', 'Pastel sayur telur renyah', 'Fudge brownies almond legit', 'Air mineral cup 220ml', 'Tisu higienis']
  },
  {
    id: 'menu-ex-005',
    date: '2026-11-13', // Jumat
    dayName: 'Jumat',
    name: 'Tumpeng Kuning Komplit Syukuran',
    description: 'Tumpeng kuning bertingkat hiasan ukiran sayur artistik. Pilihan tepat untuk tasyakuran kantor, peluncuran produk baru, atau ulang tahun.',
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80',
    category: 'tumpeng',
    categoryLabel: 'Tumpeng & Hantaran',
    calories: 720,
    protein: 38,
    carbohydrates: 90,
    fat: 24,
    portionInfo: 'Tampah Bambu Daun Pisang • Porsi 20–25 Orang',
    isPublished: true,
    isExample: true,
    composition: ['Tumpeng nasi kuning pulen kunyit', 'Ayam lengkuas rempah gurih', 'Telur balado merah pedas manis', 'Perkedel kentang daging sapi', 'Orek tempe kering kacang', 'Mie goreng jawa spesial']
  }
];

export const emptyStateInfo = {
  title: 'Jadwal pemesanan tanggal ini tersedia',
  supportingText: 'Kami menerima pesanan katering acara setiap hari. Untuk ketersediaan slot tanggal acara dan konsultasi custom menu, silakan hubungi tim kami via WhatsApp.',
  ctaText: 'Konsultasi Tanggal Acara via WhatsApp'
};
