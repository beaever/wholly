export type WebToNativeMessage =
  | { type: 'READY' }
  | { type: 'REQUEST_PUSH' }
  | { type: 'OPEN_EXTERNAL_URL'; payload: { url: string } }
  | { type: 'HAPTIC_FEEDBACK'; payload: { style: 'light' | 'medium' | 'heavy' } }
  | { type: 'SHARE'; payload: { title: string; message: string; url?: string } };

export type NativeToWebMessage =
  | { type: 'PUSH_GRANTED'; payload: { token: string } }
  | { type: 'PUSH_DENIED' }
  | { type: 'DEEP_LINK'; payload: { path: string } }
  | { type: 'APP_STATE_CHANGE'; payload: { state: 'active' | 'background' | 'inactive' } };

export type BridgeMessage = WebToNativeMessage | NativeToWebMessage;
