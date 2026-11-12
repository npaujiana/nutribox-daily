import React from 'react';
import { BusinessConfig } from '../../types';
import { AlertCircle, Settings } from 'lucide-react';

interface AboutUsProps {
  config: BusinessConfig;
  onOpenConfig: () => void;
  onNavigate: (tabId: string) => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ config, onOpenConfig }) => {
  const brandValues = [
    {
      index: '01',
      title: 'Cita Rasa Otentik',
      desc: 'Bumbu rempah nusantara melimpah yang diolah dari bahan segar di hari H acara untuk kenikmatan rasa yang berkesan.',
    },
    {
      index: '02',
      title: '100% Halal & Higienis',
      desc: 'Standar kebersihan dapur produksi komersial yang teruji, higienis, dan tersertifikasi halal.',
    },
    {
      index: '03',
      title: 'Disiplin Waktu H-1 Jam',
      desc: 'Garansi pesanan tiba 60 menit sebelum acara dimulai, memberikan ketenangan dan kenyamanan bagi tuan rumah.',
    },
    {
      index: '04',
      title: 'Porsi Memuaskan',
      desc: 'Takaran gramatur lauk utama dan karbohidrat yang pas mengenyangkan, dirancang memenuhi selera seluruh tamu undangan.',
    },
    {
      index: '05',
      title: 'Kemasan Rapi & Estetik',
      desc: 'Mulai dari bento box bersekat anti-bocor hingga chafing dish pemanas roll-top stainless steel mewah.',
    },
    {
      index: '06',
      title: 'Konsultasi Menu Fleksibel',
      desc: 'Kemudahan kustomisasi lauk, simulasi budget gratis, dan customer service yang ramah serta responsif.',
    },
  ];

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-20 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero: Heading leads directly */}
        <div className="max-w-3xl mb-8 sm:mb-14 text-left">
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-forest tracking-tight">
            Sajian istimewa untuk setiap momen berharga Anda.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-ink-2 leading-relaxed">
            Nutribox Catering hadir menjadi mitra terpercaya penyedia konsumsi acara lezat, higienis, dan terorganisir rapi di BSD City, Tangerang Selatan, hingga seluruh Jabodetabek.
          </p>
        </div>

        {/* Service Philosophy: Lezat - Tepat Waktu - Bebas Repot */}
        <div className="bg-forest text-white rounded-xl p-8 sm:p-10 mb-14 shadow-xs text-left">
          <div className="max-w-3xl">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-6">
              Tiga Pilar Layanan Katering Kami
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-4 rounded-lg bg-paper-elevated/10 border border-white/20">
                <span className="font-display font-black text-2xl text-citrus block">Kelezatan</span>
                <p className="text-xs text-sage mt-2 leading-relaxed">
                  Perhatian mendalam terhadap racikan bumbu rempah alami, kematangan daging sempurna, dan rasa gurih yang disukai seluruh generasi tamu.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-paper-elevated/10 border border-white/20">
                <span className="font-display font-black text-2xl text-leaf block">Tepat Waktu</span>
                <p className="text-xs text-sage mt-2 leading-relaxed">
                  Disiplin pengantaran dengan garansi tiba H-1 jam sebelum acara dimulai, tanpa membuat panik tuan rumah dan panitia.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-paper-elevated/10 border border-white/20">
                <span className="font-display font-black text-2xl text-white block">Bebas Repot</span>
                <p className="text-xs text-sage mt-2 leading-relaxed">
                  Layanan terpadu lengkap meja buffet bercover, chafing dish pemanas, alat makan keramik, hingga staf pramusaji profesional.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Story Section */}
        <div className="bg-paper border border-rule rounded-xl p-8 sm:p-10 mb-14 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4 text-left">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-forest">
                Membantu setiap tuan rumah menjamu tamu dengan percaya diri.
              </h2>
              <p className="text-xs sm:text-sm text-ink-2 leading-relaxed">
                Nutribox Catering berawal dari pemahaman mendalam tentang betapa menantangnya mengelola konsumsi sebuah acara. Kekhawatiran makanan datang terlambat, rasa yang mengecewakan, atau porsi yang kurang seringkali menjadi beban pikiran terbesar bagi tuan rumah dan panitia acara kantor.
              </p>
              <p className="text-xs sm:text-sm text-ink-2 leading-relaxed">
                Kami hadir dengan sistem dapur produksi berstandar komersial dan armada pengantaran berinsulasi suhu untuk memastikan setiap box dan setiap meja prasmanan tersaji dalam kondisi hangat, harum, dan tertata rapi.
              </p>
              <p className="text-xs sm:text-sm leading-relaxed font-semibold text-forest">
                Mulai dari syukuran keluarga 15 orang hingga resepsi pesta 500+ tamu, kami berkomitmen memberikan pengalaman kuliner terbaik yang membanggakan Anda di depan para tamu undangan.
              </p>
            </div>

            <div className="lg:col-span-6 rounded-lg overflow-hidden aspect-[4/3] bg-paper-2 border border-rule-subtle shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80"
                alt="Layanan katering prasmanan acara"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* 6 Core Brand Values */}
        <div className="mb-14">
          <div className="max-w-2xl mb-8 text-left">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-forest">
              Enam Komitmen Layanan Kami
            </h2>
            <p className="text-xs sm:text-sm text-ink-2 mt-2">
              Prinsip kerja yang membimbing setiap hidangan dan pelayanan tim kami di lapangan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandValues.map((v) => (
              <div
                key={v.index}
                className="p-6 rounded-xl bg-paper border border-rule hover:border-forest transition-colors shadow-xs text-left"
              >
                <span className="font-mono text-xs font-bold text-leaf tabular-nums block mb-2">
                  {v.index}
                </span>
                <h3 className="font-display font-bold text-base text-forest mb-2">
                  {v.title}
                </h3>
                <p className="text-xs text-ink-2 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Founder Section */}
        <div className="bg-paper border border-rule rounded-xl p-8 sm:p-10 mb-14 shadow-xs text-left">
          <div className="flex items-center justify-between pb-4 border-b border-rule-subtle mb-6">
            <div>
              <h2 className="font-display font-bold text-xl text-forest">
                Tim Manajemen Operasional
              </h2>
            </div>
            <button
              type="button"
              onClick={onOpenConfig}
              className="text-xs font-semibold text-forest hover:text-leaf active:scale-[0.99] disabled:opacity-50 transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer"
            >
              <Settings className="w-3.5 h-3.5" />
              <span className="whitespace-nowrap">Kelola status verifikasi</span>
            </button>
          </div>

          {config.founder.isVerifiedPublic ? (
            <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-lg bg-paper-2 border border-rule-subtle">
              <div className="w-20 h-20 rounded-full bg-forest text-citrus flex items-center justify-center font-display font-black text-xl shrink-0">
                NM
              </div>
              <div>
                <span className="text-xs font-semibold text-leaf block">
                  {config.founder.role}
                </span>
                <h3 className="font-display font-bold text-lg text-forest">
                  {config.founder.name}
                </h3>
                <p className="text-xs text-ink-2 mt-2 leading-relaxed">
                  {config.founder.bio}
                </p>
              </div>
            </div>
          ) : (
            <div className="p-6 rounded-lg bg-paper-2 border border-rule flex items-start gap-4">
              <AlertCircle className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display font-semibold text-sm text-forest">
                  Profil Manajemen Operasional Kuliner
                </h3>
                <p className="text-xs text-ink-2 mt-1 leading-relaxed">
                  Dikelola oleh tim kuliner berpengalaman di bawah kepemimpinan {config.founder.name} ({config.founder.role}), dengan komitmen menghadirkan cita rasa bintang lima dan ketepatan waktu pengantaran di setiap acara Anda.
                </p>
                <div className="mt-3">
                  <button
                    type="button"
                    onClick={onOpenConfig}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-paper border border-rule text-forest text-xs font-semibold hover:bg-paper-2 active:scale-[0.99] disabled:opacity-50 transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer"
                  >
                    <span>Buka panel verifikasi profil</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Operating Kitchen Notice */}
        <div className="p-6 rounded-xl bg-paper-2 border border-rule-subtle text-xs text-ink-2 space-y-1 text-left">
          <p className="font-semibold text-forest">
            Fasilitas dapur dan sertifikasi halal:
          </p>
          <p className="leading-relaxed">
            Dapur katering kami berlokasi di Central Production Kitchen BSD City dengan kapasitas produksi hingga 1.500+ porsi per hari. Makanan diolah segar di hari H acara menggunakan bahan baku 100% Halal dengan standar sanitasi dapur komersial terpadu.
          </p>
        </div>
      </div>
    </div>
  );
};
