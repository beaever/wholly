'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global Error:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center bg-bg px-6">
          <div className="max-w-md text-center">
            <h2 className="mb-4 text-2xl font-bold text-primary">
              심각한 오류가 발생했습니다
            </h2>
            <p className="mb-6 text-text-secondary">
              앱을 다시 시작해주세요.
            </p>
            <button
              onClick={reset}
              className="rounded-lg bg-accent px-6 py-3 font-semibold text-white hover:bg-accent/90"
            >
              앱 재시작
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
