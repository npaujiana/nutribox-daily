import React, { useState } from 'react';
import { UtensilsCrossed, Clock, MapPin, Settings, ArrowUpRight } from 'lucide-react';
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
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl text-white">
                {config.brandName || 'Nutribox Catering'}
              </span>
            </div>
            <p className="text-xs text-sage leading-relaxed">
              Spesialis layanan katering acara, prasmanan, nasi kotak bento, tumpeng syukuran, dan snack box rapat untuk area BSD City, Tangerang Selatan, hingga seluruh Jabodetabek.
            </p>
            <div className="text-xs text-sage">
              <span>Berpengalaman melayani ratusan acara sejak 2023</span>
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
                  Katalog menu acara
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('calendar')} className="hover:text-white active:scale-[0.99] disabled:opacity-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf rounded-md whitespace-nowrap cursor-pointer">
                  Jadwal menu & ketersediaan
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('subscription')} className="hover:text-white active:scale-[0.99] disabled:opacity-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf rounded-md whitespace-nowrap cursor-pointer">
                  Paket katering acara
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('calculator')} className="hover:text-white active:scale-[0.99] disabled:opacity-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf rounded-md whitespace-nowrap cursor-pointer">
                  Kalkulator budget acara
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('about')} className="hover:text-white active:scale-[0.99] disabled:opacity-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf rounded-md whitespace-nowrap cursor-pointer">
                  Tentang Kami
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
                  <p className="text-white font-medium">Pengiriman acara:</p>
                  <p>Setiap Hari: Tiba H-1 Jam Sebelum Acara</p>
                  <p className="text-xs text-sage">Buka Sabtu, Minggu & Hari Libur Nasional</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-leaf shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Cakupan wilayah:</p>
                  <p>BSD City, Serpong, Gading Serpong, Alam Sutera, Bintaro, Tangerang, Jakarta & sekitarnya.</p>
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
              <p className="text-white font-semibold">Central Production Kitchen</p>
              <p>BSD City, Serpong, Tangerang Selatan, Banten, Indonesia.</p>
              <p className="text-xs text-sage">
                Fasilitas dapur produksi skala besar untuk katering acara, prasmanan, dan nasi kotak higienis.
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
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-paper-elevated/10 text-white hover:bg-white hover:text-forest active:scale-[0.99] disabled:opacity-50 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
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
          <p>© {new Date().getFullYear()} {config.brandName || 'Nutribox Catering'}. Hak cipta dilindungi undang-undang.</p>
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
              Ketentuan layanan acara
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
              {legalModal === 'privacy' ? 'Kebijakan privasi' : 'Ketentuan layanan katering acara'}
            </h3>
            {legalModal === 'privacy' ? (
              <div className="space-y-2.5 text-ink-2">
                <p>
                  Kami menghormati privasi setiap pelanggan. Data jumlah tamu dan parameter yang Anda masukkan di kalkulator acara diproses secara lokal di browser perangkat Anda tanpa penyimpanan data rahasia di server luar.
                </p>
                <p>
                  Data kontak (nama, nomor telepon, alamat venue acara) hanya digunakan untuk keperluan komunikasi pemesanan, pengiriman invoice resmi, dan koordinasi staf pengantaran katering.
                </p>
              </div>
            ) : (
              <div className="space-y-2.5 text-ink-2">
                <p>
                  1. Pemesanan Nasi Kotak & Snack Box ditutup H-1 pukul 17.00 WIB. Pemesanan Prasmanan & Tumpeng disarankan booking H-3 sampai H-7 sebelum acara.
                </p>
                <p>
                  2. Slot tanggal acara dan jadwal produksi resmi terkunci setelah verifikasi DP 50% diterima. Pelunasan dilakukan H-1 sebelum tanggal pengantaran.
                </p>
                <p>
                  3. Seluruh bahan makanan dijamin 100% Halal dan diolah secara higienis di Central Production Kitchen BSD City.
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
