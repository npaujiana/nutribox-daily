import React, { useState } from 'react';
import { faqData } from '../../data/faq';
import {
  ChevronDown,
  Search,
  HelpCircle,
  MessageSquare,
  Package,
  CreditCard,
  Truck,
  CalendarCheck,
  AlertTriangle,
} from 'lucide-react';

interface FAQPageProps {
  onOpenWhatsApp: (msg?: string) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onOpenWhatsApp }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIds, setOpenIds] = useState<string[]>(['faq-prod-1', 'faq-del-2']);

  const categories = [
    { id: 'all', label: 'Semua pertanyaan', icon: HelpCircle },
    { id: 'product', label: 'Produk & menu', icon: Package },
    { id: 'plans', label: 'Paket & pembayaran', icon: CreditCard },
    { id: 'delivery', label: 'Pengiriman & rute', icon: Truck },
    { id: 'order', label: 'Alur pemesanan', icon: CalendarCheck },
    { id: 'allergy', label: 'Alergi & preferensi', icon: AlertTriangle },
  ];

  const toggleAccordion = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const filteredFaqs = faqData.filter((item) => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const matchesQuery =
      searchQuery.trim() === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="pt-32 pb-20 bg-paper">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header: Leading directly without generic kicker */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-forest tracking-tight">
            Frequently asked questions.
          </h1>
          <p className="mt-3 text-sm sm:text-base text-ink-2 leading-relaxed">
            Temukan jawaban lengkap mengenai menu, pengiriman kurir, sistem langganan, dan kebijakan operasional NutriBox Daily.
          </p>

          {/* Search Input */}
          <div className="mt-6 relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-ink-2 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              aria-label="Cari pertanyaan"
              placeholder="Cari pertanyaan... (misal: kalori, pengiriman, gopay)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-rule bg-paper text-xs sm:text-sm text-ink shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none justify-start sm:justify-center">
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveCategory(c.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition-colors active:scale-[0.99] disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
                  activeCategory === c.id
                    ? 'bg-forest text-white shadow-xs'
                    : 'bg-paper-elevated border border-rule text-ink hover:bg-mint'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{c.label}</span>
              </button>
            );
          })}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className="bg-paper-elevated border border-rule-subtle rounded-2xl overflow-hidden transition-colors shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-paper-2 active:scale-[0.99] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-bold text-sm sm:text-base text-forest">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-leaf shrink-0 transition-transform duration-200 motion-reduce:transition-none ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-ink-muted leading-relaxed border-t border-rule-subtle pt-3">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="bg-paper-elevated border border-rule-subtle rounded-2xl p-10 text-center">
              <p className="text-sm text-ink-muted">
                Tidak ditemukan pertanyaan yang cocok dengan pencarian “{searchQuery}”.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-3 text-xs font-semibold text-forest hover:underline whitespace-nowrap active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              >
                <span>Tampilkan semua pertanyaan</span>
              </button>
            </div>
          )}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-14 bg-forest text-white rounded-xl p-8 text-center space-y-4 shadow-sm">
          <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
            Punya Pertanyaan Lain yang Belum Terjawab?
          </h3>
          <p className="text-xs sm:text-sm text-white/85 max-w-md mx-auto leading-relaxed">
            Tim Customer Service NutriBox Daily siap membantu Anda mengenai ketersediaan rute kurir, pesanan khusus, atau detail rotasi menu.
          </p>
          <button
            type="button"
            onClick={() =>
              onOpenWhatsApp(
                'Halo NutriBox Daily, saya ingin menanyakan hal yang belum tertera di halaman FAQ website.'
              )
            }
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white hover:bg-white/95 active:scale-[0.99] disabled:opacity-50 text-forest font-bold text-xs sm:text-sm shadow-sm transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <MessageSquare className="w-4 h-4 text-forest" />
            <span>Tanya langsung via WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
