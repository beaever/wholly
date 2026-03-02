import { supabase } from '@/lib/supabase/client';
import type { Step } from '@wholly/types';

export interface StepRow {
  id: string;
  title: string;
  description: string;
  order: number;
  icon: string | null;
  estimated_days: number | null;
  created_at: string;
}

export async function getSteps(): Promise<Step[]> {
  const { data, error } = await supabase
    .from('steps')
    .select('*')
    .order('order', { ascending: true });

  if (error) {
    console.error('Error fetching steps:', error);
    throw error;
  }

  return (data || []).map((row: StepRow) => ({
    id: row.id,
    title: row.title,
    description: row.description,
    order: row.order,
    icon: row.icon || undefined,
    estimatedDays: row.estimated_days || undefined,
  }));
}

export async function getStepById(id: string): Promise<Step | null> {
  const { data, error } = await supabase
    .from('steps')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching step:', error);
    return null;
  }

  if (!data) return null;

  return {
    id: data.id,
    title: data.title,
    description: data.description,
    order: data.order,
    icon: data.icon || undefined,
    estimatedDays: data.estimated_days || undefined,
  };
}

export async function getNextStep(currentStepId: string): Promise<Step | null> {
  const currentStep = await getStepById(currentStepId);
  if (!currentStep) return null;

  const { data, error } = await supabase
    .from('steps')
    .select('*')
    .gt('order', currentStep.order)
    .order('order', { ascending: true })
    .limit(1)
    .single();

  if (error || !data) return null;

  return {
    id: data.id,
    title: data.title,
    description: data.description,
    order: data.order,
    icon: data.icon || undefined,
    estimatedDays: data.estimated_days || undefined,
  };
}

export async function getPreviousStep(currentStepId: string): Promise<Step | null> {
  const currentStep = await getStepById(currentStepId);
  if (!currentStep) return null;

  const { data, error } = await supabase
    .from('steps')
    .select('*')
    .lt('order', currentStep.order)
    .order('order', { ascending: false })
    .limit(1)
    .single();

  if (error || !data) return null;

  return {
    id: data.id,
    title: data.title,
    description: data.description,
    order: data.order,
    icon: data.icon || undefined,
    estimatedDays: data.estimated_days || undefined,
  };
}
