'use client';

import {
  isInNativeApp,
  sendToNative,
  subscribeToNative,
  initWebBridge,
  type NativeToWebMessage,
} from '@wholly/bridge';

export { isInNativeApp, sendToNative, subscribeToNative, initWebBridge };
export type { NativeToWebMessage };

export function requestPushPermission(): void {
  sendToNative({ type: 'REQUEST_PUSH' });
}

export function openExternalUrl(url: string): void {
  if (isInNativeApp()) {
    sendToNative({ type: 'OPEN_EXTERNAL_URL', payload: { url } });
  } else {
    window.open(url, '_blank');
  }
}

export function triggerHaptic(style: 'light' | 'medium' | 'heavy' = 'light'): void {
  if (isInNativeApp()) {
    sendToNative({ type: 'HAPTIC_FEEDBACK', payload: { style } });
  }
}

export function shareContent(title: string, message: string, url?: string): void {
  if (isInNativeApp()) {
    sendToNative({ type: 'SHARE', payload: { title, message, url } });
  } else if (navigator.share) {
    navigator.share({ title, text: message, url }).catch(() => {});
  }
}
