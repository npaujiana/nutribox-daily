import React, { useState } from 'react';
import { X, Copy, Check, MessageSquare, Phone, ArrowUpRight, ShieldAlert } from 'lucide-react';
import { BusinessConfig } from '../../types';
import { buildWhatsAppUrl } from '../../utils/whatsapp';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  messageText: string;
  config: BusinessConfig;
  onUpdateConfig: (newConfig: BusinessConfig) => void;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  messageText,
  config,
  onUpdateConfig,
}) => {
  const [copied, setCopied] = useState(false);
  const [testNumber, setTestNumber] = useState(config.whatsapp.number || '');
  const [showConfigInput, setShowConfigInput] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(messageText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSaveAndTest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testNumber.trim()) return;
    const updated = {
      ...config,
      whatsapp: {
        ...config.whatsapp,
        number: testNumber.trim(),
        verified: true, // Mark verified for test/user session
      },
    };
    onUpdateConfig(updated);
    const url = buildWhatsAppUrl(testNumber.trim(), messageText);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest/80 backdrop-blur-xs motion-safe:animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-paper-elevated border border-rule rounded-2xl shadow-md overflow-hidden p-6 text-ink"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-rule-subtle">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-forest text-mint flex items-center justify-center shadow-xs">
              <MessageSquare className="w-5 h-5 text-leaf" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-forest">Pemesanan via WhatsApp</h3>
              <p className="text-xs text-ink-muted">Pusat komunikasi dan konfirmasi pesanan</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-ink-muted hover:text-forest hover:bg-mint active:scale-[0.99] disabled:opacity-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
            aria-label="Tutup dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Verification Status Notice */}
        <div className="mt-4 p-3.5 rounded-xl bg-paper-2 border border-rule text-xs text-ink flex gap-2.5 items-start">
          <ShieldAlert className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-forest">Status verifikasi kontak: </span>
            {config.whatsapp.verified && config.whatsapp.number ? (
              <span className="text-forest font-medium">Nomor WhatsApp terverifikasi ({config.whatsapp.number}).</span>
            ) : (
              <span>
                Nomor WhatsApp resmi sedang dalam finalisasi pendaftaran bisnis. Teks pesanan di bawah ini telah disiapkan secara otomatis dan dapat Anda salin langsung.
              </span>
            )}
          </div>
        </div>

        {/* Generated Message Content */}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-semibold text-ink-muted">
              Format rincian pesanan Anda
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-forest hover:text-leaf active:scale-[0.99] disabled:opacity-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-leaf" />
                  <span className="text-leaf font-semibold">Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin Teks</span>
                </>
              )}
            </button>
          </div>

          <div className="p-3.5 rounded-xl bg-paper border border-rule-subtle font-mono text-xs text-ink max-h-48 overflow-y-auto whitespace-pre-line leading-relaxed shadow-inner">
            {messageText}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-5 space-y-3">
          {config.whatsapp.verified && config.whatsapp.number ? (
            <a
              href={buildWhatsAppUrl(config.whatsapp.number, messageText)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-forest text-white font-medium hover:bg-forest/90 active:scale-[0.99] transition-colors shadow-xs group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf"
            >
              <span>Lanjut ke WhatsApp Resmi</span>
              <ArrowUpRight className="w-4 h-4 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5 motion-safe:transition-transform" />
            </a>
          ) : (
            <div className="space-y-2">
              <button
                type="button"
                onClick={handleCopy}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-forest text-white font-medium hover:bg-forest/90 active:scale-[0.99] disabled:opacity-50 transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf"
              >
                {copied ? <Check className="w-4 h-4 text-leaf" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Teks Pesanan Berhasil Disalin!' : 'Salin Pesan ke Clipboard'}</span>
              </button>

              <button
                type="button"
                onClick={() => setShowConfigInput(!showConfigInput)}
                className="w-full py-2 text-xs font-medium text-ink-muted hover:text-forest active:scale-[0.99] disabled:opacity-50 transition-colors flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{showConfigInput ? 'Tutup Pengujian Nomor' : 'Ingin uji coba langsung dengan nomor WhatsApp Anda? Klik di sini'}</span>
              </button>
            </div>
          )}

          {/* Test Number Form */}
          {showConfigInput && (
            <form onSubmit={handleSaveAndTest} className="mt-3 p-3.5 bg-paper-2 border border-rule rounded-xl space-y-2.5">
              <label htmlFor="test-phone-input" className="block text-xs font-medium text-ink">
                Masukkan nomor WhatsApp aktif (awali 628...):
              </label>
              <div className="flex gap-2">
                <input
                  id="test-phone-input"
                  type="text"
                  placeholder="Contoh: 6281234567890"
                  value={testNumber}
                  onChange={(e) => setTestNumber(e.target.value)}
                  className="flex-1 px-3 py-2 text-xs border border-rule rounded-lg bg-paper-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 text-xs font-semibold bg-leaf hover:bg-leaf/90 active:scale-[0.99] disabled:opacity-50 text-white rounded-lg transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-citrus"
                >
                  Buka WhatsApp
                </button>
              </div>
              <p className="text-[11px] text-ink-muted">
                Pengaturan ini akan tersimpan pada browser Anda untuk menguji alur pesan otomatis.
              </p>
            </form>
          )}

          <div className="pt-2 text-center">
            <p className="text-[11px] text-ink-muted">
              Target pengiriman: <span className="font-semibold text-forest">10.30 sampai 11.45 WIB</span>, Pre-order H-1 ditutup pukul 17.00 WIB.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
