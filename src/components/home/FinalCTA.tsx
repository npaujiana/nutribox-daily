import React from 'react';
import { ArrowUpRight, CheckCircle2, MessageSquare } from 'lucide-react';

interface FinalCTAProps {
  onOpenWhatsApp: (msg?: string) => void;
  onNavigate: (tabId: string) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenWhatsApp, onNavigate }) => {
  return (
    <section className="py-24 bg-forest text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12] max-w-3xl mx-auto mb-5">
          Wujudkan acara berkesan dengan sajian istimewa.
        </h2>

        <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed mb-10">
          Konsultasikan kebutuhan menu, estimasi porsi tamu, dan jadwal acara Anda bersama tim Nutribox Catering. Dapatkan penawaran terbaik hari ini.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => onOpenWhatsApp()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-white hover:bg-white/95 active:scale-[0.99] disabled:opacity-50 text-forest font-bold text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 text-forest" />
            <span>Konsultasi Acara via WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 text-forest" />
          </button>

          <button
            type="button"
            onClick={() => onNavigate('subscription')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white font-semibold text-base border-b-2 border-white/40 pb-0.5 hover:border-white hover:text-white active:scale-[0.99] disabled:opacity-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap cursor-pointer"
          >
            <span>Lihat Paket Acara Lengkap</span>
          </button>
        </div>

        <div className="mt-14 pt-8 border-t border-white/20 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-white/80">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-fresh shrink-0" />
            <span>Garansi tiba H-1 jam sebelum acara</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-fresh shrink-0" />
            <span>Bahan 100% Halal & dapur higienis</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-fresh shrink-0" />
            <span>Tersedia paket ALL-IN include staf pramusaji</span>
          </div>
        </div>
      </div>
    </section>
  );
};
