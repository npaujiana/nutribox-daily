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
    <section className="py-20 bg-paper border-b border-rule-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header: Heading leads without kicker */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-forest tracking-tight">
              Rekomendasi menu acara pekan ini.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-ink-2 max-w-xl">
              Inspirasi pilihan menu lezat untuk rapat kerja kantor, syukuran keluarga, coffee break, hingga jamuan buffet tamu kehormatan.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('calendar')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-paper border border-rule text-forest hover:bg-paper-2 active:scale-[0.99] disabled:opacity-50 text-xs sm:text-sm font-semibold transition-colors self-start md:self-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-leaf" />
            <span className="whitespace-nowrap">Lihat jadwal & slot tanggal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6">
          {sampleCalendarMenus.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedDayIndex(idx)}
              className={`px-4 py-3 rounded-lg text-left shrink-0 transition-colors active:scale-[0.99] disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer ${
                selectedDayIndex === idx
                  ? 'bg-forest text-white shadow-xs'
                  : 'bg-paper border border-rule text-ink hover:bg-paper-2'
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
        <div className="bg-paper border border-rule rounded-xl p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image Frame */}
            <div className="lg:col-span-5 relative rounded-lg overflow-hidden aspect-[4/3] bg-paper-2 border border-rule-subtle">
              <img
                src={currentMenu.image}
                alt={currentMenu.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-forest text-white text-[11px] font-semibold">
                {currentMenu.categoryLabel}
              </span>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="flex items-center gap-2 text-xs font-semibold text-leaf">
                <span>Rekomendasi: {currentMenu.dayName}</span>
                <span>•</span>
                <span>Garansi Tiba H-1 Jam Acara</span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-forest">
                {currentMenu.name}
              </h3>

              <p className="text-sm text-ink-2 leading-relaxed">
                {currentMenu.description}
              </p>

              {/* Event Specs Display */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-y border-rule-subtle py-3 text-center">
                <div className="p-2 rounded-md bg-paper-2 border border-rule-subtle">
                  <span className="text-[11px] text-ink-2 block">Kategori</span>
                  <span className="font-display font-bold text-xs text-forest">{currentMenu.categoryLabel}</span>
                </div>
                <div className="p-2 rounded-md bg-paper-2 border border-rule-subtle">
                  <span className="text-[11px] text-ink-2 block">Porsi</span>
                  <span className="font-display font-bold text-xs text-forest">Kenyang Dewasa</span>
                </div>
                <div className="p-2 rounded-md bg-paper-2 border border-rule-subtle">
                  <span className="text-[11px] text-ink-2 block">Ketentuan</span>
                  <span className="font-display font-bold text-xs text-forest">{currentMenu.portionInfo?.split('•')[1]?.trim() || 'Min. 15 Pax'}</span>
                </div>
                <div className="p-2 rounded-md bg-paper-2 border border-rule-subtle">
                  <span className="text-[11px] text-ink-2 block">Sertifikasi</span>
                  <span className="font-display font-bold text-xs text-forest">100% Halal</span>
                </div>
              </div>

              {/* Composition ingredients */}
              <div className="text-xs text-ink-2">
                <span className="font-semibold text-forest">Isian paket: </span>
                {currentMenu.composition.join(', ')}.
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onSelectMenu(currentMenu)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-forest hover:bg-forest-hover active:scale-[0.99] disabled:opacity-50 text-white text-xs font-semibold shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer"
                >
                  <span className="whitespace-nowrap">Detail menu & isi paket</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
