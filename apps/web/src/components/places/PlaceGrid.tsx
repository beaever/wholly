'use client';

import { PlaceCard } from './PlaceCard';

interface Place {
  id: string;
  imageUrl: string;
  badge: string;
  title: string;
  location: string;
}

interface PlaceGridProps {
  places: Place[];
}

export function PlaceGrid({ places }: PlaceGridProps) {
  return (
    <div className="columns-2 gap-4 px-5">
      {places.map((place) => (
        <PlaceCard
          key={place.id}
          id={place.id}
          imageUrl={place.imageUrl}
          badge={place.badge}
          title={place.title}
          location={place.location}
        />
      ))}
    </div>
  );
}
