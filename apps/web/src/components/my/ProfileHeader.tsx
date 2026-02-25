'use client';

import Image from 'next/image';

interface ProfileHeaderProps {
  name: string;
  email: string;
  imageUrl: string;
}

export function ProfileHeader({ name, email, imageUrl }: ProfileHeaderProps) {
  return (
    <div className="flex items-center gap-4 px-6 py-6">
      <div className="relative h-20 w-20 overflow-hidden rounded-2xl bg-border">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-xl font-bold text-primary">{name}</h2>
        <p className="mt-1 text-sm text-text-secondary">{email}</p>
      </div>
    </div>
  );
}
