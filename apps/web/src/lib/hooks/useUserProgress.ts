'use client';

import { useState, useEffect } from 'react';
import { getUserProgress, updateChecklistProgress } from '@/lib/api/supabase/progress';
import { useAuthStore } from '@/lib/store/auth';
import type { UserProgress } from '@wholly/types';

export function useUserProgress() {
  const { user, isAuthenticated } = useAuthStore();
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProgress() {
      if (!isAuthenticated || !user) {
        setProgress(null);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const data = await getUserProgress(user.id);
        setProgress(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching user progress:', err);
        setError('진행 상황을 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    }

    fetchProgress();
  }, [user, isAuthenticated]);

  const toggleChecklistItem = async (stepId: string, itemId: string) => {
    if (!user) return;

    const isCompleted = progress?.steps[stepId]?.completedItems.includes(itemId) || false;

    try {
      await updateChecklistProgress(user.id, stepId, itemId, !isCompleted);
      
      // 로컬 상태 업데이트
      const updatedProgress = await getUserProgress(user.id);
      setProgress(updatedProgress);
    } catch (err) {
      console.error('Error toggling checklist item:', err);
      setError('체크리스트 업데이트에 실패했습니다.');
    }
  };

  return { progress, loading, error, toggleChecklistItem };
}
