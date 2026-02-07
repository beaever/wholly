import { WORKING_HOLIDAY_STEPS } from '@wholly/core';
import { StepList } from '@/components/StepList';
import { ProgressHeader } from '@/components/ProgressHeader';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-lg px-4 py-6">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">WHOLLY</h1>
        <p className="mt-1 text-sm text-gray-500">
          워킹홀리데이 준비, 단계별로 완벽하게
        </p>
      </header>

      <ProgressHeader />

      <section className="mt-6">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">준비 단계</h2>
        <StepList steps={WORKING_HOLIDAY_STEPS} />
      </section>
    </main>
  );
}
