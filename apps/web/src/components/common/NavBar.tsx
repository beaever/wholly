'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@wholly/ui-web';

interface NavItemProps {
  icon: string;
  label: string;
  href: string;
  isActive: boolean;
}

function NavItem({ icon, label, href, isActive }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        'flex flex-col items-center transition-all duration-300',
        isActive ? 'text-primary opacity-100 -translate-y-0.5' : 'opacity-40'
      )}
    >
      <span className="mb-1 text-xl">{icon}</span>
      <span className="text-[10px] font-semibold">{label}</span>
    </Link>
  );
}

const NAV_ITEMS = [
  { icon: '🏠', label: '홈', href: '/' },
  { icon: '🗺️', label: '로드맵', href: '/roadmap' },
  { icon: '✨', label: '플레이스', href: '/places' },
  { icon: '👤', label: 'MY', href: '/my' },
];

export function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-5 left-5 right-5 z-[100] mx-auto flex max-w-[360px] justify-between rounded-3xl border border-white/50 bg-surface/90 px-[30px] py-4 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] backdrop-blur-[10px] dark:border-border/50 dark:bg-surface/90">
      {NAV_ITEMS.map((item) => (
        <NavItem
          key={item.href}
          icon={item.icon}
          label={item.label}
          href={item.href}
          isActive={pathname === item.href}
        />
      ))}
    </nav>
  );
}
