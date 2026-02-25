'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ProfileHeader, StatsCard, MenuSection } from '@/components/my';
import { NavBar } from '@/components/common';

export default function MyPage() {
  const router = useRouter();
  const [user] = useState({
    name: '김워홀',
    email: 'workingholiday@example.com',
    imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100',
  });

  const [stats] = useState({
    saved: 12,
    completed: 8,
    days: 45,
  });

  const handleLogout = () => {
    router.push('/login');
  };

  const accountMenuItems = [
    {
      icon: '👤',
      label: '프로필 수정',
      href: '/my/profile',
    },
    {
      icon: '🔔',
      label: '알림 설정',
      href: '/my/notifications',
    },
    {
      icon: '🌍',
      label: '국가 설정',
      href: '/my/country',
    },
  ];

  const appMenuItems = [
    {
      icon: '📋',
      label: '이용약관',
      href: '/terms',
    },
    {
      icon: '🔒',
      label: '개인정보처리방침',
      href: '/privacy',
    },
    {
      icon: '❓',
      label: '고객센터',
      href: '/support',
    },
    {
      icon: 'ℹ️',
      label: '앱 정보',
      href: '/about',
    },
  ];

  const dangerMenuItems = [
    {
      icon: '🚪',
      label: '로그아웃',
      onClick: handleLogout,
      variant: 'danger' as const,
    },
  ];

  return (
    <main className="min-h-screen bg-bg pb-[100px]">
      <header className="px-6 py-5">
        <h1 className="text-[26px] font-extrabold text-primary">MY</h1>
      </header>

      <ProfileHeader
        name={user.name}
        email={user.email}
        imageUrl={user.imageUrl}
      />

      <div className="mb-8 flex gap-3 px-6">
        <StatsCard icon="🔖" label="저장한 글" value={stats.saved} />
        <StatsCard icon="✅" label="완료한 단계" value={stats.completed} />
        <StatsCard icon="📅" label="D+{stats.days}" value={stats.days} />
      </div>

      <MenuSection title="계정" items={accountMenuItems} />
      <MenuSection title="앱 정보" items={appMenuItems} />
      <MenuSection title="" items={dangerMenuItems} />

      <div className="px-6 py-4 text-center">
        <p className="text-xs text-text-muted">Version 1.0.0</p>
      </div>

      <NavBar />
    </main>
  );
}
