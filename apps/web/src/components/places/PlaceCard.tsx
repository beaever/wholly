'use client';

import Image from 'next/image';
import Link from 'next/link';

interface PlaceCardProps {
  id: string;
  imageUrl: string;
  badge: string;
  title: string;
  location: string;
  href?: string;
}

export function PlaceCard({ id, imageUrl, badge, title, location, href }: PlaceCardProps) {
  return (
    <Link
      href={href || `/places/${id}`}
      className="group relative mb-4 block break-inside-avoid overflow-hidden rounded-2xl bg-surface shadow-[0_4px_10px_rgba(0,0,0,0.05)]"
    >
      {/* Save Button */}
      <button
        className="absolute right-2.5 top-2.5 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black/30 text-sm text-white backdrop-blur-[4px] transition-transform hover:scale-110"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        🔖
      </button>

      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
      </div>

      {/* Info */}
      <div className="p-3">
        <span className="mb-1 inline-block rounded bg-[#EBF2FF] px-1.5 py-0.5 text-[10px] font-bold text-[#0052CC] dark:bg-[#1E3A5F] dark:text-[#60A5FA]">
          {badge}
        </span>
        <h3 className="mb-1 text-sm font-bold leading-tight text-primary">{title}</h3>
        <p className="flex items-center gap-1 text-[11px] text-text-muted">{location}</p>
      </div>
    </Link>
  );
}
