'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg px-6">
      <div className="max-w-md text-center">
        <h2 className="mb-4 text-2xl font-bold text-primary">
          문제가 발생했습니다
        </h2>
        <p className="mb-6 text-text-secondary">
          일시적인 오류가 발생했습니다. 다시 시도해주세요.
        </p>
        <button
          onClick={reset}
          className="rounded-lg bg-accent px-6 py-3 font-semibold text-white hover:bg-accent/90"
        >
          다시 시도
        </button>
      </div>
    </div>
  );
}
