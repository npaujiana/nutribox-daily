import React, { useState } from 'react';
import { BusinessConfig } from '../../types';
import {
  MapPin,
  Clock,
  MessageSquare,
  ArrowUpRight,
  Settings,
} from 'lucide-react';

interface ContactPageProps {
  config: BusinessConfig;
  onOpenWhatsApp: (msg?: string) => void;
  onOpenConfig: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  config,
  onOpenWhatsApp,
  onOpenConfig,
}) => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryArea, setInquiryArea] = useState('');
  const [inquiryTopic, setInquiryTopic] = useState('Pemesanan Katering Harian');
  const [inquiryMessage, setInquiryMessage] = useState('');

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = `Halo NutriBox Daily, saya ingin berkonsultasi mengenai layanan katering:

Nama: ${inquiryName || 'Pelanggan'}
Wilayah/Alamat: ${inquiryArea || 'BSD City & Tangsel'}
Topik: ${inquiryTopic}
Catatan Tambahan: ${inquiryMessage || '-'}

Mohon informasi dan panduan selanjutnya. Terima kasih.`;

    onOpenWhatsApp(formatted);
  };

  return (
    <div className="pt-28 pb-20 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="max-w-3xl mb-12 text-left">
          <span className="text-xs font-semibold text-leaf mb-2 block">
            Hubungi NutriBox Daily
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-forest tracking-tight">
            Let’s make your lunch better.
          </h1>
          <p className="mt-3 text-base sm:text-lg text-ink-muted leading-relaxed">
            Ada pertanyaan tentang menu, paket langganan, atau jangkauan kurir ke kantor Anda? Tim NutriBox Daily siap membantu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Operational & Location Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Kitchen & Location Info */}
            <div className="bg-paper-elevated border border-rule-subtle rounded-3xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-start gap-3.5 mb-5">
                <div className="w-10 h-10 rounded-xl bg-mint text-forest flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-leaf" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-leaf block">
                    Fasilitas produksi
                  </span>
                  <h3 className="font-display font-bold text-lg text-forest">
                    {config.location.name}
                  </h3>
                  <p className="text-xs text-ink-muted mt-1">
                    {config.location.city}, {config.location.province}, {config.location.country}.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-paper-2 border border-rule-subtle text-xs text-ink-muted mb-4">
                <p className="italic">{config.location.note}</p>
              </div>

              <a
                href={config.location.mapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-rule text-xs font-semibold text-forest hover:bg-mint active:scale-[0.99] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              >
                <span className="whitespace-nowrap">Lihat kawasan di Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-leaf" />
              </a>
            </div>

            {/* Operating Hours Table */}
            <div className="bg-paper-elevated border border-rule-subtle rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-rule-subtle">
                <Clock className="w-5 h-5 text-leaf" />
                <h4 className="font-display font-bold text-base text-forest">
                  Jadwal operasional resmi
                </h4>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="font-bold text-forest block">Senin sampai Jumat:</span>
                  <ul className="mt-1 space-y-1 text-ink-muted pl-2 border-l-2 border-leaf">
                    <li>Produksi dapur: 06.00 sampai 10.00 WIB</li>
                    <li>Pengiriman kurir: 10.30 sampai 11.45 WIB</li>
                    <li>Customer service: 08.00 sampai 17.00 WIB</li>
                  </ul>
                </div>

                <div>
                  <span className="font-bold text-forest block">Sabtu:</span>
                  <ul className="mt-1 space-y-1 text-ink-muted pl-2 border-l-2 border-sage">
                    <li>Customer service: 09.00 sampai 14.00 WIB</li>
                    <li>Tidak ada produksi dan pengantaran reguler</li>
                  </ul>
                </div>

                <div>
                  <span className="font-bold text-forest block">Minggu dan hari libur nasional:</span>
                  <p className="text-ink-muted mt-0.5">Tutup (Seluruh operasional libur)</p>
                </div>
              </div>

              <div className="pt-3 border-t border-rule-subtle text-[11px] text-ink-muted">
                <span className="font-semibold text-forest">Batas Pre-Order:</span> H-1 pukul 17.00 WIB untuk pengiriman hari kerja berikutnya.
              </div>
            </div>

            {/* Contact Status Notice & Admin Gear */}
            <div className="p-4 rounded-2xl bg-paper-2 border border-rule-subtle text-xs flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-citrus"></span>
                <span className="text-ink-muted">
                  WhatsApp:{' '}
                  {config.whatsapp.verified ? (
                    <strong className="text-forest">{config.whatsapp.number} (Terverifikasi)</strong>
                  ) : (
                    <span className="italic text-terracotta">Tahap setup bisnis</span>
                  )}
                </span>
              </div>
              <button
                type="button"
                onClick={onOpenConfig}
                className="p-1.5 rounded-lg text-forest hover:bg-mint active:scale-[0.99] disabled:opacity-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                title="Kelola Pengaturan Kontak"
                aria-label="Buka pengaturan kontak"
              >
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Order Form (7 Cols) */}
          <div className="lg:col-span-7 bg-paper-elevated border border-rule rounded-3xl p-6 sm:p-8 shadow-xs">
            <div className="pb-4 mb-6 border-b border-rule-subtle">
              <span className="text-xs font-semibold text-leaf block mb-1">
                Formulir komunikasi cepat
              </span>
              <h3 className="font-display font-bold text-2xl text-forest">
                Kirim pesan ke customer service
              </h3>
              <p className="text-xs text-ink-muted mt-1">
                Isi form di bawah untuk membuat format pesan otomatis yang langsung terhubung ke tim NutriBox Daily.
              </p>
            </div>

            <form onSubmit={handleSubmitInquiry} className="space-y-4 text-xs">
              <div>
                <label htmlFor="inquiry-name" className="block text-xs font-semibold text-forest mb-1.5">
                  Nama Anda:
                </label>
                <input
                  id="inquiry-name"
                  type="text"
                  placeholder="Contoh: Rian Pratama"
                  value={inquiryName}
                  onChange={(e) => setInquiryName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-rule bg-paper-elevated text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                  required
                />
              </div>

              <div>
                <label htmlFor="inquiry-area" className="block text-xs font-semibold text-forest mb-1.5">
                  Area atau alamat pengiriman Anda:
                </label>
                <input
                  id="inquiry-area"
                  type="text"
                  placeholder="Contoh: Gedung GOP 9 BSD City / Cluster Green Cove"
                  value={inquiryArea}
                  onChange={(e) => setInquiryArea(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-rule bg-paper-elevated text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                  required
                />
              </div>

              <div>
                <label htmlFor="inquiry-topic" className="block text-xs font-semibold text-forest mb-1.5">
                  Topik konsultasi:
                </label>
                <select
                  id="inquiry-topic"
                  value={inquiryTopic}
                  onChange={(e) => setInquiryTopic(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-rule bg-paper-elevated text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                >
                  <option value="Pemesanan Katering Harian (1 Box)">Pemesanan Katering Harian (1 Box)</option>
                  <option value="Paket Weekly Fit Plan (5 Hari)">Paket Weekly Fit Plan (5 Hari)</option>
                  <option value="Paket Monthly Fit Plan (20 Hari)">Paket Monthly Fit Plan (20 Hari)</option>
                  <option value="Pengecekan Jangkauan Kurir & Ongkir">Pengecekan Jangkauan Kurir & Ongkir</option>
                  <option value="Katering Grup Kantor / Corporate Lunch">Katering Grup Kantor / Corporate Lunch</option>
                  <option value="Konsultasi Alergi & Preferensi Khusus">Konsultasi Alergi & Preferensi Khusus</option>
                </select>
              </div>

              <div>
                <label htmlFor="inquiry-message" className="block text-xs font-semibold text-forest mb-1.5">
                  Pesan atau pertanyaan Anda:
                </label>
                <textarea
                  id="inquiry-message"
                  rows={4}
                  placeholder="Tuliskan pertanyaan Anda mengenai ketersediaan jadwal, preferensi lauk, atau jam pengiriman..."
                  value={inquiryMessage}
                  onChange={(e) => setInquiryMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-rule bg-paper-elevated text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-forest hover:bg-forest/90 active:scale-[0.99] disabled:opacity-50 text-white font-semibold text-xs sm:text-sm shadow-xs transition-colors flex items-center justify-center gap-2 group whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf"
                >
                  <MessageSquare className="w-4 h-4 text-leaf" />
                  <span>Kirim pesan via WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5 motion-safe:transition-transform" />
                </button>
              </div>

              <p className="text-[11px] text-ink-muted text-center pt-1">
                Pesan akan diformat secara otomatis dan dikonfirmasikan oleh tim CS kami.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
