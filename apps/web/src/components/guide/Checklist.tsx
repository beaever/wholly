'use client';

import { useState } from 'react';
import { cn } from '@wholly/ui-web';

interface ChecklistItem {
  id: string;
  text: string;
  checked?: boolean;
}

interface ChecklistProps {
  items: ChecklistItem[];
  onToggle?: (id: string, checked: boolean) => void;
}

export function Checklist({ items, onToggle }: ChecklistProps) {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(
    items.reduce((acc, item) => ({ ...acc, [item.id]: item.checked || false }), {})
  );

  const handleToggle = (id: string) => {
    const newChecked = !checkedItems[id];
    setCheckedItems((prev) => ({ ...prev, [id]: newChecked }));
    onToggle?.(id, newChecked);
  };

  return (
    <div className="rounded-2xl border border-border bg-border-light p-5">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => handleToggle(item.id)}
          className="mb-3 flex w-full items-start text-left last:mb-0"
        >
          <div
            className={cn(
              'relative mr-3 mt-0.5 h-5 w-5 flex-shrink-0 rounded-md border-2 transition-colors',
              checkedItems[item.id]
                ? 'border-primary bg-primary'
                : 'border-border bg-surface'
            )}
          >
            {checkedItems[item.id] && (
              <span className="absolute left-0.5 top-[-2px] text-sm text-white">✔</span>
            )}
          </div>
          <span
            className={cn(
              'text-[15px] font-medium transition-colors',
              checkedItems[item.id] ? 'text-text-muted line-through' : 'text-text'
            )}
          >
            {item.text}
          </span>
        </button>
      ))}
    </div>
  );
}
