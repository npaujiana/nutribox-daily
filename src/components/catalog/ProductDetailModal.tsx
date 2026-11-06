import React from 'react';
import { Product } from '../../types';
import { X, Flame, MessageSquare, ArrowUpRight, Check } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenWhatsApp: (msg?: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOpenWhatsApp,
}) => {
  if (!product) return null;

  const handleOrder = () => {
    const msg = `Halo NutriBox Daily, saya ingin memesan produk katering berikut:

Produk: ${product.name}
Kategori: ${product.categoryLabel}
Harga: ${product.formattedPrice}
Estimasi Kalori: ${product.caloriesRange}

Mohon informasi mengenai ketersediaan jadwal pengiriman untuk area saya.

Terima kasih.`;
    onOpenWhatsApp(msg);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest/80 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-2xl bg-paper border border-rule rounded-xl shadow-md overflow-hidden max-h-[90vh] flex flex-col text-left"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-lg bg-paper/90 border border-rule text-forest hover:bg-paper-2 shadow-xs transition-colors active:scale-[0.99] disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer"
          aria-label="Tutup detail produk"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto">
          {/* Header Image Frame */}
          <div className="relative aspect-[16/9] w-full bg-paper-2 border-b border-rule-subtle">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="px-2.5 py-1 rounded-md bg-forest text-white text-xs font-semibold">
                {product.categoryLabel}
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Tagline & Price Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-rule-subtle gap-3">
              <div>
                <h2 className="font-display font-bold text-2xl text-forest">
                  {product.name}
                </h2>
                <p className="text-xs text-ink-2 mt-1">
                  {product.tagline} • Dimasak segar harian tanpa tambahan MSG
                </p>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-xs text-ink-2 block">Harga satuan</span>
                <span className="font-display font-bold text-2xl text-forest tabular-nums">
                  {product.formattedPrice}
                </span>
                <span className="text-xs text-ink-2 block">belum termasuk ongkir</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-display font-bold text-sm text-forest mb-1.5">
                Tentang menu ini
              </h3>
              <p className="text-xs sm:text-sm text-ink-2 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Nutrition Estimates Box */}
            <div className="p-4 rounded-lg bg-paper-2 border border-rule-subtle">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display font-bold text-sm text-forest flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-terracotta" />
                  <span>Informasi nutrisi terukur</span>
                </h3>
                <span className="text-xs text-ink-2 font-medium">Estimasi per box</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 tabular-nums">
                <div className="p-2.5 rounded-lg bg-paper border border-rule-subtle text-center">
                  <span className="text-xs text-ink-2 block">Kalori</span>
                  <span className="font-display font-bold text-sm text-forest">
                    {product.caloriesRange}
                  </span>
                </div>
                {product.proteinEstimate && (
                  <div className="p-2.5 rounded-lg bg-paper border border-rule-subtle text-center">
                    <span className="text-xs text-ink-2 block">Protein</span>
                    <span className="font-display font-bold text-sm text-forest">
                      {product.proteinEstimate}
                    </span>
                  </div>
                )}
                {product.carbsEstimate && (
                  <div className="p-2.5 rounded-lg bg-paper border border-rule-subtle text-center">
                    <span className="text-xs text-ink-2 block">Karbohidrat</span>
                    <span className="font-display font-bold text-sm text-forest">
                      {product.carbsEstimate}
                    </span>
                  </div>
                )}
                {product.fatEstimate && (
                  <div className="p-2.5 rounded-lg bg-paper border border-rule-subtle text-center">
                    <span className="text-xs text-ink-2 block">Lemak</span>
                    <span className="font-display font-bold text-sm text-forest">
                      {product.fatEstimate}
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-3 text-xs text-ink-2">
                <p>{product.nutritionNote}</p>
              </div>
            </div>

            {/* Ingredients & Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="font-display font-bold text-xs text-forest mb-2">
                  Komponen utama:
                </h3>
                <ul className="space-y-1.5 text-xs text-ink-2">
                  {product.ingredients.map((ing, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-fresh shrink-0 mt-1.5" />
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-display font-bold text-xs text-forest mb-2">
                  Keunggulan menu:
                </h3>
                <ul className="space-y-1.5 text-xs text-ink-2">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-fresh shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Order Call to Action */}
            <div className="pt-4 border-t border-rule-subtle flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-ink-2 text-center sm:text-left">
                Tersedia juga dalam paket langganan mingguan dan bulanan.
              </p>
              <button
                type="button"
                onClick={handleOrder}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-forest hover:bg-forest-hover text-white font-semibold text-xs sm:text-sm shadow-xs active:scale-[0.99] disabled:opacity-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer whitespace-nowrap"
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
