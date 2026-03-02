import { supabase } from '@/lib/supabase/client';
import type { UserProgress, StepProgressData } from '@wholly/types';

export interface UserProgressRow {
  id: string;
  user_id: string;
  step_id: string;
  started_at: string | null;
  completed_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface UserChecklistProgressRow {
  id: string;
  user_id: string;
  checklist_item_id: string;
  completed_at: string;
}

export async function getUserProgress(userId: string): Promise<UserProgress> {
  const [stepProgressResult, checklistProgressResult] = await Promise.all([
    supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', userId),
    supabase
      .from('user_checklist_progress')
      .select('*')
      .eq('user_id', userId),
  ]);

  if (stepProgressResult.error) {
    console.error('Error fetching user progress:', stepProgressResult.error);
    throw stepProgressResult.error;
  }

  if (checklistProgressResult.error) {
    console.error('Error fetching checklist progress:', checklistProgressResult.error);
    throw checklistProgressResult.error;
  }

  const stepProgress = stepProgressResult.data || [];
  const checklistProgress = checklistProgressResult.data || [];

  const steps: Record<string, StepProgressData> = {};

  stepProgress.forEach((row: UserProgressRow) => {
    const completedItems = checklistProgress
      .filter((cp: UserChecklistProgressRow) => cp.checklist_item_id.startsWith(row.step_id))
      .map((cp: UserChecklistProgressRow) => cp.checklist_item_id);

    steps[row.step_id] = {
      completedItems,
      startedAt: row.started_at ? new Date(row.started_at) : undefined,
      completedAt: row.completed_at ? new Date(row.completed_at) : undefined,
    };
  });

  return {
    userId,
    steps,
    lastUpdatedAt: new Date(),
  };
}

export async function updateChecklistProgress(
  userId: string,
  stepId: string,
  itemId: string,
  completed: boolean
): Promise<void> {
  if (completed) {
    const { error } = await supabase
      .from('user_checklist_progress')
      .upsert({
        user_id: userId,
        checklist_item_id: itemId,
        completed_at: new Date().toISOString(),
      });

    if (error) {
      console.error('Error updating checklist progress:', error);
      throw error;
    }

    await ensureStepProgressExists(userId, stepId);
  } else {
    const { error } = await supabase
      .from('user_checklist_progress')
      .delete()
      .eq('user_id', userId)
      .eq('checklist_item_id', itemId);

    if (error) {
      console.error('Error removing checklist progress:', error);
      throw error;
    }
  }
}

async function ensureStepProgressExists(userId: string, stepId: string): Promise<void> {
  const { data } = await supabase
    .from('user_progress')
    .select('id')
    .eq('user_id', userId)
    .eq('step_id', stepId)
    .single();

  if (!data) {
    const { error } = await supabase
      .from('user_progress')
      .insert({
        user_id: userId,
        step_id: stepId,
        started_at: new Date().toISOString(),
      });

    if (error) {
      console.error('Error creating step progress:', error);
      throw error;
    }
  }
}

export async function updateStepCompletion(
  userId: string,
  stepId: string,
  completed: boolean
): Promise<void> {
  const { error } = await supabase
    .from('user_progress')
    .upsert({
      user_id: userId,
      step_id: stepId,
      completed_at: completed ? new Date().toISOString() : null,
      updated_at: new Date().toISOString(),
    });

  if (error) {
    console.error('Error updating step completion:', error);
    throw error;
  }
}
