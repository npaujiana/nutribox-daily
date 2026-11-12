import React, { useState, useEffect } from 'react';
import { initialBusinessConfig, getStoredBusinessConfig } from './data/businessConfig';
import { BusinessConfig, Product, CalendarMenuItem } from './types';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { WhatsAppModal } from './components/common/WhatsAppModal';
import { AdminConfigModal } from './components/common/AdminConfigModal';
import { ProductDetailModal } from './components/catalog/ProductDetailModal';
import { MenuDetailModal } from './components/calendar/MenuDetailModal';

// Homepage Components
import { Hero } from './components/home/Hero';
import { BrandValueStrip } from './components/home/BrandValueStrip';
import { ProblemSolution } from './components/home/ProblemSolution';
import { FeaturedMeals } from './components/home/FeaturedMeals';
import { NutritionTransparency } from './components/home/NutritionTransparency';
import { WeeklyMenuPreview } from './components/home/WeeklyMenuPreview';
import { SubscriptionHighlight } from './components/home/SubscriptionHighlight';
import { HowItWorks } from './components/home/HowItWorks';
import { ProductionQuality } from './components/home/ProductionQuality';
import { CalculatorPromo } from './components/home/CalculatorPromo';
import { ServiceAreaSection } from './components/home/ServiceAreaSection';
import { FinalCTA } from './components/home/FinalCTA';

// Page Views
import { ProductCatalog } from './components/catalog/ProductCatalog';
import { MenuCalendar } from './components/calendar/MenuCalendar';
import { SubscriptionPlans } from './components/subscription/SubscriptionPlans';
import { CalorieCalculator } from './components/calculator/CalorieCalculator';
import { AboutUs } from './components/about/AboutUs';
import { FAQPage } from './components/faq/FAQPage';
import { ContactPage } from './components/contact/ContactPage';

import { buildWhatsAppUrl } from './utils/whatsapp';
import { MessageSquare, ShoppingBag } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [config, setConfig] = useState<BusinessConfig>(getStoredBusinessConfig());

  // Global Modals
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [whatsAppMessageText, setWhatsAppMessageText] = useState('');
  const [isAdminConfigOpen, setIsAdminConfigOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCalendarMenu, setSelectedCalendarMenu] = useState<CalendarMenuItem | null>(null);

  // Sync title and URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'catalog', 'calendar', 'subscription', 'calculator', 'about', 'faq', 'contact'].includes(hash)) {
        setCurrentTab(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (tabId: string) => {
    setCurrentTab(tabId);
    window.location.hash = tabId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenWhatsApp = (customMessage?: string) => {
    const defaultMsg = `Halo Nutribox Catering, saya ingin menanyakan informasi pemesanan katering acara (nasi kotak / prasmanan / snack box / tumpeng) untuk area BSD City & Jabodetabek.

Terima kasih.`;

    const text = customMessage || defaultMsg;
    setWhatsAppMessageText(text);

    // If verified and number is present, open directly
    if (config.whatsapp.verified && config.whatsapp.number.trim().length > 5) {
      const url = buildWhatsAppUrl(config.whatsapp.number, text);
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      // Otherwise open the transparent order preview & copy dialog (Section 13.4 & 15)
      setIsWhatsAppModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col font-sans">
      {/* Top Global Navigation */}
      <Navbar
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onOpenWhatsApp={handleOpenWhatsApp}
        onOpenConfig={() => setIsAdminConfigOpen(true)}
        config={config}
      />

      {/* Main Content Area (pb-20 on mobile prevents content clipping by sticky bottom bar) */}
      <main className="flex-1 pb-20 lg:pb-0">
        {currentTab === 'home' && (
          <>
            <Hero onNavigate={handleNavigate} onOpenWhatsApp={handleOpenWhatsApp} />
            <BrandValueStrip />
            <ProblemSolution onNavigate={handleNavigate} />
            <FeaturedMeals
              onSelectProduct={(p) => setSelectedProduct(p)}
              onOpenWhatsApp={handleOpenWhatsApp}
              onNavigate={handleNavigate}
            />
            <NutritionTransparency />
            <WeeklyMenuPreview
              onNavigate={handleNavigate}
              onSelectMenu={(m) => setSelectedCalendarMenu(m)}
            />
            <SubscriptionHighlight onNavigate={handleNavigate} />
            <HowItWorks />
            <ProductionQuality />
            <CalculatorPromo onNavigate={handleNavigate} />
            <ServiceAreaSection onOpenWhatsApp={handleOpenWhatsApp} config={config} />
            <FinalCTA onOpenWhatsApp={handleOpenWhatsApp} onNavigate={handleNavigate} />
          </>
        )}

        {currentTab === 'catalog' && (
          <ProductCatalog
            onOpenWhatsApp={handleOpenWhatsApp}
            onNavigate={handleNavigate}
          />
        )}

        {currentTab === 'calendar' && (
          <MenuCalendar onOpenWhatsApp={handleOpenWhatsApp} />
        )}

        {currentTab === 'subscription' && (
          <SubscriptionPlans onOpenWhatsApp={handleOpenWhatsApp} />
        )}

        {currentTab === 'calculator' && (
          <CalorieCalculator
            onOpenWhatsApp={handleOpenWhatsApp}
            onNavigate={handleNavigate}
          />
        )}

        {currentTab === 'about' && (
          <AboutUs
            config={config}
            onOpenConfig={() => setIsAdminConfigOpen(true)}
            onNavigate={handleNavigate}
          />
        )}

        {currentTab === 'faq' && (
          <FAQPage onOpenWhatsApp={handleOpenWhatsApp} />
        )}

        {currentTab === 'contact' && (
          <ContactPage
            config={config}
            onOpenWhatsApp={handleOpenWhatsApp}
            onOpenConfig={() => setIsAdminConfigOpen(true)}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConfig={() => setIsAdminConfigOpen(true)}
        config={config}
      />

      {/* Mobile Sticky Quick Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-paper border-t border-rule py-2.5 px-4 flex items-center justify-between gap-3 shadow-md">
        <button
          type="button"
          onClick={() => handleNavigate('catalog')}
          className="flex-1 py-2 px-3 rounded-lg bg-paper-2 border border-rule text-forest font-semibold text-xs flex items-center justify-center gap-1.5 active:scale-[0.99] disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer"
        >
          <ShoppingBag className="w-3.5 h-3.5 text-leaf" />
          <span>Katalog Menu</span>
        </button>

        <button
          type="button"
          onClick={() => handleOpenWhatsApp()}
          className="flex-1 py-2 px-3 rounded-lg bg-forest text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-xs active:scale-[0.99] disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf cursor-pointer"
        >
          <MessageSquare className="w-3.5 h-3.5 text-leaf" />
          <span>Pesan WhatsApp</span>
        </button>
      </div>

      {/* WhatsApp Modal / Configuration Dialog */}
      <WhatsAppModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
        messageText={whatsAppMessageText}
        config={config}
        onUpdateConfig={(newConf) => setConfig(newConf)}
      />

      {/* Business Setup / Admin Preview Modal */}
      <AdminConfigModal
        isOpen={isAdminConfigOpen}
        onClose={() => setIsAdminConfigOpen(false)}
        config={config}
        onUpdateConfig={(newConf) => setConfig(newConf)}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenWhatsApp={handleOpenWhatsApp}
      />

      {/* Calendar Menu Detail Modal */}
      <MenuDetailModal
        item={selectedCalendarMenu}
        onClose={() => setSelectedCalendarMenu(null)}
        onOpenWhatsApp={handleOpenWhatsApp}
      />
    </div>
  );
}
