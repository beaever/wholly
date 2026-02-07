import { notFound } from 'next/navigation';
import { getStepById, getChecklistByStepId } from '@wholly/core';
import { StepDetail } from '@/components/StepDetail';

interface StepPageProps {
  params: Promise<{ id: string }>;
}

export default async function StepPage({ params }: StepPageProps) {
  const { id } = await params;
  const step = getStepById(id);

  if (!step) {
    notFound();
  }

  const checklist = getChecklistByStepId(id);

  return (
    <main className="mx-auto max-w-lg px-4 py-6">
      <StepDetail step={step} checklist={checklist} />
    </main>
  );
}

export async function generateStaticParams() {
  const { WORKING_HOLIDAY_STEPS } = await import('@wholly/core');
  return WORKING_HOLIDAY_STEPS.map((step) => ({
    id: step.id,
  }));
}
