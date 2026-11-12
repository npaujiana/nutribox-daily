# Nutribox Catering

Web katalog dan pemesanan layanan katering acara (prasmanan, nasi kotak, tumpeng, snack box) untuk area BSD City & Jabodetabek, dilengkapi estimasi nutrisi/kalori dan generator pemesanan WhatsApp otomatis.

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React

## Fitur Utama

- **Katalog Menu & Paket:** Pilihan nasi kotak, buffet prasmanan, snack box rapat, dan tumpeng syukuran lengkap dengan komposisi menu dan harga.
- **Kalender Rotasi Menu:** Jadwal menu mingguan untuk perencanaan katering rutin.
- **Kalkulator Porsi & Kalori:** Alat bantu estimasi porsi dan kebutuhan kalori per peserta acara.
- **WhatsApp Order Generator:** Otomasi format pesan WhatsApp terstruktur berdasarkan pilihan item, jumlah porsi, dan tanggal acara.
- **Panel Konfigurasi Operasional:** Pengaturan kontak WhatsApp, radius area antar, dan jam kerja dapur.

## Menjalankan Project

### Prasyarat
- Node.js (v18 ke atas)
- npm / pnpm / yarn

### Instalasi & Menjalankan Dev Server

```bash
# Install dependensi
npm install

# Jalankan server development
npm run dev
```

Buka `http://localhost:5173` pada browser.

### Build Production

```bash
# Type-check dan build bundle
npm run build

# Preview hasil build
npm run preview
```

## Struktur Direktori

```text
src/
├── components/     # Komponen UI (katalog, kalender, kalkulator, navigasi, dll.)
├── data/           # Master data produk, paket, jadwal menu, dan konfigurasi
├── types/          # Definisi tipe TypeScript
└── utils/          # Helper fungsi (format WhatsApp, string formatting)
```
