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
    { id: 'balance', label: 'Daily Balance' },
    { id: 'lean', label: 'Weight Management' },
    { id: 'protein', label: 'High Protein' },
    { id: 'active', label: 'Active Meal' },
  ];

  const getWeekLabel = (offset: number) => {
    if (offset === 0) return 'Minggu berjalan (contoh menu rotasi)';
    if (offset === 1) return 'Minggu depan (pre-order buka Jumat 17.00 WIB)';
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
    <div className="pt-28 pb-20 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-3xl mb-10 text-left">
          <span className="text-sm font-medium text-fresh mb-1.5 block">
            Jadwal rotasi makanan sehat
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-forest tracking-tight">
            Kalender Menu Interaktif.
          </h1>
          <p className="mt-3 text-base text-ink-2 leading-relaxed">
            NutriBox Daily merilis jadwal menu berganti setiap minggu. Jelajahi sajian harian dengan estimasi kalori dan makronutrisi lengkap di bawah ini.
          </p>
        </div>

        {/* Calendar Control Toolbar */}
        <div className="bg-paper-elevated border border-rule-subtle rounded-card p-5 mb-8 shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* View Mode Toggle: Weekly vs Monthly */}
            <div className="inline-flex p-1 rounded-card-sm bg-paper-2 border border-rule-subtle self-start">
              <button
                onClick={() => setViewMode('weekly')}
                className={`px-4 py-2 rounded-card-sm text-xs sm:text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
                  viewMode === 'weekly'
                    ? 'bg-forest text-accent-ink shadow-xs'
                    : 'text-ink-2 hover:text-forest'
                }`}
              >
                Tampilan mingguan
              </button>
              <button
                onClick={() => setViewMode('monthly')}
                className={`px-4 py-2 rounded-card-sm text-xs sm:text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
                  viewMode === 'monthly'
                    ? 'bg-forest text-accent-ink shadow-xs'
                    : 'text-ink-2 hover:text-forest'
                }`}
              >
                Tampilan kalender bulanan
              </button>
            </div>

            {/* Period Navigation */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setWeekOffset(weekOffset - 1)}
                className="p-2 rounded-card-sm border border-rule hover:bg-paper-3 text-forest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                title="Periode sebelumnya"
                aria-label="Periode sebelumnya"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="px-3.5 py-1.5 rounded-card-sm bg-paper-2 border border-rule-subtle text-xs font-semibold text-forest min-w-[240px] text-center">
                {getWeekLabel(weekOffset)}
              </div>
              <button
                onClick={() => setWeekOffset(weekOffset + 1)}
                className="p-2 rounded-card-sm border border-rule hover:bg-paper-3 text-forest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                title="Periode berikutnya"
                aria-label="Periode berikutnya"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              {weekOffset !== 0 && (
                <button
                  onClick={() => setWeekOffset(0)}
                  className="px-2.5 py-1.5 rounded-card-sm text-xs font-semibold text-fresh hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                >
                  Hari ini
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="pt-3 border-t border-rule-subtle flex items-center gap-2 overflow-x-auto pb-1">
            <span className="text-xs font-medium text-ink-2 shrink-0 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-3 py-1.5 rounded-card-sm text-xs font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
                  activeCategory === c.id
                    ? 'bg-forest text-accent-ink font-semibold'
                    : 'bg-paper-2 border border-rule-subtle text-ink hover:bg-paper-3'
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
                        className={`cursor-pointer rounded-card p-4 border transition-colors duration-200 flex flex-col justify-between ${
                          isSelected
                            ? 'bg-forest text-accent-ink border-forest shadow-md'
                            : 'bg-paper-elevated text-ink border-rule-subtle hover:border-fresh hover:shadow-xs'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between text-xs mb-2">
                            <span className={`font-bold text-xs ${
                              isSelected ? 'text-sage' : 'text-fresh'
                            }`}>
                              {item.dayName}
                            </span>
                            <span className={`text-xs ${isSelected ? 'text-mint' : 'text-ink-2'}`}>
                              {item.date}
                            </span>
                          </div>

                          <div className="relative aspect-[4/3] rounded-card-sm overflow-hidden mb-3 bg-paper-3">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                            <span className="absolute top-2 left-2 px-2 py-0.5 rounded-pill bg-forest text-accent-ink text-xs font-medium">
                              {item.categoryLabel}
                            </span>
                          </div>

                          <h4 className="font-display font-bold text-sm leading-snug line-clamp-2">
                            {item.name}
                          </h4>
                        </div>

                        <div className="mt-3 pt-2 border-t border-rule-subtle flex items-center justify-between text-xs">
                          <span className={`font-bold num ${isSelected ? 'text-citrus' : 'text-forest'}`}>
                            {item.calories} kcal
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedMenuModal(item);
                            }}
                            className={`text-xs font-semibold underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest rounded-sm ${
                              isSelected ? 'text-accent-ink' : 'text-forest hover:text-fresh'
                            }`}
                          >
                            Detail
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Selected Day Spotlight Preview */}
                {activeMenu && (
                  <div className="bg-paper-elevated border border-rule-subtle rounded-card p-6 sm:p-8 shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-rule-subtle">
                      <div className="flex items-center gap-2 text-xs font-semibold text-fresh">
                        <CalendarDays className="w-4 h-4 text-forest" />
                        <span>Fokus menu: {activeMenu.dayName}, {activeMenu.date}</span>
                        <span>•</span>
                        <span className="text-ink-2">Pengiriman 10.30 sampai 11.45 WIB</span>
                      </div>
                      <span className="px-2.5 py-1 rounded-card-sm bg-paper-2 border border-rule-subtle text-ink-2 text-xs font-medium">
                        Contoh menu rotasi mingguan
                      </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6">
                      <div className="lg:col-span-4 rounded-card-sm overflow-hidden aspect-[4/3] bg-paper-3">
                        <img
                          src={activeMenu.image}
                          alt={activeMenu.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="lg:col-span-8 space-y-3 text-left">
                        <span className="text-xs font-medium text-fresh block">
                          {activeMenu.categoryLabel}
                        </span>
                        <h3 className="font-display font-bold text-2xl text-forest">
                          {activeMenu.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-ink-2 leading-relaxed">
                          {activeMenu.description}
                        </p>

                        <div className="flex flex-wrap gap-3 pt-2 text-xs">
                          <div className="px-3 py-1.5 rounded-card-sm bg-paper-2 border border-rule-subtle">
                            <span className="text-ink-2 block text-xs">Energi:</span>
                            <span className="font-bold text-forest num">{activeMenu.calories} kcal</span>
                          </div>
                          <div className="px-3 py-1.5 rounded-card-sm bg-paper-2 border border-rule-subtle">
                            <span className="text-ink-2 block text-xs">Protein:</span>
                            <span className="font-bold text-forest num">{activeMenu.protein} g</span>
                          </div>
                          <div className="px-3 py-1.5 rounded-card-sm bg-paper-2 border border-rule-subtle">
                            <span className="text-ink-2 block text-xs">Karbohidrat:</span>
                            <span className="font-bold text-forest num">{activeMenu.carbohydrates} g</span>
                          </div>
                          <div className="px-3 py-1.5 rounded-card-sm bg-paper-2 border border-rule-subtle">
                            <span className="text-ink-2 block text-xs">Lemak:</span>
                            <span className="font-bold text-forest num">{activeMenu.fat} g</span>
                          </div>
                        </div>

                        <div className="pt-4 flex flex-wrap items-center gap-3">
                          <button
                            onClick={() => setSelectedMenuModal(activeMenu)}
                            className="px-4 py-2.5 rounded-card-sm border border-forest text-forest hover:bg-paper-3 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                          >
                            Lihat rincian bahan
                          </button>
                          <button
                            onClick={() => {
                              const msg = `Halo NutriBox Daily, saya ingin memesan menu ${activeMenu.name} untuk jadwal ${activeMenu.dayName} (${activeMenu.date}). Apakah kuota pengantaran ke area saya masih tersedia?`;
                              onOpenWhatsApp(msg);
                            }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-card-sm bg-forest hover:bg-forest-hover text-accent-ink text-xs font-semibold shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>Pesan menu tanggal ini</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Informative Empty State */
              <div className="bg-paper-elevated border border-rule-subtle rounded-card p-10 sm:p-14 text-center max-w-2xl mx-auto shadow-sm">
                <div className="w-16 h-16 rounded-card-sm bg-paper-2 border border-rule-subtle text-fresh flex items-center justify-center mx-auto mb-5">
                  <CalendarIcon className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl text-forest mb-2">
                  {emptyStateInfo.title}
                </h3>
                <p className="text-sm text-ink-2 max-w-md mx-auto mb-6 leading-relaxed">
                  {emptyStateInfo.supportingText}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => setWeekOffset(0)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-card-sm border border-rule text-forest text-xs font-semibold hover:bg-paper-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                  >
                    Kembali ke contoh menu rotasi
                  </button>
                  <button
                    onClick={() =>
                      onOpenWhatsApp(
                        'Halo NutriBox Daily, saya ingin menanyakan rilis menu katering terbaru untuk periode minggu mendatang.'
                      )
                    }
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-card-sm bg-forest text-accent-ink text-xs font-semibold hover:bg-forest-hover shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
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
          <div className="bg-paper-elevated border border-rule-subtle rounded-card p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-rule-subtle">
              <div>
                <h3 className="font-display font-bold text-lg text-forest">
                  November 2026
                </h3>
                <p className="text-xs text-ink-2">
                  Hari operasional reguler: Senin sampai Jumat (Sabtu, Minggu dan libur nasional libur produksi).
                </p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-pill bg-paper-3 text-forest font-semibold">
                Simulasi kalender bulanan
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
              <span className="text-muted">Sab</span>
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-2">
              {daysInMonth.map((d) => (
                <div
                  key={d.day}
                  onClick={() => {
                    if (!d.isWeekend) {
                      setSelectedDate(d.dateStr);
                      if (d.hasSampleMenu) {
                        const m = sampleCalendarMenus.find((x) => x.date === d.dateStr);
                        if (m) setSelectedMenuModal(m);
                      }
                    }
                  }}
                  className={`min-h-[70px] sm:min-h-[85px] p-2 rounded-card-sm border text-left flex flex-col justify-between transition-colors ${
                    d.isWeekend
                      ? 'bg-paper-2 border-rule-subtle text-muted cursor-not-allowed opacity-60'
                      : d.hasSampleMenu
                      ? 'bg-paper-2 border-fresh hover:bg-paper-3 cursor-pointer shadow-xs'
                      : 'bg-paper-elevated border-rule-subtle hover:border-forest cursor-pointer'
                  }`}
                >
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="num">{d.day}</span>
                    {d.hasSampleMenu && (
                      <span className="w-2 h-2 rounded-full bg-fresh"></span>
                    )}
                  </div>
                  <div>
                    {d.isWeekend ? (
                      <span className="text-xs text-muted">Libur</span>
                    ) : d.hasSampleMenu ? (
                      <span className="text-xs font-medium text-forest block truncate">
                        Contoh menu
                      </span>
                    ) : (
                      <span className="text-xs text-muted block truncate">
                        TBA
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
                  <span>Ada contoh menu</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rule"></span>
                  <span>Menu belum dirilis (TBA)</span>
                </span>
              </div>
              <button
                onClick={() =>
                  onOpenWhatsApp(
                    'Halo NutriBox Daily, saya ingin menanyakan jadwal rotasi menu untuk tanggal tertentu bulan ini.'
                  )
                }
                className="font-semibold text-forest hover:text-fresh transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest rounded-sm"
              >
                Tanya ketersediaan jadwal via WhatsApp
              </button>
            </div>
          </div>
        )}

        {/* Calendar Footer Info */}
        <div className="mt-10 p-5 rounded-card-sm bg-paper-elevated border border-rule-subtle text-xs text-ink-2 flex items-start gap-3">
          <Info className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
          <p>
            Menu baru diumumkan secara bertahap setiap hari Jumat sore untuk minggu berikutnya. Seluruh sajian dibuat di dapur produksi BSD City pada pagi hari pengiriman (06.00 sampai 10.00 WIB) untuk menjamin kesegaran rasa dan kebersihan higienis.
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
