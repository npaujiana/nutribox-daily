import React from 'react';
import { coverageAreas } from '../../data/coverage';
import { Clock, AlertCircle, ArrowUpRight } from 'lucide-react';
import { BusinessConfig } from '../../types';

interface ServiceAreaSectionProps {
  onOpenWhatsApp: (msg?: string) => void;
  config: BusinessConfig;
}

export const ServiceAreaSection: React.FC<ServiceAreaSectionProps> = ({ onOpenWhatsApp, config }) => {
  const priorityAreas = coverageAreas.filter((a) => a.category === 'priority');
  const regularAreas = coverageAreas.filter((a) => a.category === 'regular');

  return (
    <section className="py-20 bg-paper-2 border-b border-rule-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 text-left">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-forest tracking-tight">
            Wilayah pengantaran katering makan siang.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-ink-2 leading-relaxed">
            Pengiriman katering beroperasi dari dapur produksi BSD City dengan rute terpadu untuk memastikan pesanan tiba di meja Anda sebelum jam makan siang (10.30 sampai 11.45 WIB).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Priority Areas (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-paper border border-rule rounded-xl p-6 sm:p-8 text-left shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-fresh"></span>
                <h3 className="font-display font-bold text-lg text-forest">
                  Wilayah pengiriman prioritas harian
                </h3>
              </div>
              <p className="text-xs text-ink-2 mb-6">
                Rute kurir reguler setiap hari kerja dengan jaminan estimasi tiba 10.30 sampai 11.45 WIB.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {priorityAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg bg-paper-2 border border-rule-subtle flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-display font-bold text-sm text-forest">
                          {area.name}
                        </span>
                        <span className="text-[11px] px-2 py-0.5 rounded-md bg-paper border border-rule text-forest font-semibold">
                          Prioritas
                        </span>
                      </div>
                      <p className="text-xs text-ink-2 leading-snug">
                        {area.description}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-rule-subtle flex items-center gap-1.5 text-xs font-semibold text-forest">
                      <Clock className="w-3.5 h-3.5 text-leaf" />
                      <span>{area.estimatedDeliveryTime.replace('–', 'sampai')}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Regular Areas */}
            <div className="bg-paper border border-rule rounded-xl p-6 text-left shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-sage"></span>
                <h4 className="font-display font-bold text-base text-forest">
                  Wilayah pengiriman reguler sekitar Tangsel
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {regularAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-md bg-paper-2 border border-rule-subtle text-xs font-medium text-ink"
                  >
                    {area.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Outside / Confirm Area & Map Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-forest text-white rounded-xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="w-5 h-5 text-citrus" />
                <h4 className="font-display font-bold text-base text-white">
                  Jakarta Selatan dan area sekitarnya
                </h4>
              </div>
              <p className="text-xs text-sage leading-relaxed mb-4">
                Area Jakarta Selatan dan wilayah perbatasan Tangerang Raya lainnya memerlukan konfirmasi rute dan kuota harian kurir terlebih dahulu.
              </p>
              <button
                type="button"
                onClick={() =>
                  onOpenWhatsApp(
                    'Halo NutriBox Daily, saya ingin menanyakan apakah alamat pengiriman saya di [tulis alamat/kawasan Anda] masuk dalam rute pengantaran katering?'
                  )
                }
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-leaf hover:bg-leaf/90 active:scale-[0.99] disabled:opacity-50 text-forest font-bold text-xs shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-citrus whitespace-nowrap cursor-pointer"
              >
                <span>Cek jangkauan alamat saya</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-4 rounded-lg bg-paper border border-rule text-xs text-ink-2 space-y-2 shadow-xs">
              <div className="flex items-start gap-2">
                <span className="font-bold text-forest">Pemberitahuan:</span>
                <p className="leading-relaxed">
                  NutriBox Daily saat ini belum melayani pengiriman luar kota. Fokus operasional didedikasikan untuk ketepatan waktu di BSD City dan Tangerang Selatan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
