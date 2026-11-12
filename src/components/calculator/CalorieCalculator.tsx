import React, { useState } from 'react';
import {
  Calculator,
  RotateCcw,
  MessageSquare,
  ShieldAlert,
  Users,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { MealCategory } from '../../types';

interface CalorieCalculatorProps {
  onOpenWhatsApp: (msg?: string) => void;
  onNavigate: (tabId: string) => void;
}

export const CalorieCalculator: React.FC<CalorieCalculatorProps> = ({
  onOpenWhatsApp,
  onNavigate,
}) => {
  // Form state
  const [eventType, setEventType] = useState<'kantor' | 'syukuran' | 'seminar' | 'pernikahan' | 'arisan'>('kantor');
  const [serviceType, setServiceType] = useState<MealCategory>('box');
  const [guestCount, setGuestCount] = useState<string>('50');
  const [tier, setTier] = useState<'hemat' | 'favorit' | 'premium'>('favorit');
  const [includeDessert, setIncludeDessert] = useState<boolean>(false);

  // Error & Result state
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [hasCalculated, setHasCalculated] = useState<boolean>(false);
  const [unitPrice, setUnitPrice] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [bufferGuests, setBufferGuests] = useState<number>(0);
  const [totalCostBuffer, setTotalCostBuffer] = useState<number>(0);

  const eventTypeOptions = [
    { id: 'kantor', label: 'Rapat & Kantor', desc: 'Rapat direksi, gathering divisi, makan siang tim' },
    { id: 'syukuran', label: 'Syukuran & Keluarga', desc: 'Arisan, aqiqah, tasyakuran rumah, ulang tahun' },
    { id: 'seminar', label: 'Seminar & Workshop', desc: 'Pelatihan kampus, talkshow, konferensi profesional' },
    { id: 'pernikahan', label: 'Lamaran & Pernikahan', desc: 'Resepsi gedung, akad nikah intimate, tunangan' },
  ];

  const serviceTypeOptions = [
    { id: 'box' as MealCategory, label: 'Nasi Kotak / Bento', desc: 'Praktis, kemasan sekat anti-tumpah, sudah termasuk alat makan' },
    { id: 'buffet' as MealCategory, label: 'Prasmanan (Buffet)', desc: 'Lengkap meja buffet bercover, pemanas roll-top & staf pramusaji' },
    { id: 'snack' as MealCategory, label: 'Snack Box Rapat', desc: '3 kue premium (manis & gurih) + air mineral cup higienis' },
    { id: 'tumpeng' as MealCategory, label: 'Tumpeng & Hantaran', desc: 'Tumpeng tampah akbar atau tumpeng mini mika berkat' },
  ];

  const tierOptions = [
    { id: 'hemat', label: 'Paket Hemat', desc: 'Menu standar lezat bersahabat budget' },
    { id: 'favorit', label: 'Paket Favorit', desc: 'Pilihan paling sering dipesan, lauk komplit' },
    { id: 'premium', label: 'Paket Premium', desc: 'Kombinasi daging sapi, seafood & olahan modern' },
  ];

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const numGuests = parseInt(guestCount, 10);

    if (isNaN(numGuests)) {
      setErrorMsg('Harap masukkan jumlah tamu dengan angka yang valid.');
      return;
    }

    if (numGuests < 15) {
      setErrorMsg('Minimal pemesanan untuk katering acara adalah 15 tamu (pax/box).');
      return;
    }

    if (numGuests > 2000) {
      setErrorMsg('Untuk pesanan di atas 2.000 pax, silakan langsung hubungi customer service kami.');
      return;
    }

    // Determine Base Price per Pax
    let base = 35000;
    if (serviceType === 'box') {
      base = tier === 'hemat' ? 30000 : tier === 'favorit' ? 35000 : 42000;
    } else if (serviceType === 'buffet') {
      base = tier === 'hemat' ? 68000 : tier === 'favorit' ? 75000 : 89000;
    } else if (serviceType === 'snack') {
      base = tier === 'hemat' ? 15000 : tier === 'favorit' ? 18000 : 23000;
    } else if (serviceType === 'tumpeng') {
      base = tier === 'hemat' ? 39000 : tier === 'favorit' ? 45000 : 52000;
    }

    if (includeDessert) {
      base += 7000; // Add-on aneka es buah / pudding
    }

    const calculatedTotal = base * numGuests;
    const recommendedBuffer = Math.ceil(numGuests * 1.10); // +10% buffer
    const calculatedBufferTotal = base * recommendedBuffer;

    setUnitPrice(base);
    setTotalCost(calculatedTotal);
    setBufferGuests(recommendedBuffer);
    setTotalCostBuffer(calculatedBufferTotal);
    setHasCalculated(true);
  };

  const handleReset = () => {
    setEventType('kantor');
    setServiceType('box');
    setGuestCount('50');
    setTier('favorit');
    setIncludeDessert(false);
    setErrorMsg(null);
    setHasCalculated(false);
  };

  const getRecommendation = () => {
    if (serviceType === 'buffet') {
      return {
        name: 'Paket Prasmanan Nusantara Gold',
        desc: '6–7 pilihan menu lauk daging sapi, ayam rica kemangi, sup kimlo, capcay seafood, buah potong, dan es kopyor. Sudah lengkap meja buffet, pemanas, dan staf pramusaji.',
      };
    }
    if (serviceType === 'snack') {
      return {
        name: 'Snack Box Rapat & Coffee Break',
        desc: 'Risoles ragout ayam creamy, pastel telur gurih, fudge brownies almond, dan air mineral cup. Dikemas dalam box kraft higienis.',
      };
    }
    if (serviceType === 'tumpeng') {
      return {
        name: 'Tumpeng Kuning Komplit Syukuran / Mini Mika',
        desc: 'Nasi kuning pulen rempah kunyit alami dengan 7 macam lauk komplit tradisional (ayam lengkuas, telur balado, perkedel, orek tempe, mie jawa).',
      };
    }
    return {
      name: 'Nasi Kotak Ayam Bakar Madu Spesial',
      desc: 'Menu terfavorit untuk berbagai acara. Potongan ayam bakar bumbu madu karamelisasi, tahu tempe bacem, lalapan segar, sambal bajak matang, dan kerupuk udang renyah.',
    };
  };

  const recommendation = getRecommendation();

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-20 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 text-left">
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-forest tracking-tight">
            Kalkulator estimasi porsi & budget acara.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-ink-2 leading-relaxed">
            Hitung perkiraan kebutuhan anggaran katering acara Anda secara cepat dan transparan. Dapatkan simulasi biaya per pax, buffer cadangan tamu aman, dan rekomendasi menu terbaik.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Input Form Column (7 Cols) */}
          <div className="lg:col-span-7 bg-paper border border-rule rounded-xl p-6 sm:p-8 shadow-xs text-left">
            <div className="flex items-center gap-2 pb-4 mb-6 border-b border-rule-subtle">
              <Calculator className="w-5 h-5 text-leaf" />
              <h2 className="font-display font-bold text-lg text-forest">
                Formulir simulasi kebutuhan acara
              </h2>
            </div>

            <form onSubmit={handleCalculate} className="space-y-6">
              {/* Event Type */}
              <div>
                <label className="block text-xs font-bold text-forest mb-2">
                  1. Jenis kegiatan / acara Anda:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {eventTypeOptions.map((evt) => (
                    <button
                      key={evt.id}
                      type="button"
                      onClick={() => setEventType(evt.id as any)}
                      className={`p-3 rounded-xl border text-left transition-colors active:scale-[0.99] disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
                        eventType === evt.id
                          ? 'bg-forest text-white border-forest shadow-xs'
                          : 'bg-paper-2 border-rule text-ink hover:bg-mint'
                      }`}
                    >
                      <span className="font-display font-bold text-xs sm:text-sm block">
                        {evt.label}
                      </span>
                      <span className={`text-[11px] block mt-0.5 ${
                        eventType === evt.id ? 'text-sage' : 'text-ink-2'
                      }`}>
                        {evt.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Type */}
              <div>
                <label className="block text-xs font-bold text-forest mb-2">
                  2. Format sajian yang diinginkan:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {serviceTypeOptions.map((srv) => (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setServiceType(srv.id)}
                      className={`p-3 rounded-xl border text-left transition-colors active:scale-[0.99] disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
                        serviceType === srv.id
                          ? 'bg-forest text-white border-forest shadow-xs'
                          : 'bg-paper-2 border-rule text-ink hover:bg-mint'
                      }`}
                    >
                      <span className="font-display font-bold text-xs sm:text-sm block">
                        {srv.label}
                      </span>
                      <span className={`text-[11px] block mt-0.5 ${
                        serviceType === srv.id ? 'text-sage' : 'text-ink-2'
                      }`}>
                        {srv.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest Count */}
              <div>
                <label htmlFor="calc-guests" className="block text-xs font-bold text-forest mb-1.5">
                  3. Perkiraan jumlah tamu (Pax / Box):
                </label>
                <div className="flex items-center gap-3">
                  <input
                    id="calc-guests"
                    type="number"
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    min="15"
                    max="2000"
                    placeholder="50"
                    className="w-36 px-3.5 py-2.5 rounded-xl border border-rule bg-paper text-sm text-ink font-mono font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                    required
                  />
                  <span className="text-xs text-ink-2">
                    Min. 15 pax (contoh: 30, 50, 100, 200 pax)
                  </span>
                </div>
              </div>

              {/* Tier Selection */}
              <div>
                <label className="block text-xs font-bold text-forest mb-2">
                  4. Pilihan kelas paket menu:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {tierOptions.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTier(t.id as any)}
                      className={`p-3 rounded-xl border text-left transition-colors active:scale-[0.99] disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
                        tier === t.id
                          ? 'bg-forest text-white border-forest shadow-xs'
                          : 'bg-paper-2 border-rule text-ink hover:bg-mint'
                      }`}
                    >
                      <span className="font-display font-bold text-xs block">
                        {t.label}
                      </span>
                      <span className={`text-[10px] block mt-0.5 ${
                        tier === t.id ? 'text-sage' : 'text-ink-2'
                      }`}>
                        {t.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Add-on Checkbox */}
              <label className="flex items-center gap-2.5 p-3 rounded-xl bg-paper-2 border border-rule-subtle cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeDessert}
                  onChange={(e) => setIncludeDessert(e.target.checked)}
                  className="rounded text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                />
                <span className="text-xs text-ink">
                  Tambahkan paket hidangan penutup (+Rp7.000 / pax untuk aneka es buah / pudding silky segar).
                </span>
              </label>

              {/* Error Message */}
              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-terracotta/10 border border-terracotta/30 text-xs text-terracotta flex items-start gap-2">
                  <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Submit / Reset Actions */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 rounded-xl bg-forest hover:bg-forest/90 active:scale-[0.99] disabled:opacity-50 text-white font-semibold text-xs sm:text-sm shadow-xs transition-colors text-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf cursor-pointer"
                >
                  <span>Hitung estimasi budget acara</span>
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="p-3 rounded-xl border border-rule text-ink-2 hover:text-forest hover:bg-paper-2 active:scale-[0.99] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer"
                  title="Reset Formulir"
                  aria-label="Reset formulir"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              <div className="text-[11px] text-ink-2 flex items-center gap-1.5 pt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-leaf" />
                <span>Simulasi instan tanpa perlu registrasi akun atau login.</span>
              </div>
            </form>
          </div>

          {/* Result Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {hasCalculated ? (
              <div className="bg-forest text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 motion-safe:animate-fadeIn text-left">
                <div className="pb-4 border-b border-white/20">
                  <span className="text-[10px] font-semibold text-citrus block">
                    Hasil simulasi kalkulator acara
                  </span>
                  <h3 className="font-display font-bold text-xl text-white mt-1">
                    Estimasi Anggaran Acara
                  </h3>
                  <p className="text-xs text-sage">
                    {eventTypeOptions.find((e) => e.id === eventType)?.label} • {serviceTypeOptions.find((s) => s.id === serviceType)?.label}
                  </p>
                </div>

                {/* Main Metrics */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl bg-paper-elevated/10 border border-white/20">
                    <span className="text-[11px] text-sage block">Biaya per Pax / Box</span>
                    <span className="font-display font-black text-xl sm:text-2xl text-white mt-0.5 block tabular-nums">
                      {formatRupiah(unitPrice)}
                    </span>
                    <span className="text-[10px] text-sage">termasuk add-on</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-paper-elevated/10 border border-white/20">
                    <span className="text-[11px] text-sage block">Saran Buffer Cadangan</span>
                    <span className="font-display font-black text-xl sm:text-2xl text-white mt-0.5 block tabular-nums">
                      {bufferGuests} Pax
                    </span>
                    <span className="text-[10px] text-sage">+10% antisipasi tamu</span>
                  </div>
                </div>

                {/* Total Budget Card */}
                <div className="p-5 rounded-2xl bg-leaf/20 border border-leaf/40">
                  <span className="text-xs font-semibold text-citrus block">
                    Total Estimasi Anggaran ({guestCount} Tamu):
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-display font-extrabold text-3xl sm:text-4xl text-white tabular-nums">
                      {formatRupiah(totalCost)}
                    </span>
                  </div>
                  <p className="text-[11px] text-sage mt-2 leading-relaxed">
                    Estimasi jika menggunakan buffer cadangan (+10%):{' '}
                    <strong className="text-white tabular-nums">{formatRupiah(totalCostBuffer)}</strong> untuk {bufferGuests} porsi.
                  </p>
                </div>

                {/* Recommended Menu Box */}
                <div className="p-5 rounded-2xl bg-paper text-ink shadow-xs space-y-2.5">
                  <span className="text-[10px] font-semibold text-leaf block">
                    Rekomendasi paket menu:
                  </span>
                  <h4 className="font-display font-bold text-base text-forest">
                    {recommendation.name}
                  </h4>
                  <p className="text-xs text-ink-2 leading-relaxed">
                    {recommendation.desc}
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => onNavigate('catalog')}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-forest hover:text-leaf active:scale-[0.99] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer"
                    >
                      <span className="whitespace-nowrap">Lihat katalog menu lengkap</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Consultation WhatsApp CTA */}
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => {
                      const evtLabel = eventTypeOptions.find((e) => e.id === eventType)?.label;
                      const srvLabel = serviceTypeOptions.find((s) => s.id === serviceType)?.label;
                      const msg = `Halo Nutribox Catering, saya telah menghitung estimasi kebutuhan konsumsi acara saya:

Jenis Acara: ${evtLabel}
Format Sajian: ${srvLabel}
Jumlah Tamu: ${guestCount} Pax (Buffer cadangan: ${bufferGuests} Pax)
Kelas Paket: ${tierOptions.find((t) => t.id === tier)?.label}
Estimasi Total Anggaran: ${formatRupiah(totalCost)}
Rekomendasi Menu: ${recommendation.name}

Saya ingin berkonsultasi mengenai ketersediaan tanggal dan saran menu terbaik. Terima kasih.`;
                      onOpenWhatsApp(msg);
                    }}
                    className="w-full py-3.5 px-4 rounded-lg bg-white hover:bg-white/95 active:scale-[0.99] disabled:opacity-50 text-forest font-bold text-xs sm:text-sm shadow-sm transition-colors flex items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-forest" />
                    <span>Konsultasikan via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full py-2 text-xs text-white/80 hover:text-white transition-colors text-center active:scale-[0.99] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
                  >
                    <span>Simulasi ulang dengan data lain</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-paper border border-rule-subtle rounded-3xl p-8 text-center space-y-4 shadow-xs">
                <div className="w-14 h-14 rounded-2xl bg-paper-2 text-leaf flex items-center justify-center mx-auto">
                  <Users className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-lg text-forest">
                  Menunggu pengisian formulir acara
                </h3>
                <p className="text-xs text-ink-2 leading-relaxed">
                  Pilih jenis acara, format sajian, dan perkiraan jumlah tamu di sebelah kiri, lalu tekan tombol “Hitung estimasi budget acara” untuk melihat simulasi biaya per pax, buffer aman, dan rekomendasi menu.
                </p>
                <div className="p-3.5 rounded-xl bg-paper-2 text-[11px] text-ink-2 text-left space-y-1">
                  <span className="font-semibold text-forest block">Mengapa penting menghitung buffer tamu (+10%)?</span>
                  <p>
                    Buffer cadangan 10% direkomendasikan para wedding planner & event organizer untuk mengantisipasi kehadiran tamu tambahan tanpa membuat panik tuan rumah.
                  </p>
                </div>
              </div>
            )}

            {/* Note & Disclaimer */}
            <div className="p-4 rounded-2xl bg-paper border border-rule-subtle text-xs text-ink-2 space-y-2 shadow-xs text-left">
              <div className="flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Pemberitahuan Transparansi:</strong> Hasil simulasi ini adalah estimasi awal untuk mempermudah perencanaan budget. Biaya akhir dapat disesuaikan dengan kustomisasi menu, jarak pengantaran logistik, dan fasilitas khusus venue yang Anda inginkan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
