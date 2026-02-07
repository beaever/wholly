export interface ChecklistItem {
  id: string;
  stepId: string;
  title: string;
  description?: string;
  order: number;
  isRequired: boolean;
}

export interface ChecklistItemStatus {
  itemId: string;
  isCompleted: boolean;
  completedAt?: Date;
}
