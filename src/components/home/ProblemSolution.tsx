import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProblemSolutionProps {
  onNavigate: (tabId: string) => void;
}

export const ProblemSolution: React.FC<ProblemSolutionProps> = ({ onNavigate }) => {
  const problems = [
    {
      title: 'Tidak sempat menyiapkan bekal',
      desc: 'Waktu pagi habis di perjalanan, sementara memasak dan meal prep mandiri menyita waktu istirahat.',
    },
    {
      title: 'Sulit mengetahui kandungan nutrisi',
      desc: 'Makanan pesan antar atau warung sekitar jarang memiliki takaran kalori, garam, dan minyak yang jelas.',
    },
    {
      title: 'Sulit menjaga konsistensi pola makan',
      desc: 'Niat makan sehat sering terhenti karena ketiadaan jadwal katering yang teratur dan praktis.',
    },
    {
      title: 'Bosan dengan menu yang monoton',
      desc: 'Katering konvensional menyajikan olahan berulang yang cepat membuat jenuh setelah beberapa hari.',
    },
  ];

  const solutions = [
    {
      step: '01',
      title: 'Siap santap di meja kantor',
      desc: 'Pengantaran tiba 10.30 sampai 11.45 WIB, siap dinikmati tanpa perlu antre saat jam istirahat.',
    },
    {
      step: '02',
      title: 'Nutrisi terukur transparan',
      desc: 'Estimasi kalori dan makronutrisi tercantum jelas di setiap box untuk mendukung target pola makan Anda.',
    },
    {
      step: '03',
      title: 'Rotasi menu mingguan',
      desc: 'Variasi olahan nusantara modern, fusion Asia, dan western grill yang berganti setiap minggu.',
    },
    {
      step: '04',
      title: 'Langganan fleksibel',
      desc: 'Pilihan paket 5 hari atau 20 hari kerja dengan opsi pause bila Anda sedang dinas keluar kota.',
    },
  ];

  return (
    <section className="py-20 bg-paper-2 border-b border-rule-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Heading leads directly */}
        <div className="max-w-3xl mb-14 text-left">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-forest tracking-tight leading-tight">
            Jadwal kerja padat bukan alasan untuk mengorbankan makan sehat.
          </h2>
          <p className="mt-4 text-base text-ink-2 leading-relaxed">
            Di tengah ritme dinamis kawasan BSD City dan Tangerang Selatan, NutriBox Daily dirancang untuk menghapus kerepotan persiapan makan siang sehari-hari.
          </p>
        </div>

        {/* Asymmetrical 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Real Workplace Obstacles (5 Cols) */}
          <div className="lg:col-span-5 bg-paper border border-rule rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <h3 className="font-display font-bold text-xl text-forest mb-6">
                Mengapa pola makan sehat sering terhenti di tengah jalan?
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
              NutriBox Daily hadir untuk menghapus gesekan ini dari rutinitas harian Anda.
            </p>
          </div>

          {/* Right Column: NutriBox Daily Structured System (7 Cols) */}
          <div className="lg:col-span-7 bg-forest text-white rounded-xl p-6 sm:p-10 flex flex-col justify-between shadow-xs">
            <div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">
                Makanan terukur, rasa lezat, dan tiba tepat waktu.
              </h3>
              <p className="text-sm text-sage leading-relaxed mb-8">
                Kami menggabungkan prinsip gizi seimbang dengan cita rasa kuliner modern. Dimasak segar setiap pagi tanpa penambahan MSG, ditimbang secara proporsional, dan diantar langsung ke meja kantor Anda.
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
                Tersedia pesanan satuan (1 box) dan paket langganan mingguan.
              </span>
              <button
                type="button"
                onClick={() => onNavigate('catalog')}
                className="inline-flex items-center gap-2 text-xs font-semibold text-citrus hover:text-white active:scale-[0.99] disabled:opacity-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fresh cursor-pointer"
              >
                <span className="whitespace-nowrap">Lihat semua menu</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
