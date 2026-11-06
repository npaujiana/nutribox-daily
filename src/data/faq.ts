import { FAQItem } from '../types';

export const faqData: FAQItem[] = [
  // A. Produk dan Menu
  {
    id: 'faq-prod-1',
    category: 'product',
    question: 'Apa itu NutriBox Daily?',
    answer: 'NutriBox Daily adalah layanan katering makan siang sehat (Healthy Meal Catering) berbasis di BSD City, Tangerang Selatan. Kami menyediakan makanan praktis dengan rotasi menu berganti setiap minggu, estimasi nutrisi transparan, tanpa penambahan MSG, dan pengiriman tepat waktu sebelum jam makan siang.'
  },
  {
    id: 'faq-prod-2',
    category: 'product',
    question: 'Apakah menu NutriBox Daily berganti setiap minggu?',
    answer: 'Ya, benar. Menu kami selalu berganti setiap minggu agar pelanggan mendapatkan variasi makanan yang beragam dan tidak monoton. Daftar rotasi menu mingguan diumumkan setiap Jumat sore pukul 17.00 WIB untuk periode minggu berikutnya.'
  },
  {
    id: 'faq-prod-3',
    category: 'product',
    question: 'Apakah informasi kalori dan makronutrisi tersedia?',
    answer: 'Ya. Setiap kemasan box dan menu dilengkapi estimasi kalori, protein, karbohidrat, dan lemak. Nilai ini dihitung berdasarkan resep standar dan penimbangan bahan baku dapur produksi kami. Karena pengolahan segar harian, nilai aktual dapat mengalami sedikit variasi alami.'
  },
  {
    id: 'faq-prod-4',
    category: 'product',
    question: 'Apakah pelanggan dapat memilih menu sendiri?',
    answer: 'Pada sistem katering harian dan langganan, menu mengikuti jadwal rotasi hari tersebut sesuai kategori box yang Anda pilih (Daily Balance, Lean, Power Protein, atau Active Meal). Hal ini memastikan bahan baku selalu segar dimasak pada hari pengiriman.'
  },
  {
    id: 'faq-prod-5',
    category: 'product',
    question: 'Apakah tersedia pilihan tambahan (ekstra protein)?',
    answer: 'Ya, Anda dapat mengajukan permintaan tambahan porsi protein (seperti ekstra fillet dada ayam atau telur omega) saat melakukan pemesanan via WhatsApp. Ketersediaan dan estimasi biaya tambahan akan dikonfirmasikan oleh tim CS kami.'
  },
  {
    id: 'faq-prod-6',
    category: 'product',
    question: 'Apakah tersedia pilihan ukuran porsi yang berbeda?',
    answer: 'Ya, kami memiliki 4 kategori box dengan porsi dan densitas energi berbeda: Lean Box (350–450 kcal) untuk porsi lebih ringan, Daily Balance Box (450–550 kcal) untuk porsi seimbang standar, Power Protein Box (500–650 kcal) untuk protein lebih tinggi, dan Active Meal Box (550–700 kcal) untuk kebutuhan kalori lebih besar.'
  },

  // B. Paket dan Pembayaran
  {
    id: 'faq-plan-1',
    category: 'plans',
    question: 'Apakah bisa memesan untuk satu porsi saja (harian)?',
    answer: 'Bisa. Kami melayani pemesanan harian (single box) dengan harga satuan mulai dari Rp49.000 (Daily Balance), Rp52.000 (Lean), Rp62.000 (Power Protein), dan Rp59.000 (Active Meal), belum termasuk ongkos kirim ke alamat tujuan.'
  },
  {
    id: 'faq-plan-2',
    category: 'plans',
    question: 'Apa perbedaan antara Weekly Fit Plan dan Monthly Fit Plan?',
    answer: 'Weekly Fit Plan mencakup 5 hari makan siang (Senin–Jumat) dalam satu minggu berjalan dengan 5 variasi menu. Sementara Monthly Fit Plan mencakup 20 hari makan siang (4 minggu kerja, Senin–Jumat) dengan harga berlangganan khusus dan rotasi menu lengkap selama sebulan.'
  },
  {
    id: 'faq-plan-3',
    category: 'plans',
    question: 'Apakah harga paket sudah termasuk ongkos kirim?',
    answer: 'Harga paket yang tertera di website belum termasuk ongkos kirim. Ongkos kirim dihitung berdasarkan jarak rute kurir dari dapur produksi kami di BSD City ke lokasi pengantaran Anda, dan akan diinformasikan secara transparan sebelum pembayaran.'
  },
  {
    id: 'faq-plan-4',
    category: 'plans',
    question: 'Metode pembayaran apa saja yang diterima?',
    answer: 'Kami menerima pembayaran melalui Transfer Bank BCA, Transfer Bank Mandiri, QRIS (mendukung seluruh aplikasi m-banking dan e-wallet), GoPay, OVO, dan DANA.'
  },
  {
    id: 'faq-plan-5',
    category: 'plans',
    question: 'Apakah paket berlangganan harus dibayar di muka?',
    answer: 'Ya, seluruh pemesanan harian maupun paket berlangganan 5 hari dan 20 hari diselesaikan dengan pembayaran di muka sebelum jadwal produksi pertama dimulai, agar alokasi bahan baku segar dapat dipersiapkan secara presisi.'
  },

  // C. Pengiriman
  {
    id: 'faq-del-1',
    category: 'delivery',
    question: 'Area mana saja yang menjadi cakupan pengiriman NutriBox Daily?',
    answer: 'Area prioritas pengiriman harian kami meliputi BSD City, Serpong, Gading Serpong, Alam Sutera, dan Bintaro. Kami juga melayani area reguler di Ciputat, Pamulang, Pondok Aren, dan sebagian Tangerang Kota.'
  },
  {
    id: 'faq-del-2',
    category: 'delivery',
    question: 'Jam berapa makanan akan tiba di alamat saya?',
    answer: 'Jadwal pengiriman utama kami ditargetkan tiba antara pukul 10.30 hingga 11.45 WIB, sehingga makanan sudah siap dinikmati tepat sebelum waktu istirahat makan siang Anda.'
  },
  {
    id: 'faq-del-3',
    category: 'delivery',
    question: 'Apakah NutriBox Daily melayani pengiriman di akhir pekan?',
    answer: 'Tidak. Pengiriman reguler kami beroperasi hari Senin sampai Jumat. Pada hari Sabtu dapur tidak melakukan produksi/pengiriman reguler (hanya customer service), sedangkan hari Minggu dan hari libur nasional dapur kami tutup.'
  },
  {
    id: 'faq-del-4',
    category: 'delivery',
    question: 'Berapa estimasi biaya pengiriman?',
    answer: 'Biaya pengiriman bervariasi sesuai jarak dan rute pengantaran. Untuk rute tertentu di cluster perkantoran BSD City tersedia tarif flat atau bundling kurir. Hubungi CS via WhatsApp untuk mengecek tarif kurir ke titik alamat Anda.'
  },
  {
    id: 'faq-del-5',
    category: 'delivery',
    question: 'Apakah melayani area Jakarta Selatan atau Tangerang Raya lainnya?',
    answer: 'Pengiriman ke Jakarta Selatan (misal Pondok Indah, Cilandak) atau area Tangerang Raya luar harus dikonfirmasikan terlebih dahulu dengan tim CS untuk memastikan ketersediaan kurir dan estimasi waktu tiba.'
  },

  // D. Pemesanan
  {
    id: 'faq-ord-1',
    category: 'order',
    question: 'Bagaimana alur cara memesan NutriBox Daily?',
    answer: 'Pilih kategori box atau paket langganan yang Anda inginkan di website ini, lalu klik tombol "Pesan via WhatsApp". Sistem kami akan menyiapkan format rincian pesanan secara otomatis, dan tim kami akan segera memverifikasi ketersediaan menu, ongkir, serta konfirmasi pembayaran.'
  },
  {
    id: 'faq-ord-2',
    category: 'order',
    question: 'Kapan batas waktu (cutoff) pre-order?',
    answer: 'Batas waktu pre-order untuk pengiriman keesokan harinya adalah pukul 17.00 WIB pada hari sebelumnya (H-1). Pemesanan yang masuk setelah pukul 17.00 WIB akan diproses untuk hari kerja berikutnya.'
  },
  {
    id: 'faq-ord-3',
    category: 'order',
    question: 'Bagaimana ketentuan pembatalan pesanan harian?',
    answer: 'Pembatalan pesanan harian dapat dilakukan maksimal 24 jam sebelum jadwal pengiriman. Karena bahan baku segar mulai dipersiapkan dan dimasak sejak pagi hari (06.00 WIB), pembatalan setelah proses produksi dimulai tidak dapat memperoleh pengembalian dana.'
  },
  {
    id: 'faq-ord-4',
    category: 'order',
    question: 'Apakah bisa mengubah jadwal atau menjeda (pause) paket langganan?',
    answer: 'Bisa. Pelanggan Weekly Fit Plan atau Monthly Fit Plan dapat melakukan penyesuaian jadwal atau cuti makan (misal sedang WFH/dinas ke luar kota) dengan mengonfirmasikan kepada CS minimal 24 jam sebelumnya (maksimal pukul 12.00 WIB H-1).'
  },
  {
    id: 'faq-ord-5',
    category: 'order',
    question: 'Kapan pesanan saya dianggap resmi terkonfirmasi?',
    answer: 'Pesanan resmi terkonfirmasi setelah customer service NutriBox Daily memverifikasi rincian menu, alamat pengiriman, dan bukti pembayaran yang sah via WhatsApp.'
  },

  // E. Alergi dan Preferensi
  {
    id: 'faq-alg-1',
    category: 'allergy',
    question: 'Apakah saya bisa mengajukan permintaan menghindari bahan tertentu?',
    answer: 'Preferensi sederhana seperti "tanpa bawang daun", "sambal dipisah", atau "ganti nasi putih ke merah" dapat diakomodasi selama persediaan memungkinkan. Harap cantumkan catatan ini saat konfirmasi WhatsApp.'
  },
  {
    id: 'faq-alg-2',
    category: 'allergy',
    question: 'Apakah tersedia pilihan protein nabati / vegetarian?',
    answer: 'Fokus menu reguler kami saat ini berbasis protein hewani (dada ayam tanpa kulit, daging sapi tanpa lemak, fillet ikan, dan telur). Pilihan nabati seperti tempe, tahu, dan edamame hadir sebagai pelengkap komposisi sayuran.'
  },
  {
    id: 'faq-alg-3',
    category: 'allergy',
    question: 'Apakah makanan NutriBox Daily aman untuk semua jenis alergi makanan berat?',
    answer: 'Dapur produksi kami belum diklaim sebagai fasilitas bebas alergen (allergen-free kitchen). Seluruh makanan diolah di dapur yang sama dengan pengolahan kacang, telur, kedelai, dan seafood, sehingga risiko kontak silang (cross-contact) tetap ada. Harap informasikan alergi Anda sebelum memesan.'
  },
  {
    id: 'faq-alg-4',
    category: 'allergy',
    question: 'Apakah NutriBox Daily melayani diet medis khusus (klinis)?',
    answer: 'Tidak. NutriBox Daily menyediakan makanan sehat umum untuk masyarakat urban aktif. Kami tidak melayani kebutuhan diet medis klinis khusus (seperti gagal ginjal stadium akhir atau protokol medis rumah sakit) yang membutuhkan pengawasan medis terpersonalisasi.'
  }
];
