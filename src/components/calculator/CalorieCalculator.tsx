import React, { useState } from 'react';
import {
  Calculator,
  RotateCcw,
  MessageSquare,
  ShieldAlert,
  Activity,
  ArrowRight,
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
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState<string>('28');
  const [weight, setWeight] = useState<string>('68');
  const [height, setHeight] = useState<string>('170');
  const [activity, setActivity] = useState<number>(1.375); // Lightly Active default
  const [goal, setGoal] = useState<'maintain' | 'loss' | 'gain'>('maintain');

  // Error & Result state
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [hasCalculated, setHasCalculated] = useState<boolean>(false);
  const [calculatedBMR, setCalculatedBMR] = useState<number>(0);
  const [calculatedTDEE, setCalculatedTDEE] = useState<number>(0);
  const [targetCalories, setTargetCalories] = useState<number>(0);

  const activityOptions = [
    { factor: 1.2, label: 'Sedentary', desc: 'Banyak duduk di meja kantor, jarang berolahraga' },
    { factor: 1.375, label: 'Lightly Active', desc: 'Olahraga ringan 1 sampai 3 hari per minggu' },
    { factor: 1.55, label: 'Moderately Active', desc: 'Olahraga sedang 3 sampai 5 hari per minggu' },
    { factor: 1.725, label: 'Very Active', desc: 'Olahraga intens 6 sampai 7 hari per minggu' },
    { factor: 1.9, label: 'Extra Active', desc: 'Pekerjaan fisik berat atau atlet latihan 2x sehari' },
  ];

  const goalOptions = [
    { id: 'maintain', label: 'Menjaga Berat Badan', desc: 'Mempertahankan komposisi tubuh dan energi stabil' },
    { id: 'loss', label: 'Menurunkan Berat Badan', desc: 'Defisit moderat yang aman (~350 sampai 400 kcal di bawah TDEE)' },
    { id: 'gain', label: 'Mendukung Peningkatan Berat', desc: 'Surplus teratur (~350 kcal di atas TDEE untuk massa otot)' },
  ];

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const numAge = parseInt(age, 10);
    const numWeight = parseFloat(weight);
    const numHeight = parseFloat(height);

    if (isNaN(numAge) || isNaN(numWeight) || isNaN(numHeight)) {
      setErrorMsg('Harap lengkapi seluruh kolom usia, berat badan, dan tinggi badan dengan angka valid.');
      return;
    }

    if (numAge <= 0 || numWeight <= 0 || numHeight <= 0) {
      setErrorMsg('Usia, berat badan, dan tinggi badan harus bernilai positif lebih dari nol.');
      return;
    }

    if (numAge < 18) {
      setErrorMsg('Kalkulator ini dirancang untuk populasi dewasa dan tidak ditujukan untuk menentukan kebutuhan kalori anak atau remaja di bawah 18 tahun.');
      return;
    }

    if (numAge > 100 || numWeight > 300 || numHeight > 250) {
      setErrorMsg('Nilai yang dimasukkan berada di luar rentang wajar penghitungan.');
      return;
    }

    // Formula Mifflin-St Jeor:
    // Pria: (10 × berat badan) + (6.25 × tinggi badan) - (5 × usia) + 5
    // Wanita: (10 × berat badan) + (6.25 × tinggi badan) - (5 × usia) - 161
    let bmr = 0;
    if (gender === 'male') {
      bmr = 10 * numWeight + 6.25 * numHeight - 5 * numAge + 5;
    } else {
      bmr = 10 * numWeight + 6.25 * numHeight - 5 * numAge - 161;
    }

    const tdee = bmr * activity;

    let target = tdee;
    if (goal === 'loss') {
      target = Math.max(1200, tdee - 400); // Defisit moderat yang aman
    } else if (goal === 'gain') {
      target = tdee + 350; // Surplus sehat
    }

    setCalculatedBMR(Math.round(bmr));
    setCalculatedTDEE(Math.round(tdee));
    setTargetCalories(Math.round(target));
    setHasCalculated(true);
  };

  const handleReset = () => {
    setAge('28');
    setWeight('68');
    setHeight('170');
    setActivity(1.375);
    setGoal('maintain');
    setErrorMsg(null);
    setHasCalculated(false);
  };

  // Meal Box recommendation mapping based on goal
  const getRecommendation = () => {
    if (goal === 'loss') {
      return {
        boxName: 'Lean Box',
        category: 'lean' as MealCategory,
        range: '350 sampai 450 kcal',
        desc: 'Pilihan porsi kalori terukur dengan protein rendah lemak dan sayuran kaya serat, ideal menjadi makan siang saat menjalani defisit kalori terencana.',
      };
    }
    if (goal === 'gain' || activity >= 1.725) {
      return {
        boxName: 'Power Protein Box atau Active Meal Box',
        category: 'protein' as MealCategory,
        range: '500 sampai 650 kcal',
        desc: 'Kaya protein (35 sampai 45 gram) untuk pemulihan dan sintesis otot, atau Active Meal Box untuk mencukupi target kalori harian yang lebih tinggi.',
      };
    }
    return {
      boxName: 'Daily Balance Box',
      category: 'balance' as MealCategory,
      range: '450 sampai 550 kcal',
      desc: 'Komposisi nutrisi seimbang antara protein berkualitas, karbohidrat kompleks, dan mikronutrien sayuran untuk menjaga berat badan dan energi kerja stabil.',
    };
  };

  const recommendation = getRecommendation();

  return (
    <div className="pt-28 pb-20 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 text-left">
          <span className="text-xs font-semibold text-leaf mb-2 block">
            Edukasi kebutuhan energi
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-forest tracking-tight">
            Understand your daily energy needs.
          </h1>
          <p className="mt-3 text-base sm:text-lg text-ink-muted leading-relaxed">
            Ketahui estimasi kebutuhan kalori harianmu berdasarkan rumus standar ilmiah Mifflin-St Jeor dan temukan kategori meal box yang dapat menjadi referensi ideal untuk rutinitas makan siangmu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Input Form Column (7 Cols) */}
          <div className="lg:col-span-7 bg-paper-elevated border border-rule rounded-3xl p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2 pb-4 mb-6 border-b border-rule-subtle">
              <Calculator className="w-5 h-5 text-leaf" />
              <h2 className="font-display font-bold text-lg text-forest">
                Formulir parameter fisik dan aktivitas
              </h2>
            </div>

            <form onSubmit={handleCalculate} className="space-y-6">
              {/* Gender */}
              <div>
                <label className="block text-xs font-bold text-forest mb-2">
                  Jenis kelamin biologis:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setGender('male')}
                    className={`py-3 px-4 rounded-xl border text-xs sm:text-sm font-semibold transition-colors active:scale-[0.99] disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
                      gender === 'male'
                        ? 'bg-forest text-white border-forest shadow-xs'
                        : 'bg-paper-2 border-rule text-ink hover:bg-mint'
                    }`}
                  >
                    Pria
                  </button>
                  <button
                    type="button"
                    onClick={() => setGender('female')}
                    className={`py-3 px-4 rounded-xl border text-xs sm:text-sm font-semibold transition-colors active:scale-[0.99] disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
                      gender === 'female'
                        ? 'bg-forest text-white border-forest shadow-xs'
                        : 'bg-paper-2 border-rule text-ink hover:bg-mint'
                    }`}
                  >
                    Wanita
                  </button>
                </div>
              </div>

              {/* Age, Weight, Height */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="calc-age" className="block text-xs font-semibold text-forest mb-1.5">
                    Usia (Tahun):
                  </label>
                  <input
                    id="calc-age"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    min="18"
                    max="100"
                    placeholder="28"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-rule bg-paper-elevated text-xs text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="calc-weight" className="block text-xs font-semibold text-forest mb-1.5">
                    Berat Badan (kg):
                  </label>
                  <input
                    id="calc-weight"
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    min="30"
                    max="250"
                    step="0.5"
                    placeholder="68"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-rule bg-paper-elevated text-xs text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="calc-height" className="block text-xs font-semibold text-forest mb-1.5">
                    Tinggi Badan (cm):
                  </label>
                  <input
                    id="calc-height"
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    min="100"
                    max="230"
                    placeholder="170"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-rule bg-paper-elevated text-xs text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                    required
                  />
                </div>
              </div>

              {/* Activity Level */}
              <div>
                <label className="block text-xs font-bold text-forest mb-2">
                  Tingkat aktivitas fisik sehari-hari:
                </label>
                <div className="space-y-2">
                  {activityOptions.map((opt) => (
                    <label
                      key={opt.factor}
                      className={`flex items-start gap-3 p-3 rounded-2xl border cursor-pointer transition-colors ${
                        activity === opt.factor
                          ? 'bg-mint border-forest text-forest'
                          : 'bg-paper-2 border-rule text-ink hover:bg-paper-3'
                      }`}
                    >
                      <input
                        type="radio"
                        name="activity"
                        checked={activity === opt.factor}
                        onChange={() => setActivity(opt.factor)}
                        className="mt-1 text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                      />
                      <div>
                        <span className="font-display font-bold text-xs sm:text-sm block">
                          {opt.label} ({opt.factor}x)
                        </span>
                        <span className="text-[11px] text-ink-muted block">
                          {opt.desc}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Goal */}
              <div>
                <label className="block text-xs font-bold text-forest mb-2">
                  Tujuan pola makan (goal):
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {goalOptions.map((g) => (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => setGoal(g.id as any)}
                      className={`p-3 rounded-xl border text-left transition-colors active:scale-[0.99] disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
                        goal === g.id
                          ? 'bg-forest text-white border-forest'
                          : 'bg-paper-2 border-rule text-ink hover:bg-mint'
                      }`}
                    >
                      <span className="font-display font-bold text-xs block">
                        {g.label}
                      </span>
                      <span className={`text-[10px] block mt-0.5 ${
                        goal === g.id ? 'text-sage' : 'text-ink-muted'
                      }`}>
                        {g.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

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
                  className="flex-1 py-3 px-4 rounded-xl bg-forest hover:bg-forest/90 active:scale-[0.99] disabled:opacity-50 text-white font-semibold text-xs sm:text-sm shadow-xs transition-colors text-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf"
                >
                  <span>Hitung estimasi kalori harian</span>
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="p-3 rounded-xl border border-rule text-ink-muted hover:text-forest hover:bg-paper-2 active:scale-[0.99] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                  title="Hitung Ulang / Reset"
                  aria-label="Hitung ulang atau reset formulir"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              <div className="text-[11px] text-ink-muted flex items-center gap-1.5 pt-1">
                <ShieldAlert className="w-3.5 h-3.5 text-leaf" />
                <span>Privasi aman: kalkulasi berjalan di browser Anda tanpa penyimpanan data pribadi.</span>
              </div>
            </form>
          </div>

          {/* Result Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {hasCalculated ? (
              <div className="bg-forest text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 motion-safe:animate-fadeIn">
                <div className="pb-4 border-b border-rule-subtle">
                  <span className="text-[10px] font-semibold text-citrus block">
                    Hasil analisis kebutuhan energi
                  </span>
                  <h3 className="font-display font-bold text-xl text-white mt-1">
                    Estimasi Kalori Harian
                  </h3>
                  <p className="text-xs text-sage">
                    Berdasarkan formula Mifflin-St Jeor
                  </p>
                </div>

                {/* Main Calorie Numbers */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl bg-paper-elevated/10 border border-white/20">
                    <span className="text-[11px] text-sage block">BMR (Metabolisme Dasar)</span>
                    <span className="font-display font-black text-2xl sm:text-3xl text-white mt-0.5 block">
                      {calculatedBMR}
                    </span>
                    <span className="text-[10px] text-sage">kcal / hari</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-paper-elevated/10 border border-white/20">
                    <span className="text-[11px] text-sage block">TDEE (Aktivitas Harian)</span>
                    <span className="font-display font-black text-2xl sm:text-3xl text-white mt-0.5 block">
                      {calculatedTDEE}
                    </span>
                    <span className="text-[10px] text-sage">kcal / hari</span>
                  </div>
                </div>

                {/* Target Calories for Selected Goal */}
                <div className="p-5 rounded-2xl bg-leaf/20 border border-leaf/40">
                  <span className="text-xs font-semibold text-citrus block">
                    Target Estimasi Kalori ({goalOptions.find((g) => g.id === goal)?.label}):
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-display font-extrabold text-4xl text-white">
                      {targetCalories}
                    </span>
                    <span className="text-sm font-semibold text-sage">kcal / hari</span>
                  </div>
                  <p className="text-[11px] text-sage mt-1.5 leading-relaxed">
                    {goal === 'loss' && 'Disusun dengan defisit moderat (~400 kcal) untuk menjaga rasa kenyang dan kesehatan tanpa penurunan energi ekstrem.'}
                    {goal === 'maintain' && 'Target seimbang untuk mempertahankan berat badan saat beraktivitas kerja harian.'}
                    {goal === 'gain' && 'Surplus terukur untuk mendukung pembentukan massa otot dan stamina olahraga intensif.'}
                  </p>
                </div>

                {/* Meal Box Recommendation */}
                <div className="p-5 rounded-2xl bg-paper-elevated text-ink shadow-xs space-y-2.5">
                  <span className="text-[10px] font-semibold text-leaf block">
                    Rekomendasi kategori NutriBox Daily:
                  </span>
                  <h4 className="font-display font-bold text-lg text-forest">
                    {recommendation.boxName} ({recommendation.range})
                  </h4>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    {recommendation.desc}
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => onNavigate('catalog')}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-forest hover:text-leaf active:scale-[0.99] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                    >
                      <span className="whitespace-nowrap">Lihat menu {recommendation.boxName}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Consultation WhatsApp CTA */}
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => {
                      const goalLabel = goalOptions.find((g) => g.id === goal)?.label;
                      const msg = `Halo NutriBox Daily, saya telah menghitung estimasi kalori harian saya:

Hasil Estimasi Target: ${targetCalories} kcal/hari (TDEE: ${calculatedTDEE} kcal)
Tujuan: ${goalLabel}
Rekomendasi Kategori: ${recommendation.boxName}

Saya ingin berkonsultasi mengenai paket katering yang cocok untuk pola makan saya. Terima kasih.`;
                      onOpenWhatsApp(msg);
                    }}
                    className="w-full py-3.5 px-4 rounded-xl bg-leaf hover:bg-leaf/90 active:scale-[0.99] disabled:opacity-50 text-forest font-bold text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-citrus"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Konsultasikan via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full py-2 text-xs text-sage hover:text-white transition-colors text-center active:scale-[0.99] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
                  >
                    <span>Hitung ulang dengan data lain</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-paper-elevated border border-rule-subtle rounded-3xl p-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-paper-2 text-leaf flex items-center justify-center mx-auto">
                  <Activity className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-lg text-forest">
                  Menunggu pengisian formulir
                </h3>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Isi parameter fisik dan tingkat aktivitas di sebelah kiri, lalu tekan tombol “Hitung estimasi kalori harian” untuk melihat rincian BMR, TDEE, dan rekomendasi meal box.
                </p>
                <div className="p-3.5 rounded-xl bg-paper-2 text-[11px] text-ink-muted text-left space-y-1">
                  <span className="font-semibold text-forest block">Mengapa menggunakan formula Mifflin-St Jeor?</span>
                  <p>
                    Formula ini dianggap sebagai salah satu standar prediksi pengeluaran energi basal yang paling konsisten dalam literatur nutrisi klinis kontemporer.
                  </p>
                </div>
              </div>
            )}

            {/* Mandatory Medical / Nutrition Disclaimer as in Section 10 */}
            <div className="p-4 rounded-2xl bg-paper-elevated border border-rule-subtle text-xs text-ink-muted space-y-2">
              <div className="flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Pernyataan batasan edukasi:</strong> Hasil kalkulator merupakan estimasi umum berdasarkan informasi yang dimasukkan. Kebutuhan energi aktual dapat berbeda berdasarkan kondisi kesehatan, komposisi tubuh, aktivitas, dan faktor individual lainnya. Hasil ini bukan diagnosis atau rekomendasi medis. Satu porsi makan siang NutriBox Daily tidak ditujukan untuk memenuhi seluruh kebutuhan kalori harian.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
