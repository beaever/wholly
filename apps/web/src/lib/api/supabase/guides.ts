import { supabase } from '@/lib/supabase/client';
import type { GuideContent, GuideSection, PromoCard } from '@wholly/core';

export interface GuideRow {
  id: string;
  step_number: number;
  step: string;
  title: string;
  image_url: string | null;
  intro: string;
  sections: any;
  tips: string[] | null;
  warnings: string[] | null;
  promo: any;
  created_at: string;
  updated_at: string;
}

export async function getGuides(): Promise<GuideContent[]> {
  const { data, error } = await supabase
    .from('guides')
    .select('*')
    .order('step_number', { ascending: true });

  if (error) {
    console.error('Error fetching guides:', error);
    throw error;
  }

  return (data || []).map((row: GuideRow) => ({
    id: row.id,
    stepNumber: row.step_number,
    step: row.step,
    title: row.title,
    imageUrl: row.image_url || '',
    intro: row.intro,
    sections: row.sections as GuideSection[],
    tips: row.tips || [],
    warnings: row.warnings || [],
    promo: row.promo as PromoCard | undefined,
  }));
}

export async function getGuideById(id: string): Promise<GuideContent | null> {
  const { data, error } = await supabase
    .from('guides')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching guide:', error);
    return null;
  }

  if (!data) return null;

  return {
    id: data.id,
    stepNumber: data.step_number,
    step: data.step,
    title: data.title,
    imageUrl: data.image_url || '',
    intro: data.intro,
    sections: data.sections as GuideSection[],
    tips: data.tips || [],
    warnings: data.warnings || [],
    promo: data.promo as PromoCard | undefined,
  };
}
