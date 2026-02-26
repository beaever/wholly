'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SupportPage() {
  const router = useRouter();

  const faqs = [
    {
      question: '비자 신청은 어떻게 하나요?',
      answer: '로드맵의 비자 신청 단계를 참고하세요.',
    },
    {
      question: '환율 정보는 얼마나 자주 업데이트되나요?',
      answer: '페이지 진입 시마다 최신 환율을 가져옵니다.',
    },
    {
      question: '짐싸기 리스트는 어떻게 생성되나요?',
      answer: 'AI가 목적지, 시기, 목적을 분석하여 맞춤형 리스트를 생성합니다.',
    },
  ];

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
        <h1 className="flex-1 text-lg font-bold text-primary">고객센터</h1>
      </header>

      <div className="mx-auto max-w-[600px] px-6 py-6">
        <div className="mb-8">
          <h2 className="mb-2 text-xl font-bold text-primary">
            무엇을 도와드릴까요? 🤝
          </h2>
          <p className="text-sm text-text-secondary">
            자주 묻는 질문을 확인하거나 직접 문의하세요.
          </p>
        </div>

        <div className="mb-8 grid grid-cols-2 gap-3">
          <Link
            href="mailto:support@wholly.com"
            className="flex flex-col items-center justify-center rounded-2xl bg-surface p-6 transition-transform active:scale-[0.98]"
          >
            <span className="mb-2 text-3xl">📧</span>
            <span className="text-sm font-semibold text-primary">이메일</span>
          </Link>
          <Link
            href="https://pf.kakao.com"
            className="flex flex-col items-center justify-center rounded-2xl bg-surface p-6 transition-transform active:scale-[0.98]"
          >
            <span className="mb-2 text-3xl">💬</span>
            <span className="text-sm font-semibold text-primary">카카오톡</span>
          </Link>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold text-primary">
            자주 묻는 질문
          </h3>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-xl bg-surface p-4"
              >
                <summary className="cursor-pointer text-sm font-semibold text-primary">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
