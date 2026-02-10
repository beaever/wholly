'use client';

import Link from 'next/link';

interface PromoCardProps {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

export function PromoCard({ icon, title, description, buttonText, href }: PromoCardProps) {
  return (
    <div className="my-8 flex items-center gap-4 rounded-xl border border-[#FFD700] bg-gradient-to-br from-[#FFEFBA] to-white p-4 dark:from-[#3D3A2E] dark:to-surface">
      <span className="text-2xl">{icon}</span>
      <div className="flex-1">
        <h4 className="text-sm font-bold text-[#B7791F] dark:text-[#F6E05E]">{title}</h4>
        <p className="mt-1 text-xs text-[#D69E2E] dark:text-[#ECC94B]">{description}</p>
      </div>
      <Link
        href={href}
        className="rounded-md bg-[#B7791F] px-3 py-1.5 text-[11px] font-bold text-white dark:bg-[#D69E2E]"
      >
        {buttonText}
      </Link>
    </div>
  );
}
