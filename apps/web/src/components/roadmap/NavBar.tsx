'use client';

import Link from 'next/link';
import { cn } from '@wholly/ui-web';

interface NavItemProps {
  icon: string;
  label: string;
  href: string;
  active?: boolean;
}

function NavItem({ icon, label, href, active }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        'flex flex-col items-center',
        active ? 'text-[#0F172A] opacity-100' : 'opacity-40'
      )}
    >
      <span className="mb-1 text-xl">{icon}</span>
      <span className="text-[10px] font-semibold">{label}</span>
    </Link>
  );
}

export function NavBar() {
  return (
    <nav className="fixed bottom-5 left-5 right-5 z-[100] mx-auto flex max-w-[360px] justify-between rounded-3xl border border-white/50 bg-white/90 px-[30px] py-4 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] backdrop-blur-[10px]">
      <NavItem icon="🏠" label="홈" href="/" />
      <NavItem icon="🗺️" label="로드맵" href="/roadmap" active />
      <NavItem icon="✨" label="플레이스" href="/places" />
      <NavItem icon="👤" label="MY" href="/my" />
    </nav>
  );
}
