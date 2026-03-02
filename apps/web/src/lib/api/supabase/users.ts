import { supabase } from '@/lib/supabase/client';
import type { User } from '@wholly/types';

export interface UserRow {
  id: string;
  email: string | null;
  push_token: string | null;
  created_at: string;
  updated_at: string;
}

export async function getCurrentUser(): Promise<User | null> {
  const { data: { user: authUser }, error: authError } = await supabase.auth.getUser();

  if (authError || !authUser) {
    return null;
  }

  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', authUser.id)
    .single();

  if (error) {
    if (error.code === 'PGRST116') {
      await createUserProfile(authUser.id, authUser.email || undefined);
      return {
        id: authUser.id,
        email: authUser.email || undefined,
        createdAt: new Date(),
      };
    }
    console.error('Error fetching user:', error);
    return null;
  }

  if (!data) return null;

  return {
    id: data.id,
    email: data.email || undefined,
    pushToken: data.push_token || undefined,
    createdAt: new Date(data.created_at),
  };
}

async function createUserProfile(userId: string, email?: string): Promise<void> {
  const { error } = await supabase
    .from('users')
    .insert({
      id: userId,
      email,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });

  if (error) {
    console.error('Error creating user profile:', error);
    throw error;
  }
}

export async function updateUserProfile(userId: string, updates: Partial<User>): Promise<void> {
  const { error } = await supabase
    .from('users')
    .update({
      email: updates.email,
      push_token: updates.pushToken,
      updated_at: new Date().toISOString(),
    })
    .eq('id', userId);

  if (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
}

export async function updatePushToken(userId: string, pushToken: string): Promise<void> {
  const { error } = await supabase
    .from('users')
    .update({
      push_token: pushToken,
      updated_at: new Date().toISOString(),
    })
    .eq('id', userId);

  if (error) {
    console.error('Error updating push token:', error);
    throw error;
  }
}
