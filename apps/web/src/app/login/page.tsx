'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  signInWithKakao,
  signInWithGoogle,
  signInWithApple,
} from '@/lib/supabase/auth';

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSocialLogin = async (provider: string) => {
    setIsLoading(true);
    try {
      let result;
      if (provider === 'kakao') {
        result = await signInWithKakao();
      } else if (provider === 'google') {
        result = await signInWithGoogle();
      } else if (provider === 'apple') {
        result = await signInWithApple();
      }

      if (result?.error) {
        console.error('Login error:', result.error);
        alert('로그인 중 오류가 발생했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('로그인 중 오류가 발생했습니다. 다시 시도해주세요.');
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
          onClick={() => handleSocialLogin('kakao')}
          disabled={isLoading}
          className='mb-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#FEE500] py-4 text-[15px] font-bold text-[#191919] transition-transform active:scale-[0.98] disabled:opacity-50'
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

        {/* Apple */}
        <button
          onClick={() => handleSocialLogin('apple')}
          disabled={isLoading}
          className='mb-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-black py-4 text-[15px] font-bold text-white transition-transform active:scale-[0.98] disabled:opacity-50 dark:bg-white dark:text-black'
        >
          <svg width='20' height='20' viewBox='0 0 20 20' fill='currentColor'>
            <path d='M14.5 1.5c.9 1.1 1.5 2.5 1.4 4-.1 0-2.8.2-4.1-2.3-.1-.2-.2-.4-.2-.6 1.3-.5 2.2-1 2.9-1.1zm-1.4 5.1c.8 0 2.3-.5 3.9-.5 3.1 0 4.3 2.2 4.3 2.2s-2.4 1.2-2.4 4.2c0 3.4 3 4.6 3 4.6s-2.1 5.9-4.9 5.9c-1.3 0-2.3-.9-3.7-.9-1.4 0-2.6.9-3.8.9-2.6 0-5.9-5.6-5.9-10.1 0-4.4 2.7-6.7 5.3-6.7 1.4 0 2.5.9 3.4.9.8 0 2-.9 3.8-.9l-.1.4z' />
          </svg>
          Apple로 시작하기
        </button>

        {/* Google */}
        <button
          onClick={() => handleSocialLogin('google')}
          disabled={isLoading}
          className='mb-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-border bg-surface py-4 text-[15px] font-bold text-text transition-transform active:scale-[0.98] disabled:opacity-50'
        >
          <svg width='20' height='20' viewBox='0 0 20 20'>
            <path
              d='M19.6 10.2c0-.7-.1-1.4-.2-2H10v3.8h5.4c-.2 1.2-1 2.3-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.3z'
              fill='#4285F4'
            />
            <path
              d='M10 20c2.7 0 5-0.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H1.1v2.6C2.7 17.8 6.1 20 10 20z'
              fill='#34A853'
            />
            <path
              d='M4.4 12c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V5.4H1.1C.4 6.8 0 8.4 0 10s.4 3.2 1.1 4.6L4.4 12z'
              fill='#FBBC05'
            />
            <path
              d='M10 4c1.5 0 2.8.5 3.8 1.5l2.9-2.9C15 1 12.7 0 10 0 6.1 0 2.7 2.2 1.1 5.4l3.3 2.6C5.2 5.8 7.4 4 10 4z'
              fill='#EA4335'
            />
          </svg>
          Google로 시작하기
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
