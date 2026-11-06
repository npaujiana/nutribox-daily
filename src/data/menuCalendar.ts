import { CalendarMenuItem } from '../types';

// Data rotasi menu mingguan contoh (Representatif sample menu yang transparan bertanda isExample: true)
export const sampleCalendarMenus: CalendarMenuItem[] = [
  {
    id: 'menu-ex-001',
    date: '2026-11-09', // Senin
    dayName: 'Senin',
    name: 'Grilled Chicken Brown Rice Bowl',
    description: 'Dada ayam panggang rempah dengan nasi merah pulen, brokoli kukus, dan saus lada hitam gurih.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    category: 'balance',
    categoryLabel: 'Daily Balance',
    calories: 485,
    protein: 38,
    carbohydrates: 52,
    fat: 13,
    isPublished: true,
    isExample: true,
    composition: ['Nasi merah pulen', 'Dada ayam panggang fillet', 'Brokoli kukus', 'Wortel iris rebus', 'Saus lada hitam no MSG']
  },
  {
    id: 'menu-ex-002',
    date: '2026-11-10', // Selasa
    dayName: 'Selasa',
    name: 'Lemon Herb Fish with Cauliflower Rice',
    description: 'Fillet ikan dori panggang saus lemon rosemary segar, disajikan dengan kembang kol parut gurih rendah kalori.',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    category: 'lean',
    categoryLabel: 'Weight Management',
    calories: 390,
    protein: 34,
    carbohydrates: 28,
    fat: 9,
    isPublished: true,
    isExample: true,
    composition: ['Kembang kol parut panggang', 'Fillet dori panggang rosemary', 'Buncis muda baby', 'Tomat panggang herbal', 'Perasan lemon segar']
  },
  {
    id: 'menu-ex-003',
    date: '2026-11-11', // Rabu
    dayName: 'Rabu',
    name: 'Double Protein Beef & Egg Quinoa Box',
    description: 'Daging sapi sirloin iris tanpa lemak dengan telur omega rebus, quinoa hangat, dan edamame segar.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    category: 'protein',
    categoryLabel: 'High Protein',
    calories: 610,
    protein: 44,
    carbohydrates: 48,
    fat: 16,
    isPublished: true,
    isExample: true,
    composition: ['Quinoa merah & putih kukus', 'Beef sirloin lean cut saus tiram alami', 'Telur omega rebus', 'Edamame jepang rebus', 'Bayam jepang horenzo']
  },
  {
    id: 'menu-ex-004',
    date: '2026-11-12', // Kamis
    dayName: 'Kamis',
    name: 'Ayam Bakar Madu Mustard & Sweet Potato',
    description: 'Dada ayam bakar bumbu madu mustard alami dengan ubi madu panggang kaya antioksidan dan tumis buncis.',
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80',
    category: 'active',
    categoryLabel: 'Active Meal',
    calories: 640,
    protein: 38,
    carbohydrates: 72,
    fat: 15,
    isPublished: true,
    isExample: true,
    composition: ['Ubi madu panggang kubus', 'Dada ayam bakar madu mustard', 'Tumis buncis jagung muda', 'Sambal matah minyak kelapa', 'Biji labu panggang']
  },
  {
    id: 'menu-ex-005',
    date: '2026-11-13', // Jumat
    dayName: 'Jumat',
    name: 'Teriyaki Chicken Salad & Soba Bowl',
    description: 'Mie soba gandum dingin dengan ayam teriyaki homemade rendah sodium dan ragam salad renyah.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    category: 'balance',
    categoryLabel: 'Daily Balance',
    calories: 510,
    protein: 36,
    carbohydrates: 58,
    fat: 11,
    isPublished: true,
    isExample: true,
    composition: ['Mie soba soba gandum utuh', 'Dada ayam teriyaki light soy', 'Kol ungu & selada romaine', 'Edamame kupas', 'Dressing wijen sangrai']
  }
];

export const emptyStateInfo = {
  title: 'Menu untuk periode ini belum tersedia',
  supportingText: 'Menu katering NutriBox Daily diumumkan secara bertahap setiap Jumat pukul 17.00 WIB untuk periode minggu berikutnya. Hubungi tim kami untuk jadwal rilis terbaru.',
  ctaText: 'Tanya Menu via WhatsApp'
};
