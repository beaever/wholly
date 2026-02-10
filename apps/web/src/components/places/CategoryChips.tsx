'use client';

import { cn } from '@wholly/ui-web';

interface CategoryChipsProps {
  categories: string[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export function CategoryChips({ categories, activeIndex, onSelect }: CategoryChipsProps) {
  return (
    <div className="flex gap-2.5 overflow-x-auto px-6 pb-5 scrollbar-hide">
      {categories.map((category, index) => (
        <button
          key={category}
          onClick={() => onSelect(index)}
          className={cn(
            'whitespace-nowrap rounded-full border px-4 py-2 text-[13px] font-semibold transition-colors',
            index === activeIndex
              ? 'border-primary bg-primary text-white dark:text-[#0F172A]'
              : 'border-border bg-surface text-text-secondary hover:border-primary/50'
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
