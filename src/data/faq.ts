import { FAQItem } from '../types';

export const faqData: FAQItem[] = [
  // A. Produk dan Layanan Acara
  {
    id: 'faq-prod-1',
    category: 'product',
    question: 'Layanan katering apa saja yang disediakan?',
    answer: 'Kami melayani berbagai kebutuhan katering acara: Nasi Kotak (Bento Box sekat anti-tumpah), Prasmanan Lengkap (Buffet lengkap dengan meja bercover, pemanas roll-top, dan staf pramusaji), Snack Box & Coffee Break rapat, serta Tumpeng Syukuran tampah maupun Tumpeng Mini hantaran.'
  },
  {
    id: 'faq-prod-2',
    category: 'product',
    question: 'Berapa minimal pemesanan (minimum order) untuk setiap layanan?',
    answer: 'Minimal pemesanan sangat terjangkau: Nasi Kotak minimal 15 box, Snack Box minimal 20 box, Tumpeng Mini minimal 15 box, Tumpeng Besar Tampah minimal 1 tampah (20–25 porsi), dan Paket Prasmanan Buffet minimal 50 pax.'
  },
  {
    id: 'faq-prod-3',
    category: 'product',
    question: 'Apakah bisa melakukan tes makanan (food tasting) sebelum acara?',
    answer: 'Bisa. Untuk pemesanan acara di atas 100 pax (misalnya resepsi pernikahan atau corporate gathering), kami menyediakan sesi food tasting dengan sistem sampel menu yang dapat dikirimkan ke alamat Anda atau dicicipi langsung dengan perjanjian sebelumnya.'
  },
  {
    id: 'faq-prod-4',
    category: 'product',
    question: 'Apakah menu makanan bisa dikustomisasi sesuai tema acara?',
    answer: 'Tentu bisa. Anda bebas mengkombinasikan lauk utama, jenis sayuran, sambal, atau hidangan penutup sesuai selera keluarga atau audiens acara. Tim konsultan katering kami siap memberikan saran paduan menu terbaik yang disukai tamu.'
  },
  {
    id: 'faq-prod-5',
    category: 'product',
    question: 'Apakah semua makanan dijamin 100% Halal dan Higienis?',
    answer: 'Ya, seluruh bahan baku dan proses pengolahan kami terjamin 100% Halal. Dapur pusat kami menerapkan standar kebersihan tinggi dengan pemisahan area potong daging, sayuran segar, dan sterilisasi peralatan makan.'
  },

  // B. Paket dan Pembayaran
  {
    id: 'faq-plan-1',
    category: 'plans',
    question: 'Bagaimana sistem pembayaran untuk pemesanan acara?',
    answer: 'Untuk mengunci tanggal acara dan jadwal produksi, pemesan cukup membayar Uang Muka (DP) sebesar 50% saat konfirmasi. Sisa pelunasan 50% dapat dilakukan maksimal H-1 sebelum tanggal pengantaran acara.'
  },
  {
    id: 'faq-plan-2',
    category: 'plans',
    question: 'Metode pembayaran apa saja yang diterima?',
    answer: 'Kami menerima pembayaran melalui Transfer Bank BCA, Mandiri, BNI, BRI, serta QRIS resmi perusahaan. Untuk kebutuhan instansi atau perusahaan (B2B / Corporate), kami juga menyediakan Invoice resmi, Kwitansi bertanda tangan, dan faktur pajak bila dibutuhkan.'
  },
  {
    id: 'faq-plan-3',
    category: 'plans',
    question: 'Apakah harga prasmanan sudah termasuk peralatan makan dan staf pelayan?',
    answer: 'Ya. Paket Prasmanan kami sudah ALL-IN: termasuk meja buffet bercover rapi, chafing dish pemanas roll-top stainless steel, piring keramik, sendok-garpu, gelas, taplak meja dekoratif, dan staf pramusaji berseragam yang standby melayani tamu selama acara.'
  },
  {
    id: 'faq-plan-4',
    category: 'plans',
    question: 'Apakah ada diskon untuk pesanan dalam jumlah besar?',
    answer: 'Ya. Kami memiliki skema harga khusus volume besar untuk pemesanan nasi kotak di atas 100 box atau prasmanan di atas 150 pax. Hubungi tim marketing kami via WhatsApp untuk mendapatkan penawaran harga terbaik.'
  },

  // C. Pengiriman & Pengaturan Lokasi
  {
    id: 'faq-del-1',
    category: 'delivery',
    question: 'Area mana saja yang dijangkau pengiriman?',
    answer: 'Dapur pusat kami berlokasi di BSD City, Tangerang Selatan. Kami melayani pengantaran ke seluruh kawasan Tangerang Selatan, Tangerang Kota, Kabupaten Tangerang, Jakarta Selatan, Jakarta Barat, Jakarta Pusat, hingga Depok dan Bogor.'
  },
  {
    id: 'faq-del-2',
    category: 'delivery',
    question: 'Kapan makanan tiba di lokasi acara?',
    answer: 'Kami memberikan Garansi Tepat Waktu: Untuk Nasi Kotak & Snack Box, kurir kami tiba H-1 jam sebelum acara dimulai. Untuk Prasmanan (Buffet), tim dekorasi dan pramusaji kami tiba H-2 jam sebelum acara untuk menata meja saji dan memanaskan makanan agar siap tepat saat tamu hadir.'
  },
  {
    id: 'faq-del-3',
    category: 'delivery',
    question: 'Apakah melayani pengiriman di hari Minggu atau Hari Libur Nasional?',
    answer: 'Ya! Layanan katering acara kami beroperasi penuh 7 hari seminggu termasuk hari Sabtu, Minggu, dan hari libur nasional karena sebagian besar momen syukuran dan pernikahan berlangsung di akhir pekan.'
  },
  {
    id: 'faq-del-4',
    category: 'delivery',
    question: 'Bagaimana dengan penataan meja prasmanan di gedung atau rumah?',
    answer: 'Tim banquet kami akan membawa seluruh perlengkapan meja, pemanas, dan alat saji. Anda cukup menyediakan space atau ruangan yang ditentukan, dan tim kami yang akan menata semuanya secara estetik dan rapi.'
  },

  // D. Pemesanan & Batas Waktu
  {
    id: 'faq-ord-1',
    category: 'order',
    question: 'Berapa hari sebelumnya saya harus memesan?',
    answer: 'Untuk Nasi Kotak & Snack Box: minimal pemesanan H-1 (maksimal pukul 17.00 WIB). Untuk Tumpeng & Tumpeng Mini: minimal H-2. Untuk Prasmanan (Buffet): disarankan booking minimal H-3 sampai H-7 sebelum acara untuk memastikan ketersediaan set pemanas dan staf pramusaji.'
  },
  {
    id: 'faq-ord-2',
    category: 'order',
    question: 'Bagaimana jika ada penambahan porsi mendadak?',
    answer: 'Penambahan porsi nasi kotak atau prasmanan dapat diakomodasi maksimal hingga H-1 pukul 12.00 WIB selama kapasitas dapur kami di hari tersebut masih memungkinkan.'
  },
  {
    id: 'faq-ord-3',
    category: 'order',
    question: 'Bagaimana kebijakan jika acara harus dijadwalkan ulang (reschedule)?',
    answer: 'Jadwal acara dapat dipindahkan ke tanggal lain tanpa biaya tambahan selama konfirmasi dilakukan minimal H-3 sebelum tanggal acara awal dan tanggal baru yang dipilih masih tersedia slot produksinya.'
  },

  // E. Alergi dan Permintaan Khusus
  {
    id: 'faq-alg-1',
    category: 'allergy',
    question: 'Apakah bisa memesan porsi khusus vegetarian atau tanpa seafood?',
    answer: 'Bisa. Dari total pesanan acara Anda, Anda dapat mengalokasikan beberapa box atau menu buffet khusus (misalnya 5 porsi vegetarian atau tanpa udang) untuk mengakomodasi tamu yang memiliki preferensi pola makan tertentu.'
  },
  {
    id: 'faq-alg-2',
    category: 'allergy',
    question: 'Apakah tingkat kepedasan sambal bisa disesuaikan?',
    answer: 'Bisa. Anda dapat memilih tingkat kepedasan sambal (pedas sedang, pedas ekstra, atau sambal manis ramah anak). Untuk nasi kotak, sambal kami kemas terpisah dalam wadah klip sehingga tamu dapat menuangkannya sesuai selera.'
  }
];
