import type { StepStatus } from '@wholly/types';

export function calculateStepStatus(
  stepId: string,
  completedItems: string[],
  totalItems: number,
): StepStatus {
  if (completedItems.length === 0) return 'not_started';
  if (completedItems.length === totalItems) return 'completed';
  return 'in_progress';
}
