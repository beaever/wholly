'use client';

import { useState, useEffect } from 'react';
import { getCurrentUser, onAuthStateChange } from '@/lib/supabase/auth';

export function useAuth() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentUser().then(({ user }) => {
      setUser(user);
      setLoading(false);
    });

    const { data } = onAuthStateChange((user) => {
      setUser(user);
    });

    return () => {
      data?.subscription?.unsubscribe();
    };
  }, []);

  return { user, loading };
}
