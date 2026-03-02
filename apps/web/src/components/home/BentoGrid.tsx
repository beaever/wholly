'use client';

import Link from 'next/link';
import { useExchangeRate } from '@/lib/hooks/useExchangeRate';
import { ExchangeRateSkeleton } from '@/components/common/skeleton';

interface BentoCardProps {
  icon: string;
  title: string;
  subtitle: string;
  href?: string;
  span?: boolean;
}

function BentoCard({
  icon,
  title,
  subtitle,
  href = '#',
  span,
}: BentoCardProps) {
  const content = (
    <>
      {!span && (
        <div className='mb-2.5 flex h-11 w-11 items-center justify-center rounded-xl bg-border-light text-2xl'>
          {icon}
        </div>
      )}
      <div className={span ? 'flex-1' : ''}>
        <h3 className='text-[15px] font-bold text-primary'>{title}</h3>
        <p className='mt-0.5 text-[11px] text-text-muted'>{subtitle}</p>
      </div>
      {span && <span className='text-2xl'>{icon}</span>}
    </>
  );

  return (
    <Link
      href={href}
      className={`flex rounded-[20px] border border-border-light bg-surface p-5 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02)] transition-transform active:scale-[0.98] ${
        span
          ? 'col-span-2 h-auto flex-row items-center'
          : 'h-[120px] flex-col justify-between'
      }`}
    >
      {content}
    </Link>
  );
}

/**
 * @description BentoGrid component
 * @returns {JSX.Element}
 */
export function BentoGrid() {
  const { formattedRate, loading, error } = useExchangeRate('AUD', 'KRW');

  return (
    <section className='grid grid-cols-2 gap-3 px-6'>
      {loading ? (
        <ExchangeRateSkeleton />
      ) : error ? (
        <BentoCard
          icon='💰'
          title='환율 계산'
          subtitle='환율 정보를 불러올 수 없습니다'
          // href='/tools/exchange'
        />
      ) : (
        <BentoCard
          icon='💰'
          title='환율 계산'
          subtitle={`1 AUD = ${formattedRate || '880'} KRW`}
          // href='/tools/exchange'
        />
      )}
      <BentoCard
        icon='🎒'
        title='짐싸기 체크'
        subtitle='필수품 리스트'
        href='/tools/packing'
      />
      <BentoCard
        icon='🛡️'
        title='워홀 보험 특가 📢'
        subtitle='삼성화재 다이렉트 10% 할인'
        href='/promo/insurance'
        span
      />
    </section>
  );
}
