'use client';

import Link from 'next/link';
import { ThemeToggle } from '@/components/common';

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-5">
      <Link href="/" className="text-xl font-black italic tracking-tight text-primary">
        HOLA
      </Link>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <Link
          href="/my"
          className="h-9 w-9 overflow-hidden rounded-xl bg-border"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100)',
            backgroundSize: 'cover',
          }}
        />
      </div>
    </header>
  );
}
