import type { UserProgress } from '@wholly/types';
import { createInitialProgress } from './progress';

const STORAGE_KEY = 'wholly_progress';

export function saveProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;

  try {
    const serialized = JSON.stringify(progress);
    localStorage.setItem(STORAGE_KEY, serialized);
  } catch (error) {
    console.error('[Storage] Failed to save progress:', error);
  }
}

export function loadProgress(): UserProgress {
  if (typeof window === 'undefined') {
    return createInitialProgress();
  }

  try {
    const serialized = localStorage.getItem(STORAGE_KEY);
    if (!serialized) {
      return createInitialProgress();
    }

    const parsed = JSON.parse(serialized) as UserProgress;
    return {
      ...parsed,
      lastUpdatedAt: new Date(parsed.lastUpdatedAt),
    };
  } catch (error) {
    console.error('[Storage] Failed to load progress:', error);
    return createInitialProgress();
  }
}

export function clearProgress(): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('[Storage] Failed to clear progress:', error);
  }
}

export function hasStoredProgress(): boolean {
  if (typeof window === 'undefined') return false;

  try {
    return localStorage.getItem(STORAGE_KEY) !== null;
  } catch {
    return false;
  }
}
