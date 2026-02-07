import type { UserProgress, StepProgressData } from '@wholly/types';
import { getChecklistByStepId } from './checklist';
import { calculateStepStatus } from './steps';

export function createInitialProgress(): UserProgress {
  return {
    steps: {},
    lastUpdatedAt: new Date(),
  };
}

export function toggleChecklistItem(
  progress: UserProgress,
  stepId: string,
  itemId: string,
): UserProgress {
  const stepProgress = progress.steps[stepId] ?? {
    completedItems: [],
  };

  const isCompleted = stepProgress.completedItems.includes(itemId);
  const completedItems = isCompleted
    ? stepProgress.completedItems.filter((id: string) => id !== itemId)
    : [...stepProgress.completedItems, itemId];

  const updatedStepProgress: StepProgressData = {
    ...stepProgress,
    completedItems,
    startedAt: stepProgress.startedAt ?? new Date(),
  };

  const checklist = getChecklistByStepId(stepId);
  const status = calculateStepStatus(stepId, completedItems, checklist.length);

  if (status === 'completed' && !updatedStepProgress.completedAt) {
    updatedStepProgress.completedAt = new Date();
  } else if (status !== 'completed') {
    updatedStepProgress.completedAt = undefined;
  }

  return {
    ...progress,
    steps: {
      ...progress.steps,
      [stepId]: updatedStepProgress,
    },
    lastUpdatedAt: new Date(),
  };
}

export function isItemCompleted(
  progress: UserProgress,
  stepId: string,
  itemId: string,
): boolean {
  return progress.steps[stepId]?.completedItems.includes(itemId) ?? false;
}

export function getStepCompletionRate(
  progress: UserProgress,
  stepId: string,
): number {
  const checklist = getChecklistByStepId(stepId);
  if (checklist.length === 0) return 0;

  const completedCount = progress.steps[stepId]?.completedItems.length ?? 0;
  return Math.round((completedCount / checklist.length) * 100);
}

export function getTotalCompletionRate(progress: UserProgress): number {
  const allStepIds = Object.keys(progress.steps);
  if (allStepIds.length === 0) return 0;

  let totalItems = 0;
  let completedItems = 0;

  for (const stepId of allStepIds) {
    const checklist = getChecklistByStepId(stepId);
    totalItems += checklist.length;
    completedItems += progress.steps[stepId]?.completedItems.length ?? 0;
  }

  if (totalItems === 0) return 0;
  return Math.round((completedItems / totalItems) * 100);
}
