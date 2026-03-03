import { supabase } from '@/lib/supabase/client';
import type { User } from '@wholly/types';

export interface UserRow {
  id: string;
  email: string | null;
  name: string | null;
  avatar_url: string | null;
  push_token: string | null;
  created_at: string;
  updated_at: string;
}

export async function getCurrentUser(): Promise<User | null> {
  const {
    data: { user: authUser },
    error: authError,
  } = await supabase.auth.getUser();

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
      const name =
        authUser.user_metadata?.full_name || authUser.user_metadata?.name;
      const avatarUrl =
        authUser.user_metadata?.avatar_url || authUser.user_metadata?.picture;
      await createUserProfile(
        authUser.id,
        authUser.email || undefined,
        name,
        avatarUrl,
      );
      return {
        id: authUser.id,
        email: authUser.email || undefined,
        name,
        avatarUrl,
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
    name: data.name || undefined,
    avatarUrl: data.avatar_url || undefined,
    pushToken: data.push_token || undefined,
    createdAt: new Date(data.created_at),
  };
}

async function createUserProfile(
  userId: string,
  email?: string,
  name?: string,
  avatarUrl?: string,
): Promise<void> {
  const { error } = await supabase.from('users').insert({
    id: userId,
    email,
    name,
    avatar_url: avatarUrl,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  });

  if (error) {
    console.error('Error creating user profile:', error);
    throw error;
  }
}

export async function updateUserProfile(
  userId: string,
  updates: Partial<User>,
): Promise<void> {
  const { error } = await supabase
    .from('users')
    .update({
      email: updates.email,
      name: updates.name,
      avatar_url: updates.avatarUrl,
      push_token: updates.pushToken,
      updated_at: new Date().toISOString(),
    })
    .eq('id', userId);

  if (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
}

export async function updatePushToken(
  userId: string,
  pushToken: string,
): Promise<void> {
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
