import React from 'react';
import { coverageAreas } from '../../data/coverage';
import { MapPin, Clock, AlertCircle, ArrowUpRight } from 'lucide-react';
import { BusinessConfig } from '../../types';

interface ServiceAreaSectionProps {
  onOpenWhatsApp: (msg?: string) => void;
  config: BusinessConfig;
}

export const ServiceAreaSection: React.FC<ServiceAreaSectionProps> = ({ onOpenWhatsApp, config }) => {
  const priorityAreas = coverageAreas.filter((a) => a.category === 'priority');
  const regularAreas = coverageAreas.filter((a) => a.category === 'regular');

  return (
    <section className="py-20 bg-paper-elevated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-sm font-medium text-fresh mb-1.5 block">
            Jangkauan pengantaran kurir
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-forest tracking-tight">
            Healthy Lunch, Delivered to Your Area.
          </h2>
          <p className="mt-2 text-sm text-ink-2 leading-relaxed">
            Pengiriman katering beroperasi dari dapur produksi BSD City dengan rute terpadu untuk memastikan pesanan tiba di meja Anda sebelum jam makan siang (10.30 sampai 11.45 WIB).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Priority Areas (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-paper-2 border border-rule-subtle rounded-card p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-fresh"></span>
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
                    className="p-3.5 rounded-card-sm bg-paper-elevated border border-rule-subtle flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-display font-bold text-sm text-forest">
                          {area.name}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded-pill bg-paper-3 text-forest font-medium">
                          Prioritas
                        </span>
                      </div>
                      <p className="text-xs text-ink-2 leading-snug">
                        {area.description}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-rule-subtle flex items-center gap-1.5 text-xs font-semibold text-forest">
                      <Clock className="w-3.5 h-3.5 text-fresh" />
                      <span>{area.estimatedDeliveryTime.replace('–', 'sampai')}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Regular Areas */}
            <div className="bg-paper-2 border border-rule-subtle rounded-card p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-sage"></span>
                <h4 className="font-display font-bold text-base text-forest">
                  Wilayah pengiriman reguler sekitar Tangsel
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {regularAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-card-sm bg-paper-elevated border border-rule-subtle text-xs font-medium text-ink"
                  >
                    {area.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Outside / Confirm Area & Map Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-forest text-accent-ink rounded-card p-6 sm:p-8 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="w-5 h-5 text-citrus" />
                <h4 className="font-display font-bold text-base text-accent-ink">
                  Jakarta Selatan dan area sekitarnya
                </h4>
              </div>
              <p className="text-xs text-sage leading-relaxed mb-4">
                Untuk pengiriman ke Jakarta Selatan atau area di luar ring utama Tangerang Selatan, mohon konfirmasi alamat Anda terlebih dahulu kepada tim CS kami untuk pengecekan rute dan ketersediaan kuota kurir harian.
              </p>
              <p className="text-xs text-citrus mb-5">
                *NutriBox Daily saat ini belum melayani pengiriman antarkota (luar Jabodetabek).
              </p>

              <button
                onClick={() =>
                  onOpenWhatsApp(
                    'Halo NutriBox Daily, saya ingin menanyakan apakah alamat kantor/rumah saya dapat dilayani untuk pengiriman katering sehat. Alamat saya: '
                  )
                }
                className="w-full py-3 px-4 rounded-card-sm bg-fresh hover:bg-fresh-hover text-forest font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fresh"
              >
                <span>Cek jangkauan alamat saya</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Kitchen Info Box */}
            <div className="p-6 rounded-card bg-paper-2 border border-rule-subtle">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-fresh shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-display font-bold text-sm text-forest">
                    {config.location.name}
                  </h5>
                  <p className="text-xs text-ink-2 mt-1">
                    {config.location.city}, {config.location.province}, {config.location.country}.
                  </p>
                  <p className="text-xs text-muted mt-2">
                    {config.location.note}
                  </p>
                  <a
                    href={config.location.mapsQueryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-forest hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fresh"
                  >
                    <span>Buka peta kawasan BSD City</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-fresh" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
