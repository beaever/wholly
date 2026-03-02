'use client';

import { useState, useEffect } from 'react';
import { getChecklistByStepId } from '@/lib/api/supabase/checklist';
import type { ChecklistItem } from '@wholly/types';

export function useChecklist(stepId: string) {
  const [checklist, setChecklist] = useState<ChecklistItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchChecklist() {
      try {
        setLoading(true);
        const data = await getChecklistByStepId(stepId);
        setChecklist(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching checklist:', err);
        setError('체크리스트를 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    }

    if (stepId) {
      fetchChecklist();
    }
  }, [stepId]);

  return { checklist, loading, error };
}
