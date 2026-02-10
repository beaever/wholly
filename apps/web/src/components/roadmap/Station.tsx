'use client';

import Link from 'next/link';
import { cn } from '@wholly/ui-web';

export type StationStatus = 'done' | 'current' | 'locked';

interface StationProps {
  status: StationStatus;
  title: string;
  description?: string;
  tag?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function Station({
  status,
  title,
  description,
  tag,
  buttonText,
  buttonHref,
}: StationProps) {
  return (
    <div className='relative z-[1] flex gap-5'>
      {/* Node */}
      <div
        className={cn(
          'z-[2] flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border-4 text-sm text-white transition-all duration-300',
          status === 'done' &&
            'border-[#0F172A] bg-[#0F172A] dark:border-primary dark:bg-primary dark:text-[#0F172A]',
          status === 'current' &&
            'scale-110 border-accent bg-[#0F172A] shadow-[0_0_0_4px_rgba(0,220,130,0.3)] dark:bg-surface',
          status === 'locked' &&
            'border-border bg-border-light text-text-muted',
        )}
      >
        {status === 'done' && '✔'}
        {status === 'current' && '🚀'}
        {status === 'locked' && '🔒'}
      </div>

      {/* Card */}
      <div
        className={cn(
          'relative flex-1 rounded-[18px] border bg-surface p-[18px] shadow-[0_4px_15px_rgba(0,0,0,0.03)] transition-all duration-300',
          status === 'done' && 'border-surface opacity-60',
          status === 'current' &&
            'translate-x-[5px] border-2 border-accent shadow-[0_10px_25px_rgba(0,220,130,0.15)]',
          status === 'locked' &&
            'border border-dashed border-border bg-bg text-text-muted',
        )}
      >
        {/* Arrow */}
        <div
          className={cn(
            'absolute left-[-6px] top-[18px] h-3 w-3 rotate-45 bg-surface',
            status === 'current' &&
              'border-b-2 border-l-2 border-accent bg-surface',
          )}
        />

        {/* Tag */}
        {tag && (
          <span className='mb-[6px] inline-block rounded-full bg-accent px-2 py-[3px] text-[10px] font-bold text-[#0F172A]'>
            {tag}
          </span>
        )}

        {/* Title */}
        <h3
          className={cn(
            'mb-1 text-base font-bold text-primary',
            status === 'done' && 'line-through',
            status === 'locked' && 'text-text-muted',
          )}
        >
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className='whitespace-pre-line text-[13px] leading-[1.4] text-text-secondary'>
            {description}
          </p>
        )}

        {/* Button */}
        {buttonText && buttonHref && status === 'current' && (
          <Link
            href={buttonHref}
            className='mt-3 block rounded-[10px] bg-[#0F172A] px-4 py-[10px] text-center text-xs font-bold text-white dark:bg-accent dark:text-[#0F172A]'
          >
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  );
}
