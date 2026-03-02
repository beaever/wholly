import { supabase } from '@/lib/supabase/client';

export interface PackingItem {
  id: string;
  name: string;
  category: string;
  isRequired: boolean;
  description?: string;
}

export interface UserPackingItem extends PackingItem {
  isPacked: boolean;
}

export interface PackingItemRow {
  id: string;
  name: string;
  category: string;
  is_required: boolean;
  description: string | null;
  created_at: string;
}

export interface UserPackingListRow {
  id: string;
  user_id: string;
  packing_item_id: string;
  is_packed: boolean;
  created_at: string;
}

export async function getPackingItems(): Promise<PackingItem[]> {
  const { data, error } = await supabase
    .from('packing_items')
    .select('*')
    .order('category', { ascending: true })
    .order('name', { ascending: true });

  if (error) {
    console.error('Error fetching packing items:', error);
    throw error;
  }

  return (data || []).map((row: PackingItemRow) => ({
    id: row.id,
    name: row.name,
    category: row.category,
    isRequired: row.is_required,
    description: row.description || undefined,
  }));
}

export async function getUserPackingList(userId: string): Promise<UserPackingItem[]> {
  const { data: items, error: itemsError } = await supabase
    .from('packing_items')
    .select('*');

  if (itemsError) {
    console.error('Error fetching packing items:', itemsError);
    throw itemsError;
  }

  const { data: userList, error: userListError } = await supabase
    .from('user_packing_list')
    .select('*')
    .eq('user_id', userId);

  if (userListError) {
    console.error('Error fetching user packing list:', userListError);
    throw userListError;
  }

  const userPackingMap = new Map(
    (userList || []).map((row: UserPackingListRow) => [row.packing_item_id, row.is_packed])
  );

  return (items || []).map((row: PackingItemRow) => ({
    id: row.id,
    name: row.name,
    category: row.category,
    isRequired: row.is_required,
    description: row.description || undefined,
    isPacked: userPackingMap.get(row.id) || false,
  }));
}

export async function updatePackingItem(
  userId: string,
  itemId: string,
  packed: boolean
): Promise<void> {
  if (packed) {
    const { error } = await supabase
      .from('user_packing_list')
      .upsert({
        user_id: userId,
        packing_item_id: itemId,
        is_packed: true,
      });

    if (error) {
      console.error('Error updating packing item:', error);
      throw error;
    }
  } else {
    const { error } = await supabase
      .from('user_packing_list')
      .delete()
      .eq('user_id', userId)
      .eq('packing_item_id', itemId);

    if (error) {
      console.error('Error removing packing item:', error);
      throw error;
    }
  }
}

export async function addCustomPackingItem(
  userId: string,
  name: string,
  category: string,
  description?: string
): Promise<PackingItem> {
  const itemId = `custom-${userId}-${Date.now()}`;

  const { error: itemError } = await supabase
    .from('packing_items')
    .insert({
      id: itemId,
      name,
      category,
      is_required: false,
      description,
    });

  if (itemError) {
    console.error('Error adding custom packing item:', itemError);
    throw itemError;
  }

  const { error: userListError } = await supabase
    .from('user_packing_list')
    .insert({
      user_id: userId,
      packing_item_id: itemId,
      is_packed: false,
    });

  if (userListError) {
    console.error('Error adding to user packing list:', userListError);
    throw userListError;
  }

  return {
    id: itemId,
    name,
    category,
    isRequired: false,
    description,
  };
}
