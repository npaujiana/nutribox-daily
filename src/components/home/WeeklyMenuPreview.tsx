import React, { useState } from 'react';
import { sampleCalendarMenus } from '../../data/menuCalendar';
import { CalendarMenuItem } from '../../types';
import { Calendar, ArrowRight } from 'lucide-react';

interface WeeklyMenuPreviewProps {
  onNavigate: (tabId: string) => void;
  onSelectMenu: (menu: CalendarMenuItem) => void;
}

export const WeeklyMenuPreview: React.FC<WeeklyMenuPreviewProps> = ({
  onNavigate,
  onSelectMenu,
}) => {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const currentMenu = sampleCalendarMenus[selectedDayIndex] || sampleCalendarMenus[0];

  return (
    <section className="py-20 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-sm font-medium text-fresh mb-1.5 block">
              Pratinjau rotasi menu mingguan
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-forest tracking-tight">
              Menu Baru, Semangat Baru Setiap Minggu.
            </h2>
            <p className="mt-2 text-sm text-ink-2 max-w-xl">
              Menu katering diperbarui setiap Jumat sore untuk minggu berikutnya. Berikut adalah gambaran variasi rotasi menu harian NutriBox Daily.
            </p>
          </div>
          <button
            onClick={() => onNavigate('calendar')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-card-sm bg-paper-elevated border border-rule text-forest hover:bg-paper-3 text-xs sm:text-sm font-semibold transition-colors self-start md:self-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
          >
            <Calendar className="w-4 h-4 text-fresh" />
            <span>Lihat kalender lengkap</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Day Selector Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6">
          {sampleCalendarMenus.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setSelectedDayIndex(idx)}
              className={`px-4 py-3 rounded-card-sm text-left shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
                selectedDayIndex === idx
                  ? 'bg-forest text-accent-ink shadow-sm'
                  : 'bg-paper-elevated border border-rule-subtle text-ink hover:bg-paper-3'
              }`}
            >
              <span className={`block text-xs font-semibold ${
                selectedDayIndex === idx ? 'text-sage' : 'text-ink-2'
              }`}>
                {item.dayName}
              </span>
              <span className="font-display font-bold text-sm block mt-0.5 whitespace-nowrap">
                {item.name.length > 24 ? item.name.slice(0, 24) + '...' : item.name}
              </span>
            </button>
          ))}
        </div>

        {/* Featured Card of Selected Day */}
        <div className="bg-paper-elevated border border-rule-subtle rounded-card p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image */}
            <div className="lg:col-span-5 relative rounded-card-sm overflow-hidden aspect-[4/3] bg-paper-3">
              <img
                src={currentMenu.image}
                alt={currentMenu.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-pill bg-forest text-accent-ink text-xs font-medium">
                {currentMenu.categoryLabel}
              </span>
              <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-card-sm bg-citrus text-forest text-xs font-bold">
                Contoh menu rotasi
              </span>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-fresh">
                <span>Jadwal: {currentMenu.dayName}</span>
                <span>•</span>
                <span>Siap antar 10.30 sampai 11.45 WIB</span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-forest">
                {currentMenu.name}
              </h3>

              <p className="text-sm text-ink-2 leading-relaxed">
                {currentMenu.description}
              </p>

              {/* Macro chips */}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5 pt-2">
                <div className="p-3 rounded-card-sm bg-paper-2 border border-rule-subtle text-center">
                  <span className="block text-xs text-ink-2">Estimasi energi</span>
                  <span className="font-display font-bold text-sm text-forest num">
                    {currentMenu.calories} kcal
                  </span>
                </div>
                <div className="p-3 rounded-card-sm bg-paper-2 border border-rule-subtle text-center">
                  <span className="block text-xs text-ink-2">Protein</span>
                  <span className="font-display font-bold text-sm text-forest num">
                    {currentMenu.protein} g
                  </span>
                </div>
                <div className="p-3 rounded-card-sm bg-paper-2 border border-rule-subtle text-center">
                  <span className="block text-xs text-ink-2">Karbohidrat</span>
                  <span className="font-display font-bold text-sm text-forest num">
                    {currentMenu.carbohydrates} g
                  </span>
                </div>
                <div className="p-3 rounded-card-sm bg-paper-2 border border-rule-subtle text-center col-span-3 sm:col-span-1">
                  <span className="block text-xs text-ink-2">Lemak</span>
                  <span className="font-display font-bold text-sm text-forest num">
                    {currentMenu.fat} g
                  </span>
                </div>
              </div>

              {/* Ingredients tag */}
              <div className="pt-2">
                <span className="text-xs font-semibold text-forest block mb-1.5">
                  Bahan baku utama:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentMenu.composition.map((c, i) => (
                    <span key={i} className="px-2.5 py-0.5 rounded-card-sm bg-paper-3 text-forest text-xs">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => onSelectMenu(currentMenu)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-card-sm bg-forest hover:bg-forest-hover text-accent-ink text-xs sm:text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                >
                  <span>Lihat rincian menu ini</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
