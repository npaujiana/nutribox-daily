import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Settings, UtensilsCrossed } from 'lucide-react';
import { BusinessConfig } from '../../types';

interface NavbarProps {
  currentTab: string;
  onNavigate: (tabId: string) => void;
  onOpenWhatsApp: (customMsg?: string) => void;
  onOpenConfig: () => void;
  config: BusinessConfig;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onNavigate,
  onOpenWhatsApp,
  onOpenConfig,
  config,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Beranda' },
    { id: 'catalog', label: 'Menu & Katalog' },
    { id: 'calendar', label: 'Jadwal Menu' },
    { id: 'subscription', label: 'Paket Acara' },
    { id: 'calculator', label: 'Kalkulator Acara' },
    { id: 'about', label: 'Tentang Kami' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Kontak' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const displayPhone = config.whatsapp.number.trim().length > 5
    ? config.whatsapp.number
    : '+62 812-8899-7700';

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40">
        {/* Top Announcement Bar */}
        <div className="bg-forest text-white border-b border-forest-hover/60 py-1.5 sm:py-2 px-3 sm:px-6 lg:px-8 text-xs">
          <div className="max-w-7xl mx-auto">
            {/* Mobile View */}
            <div className="flex md:hidden items-center justify-between gap-2 text-[11px]">
              <div className="flex items-center gap-1.5 min-w-0">
                <UtensilsCrossed className="w-3.5 h-3.5 text-fresh shrink-0" aria-hidden="true" />
                <span className="font-semibold text-white truncate">
                  Katering Acara Jabodetabek
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => onOpenWhatsApp()}
                  className="font-bold text-fresh hover:underline cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fresh rounded-xs"
                >
                  Hotline: {displayPhone}
                </button>
              </div>
            </div>

            {/* Desktop / Tablet View */}
            <div className="hidden md:flex items-center justify-between gap-4 text-left">
              <div className="flex items-center gap-2 flex-wrap">
                <UtensilsCrossed className="w-3.5 h-3.5 text-fresh shrink-0" aria-hidden="true" />
                <span className="font-semibold text-white">
                  Layanan Katering Acara, Prasmanan & Nasi Kotak
                </span>
                <span className="text-white/80 hidden lg:inline">
                  (BSD City, Tangerang, Jakarta, Depok, Bekasi)
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <div className="flex items-center gap-1.5 text-white/85">
                  <span>Hotline Pemesanan:</span>
                  <button
                    type="button"
                    onClick={() => onOpenWhatsApp()}
                    className="font-bold text-white hover:text-fresh underline underline-offset-2 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fresh rounded-xs whitespace-nowrap"
                  >
                    {displayPhone}
                  </button>
                </div>
                <span className="text-white/30 select-none">|</span>
                <span className="font-medium text-white/90 whitespace-nowrap">
                  100% Halal & Higienis
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div
          className={`bg-paper transition-colors duration-200 ${
            scrolled
              ? 'border-b border-rule shadow-xs py-2 sm:py-2.5'
              : 'border-b border-rule-subtle py-2.5 sm:py-3'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Logo / Service Title */}
              <button
                type="button"
                onClick={() => handleNavClick('home')}
                className="flex items-center gap-2.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest rounded-lg whitespace-nowrap active:scale-[0.99] disabled:opacity-50 cursor-pointer"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-forest flex items-center justify-center text-white shadow-xs">
                  <UtensilsCrossed className="w-4 h-4 sm:w-5 sm:h-5 text-fresh" />
                </div>
                <div>
                  <span className="font-display font-bold text-base sm:text-lg text-forest block leading-none">
                    {config.brandName && !config.brandName.toLowerCase().includes('nutribox') ? config.brandName : 'Catering Acara'}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-ink-2 block mt-0.5">
                    Spesialis Acara & Prasmanan
                  </span>
                </div>
              </button>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors active:scale-[0.99] disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer ${
                      currentTab === item.id
                        ? 'text-forest bg-mint font-bold'
                        : 'text-ink-2 hover:text-forest hover:bg-paper-2'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              {/* Action buttons (Right) */}
              <div className="hidden sm:flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={onOpenConfig}
                  className="p-2 text-ink-2 hover:text-forest hover:bg-paper-2 rounded-lg transition-colors active:scale-[0.99] disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer"
                  title="Konfigurasi Kontak Bisnis"
                  aria-label="Pengaturan Kontak"
                >
                  <Settings className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => onOpenWhatsApp()}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-forest hover:bg-forest-hover active:scale-[0.99] disabled:opacity-50 text-white text-xs font-semibold shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf whitespace-nowrap cursor-pointer"
                >
                  <span>Konsultasi Acara</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Mobile trigger */}
              <div className="flex items-center gap-2 lg:hidden">
                <button
                  type="button"
                  onClick={onOpenConfig}
                  className="p-2 text-ink-2 hover:text-forest rounded-lg active:scale-[0.99] disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer"
                  title="Pengaturan Bisnis"
                  aria-label="Buka pengaturan bisnis"
                >
                  <Settings className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 text-forest hover:bg-paper-2 rounded-lg active:scale-[0.99] disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer"
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-forest/40 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-[74px] sm:top-[86px] right-0 bottom-0 w-4/5 max-w-xs bg-paper border-l border-rule p-5 flex flex-col justify-between overflow-y-auto shadow-2xl">
            <div className="space-y-1">
              <div className="pb-3 mb-3 border-b border-rule-subtle">
                <span className="text-xs font-bold text-forest">
                  Navigasi menu
                </span>
              </div>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-semibold transition-colors active:scale-[0.99] disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer ${
                    currentTab === item.id
                      ? 'bg-forest text-white font-bold'
                      : 'text-ink hover:bg-paper-2'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-6 border-t border-rule-subtle space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsApp();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-forest text-white font-semibold text-xs shadow-xs active:scale-[0.99] disabled:opacity-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf cursor-pointer whitespace-nowrap"
              >
                <span>Konsultasi via WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="text-center text-xs text-ink-2">
                <p>BSD City, Serpong & Seluruh Jabodetabek</p>
                <p className="font-semibold text-forest mt-0.5">Pengiriman: Tiba H-1 Jam Sebelum Acara</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
