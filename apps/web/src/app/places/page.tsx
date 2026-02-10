'use client';

import { useState } from 'react';
import { NavBar } from '@/components/common';
import { CategoryChips, PlaceGrid } from '@/components/places';

const CATEGORIES = ['전체', '☕ 카페투어', '🏖️ 주말여행', '🥗 현지마트'];

const PLACES = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=300',
    badge: 'SYDNEY',
    title: '노트북하기 좋은 시드니 도서관 Top 3',
    location: '📍 Circular Quay',
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=300',
    badge: 'TIP',
    title: '콜스(Coles) 반값 세일 놓치지 않는 법',
    location: '🛍️ Living Info',
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=300',
    badge: 'CAFE',
    title: '멜버른 커피 골목 숨은 맛집',
    location: '📍 Melbourne CBD',
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=300',
    badge: 'TRAVEL',
    title: '스위스야 호주야? 태즈매니아 여행기',
    location: '📍 Tasmania',
  },
];

export default function PlacesPage() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <main className="min-h-screen bg-bg pb-[100px]">
      {/* Header */}
      <header className="px-6 py-5">
        <h1 className="text-[26px] font-extrabold text-primary">Trend & Place ✨</h1>
      </header>

      {/* Categories */}
      <CategoryChips
        categories={CATEGORIES}
        activeIndex={activeCategory}
        onSelect={setActiveCategory}
      />

      {/* Grid */}
      <PlaceGrid places={PLACES} />

      <NavBar />
    </main>
  );
}
