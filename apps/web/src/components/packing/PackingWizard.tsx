'use client';

import { useState } from 'react';

interface PackingWizardProps {
  onSubmit: (data: {
    destination: string;
    departureMonth: string;
    purpose: string;
  }) => void;
  loading: boolean;
}

export function PackingWizard({ onSubmit, loading }: PackingWizardProps) {
  const [destination, setDestination] = useState('');
  const [departureMonth, setDepartureMonth] = useState('');
  const [purpose, setPurpose] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ destination, departureMonth, purpose });
  };

  const destinations = [
    '시드니 (Sydney)',
    '멜버른 (Melbourne)',
    '브리즈번 (Brisbane)',
    '퍼스 (Perth)',
    '애들레이드 (Adelaide)',
  ];

  const months = [
    '1월', '2월', '3월', '4월', '5월', '6월',
    '7월', '8월', '9월', '10월', '11월', '12월',
  ];

  const purposes = [
    '도시 생활 위주',
    '농장 일 (Farm work)',
    '여행 위주',
    '레스토랑/카페 일',
    '혼합',
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="mb-2 block text-sm font-semibold text-primary">
          어디로 가시나요? 🌏
        </label>
        <select
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-primary focus:border-accent focus:outline-none"
          required
        >
          <option value="">도시를 선택하세요</option>
          {destinations.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-primary">
          언제 출발하시나요? 📅
        </label>
        <select
          value={departureMonth}
          onChange={(e) => setDepartureMonth(e.target.value)}
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-primary focus:border-accent focus:outline-none"
          required
        >
          <option value="">출발 월을 선택하세요</option>
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-primary">
          주요 목적은 무엇인가요? 🎯
        </label>
        <select
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-primary focus:border-accent focus:outline-none"
          required
        >
          <option value="">목적을 선택하세요</option>
          {purposes.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-accent py-4 text-sm font-bold text-[#0F172A] transition-transform active:scale-[0.98] disabled:opacity-50"
      >
        {loading ? 'AI가 분석 중...' : '맞춤 짐싸기 리스트 생성하기 ✨'}
      </button>
    </form>
  );
}
