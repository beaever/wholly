'use client';

import { create } from 'zustand';
import type { User } from '@wholly/types';
import { getCurrentUser as getSupabaseUser } from '@/lib/api/supabase/users';
import { supabase } from '@/lib/supabase/client';

interface AuthStore {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  loadUser: () => Promise<void>;
  signOut: () => Promise<void>;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isLoading: true,
  isAuthenticated: false,

  loadUser: async () => {
    try {
      set({ isLoading: true });
      const user = await getSupabaseUser();
      set({ 
        user, 
        isAuthenticated: !!user,
        isLoading: false 
      });
    } catch (error) {
      console.error('Error loading user:', error);
      set({ user: null, isAuthenticated: false, isLoading: false });
    }
  },

  signOut: async () => {
    try {
      await supabase.auth.signOut();
      set({ user: null, isAuthenticated: false });
    } catch (error) {
      console.error('Error signing out:', error);
    }
  },

  setUser: (user: User | null) => {
    set({ user, isAuthenticated: !!user });
  },
}));

// Auth state change listener
if (typeof window !== 'undefined') {
  supabase.auth.onAuthStateChange(async (event, session) => {
    if (event === 'SIGNED_IN' && session?.user) {
      const user = await getSupabaseUser();
      useAuthStore.getState().setUser(user);
    } else if (event === 'SIGNED_OUT') {
      useAuthStore.getState().setUser(null);
    }
  });
}
