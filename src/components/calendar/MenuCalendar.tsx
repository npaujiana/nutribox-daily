import React, { useState } from 'react';
import { sampleCalendarMenus, emptyStateInfo } from '../../data/menuCalendar';
import { CalendarMenuItem } from '../../types';
import { MenuDetailModal } from './MenuDetailModal';
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Filter,
  MessageSquare,
  CalendarDays,
  Info,
} from 'lucide-react';

interface MenuCalendarProps {
  onOpenWhatsApp: (msg?: string) => void;
}

export const MenuCalendar: React.FC<MenuCalendarProps> = ({ onOpenWhatsApp }) => {
  const [viewMode, setViewMode] = useState<'weekly' | 'monthly'>('weekly');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [weekOffset, setWeekOffset] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState<string>('2026-11-09');
  const [selectedMenuModal, setSelectedMenuModal] = useState<CalendarMenuItem | null>(null);

  const categories = [
    { id: 'all', label: 'Semua kategori' },
    { id: 'box', label: 'Nasi Kotak & Bento' },
    { id: 'buffet', label: 'Prasmanan / Buffet' },
    { id: 'snack', label: 'Snack Box & Kudapan' },
    { id: 'tumpeng', label: 'Tumpeng & Hantaran' },
  ];

  const getWeekLabel = (offset: number) => {
    if (offset === 0) return 'Minggu berjalan (jadwal rekomendasi)';
    if (offset === 1) return 'Minggu depan (booking dibuka)';
    if (offset === -1) return 'Minggu sebelumnya';
    return `Periode minggu (${offset > 0 ? `+${offset}` : offset})`;
  };

  const rawMenus = weekOffset === 0 ? sampleCalendarMenus : [];
  const currentMenus = activeCategory === 'all'
    ? rawMenus
    : rawMenus.filter((m) => m.category === activeCategory);

  const activeMenu = currentMenus.find((m) => m.date === selectedDate) || currentMenus[0] || null;

  const daysInMonth = Array.from({ length: 30 }, (_, i) => {
    const day = i + 1;
    const dateStr = `2026-11-${day < 10 ? `0${day}` : day}`;
    const dayOfWeek = (day + 6) % 7;
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const hasSampleMenu = weekOffset === 0 && sampleCalendarMenus.some((m) => m.date === dateStr);
    return { day, dateStr, isWeekend, hasSampleMenu };
  });

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-20 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-3xl mb-8 sm:mb-10 text-left">
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-forest tracking-tight">
            Jadwal rekomendasi & ketersediaan tanggal.
          </h1>
          <p className="mt-3 text-sm sm:text-lg text-ink-2 leading-relaxed">
            Dapur pusat kami melayani katering acara setiap hari. Cek rekomendasi menu mingguan dan konsultasikan ketersediaan slot tanggal acara Anda.
          </p>
        </div>

        {/* Calendar Control Toolbar */}
        <div className="bg-paper border border-rule rounded-xl p-4 sm:p-5 mb-8 shadow-xs space-y-4 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            {/* View Mode Toggle: Weekly vs Monthly */}
            <div className="inline-flex p-1 rounded-lg bg-paper-2 border border-rule-subtle self-start">
              <button
                type="button"
                onClick={() => setViewMode('weekly')}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs font-semibold transition-colors active:scale-[0.99] disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer ${
                  viewMode === 'weekly'
                    ? 'bg-forest text-white shadow-xs'
                    : 'text-ink-2 hover:text-forest'
                }`}
              >
                Tampilan Mingguan
              </button>
              <button
                type="button"
                onClick={() => setViewMode('monthly')}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs font-semibold transition-colors active:scale-[0.99] disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer ${
                  viewMode === 'monthly'
                    ? 'bg-forest text-white shadow-xs'
                    : 'text-ink-2 hover:text-forest'
                }`}
              >
                Kalender Tanggal Acara
              </button>
            </div>

            {/* Week Offset Navigator */}
            {viewMode === 'weekly' && (
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => setWeekOffset(weekOffset - 1)}
                  className="p-2 rounded-lg border border-rule bg-paper hover:bg-paper-2 text-forest active:scale-[0.99] disabled:opacity-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer"
                  aria-label="Minggu Sebelumnya"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="font-display font-semibold text-xs text-forest px-2">
                  {getWeekLabel(weekOffset)}
                </span>
                <button
                  type="button"
                  onClick={() => setWeekOffset(weekOffset + 1)}
                  className="p-2 rounded-lg border border-rule bg-paper hover:bg-paper-2 text-forest active:scale-[0.99] disabled:opacity-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer"
                  aria-label="Minggu Berikutnya"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pt-2 border-t border-rule-subtle">
            <Filter className="w-3.5 h-3.5 text-forest shrink-0 mr-1" />
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveCategory(c.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors whitespace-nowrap active:scale-[0.99] disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer ${
                  activeCategory === c.id
                    ? 'bg-forest text-white shadow-xs'
                    : 'bg-paper-2 border border-rule-subtle text-ink-2 hover:bg-paper'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* View Content */}
        {viewMode === 'weekly' ? (
          <div>
            {currentMenus.length > 0 ? (
              <div className="space-y-6">
                {/* Horizontal day cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {currentMenus.map((item) => {
                    const isSelected = selectedDate === item.date;
                    return (
                      <div
                        key={item.id}
                        onClick={() => setSelectedDate(item.date)}
                        className={`cursor-pointer rounded-xl p-4 border transition-colors flex flex-col justify-between text-left ${
                          isSelected
                            ? 'bg-forest text-white border-forest shadow-xs'
                            : 'bg-paper text-ink border-rule hover:border-forest shadow-xs'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between text-xs mb-2">
                            <span className={`font-bold text-xs ${
                              isSelected ? 'text-sage' : 'text-leaf'
                            }`}>
                              {item.dayName}
                            </span>
                            <span className={`text-[11px] tabular-nums ${isSelected ? 'text-mint' : 'text-ink-2'}`}>
                              {item.date}
                            </span>
                          </div>

                          <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-3 bg-paper-2 border border-rule-subtle">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                            <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-forest text-white text-[10px] font-semibold">
                              {item.categoryLabel}
                            </span>
                          </div>

                          <h3 className="font-display font-bold text-sm leading-snug line-clamp-2">
                            {item.name}
                          </h3>
                        </div>

                        <div className="mt-3 pt-2 border-t border-rule-subtle flex items-center justify-between text-xs">
                          <span className={`font-bold tabular-nums ${isSelected ? 'text-citrus' : 'text-forest'}`}>
                            {item.portionInfo?.split('•')[0]?.trim() || 'Porsi Kenyang'}
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedMenuModal(item);
                            }}
                            className={`text-xs font-semibold underline underline-offset-2 active:scale-[0.99] disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer ${
                              isSelected ? 'text-white' : 'text-forest hover:text-leaf'
                            }`}
                          >
                            <span>Detail</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Selected Day Spotlight Preview */}
                {activeMenu && (
                  <div className="bg-paper border border-rule rounded-xl p-6 sm:p-8 shadow-xs text-left">
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-rule-subtle">
                      <div className="flex items-center gap-2 text-xs font-semibold text-leaf">
                        <CalendarDays className="w-4 h-4 text-forest" />
                        <span>Rekomendasi Acara: {activeMenu.dayName}, {activeMenu.date}</span>
                        <span>•</span>
                        <span className="text-ink-2">Garansi Tiba H-1 Jam Acara</span>
                      </div>
                      <span className="px-2.5 py-1 rounded-md bg-paper-2 border border-rule-subtle text-ink-2 text-xs font-medium">
                        Slot Tanggal Tersedia
                      </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6">
                      <div className="lg:col-span-4 rounded-lg overflow-hidden aspect-[4/3] bg-paper-2 border border-rule-subtle">
                        <img
                          src={activeMenu.image}
                          alt={activeMenu.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="lg:col-span-8 space-y-3 text-left">
                        <span className="text-xs font-semibold text-leaf block">
                          {activeMenu.categoryLabel}
                        </span>
                        <h2 className="font-display font-bold text-2xl text-forest">
                          {activeMenu.name}
                        </h2>
                        <p className="text-xs sm:text-sm text-ink-2 leading-relaxed">
                          {activeMenu.description}
                        </p>

                        <div className="flex flex-wrap gap-3 pt-2 text-xs">
                          <div className="px-3 py-1.5 rounded-lg bg-paper-2 border border-rule-subtle">
                            <span className="text-ink-2 block text-xs">Kategori:</span>
                            <span className="font-bold text-forest">{activeMenu.categoryLabel}</span>
                          </div>
                          <div className="px-3 py-1.5 rounded-lg bg-paper-2 border border-rule-subtle">
                            <span className="text-ink-2 block text-xs">Standar Porsi:</span>
                            <span className="font-bold text-forest">Kenyang Dewasa</span>
                          </div>
                          <div className="px-3 py-1.5 rounded-lg bg-paper-2 border border-rule-subtle">
                            <span className="text-ink-2 block text-xs">Ketentuan:</span>
                            <span className="font-bold text-forest">{activeMenu.portionInfo?.split('•')[1]?.trim() || 'Min. 15 Pax'}</span>
                          </div>
                          <div className="px-3 py-1.5 rounded-lg bg-paper-2 border border-rule-subtle">
                            <span className="text-ink-2 block text-xs">Sertifikasi:</span>
                            <span className="font-bold text-forest">100% Halal</span>
                          </div>
                        </div>

                        <div className="pt-4 flex flex-wrap items-center gap-3">
                          <button
                            type="button"
                            onClick={() => setSelectedMenuModal(activeMenu)}
                            className="px-4 py-2.5 rounded-lg border border-forest text-forest hover:bg-paper-2 active:scale-[0.99] disabled:opacity-50 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer whitespace-nowrap"
                          >
                            <span>Lihat rincian paket</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              const msg = `Halo Nutribox Catering, saya ingin memesan menu ${activeMenu.name} untuk acara pada tanggal ${activeMenu.date} (${activeMenu.dayName}). Apakah kuota pengantaran ke area saya masih tersedia?`;
                              onOpenWhatsApp(msg);
                            }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-forest hover:bg-forest-hover active:scale-[0.99] disabled:opacity-50 text-white text-xs font-semibold shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer whitespace-nowrap"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>Pesan untuk tanggal ini</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Informative Empty State */
              <div className="bg-paper border border-rule rounded-xl p-10 sm:p-14 text-center max-w-2xl mx-auto shadow-xs">
                <div className="w-14 h-14 rounded-lg bg-paper-2 border border-rule text-leaf flex items-center justify-center mx-auto mb-5">
                  <CalendarIcon className="w-7 h-7" />
                </div>
                <h2 className="font-display font-bold text-2xl text-forest mb-2">
                  {emptyStateInfo.title}
                </h2>
                <p className="text-sm text-ink-2 max-w-md mx-auto mb-6 leading-relaxed">
                  {emptyStateInfo.supportingText}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setWeekOffset(0)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-rule text-forest text-xs font-semibold hover:bg-paper-2 active:scale-[0.99] disabled:opacity-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer whitespace-nowrap"
                  >
                    <span>Kembali ke rotasi awal</span>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      onOpenWhatsApp(
                        'Halo Nutribox Catering, saya ingin menanyakan jadwal ketersediaan tanggal dan rekomendasi menu katering acara untuk periode mendatang.'
                      )
                    }
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-forest text-white text-xs font-semibold hover:bg-forest-hover shadow-xs active:scale-[0.99] disabled:opacity-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer whitespace-nowrap"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{emptyStateInfo.ctaText}</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Monthly Calendar Grid View */
          <div className="bg-paper border border-rule rounded-xl p-6 sm:p-8 shadow-xs text-left">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-rule-subtle">
              <div>
                <h2 className="font-display font-bold text-lg text-forest">
                  November 2026
                </h2>
                <p className="text-xs text-ink-2">
                  Melayani pengiriman acara setiap hari: Senin sampai Minggu (termasuk hari libur nasional).
                </p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-md bg-paper-2 border border-rule text-forest font-semibold">
                Slot Pengantaran Buka
              </span>
            </div>

            {/* Calendar Days Header */}
            <div className="grid grid-cols-7 gap-1 text-center font-bold text-xs text-ink-2 pb-2 mb-2">
              <span className="text-terracotta">Min</span>
              <span>Sen</span>
              <span>Sel</span>
              <span>Rab</span>
              <span>Kam</span>
              <span>Jum</span>
              <span className="text-forest">Sab</span>
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-2">
              {daysInMonth.map((d) => (
                <div
                  key={d.day}
                  onClick={() => {
                    setSelectedDate(d.dateStr);
                    if (d.hasSampleMenu) {
                      const m = sampleCalendarMenus.find((x) => x.date === d.dateStr);
                      if (m) setSelectedMenuModal(m);
                    }
                  }}
                  className={`min-h-[56px] sm:min-h-[85px] p-1.5 sm:p-2 rounded-lg border text-left flex flex-col justify-between transition-colors ${
                    d.hasSampleMenu
                      ? 'bg-paper-2 border-leaf hover:bg-paper cursor-pointer shadow-xs'
                      : 'bg-paper border-rule hover:border-forest cursor-pointer'
                  }`}
                >
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="tabular-nums">{d.day}</span>
                    {d.hasSampleMenu && (
                      <span className="w-2 h-2 rounded-full bg-fresh"></span>
                    )}
                  </div>
                  <div>
                    {d.hasSampleMenu ? (
                      <span className="text-[10px] sm:text-[11px] font-semibold text-forest block truncate">
                        <span className="hidden sm:inline">Contoh menu</span>
                        <span className="sm:hidden text-fresh">• Menu</span>
                      </span>
                    ) : (
                      <span className="text-[10px] sm:text-[11px] text-leaf block truncate">
                        Slot Buka
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-rule-subtle flex flex-wrap items-center justify-between gap-3 text-xs text-ink-2">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-fresh"></span>
                  <span>Ada rekomendasi menu</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-leaf"></span>
                  <span>Slot tanggal acara buka</span>
                </span>
              </div>
              <button
                type="button"
                onClick={() =>
                  onOpenWhatsApp(
                    'Halo Nutribox Catering, saya ingin menanyakan booking slot katering acara untuk tanggal tertentu bulan ini.'
                  )
                }
                className="font-semibold text-forest hover:text-leaf transition-colors active:scale-[0.99] disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer whitespace-nowrap"
              >
                <span>Tanya ketersediaan jadwal via WhatsApp</span>
              </button>
            </div>
          </div>
        )}

        {/* Calendar Footer Info */}
        <div className="mt-10 p-5 rounded-lg bg-paper border border-rule text-xs text-ink-2 flex items-start gap-3 text-left">
          <Info className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
          <p>
            Untuk pesanan Nasi Kotak & Snack Box konfirmasi minimal H-1 sebelum pukul 17.00 WIB. Untuk Paket Prasmanan dan Tumpeng disarankan booking H-3 sampai H-7 guna memastikan ketersediaan set pemanas dan staf pramusaji.
          </p>
        </div>
      </div>

      {/* Modal Detail */}
      <MenuDetailModal
        item={selectedMenuModal}
        onClose={() => setSelectedMenuModal(null)}
        onOpenWhatsApp={onOpenWhatsApp}
      />
    </div>
  );
};
