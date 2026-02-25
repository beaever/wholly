'use client';

import Link from 'next/link';
import { cn } from '@wholly/ui-web';

interface MenuItem {
  icon: string;
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: 'default' | 'danger';
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
}

export function MenuSection({ title, items }: MenuSectionProps) {
  return (
    <div className="mb-6">
      <h3 className="mb-3 px-6 text-xs font-semibold text-text-muted">{title}</h3>
      <div className="bg-surface">
        {items.map((item, index) => {
          const content = (
            <>
              <span className="text-xl">{item.icon}</span>
              <span
                className={cn(
                  'flex-1 text-[15px] font-medium',
                  item.variant === 'danger' ? 'text-red-500' : 'text-primary'
                )}
              >
                {item.label}
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="text-text-muted"
              >
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </>
          );

          const className = cn(
            'flex items-center gap-4 px-6 py-4 transition-colors active:bg-accent/5',
            index !== items.length - 1 && 'border-b border-border'
          );

          if (item.href) {
            return (
              <Link key={item.label} href={item.href} className={className}>
                {content}
              </Link>
            );
          }

          return (
            <button
              key={item.label}
              onClick={item.onClick}
              className={cn(className, 'w-full')}
            >
              {content}
            </button>
          );
        })}
      </div>
    </div>
  );
}
