'use client';

import { useState, useEffect } from 'react';
import { getSteps } from '@/lib/api/supabase/steps';
import type { Step } from '@wholly/types';

export function useSteps() {
  const [steps, setSteps] = useState<Step[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSteps() {
      try {
        setLoading(true);
        const data = await getSteps();
        setSteps(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching steps:', err);
        setError('단계 정보를 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    }

    fetchSteps();
  }, []);

  return { steps, loading, error };
}
