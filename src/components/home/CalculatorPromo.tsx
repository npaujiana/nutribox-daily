import React from 'react';
import { ArrowRight, ShieldAlert } from 'lucide-react';

interface CalculatorPromoProps {
  onNavigate: (tabId: string) => void;
}

export const CalculatorPromo: React.FC<CalculatorPromoProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 bg-paper border-b border-rule-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-forest text-white rounded-xl p-8 sm:p-12 relative overflow-hidden shadow-xs">
          <div className="max-w-3xl text-left">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight mb-4">
              Kenali estimasi kebutuhan kalori harianmu.
            </h2>

            <p className="text-sm sm:text-base text-white/85 leading-relaxed mb-8">
              Pahami kebutuhan energi harianmu melalui kalkulator interaktif berbasis formula Mifflin-St Jeor sebelum menentukan kategori meal box yang paling tepat untuk rutinitasmu.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('calculator')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-white hover:bg-white/95 text-forest font-bold text-sm shadow-sm active:scale-[0.99] disabled:opacity-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap cursor-pointer"
              >
                <span>Hitung kebutuhan kalori</span>
                <ArrowRight className="w-4 h-4 text-forest" />
              </button>

              <span className="text-xs text-white/80 text-center sm:text-left">
                Tanpa perlu registrasi akun, privasi data aman di browser Anda.
              </span>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20 flex items-start gap-2.5 text-xs text-white/80">
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
