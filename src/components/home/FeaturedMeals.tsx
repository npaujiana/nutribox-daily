import React from 'react';
import { productsData } from '../../data/products';
import { Product } from '../../types';
import { ArrowRight, Flame, Dumbbell } from 'lucide-react';

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
    <section className="py-20 bg-paper-elevated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-sm font-medium text-fresh mb-1.5 block">
              Koleksi meal box pilihan
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-forest tracking-tight">
              Temukan Meal Box yang Sesuai dengan Rutinitasmu.
            </h2>
            <p className="mt-2 text-sm text-ink-2 max-w-xl">
              Setiap kategori dirancang dengan rasio kalori dan makronutrisi spesifik untuk memenuhi preferensi aktivitas Anda.
            </p>
          </div>
          <button
            onClick={() => onNavigate('catalog')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-forest hover:text-fresh transition-colors self-start md:self-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest rounded-sm"
          >
            <span>Buka katalog lengkap</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsData.map((product) => (
            <div
              key={product.id}
              className="bg-paper-2 border border-rule-subtle hover:border-fresh rounded-card overflow-hidden shadow-sm transition-colors duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Image & Badge */}
                <div className="relative aspect-[4/3] overflow-hidden bg-paper-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-pill bg-forest text-accent-ink text-xs font-medium">
                      {product.badge}
                    </span>
                  )}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-card-sm bg-paper-elevated text-forest text-xs font-bold shadow-sm flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-terracotta" />
                    <span>{product.caloriesRange}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="text-xs font-medium text-fresh block mb-1">
                    {product.categoryLabel}
                  </span>
                  <h3 className="font-display font-bold text-lg text-forest leading-snug">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-xs text-ink-2 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Highlights tag */}
                  {product.proteinEstimate && (
                    <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-card-sm bg-paper-3 text-forest text-xs font-medium">
                      <Dumbbell className="w-3.5 h-3.5 text-fresh" />
                      <span>Protein: {product.proteinEstimate}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Price & CTA */}
              <div className="p-5 pt-0 border-t border-rule-subtle mt-2">
                <div className="flex items-center justify-between mb-3 pt-3">
                  <span className="text-xs text-ink-2">Harga satuan</span>
                  <span className="font-display font-extrabold text-base text-forest">
                    {product.formattedPrice}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="w-full py-2 px-3 rounded-card-sm border border-rule hover:bg-paper-3 text-forest text-xs font-semibold text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                  >
                    Detail
                  </button>
                  <button
                    onClick={() => {
                      const msg = `Halo NutriBox Daily, saya tertarik memesan menu ${product.name} (${product.formattedPrice}). Mohon info ketersediaan menu dan jadwal pengiriman.`;
                      onOpenWhatsApp(msg);
                    }}
                    className="w-full py-2 px-3 rounded-card-sm bg-forest hover:bg-forest-hover text-accent-ink text-xs font-semibold text-center transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                  >
                    Pesan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 rounded-card-sm bg-paper-2 border border-rule-subtle text-center">
          <p className="text-xs text-ink-2">
            Seluruh sajian dimasak segar di dapur produksi BSD City tanpa penambahan MSG. Harga belum termasuk ongkos kirim ke alamat Anda.
          </p>
        </div>
      </div>
    </section>
  );
};
