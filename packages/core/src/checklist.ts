import type { ChecklistItem } from '@wholly/types';

// 목데이터 제거됨 - Supabase API에서 데이터를 가져옵니다
// 레거시 호환성을 위한 유틸리티 함수만 유지

export function getChecklistByStepId(stepId: string): ChecklistItem[] {
  // API 호출로 대체되어야 함
  return [];
}

export function getChecklistItemById(itemId: string): ChecklistItem | undefined {
  // API 호출로 대체되어야 함
  return undefined;
}

export function getRequiredItems(stepId: string): ChecklistItem[] {
  // API 호출로 대체되어야 함
  return [];
}

export function getOptionalItems(stepId: string): ChecklistItem[] {
  // API 호출로 대체되어야 함
  return [];
}
