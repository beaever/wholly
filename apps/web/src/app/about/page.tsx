'use client';

import { useRouter } from 'next/navigation';

export default function AboutPage() {
  const router = useRouter();

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
        <h1 className="flex-1 text-lg font-bold text-primary">앱 정보</h1>
      </header>

      <div className="mx-auto max-w-[600px] px-6 py-6">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-black italic tracking-tight text-primary">
            WHOOLY
          </h1>
          <p className="text-sm text-text-secondary">Version 1.0.0</p>
        </div>

        <div className="mb-8 rounded-2xl bg-surface p-6">
          <h2 className="mb-3 text-lg font-bold text-primary">
            워킹홀리데이의 모든 것
          </h2>
          <p className="text-sm leading-relaxed text-text-secondary">
            WHOOLY는 워킹홀리데이를 준비하는 분들을 위한 올인원 가이드 앱입니다.
            비자 신청부터 현지 정착까지, 단계별 체크리스트와 AI 기반 맞춤 추천으로
            완벽한 워홀 준비를 도와드립니다.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl bg-surface p-4">
            <h3 className="mb-2 text-sm font-bold text-primary">주요 기능</h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>• 단계별 워홀 준비 로드맵</li>
              <li>• 실시간 환율 정보</li>
              <li>• AI 맞춤형 짐싸기 체크리스트</li>
              <li>• 현지 트렌드 & 플레이스 정보</li>
              <li>• 상세 가이드 및 팁</li>
            </ul>
          </div>

          <div className="rounded-xl bg-surface p-4">
            <h3 className="mb-2 text-sm font-bold text-primary">기술 스택</h3>
            <ul className="space-y-1 text-sm text-text-secondary">
              <li>• Next.js 15 + React 19</li>
              <li>• Supabase (Backend)</li>
              <li>• Google AI Studio (Gemini)</li>
              <li>• Frankfurter API (환율)</li>
            </ul>
          </div>

          <div className="rounded-xl bg-surface p-4">
            <h3 className="mb-2 text-sm font-bold text-primary">개발팀</h3>
            <p className="text-sm text-text-secondary">
              WHOOLY Team © 2024
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
