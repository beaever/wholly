'use client';

import { useParams, useRouter } from 'next/navigation';
import { TopBar, GuideHero, Checklist, PromoCard, FloatingButton } from '@/components/guide';

const GUIDE_DATA = {
  '3': {
    step: 'STEP 3',
    title: '임시 숙소 예약하기',
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600',
    intro:
      '호주에 도착해서 바로 쉐어하우스로 들어가는 건 위험해요. 직접 눈으로 집 상태를 확인하기 전까지 머물 임시 숙소(1주~2주)가 필요합니다.',
    sections: [
      {
        title: '어떤 숙소가 좋을까요?',
        content: [
          {
            subtitle: '🎒 백패커 (Backpacker)',
            text: '저렴하고 외국인 친구 사귀기 좋지만, 보안이 취약할 수 있어요. 하루 $30~$50 수준입니다.',
          },
          {
            subtitle: '🏨 한인 민박 / 에어비앤비',
            text: '편안하고 안전하지만 가격이 비쌉니다. 2인 이상이라면 에어비앤비가 합리적일 수 있어요.',
          },
        ],
      },
    ],
    checklist: [
      { id: '1', text: '도착 날짜 확정하기', checked: true },
      { id: '2', text: '숙소 예약 앱(Agoda, Booking) 설치' },
      { id: '3', text: '리뷰 10개 이상 꼼꼼히 읽기 (빈대 조심!)' },
      { id: '4', text: '예약 확정서 캡쳐해두기' },
    ],
    promo: {
      icon: '🏨',
      title: '아고다 워홀러 전용 쿠폰',
      description: '시드니 백패커 예약 시 7% 추가 할인',
      buttonText: '쿠폰받기',
      href: '#',
    },
  },
};

export default function GuidePage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const guide = GUIDE_DATA[id as keyof typeof GUIDE_DATA];

  if (!guide) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-bg">
        <p className="text-text-secondary">가이드를 찾을 수 없습니다.</p>
      </main>
    );
  }

  const handleComplete = () => {
    router.push('/roadmap');
  };

  return (
    <main className="min-h-screen bg-surface pb-20">
      <TopBar />
      <GuideHero imageUrl={guide.imageUrl} step={guide.step} title={guide.title} />

      <div className="mx-auto max-w-[600px] px-6 pb-20 pt-6">
        <p className="text-[15px] leading-relaxed text-text-secondary">
          {guide.intro.split('임시 숙소(1주~2주)').map((part, i) =>
            i === 0 ? (
              <span key={i}>
                {part}
                <strong className="text-text">임시 숙소(1주~2주)</strong>
              </span>
            ) : (
              part
            )
          )}
        </p>

        {guide.sections.map((section, idx) => (
          <div key={idx}>
            <h2 className="mb-4 mt-8 border-l-4 border-accent pl-2.5 text-lg font-extrabold text-primary">
              {section.title}
            </h2>
            {section.content.map((item, i) => (
              <div key={i} className="mb-2.5 text-[15px] leading-relaxed text-text-secondary">
                <strong className="text-text">{item.subtitle}</strong>
                <br />
                {item.text}
              </div>
            ))}
          </div>
        ))}

        <PromoCard
          icon={guide.promo.icon}
          title={guide.promo.title}
          description={guide.promo.description}
          buttonText={guide.promo.buttonText}
          href={guide.promo.href}
        />

        <h2 className="mb-4 mt-8 border-l-4 border-accent pl-2.5 text-lg font-extrabold text-primary">
          실전 체크리스트
        </h2>
        <Checklist items={guide.checklist} />
      </div>

      <FloatingButton text="이 단계 완료하기 (Next)" onClick={handleComplete} />
    </main>
  );
}
