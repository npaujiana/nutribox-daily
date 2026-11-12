import { BusinessConfig } from '../types';

export interface WhatsAppMessagePayload {
  type: 'product' | 'plan' | 'calculator' | 'calendar' | 'general';
  productName?: string;
  price?: string;
  planName?: string;
  duration?: string;
  category?: string;
  paxCount?: number;
  eventType?: string;
  serviceType?: string;
  preferences?: string;
  addons?: string;
  calculatedBudget?: string;
  selectedDate?: string;
  customMessage?: string;
}

export function formatWhatsAppMessage(payload: WhatsAppMessagePayload): string {
  if (payload.customMessage) {
    return payload.customMessage;
  }

  if (payload.type === 'plan') {
    return `Halo Nutribox Catering, saya ingin memesan paket acara berikut:

Paket: ${payload.planName || 'Paket Katering Acara'}
Skala / Kategori: ${payload.duration || 'Acara Kantor & Komunitas (30–75 Pax)'}
Jumlah Tamu: ${payload.paxCount ? `${payload.paxCount} Pax / Box` : '50 Pax'}
Preferensi Menu: ${payload.preferences || 'Menu Standar Populer'}
Tambahan / Add-ons: ${payload.addons || 'Tidak ada'}

Mohon informasi ketersediaan slot tanggal acara, rincian menu, dan prosedur booking.

Terima kasih.`;
  }

  if (payload.type === 'product') {
    return `Halo Nutribox Catering, saya tertarik dengan menu acara berikut:

Menu: ${payload.productName || 'Nasi Kotak Ayam Bakar Madu Spesial'}
Harga: ${payload.price || 'Rp35.000'}

Mohon informasi mengenai minimal pemesanan, ketersediaan untuk tanggal acara saya, dan biaya pengantaran.

Terima kasih.`;
  }

  if (payload.type === 'calculator') {
    return `Halo Nutribox Catering, saya ingin berkonsultasi mengenai pesanan acara berdasarkan hasil kalkulator estimasi:

Jenis Acara: ${payload.eventType || 'Syukuran / Rapat Kantor'}
Format Sajian: ${payload.serviceType || 'Nasi Kotak / Prasmanan'}
Jumlah Tamu (Pax): ${payload.paxCount ? `${payload.paxCount} Pax` : '50 Pax'}
Pilihan Menu / Paket: ${payload.category || 'Paket Favorit'}
Estimasi Total Anggaran: ${payload.calculatedBudget || '-'}

Mohon informasi ketersediaan tanggal dan saran menu terbaik untuk acara kami.

Terima kasih.`;
  }

  if (payload.type === 'calendar') {
    return `Halo Nutribox Catering, saya ingin menanyakan ketersediaan slot katering untuk tanggal:

Tanggal Acara: ${payload.selectedDate || 'Bulan ini'}
Menu Pilihan: ${payload.productName || 'Menu Rekomendasi Acara'}

Apakah kuota pemesanan dan pengantaran untuk tanggal tersebut masih tersedia?

Terima kasih.`;
  }

  return `Halo Nutribox Catering, saya ingin menanyakan informasi pemesanan katering acara (nasi kotak / prasmanan / snack box / tumpeng) untuk area BSD City & Jabodetabek.

Terima kasih.`;
}

export function buildWhatsAppUrl(number: string, message: string): string {
  // Clean phone number: remove +, spaces, dashes
  const cleanNumber = number.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}
