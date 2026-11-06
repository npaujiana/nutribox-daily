import React from 'react';
import { ArrowUpRight, CheckCircle2, MessageSquare } from 'lucide-react';

interface FinalCTAProps {
  onOpenWhatsApp: (msg?: string) => void;
  onNavigate: (tabId: string) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenWhatsApp, onNavigate }) => {
  return (
    <section className="py-24 bg-forest text-accent-ink relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="inline-block px-3.5 py-1 rounded-pill bg-forest-hover border border-rule-subtle text-citrus text-xs font-semibold mb-6">
          NutriBox Daily BSD City dan Tangerang Selatan
        </span>

        <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-accent-ink tracking-tight leading-[1.15] max-w-3xl mx-auto mb-6">
          Mulai Kebiasaan Makan Lebih Baik Hari Ini.
        </h2>

        <p className="text-base sm:text-lg text-sage max-w-2xl mx-auto leading-relaxed mb-10">
          Pilih meal box favoritmu dan buat makan siang sehat menjadi bagian dari rutinitas harian tanpa perlu khawatir soal waktu dan kandungan nutrisi.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenWhatsApp()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-card-sm bg-fresh hover:bg-fresh-hover text-forest font-bold text-base shadow-sm transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fresh"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Pesan via WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('subscription')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-card-sm bg-forest-hover hover:bg-forest text-accent-ink font-semibold text-base border border-rule-subtle transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fresh"
          >
            <span>Pelajari paket langganan</span>
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-rule-subtle flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-sage">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-fresh" />
            <span>Tanpa penambahan MSG</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-fresh" />
            <span>Rotasi menu berganti tiap minggu</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-fresh" />
            <span>Tiba sebelum makan siang (10.30 sampai 11.45 WIB)</span>
          </div>
        </div>
      </div>
    </section>
  );
};
