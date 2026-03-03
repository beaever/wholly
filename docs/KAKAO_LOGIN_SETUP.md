# 카카오 로그인 설정 가이드

## 🔧 Supabase 설정

### 1. Supabase 대시보드에서 Kakao Provider 활성화

1. [Supabase Dashboard](https://supabase.com/dashboard) 접속
2. 프로젝트 선택
3. 왼쪽 메뉴: **Authentication** → **Providers**
4. **Kakao** 찾아서 **Enable** 토글 켜기
5. Redirect URL 확인 (나중에 사용):
   ```
   https://[YOUR_PROJECT_REF].supabase.co/auth/v1/callback
   ```

---

## 🥥 Kakao Developers 설정

### 2. Kakao 애플리케이션 생성

1. [Kakao Developers](https://developers.kakao.com/) 접속 및 로그인
2. **내 애플리케이션** 클릭
3. **애플리케이션 추가하기** 클릭
4. 앱 이름 입력 (예: "Wholly") 후 저장

### 3. 플랫폼 등록

1. 생성한 앱 선택
2. **앱 설정** → **플랫폼**
3. **Web 플랫폼 등록** 클릭
4. 사이트 도메인 등록:
   - 개발: `http://localhost:3000`
   - 프로덕션: `https://wholly.app`

### 4. 카카오 로그인 활성화

1. **제품 설정** → **카카오 로그인**
2. **활성화 설정** ON
3. **Redirect URI** 등록:
   ```
   https://[YOUR_PROJECT_REF].supabase.co/auth/v1/callback
   ```
   > ⚠️ Supabase에서 확인한 정확한 URL을 입력하세요!

### 5. 동의 항목 설정

1. **제품 설정** → **카카오 로그인** → **동의 항목**
2. 다음 항목들을 **필수 동의**로 설정:
   - 닉네임 (nickname)
   - 프로필 사진 (profile_image)
   - 카카오계정(이메일) - 선택 동의로 설정 가능

### 6. API 키 확인

1. **앱 설정** → **앱 키**
2. **REST API 키** 복사 (이것이 Client ID입니다)
   - 예시: `8094aaccbf5d0f8dc10d17f2cb44ed5b`

### 7. Client Secret 생성 (선택사항)

1. **제품 설정** → **카카오 로그인** → **보안**
2. **Client Secret** → **코드 생성** 클릭
3. 생성된 코드 복사
4. **활성화** 상태로 변경

---

## 🔐 Supabase에 Kakao 정보 입력

1. Supabase Dashboard → **Authentication** → **Providers** → **Kakao**
2. 다음 정보 입력:
   - **Kakao Client ID**: REST API 키
   - **Kakao Client Secret**: (생성했다면) Client Secret 코드
3. **Save** 클릭

---

## 📊 데이터베이스 마이그레이션

users 테이블에 프로필 정보 컬럼을 추가해야 합니다:

```sql
-- Supabase SQL Editor에서 실행
ALTER TABLE users
ADD COLUMN IF NOT EXISTS name TEXT,
ADD COLUMN IF NOT EXISTS avatar_url TEXT;

COMMENT ON COLUMN users.name IS 'User display name from OAuth provider (e.g., Kakao)';
COMMENT ON COLUMN users.avatar_url IS 'User profile picture URL from OAuth provider (e.g., Kakao)';
```

또는 마이그레이션 파일 실행:

```bash
# 로컬에서 Supabase CLI 사용 시
supabase db push
```

---

## ✅ 테스트

1. 로컬 개발 서버 실행:

   ```bash
   pnpm dev
   ```

2. `http://localhost:3000/login` 접속

3. 카카오 로그인 버튼 클릭

4. 카카오 계정으로 로그인

5. 동의 화면에서 필수 항목 동의

6. 로그인 성공 후 프로필 정보 확인

---

## 🐛 트러블슈팅

### KOE101 에러 (Invalid client_id)

- **원인**: Supabase에 입력한 Kakao Client ID가 잘못되었거나 누락됨
- **해결**:
  1. Kakao Developers → **앱 설정** → **앱 키**에서 **REST API 키** 확인
  2. Supabase Dashboard → **Authentication** → **Providers** → **Kakao**
  3. **Kakao Client ID**에 REST API 키를 정확히 입력 (공백 없이)
  4. **Save** 클릭 후 재시도

### "Unsupported provider" 에러

- Supabase에서 Kakao Provider가 활성화되어 있는지 확인
- Kakao Client ID/Secret이 올바르게 입력되었는지 확인

### Redirect URI 에러

- Kakao Developers에 등록한 Redirect URI가 Supabase URL과 정확히 일치하는지 확인
- `https://` 프로토콜 확인

### 프로필 정보가 안 보임

- Kakao Developers에서 동의 항목이 올바르게 설정되었는지 확인
- users 테이블에 name, avatar_url 컬럼이 추가되었는지 확인

### 로컬에서 테스트 안됨

- Kakao Developers 플랫폼에 `http://localhost:3000`이 등록되어 있는지 확인
- 브라우저 쿠키/캐시 삭제 후 재시도

---

## 📝 참고 자료

- [Supabase Auth with Kakao](https://supabase.com/docs/guides/auth/social-login/auth-kakao)
- [Kakao Developers 문서](https://developers.kakao.com/docs/latest/ko/kakaologin/common)
