import { supabase } from '@/lib/supabase/client';
import type { ChecklistItem } from '@wholly/types';

export interface ChecklistItemRow {
  id: string;
  step_id: string;
  title: string;
  description: string | null;
  order: number;
  is_required: boolean;
  created_at: string;
}

export async function getChecklistByStepId(stepId: string): Promise<ChecklistItem[]> {
  const { data, error } = await supabase
    .from('checklist_items')
    .select('*')
    .eq('step_id', stepId)
    .order('order', { ascending: true });

  if (error) {
    console.error('Error fetching checklist:', error);
    throw error;
  }

  return (data || []).map((row: ChecklistItemRow) => ({
    id: row.id,
    stepId: row.step_id,
    title: row.title,
    description: row.description || undefined,
    order: row.order,
    isRequired: row.is_required,
  }));
}

export async function getAllChecklistItems(): Promise<Record<string, ChecklistItem[]>> {
  const { data, error } = await supabase
    .from('checklist_items')
    .select('*')
    .order('step_id', { ascending: true })
    .order('order', { ascending: true });

  if (error) {
    console.error('Error fetching all checklist items:', error);
    throw error;
  }

  const grouped: Record<string, ChecklistItem[]> = {};
  
  (data || []).forEach((row: ChecklistItemRow) => {
    if (!grouped[row.step_id]) {
      grouped[row.step_id] = [];
    }
    grouped[row.step_id].push({
      id: row.id,
      stepId: row.step_id,
      title: row.title,
      description: row.description || undefined,
      order: row.order,
      isRequired: row.is_required,
    });
  });

  return grouped;
}
