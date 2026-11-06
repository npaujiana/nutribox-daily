import React from 'react';
import { Calculator, ArrowRight, ShieldAlert } from 'lucide-react';

interface CalculatorPromoProps {
  onNavigate: (tabId: string) => void;
}

export const CalculatorPromo: React.FC<CalculatorPromoProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-forest text-accent-ink rounded-card p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-pill bg-forest-hover border border-rule-subtle text-citrus text-xs font-semibold mb-6">
              <Calculator className="w-3.5 h-3.5" />
              <span>Fitur interaktif edukasi kalori</span>
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-accent-ink tracking-tight leading-tight mb-4">
              Kenali Estimasi Kebutuhan Kalorimu.
            </h2>

            <p className="text-sm sm:text-base text-sage leading-relaxed mb-8">
              Mulai memahami kebutuhan energi harianmu melalui kalkulator berbasis formula ilmiah Mifflin-St Jeor sebelum menentukan kategori meal box yang paling selaras dengan gaya hidupmu.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onNavigate('calculator')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-card-sm bg-fresh hover:bg-fresh-hover text-forest font-bold text-sm shadow-sm transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fresh whitespace-nowrap"
              >
                <span>Hitung kebutuhan kalori</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <span className="text-xs text-sage text-center sm:text-left">
                Tanpa perlu registrasi akun, privasi Anda terlindungi.
              </span>
            </div>

            <div className="mt-8 pt-6 border-t border-rule-subtle flex items-start gap-2.5 text-xs text-sage">
              <ShieldAlert className="w-4 h-4 text-citrus shrink-0 mt-0.5" />
              <p>
                Hasil kalkulator merupakan estimasi energi umum untuk tujuan edukasi referensi meal planning, bukan diagnosis medis atau anjuran gizi klinis personal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
