import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProblemSolutionProps {
  onNavigate: (tabId: string) => void;
}

export const ProblemSolution: React.FC<ProblemSolutionProps> = ({ onNavigate }) => {
  const problems = [
    {
      title: 'Cemas porsi makanan kurang untuk tamu',
      desc: 'Menghitung kebutuhan konsumsi sering membingungkan, takut tamu kelaparan atau sebaliknya makanan terbuang mubazir.',
    },
    {
      title: 'Khawatir makanan tiba terlambat',
      desc: 'Acara sudah dimulai tapi konsumsi belum sampai, menimbulkan kepanikan panitia dan merusak wibawa tuan rumah.',
    },
    {
      title: 'Rasa kurang lezat & kemasan berantakan',
      desc: 'Sajian hambar atau wadah box berminyak dan bocor mengurangi kenyamanan para tamu kehormatan.',
    },
    {
      title: 'Repot masak & sewa alat saji sendiri',
      desc: 'Menyiapkan konsumsi untuk 20 hingga 200+ orang menyita tenaga, waktu istirahat, dan membutuhkan perlengkapan rumit.',
    },
  ];

  const solutions = [
    {
      step: '01',
      title: 'Konsultasi Porsi & Budget Gratis',
      desc: 'Bantuan estimasi porsi presisi dan buffer cadangan aman agar seluruh tamu tercukupi tanpa over-budget.',
    },
    {
      step: '02',
      title: 'Garansi Tepat Waktu H-1 Jam',
      desc: 'Pesanan tiba 60 menit sebelum acara, tertata rapi, dan siap dinikmati tepat saat sesi makan dimulai.',
    },
    {
      step: '03',
      title: 'Rasa Lezat & Kemasan Anti-Tumpah',
      desc: 'Olahan bumbu rempah otentik dengan bento box modern bersekat atau chafing dish pemanas stainless steel mewah.',
    },
    {
      step: '04',
      title: 'Layanan All-In Tanpa Repot',
      desc: 'Pilihan paket lengkap mencakup meja buffet bercover, sendok piring, pemanas, hingga staf pramusaji profesional.',
    },
  ];

  return (
    <section className="py-20 bg-paper-2 border-b border-rule-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Heading leads directly */}
        <div className="max-w-3xl mb-14 text-left">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-forest tracking-tight leading-tight">
            Suksesnya sebuah acara berawal dari sajian yang memuaskan tamu.
          </h2>
          <p className="mt-4 text-base text-ink-2 leading-relaxed">
            Dari syukuran keluarga, rapat kantor penting, seminar, hingga resepsi pernikahan di kawasan BSD City dan Jabodetabek, kami hadir memastikan kebutuhan konsumsi Anda terkelola sempurna.
          </p>
        </div>

        {/* Asymmetrical 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Real Host Obstacles (5 Cols) */}
          <div className="lg:col-span-5 bg-paper border border-rule rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <h3 className="font-display font-bold text-xl text-forest mb-6">
                Kekhawatiran utama saat mengatur konsumsi acara:
              </h3>

              <div className="space-y-4">
                {problems.map((p, idx) => (
                  <div key={idx} className="border-l-2 border-terracotta/60 pl-3.5 py-0.5 text-left">
                    <h4 className="font-display font-semibold text-xs text-forest">
                      {p.title}
                    </h4>
                    <p className="text-xs text-ink-2 mt-1 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-8 text-xs text-ink-2 border-t border-rule-subtle pt-4">
              Kami menghilangkan seluruh kerepotan tersebut agar Anda dapat fokus menyambut tamu dengan tenang.
            </p>
          </div>

          {/* Right Column: Structured System (7 Cols) */}
          <div className="lg:col-span-7 bg-forest text-white rounded-xl p-6 sm:p-10 flex flex-col justify-between shadow-xs">
            <div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">
                Sajian berkelas, rasa teruji, dan pelayanan terpercaya.
              </h3>
              <p className="text-sm text-sage leading-relaxed mb-8">
                Kami menggabungkan kelezatan masakan tradisional & modern dengan manajemen pengantaran disiplin. Dimasak dari bahan baku segar di hari H, higienis, dan disajikan dengan standar kebersihan tertinggi.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {solutions.map((s) => (
                  <div key={s.step} className="border-t border-white/20 pt-3 text-left">
                    <span className="font-mono text-xs font-bold text-leaf tabular-nums block mb-1">
                      {s.step}
                    </span>
                    <h4 className="font-display font-bold text-sm text-white mb-1.5">
                      {s.title}
                    </h4>
                    <p className="text-xs text-sage leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-sage">
                Tersedia pesanan Nasi Kotak (min. 15 box) hingga Prasmanan (50–200+ pax).
              </span>
              <button
                type="button"
                onClick={() => onNavigate('catalog')}
                className="inline-flex items-center gap-2 text-xs font-semibold text-citrus hover:text-white active:scale-[0.99] disabled:opacity-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fresh cursor-pointer"
              >
                <span className="whitespace-nowrap">Lihat semua menu acara</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
