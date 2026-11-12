import { Product } from '../types';

export const productsData: Product[] = [
  {
    id: 'nasi-kotak-ayam-bakar-madu',
    name: 'Nasi Kotak Ayam Bakar Madu Spesial',
    tagline: 'Pilihan Utama Rapat Kantor, Seminar & Syukuran',
    description: 'Menu favorit untuk berbagai acara formal dan keluarga. Potongan ayam pejantan pilihan dimarinasi bumbu rempah nusantara dan dipanggang dengan olesan madu murni yang gurih meresap hingga ke dalam serat daging.',
    category: 'box',
    categoryLabel: 'Nasi Kotak & Bento',
    price: 35000,
    formattedPrice: 'Rp35.000',
    portionInfo: 'Min. Pemesanan 15 Box',
    caloriesRange: '600–700 kcal',
    caloriesEstimate: 650,
    proteinEstimate: '34–38 g',
    carbsEstimate: '75–85 g',
    fatEstimate: '18–22 g',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80',
    badge: 'Paling Populer Acara',
    ingredients: [
      'Nasi putih wangi pulen pandan',
      'Ayam bakar madu bumbu rempah legit',
      'Tahu & tempe bacem bumbu kelapa gurih',
      'Lalapan segar timun & kemangi bersih',
      'Sambal terasi bajak matang pedas mantap',
      'Kerupuk udang renyah'
    ],
    features: [
      'Kemasan bento box sekat anti-tumpah & rapi',
      'Lengkap dengan sendok, garpu, tusuk gigi & tisu higienis',
      'Dimasak segar di hari H acara',
      'Garansi pengantaran tiba H-1 jam sebelum acara dimulai'
    ],
    nutritionNote: 'Porsi dirancang pas dan mengenyangkan untuk konsumsi tamu rapat kantor, workshop, arisan, maupun acara syukuran keluarga.'
  },
  {
    id: 'nasi-liwet-komplit-daun-pisang',
    name: 'Nasi Liwet Komplit Daun Pisang',
    tagline: 'Aroma Wangi Rempah Tradisional Khas Nusantara',
    description: 'Sajian otentik khas Jawa Barat dengan nasi liwet gurih beraroma serai, salam, dan taburan teri medan renyah. Disajikan komplit bersama lauk-pauk tradisional kesukaan semua generasi.',
    category: 'box',
    categoryLabel: 'Nasi Kotak & Bento',
    price: 38000,
    formattedPrice: 'Rp38.000',
    portionInfo: 'Min. Pemesanan 15 Box',
    caloriesRange: '650–750 kcal',
    caloriesEstimate: 680,
    proteinEstimate: '32–36 g',
    carbsEstimate: '80–90 g',
    fatEstimate: '20–24 g',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=80',
    badge: 'Cita Rasa Nusantara',
    ingredients: [
      'Nasi gurih liwet serai kasturi bertabur teri medan',
      'Ayam goreng rempah lengkuas renyah harum',
      'Telur pindang cokelat wangi teh & rempah',
      'Urap sayur kelapa sangrai harum',
      'Sambal bawang matang pedas nendang'
    ],
    features: [
      'Beralas daun pisang alami penambah aroma selera',
      'Rempah asli tanpa bahan pengawet sintetik',
      'Cocok untuk syukuran rumah, pengajian, dan arisan keluarga',
      'Kemasan ramah lingkungan dan higienis'
    ],
    nutritionNote: 'Menu kaya serat dari sayuran urap segar dan protein tinggi dari ayam goreng bumbu rempah.'
  },
  {
    id: 'prasmanan-nusantara-gold',
    name: 'Paket Prasmanan Nusantara Gold',
    tagline: 'Lengkap Meja Buffet, Pemanas Roll-Top & Staf Service',
    description: 'Layanan prasmanan lengkap bintang lima untuk resepsi pernikahan, khitanan, gala dinner kantor, atau reuni akbar. Semua sajian dipanaskan terus dengan chafing dish stainless steel elegan.',
    category: 'buffet',
    categoryLabel: 'Prasmanan / Buffet',
    price: 75000,
    formattedPrice: 'Rp75.000 / Pax',
    portionInfo: 'Min. Pemesanan 50 Pax',
    caloriesRange: '700–850 kcal',
    caloriesEstimate: 760,
    proteinEstimate: '40–50 g',
    carbsEstimate: '85–95 g',
    fatEstimate: '22–28 g',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80',
    badge: 'Paket Buffet Favorit',
    ingredients: [
      'Nasi putih pulen & Nasi goreng oriental istimewa',
      'Rendang daging sapi empuk khas Minang',
      'Ayam suwir kemangi bumbu rica gurih',
      'Sup kimlo bakso jamur kaldu ayam sedap',
      'Capcay goreng seafood bakso & sayur segar',
      'Kerupuk udang, buah potong segar (melon, semangka, nanas)',
      'Es kopyor / es buah segar & air mineral kemasan'
    ],
    features: [
      'Sudah termasuk meja buffet bercover rapi & dekorasi pemanis',
      'Chafing dish pemanas roll-top stainless steel mewah',
      'Piring keramik, sendok garpu stainless steel & gelas',
      'Staf pramusaji berseragam rapi yang standby selama acara'
    ],
    nutritionNote: 'Sajian lengkap berimbang dengan lauk ganda daging & ayam, sayur berkuah, karbohidrat, dan hidangan penutup segar.'
  },
  {
    id: 'prasmanan-asian-fusion',
    name: 'Paket Prasmanan Modern Asian Fusion',
    tagline: 'Pilihan Elegan untuk Corporate Gathering & Resepsi',
    description: 'Perpaduan cita rasa modern Asia dan Western yang dirancang khusus untuk acara kantor prestisius, pameran, atau resepsi modern dengan sentuhan menu berkelas.',
    category: 'buffet',
    categoryLabel: 'Prasmanan / Buffet',
    price: 89000,
    formattedPrice: 'Rp89.000 / Pax',
    portionInfo: 'Min. Pemesanan 50 Pax',
    caloriesRange: '750–900 kcal',
    caloriesEstimate: 810,
    proteinEstimate: '42–52 g',
    carbsEstimate: '80–90 g',
    fatEstimate: '24–30 g',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80',
    badge: 'Premium Reception',
    ingredients: [
      'Nasi putih aromatik & Nasi butter parsley',
      'Beef yakiniku saus wijen lada hitam lembut',
      'Fillet ikan dori krispi saus asam manis nanas',
      'Ayam panggang oven saus herbal rosemary',
      'Sup jagung kepiting asparagus kental hangat',
      'Salad sayur campur dressing roasted sesame jepang',
      'Aneka puding silky cokelat & mango serta es jeruk selasih'
    ],
    features: [
      'Set meja buffet premium dengan penataan modern minimalis',
      'Peralatan makan dining lengkap bintang lima',
      'Staf banquet profesional melayani tamu undangan',
      'Free refill air mineral & es teh manis dingin'
    ],
    nutritionNote: 'Disukai kalangan profesional dan tamu kehormatan dengan kombinasi daging sapi premium, ikan laut lembut, dan ayam bakar herbal.'
  },
  {
    id: 'snack-box-rapat-premium',
    name: 'Snack Box Rapat & Seminar Premium',
    tagline: 'Kombinasi Kue Tradisional & Modern Berkualitas',
    description: 'Solusi praktis untuk jeda istirahat rapat kerja (coffee break), seminar, pengajian, atau workshop. Komposisi seimbang antara kue asin-gurih dan kue manis lembut.',
    category: 'snack',
    categoryLabel: 'Snack Box & Kudapan',
    price: 18000,
    formattedPrice: 'Rp18.000 / Box',
    portionInfo: 'Min. Pemesanan 20 Box',
    caloriesRange: '350–450 kcal',
    caloriesEstimate: 390,
    proteinEstimate: '10–14 g',
    carbsEstimate: '50–60 g',
    fatEstimate: '12–16 g',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80',
    badge: 'Best Seller Coffee Break',
    ingredients: [
      'Risoles ragout ayam suwir wortel creamy lembut',
      'Pastel sayur telur renyah gurih',
      'Fudge brownies cokelat almond legit',
      'Air mineral cup 220ml segar'
    ],
    features: [
      'Box kraft estetik dengan sekat pemisah higienis',
      'Setiap kue dibungkus plastik OPP food-grade rapi',
      'Bahan mentega & tepung berkualitas tanpa pemanis buatan',
      'Tiba tepat waktu sebelum sesi rehat dimulai'
    ],
    nutritionNote: 'Kombinasi kalori ringan yang pas untuk mengembalikan fokus kerja dan stamina peserta acara tanpa menyebabkan kantuk.'
  },
  {
    id: 'tumpeng-kuning-komplit-syukuran',
    name: 'Tumpeng Kuning Komplit Syukuran',
    tagline: 'Centerpiece Agung Simbol Keberkahan Acara',
    description: 'Mahakarya tumpeng kuning bertingkat yang dihias cantik dengan ukiran sayuran segar. Pilihan utama untuk acara peresmian kantor baru, ulang tahun, syukuran rumah baru, atau peluncuran produk.',
    category: 'tumpeng',
    categoryLabel: 'Tumpeng & Hantaran',
    price: 750000,
    formattedPrice: 'Rp750.000 / Tampah',
    portionInfo: 'Porsi 20–25 Orang',
    caloriesRange: '650–800 kcal / porsi',
    caloriesEstimate: 720,
    proteinEstimate: '35–42 g',
    carbsEstimate: '85–95 g',
    fatEstimate: '20–26 g',
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=1000&q=80',
    badge: 'Centerpiece Acara',
    ingredients: [
      'Tumpeng nasi kuning pulen santan kunyit asli (20–25 porsi)',
      'Ayam goreng lengkuas rempah (20–25 potong)',
      'Telur balado merah pedas manis (20 butir)',
      'Perkedel kentang daging sapi lembut (20 pcs)',
      'Orek tempe kering manis kacang tanah renyah',
      'Mie goreng jawa sayur bakso gurih',
      'Sambal bajak matang & ukiran hiasan cabai, wortel, timun'
    ],
    features: [
      'Disajikan di tampah anyaman bambu beralas daun pisang artistik',
      'Bonus pisau pemotong tumpeng & centong saji',
      'Free kartu ucapan kustom nama acara atau perusahaan',
      'Pengantaran khusus dengan packaging pelindung transparan aman'
    ],
    nutritionNote: 'Sajian lengkap sarat tradisi dengan lauk pauk melimpah yang memuaskan seluruh tamu kehormatan.'
  },
  {
    id: 'tumpeng-mini-pax',
    name: 'Tumpeng Mini Eksklusif Box Mika',
    tagline: 'Praktis & Mewah untuk Hantaran Tamu Undangan',
    description: 'Sentuhan personal untuk setiap tamu dengan tumpeng kuning mini kerucut dalam wadah mika bening tebal eksklusif. Tamu dapat menikmati langsung atau membawanya pulang sebagai berkat syukuran.',
    category: 'tumpeng',
    categoryLabel: 'Tumpeng & Hantaran',
    price: 45000,
    formattedPrice: 'Rp45.000 / Box',
    portionInfo: 'Min. Pemesanan 15 Box',
    caloriesRange: '600–700 kcal',
    caloriesEstimate: 640,
    proteinEstimate: '30–35 g',
    carbsEstimate: '75–85 g',
    fatEstimate: '18–22 g',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1000&q=80',
    badge: 'Hantaran Tamu',
    ingredients: [
      'Nasi kuning kerucut mini gurih harum',
      'Ayam suwir bumbu rujak manis gurih',
      'Telur rawis iris tipis berlimpah',
      'Perkedel kentang lembut',
      'Kering tempe manis & kentang balado',
      'Sambal goreng bajak dalam wadah terpisah'
    ],
    features: [
      'Wadah mika bulat kokoh dengan tutup rapat bening',
      'Stiker label custom nama syukuran / acara gratis',
      'Sendok garpu higienis di dalam setiap box',
      'Praktis untuk dibagikan ke tetangga atau relasi kerja'
    ],
    nutritionNote: 'Porsi compact dengan cita rasa komplit dan tampilan visual yang sangat menarik untuk dokumentasi acara.'
  },
  {
    id: 'bento-box-japanese',
    name: 'Bento Box Japanese Teriyaki',
    tagline: 'Pilihan Modern Favorit Anak Muda & Rekan Kerja',
    description: 'Inovasi menu bento bergaya Jepang dengan pilihan chicken katsu saus teriyaki dan beef yakiniku gurih. Menjadi alternatif kekinian untuk acara kampus, komunitas kreatif, dan gathering kantor muda.',
    category: 'box',
    categoryLabel: 'Nasi Kotak & Bento',
    price: 42000,
    formattedPrice: 'Rp42.000 / Box',
    portionInfo: 'Min. Pemesanan 15 Box',
    caloriesRange: '620–720 kcal',
    caloriesEstimate: 660,
    proteinEstimate: '35–40 g',
    carbsEstimate: '75–85 g',
    fatEstimate: '20–25 g',
    image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=1000&q=80',
    badge: 'Modern Bento',
    ingredients: [
      'Nasi jepang pulen tabur nori & wijen sangrai',
      'Chicken katsu krispi saus teriyaki gurih manis',
      'Beef slice yakiniku bumbu bawang bombay harum',
      'Salad kol & wortel segar khas bento jepang',
      'Dressing mayo wijen jepang & saus sambal'
    ],
    features: [
      'Box bento sekat eksklusif warna merah-hitam elegan',
      'Sumpit kayu higienis & sendok makan berkualitas',
      'Daging sapi impor pilihan tekstur empuk',
      'Digemari oleh audiens milenial dan Gen Z'
    ],
    nutritionNote: 'Menu kaya protein hewani ganda dengan saus teriyaki manis gurih yang bersahabat di lidah semua umur.'
  }
];

export const sampleMenuExample = {
  name: 'Paket Nasi Kotak Ayam Bakar Madu Spesial',
  category: 'Nasi Kotak Acara & Rapat',
  calories: 650,
  protein: 36,
  carbohydrates: 80,
  fat: 20,
  portionInfo: 'Porsi Kenyang Dewasa • Min. 15 Box',
  composition: [
    'Nasi putih pulen wangi daun pandan',
    'Ayam bakar madu karamelisasi rempah kelapa',
    'Tahu & tempe bacem gurih legit',
    'Lalapan segar timun & daun kemangi bersih',
    'Sambal terasi bajak matang pedas mantap',
    'Kerupuk udang renyah, sendok, garpu & tisu higienis'
  ],
  note: 'Porsi dirancang pas dan mengenyangkan untuk kebutuhan makan siang atau makan malam acara formal maupun keluarga.'
};
