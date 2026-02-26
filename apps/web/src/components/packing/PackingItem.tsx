'use client';

import { cn } from '@wholly/ui-web';

interface PackingItemProps {
  id: string;
  category: string;
  name: string;
  reason: string;
  isRequired: boolean;
  isAIGenerated: boolean;
  isChecked: boolean;
  onToggle: (id: string) => void;
}

export function PackingItem({
  id,
  category,
  name,
  reason,
  isRequired,
  isAIGenerated,
  isChecked,
  onToggle,
}: PackingItemProps) {
  return (
    <div
      className={cn(
        'flex items-start gap-3 rounded-xl border p-4 transition-colors',
        isChecked
          ? 'border-accent/30 bg-accent/5'
          : 'border-border bg-surface'
      )}
    >
      <button
        onClick={() => onToggle(id)}
        className={cn(
          'mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-2 transition-colors',
          isChecked
            ? 'border-accent bg-accent'
            : 'border-border bg-surface'
        )}
      >
        {isChecked && (
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="text-[#0F172A]"
          >
            <path
              d="M2 6L5 9L10 3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      <div className="flex-1">
        <div className="mb-1 flex items-center gap-2">
          <h3
            className={cn(
              'text-sm font-semibold',
              isChecked ? 'text-text-secondary line-through' : 'text-primary'
            )}
          >
            {name}
          </h3>
          {isRequired && (
            <span className="rounded bg-red-100 px-1.5 py-0.5 text-[10px] font-bold text-red-600 dark:bg-red-900/30 dark:text-red-400">
              필수
            </span>
          )}
          {isAIGenerated && (
            <span className="rounded bg-accent/20 px-1.5 py-0.5 text-[10px] font-bold text-accent dark:bg-accent/30">
              AI
            </span>
          )}
        </div>
        <p className="mb-1 text-xs text-text-muted">{category}</p>
        <p className="text-xs leading-relaxed text-text-secondary">{reason}</p>
      </div>
    </div>
  );
}
