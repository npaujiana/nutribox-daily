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
            Wilayah pengantaran katering acara.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-ink-2 leading-relaxed">
            Pengiriman katering beroperasi dari dapur pusat BSD City dengan armada logistik khusus untuk memastikan pesanan tiba di lokasi acara Anda tepat waktu (garansi tiba H-1 jam sebelum acara).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Priority Areas (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-paper border border-rule rounded-xl p-6 sm:p-8 text-left shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-fresh"></span>
                <h3 className="font-display font-bold text-lg text-forest">
                  Wilayah pengiriman prioritas utama
                </h3>
              </div>
              <p className="text-xs text-ink-2 mb-6">
                Rute pengantaran rutin harian untuk pesanan Nasi Kotak, Prasmanan, dan Snack Box kantor/keluarga.
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
                      <span>Garansi Tiba H-1 Jam Acara</span>
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
                  Wilayah pengiriman reguler sekitar Tangsel & Tangerang
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
                  Pengiriman ke Jakarta & Seluruh Jabodetabek
                </h4>
              </div>
              <p className="text-xs text-white/85 leading-relaxed mb-4">
                Kami juga melayani pengantaran katering prasmanan dan nasi kotak acara skala besar ke Jakarta Selatan, Jakarta Pusat, Jakarta Barat, Depok, dan Bogor.
              </p>
              <button
                type="button"
                onClick={() =>
                  onOpenWhatsApp(
                    'Halo Nutribox Catering, saya ingin menanyakan apakah alamat venue acara saya di [tulis alamat/lokasi acara Anda] dapat dilayani pengantaran katering?'
                  )
                }
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-white hover:bg-white/95 active:scale-[0.99] disabled:opacity-50 text-forest font-bold text-xs shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap cursor-pointer"
              >
                <span>Cek jangkauan alamat venue acara</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-forest" />
              </button>
            </div>

            <div className="p-4 rounded-lg bg-paper border border-rule text-xs text-ink-2 space-y-2 shadow-xs">
              <div className="flex items-start gap-2">
                <span className="font-bold text-forest">Catatan Pengantaran:</span>
                <p className="leading-relaxed">
                  Semua pesanan dibawa dengan boks insulasi thermal bersegel untuk menjaga hidangan tetap hangat, higienis, dan terlindung dari cuaca.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
