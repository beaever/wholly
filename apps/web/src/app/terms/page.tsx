import Link from 'next/link';

export default function TermsPage() {
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
          <h1 className="text-3xl font-bold text-primary">이용약관</h1>
          <p className="mt-2 text-sm text-text-secondary">
            최종 수정일: 2026년 3월 4일
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-text">
          {/* 제1조 */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-primary">
              제1조 (목적)
            </h2>
            <p className="leading-relaxed text-text-secondary">
              본 약관은 Wholly(이하 "서비스")가 제공하는 워킹홀리데이 준비 및 정보 제공 서비스의 이용과 관련하여 서비스와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
            </p>
          </section>

          {/* 제2조 */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-primary">
              제2조 (정의)
            </h2>
            <div className="space-y-3 leading-relaxed text-text-secondary">
              <p>본 약관에서 사용하는 용어의 정의는 다음과 같습니다:</p>
              <ol className="list-decimal space-y-2 pl-6">
                <li>
                  "서비스"란 Wholly가 제공하는 워킹홀리데이 준비 가이드, 체크리스트, 커뮤니티 등 모든 서비스를 의미합니다.
                </li>
                <li>
                  "이용자"란 본 약관에 따라 서비스를 이용하는 회원 및 비회원을 말합니다.
                </li>
                <li>
                  "회원"이란 서비스에 로그인하여 본 약관에 따라 서비스를 이용하는 자를 말합니다.
                </li>
                <li>
                  "콘텐츠"란 서비스에서 제공하는 가이드, 정보, 게시물 등 모든 자료를 의미합니다.
                </li>
              </ol>
            </div>
          </section>

          {/* 제3조 */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-primary">
              제3조 (약관의 효력 및 변경)
            </h2>
            <div className="space-y-3 leading-relaxed text-text-secondary">
              <ol className="list-decimal space-y-2 pl-6">
                <li>
                  본 약관은 서비스를 이용하고자 하는 모든 이용자에게 그 효력이 발생합니다.
                </li>
                <li>
                  서비스는 필요한 경우 관련 법령을 위배하지 않는 범위에서 본 약관을 변경할 수 있습니다.
                </li>
                <li>
                  약관이 변경되는 경우, 서비스는 변경사항을 시행일자 7일 전부터 공지합니다.
                </li>
                <li>
                  이용자가 변경된 약관에 동의하지 않는 경우, 서비스 이용을 중단하고 탈퇴할 수 있습니다.
                </li>
              </ol>
            </div>
          </section>

          {/* 제4조 */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-primary">
              제4조 (회원가입)
            </h2>
            <div className="space-y-3 leading-relaxed text-text-secondary">
              <ol className="list-decimal space-y-2 pl-6">
                <li>
                  회원가입은 카카오톡 소셜 로그인을 통해 진행됩니다.
                </li>
                <li>
                  이용자는 본 약관 및 개인정보 처리방침에 동의함으로써 회원가입을 신청합니다.
                </li>
                <li>
                  서비스는 다음 각 호에 해당하는 경우 회원가입을 거부하거나 제한할 수 있습니다:
                  <ul className="mt-2 list-disc space-y-1 pl-6">
                    <li>타인의 정보를 도용한 경우</li>
                    <li>허위 정보를 기재한 경우</li>
                    <li>관련 법령을 위반한 경우</li>
                  </ul>
                </li>
              </ol>
            </div>
          </section>

          {/* 제5조 */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-primary">
              제5조 (서비스의 제공)
            </h2>
            <div className="space-y-3 leading-relaxed text-text-secondary">
              <p>서비스는 다음과 같은 서비스를 제공합니다:</p>
              <ol className="list-decimal space-y-2 pl-6">
                <li>워킹홀리데이 준비 단계별 가이드</li>
                <li>체크리스트 및 진행상황 관리</li>
                <li>AI 기반 짐싸기 추천</li>
                <li>환율 정보 제공</li>
                <li>커뮤니티 및 정보 공유</li>
                <li>기타 서비스가 추가로 제공하는 서비스</li>
              </ol>
            </div>
          </section>

          {/* 제6조 */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-primary">
              제6조 (서비스의 중단)
            </h2>
            <div className="space-y-3 leading-relaxed text-text-secondary">
              <ol className="list-decimal space-y-2 pl-6">
                <li>
                  서비스는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신두절 등의 사유가 발생한 경우 서비스의 제공을 일시적으로 중단할 수 있습니다.
                </li>
                <li>
                  서비스는 천재지변, 국가비상사태 등 불가항력적 사유가 있는 경우 서비스의 전부 또는 일부를 제한하거나 중단할 수 있습니다.
                </li>
                <li>
                  서비스 중단의 경우 사전에 공지하며, 부득이한 경우 사후에 공지할 수 있습니다.
                </li>
              </ol>
            </div>
          </section>

          {/* 제7조 */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-primary">
              제7조 (이용자의 의무)
            </h2>
            <div className="space-y-3 leading-relaxed text-text-secondary">
              <p>이용자는 다음 행위를 하여서는 안 됩니다:</p>
              <ol className="list-decimal space-y-2 pl-6">
                <li>타인의 정보 도용</li>
                <li>서비스의 정보 변경</li>
                <li>서비스가 정한 정보 이외의 정보 송신 또는 게시</li>
                <li>타인의 명예를 손상시키거나 불이익을 주는 행위</li>
                <li>음란물, 불법 정보 등을 게시하는 행위</li>
                <li>서비스의 운영을 방해하는 행위</li>
                <li>관련 법령을 위반하는 행위</li>
              </ol>
            </div>
          </section>

          {/* 제8조 */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-primary">
              제8조 (저작권 및 지적재산권)
            </h2>
            <div className="space-y-3 leading-relaxed text-text-secondary">
              <ol className="list-decimal space-y-2 pl-6">
                <li>
                  서비스가 제공하는 콘텐츠에 대한 저작권 및 지적재산권은 서비스에 귀속됩니다.
                </li>
                <li>
                  이용자는 서비스를 이용함으로써 얻은 정보를 서비스의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 등 기타 방법으로 이용하거나 제3자에게 이용하게 할 수 없습니다.
                </li>
                <li>
                  이용자가 작성한 게시물에 대한 권리는 이용자에게 있으나, 서비스는 이를 서비스 내에서 사용할 수 있습니다.
                </li>
              </ol>
            </div>
          </section>

          {/* 제9조 */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-primary">
              제9조 (면책조항)
            </h2>
            <div className="space-y-3 leading-relaxed text-text-secondary">
              <ol className="list-decimal space-y-2 pl-6">
                <li>
                  서비스는 천재지변, 전쟁, 기간통신사업자의 서비스 중지 등 불가항력으로 인해 서비스를 제공할 수 없는 경우 책임이 면제됩니다.
                </li>
                <li>
                  서비스는 이용자의 귀책사유로 인한 서비스 이용 장애에 대하여 책임을 지지 않습니다.
                </li>
                <li>
                  서비스는 이용자가 서비스를 이용하여 기대하는 수익을 얻지 못하거나 상실한 것에 대하여 책임을 지지 않습니다.
                </li>
                <li>
                  서비스는 이용자 간 또는 이용자와 제3자 간 발생한 분쟁에 대해 개입할 의무가 없으며 이로 인한 손해를 배상할 책임이 없습니다.
                </li>
              </ol>
            </div>
          </section>

          {/* 제10조 */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-primary">
              제10조 (분쟁 해결)
            </h2>
            <div className="space-y-3 leading-relaxed text-text-secondary">
              <ol className="list-decimal space-y-2 pl-6">
                <li>
                  서비스와 이용자 간 발생한 분쟁에 관한 소송은 대한민국 법을 준거법으로 합니다.
                </li>
                <li>
                  서비스와 이용자 간 제기된 소송은 서비스의 본사 소재지를 관할하는 법원을 전속 관할 법원으로 합니다.
                </li>
              </ol>
            </div>
          </section>

          {/* 부칙 */}
          <section className="border-t border-border pt-8">
            <h2 className="mb-4 text-xl font-bold text-primary">부칙</h2>
            <p className="leading-relaxed text-text-secondary">
              본 약관은 2026년 3월 4일부터 시행됩니다.
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
