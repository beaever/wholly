import { notFound } from 'next/navigation';
import { getStepById } from '@/lib/api/supabase/steps';
import { getChecklistByStepId } from '@/lib/api/supabase/checklist';
import { StepDetail } from '@/components/StepDetail';

interface StepPageProps {
  params: Promise<{ id: string }>;
}

export default async function StepPage({ params }: StepPageProps) {
  const { id } = await params;
  const step = await getStepById(id);

  if (!step) {
    notFound();
  }

  const checklist = await getChecklistByStepId(id);

  return (
    <main className='mx-auto max-w-lg px-4 py-6'>
      <StepDetail step={step} checklist={checklist} />
    </main>
  );
}
