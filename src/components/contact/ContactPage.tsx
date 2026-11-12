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
  const [inquiryTopic, setInquiryTopic] = useState('Pemesanan Nasi Kotak / Bento Acara');
  const [inquiryMessage, setInquiryMessage] = useState('');

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = `Halo Nutribox Catering, saya ingin berkonsultasi mengenai pemesanan katering acara:

Nama: ${inquiryName || 'Pelanggan'}
Wilayah / Venue Acara: ${inquiryArea || 'BSD City & Jabodetabek'}
Layanan / Topik: ${inquiryTopic}
Catatan Acara: ${inquiryMessage || '-'}

Mohon informasi ketersediaan tanggal dan saran menu. Terima kasih.`;

    onOpenWhatsApp(formatted);
  };

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-20 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="max-w-3xl mb-8 sm:mb-12 text-left">
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-forest tracking-tight">
            Hubungi Kami.
          </h1>
          <p className="mt-3 text-base sm:text-lg text-ink-2 leading-relaxed">
            Konsultasikan tanggal acara, pilihan paket menu, atau kebutuhan prasmanan dan nasi kotak Anda. Tim kami siap merespons dengan cepat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Operational & Location Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Kitchen & Location Info */}
            <div className="bg-paper border border-rule rounded-xl p-6 sm:p-8 shadow-xs text-left">
              <div className="flex items-start gap-3.5 mb-5">
                <div className="w-9 h-9 rounded-lg bg-paper-2 border border-rule-subtle text-forest flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-leaf" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-lg text-forest">
                    {config.location.name}
                  </h2>
                  <p className="text-xs text-ink-2 mt-1">
                    {config.location.city}, {config.location.province}, {config.location.country}.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-paper-2 border border-rule-subtle text-xs text-ink-2 mb-4">
                <p className="italic">{config.location.note}</p>
              </div>

              <a
                href={config.location.mapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-rule text-xs font-semibold text-forest hover:bg-paper-2 active:scale-[0.99] disabled:opacity-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer"
              >
                <span className="whitespace-nowrap">Lihat kawasan di Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-leaf" />
              </a>
            </div>

            {/* Operating Hours Table */}
            <div className="bg-paper border border-rule rounded-xl p-6 sm:p-8 shadow-xs space-y-4 text-left">
              <div className="flex items-center gap-2.5 pb-3 border-b border-rule-subtle">
                <Clock className="w-5 h-5 text-leaf" />
                <h3 className="font-display font-bold text-base text-forest">
                  Jadwal layanan & operasional
                </h3>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="font-bold text-forest block">Setiap Hari (Senin – Minggu & Libur Nasional):</span>
                  <ul className="mt-1 space-y-1 text-ink-2 pl-2 border-l-2 border-leaf">
                    <li>Produksi dapur: 04.00 – 19.00 WIB (sesuai jadwal acara)</li>
                    <li>Pengiriman acara: Tiba H-1 Jam sebelum acara dimulai</li>
                    <li>Customer Service: 08.00 – 21.00 WIB (respons cepat)</li>
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-rule-subtle text-[11px] text-ink-2">
                <span className="font-semibold text-forest">Batas Pemesanan:</span> Nasi Kotak & Snack Box min. H-1 (17.00 WIB). Prasmanan & Tumpeng disarankan min. H-3 hingga H-7.
              </div>
            </div>

            {/* Contact Status Notice & Admin Gear */}
            <div className="p-4 rounded-lg bg-paper border border-rule text-xs flex items-center justify-between text-left">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-citrus"></span>
                <span className="text-ink-2">
                  Hotline WhatsApp:{' '}
                  {config.whatsapp.verified ? (
                    <strong className="text-forest">{config.whatsapp.number} (Terverifikasi)</strong>
                  ) : (
                    <span className="italic text-leaf font-semibold">Tersedia Setiap Hari</span>
                  )}
                </span>
              </div>
              <button
                type="button"
                onClick={onOpenConfig}
                className="p-1.5 rounded-lg text-forest hover:bg-paper-2 active:scale-[0.99] disabled:opacity-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer"
                title="Kelola Pengaturan Kontak"
                aria-label="Buka pengaturan kontak"
              >
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Order Form (7 Cols) */}
          <div className="lg:col-span-7 bg-paper border border-rule rounded-xl p-6 sm:p-8 shadow-xs text-left">
            <div className="pb-4 mb-6 border-b border-rule-subtle">
              <h2 className="font-display font-bold text-2xl text-forest">
                Konsultasikan kebutuhan acara Anda
              </h2>
              <p className="text-xs text-ink-2 mt-1">
                Lengkapi rincian di bawah untuk terhubung langsung dengan konsultan katering kami via WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmitInquiry} className="space-y-4 text-xs">
              <div>
                <label htmlFor="inquiry-name" className="block text-xs font-semibold text-forest mb-1.5">
                  Nama Anda / Perusahaan:
                </label>
                <input
                  id="inquiry-name"
                  type="text"
                  placeholder="Contoh: Rian Pratama (PT Digital Solusi)"
                  value={inquiryName}
                  onChange={(e) => setInquiryName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-rule bg-paper text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                  required
                />
              </div>

              <div>
                <label htmlFor="inquiry-area" className="block text-xs font-semibold text-forest mb-1.5">
                  Alamat / Venue Lokasi Acara:
                </label>
                <input
                  id="inquiry-area"
                  type="text"
                  placeholder="Contoh: Gedung GOP 9 BSD City / Aula Masjid Serpong"
                  value={inquiryArea}
                  onChange={(e) => setInquiryArea(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-rule bg-paper text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                  required
                />
              </div>

              <div>
                <label htmlFor="inquiry-topic" className="block text-xs font-semibold text-forest mb-1.5">
                  Layanan katering yang dibutuhkan:
                </label>
                <select
                  id="inquiry-topic"
                  value={inquiryTopic}
                  onChange={(e) => setInquiryTopic(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-rule bg-paper text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer"
                >
                  <option value="Pemesanan Nasi Kotak / Bento Acara">Pemesanan Nasi Kotak / Bento Acara</option>
                  <option value="Paket Prasmanan Lengkap (Buffet)">Paket Prasmanan Lengkap (Buffet)</option>
                  <option value="Pemesanan Snack Box Rapat & Coffee Break">Pemesanan Snack Box Rapat & Coffee Break</option>
                  <option value="Tumpeng Kuning Komplit / Tumpeng Mini">Tumpeng Kuning Komplit / Tumpeng Mini</option>
                  <option value="Konsultasi Budget & Custom Menu Acara">Konsultasi Budget & Custom Menu Acara</option>
                  <option value="Pengecekan Jangkauan Kurir & Alamat Venue">Pengecekan Jangkauan Kurir & Alamat Venue</option>
                </select>
              </div>

              <div>
                <label htmlFor="inquiry-message" className="block text-xs font-semibold text-forest mb-1.5">
                  Tanggal acara, jam, estimasi pax & catatan:
                </label>
                <textarea
                  id="inquiry-message"
                  rows={4}
                  placeholder="Contoh: Tanggal 20 November 2026, jam 11 siang, perkiraan 75 pax prasmanan, butuh include meja dan staf pramusaji..."
                  value={inquiryMessage}
                  onChange={(e) => setInquiryMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-rule bg-paper text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-forest hover:bg-forest-hover active:scale-[0.99] disabled:opacity-50 text-white font-semibold text-xs sm:text-sm shadow-xs transition-colors flex items-center justify-center gap-2 group whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-leaf" />
                  <span>Kirim Pesan via WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5 motion-safe:transition-transform" />
                </button>
              </div>

              <p className="text-[11px] text-ink-2 text-center pt-1">
                Pesan akan diformat secara otomatis dan langsung ditangani oleh konsultan katering kami.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
