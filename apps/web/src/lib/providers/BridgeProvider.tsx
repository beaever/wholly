'use client';

import { useEffect, type ReactNode } from 'react';
import { initWebBridge, subscribeToNative } from '@/lib/native';
import { useProgressStore } from '@/lib/store';

interface BridgeProviderProps {
  children: ReactNode;
}

export function BridgeProvider({ children }: BridgeProviderProps) {
  const loadFromStorage = useProgressStore((state) => state.loadFromStorage);

  useEffect(() => {
    loadFromStorage();

    const cleanup = initWebBridge();

    const unsubscribe = subscribeToNative((message) => {
      switch (message.type) {
        case 'PUSH_GRANTED':
          console.log(
            '[Bridge] Push granted with token:',
            message.payload.token,
          );
          break;
        case 'PUSH_DENIED':
          console.log('[Bridge] Push permission denied');
          break;
        case 'DEEP_LINK':
          window.location.href = message.payload.path;
          break;
        case 'APP_STATE_CHANGE':
          if (message.payload.state === 'active') {
            return loadFromStorage();
          }
          break;
      }
    });

    return () => {
      cleanup();
      unsubscribe();
    };
  }, [loadFromStorage]);

  return <>{children}</>;
}
