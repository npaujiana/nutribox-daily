import React from 'react';
import { ArrowRight, Clock, CheckCircle2, Flame } from 'lucide-react';

interface HeroProps {
  onNavigate: (tabId: string) => void;
  onOpenWhatsApp: (msg?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenWhatsApp }) => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-pill bg-paper-3 border border-rule-subtle text-forest text-xs font-medium">
              <span>Katering makan siang sehat di BSD City dan Tangsel</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-forest tracking-tight leading-[1.12]">
              Makan Sehat, <br className="hidden sm:inline" />
              <span className="text-fresh">Tetap Praktis</span> Setiap Hari.
            </h1>

            {/* Supporting Copy (12 words) */}
            <p className="text-base sm:text-lg text-ink-2 max-w-xl leading-relaxed">
              Katering makan siang sehat dengan menu variatif dan kalori terukur setiap hari.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={() => onNavigate('catalog')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-card-sm bg-forest hover:bg-forest-hover text-accent-ink font-semibold text-sm shadow-md transition-colors group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              >
                <span>Temukan Menu</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('subscription')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-card-sm bg-paper-elevated hover:bg-paper-3 border border-rule text-forest font-semibold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              >
                <span>Lihat Paket Langganan</span>
              </button>
            </div>

            {/* Microcopy & Trust Pillars */}
            <div className="pt-4 border-t border-rule-subtle flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-ink-2">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-fresh" />
                <span>Dimasak segar harian</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-fresh" />
                <span>Tanpa tambahan MSG</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-fresh" />
                <span>Transparansi nutrisi</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Meal Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image Frame */}
              <div className="relative rounded-card overflow-hidden shadow-xl aspect-[4/3] sm:aspect-square bg-paper-2">
                <img
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=85"
                  alt="NutriBox Daily Healthy Grilled Chicken Bowl"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent" />
                
                {/* Floating caption on image */}
                <div className="absolute bottom-4 left-4 right-4 text-accent-ink">
                  <span className="inline-block px-2.5 py-0.5 rounded-pill bg-forest text-xs font-medium mb-1">
                    Pilihan menu makan siang
                  </span>
                  <h3 className="font-display font-bold text-base sm:text-lg text-accent-ink">
                    Grilled Chicken Brown Rice Bowl
                  </h3>
                </div>
              </div>

              {/* Badge 1: Transparent Macro */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-paper-elevated border border-rule-subtle rounded-card-sm p-3 shadow-md flex items-center gap-3">
                <div className="w-10 h-10 rounded-card-sm bg-paper-3 flex items-center justify-center text-forest">
                  <Flame className="w-5 h-5 text-terracotta" />
                </div>
                <div>
                  <span className="block text-xs text-ink-2 font-normal">Estimasi energi</span>
                  <span className="font-display font-bold text-sm text-forest">485 kcal, 38g Protein</span>
                </div>
              </div>

              {/* Badge 2: Delivery window */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-paper-elevated border border-rule-subtle rounded-card-sm p-3 shadow-md flex items-center gap-3">
                <div className="w-10 h-10 rounded-card-sm bg-forest flex items-center justify-center text-accent-ink">
                  <Clock className="w-5 h-5 text-fresh" />
                </div>
                <div>
                  <span className="block text-xs text-ink-2 font-normal">Tiba sebelum makan siang</span>
                  <span className="font-display font-bold text-sm text-forest">10.30 sampai 11.45 WIB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
