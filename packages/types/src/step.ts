import type { ChecklistItem } from './checklist';

export type StepStatus = 'not_started' | 'in_progress' | 'completed';

export interface Step {
  id: string;
  title: string;
  description: string;
  order: number;
  checklist: ChecklistItem[];
  status: StepStatus;
}

export interface StepProgress {
  stepId: string;
  completedItems: string[];
  startedAt?: Date;
  completedAt?: Date;
}
