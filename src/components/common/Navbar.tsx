import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Leaf, Settings } from 'lucide-react';
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
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Beranda' },
    { id: 'catalog', label: 'Menu & Katalog' },
    { id: 'calendar', label: 'Kalender Menu' },
    { id: 'subscription', label: 'Paket Langganan' },
    { id: 'calculator', label: 'Kalkulator Kalori' },
    { id: 'about', label: 'Tentang Kami' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Kontak' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
          scrolled
            ? 'solid-nav shadow-sm py-2.5'
            : 'bg-paper py-3.5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest rounded-card-sm whitespace-nowrap"
            >
              <div className="w-10 h-10 rounded-card-sm bg-forest flex items-center justify-center text-accent-ink shadow-sm">
                <Leaf className="w-5 h-5 text-fresh" />
              </div>
              <div>
                <span className="font-display font-black text-xl text-forest block leading-none">
                  Nutri<span className="text-fresh">Box</span>
                </span>
                <span className="text-xs font-medium text-ink-2 block mt-0.5">
                  Daily BSD City
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-card-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
                    currentTab === item.id
                      ? 'text-forest bg-paper-3 font-semibold'
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
                onClick={onOpenConfig}
                className="p-2 text-ink-2 hover:text-forest hover:bg-paper-3 rounded-card-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                title="Konfigurasi Kontak Bisnis"
                aria-label="Pengaturan Kontak"
              >
                <Settings className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenWhatsApp()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-card-sm bg-forest hover:bg-forest-hover text-accent-ink text-xs sm:text-sm font-semibold shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              >
                <span>Pesan Sekarang</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile trigger */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenConfig}
                className="p-2 text-ink-2 hover:text-forest rounded-card-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                title="Pengaturan Bisnis"
              >
                <Settings className="w-4 h-4" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-forest hover:bg-paper-3 rounded-card-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden">
          <div
            className="fixed inset-0 bg-forest/40"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-16 right-0 bottom-0 w-4/5 max-w-sm bg-paper-2 border-l border-rule-subtle p-6 flex flex-col justify-between overflow-y-auto shadow-xl">
            <div className="space-y-1">
              <div className="pb-3 mb-3 border-b border-rule-subtle">
                <span className="text-xs font-semibold text-ink-2">
                  Navigasi menu
                </span>
              </div>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-card-sm text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
                    currentTab === item.id
                      ? 'bg-forest text-accent-ink font-semibold'
                      : 'text-ink hover:bg-paper-3'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-6 border-t border-rule-subtle space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsApp();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-card-sm bg-forest text-accent-ink font-semibold text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              >
                <span>Pesan via WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="text-center text-xs text-ink-2">
                <p>BSD City, Serpong dan sekitarnya</p>
                <p className="font-medium text-forest mt-0.5">Pengiriman: 10.30 sampai 11.45 WIB</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
