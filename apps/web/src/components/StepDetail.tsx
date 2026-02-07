'use client';

import Link from 'next/link';
import type { Step, ChecklistItem } from '@wholly/types';
import { Button, Checkbox, Progress } from '@wholly/ui-web';
import { useProgressStore } from '@/lib/store';
import { triggerHaptic } from '@/lib/native';
import { ArrowLeft } from 'lucide-react';

interface StepDetailProps {
  step: Step;
  checklist: ChecklistItem[];
}

export function StepDetail({ step, checklist }: StepDetailProps) {
  const progress = useProgressStore((state) => state.progress);
  const toggleItem = useProgressStore((state) => state.toggleItem);
  const getStepProgress = useProgressStore((state) => state.getStepProgress);
  const isLoaded = useProgressStore((state) => state.isLoaded);

  const handleToggle = (itemId: string) => {
    triggerHaptic('light');
    toggleItem(step.id, itemId);
  };

  const stepProgress = progress.steps[step.id];
  const completionRate = isLoaded ? getStepProgress(step.id) : 0;

  return (
    <div>
      <header className="mb-6">
        <Link href="/">
          <Button variant="ghost" size="sm" className="mb-4 -ml-2">
            <ArrowLeft className="mr-1 h-4 w-4" />
            뒤로
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">{step.title}</h1>
        <p className="mt-1 text-sm text-gray-500">{step.description}</p>
        {isLoaded && (
          <div className="mt-4">
            <Progress value={completionRate} showLabel />
          </div>
        )}
      </header>

      <section className="rounded-xl bg-white shadow-sm">
        <div className="divide-y divide-gray-100">
          {checklist.map((item) => {
            const isCompleted = stepProgress?.completedItems.includes(item.id) ?? false;

            return (
              <Checkbox
                key={item.id}
                id={item.id}
                label={item.title}
                description={item.description}
                checked={isCompleted}
                onChange={() => handleToggle(item.id)}
              />
            );
          })}
        </div>
      </section>

      {checklist.length === 0 && (
        <div className="rounded-xl bg-white p-8 text-center shadow-sm">
          <p className="text-gray-500">체크리스트 항목이 없습니다.</p>
        </div>
      )}
    </div>
  );
}
