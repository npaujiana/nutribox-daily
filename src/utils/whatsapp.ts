import { BusinessConfig } from '../types';

export interface WhatsAppMessagePayload {
  type: 'product' | 'plan' | 'calculator' | 'calendar' | 'general';
  productName?: string;
  price?: string;
  planName?: string;
  duration?: string;
  category?: string;
  preferences?: string;
  addons?: string;
  calculatorGoal?: string;
  calculatedCalories?: number;
  selectedDate?: string;
  customMessage?: string;
}

export function formatWhatsAppMessage(payload: WhatsAppMessagePayload): string {
  if (payload.customMessage) {
    return payload.customMessage;
  }

  if (payload.type === 'plan') {
    return `Halo NutriBox Daily, saya ingin memesan paket berikut:

Nama Paket: ${payload.planName || 'Paket Katering'}
Durasi: ${payload.duration || 'Weekly Fit Plan (5 Hari)'}
Kategori: ${payload.category || 'Daily Balance'}
Preferensi: ${payload.preferences || 'Standar (Sesuai Menu Hari Ini)'}
Tambahan: ${payload.addons || 'Tidak ada'}

Mohon informasi mengenai ketersediaan menu, jadwal pengiriman, dan total pembayaran.

Terima kasih.`;
  }

  if (payload.type === 'product') {
    return `Halo NutriBox Daily, saya tertarik dengan produk berikut:

Produk: ${payload.productName || 'Daily Balance Box'}
Harga: ${payload.price || 'Rp49.000'}

Mohon informasi ketersediaan menu dan jadwal pengiriman.

Terima kasih.`;
  }

  if (payload.type === 'calculator') {
    return `Halo NutriBox Daily, saya ingin berkonsultasi mengenai pilihan meal box berdasarkan hasil kalkulator kalori:

Estimasi Kebutuhan Kalori: ${payload.calculatedCalories ? `${payload.calculatedCalories} kcal/hari` : 'Belum dihitung'}
Target Pola Makan: ${payload.calculatorGoal || 'Menjaga Berat Badan'}
Kategori yang ingin saya ketahui: ${payload.category || 'Daily Balance Box'}

Mohon informasi paket dan rekomendasi menu yang sesuai untuk saya.

Terima kasih.`;
  }

  if (payload.type === 'calendar') {
    return `Halo NutriBox Daily, saya ingin menanyakan ketersediaan menu untuk tanggal:

Tanggal: ${payload.selectedDate || 'Minggu ini'}
Menu: ${payload.productName || 'Rotasi Menu Harian'}

Apakah kuota pengiriman untuk tanggal tersebut masih tersedia?

Terima kasih.`;
  }

  return `Halo NutriBox Daily, saya ingin menanyakan informasi layanan katering sehat dan jadwal menu untuk area pengiriman BSD / Tangsel.

Terima kasih.`;
}

export function buildWhatsAppUrl(number: string, message: string): string {
  // Clean phone number: remove +, spaces, dashes
  const cleanNumber = number.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}
