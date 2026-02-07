export interface User {
  id: string;
  email?: string;
  pushToken?: string;
  createdAt: Date;
}

export interface UserProgress {
  userId?: string;
  steps: Record<string, StepProgressData>;
  lastUpdatedAt: Date;
}

export interface StepProgressData {
  completedItems: string[];
  startedAt?: Date;
  completedAt?: Date;
}
