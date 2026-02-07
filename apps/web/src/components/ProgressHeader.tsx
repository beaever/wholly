'use client';

import { Progress } from '@wholly/ui-web';
import { useProgressStore } from '@/lib/store';

export function ProgressHeader() {
  const getTotalProgress = useProgressStore((state) => state.getTotalProgress);
  const isLoaded = useProgressStore((state) => state.isLoaded);

  if (!isLoaded) {
    return (
      <div className="rounded-xl bg-white p-4 shadow-sm">
        <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
        <div className="mt-2 h-2 w-full animate-pulse rounded-full bg-gray-200" />
      </div>
    );
  }

  const progress = getTotalProgress();

  return (
    <div className="rounded-xl bg-white p-4 shadow-sm">
      <Progress value={progress} showLabel />
    </div>
  );
}
