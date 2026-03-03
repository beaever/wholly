import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-bg px-6 py-12">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/login"
            className="mb-4 inline-flex items-center text-sm text-text-secondary hover:text-primary"
          >
            ← 돌아가기
          </Link>
          <h1 className="text-3xl font-bold text-primary">개인정보 처리방침</h1>
          <p className="mt-2 text-sm text-text-secondary">
            최종 수정일: 2026년 3월 4일
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-text">
          {/* 제1조 */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-primary">
              제1조 (개인정보의 처리 목적)
            </h2>
            <div className="space-y-3 leading-relaxed text-text-secondary">
              <p>
                Wholly(이하 "서비스")는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
              </p>
              <ol className="list-decimal space-y-2 pl-6">
                <li>
                  <strong>회원 가입 및 관리</strong>
                  <p className="mt-1">
                    회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스 부정이용 방지 목적으로 개인정보를 처리합니다.
                  </p>
                </li>
                <li>
                  <strong>서비스 제공</strong>
                  <p className="mt-1">
                    워킹홀리데이 준비 가이드, 체크리스트 관리, AI 기반 추천, 환율 정보 제공 등 서비스 제공을 위해 개인정보를 처리합니다.
                  </p>
                </li>
                <li>
                  <strong>서비스 개선</strong>
                  <p className="mt-1">
                    서비스 이용 통계 분석, 신규 서비스 개발 및 맞춤 서비스 제공을 위해 개인정보를 처리합니다.
                  </p>
                </li>
              </ol>
            </div>
          </section>

          {/* 제2조 */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-primary">
              제2조 (처리하는 개인정보의 항목)
            </h2>
            <div className="space-y-3 leading-relaxed text-text-secondary">
              <p>서비스는 다음의 개인정보 항목을 처리하고 있습니다:</p>
              
              <div className="mt-4">
                <h3 className="mb-2 font-semibold text-text">1. 카카오 소셜 로그인</h3>
                <ul className="list-disc space-y-1 pl-6">
                  <li>필수항목: 카카오 계정 ID, 닉네임, 프로필 사진</li>
                  <li>선택항목: 이메일 주소</li>
                </ul>
              </div>

              <div className="mt-4">
                <h3 className="mb-2 font-semibold text-text">2. 서비스 이용 과정에서 자동 수집되는 정보</h3>
                <ul className="list-disc space-y-1 pl-6">
                  <li>IP 주소, 쿠키, 서비스 이용 기록</li>
                  <li>기기 정보 (OS, 브라우저 종류)</li>
                  <li>접속 로그, 방문 일시</li>
                </ul>
              </div>

              <div className="mt-4">
                <h3 className="mb-2 font-semibold text-text">3. 서비스 이용 정보</h3>
                <ul className="list-disc space-y-1 pl-6">
                  <li>체크리스트 진행 상황</li>
                  <li>짐싸기 리스트</li>
                  <li>관심 국가 및 설정 정보</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 제3조 */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-primary">
              제3조 (개인정보의 처리 및 보유 기간)
            </h2>
            <div className="space-y-3 leading-relaxed text-text-secondary">
              <ol className="list-decimal space-y-2 pl-6">
                <li>
                  서비스는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
                </li>
                <li>
                  회원 탈퇴 시 개인정보는 즉시 파기됩니다. 단, 관계 법령에 따라 보존할 필요가 있는 경우 해당 기간 동안 보관합니다:
                  <ul className="mt-2 list-disc space-y-1 pl-6">
                    <li>부정이용 기록: 1년 (부정이용 방지 목적)</li>
                    <li>서비스 이용 기록: 3개월 (통신비밀보호법)</li>
                  </ul>
                </li>
              </ol>
            </div>
          </section>

          {/* 제4조 */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-primary">
              제4조 (개인정보의 제3자 제공)
            </h2>
            <div className="space-y-3 leading-relaxed text-text-secondary">
              <p>
                서비스는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다:
              </p>
              <ol className="list-decimal space-y-2 pl-6">
                <li>이용자가 사전에 동의한 경우</li>
                <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
              </ol>
            </div>
          </section>

          {/* 제5조 */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-primary">
              제5조 (개인정보 처리의 위탁)
            </h2>
            <div className="space-y-3 leading-relaxed text-text-secondary">
              <p>서비스는 원활한 서비스 제공을 위해 다음과 같이 개인정보 처리업무를 위탁하고 있습니다:</p>
              
              <div className="mt-4 overflow-x-auto">
                <table className="w-full border-collapse border border-border text-sm">
                  <thead>
                    <tr className="bg-surface">
                      <th className="border border-border px-4 py-2 text-left">수탁업체</th>
                      <th className="border border-border px-4 py-2 text-left">위탁업무 내용</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border px-4 py-2">Supabase</td>
                      <td className="border border-border px-4 py-2">데이터베이스 및 인증 서비스 제공</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-2">Google (Gemini AI)</td>
                      <td className="border border-border px-4 py-2">AI 기반 짐싸기 추천 서비스</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-2">Kakao</td>
                      <td className="border border-border px-4 py-2">소셜 로그인 서비스</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4">
                서비스는 위탁계약 체결 시 개인정보 보호법 제26조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리·감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.
              </p>
            </div>
          </section>

          {/* 제6조 */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-primary">
              제6조 (정보주체의 권리·의무 및 행사방법)
            </h2>
            <div className="space-y-3 leading-relaxed text-text-secondary">
              <p>정보주체는 서비스에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다:</p>
              <ol className="list-decimal space-y-2 pl-6">
                <li>개인정보 열람 요구</li>
                <li>오류 등이 있을 경우 정정 요구</li>
                <li>삭제 요구</li>
                <li>처리정지 요구</li>
              </ol>
              <p className="mt-4">
                위 권리 행사는 서비스 내 설정 메뉴 또는 고객센터를 통해 하실 수 있으며, 서비스는 이에 대해 지체없이 조치하겠습니다.
              </p>
            </div>
          </section>

          {/* 제7조 */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-primary">
              제7조 (개인정보의 파기)
            </h2>
            <div className="space-y-3 leading-relaxed text-text-secondary">
              <ol className="list-decimal space-y-2 pl-6">
                <li>
                  <strong>파기절차</strong>
                  <p className="mt-1">
                    이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우 별도의 서류) 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다.
                  </p>
                </li>
                <li>
                  <strong>파기방법</strong>
                  <ul className="mt-2 list-disc space-y-1 pl-6">
                    <li>전자적 파일 형태: 복구 및 재생되지 않도록 안전하게 삭제</li>
                    <li>종이 문서: 분쇄기로 분쇄하거나 소각</li>
                  </ul>
                </li>
              </ol>
            </div>
          </section>

          {/* 제8조 */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-primary">
              제8조 (개인정보의 안전성 확보 조치)
            </h2>
            <div className="space-y-3 leading-relaxed text-text-secondary">
              <p>서비스는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다:</p>
              <ol className="list-decimal space-y-2 pl-6">
                <li>
                  <strong>관리적 조치</strong>: 내부관리계획 수립·시행, 정기적 직원 교육
                </li>
                <li>
                  <strong>기술적 조치</strong>: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 개인정보의 암호화, 보안프로그램 설치
                </li>
                <li>
                  <strong>물리적 조치</strong>: 전산실, 자료보관실 등의 접근통제
                </li>
              </ol>
            </div>
          </section>

          {/* 제9조 */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-primary">
              제9조 (쿠키의 운영)
            </h2>
            <div className="space-y-3 leading-relaxed text-text-secondary">
              <ol className="list-decimal space-y-2 pl-6">
                <li>
                  서비스는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다.
                </li>
                <li>
                  쿠키는 웹사이트를 운영하는데 이용되는 서버가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자의 PC 컴퓨터내의 하드디스크에 저장되기도 합니다.
                </li>
                <li>
                  이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.
                </li>
              </ol>
            </div>
          </section>

          {/* 제10조 */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-primary">
              제10조 (개인정보 보호책임자)
            </h2>
            <div className="space-y-3 leading-relaxed text-text-secondary">
              <p>
                서비스는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
              </p>
              
              <div className="mt-4 rounded-lg bg-surface p-4">
                <h3 className="mb-2 font-semibold text-text">개인정보 보호책임자</h3>
                <ul className="space-y-1 text-sm">
                  <li>이메일: privacy@wholly.app</li>
                  <li>문의: 서비스 내 고객센터</li>
                </ul>
              </div>

              <p className="mt-4">
                정보주체는 서비스의 서비스를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자에게 문의하실 수 있습니다. 서비스는 정보주체의 문의에 대해 지체없이 답변 및 처리해드릴 것입니다.
              </p>
            </div>
          </section>

          {/* 제11조 */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-primary">
              제11조 (개인정보 처리방침 변경)
            </h2>
            <div className="space-y-3 leading-relaxed text-text-secondary">
              <ol className="list-decimal space-y-2 pl-6">
                <li>
                  이 개인정보 처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
                </li>
                <li>
                  다만, 개인정보의 수집 및 활용, 제3자 제공 등과 같이 이용자 권리의 중요한 변경이 있을 경우에는 최소 30일 전에 고지합니다.
                </li>
              </ol>
            </div>
          </section>

          {/* 부칙 */}
          <section className="border-t border-border pt-8">
            <h2 className="mb-4 text-xl font-bold text-primary">부칙</h2>
            <p className="leading-relaxed text-text-secondary">
              본 방침은 2026년 3월 4일부터 시행됩니다.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-12 border-t border-border pt-8 text-center">
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 font-semibold text-white hover:bg-accent/90"
          >
            확인
          </Link>
        </div>
      </div>
    </main>
  );
}
