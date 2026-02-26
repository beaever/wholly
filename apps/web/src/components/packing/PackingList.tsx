'use client';

import { PackingItem } from './PackingItem';
import type { PackingItem as PackingItemType } from '@/lib/api/gemini';

interface PackingListProps {
  items: PackingItemType[];
  checkedItems: Set<string>;
  onToggle: (id: string) => void;
}

export function PackingList({ items, checkedItems, onToggle }: PackingListProps) {
  const essentialItems = items.filter((item) => !item.isAIGenerated);
  const aiItems = items.filter((item) => item.isAIGenerated);

  const completedCount = items.filter((item) => checkedItems.has(item.id)).length;
  const progress = Math.round((completedCount / items.length) * 100);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-surface p-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-semibold text-primary">진행률</span>
          <span className="text-sm font-bold text-accent">
            {completedCount}/{items.length}
          </span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-border">
          <div
            className="h-full rounded-full bg-accent transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {essentialItems.length > 0 && (
        <div>
          <h2 className="mb-3 text-sm font-bold text-primary">
            📋 필수 준비물
          </h2>
          <div className="space-y-2">
            {essentialItems.map((item) => (
              <PackingItem
                key={item.id}
                {...item}
                isChecked={checkedItems.has(item.id)}
                onToggle={onToggle}
              />
            ))}
          </div>
        </div>
      )}

      {aiItems.length > 0 && (
        <div>
          <h2 className="mb-3 text-sm font-bold text-primary">
            ✨ AI 맞춤 추천
          </h2>
          <div className="space-y-2">
            {aiItems.map((item) => (
              <PackingItem
                key={item.id}
                {...item}
                isChecked={checkedItems.has(item.id)}
                onToggle={onToggle}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
