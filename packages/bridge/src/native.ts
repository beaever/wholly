import type { WebToNativeMessage, NativeToWebMessage } from './messages';

export type WebViewRef = {
  postMessage: (message: string) => void;
};

export function sendToWeb(
  webViewRef: WebViewRef | null,
  message: NativeToWebMessage
): void {
  if (!webViewRef) {
    console.warn('[Bridge] WebView ref is null, message not sent:', message);
    return;
  }

  webViewRef.postMessage(JSON.stringify(message));
}

export function parseWebMessage(data: string): WebToNativeMessage | null {
  try {
    return JSON.parse(data) as WebToNativeMessage;
  } catch {
    console.warn('[Bridge] Failed to parse web message:', data);
    return null;
  }
}

export type WebMessageHandler = (message: WebToNativeMessage) => void;

export function createMessageHandler(
  handlers: Partial<Record<WebToNativeMessage['type'], (message: WebToNativeMessage) => void>>
): (event: { nativeEvent: { data: string } }) => void {
  return (event) => {
    const message = parseWebMessage(event.nativeEvent.data);
    if (!message) return;

    const handler = handlers[message.type];
    if (handler) {
      handler(message);
    }
  };
}
