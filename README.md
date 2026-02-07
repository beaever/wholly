# WHOLLY

워킹홀리데이 준비부터 정착까지, 단계별 체크리스트로 완벽하게 준비하세요.

## 🎯 아키텍처 핵심 원칙

- **웹이 서비스의 본체**다
- **모바일은 Expo 기반 WebView Shell**이다
- **비즈니스 로직은 전부 웹/공통 패키지**에 있다
- **Expo는 언제든 eject 가능하도록 얇게 사용**한다

> **Expo를 쓰되, Expo에 기대지 않는다.**

## 📦 모노레포 구조

```
wholly/
├─ apps/
│  ├─ web/                  # Next.js (서비스 본체)
│  └─ mobile/               # Expo (WebView Shell)
│
├─ packages/
│  ├─ core/                 # Step / Checklist 비즈니스 로직
│  ├─ bridge/               # Web ↔ Native 메시지 인터페이스
│  ├─ types/                # 공통 타입 정의
│  ├─ ui-web/               # 웹 전용 UI 컴포넌트
│  └─ config/               # eslint / ts / prettier 설정
│
├─ turbo.json
├─ pnpm-workspace.yaml
└─ package.json
```

## 🚀 시작하기

### 요구사항

- Node.js 20+
- pnpm 9+

### 설치

```bash
pnpm install
```

### 개발 서버 실행

```bash
# 웹 개발 서버
pnpm dev:web

# 모바일 개발 서버
pnpm dev:mobile

# 전체 개발 서버
pnpm dev
```

### 빌드

```bash
pnpm build
```

## 📱 앱 구조

### Web (apps/web)

Next.js App Router 기반의 서비스 본체입니다.

- **기술 스택**: Next.js 15, React 19, TypeScript, Tailwind CSS, Zustand
- **역할**: WHOLLY의 모든 기능과 화면을 담당

### Mobile (apps/mobile)

Expo 기반의 WebView Shell입니다.

- **기술 스택**: Expo 52, React Native, react-native-webview
- **역할**: 웹을 감싸는 껍데기 앱, 네이티브 기능 최소 사용
- **사용 라이브러리**: expo-notifications, expo-linking

> ⚠️ 모바일 앱에는 비즈니스 로직, 화면 상태를 두지 않습니다.

## 📦 패키지 구조

### @wholly/types

공통 타입 정의 (Step, Checklist, User 등)

### @wholly/core

비즈니스 로직 (Step/Checklist 모델, 진행 상태 관리, 로컬 저장소)

### @wholly/bridge

Web ↔ Native 메시지 인터페이스

```typescript
// Web → Native
type WebToNative =
  | { type: 'READY' }
  | { type: 'REQUEST_PUSH' }
  | { type: 'OPEN_EXTERNAL_URL'; payload: { url: string } };

// Native → Web
type NativeToWeb =
  | { type: 'PUSH_GRANTED'; payload: { token: string } }
  | { type: 'DEEP_LINK'; payload: { path: string } };
```

### @wholly/ui-web

웹 전용 UI 컴포넌트 (Button, Card, Checkbox, Progress 등)

### @wholly/config

ESLint, TypeScript, Prettier 공통 설정

## 💾 상태 저장 전략

| 상태 종류 | 저장 위치 |
|----------|----------|
| 체크 상태 | localStorage |
| 로그인 전 | 로컬 저장 |
| 로그인 후 | 서버 동기화 |

## 🔔 Push & DeepLink

### Push 알림

1. Expo에서 push token 발급
2. WebView로 전달
3. 서버에 저장
4. 알림 클릭 시 특정 URL로 이동

### DeepLink

- `/step/arrival` 같은 URL 사용
- WebView에서 그대로 라우팅 처리

## 🔄 eject 이후 시나리오

### eject 시 변경되는 것

- Expo 런타임 제거
- iOS / Android 네이티브 프로젝트 생성
- 빌드/배포 방식 변경

### 유지되는 것

- WebView 구조
- bridge / core / web 코드
- 전체 아키텍처

> eject는 구조 변경이 아니라 **환경 전환 작업**입니다.

## 📝 라이선스

Private
