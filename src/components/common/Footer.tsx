import React, { useState } from 'react';
import { Leaf, Clock, MapPin, Settings, ArrowUpRight } from 'lucide-react';
import { BusinessConfig } from '../../types';

interface FooterProps {
  onNavigate: (tabId: string) => void;
  onOpenConfig: () => void;
  config: BusinessConfig;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConfig, config }) => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const handleNav = (tabId: string) => {
    onNavigate(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest text-mint pt-16 pb-12 border-t border-rule-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-rule-subtle">
          {/* Brand Info */}
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-leaf flex items-center justify-center text-forest shadow-xs">
                <Leaf className="w-5 h-5" />
              </div>
              <span className="font-display font-black text-2xl text-white">
                Nutri<span className="text-leaf">Box</span> <span className="text-sm font-normal text-sage">Daily</span>
              </span>
            </div>
            <p className="text-xs text-sage leading-relaxed">
              Healthy meals made practical for your everyday routine. Katering makan siang sehat dengan rotasi menu berganti setiap minggu, estimasi nutrisi terukur, dan pengiriman tepat waktu di area BSD City dan Tangerang Selatan.
            </p>
            <div className="text-xs text-sage">
              <span>Beroperasi secara komersial sejak 2025</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="text-left">
            <h3 className="font-display font-bold text-sm text-white mb-4">
              Jelajahi menu dan fitur
            </h3>
            <ul className="space-y-2 text-xs text-sage">
              <li>
                <button type="button" onClick={() => handleNav('catalog')} className="hover:text-white active:scale-[0.99] disabled:opacity-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf rounded-md whitespace-nowrap cursor-pointer">
                  Katalog meal box
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('calendar')} className="hover:text-white active:scale-[0.99] disabled:opacity-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf rounded-md whitespace-nowrap cursor-pointer">
                  Kalender menu mingguan
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('subscription')} className="hover:text-white active:scale-[0.99] disabled:opacity-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf rounded-md whitespace-nowrap cursor-pointer">
                  Paket langganan katering
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('calculator')} className="hover:text-white active:scale-[0.99] disabled:opacity-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf rounded-md whitespace-nowrap cursor-pointer">
                  Kalkulator kalori
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('about')} className="hover:text-white active:scale-[0.99] disabled:opacity-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf rounded-md whitespace-nowrap cursor-pointer">
                  Tentang NutriBox Daily
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('faq')} className="hover:text-white active:scale-[0.99] disabled:opacity-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf rounded-md whitespace-nowrap cursor-pointer">
                  Pertanyaan umum (FAQ)
                </button>
              </li>
            </ul>
          </div>

          {/* Service Area & Operational */}
          <div className="text-left">
            <h3 className="font-display font-bold text-sm text-white mb-4">
              Jadwal dan area layanan
            </h3>
            <div className="space-y-3 text-xs text-sage">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-leaf shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Pengiriman reguler:</p>
                  <p>Senin sampai Jumat: 10.30 sampai 11.45 WIB</p>
                  <p className="text-xs text-sage">Sabtu, Minggu dan libur nasional: tutup</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-leaf shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Cakupan wilayah:</p>
                  <p>BSD City, Serpong, Gading Serpong, Alam Sutera, Bintaro, Ciputat, Pamulang.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Production Kitchen & Contact */}
          <div className="text-left">
            <h3 className="font-display font-bold text-sm text-white mb-4">
              Dapur produksi
            </h3>
            <div className="space-y-2.5 text-xs text-sage">
              <p className="text-white font-semibold">NutriBox Daily Production Kitchen</p>
              <p>BSD City, Serpong, Tangerang Selatan, Banten, Indonesia.</p>
              <p className="text-xs text-sage">
                Fasilitas dapur produksi tertutup untuk meal preparation dan pengiriman katering.
              </p>
              <div className="pt-2">
                <a
                  href={config.location.mapsQueryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-citrus hover:underline font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf rounded-md"
                >
                  <span>Pencarian kawasan di Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenConfig}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-paper-elevated/10 text-white hover:bg-leaf hover:text-forest active:scale-[0.99] disabled:opacity-50 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf cursor-pointer"
                >
                  <Settings className="w-3.5 h-3.5" />
                  <span>Pengaturan kontak bisnis</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-sage">
          <p>© {new Date().getFullYear()} NutriBox Daily. Hak cipta dilindungi undang-undang.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-accent-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fresh rounded-sm"
            >
              Kebijakan privasi
            </button>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-accent-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fresh rounded-sm"
            >
              Ketentuan layanan
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="hover:text-accent-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fresh rounded-sm"
            >
              Pusat bantuan
            </button>
          </div>
        </div>
      </div>

      {/* Simple Legal Modal for Transparency */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest/80">
          <div className="bg-paper text-ink max-w-lg w-full rounded-card p-6 shadow-xl relative max-h-[80vh] overflow-y-auto text-xs leading-relaxed">
            <h3 className="text-base font-bold text-forest font-display mb-3">
              {legalModal === 'privacy' ? 'Kebijakan privasi' : 'Ketentuan layanan NutriBox Daily'}
            </h3>
            {legalModal === 'privacy' ? (
              <div className="space-y-2.5 text-ink-2">
                <p>
                  NutriBox Daily menghormati privasi setiap pelanggan. Data berat badan, tinggi badan, dan usia yang Anda masukkan di kalkulator kalori diproses secara eksklusif pada browser perangkat Anda (client-side) dan tidak dikirim ke server penyimpanan kami.
                </p>
                <p>
                  Data kontak (nama, nomor telepon, alamat pengiriman) hanya digunakan oleh tim customer service kami untuk keperluan pemrosesan pesanan katering dan koordinasi pengantaran kurir harian.
                </p>
              </div>
            ) : (
              <div className="space-y-2.5 text-ink-2">
                <p>
                  1. Pre-order ditutup H-1 pukul 17.00 WIB. Pesanan baru resmi diproses setelah pembayaran terverifikasi.
                </p>
                <p>
                  2. Nilai nutrisi kalori, protein, karbohidrat, dan lemak yang tercantum pada menu merupakan estimasi berdasarkan resep standar dan dapat mengalami variasi alami.
                </p>
                <p>
                  3. Dapur produksi belum bersertifikat bebas alergen total. Pelanggan wajib menginformasikan alergi bahan pangan saat konfirmasi pemesanan.
                </p>
              </div>
            )}
            <div className="mt-5 text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 bg-forest text-accent-ink rounded-card-sm font-semibold hover:bg-forest-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fresh"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
