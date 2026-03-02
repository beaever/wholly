'use client';

import { useState, useEffect } from 'react';
import { getGuides, getGuideById } from '@/lib/api/supabase/guides';
import type { GuideContent } from '@wholly/core';

export function useGuides() {
  const [guides, setGuides] = useState<GuideContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchGuides() {
      try {
        setLoading(true);
        const data = await getGuides();
        setGuides(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching guides:', err);
        setError('가이드를 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    }

    fetchGuides();
  }, []);

  return { guides, loading, error };
}

export function useGuide(id: string) {
  const [guide, setGuide] = useState<GuideContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchGuide() {
      try {
        setLoading(true);
        const data = await getGuideById(id);
        setGuide(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching guide:', err);
        setError('가이드를 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchGuide();
    }
  }, [id]);

  return { guide, loading, error };
}
