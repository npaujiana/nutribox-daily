import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onNavigate: (tabId: string) => void;
  onOpenWhatsApp: (msg?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenWhatsApp }) => {
  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 bg-paper border-b border-rule-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Bold Headline & Editorial Story */}
          <div className="lg:col-span-7 text-left">
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-forest tracking-tight leading-[1.1]">
              Sajian lezat & berkesan untuk berbagai acara istimewa.
            </h1>

            <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-ink-2 leading-relaxed">
              Pilihan Nasi Kotak, Prasmanan, Snack Box, dan Tumpeng Syukuran dengan cita rasa otentik, porsi mengenyangkan, dan tiba tepat waktu di BSD City & Jabodetabek.
            </p>

            {/* Action Group: One Dominant CTA + Clean Secondary Link */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-5">
              <button
                type="button"
                onClick={() => onNavigate('catalog')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-forest hover:bg-forest-hover active:scale-[0.99] disabled:opacity-50 text-white font-semibold text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer"
              >
                <span>Lihat Menu Acara & Pesan</span>
                <ArrowRight className="w-4 h-4 text-fresh" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('subscription')}
                className="inline-flex items-center justify-center text-sm font-semibold text-forest border-b-2 border-forest pb-0.5 hover:text-fresh hover:border-fresh active:scale-[0.99] disabled:opacity-50 transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              >
                <span>Pilihan Paket Acara (15–200+ Pax)</span>
              </button>
            </div>

            {/* Microcopy & Operational Proof */}
            <div className="mt-8 pt-6 border-t border-rule-subtle grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-ink-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-fresh shrink-0" />
                <span>Dimasak segar di hari H</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-fresh shrink-0" />
                <span>100% Halal & higienis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-fresh shrink-0" />
                <span>Garansi tiba H-1 jam acara</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Framed Editorial Meal Photo */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
            <div className="overflow-hidden rounded-xl border border-rule bg-paper-2 shadow-xs">
              <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=85"
                  alt="Paket Nasi Kotak Ayam Bakar Madu Spesial"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>

              {/* Editorial Nutrition Spec Bar */}
              <div className="p-4 bg-paper border-t border-rule flex items-center justify-between text-left">
                <div>
                  <h2 className="font-display font-bold text-sm text-forest">
                    Nasi Kotak Ayam Bakar Madu
                  </h2>
                  <p className="text-xs text-ink-2 mt-0.5">
                    Lengkap lalapan segar, sambal bajak & kerupuk • Min. 15 box
                  </p>
                </div>
                <div className="text-right tabular-nums">
                  <span className="font-display font-extrabold text-sm text-forest block">
                    Rp35.000
                  </span>
                  <span className="text-[11px] text-fresh font-semibold block">
                    Porsi Kenyang
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
