import React, { useState } from 'react';
import { X, Settings, CheckCircle2, Save, RefreshCw } from 'lucide-react';
import { BusinessConfig } from '../../types';
import { initialBusinessConfig, saveStoredBusinessConfig } from '../../data/businessConfig';

interface AdminConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: BusinessConfig;
  onUpdateConfig: (newConfig: BusinessConfig) => void;
}

export const AdminConfigModal: React.FC<AdminConfigModalProps> = ({
  isOpen,
  onClose,
  config,
  onUpdateConfig,
}) => {
  const [formData, setFormData] = useState<BusinessConfig>(config);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    saveStoredBusinessConfig(formData);
    onUpdateConfig(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleReset = () => {
    if (confirm('Kembalikan konfigurasi ke nilai bawaan?')) {
      setFormData(initialBusinessConfig);
      saveStoredBusinessConfig(initialBusinessConfig);
      onUpdateConfig(initialBusinessConfig);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest/80 backdrop-blur-xs motion-safe:animate-fadeIn">
      <div className="relative w-full max-w-xl bg-paper-elevated border border-rule rounded-2xl shadow-md p-6 text-ink max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-rule-subtle">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-mint text-forest">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-forest">
                Pusat konfigurasi kontak dan verifikasi bisnis
              </h3>
              <p className="text-xs text-ink-muted">
                Kelola status rilis operasional dan verifikasi saluran komunikasi NutriBox Daily
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-ink-muted hover:text-forest hover:bg-mint active:scale-[0.99] disabled:opacity-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
            aria-label="Tutup dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSave} className="mt-5 space-y-5 text-xs">
          {/* WhatsApp Config */}
          <div className="p-4 rounded-xl bg-paper-2 border border-rule-subtle space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm text-forest">WhatsApp Business</span>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.whatsapp.verified}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      whatsapp: { ...formData.whatsapp, verified: e.target.checked },
                    })
                  }
                  className="rounded text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                />
                <span className="text-xs font-medium">Tandai resmi dan terverifikasi</span>
              </label>
            </div>
            <div>
              <label htmlFor="admin-wa-number" className="block text-ink font-medium mb-1">
                Nomor WhatsApp (dengan kode negara, misal 6281234567890):
              </label>
              <input
                id="admin-wa-number"
                type="text"
                value={formData.whatsapp.number}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    whatsapp: { ...formData.whatsapp, number: e.target.value },
                  })
                }
                placeholder="Kosongkan jika masih tahap setup bisnis"
                className="w-full px-3 py-2 border border-rule rounded-lg bg-paper-elevated text-ink focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-forest"
              />
              <p className="mt-1 text-[11px] text-ink-muted">
                Jika belum terverifikasi atau kosong, klik tombol pemesanan akan membuka dialog pratinjau teks pesanan transparan untuk mencegah link palsu.
              </p>
            </div>
          </div>

          {/* Email Config */}
          <div className="p-4 rounded-xl bg-paper-2 border border-rule-subtle space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm text-forest">Alamat Email</span>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.email.verified}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: { ...formData.email, verified: e.target.checked },
                    })
                  }
                  className="rounded text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                />
                <span className="text-xs font-medium">Terverifikasi</span>
              </label>
            </div>
            <input
              type="email"
              aria-label="Alamat email"
              value={formData.email.address}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: { ...formData.email, address: e.target.value },
                })
              }
              className="w-full px-3 py-2 border border-rule rounded-lg bg-paper-elevated text-ink focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-forest"
            />
          </div>

          {/* Founder Section Verification */}
          <div className="p-4 rounded-xl bg-paper-2 border border-rule-subtle space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm text-forest">Founder dan Legalitas</span>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.founder.isVerifiedPublic}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      founder: { ...formData.founder, isVerifiedPublic: e.target.checked },
                    })
                  }
                  className="rounded text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                />
                <span className="text-xs font-medium">Publikasikan Profil Founder</span>
              </label>
            </div>
            <p className="text-[11px] text-ink-muted">
              Profil Founder ({formData.founder.name}, {formData.founder.role}) disiapkan dan hanya ditampilkan sebagai publikasi resmi saat checkbox ini diaktifkan.
            </p>
          </div>

          {/* Footer buttons */}
          <div className="flex items-center justify-between pt-3 border-t border-rule-subtle">
            <button
              type="button"
              onClick={handleReset}
              className="px-3 py-2 text-xs text-ink-muted hover:text-forest active:scale-[0.99] disabled:opacity-50 flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset default</span>
            </button>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-rule rounded-lg font-medium text-ink hover:bg-paper-2 active:scale-[0.99] disabled:opacity-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-forest text-white rounded-lg font-medium hover:bg-forest/90 active:scale-[0.99] disabled:opacity-50 flex items-center gap-1.5 shadow-xs transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf"
              >
                {savedSuccess ? <CheckCircle2 className="w-4 h-4 text-leaf" /> : <Save className="w-4 h-4" />}
                <span className="whitespace-nowrap">{savedSuccess ? 'Tersimpan!' : 'Simpan'}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
