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
  const [selectedCategory, setSelectedCategory] = useState<MealCategory>('balance');
  const [portionCount, setPortionCount] = useState<number>(1);
  const [preferenceNote, setPreferenceNote] = useState<string>('Standar (Sesuai rotasi harian)');
  const [hasExtraProtein, setHasExtraProtein] = useState<boolean>(false);

  // Active pricing lookup
  const activePlan = planPricings.find((p) => p.category === selectedCategory) || planPricings[0];
  const activeDurationObj = durationOptions.find((d) => d.id === selectedDuration) || durationOptions[1];

  // Base price per box / package
  let basePrice = 0;
  if (selectedDuration === 'single') {
    basePrice = activePlan.dailyPrice * portionCount;
  } else if (selectedDuration === 'weekly') {
    basePrice = activePlan.weeklyPrice * portionCount;
  } else {
    basePrice = activePlan.monthlyPrice * portionCount;
  }

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleCheckoutWhatsApp = () => {
    const durationLabel = activeDurationObj.label;
    const planName = `${activePlan.label} (${portionCount} Porsi / Hari)`;
    const extraText = hasExtraProtein ? 'Tambahan ekstra porsi protein (menunggu konfirmasi CS)' : 'Tidak ada';

    const message = `Halo NutriBox Daily, saya ingin memesan paket berikut:

Nama Paket: ${planName}
Durasi: ${durationLabel}
Kategori: ${activePlan.label}
Jumlah Porsi: ${portionCount} Box
Preferensi: ${preferenceNote}
Tambahan: ${extraText}

Estimasi Harga Paket: ${formatRupiah(basePrice)} (Belum termasuk ongkir)

Mohon informasi mengenai ketersediaan menu, jadwal pengiriman, dan total pembayaran.

Terima kasih.`;

    onOpenWhatsApp(message);
  };

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-20 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-3xl mb-8 sm:mb-12 text-left">
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-forest tracking-tight">
            Paket makan siang sehat, pesan harian atau langganan.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-ink-2 leading-relaxed">
            Pilih paket makanan yang membantu rutinitas makan siangmu menjadi lebih praktis dan teratur. Tanpa repot memasak, tanpa penambahan MSG, dan tiba tepat waktu sebelum jam istirahat.
          </p>
        </div>

        {/* Pricing Comparison Table (Daily, Weekly 5-Day, Monthly 20-Day) */}
        <div className="bg-paper border border-rule rounded-xl p-6 sm:p-8 shadow-xs mb-14 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-rule-subtle gap-2">
            <div>
              <h2 className="font-display font-bold text-xl text-forest">
                Daftar harga resmi NutriBox Daily
              </h2>
              <p className="text-xs text-ink-2">
                Bandingkan harga satuan dan paket hemat berlangganan 5 hari serta 20 hari kerja.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-leaf bg-paper-2 border border-rule px-3 py-1 rounded-md self-start sm:self-auto">
              Berlaku untuk 2026
            </span>
          </div>

          {/* Mobile Plan Cards View (Reflows into clean cards on small screens) */}
          <div className="grid grid-cols-1 gap-3.5 md:hidden">
            {planPricings.map((p) => (
              <div key={p.category} className="p-4 rounded-xl bg-paper-2 border border-rule-subtle text-left">
                <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-rule-subtle">
                  <span className="font-display font-bold text-sm text-forest">{p.label}</span>
                  <span className="text-[11px] text-ink-2 font-medium">{p.features[1] || ''}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center tabular-nums">
                  <div className="p-2 rounded-lg bg-paper border border-rule-subtle">
                    <span className="text-[10px] text-ink-2 block">1 Box Satuan</span>
                    <span className="font-mono font-bold text-xs text-ink">{formatRupiah(p.dailyPrice)}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-paper border border-rule-subtle">
                    <span className="text-[10px] text-ink-2 block">5 Hari</span>
                    <span className="font-mono font-bold text-xs text-forest">{formatRupiah(p.weeklyPrice)}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-paper border border-rule-subtle">
                    <span className="text-[10px] text-leaf font-bold block">20 Hari</span>
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
                  <th className="py-3 px-4">Kategori meal box</th>
                  <th className="py-3 px-4">Harga satuan (1 box)</th>
                  <th className="py-3 px-4">Weekly Fit Plan (5 hari)</th>
                  <th className="py-3 px-4">Monthly Fit Plan (20 hari)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-rule-subtle text-ink">
                {planPricings.map((p) => (
                  <tr key={p.category} className="hover:bg-paper-2 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-forest">
                      <div>{p.label}</div>
                      <div className="text-[11px] font-normal text-ink-muted">
                        {p.features[1] || ''}
                      </div>
                    </td>
                    <td className="py-3.5 px-4 font-mono font-bold text-ink">
                      {formatRupiah(p.dailyPrice)}
                    </td>
                    <td className="py-3.5 px-4 font-mono font-bold text-forest">
                      {formatRupiah(p.weeklyPrice)}
                    </td>
                    <td className="py-3.5 px-4 font-mono font-bold text-leaf">
                      {formatRupiah(p.monthlyPrice)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 pt-3 border-t border-rule-subtle flex items-start gap-2 text-[11px] text-ink-muted">
            <Info className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
            <p>
              *Seluruh harga di atas belum termasuk biaya pengiriman kurir ke alamat Anda. Pengiriman beroperasi hari Senin sampai Jumat (Sabtu, Minggu dan hari libur nasional tidak ada produksi reguler).
            </p>
          </div>
        </div>

        {/* Interactive Subscription Configurator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Configurator Form (7 Cols) */}
          <div className="lg:col-span-7 bg-paper border border-rule rounded-xl p-6 sm:p-8 shadow-xs space-y-6 text-left">
            <div>
              <h2 className="font-display font-bold text-2xl text-forest">
                Kustomisasi paket katering Anda
              </h2>
              <p className="text-xs text-ink-2 mt-1">
                Sesuaikan durasi, kategori nutrisi, dan preferensi untuk menghasilkan rincian pesan WhatsApp otomatis.
              </p>
            </div>

            {/* Step 1: Duration Selector */}
            <div>
              <label className="block text-xs font-bold text-forest mb-2.5">
                1. Pilih durasi langganan:
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
                      selectedDuration === d.id ? 'text-sage' : 'text-ink-muted'
                    }`}>
                      {d.days === 1 ? '1 hari makan siang' : `${d.days} hari kerja (Senin sampai Jumat)`}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Category Selector */}
            <div>
              <label className="block text-xs font-bold text-forest mb-2.5">
                2. Pilih kategori meal box:
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
                    <span className="text-[11px] text-ink-muted block mt-1">
                      {p.features[1] || ''}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Portion Count */}
            <div>
              <label className="block text-xs font-bold text-forest mb-2">
                3. Jumlah porsi per hari:
              </label>
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center border border-rule rounded-xl bg-paper-2 p-1">
                  <button
                    type="button"
                    aria-label="Kurangi porsi"
                    onClick={() => setPortionCount(Math.max(1, portionCount - 1))}
                    className="w-9 h-9 rounded-lg bg-paper-elevated flex items-center justify-center text-forest hover:bg-mint transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-display font-bold text-sm text-forest">
                    {portionCount}
                  </span>
                  <button
                    type="button"
                    aria-label="Tambah porsi"
                    onClick={() => setPortionCount(portionCount + 1)}
                    className="w-9 h-9 rounded-lg bg-paper-elevated flex items-center justify-center text-forest hover:bg-mint transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-xs text-ink-muted">
                  Porsi untuk Anda sendiri atau bersama rekan kantor satu tim.
                </span>
              </div>
            </div>

            {/* Step 4: Preferences & Extras */}
            <div className="space-y-3 pt-2">
              <label htmlFor="subscription-preference" className="block text-xs font-bold text-forest">
                4. Preferensi makanan dan catatan khusus:
              </label>
              <input
                id="subscription-preference"
                type="text"
                value={preferenceNote}
                onChange={(e) => setPreferenceNote(e.target.value)}
                placeholder="Misal: Sambal pisah, ganti nasi merah, tanpa daun bawang"
                className="w-full px-4 py-2.5 border border-rule rounded-xl text-xs bg-paper-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              />

              <label className="flex items-center gap-2.5 p-3 rounded-xl bg-paper-2 border border-rule-subtle cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasExtraProtein}
                  onChange={(e) => setHasExtraProtein(e.target.checked)}
                  className="rounded text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                />
                <span className="text-xs text-ink">
                  Ingin mengajukan opsi ekstra porsi protein (akan dikonfirmasi biayanya oleh CS).
                </span>
              </label>
            </div>
          </div>

          {/* Right Summary Card (5 Cols) */}
          <div className="lg:col-span-5 bg-forest text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 sticky top-24">
            <div className="pb-4 border-b border-rule-subtle">
              <span className="text-[10px] font-semibold text-citrus block">
                Ringkasan pemesanan
              </span>
              <h3 className="font-display font-bold text-xl text-white mt-1">
                {activePlan.label}
              </h3>
              <p className="text-xs text-sage mt-0.5">
                {activeDurationObj.label}, {portionCount} Porsi per hari
              </p>
            </div>

            <div className="space-y-3 text-xs text-mint">
              <div className="flex justify-between py-1.5 border-b border-white/10">
                <span className="text-sage">Durasi layanan:</span>
                <span className="font-semibold text-white">{activeDurationObj.label}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/10">
                <span className="text-sage">Jumlah box per hari:</span>
                <span className="font-semibold text-white">{portionCount} Box</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/10">
                <span className="text-sage">Total porsi selama paket:</span>
                <span className="font-semibold text-white">{activeDurationObj.days * portionCount} Box</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/10">
                <span className="text-sage">Jadwal pengantaran:</span>
                <span className="font-semibold text-white">10.30 sampai 11.45 WIB</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/10">
                <span className="text-sage">Catatan preferensi:</span>
                <span className="font-semibold text-white truncate max-w-[180px]">{preferenceNote}</span>
              </div>
            </div>

            {/* Total Price Display */}
            <div className="p-4 rounded-xl bg-paper-elevated/10 border border-white/20">
              <span className="text-[11px] text-white/80 block">Estimasi total harga paket:</span>
              <div className="font-display font-black text-3xl text-white mt-1">
                {formatRupiah(basePrice)}
              </div>
              <p className="text-[11px] text-white/75 mt-1">
                *Belum termasuk ongkir kurir ke alamat pengantaran.
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
                <span className="whitespace-nowrap">Pesan paket via WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 text-forest motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5 motion-safe:transition-transform" />
              </button>

              <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-[11px] text-white/80 leading-relaxed">
                Pemesanan baru resmi terkonfirmasi setelah customer service memverifikasi ketersediaan menu, alamat, dan pembayaran via WhatsApp.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
