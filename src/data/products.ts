import { Product } from '../types';

export const productsData: Product[] = [
  {
    id: 'daily-balance-box',
    name: 'Daily Balance Box',
    tagline: 'Makan Siang Seimbang untuk Rutinitas Harianmu',
    description: 'Pilihan makan siang dengan komposisi nutrisi seimbang antara karbohidrat kompleks, protein hewani berkualitas, dan serat sayuran segar untuk menjaga energi stabil sepanjang hari kerja.',
    category: 'balance',
    categoryLabel: 'Daily Balance',
    price: 49000,
    formattedPrice: 'Rp49.000',
    caloriesRange: '450–550 kcal',
    caloriesEstimate: 495,
    proteinEstimate: '32–38 g',
    carbsEstimate: '50–58 g',
    fatEstimate: '12–16 g',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80',
    badge: 'Paling Populer',
    ingredients: [
      'Nasi merah / Beras cokelat aromatik pilihan',
      'Dada ayam panggang herbal (skinless chicken breast)',
      'Brokoli & wortel kukus segar',
      'Saus lada hitam no added MSG',
      'Biji wijen panggang'
    ],
    features: [
      'Komposisi makro seimbang',
      'Karbohidrat kompleks berindeks glikemik stabil',
      'Sayuran kukus dengan kesegaran terjaga',
      'Tanpa penambahan MSG atau bahan pengawet'
    ],
    nutritionNote: 'Estimasi nutrisi dihitung berdasarkan porsi standar resep. Nilai aktual dapat mengalami sedikit variasi sesuai bahan baku harian.'
  },
  {
    id: 'lean-box',
    name: 'Lean Box',
    tagline: 'Kalori Terkontrol dengan Porsi Terukur',
    description: 'Dirancang khusus untuk mendukung program pengelolaan berat badan dengan porsi karbohidrat terkontrol, fokus pada protein rendah lemak, dan porsi sayuran berlimpah untuk rasa kenyang tahan lama.',
    category: 'lean',
    categoryLabel: 'Weight Management',
    price: 52000,
    formattedPrice: 'Rp52.000',
    caloriesRange: '350–450 kcal',
    caloriesEstimate: 395,
    proteinEstimate: '30–35 g',
    carbsEstimate: '35–42 g',
    fatEstimate: '8–12 g',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=80',
    badge: 'Weight Friendly',
    ingredients: [
      'Nasi kembang kol & shirataki rice blend',
      'Dada ayam panggang lemon rosemary / Dori kukus jahe',
      'Buncis muda, tomat ceri, selada segar',
      'Dressing olive oil & perasan lemon segar (terpisah)'
    ],
    features: [
      'Kalori terukur 350–450 kcal',
      'Porsi sayuran kaya serat mikro',
      'Pilihan minyak sehat dengan takaran terukur',
      'Membantu rasa kenyang lebih lama tanpa rasa kantuk'
    ],
    nutritionNote: 'Disiapkan untuk referensi pola makan kalori terkontrol. Bukan pengganti anjuran medis atau program diet individual khusus.'
  },
  {
    id: 'power-protein-box',
    name: 'Power Protein Box',
    tagline: 'Tinggi Protein untuk Gaya Hidup Aktif & Gym',
    description: 'Kombinasi protein tinggi 35–45 gram per porsi untuk mendukung pemulihan otot, regenerasi sel, dan stamina harian bagi individu yang rutin berolahraga atau memiliki kebutuhan protein lebih tinggi.',
    category: 'protein',
    categoryLabel: 'High Protein',
    price: 62000,
    formattedPrice: 'Rp62.000',
    caloriesRange: '500–650 kcal',
    caloriesEstimate: 580,
    proteinEstimate: '35–45 g',
    carbsEstimate: '45–55 g',
    fatEstimate: '14–18 g',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80',
    badge: 'Protein Tinggi (35–45g)',
    ingredients: [
      'Double grilled chicken breast / Beef sirloin lean cut',
      'Telur omega-3 rebus setengah matang / orak-arik ringan',
      'Quinoa & nasi merah bakar daun',
      'Edamame kukus & asparagus renyah',
      'Saus chimichurri herbal tanpa MSG'
    ],
    features: [
      '35–45 gram protein terukur per box',
      'Sumber protein hewani berkualitas tinggi',
      'Asam amino lengkap untuk pemulihan otot optimal',
      'Pilihan favorit gym enthusiast dan pelari'
    ],
    nutritionNote: 'Kandungan protein dihitung berdasarkan porsi mentah & masak terstandar. Sangat cocok dinikmati 1–2 jam sebelum atau sesudah latihan.'
  },
  {
    id: 'active-meal-box',
    name: 'Active Meal Box',
    tagline: 'Energi Ekstra untuk Mobilitas Tinggi',
    description: 'Porsi lebih besar dengan densitas nutrisi seimbang untuk profesional beraktivitas lapangan, pengguna energi tinggi, atau individu yang memerlukan asupan kalori lebih tinggi tanpa rasa begah.',
    category: 'active',
    categoryLabel: 'Active Meal',
    price: 59000,
    formattedPrice: 'Rp59.000',
    caloriesRange: '550–700 kcal',
    caloriesEstimate: 620,
    proteinEstimate: '34–40 g',
    carbsEstimate: '65–75 g',
    fatEstimate: '16–20 g',
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=1000&q=80',
    badge: 'Porsi Lebih Besar',
    ingredients: [
      'Nasi jagung & nasi merah kombinasi hangat',
      'Ayam bakar madu mustard / Daging sapi lada hitam',
      'Ubi ungu kukus panggang kubus',
      'Tumis jagung muda, buncis, dan jamur kuping',
      'Sambal matah segar dengan minyak kelapa asli'
    ],
    features: [
      'Porsi makanan lebih padat energi (550–700 kcal)',
      'Kompleks karbohidrat lepas lambat tahan lama',
      'Kombinasi mikronutrien mineral dari sayuran warna-warni',
      'Mengurangi rasa lelah di sore hari'
    ],
    nutritionNote: 'Cocok bagi Anda dengan tingkat aktivitas fisik harian tinggi atau mobilitas dinamis di luar ruangan.'
  }
];

export const sampleMenuExample = {
  name: 'Grilled Chicken Brown Rice Bowl',
  category: 'Daily Balance Box',
  calories: 485,
  protein: 38,
  carbohydrates: 52,
  fat: 13,
  composition: [
    'Nasi merah organik pulen',
    'Dada ayam panggang rempah nusantara',
    'Brokoli kukus renyah',
    'Wortel iris rebus',
    'Saus lada hitam racikan dapur tanpa tambahan MSG'
  ],
  note: 'Nilai nutrisi merupakan estimasi berdasarkan resep, bahan baku, dan berat porsi. Nilai aktual dapat mengalami sedikit variasi.'
};
