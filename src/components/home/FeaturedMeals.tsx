import React from 'react';
import { productsData } from '../../data/products';
import { Product } from '../../types';
import { ArrowRight, Flame } from 'lucide-react';

interface FeaturedMealsProps {
  onSelectProduct: (product: Product) => void;
  onOpenWhatsApp: (msg?: string) => void;
  onNavigate: (tabId: string) => void;
}

export const FeaturedMeals: React.FC<FeaturedMealsProps> = ({
  onSelectProduct,
  onOpenWhatsApp,
  onNavigate,
}) => {
  return (
    <section className="py-20 bg-paper border-b border-rule-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header: Heading leads without generic eyebrow */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-forest tracking-tight">
              Pilihan kategori meal box harian.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-ink-2 max-w-xl">
              Setiap kategori dirancang dengan rasio kalori dan makronutrisi spesifik untuk memenuhi preferensi aktivitas Anda.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('catalog')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-forest hover:text-fresh active:scale-[0.99] disabled:opacity-50 transition-colors self-start md:self-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer"
          >
            <span className="whitespace-nowrap">Buka katalog lengkap</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsData.map((product) => (
            <div
              key={product.id}
              className="bg-paper border border-rule hover:border-forest rounded-xl overflow-hidden shadow-xs transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Image Frame */}
                <div className="relative aspect-[4/3] overflow-hidden bg-paper-2 border-b border-rule-subtle">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {product.badge && (
                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-forest text-white text-[11px] font-semibold">
                      {product.badge}
                    </span>
                  )}
                  <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-white/95 border border-rule-subtle text-forest text-[11px] font-bold shadow-xs flex items-center gap-1 tabular-nums">
                    <Flame className="w-3 h-3 text-terracotta" />
                    <span>{product.caloriesRange}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="text-xs font-semibold text-leaf block mb-1">
                    {product.categoryLabel}
                  </span>
                  <h3 className="font-display font-bold text-base text-forest leading-snug">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-xs text-ink-2 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  {product.proteinEstimate && (
                    <div className="mt-3 text-xs text-ink-2 font-medium">
                      Estimasi protein: <span className="font-semibold text-forest tabular-nums">{product.proteinEstimate}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Price & CTA */}
              <div className="p-5 pt-0 border-t border-rule-subtle mt-2">
                <div className="flex items-center justify-between mb-3 pt-3">
                  <span className="text-xs text-ink-2">Harga satuan</span>
                  <span className="font-display font-bold text-base text-forest tabular-nums">
                    {product.formattedPrice}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectProduct(product)}
                    className="py-2.5 px-3 rounded-lg border border-rule hover:bg-paper-2 active:scale-[0.99] disabled:opacity-50 text-forest text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer text-center"
                  >
                    <span>Detail Menu</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const msg = `Halo NutriBox Daily, saya ingin memesan menu *${product.name}* (${product.formattedPrice}). Mohon informasi jadwal ketersediaan. Terima kasih.`;
                      onOpenWhatsApp(msg);
                    }}
                    className="py-2.5 px-3 rounded-lg bg-forest hover:bg-forest-hover active:scale-[0.99] disabled:opacity-50 text-white text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer text-center"
                  >
                    <span>Pesan via WA</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
