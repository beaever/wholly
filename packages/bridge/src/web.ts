import type { WebToNativeMessage, NativeToWebMessage } from './messages';

declare global {
  interface Window {
    ReactNativeWebView?: {
      postMessage: (message: string) => void;
    };
  }
}

export function isInNativeApp(): boolean {
  return typeof window !== 'undefined' && !!window.ReactNativeWebView;
}

export function sendToNative(message: WebToNativeMessage): void {
  if (!isInNativeApp()) {
    console.warn('[Bridge] Not in native app, message not sent:', message);
    return;
  }

  window.ReactNativeWebView?.postMessage(JSON.stringify(message));
}

export type NativeMessageHandler = (message: NativeToWebMessage) => void;

const handlers: Set<NativeMessageHandler> = new Set();

export function subscribeToNative(handler: NativeMessageHandler): () => void {
  handlers.add(handler);
  return () => handlers.delete(handler);
}

export function handleNativeMessage(event: MessageEvent): void {
  try {
    const message = JSON.parse(event.data) as NativeToWebMessage;
    handlers.forEach((handler) => handler(message));
  } catch {
    console.warn('[Bridge] Failed to parse native message:', event.data);
  }
}

export function initWebBridge(): () => void {
  if (typeof window === 'undefined') return () => {};

  window.addEventListener('message', handleNativeMessage);
  sendToNative({ type: 'READY' });

  return () => {
    window.removeEventListener('message', handleNativeMessage);
  };
}
