'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function ProfilePage() {
  const router = useRouter();
  const [name, setName] = useState('김워홀');
  const [email, setEmail] = useState('workingholiday@example.com');
  const [phone, setPhone] = useState('010-1234-5678');
  const [destination, setDestination] = useState('시드니');
  const [departureDate, setDepartureDate] = useState('2024-06-15');

  const handleSave = () => {
    alert('프로필이 저장되었습니다.');
    router.back();
  };

  return (
    <main className="min-h-screen bg-bg pb-[100px]">
      <header className="sticky top-0 z-10 flex items-center gap-3 border-b border-border bg-surface/90 px-6 py-4 backdrop-blur-sm">
        <button
          onClick={() => router.back()}
          className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-accent/10"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="text-primary"
          >
            <path
              d="M12.5 15L7.5 10L12.5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h1 className="flex-1 text-lg font-bold text-primary">프로필 수정</h1>
        <button
          onClick={handleSave}
          className="text-sm font-semibold text-accent"
        >
          저장
        </button>
      </header>

      <div className="mx-auto max-w-[600px] px-6 py-6">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="relative h-24 w-24 overflow-hidden rounded-full bg-border">
              <Image
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100"
                alt="프로필"
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>
            <button className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-[#0F172A] shadow-lg">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M11 2L14 5L5 14H2V11L11 2Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-semibold text-primary">
              이름
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-primary focus:border-accent focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-primary">
              이메일
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-primary focus:border-accent focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-primary">
              전화번호
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-primary focus:border-accent focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-primary">
              목적지
            </label>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-primary focus:border-accent focus:outline-none"
            >
              <option>시드니</option>
              <option>멜버른</option>
              <option>브리즈번</option>
              <option>퍼스</option>
              <option>애들레이드</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-primary">
              출발 예정일
            </label>
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-primary focus:border-accent focus:outline-none"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
