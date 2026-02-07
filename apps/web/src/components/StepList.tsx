'use client';

import Link from 'next/link';
import type { Step } from '@wholly/types';
import { Card, CardHeader, CardTitle, CardDescription, Progress } from '@wholly/ui-web';
import { useProgressStore } from '@/lib/store';
import { ChevronRight } from 'lucide-react';

interface StepListProps {
  steps: Step[];
}

export function StepList({ steps }: StepListProps) {
  const getStepProgress = useProgressStore((state) => state.getStepProgress);
  const isLoaded = useProgressStore((state) => state.isLoaded);

  return (
    <div className="space-y-3">
      {steps.map((step) => {
        const progress = isLoaded ? getStepProgress(step.id) : 0;

        return (
          <Link key={step.id} href={`/step/${step.id}`}>
            <Card className="transition-shadow hover:shadow-md">
              <CardHeader className="flex flex-row items-center justify-between p-4">
                <div className="flex-1">
                  <CardTitle className="text-base">{step.title}</CardTitle>
                  <CardDescription className="mt-1">
                    {step.description}
                  </CardDescription>
                  {isLoaded && (
                    <div className="mt-3">
                      <Progress value={progress} />
                    </div>
                  )}
                </div>
                <ChevronRight className="ml-2 h-5 w-5 text-gray-400" />
              </CardHeader>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
