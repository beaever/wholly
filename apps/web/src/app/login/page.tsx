'use client';

import { useState } from 'react';
import Link from 'next/link';
import { signInWithKakao } from '@/lib/supabase/auth';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleKakaoLogin = async () => {
    setIsLoading(true);
    try {
      const result = await signInWithKakao();

      if (result?.error) {
        console.error('Kakao login error:', result.error);
        alert('카카오 로그인 중 오류가 발생했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('Kakao login error:', error);
      alert('카카오 로그인 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className='flex min-h-screen flex-col bg-bg'>
      {/* Hero Section */}
      <div className='flex flex-1 flex-col items-center justify-center px-6 py-12'>
        {/* Logo */}
        <div className='mb-8 text-center'>
          <h1 className='text-4xl font-black italic tracking-tight text-primary'>
            WHOOLY
          </h1>
          <p className='mt-2 text-sm text-text-secondary'>
            워킹홀리데이의 모든 것
          </p>
        </div>

        {/* Illustration */}
        <div className='mb-10 flex h-[200px] w-[200px] items-center justify-center rounded-full bg-accent/10'>
          <span className='text-8xl'>🌏</span>
        </div>

        {/* Tagline */}
        <div className='mb-10 text-center'>
          <h2 className='text-xl font-bold text-primary'>
            새로운 시작,
            <br />
            함께 준비해요
          </h2>
          <p className='mt-3 text-sm leading-relaxed text-text-secondary'>
            비자 신청부터 현지 정착까지
            <br />
            단계별 가이드로 완벽하게
          </p>
        </div>
      </div>

      {/* Login Buttons */}
      <div className='px-6 pb-10'>
        {/* Kakao */}
        <button
          onClick={handleKakaoLogin}
          disabled={isLoading}
          className='mb-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#FEE500] py-4 text-[15px] font-bold text-[#191919] transition-transform active:scale-[0.98] disabled:opacity-50'
        >
          <svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M10 3C5.58172 3 2 5.79086 2 9.2C2 11.3894 3.52832 13.3117 5.82031 14.3789L4.89062 17.6211C4.82422 17.8477 5.08203 18.0312 5.28125 17.9023L9.17969 15.3398C9.44922 15.3672 9.72266 15.4 10 15.4C14.4183 15.4 18 12.6091 18 9.2C18 5.79086 14.4183 3 10 3Z'
              fill='#191919'
            />
          </svg>
          카카오로 시작하기
        </button>

        {/* Terms */}
        <p className='text-center text-xs leading-relaxed text-text-muted'>
          시작하면{' '}
          <Link href='/terms' className='underline'>
            이용약관
          </Link>{' '}
          및{' '}
          <Link href='/privacy' className='underline'>
            개인정보처리방침
          </Link>
          에 동의하게 됩니다.
        </p>
      </div>
    </main>
  );
}
