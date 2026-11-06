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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest/80">
      <div 
        className="relative w-full max-w-xl bg-paper-elevated rounded-card shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-card-sm bg-paper-elevated text-forest hover:bg-paper-3 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
          aria-label="Tutup rincian menu"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto">
          <div className="relative aspect-[16/9] w-full bg-paper-3">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 text-accent-ink">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-pill bg-forest text-accent-ink text-xs font-medium">
                  {item.categoryLabel}
                </span>
                <span className="px-2.5 py-0.5 rounded-card-sm bg-citrus text-forest text-xs font-bold">
                  Contoh menu rotasi
                </span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-accent-ink">
                {item.name}
              </h3>
            </div>
          </div>

          <div className="p-6 space-y-5">
            <div className="flex items-center gap-2 text-xs text-ink-2 pb-3 border-b border-rule-subtle">
              <Calendar className="w-4 h-4 text-fresh" />
              <span className="font-semibold text-forest">Jadwal rotasi: {item.dayName}, {item.date}</span>
              <span>•</span>
              <span>Pengiriman 10.30 sampai 11.45 WIB</span>
            </div>

            <p className="text-xs sm:text-sm text-ink-2 leading-relaxed">
              {item.description}
            </p>

            {/* Nutrisi */}
            <div className="p-4 rounded-card-sm bg-paper-2 border border-rule-subtle">
              <span className="text-xs font-semibold text-forest block mb-2">
                Estimasi kandungan makronutrisi:
              </span>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="p-2 rounded-card-sm bg-paper-elevated border border-rule-subtle">
                  <span className="text-xs text-ink-2 block">Energi</span>
                  <span className="font-display font-bold text-sm text-forest num">{item.calories} kcal</span>
                </div>
                <div className="p-2 rounded-card-sm bg-paper-elevated border border-rule-subtle">
                  <span className="text-xs text-ink-2 block">Protein</span>
                  <span className="font-display font-bold text-sm text-forest num">{item.protein} g</span>
                </div>
                <div className="p-2 rounded-card-sm bg-paper-elevated border border-rule-subtle">
                  <span className="text-xs text-ink-2 block">Karbo</span>
                  <span className="font-display font-bold text-sm text-forest num">{item.carbohydrates} g</span>
                </div>
                <div className="p-2 rounded-card-sm bg-paper-elevated border border-rule-subtle">
                  <span className="text-xs text-ink-2 block">Lemak</span>
                  <span className="font-display font-bold text-sm text-forest num">{item.fat} g</span>
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
                  <span key={i} className="px-2.5 py-1 rounded-card-sm bg-paper-3 text-forest text-xs">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-xs text-ink-2 bg-paper p-3 rounded-card-sm border border-rule-subtle">
              <p>
                Data di atas merupakan contoh menu representatif untuk mengilustrasikan transparansi nutrisi harian NutriBox Daily.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={handleOrder}
                className="w-full py-3 px-4 rounded-card-sm bg-forest hover:bg-forest-hover text-accent-ink font-semibold text-xs sm:text-sm shadow-sm transition-colors flex items-center justify-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
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
