'use client';

import { useParams, useRouter } from 'next/navigation';
import {
  TopBar,
  GuideHero,
  Checklist,
  PromoCard,
  FloatingButton,
} from '@/components/guide';
import { getGuideById } from '@wholly/core';

export default function GuidePage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const guide = getGuideById(id);

  if (!guide) {
    return (
      <main className='flex min-h-screen items-center justify-center bg-bg'>
        <p className='text-text-secondary'>가이드를 찾을 수 없습니다.</p>
      </main>
    );
  }

  const handleComplete = () => {
    router.push('/roadmap');
  };

  const checklistItems = guide.sections.flatMap((section, sectionIdx) =>
    section.content.map((item, itemIdx) => ({
      id: `${guide.id}-${sectionIdx}-${itemIdx}`,
      text: item.subtitle.replace(/^[^\s]+\s/, ''),
      checked: false,
    })),
  );

  return (
    <main className='min-h-screen bg-surface pb-20'>
      <TopBar />
      <GuideHero
        imageUrl={guide.imageUrl}
        step={guide.step}
        title={guide.title}
      />

      <div className='mx-auto max-w-[600px] px-6 pb-20 pt-6'>
        <p className='text-[15px] leading-relaxed text-text-secondary'>
          {guide.intro}
        </p>

        {guide.sections.map((section, idx) => (
          <div key={idx}>
            <h2 className='mb-4 mt-8 border-l-4 border-accent pl-2.5 text-lg font-extrabold text-primary'>
              {section.title}
            </h2>
            {section.content.map((item, i) => (
              <div
                key={i}
                className='mb-2.5 text-[15px] leading-relaxed text-text-secondary'
              >
                <strong className='text-text'>{item.subtitle}</strong>
                <br />
                {item.text}
              </div>
            ))}
          </div>
        ))}

        {guide.tips && guide.tips.length > 0 && (
          <div className='mt-8'>
            <h2 className='mb-4 border-l-4 border-accent pl-2.5 text-lg font-extrabold text-primary'>
              💡 유용한 팁
            </h2>
            <ul className='space-y-2'>
              {guide.tips.map((tip, idx) => (
                <li
                  key={idx}
                  className='flex gap-2 text-[15px] leading-relaxed text-text-secondary'
                >
                  <span className='text-accent'>•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {guide.warnings && guide.warnings.length > 0 && (
          <div className='mt-8'>
            <h2 className='mb-4 border-l-4 border-red-500 pl-2.5 text-lg font-extrabold text-primary'>
              ⚠️ 주의사항
            </h2>
            <ul className='space-y-2'>
              {guide.warnings.map((warning, idx) => (
                <li
                  key={idx}
                  className='flex gap-2 text-[15px] leading-relaxed text-red-600 dark:text-red-400'
                >
                  <span>•</span>
                  <span>{warning}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {guide.promo && (
          <PromoCard
            icon={guide.promo.icon}
            title={guide.promo.title}
            description={guide.promo.description}
            buttonText={guide.promo.buttonText}
            href={guide.promo.href}
          />
        )}

        <h2 className='mb-4 mt-8 border-l-4 border-accent pl-2.5 text-lg font-extrabold text-primary'>
          실전 체크리스트
        </h2>
        <Checklist items={checklistItems} />
      </div>

      <FloatingButton text='이 단계 완료하기 (Next)' onClick={handleComplete} />
    </main>
  );
}
