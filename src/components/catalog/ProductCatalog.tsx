import React, { useState } from 'react';
import { productsData } from '../../data/products';
import { Product } from '../../types';
import { ProductDetailModal } from './ProductDetailModal';
import { Flame, Filter } from 'lucide-react';

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
    <div className="pt-24 pb-20 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero: Heading leads directly */}
        <div className="max-w-3xl mb-12 text-left">
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-forest tracking-tight">
            Katalog makanan sehat bernutrisi terukur.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-ink-2 leading-relaxed">
            Pilihan menu makan siang dengan informasi kalori dan makronutrisi transparan untuk menemani aktivitasmu di BSD City dan Tangerang Selatan.
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
              type="button"
              onClick={() => setActiveFilter(f.id)}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 active:scale-[0.99] disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-forest text-white shadow-xs'
                  : 'bg-paper border border-rule text-ink hover:bg-paper-2'
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
              className="bg-paper border border-rule hover:border-forest rounded-xl overflow-hidden shadow-xs transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Image & Badge */}
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
                <div className="p-5 text-left">
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

              {/* Price & Action */}
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
                    onClick={() => setSelectedProduct(product)}
                    className="w-full py-2.5 px-3 rounded-lg border border-rule hover:bg-paper-2 active:scale-[0.99] disabled:opacity-50 text-forest text-xs font-semibold text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer"
                  >
                    <span>Rincian</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const msg = `Halo NutriBox Daily, saya ingin memesan menu ${product.name} (${product.formattedPrice}). Mohon informasi jadwal pengiriman untuk area saya.`;
                      onOpenWhatsApp(msg);
                    }}
                    className="w-full py-2.5 px-3 rounded-lg bg-forest hover:bg-forest-hover active:scale-[0.99] disabled:opacity-50 text-white text-xs font-semibold text-center transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer"
                  >
                    <span>Pesan</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subscription Upsell Banner */}
        <div className="mt-14 bg-forest text-white rounded-xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs text-left">
          <div className="space-y-2">
            <span className="text-xs font-semibold text-citrus block">
              Ingin makan lebih teratur setiap hari kerja?
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
              Cek Weekly Fit Plan (5 hari) dan Monthly Fit Plan (20 hari)
            </h3>
            <p className="text-xs sm:text-sm text-sage max-w-xl">
              Dapatkan kemudahan pengantaran terjadwal otomatis setiap Senin sampai Jumat tanpa perlu memesan ulang tiap pagi.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('subscription')}
            className="px-6 py-3.5 rounded-lg bg-leaf hover:bg-leaf/90 text-forest font-bold text-xs sm:text-sm shadow-xs active:scale-[0.99] disabled:opacity-50 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-citrus cursor-pointer"
          >
            <span>Lihat paket langganan</span>
          </button>
        </div>

        {/* Nutrition Transparency Disclaimer */}
        <div className="mt-8 p-4 rounded-lg bg-paper-2 border border-rule-subtle text-xs text-ink-2 text-center">
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
