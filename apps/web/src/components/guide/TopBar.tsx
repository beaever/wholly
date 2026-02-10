'use client';

import { useRouter } from 'next/navigation';

interface TopBarProps {
  title?: string;
}

export function TopBar({ title = '가이드 상세' }: TopBarProps) {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-10 flex items-center border-b border-border-light bg-surface px-5 py-5">
      <button
        onClick={() => router.back()}
        className="mr-4 text-xl"
        aria-label="뒤로가기"
      >
        ←
      </button>
      <h1 className="text-base font-bold text-primary">{title}</h1>
    </header>
  );
}
