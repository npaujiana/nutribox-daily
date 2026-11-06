import React, { useState } from 'react';
import { productsData } from '../../data/products';
import { Product } from '../../types';
import { ProductDetailModal } from './ProductDetailModal';
import { Flame, Dumbbell, Filter } from 'lucide-react';

interface ProductCatalogProps {
  onOpenWhatsApp: (msg?: string) => void;
  onNavigate: (tabId: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onOpenWhatsApp, onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filters = [
    { id: 'all', label: 'Semua menu' },
    { id: 'balance', label: 'Daily Balance' },
    { id: 'lean', label: 'Weight Management' },
    { id: 'protein', label: 'High Protein' },
    { id: 'active', label: 'Active Meal' },
  ];

  const filteredProducts = activeFilter === 'all'
    ? productsData
    : productsData.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-28 pb-20 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero */}
        <div className="max-w-3xl mb-12 text-left">
          <span className="text-sm font-medium text-fresh mb-1.5 block">
            Katalog makanan sehat
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-forest tracking-tight">
            Explore Your Daily Meal.
          </h1>
          <p className="mt-3 text-base sm:text-lg text-ink-2 leading-relaxed">
            Pilihan makanan sehat dengan komposisi nutrisi yang lebih transparan untuk menemani aktivitasmu sehari-hari di BSD City dan sekitarnya.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10">
          <div className="flex items-center gap-1.5 pr-2 border-r border-rule-subtle text-xs font-semibold text-ink-2 shrink-0">
            <Filter className="w-4 h-4 text-forest" />
            <span>Kategori:</span>
          </div>
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-card-sm text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
                activeFilter === f.id
                  ? 'bg-forest text-accent-ink shadow-sm'
                  : 'bg-paper-elevated border border-rule-subtle text-ink hover:bg-paper-3'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-paper-elevated border border-rule-subtle hover:border-fresh rounded-card overflow-hidden shadow-sm transition-colors duration-200 flex flex-col justify-between"
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

                  {/* Highlights */}
                  {product.proteinEstimate && (
                    <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-card-sm bg-paper-3 text-forest text-xs font-medium">
                      <Dumbbell className="w-3.5 h-3.5 text-fresh" />
                      <span>Protein: {product.proteinEstimate}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Price & Action */}
              <div className="p-5 pt-0 border-t border-rule-subtle mt-2">
                <div className="flex items-center justify-between mb-3 pt-3">
                  <span className="text-xs text-ink-2">Harga satuan</span>
                  <span className="font-display font-extrabold text-base text-forest">
                    {product.formattedPrice}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full py-2.5 px-3 rounded-card-sm border border-rule hover:bg-paper-3 text-forest text-xs font-semibold text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                  >
                    Rincian
                  </button>
                  <button
                    onClick={() => {
                      const msg = `Halo NutriBox Daily, saya ingin memesan menu ${product.name} (${product.formattedPrice}). Mohon informasi jadwal pengiriman untuk area saya.`;
                      onOpenWhatsApp(msg);
                    }}
                    className="w-full py-2.5 px-3 rounded-card-sm bg-forest hover:bg-forest-hover text-accent-ink text-xs font-semibold text-center transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                  >
                    Pesan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subscription Upsell Banner */}
        <div className="mt-14 bg-forest text-accent-ink rounded-card p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-semibold text-citrus block">
              Ingin makan lebih teratur setiap hari kerja?
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-accent-ink">
              Cek Weekly Fit Plan (5 hari) dan Monthly Fit Plan (20 hari)
            </h3>
            <p className="text-xs sm:text-sm text-sage max-w-xl">
              Dapatkan kemudahan pengantaran terjadwal otomatis setiap Senin sampai Jumat tanpa perlu memesan ulang tiap pagi.
            </p>
          </div>
          <button
            onClick={() => onNavigate('subscription')}
            className="px-6 py-3.5 rounded-card-sm bg-fresh hover:bg-fresh-hover text-forest font-bold text-xs sm:text-sm shadow-sm transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fresh"
          >
            Lihat paket langganan
          </button>
        </div>

        {/* Nutrition Transparency Disclaimer */}
        <div className="mt-8 p-4 rounded-card-sm bg-paper-elevated border border-rule-subtle text-xs text-ink-2 text-center">
          <p>
            *Seluruh estimasi nutrisi dihitung berdasarkan resep standar dan penimbangan gramatur bahan di dapur produksi BSD City. Pengolahan segar tanpa penambahan MSG.
          </p>
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenWhatsApp={onOpenWhatsApp}
      />
    </div>
  );
};
