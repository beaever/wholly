import { useRef, useEffect, useCallback, useState } from 'react';
import { StyleSheet, View, Platform, BackHandler, AppState, type AppStateStatus } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { WebView, type WebViewMessageEvent } from 'react-native-webview';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as Notifications from 'expo-notifications';
import * as Linking from 'expo-linking';
import Constants from 'expo-constants';
import {
  sendToWeb,
  parseWebMessage,
  type WebViewRef,
} from '@wholly/bridge';

const WEB_URL = Constants.expoConfig?.extra?.webUrl ?? 'http://localhost:3000';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const webViewRef = useRef<WebView>(null);
  const [canGoBack, setCanGoBack] = useState(false);

  const getWebViewRef = useCallback((): WebViewRef | null => {
    if (!webViewRef.current) return null;
    return {
      postMessage: (message: string) => {
        webViewRef.current?.postMessage(message);
      },
    };
  }, []);

  const handleMessage = useCallback(async (event: WebViewMessageEvent) => {
    const message = parseWebMessage(event.nativeEvent.data);
    if (!message) return;

    switch (message.type) {
      case 'READY':
        console.log('[Native] Web is ready');
        break;

      case 'REQUEST_PUSH':
        const { status } = await Notifications.requestPermissionsAsync();
        if (status === 'granted') {
          const token = await Notifications.getExpoPushTokenAsync();
          sendToWeb(getWebViewRef(), {
            type: 'PUSH_GRANTED',
            payload: { token: token.data },
          });
        } else {
          sendToWeb(getWebViewRef(), { type: 'PUSH_DENIED' });
        }
        break;

      case 'OPEN_EXTERNAL_URL':
        if ('payload' in message && message.payload.url) {
          Linking.openURL(message.payload.url);
        }
        break;

      case 'HAPTIC_FEEDBACK':
        break;

      case 'SHARE':
        break;
    }
  }, [getWebViewRef]);

  useEffect(() => {
    const subscription = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        const url = response.notification.request.content.data?.url;
        if (url && typeof url === 'string') {
          sendToWeb(getWebViewRef(), {
            type: 'DEEP_LINK',
            payload: { path: url },
          });
        }
      }
    );

    return () => subscription.remove();
  }, [getWebViewRef]);

  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      sendToWeb(getWebViewRef(), {
        type: 'APP_STATE_CHANGE',
        payload: {
          state: nextAppState === 'active' ? 'active' : nextAppState === 'background' ? 'background' : 'inactive',
        },
      });
    };

    const subscription = AppState.addEventListener('change', handleAppStateChange);
    return () => subscription.remove();
  }, [getWebViewRef]);

  useEffect(() => {
    if (Platform.OS !== 'android') return;

    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      if (canGoBack && webViewRef.current) {
        webViewRef.current.goBack();
        return true;
      }
      return false;
    });

    return () => backHandler.remove();
  }, [canGoBack]);

  useEffect(() => {
    const handleDeepLink = (event: { url: string }) => {
      const path = event.url.replace(/^wholly:\/\//, '/');
      sendToWeb(getWebViewRef(), {
        type: 'DEEP_LINK',
        payload: { path },
      });
    };

    const subscription = Linking.addEventListener('url', handleDeepLink);

    Linking.getInitialURL().then((url) => {
      if (url) {
        handleDeepLink({ url });
      }
    });

    return () => subscription.remove();
  }, [getWebViewRef]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top']}>
        <StatusBar style="auto" />
        <WebView
          ref={webViewRef}
          source={{ uri: WEB_URL }}
          style={styles.webview}
          onMessage={handleMessage}
          onNavigationStateChange={(navState) => setCanGoBack(navState.canGoBack)}
          javaScriptEnabled
          domStorageEnabled
          startInLoadingState
          allowsBackForwardNavigationGestures
          pullToRefreshEnabled
          sharedCookiesEnabled
          originWhitelist={['*']}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  webview: {
    flex: 1,
  },
});
