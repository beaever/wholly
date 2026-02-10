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
    title: '워홀 비자 신청',
    description: '승인 완료 (2025.10.15)',
  },
  {
    id: '2',
    status: 'done',
    title: '항공권 발권',
    description: '11월 20일 시드니행',
  },
  {
    id: '3',
    status: 'current',
    title: '임시 숙소 예약',
    description: '초기 정착의 핵심.\n백패커 vs 한인민박 장단점 분석',
    tag: '지금 해야해요!',
    buttonText: '가이드 확인하기',
    buttonHref: '#',
  },
  {
    id: '4',
    status: 'locked',
    title: '호주 계좌 개설',
    description: '이전 단계를 완료하면 열립니다',
  },
  {
    id: '5',
    status: 'locked',
    title: 'TFN (세금번호) 신청',
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
