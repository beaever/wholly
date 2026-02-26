'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@wholly/ui-web';

export default function NotificationsPage() {
  const router = useRouter();
  const [pushEnabled, setPushEnabled] = useState(true);
  const [stepReminders, setStepReminders] = useState(true);
  const [placeUpdates, setPlaceUpdates] = useState(false);
  const [promotions, setPromotions] = useState(true);

  return (
    <main className="min-h-screen bg-bg pb-[100px]">
      <header className="sticky top-0 z-10 flex items-center gap-3 border-b border-border bg-surface/90 px-6 py-4 backdrop-blur-sm">
        <button
          onClick={() => router.back()}
          className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-accent/10"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="text-primary"
          >
            <path
              d="M12.5 15L7.5 10L12.5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h1 className="flex-1 text-lg font-bold text-primary">알림 설정</h1>
      </header>

      <div className="mx-auto max-w-[600px] px-6 py-6">
        <div className="space-y-6">
          <div className="rounded-2xl bg-surface p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-primary">푸시 알림</h3>
                <p className="mt-1 text-xs text-text-secondary">
                  모든 알림을 받습니다
                </p>
              </div>
              <button
                onClick={() => setPushEnabled(!pushEnabled)}
                className={cn(
                  'relative h-8 w-14 rounded-full transition-colors',
                  pushEnabled ? 'bg-accent' : 'bg-border'
                )}
              >
                <div
                  className={cn(
                    'absolute top-1 h-6 w-6 rounded-full bg-white shadow-sm transition-transform',
                    pushEnabled ? 'translate-x-7' : 'translate-x-1'
                  )}
                />
              </button>
            </div>
          </div>

          <div>
            <h2 className="mb-3 px-1 text-xs font-semibold text-text-muted">
              알림 유형
            </h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-xl bg-surface p-4">
                <div>
                  <h3 className="text-sm font-semibold text-primary">
                    단계 리마인더
                  </h3>
                  <p className="mt-1 text-xs text-text-secondary">
                    다음 단계 알림을 받습니다
                  </p>
                </div>
                <button
                  onClick={() => setStepReminders(!stepReminders)}
                  className={cn(
                    'relative h-8 w-14 rounded-full transition-colors',
                    stepReminders ? 'bg-accent' : 'bg-border'
                  )}
                >
                  <div
                    className={cn(
                      'absolute top-1 h-6 w-6 rounded-full bg-white shadow-sm transition-transform',
                      stepReminders ? 'translate-x-7' : 'translate-x-1'
                    )}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-surface p-4">
                <div>
                  <h3 className="text-sm font-semibold text-primary">
                    플레이스 업데이트
                  </h3>
                  <p className="mt-1 text-xs text-text-secondary">
                    새로운 장소 정보를 받습니다
                  </p>
                </div>
                <button
                  onClick={() => setPlaceUpdates(!placeUpdates)}
                  className={cn(
                    'relative h-8 w-14 rounded-full transition-colors',
                    placeUpdates ? 'bg-accent' : 'bg-border'
                  )}
                >
                  <div
                    className={cn(
                      'absolute top-1 h-6 w-6 rounded-full bg-white shadow-sm transition-transform',
                      placeUpdates ? 'translate-x-7' : 'translate-x-1'
                    )}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-surface p-4">
                <div>
                  <h3 className="text-sm font-semibold text-primary">
                    프로모션 및 혜택
                  </h3>
                  <p className="mt-1 text-xs text-text-secondary">
                    특가 정보를 받습니다
                  </p>
                </div>
                <button
                  onClick={() => setPromotions(!promotions)}
                  className={cn(
                    'relative h-8 w-14 rounded-full transition-colors',
                    promotions ? 'bg-accent' : 'bg-border'
                  )}
                >
                  <div
                    className={cn(
                      'absolute top-1 h-6 w-6 rounded-full bg-white shadow-sm transition-transform',
                      promotions ? 'translate-x-7' : 'translate-x-1'
                    )}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
