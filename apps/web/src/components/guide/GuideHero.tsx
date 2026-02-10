'use client';

import Image from 'next/image';

interface GuideHeroProps {
  imageUrl: string;
  step: string;
  title: string;
}

export function GuideHero({ imageUrl, step, title }: GuideHeroProps) {
  return (
    <div className="relative h-[200px] w-full">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
        <span className="inline-block rounded bg-accent px-2 py-0.5 text-[11px] font-bold text-[#0F172A]">
          {step}
        </span>
        <h1 className="mt-2 text-2xl font-extrabold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
          {title}
        </h1>
      </div>
    </div>
  );
}
