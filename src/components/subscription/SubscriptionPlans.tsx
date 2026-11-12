import React, { useState } from 'react';
import { planPricings, durationOptions } from '../../data/plans';
import { MealCategory } from '../../types';
import { MessageSquare, ArrowUpRight, Plus, Minus, Info } from 'lucide-react';

interface SubscriptionPlansProps {
  onOpenWhatsApp: (msg?: string) => void;
}

export const SubscriptionPlans: React.FC<SubscriptionPlansProps> = ({ onOpenWhatsApp }) => {
  // Configurator state
  const [selectedDuration, setSelectedDuration] = useState<'single' | 'weekly' | 'monthly'>('weekly');
  const [selectedCategory, setSelectedCategory] = useState<MealCategory>('box');
  const [portionCount, setPortionCount] = useState<number>(35);
  const [preferenceNote, setPreferenceNote] = useState<string>('Standar menu populer (sambal pisah)');
  const [hasExtraService, setHasExtraService] = useState<boolean>(false);

  // Active pricing lookup
  const activePlan = planPricings.find((p) => p.category === selectedCategory) || planPricings[0];
  const activeDurationObj = durationOptions.find((d) => d.id === selectedDuration) || durationOptions[1];

  // Base price per box / package
  let tierUnitPrice = activePlan.weeklyPrice;
  if (selectedDuration === 'single') {
    tierUnitPrice = activePlan.dailyPrice;
  } else if (selectedDuration === 'weekly') {
    tierUnitPrice = activePlan.weeklyPrice;
  } else {
    tierUnitPrice = activePlan.monthlyPrice;
  }

  const basePrice = tierUnitPrice * portionCount;

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleCheckoutWhatsApp = () => {
    const durationLabel = activeDurationObj.label;
    const planName = `${activePlan.label} (${portionCount} Pax / Box)`;
    const extraText = hasExtraService ? 'Memerlukan tambahan set meja buffet / staf pramusaji / aneka es' : 'Tidak ada';

    const message = `Halo Nutribox Catering, saya ingin memesan paket acara berikut:

Paket: ${planName}
Skala Acara: ${durationLabel}
Kategori: ${activePlan.label}
Jumlah Tamu (Pax): ${portionCount} Pax
Preferensi & Tanggal: ${preferenceNote}
Tambahan Add-on: ${extraText}

Estimasi Harga Paket: ${formatRupiah(basePrice)} (Belum termasuk ongkir/fasilitas khusus)

Mohon informasi mengenai ketersediaan tanggal acara, rincian menu, dan prosedur booking DP.

Terima kasih.`;

    onOpenWhatsApp(message);
  };

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-20 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-3xl mb-8 sm:mb-12 text-left">
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-forest tracking-tight">
            Paket katering acara, sesuaikan dengan skala tamu Anda.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-ink-2 leading-relaxed">
            Pilihan fleksibel untuk arisan keluarga, rapat kantor, seminar, gathering, hingga pesta pernikahan. Dapatkan harga hemat volume pemesanan dan garansi tiba tepat waktu.
          </p>
        </div>

        {/* Pricing Comparison Table */}
        <div className="bg-paper border border-rule rounded-xl p-6 sm:p-8 shadow-xs mb-14 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-rule-subtle gap-2">
            <div>
              <h2 className="font-display font-bold text-xl text-forest">
                Daftar harga resmi paket acara
              </h2>
              <p className="text-xs text-ink-2">
                Bandingkan harga satuan per pax berdasarkan skala pemesanan acara Anda.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-leaf bg-paper-2 border border-rule px-3 py-1 rounded-md self-start sm:self-auto">
              Berlaku untuk 2026
            </span>
          </div>

          {/* Mobile Plan Cards View */}
          <div className="grid grid-cols-1 gap-3.5 md:hidden">
            {planPricings.map((p) => (
              <div key={p.category} className="p-4 rounded-xl bg-paper-2 border border-rule-subtle text-left">
                <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-rule-subtle">
                  <span className="font-display font-bold text-sm text-forest">{p.label}</span>
                  <span className="text-[11px] text-ink-2 font-medium">{p.features[0] || ''}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center tabular-nums">
                  <div className="p-2 rounded-lg bg-paper border border-rule-subtle">
                    <span className="text-[10px] text-ink-2 block">15–30 Pax</span>
                    <span className="font-mono font-bold text-xs text-ink">{formatRupiah(p.dailyPrice)}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-paper border border-rule-subtle">
                    <span className="text-[10px] text-ink-2 block">30–75 Pax</span>
                    <span className="font-mono font-bold text-xs text-forest">{formatRupiah(p.weeklyPrice)}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-paper border border-rule-subtle">
                    <span className="text-[10px] text-leaf font-bold block">75–200+ Pax</span>
                    <span className="font-mono font-bold text-xs text-leaf">{formatRupiah(p.monthlyPrice)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-rule text-forest font-display font-bold text-xs">
                  <th className="py-3 px-4">Kategori paket acara</th>
                  <th className="py-3 px-4">Acara Intimate (15–30 Pax)</th>
                  <th className="py-3 px-4">Acara Kantor / Seminar (30–75 Pax)</th>
                  <th className="py-3 px-4">Acara Akbar / Pesta (75–200+ Pax)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-rule-subtle text-ink">
                {planPricings.map((p) => (
                  <tr key={p.category} className="hover:bg-paper-2 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-forest">
                      <div>{p.label}</div>
                      <div className="text-[11px] font-normal text-ink-2">
                        {p.features[0] || ''}
                      </div>
                    </td>
                    <td className="py-3.5 px-4 font-mono font-bold text-ink">
                      {formatRupiah(p.dailyPrice)} / pax
                    </td>
                    <td className="py-3.5 px-4 font-mono font-bold text-forest">
                      {formatRupiah(p.weeklyPrice)} / pax
                    </td>
                    <td className="py-3.5 px-4 font-mono font-bold text-leaf">
                      {formatRupiah(p.monthlyPrice)} / pax
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 pt-3 border-t border-rule-subtle flex items-start gap-2 text-[11px] text-ink-2">
            <Info className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
            <p>
              *Seluruh harga di atas belum termasuk biaya pengiriman kurir ke alamat Anda. Khusus Paket Prasmanan sudah termasuk meja buffet, pemanas roll-top, dan staf pramusaji.
            </p>
          </div>
        </div>

        {/* Interactive Event Configurator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Configurator Form (7 Cols) */}
          <div className="lg:col-span-7 bg-paper border border-rule rounded-xl p-6 sm:p-8 shadow-xs space-y-6 text-left">
            <div>
              <h2 className="font-display font-bold text-2xl text-forest">
                Kalkulator simulasi paket acara
              </h2>
              <p className="text-xs text-ink-2 mt-1">
                Pilih skala tamu, kategori menu, dan catatan preferensi untuk menghitung estimasi biaya dan pesan via WhatsApp.
              </p>
            </div>

            {/* Step 1: Event Scale Selector */}
            <div>
              <label className="block text-xs font-bold text-forest mb-2.5">
                1. Pilih skala acara:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {durationOptions.map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setSelectedDuration(d.id as any)}
                    className={`p-3.5 rounded-2xl border text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
                      selectedDuration === d.id
                        ? 'bg-forest text-white border-forest shadow-xs ring-2 ring-leaf'
                        : 'bg-paper-2 border-rule text-ink hover:border-leaf'
                    }`}
                  >
                    <span className="font-display font-bold text-xs sm:text-sm block">
                      {d.label}
                    </span>
                    <span className={`text-[11px] block mt-1 leading-snug ${
                      selectedDuration === d.id ? 'text-sage' : 'text-ink-2'
                    }`}>
                      {d.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Category Selector */}
            <div>
              <label className="block text-xs font-bold text-forest mb-2.5">
                2. Pilih jenis paket sajian:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {planPricings.map((p) => (
                  <button
                    key={p.category}
                    type="button"
                    onClick={() => setSelectedCategory(p.category)}
                    className={`p-3.5 rounded-2xl border text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
                      selectedCategory === p.category
                        ? 'bg-mint border-forest text-forest font-semibold ring-1 ring-forest'
                        : 'bg-paper-2 border-rule text-ink hover:bg-mint/60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-sm text-forest">
                        {p.label}
                      </span>
                    </div>
                    <span className="text-[11px] text-ink-2 block mt-1">
                      {p.features[0] || ''}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Portion Count */}
            <div>
              <label className="block text-xs font-bold text-forest mb-2">
                3. Jumlah tamu undangan (Pax / Box):
              </label>
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center border border-rule rounded-xl bg-paper-2 p-1">
                  <button
                    type="button"
                    aria-label="Kurangi porsi"
                    onClick={() => setPortionCount(Math.max(15, portionCount - 5))}
                    className="w-9 h-9 rounded-lg bg-paper flex items-center justify-center text-forest hover:bg-mint transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-display font-bold text-sm text-forest">
                    {portionCount}
                  </span>
                  <button
                    type="button"
                    aria-label="Tambah porsi"
                    onClick={() => setPortionCount(portionCount + 5)}
                    className="w-9 h-9 rounded-lg bg-paper flex items-center justify-center text-forest hover:bg-mint transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-xs text-ink-2">
                  Min. 15 Pax (dapat disesuaikan kelipatan 5 box).
                </span>
              </div>
            </div>

            {/* Step 4: Preferences & Extras */}
            <div className="space-y-3 pt-2">
              <label htmlFor="subscription-preference" className="block text-xs font-bold text-forest">
                4. Tanggal acara, jam & catatan preferensi:
              </label>
              <input
                id="subscription-preference"
                type="text"
                value={preferenceNote}
                onChange={(e) => setPreferenceNote(e.target.value)}
                placeholder="Misal: Tanggal 15 Nov, jam 11 siang di Serpong, tanpa udang, sambal pisah"
                className="w-full px-4 py-2.5 border border-rule rounded-xl text-xs bg-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              />

              <label className="flex items-center gap-2.5 p-3 rounded-xl bg-paper-2 border border-rule-subtle cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasExtraService}
                  onChange={(e) => setHasExtraService(e.target.checked)}
                  className="rounded text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                />
                <span className="text-xs text-ink">
                  Ingin mengajukan opsi meja prasmanan tambahan / aneka es dessert (akan dikonfirmasikan oleh CS).
                </span>
              </label>
            </div>
          </div>

          {/* Right Summary Card (5 Cols) */}
          <div className="lg:col-span-5 bg-forest text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 sticky top-24">
            <div className="pb-4 border-b border-rule-subtle">
              <span className="text-[10px] font-semibold text-citrus block">
                Ringkasan pemesanan acara
              </span>
              <h3 className="font-display font-bold text-xl text-white mt-1">
                {activePlan.label}
              </h3>
              <p className="text-xs text-sage mt-0.5">
                {activeDurationObj.label}, {portionCount} Pax / Box
              </p>
            </div>

            <div className="space-y-3 text-xs text-mint">
              <div className="flex justify-between py-1.5 border-b border-white/10">
                <span className="text-sage">Skala layanan:</span>
                <span className="font-semibold text-white">{activeDurationObj.label}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/10">
                <span className="text-sage">Tarif per pax:</span>
                <span className="font-semibold text-white">{formatRupiah(tierUnitPrice)} / pax</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/10">
                <span className="text-sage">Total porsi dipesan:</span>
                <span className="font-semibold text-white">{portionCount} Pax / Box</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/10">
                <span className="text-sage">Waktu pengantaran:</span>
                <span className="font-semibold text-white">Garansi Tiba H-1 Jam Acara</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/10">
                <span className="text-sage">Catatan & tanggal:</span>
                <span className="font-semibold text-white truncate max-w-[180px]">{preferenceNote}</span>
              </div>
            </div>

            {/* Total Price Display */}
            <div className="p-4 rounded-xl bg-paper-elevated/10 border border-white/20">
              <span className="text-[11px] text-white/80 block">Estimasi total biaya acara:</span>
              <div className="font-display font-black text-3xl text-white mt-1">
                {formatRupiah(basePrice)}
              </div>
              <p className="text-[11px] text-white/75 mt-1">
                *Belum termasuk ongkir armada & add-on khusus.
              </p>
            </div>

            {/* WhatsApp Checkout CTA */}
            <div className="space-y-2.5">
              <button
                type="button"
                onClick={handleCheckoutWhatsApp}
                className="w-full py-3.5 px-4 rounded-lg bg-white hover:bg-white/95 active:scale-[0.99] disabled:opacity-50 text-forest font-bold text-sm shadow-sm transition-colors flex items-center justify-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <MessageSquare className="w-4 h-4 text-forest" />
                <span className="whitespace-nowrap">Konsultasi paket via WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 text-forest motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5 motion-safe:transition-transform" />
              </button>

              <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-[11px] text-white/80 leading-relaxed">
                Slot tanggal acara resmi terkunci setelah pembayaran DP 50% diverifikasi oleh customer service via WhatsApp.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
