import React from 'react';
import { BusinessConfig } from '../../types';
import { AlertCircle, Settings } from 'lucide-react';

interface AboutNutriBoxProps {
  config: BusinessConfig;
  onOpenConfig: () => void;
  onNavigate: (tabId: string) => void;
}

export const AboutNutriBox: React.FC<AboutNutriBoxProps> = ({ config, onOpenConfig }) => {
  const brandValues = [
    {
      title: 'Nutrition Transparency',
      desc: 'Transparansi estimasi kalori dan makronutrisi pada setiap box agar Anda memegang kendali penuh atas asupan harian.',
    },
    {
      title: 'Freshness',
      desc: 'Bahan baku segar dimasak setiap pagi hari kerja mulai pukul 06.00 WIB tanpa sisa makanan kemarin.',
    },
    {
      title: 'Convenience',
      desc: 'Kemasan siap santap yang praktis dikirim langsung ke meja kantor atau tempat tinggal Anda sebelum waktu makan siang.',
    },
    {
      title: 'Consistency',
      desc: 'Standar penimbangan porsi dan cita rasa yang konsisten di setiap hari pengiriman.',
    },
    {
      title: 'Variety',
      desc: 'Menu berganti setiap minggu menghadirkan kreasi kuliner nusantara, Asia modern, dan western grill yang tidak monoton.',
    },
    {
      title: 'Customer Focus',
      desc: 'Layanan customer service yang responsif dan fleksibilitas penjadwalan katering sesuai dinamika aktivitas Anda.',
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-xs font-semibold text-leaf mb-2 block">
            Mengenal NutriBox Daily
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-forest tracking-tight">
            Better nutrition for everyday living.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-ink-muted leading-relaxed">
            NutriBox Daily hadir untuk membantu masyarakat urban menikmati makanan bernutrisi dengan cara yang lebih praktis, lezat, dan transparan di tengah rutinitas kerja yang padat.
          </p>
        </div>

        {/* Brand Philosophy: Nutri - Box - Daily */}
        <div className="bg-forest text-white rounded-3xl p-8 sm:p-12 mb-16 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-citrus block mb-2">
              Filosofi di balik nama kami
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-6">
              Makna di balik nama NutriBox Daily
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              <div className="p-4 rounded-2xl bg-paper-elevated/10 border border-white/20">
                <span className="font-display font-black text-2xl text-citrus block">Nutri</span>
                <p className="text-xs text-sage mt-2 leading-relaxed">
                  Perhatian mendalam terhadap kualitas nutrisi, kebersihan bahan baku, dan keseimbangan zat gizi tubuh.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-paper-elevated/10 border border-white/20">
                <span className="font-display font-black text-2xl text-leaf block">Box</span>
                <p className="text-xs text-sage mt-2 leading-relaxed">
                  Makanan higienis siap santap dalam kemasan rapi yang mudah dinikmati di mana saja tanpa repot.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-paper-elevated/10 border border-white/20">
                <span className="font-display font-black text-2xl text-sage block">Daily</span>
                <p className="text-xs text-sage mt-2 leading-relaxed">
                  Membangun kebiasaan makan sehat yang berkesinambungan dan menyatu dengan rutinitas harian Anda.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Story Section */}
        <div className="bg-paper-elevated border border-rule-subtle rounded-3xl p-8 sm:p-12 mb-16 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4 text-left">
              <span className="text-xs font-semibold text-leaf block">
                Cerita kami
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-forest">
                Menghapus gesekan dalam menjaga pola makan sehat.
              </h3>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                NutriBox Daily berawal dari pengamatan terhadap kebiasaan pekerja kantoran di kawasan Tangerang Selatan dan sekitarnya yang sering kesulitan mendapatkan makan siang sehat karena keterbatasan waktu persiapan di pagi hari dan minimnya pilihan makan siang terukur di sekitar kantor.
              </p>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Di sisi lain, masyarakat yang sedang berupaya mengelola berat badan atau menjalani rutinitas olahraga rutin kerap kesulitan mengetahui kandungan kalori, garam, dan minyak dari makanan yang mereka beli di luar.
              </p>
              <p className="text-xs sm:text-sm leading-relaxed font-medium text-forest">
                Dari kebutuhan nyata tersebut, NutriBox Daily dikembangkan sebagai layanan katering makan siang personal yang mengedepankan kepraktisan santap, transparansi nutrisi, dan konsistensi kualitas tanpa penambahan MSG.
              </p>
            </div>

            <div className="lg:col-span-6 rounded-3xl overflow-hidden aspect-[4/3] bg-paper-2 shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=1000&q=80"
                alt="Bahan baku segar NutriBox Daily"
                className="w-full h-full object-cover"
                fetchPriority="high"
                width={1000}
                height={750}
              />
            </div>
          </div>
        </div>

        {/* 6 Core Brand Values */}
        <div className="mb-16">
          <div className="max-w-2xl mb-10 text-left">
            <span className="text-xs font-semibold text-leaf mb-2 block">
              Prinsip fondasi
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-forest">
              Enam nilai utama NutriBox Daily
            </h3>
            <p className="text-xs sm:text-sm text-ink-muted mt-2">
              Prinsip kerja yang membimbing setiap keputusan di dapur dan operasional layanan kami.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandValues.map((v, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl bg-paper-elevated border border-rule-subtle hover:border-leaf transition-colors shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-mint text-forest flex items-center justify-center font-bold text-sm mb-4">
                  0{i + 1}
                </div>
                <h4 className="font-display font-bold text-base text-forest mb-2">
                  {v.title}
                </h4>
                <p className="text-xs text-ink-muted leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Founder Section (Strictly respecting Section 11.3 & 19.5 of master prompt) */}
        <div className="bg-paper-elevated border border-rule-subtle rounded-3xl p-8 sm:p-10 mb-16 shadow-xs">
          <div className="flex items-center justify-between pb-4 border-b border-rule-subtle mb-6">
            <div>
              <span className="text-xs font-semibold text-leaf block">
                Struktur manajemen dan pendiri
              </span>
              <h3 className="font-display font-bold text-xl text-forest">
                Manajemen NutriBox Daily
              </h3>
            </div>
            <button
              type="button"
              onClick={onOpenConfig}
              className="text-xs font-semibold text-forest hover:text-leaf active:scale-[0.99] transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
            >
              <Settings className="w-3.5 h-3.5" />
              <span className="whitespace-nowrap">Kelola status verifikasi</span>
            </button>
          </div>

          {config.founder.isVerifiedPublic ? (
            <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-paper-2 border border-rule-subtle">
              <div className="w-24 h-24 rounded-full bg-forest text-citrus flex items-center justify-center font-display font-black text-2xl shrink-0">
                NM
              </div>
              <div>
                <span className="text-[10px] font-semibold text-leaf block">
                  {config.founder.role}
                </span>
                <h4 className="font-display font-bold text-lg text-forest">
                  {config.founder.name}
                </h4>
                <p className="text-xs text-ink-muted mt-2 leading-relaxed">
                  {config.founder.bio}
                </p>
              </div>
            </div>
          ) : (
            <div className="p-6 rounded-2xl bg-paper-2 border border-rule flex items-start gap-4">
              <AlertCircle className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display font-semibold text-sm text-forest">
                  Status verifikasi profil publik: tahap penyelarasan legalitas internal
                </h4>
                <p className="text-xs text-ink-muted mt-1 leading-relaxed">
                  Sesuai pedoman integritas data bisnis, informasi publikasi profil pimpinan dan pendiri ({config.founder.name}, {config.founder.role}) disiapkan dalam status pratinjau dan baru dipublikasikan secara penuh setelah konfirmasi badan hukum bisnis diselesaikan.
                </p>
                <div className="mt-3">
                  <button
                    type="button"
                    onClick={onOpenConfig}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-mint text-forest text-xs font-semibold hover:bg-mint/80 active:scale-[0.99] transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                  >
                    <span>Buka panel verifikasi profil pendiri</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Operating Kitchen Notice */}
        <div className="p-6 rounded-3xl bg-paper-2 border border-rule-subtle text-xs text-ink-muted space-y-2">
          <p className="font-semibold text-forest">
            Catatan fasilitas dan sertifikasi:
          </p>
          <p className="leading-relaxed">
            NutriBox Daily mengoperasikan dapur katering khusus meal preparation tertutup di kawasan BSD City. Makanan diproduksi segar setiap pagi tanpa penambahan MSG. Seluruh klaim nutrisi dihitung berdasarkan porsi resep terstandar, bukan klaim medis atau klaim fasilitas bebas alergen total.
          </p>
        </div>
      </div>
    </div>
  );
};
