'use client';

import { Station, type StationStatus } from './Station';

interface StationData {
  id: string;
  status: StationStatus;
  title: string;
  description?: string;
  tag?: string;
  buttonText?: string;
  buttonHref?: string;
}

const STATIONS: StationData[] = [
  {
    id: '1',
    status: 'done',
    title: '워킹홀리데이 준비 시작',
    description: '자격 요건 확인 완료',
    buttonText: '가이드 보기',
    buttonHref: '/roadmap/guide/1',
  },
  {
    id: '2',
    status: 'done',
    title: '워홀 비자 신청',
    description: '비자 승인 완료 (2025.10.15)',
    buttonText: '가이드 보기',
    buttonHref: '/roadmap/guide/2',
  },
  {
    id: '3',
    status: 'done',
    title: '출국 준비',
    description: '항공권 예약 완료 (11월 20일 시드니행)',
    buttonText: '가이드 보기',
    buttonHref: '/roadmap/guide/3',
  },
  {
    id: '4',
    status: 'current',
    title: '임시 숙소 예약',
    description: '초기 정착의 핵심.\n백패커 vs 한인민박 장단점 분석',
    tag: '지금 해야해요!',
    buttonText: '가이드 확인하기',
    buttonHref: '/roadmap/guide/4',
  },
  {
    id: '5',
    status: 'locked',
    title: '입국 및 도착',
    description: '입국 심사 및 SIM 카드 구매',
    buttonText: '가이드 보기',
    buttonHref: '/roadmap/guide/5',
  },
  {
    id: '6',
    status: 'locked',
    title: '은행 계좌 개설',
    description: '현지 은행 계좌 개설 및 체크카드 발급',
    buttonText: '가이드 보기',
    buttonHref: '/roadmap/guide/6',
  },
  {
    id: '7',
    status: 'locked',
    title: 'TFN 신청',
    description: '세금 번호 신청 (Tax File Number)',
    buttonText: '가이드 보기',
    buttonHref: '/roadmap/guide/7',
  },
  {
    id: '8',
    status: 'locked',
    title: '장기 정착',
    description: '쉐어하우스 구하기 및 일자리 찾기',
    buttonText: '가이드 보기',
    buttonHref: '/roadmap/guide/8',
  },
];

export function Timeline() {
  const currentIndex = STATIONS.findIndex((s) => s.status === 'current');
  const progressHeight = currentIndex >= 0 ? (currentIndex + 1) * 120 : 0;

  return (
    <div className='relative px-6 py-[30px]'>
      {/* Track Line */}
      <div className='absolute bottom-0 left-10 top-0 z-0 w-1 rounded-sm bg-border' />
      {/* Progress Line */}
      <div
        className='absolute left-10 top-0 z-0 w-1 rounded-sm bg-[#0F172A] transition-all duration-500 dark:bg-accent'
        style={{ height: `${progressHeight}px` }}
      />

      {/* Stations */}
      <div className='relative z-[1] flex flex-col gap-10'>
        {STATIONS.map((station) => (
          <Station
            key={station.id}
            status={station.status}
            title={station.title}
            description={station.description}
            tag={station.tag}
            buttonText={station.buttonText}
            buttonHref={station.buttonHref}
          />
        ))}
      </div>
    </div>
  );
}
