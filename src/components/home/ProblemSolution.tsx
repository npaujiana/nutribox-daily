import React from 'react';
import { ArrowRight, Zap, Target, RefreshCw, Clock, Check } from 'lucide-react';

interface ProblemSolutionProps {
  onNavigate: (tabId: string) => void;
}

export const ProblemSolution: React.FC<ProblemSolutionProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <span className="text-sm font-medium text-fresh mb-1.5 block">
            Tantangan masyarakat urban
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-forest tracking-tight leading-tight">
            Jadwal Padat Bukan Alasan untuk Melewatkan Makan Sehat.
          </h2>
          <p className="mt-3 text-base text-ink-2 leading-relaxed">
            Di tengah ritme kerja yang dinamis di kawasan BSD dan sekitarnya, menjaga asupan nutrisi seimbang sering kali menjadi tantangan harian yang melelahkan.
          </p>
        </div>

        {/* Editorial Grid: Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: The 4 Common Problems (5 Cols) */}
          <div className="lg:col-span-5 bg-paper-elevated border border-rule-subtle rounded-card p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <span className="inline-block px-3 py-1 rounded-pill bg-terracotta-soft text-terracotta text-xs font-medium mb-4">
                Kendala makan siang kantor harian
              </span>
              <h3 className="font-display font-bold text-xl text-forest mb-5">
                Mengapa Mempertahankan Pola Makan Sering Gagal?
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 rounded-card-sm bg-paper-2 border border-rule-subtle">
                  <div className="w-6 h-6 rounded-pill bg-terracotta-soft text-terracotta flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✕
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs text-ink">Tidak Sempat Menyiapkan Bekal</h4>
                    <p className="text-xs text-ink-2 mt-0.5">Waktu pagi habis di perjalanan, belanja dan meal preparation mandiri menyita banyak waktu.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-card-sm bg-paper-2 border border-rule-subtle">
                  <div className="w-6 h-6 rounded-pill bg-terracotta-soft text-terracotta flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✕
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs text-ink">Sulit Mengetahui Kandungan Nutrisi</h4>
                    <p className="text-xs text-ink-2 mt-0.5">Makanan pesan antar atau warung sekitar jarang memiliki takaran kalori dan garam yang jelas.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-card-sm bg-paper-2 border border-rule-subtle">
                  <div className="w-6 h-6 rounded-pill bg-terracotta-soft text-terracotta flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✕
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs text-ink">Sulit Menjaga Konsistensi Pola Makan</h4>
                    <p className="text-xs text-ink-2 mt-0.5">Pola makan sehat sering berhenti karena ketiadaan sistem katering terjadwal yang praktis.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-card-sm bg-paper-2 border border-rule-subtle">
                  <div className="w-6 h-6 rounded-pill bg-terracotta-soft text-terracotta flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✕
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs text-ink">Bosan dengan Menu Monoton</h4>
                    <p className="text-xs text-ink-2 mt-0.5">Katering konvensional menyajikan olahan yang berulang sehingga sulit dinikmati jangka panjang.</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-6 text-xs text-muted border-t border-rule-subtle pt-3">
              NutriBox Daily hadir untuk menghapus gesekan ini dari rutinitas harian Anda.
            </p>
          </div>

          {/* Right Column: The NutriBox Daily Solution (7 Cols) */}
          <div className="lg:col-span-7 bg-forest text-accent-ink rounded-card p-6 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-pill bg-forest-hover border border-rule-subtle text-citrus text-xs font-medium mb-4">
                Pendekatan NutriBox Daily
              </span>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-accent-ink mb-4">
                Makanan Terukur, Rasa Menggugah Selera, Tiba Tepat Waktu.
              </h3>

              <p className="text-sm text-sage leading-relaxed mb-8">
                Kami menggabungkan prinsip gizi seimbang dengan seni kuliner modern. Setiap porsi diracik dari bahan baku segar tanpa penambahan MSG, ditimbang secara proporsional, dan dikirimkan sebelum jam makan siang Anda tiba.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-card-sm bg-forest-hover border border-rule-subtle">
                  <div className="w-8 h-8 rounded-card-sm bg-fresh text-forest flex items-center justify-center font-bold mb-3">
                    <Clock className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-bold text-sm text-accent-ink mb-1">Siap Santap di Meja</h4>
                  <p className="text-xs text-sage leading-relaxed">
                    Pengantaran tiba 10.30 sampai 11.45 WIB, siap dinikmati tanpa perlu antre saat jam istirahat.
                  </p>
                </div>

                <div className="p-4 rounded-card-sm bg-forest-hover border border-rule-subtle">
                  <div className="w-8 h-8 rounded-card-sm bg-fresh text-forest flex items-center justify-center font-bold mb-3">
                    <Target className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-bold text-sm text-accent-ink mb-1">Nutrisi Terukur Jelas</h4>
                  <p className="text-xs text-sage leading-relaxed">
                    Estimasi kalori dan makro tercantum transparan untuk mendukung tujuan kesehatan Anda.
                  </p>
                </div>

                <div className="p-4 rounded-card-sm bg-forest-hover border border-rule-subtle">
                  <div className="w-8 h-8 rounded-card-sm bg-fresh text-forest flex items-center justify-center font-bold mb-3">
                    <RefreshCw className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-bold text-sm text-accent-ink mb-1">Rotasi Menu Mingguan</h4>
                  <p className="text-xs text-sage leading-relaxed">
                    Menu berganti tiap minggu dengan sajian nusantara modern, fusion Asia, dan western grill.
                  </p>
                </div>

                <div className="p-4 rounded-card-sm bg-forest-hover border border-rule-subtle">
                  <div className="w-8 h-8 rounded-card-sm bg-fresh text-forest flex items-center justify-center font-bold mb-3">
                    <Check className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-bold text-sm text-accent-ink mb-1">Langganan Fleksibel</h4>
                  <p className="text-xs text-sage leading-relaxed">
                    Pilihan paket 5 hari atau 20 hari yang dapat di-pause jika Anda sedang dinas keluar kota.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-rule-subtle flex items-center justify-between">
              <span className="text-xs text-sage">
                Tersedia untuk harian dan langganan
              </span>
              <button
                onClick={() => onNavigate('catalog')}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-citrus hover:text-accent-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fresh rounded-sm"
              >
                <span>Lihat semua kategori box</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
