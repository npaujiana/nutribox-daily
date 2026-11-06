import React from 'react';
import { CalendarMenuItem } from '../../types';
import { X, Calendar, MessageSquare, ArrowUpRight } from 'lucide-react';

interface MenuDetailModalProps {
  item: CalendarMenuItem | null;
  onClose: () => void;
  onOpenWhatsApp: (msg?: string) => void;
}

export const MenuDetailModal: React.FC<MenuDetailModalProps> = ({
  item,
  onClose,
  onOpenWhatsApp,
}) => {
  if (!item) return null;

  const handleOrder = () => {
    const msg = `Halo NutriBox Daily, saya ingin memesan menu untuk tanggal ${item.date} (${item.dayName}):

Menu: ${item.name}
Kategori: ${item.categoryLabel}
Estimasi Kalori: ${item.calories} kcal

Mohon informasi mengenai ketersediaan kuota pengiriman untuk area saya.

Terima kasih.`;
    onOpenWhatsApp(msg);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest/80 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-xl bg-paper border border-rule rounded-xl shadow-md overflow-hidden max-h-[90vh] flex flex-col text-left"
        role="dialog"
        aria-modal="true"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-lg bg-paper/90 border border-rule text-forest hover:bg-paper-2 shadow-xs transition-colors active:scale-[0.99] disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer"
          aria-label="Tutup rincian menu"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto">
          <div className="relative aspect-[16/9] w-full bg-paper-2 border-b border-rule-subtle">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="px-2.5 py-1 rounded-md bg-forest text-white text-xs font-semibold">
                {item.categoryLabel}
              </span>
            </div>
          </div>

          <div className="p-6 space-y-5">
            <div className="flex items-center gap-2 text-xs text-ink-2 pb-3 border-b border-rule-subtle">
              <Calendar className="w-4 h-4 text-leaf" />
              <span className="font-semibold text-forest">Jadwal rotasi: {item.dayName}, {item.date}</span>
              <span>,</span>
              <span>Pengiriman 10.30 sampai 11.45 WIB</span>
            </div>

            <h2 className="font-display font-bold text-xl sm:text-2xl text-forest">
              {item.name}
            </h2>

            <p className="text-xs sm:text-sm text-ink-2 leading-relaxed">
              {item.description}
            </p>

            {/* Nutrisi */}
            <div className="p-4 rounded-lg bg-paper-2 border border-rule-subtle">
              <span className="text-xs font-semibold text-forest block mb-2">
                Estimasi kandungan makronutrisi:
              </span>
              <div className="grid grid-cols-4 gap-2 text-center tabular-nums">
                <div className="p-2 rounded-lg bg-paper border border-rule-subtle">
                  <span className="text-xs text-ink-2 block">Energi</span>
                  <span className="font-display font-bold text-sm text-forest">{item.calories} kcal</span>
                </div>
                <div className="p-2 rounded-lg bg-paper border border-rule-subtle">
                  <span className="text-xs text-ink-2 block">Protein</span>
                  <span className="font-display font-bold text-sm text-forest">{item.protein} g</span>
                </div>
                <div className="p-2 rounded-lg bg-paper border border-rule-subtle">
                  <span className="text-xs text-ink-2 block">Karbo</span>
                  <span className="font-display font-bold text-sm text-forest">{item.carbohydrates} g</span>
                </div>
                <div className="p-2 rounded-lg bg-paper border border-rule-subtle">
                  <span className="text-xs text-ink-2 block">Lemak</span>
                  <span className="font-display font-bold text-sm text-forest">{item.fat} g</span>
                </div>
              </div>
            </div>

            {/* Komposisi */}
            <div>
              <span className="text-xs font-semibold text-forest block mb-2">
                Komposisi porsi terstandar:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {item.composition.map((c, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-paper-2 border border-rule-subtle text-forest text-xs font-medium">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-xs text-ink-2 bg-paper-2 p-3 rounded-lg border border-rule-subtle">
              <p>
                Data di atas merupakan contoh menu representatif untuk mengilustrasikan transparansi nutrisi harian NutriBox Daily.
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleOrder}
                className="w-full py-3 px-4 rounded-lg bg-forest hover:bg-forest-hover active:scale-[0.99] disabled:opacity-50 text-white font-semibold text-xs sm:text-sm shadow-xs transition-colors flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Pesan menu ini via WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
