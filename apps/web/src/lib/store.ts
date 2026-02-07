'use client';

import { create } from 'zustand';
import type { UserProgress } from '@wholly/types';
import {
  createInitialProgress,
  toggleChecklistItem,
  loadProgress,
  saveProgress,
  getStepCompletionRate,
  getTotalCompletionRate,
} from '@wholly/core';

interface ProgressStore {
  progress: UserProgress;
  isLoaded: boolean;
  loadFromStorage: () => void;
  toggleItem: (stepId: string, itemId: string) => void;
  getStepProgress: (stepId: string) => number;
  getTotalProgress: () => number;
}

export const useProgressStore = create<ProgressStore>((set, get) => ({
  progress: createInitialProgress(),
  isLoaded: false,

  loadFromStorage: () => {
    const stored = loadProgress();
    set({ progress: stored, isLoaded: true });
  },

  toggleItem: (stepId: string, itemId: string) => {
    const { progress } = get();
    const updated = toggleChecklistItem(progress, stepId, itemId);
    saveProgress(updated);
    set({ progress: updated });
  },

  getStepProgress: (stepId: string) => {
    const { progress } = get();
    return getStepCompletionRate(progress, stepId);
  },

  getTotalProgress: () => {
    const { progress } = get();
    return getTotalCompletionRate(progress);
  },
}));
