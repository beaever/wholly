import type { Metadata, Viewport } from 'next';
import './globals.css';
import { BridgeProvider } from '@/lib/providers/BridgeProvider';

export const metadata: Metadata = {
  title: 'WHOLLY - 워킹홀리데이 체크리스트',
  description: '워킹홀리데이 준비부터 정착까지, 단계별 체크리스트로 완벽하게 준비하세요.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-gray-50">
        <BridgeProvider>{children}</BridgeProvider>
      </body>
    </html>
  );
}
