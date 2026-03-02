'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PackingWizard, PackingList } from '@/components/packing';
import { generatePackingList, type PackingItem } from '@/lib/api/gemini';
import { PackingListSkeleton } from '@/components/common/skeleton';

export default function PackingPage() {
  const router = useRouter();
  const [step, setStep] = useState<'wizard' | 'list'>('wizard');
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<PackingItem[]>([]);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const handleWizardSubmit = async (data: {
    destination: string;
    departureMonth: string;
    purpose: string;
  }) => {
    setLoading(true);
    try {
      const generatedItems = await generatePackingList(data);
      setItems(generatedItems);
      setStep('list');
    } catch (error) {
      console.error('Error generating packing list:', error);
      alert('짐싸기 리스트 생성 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = (id: string) => {
    setCheckedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleReset = () => {
    setStep('wizard');
    setItems([]);
    setCheckedItems(new Set());
  };

  return (
    <main className='min-h-screen bg-bg pb-[100px]'>
      <header className='sticky top-0 z-10 flex items-center gap-3 border-b border-border bg-surface/90 px-6 py-4 backdrop-blur-sm'>
        <button
          onClick={() => router.back()}
          className='flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-accent/10'
        >
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            className='text-primary'
          >
            <path
              d='M12.5 15L7.5 10L12.5 5'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
        <h1 className='flex-1 text-lg font-bold text-primary'>
          짐싸기 체크리스트
        </h1>
        {step === 'list' && (
          <button
            onClick={handleReset}
            className='text-sm font-semibold text-accent'
          >
            다시 생성
          </button>
        )}
      </header>

      <div className='mx-auto max-w-[600px] px-6 py-6'>
        {loading ? (
          <PackingListSkeleton />
        ) : step === 'wizard' ? (
          <div>
            <div className='mb-6'>
              <h2 className='mb-2 text-xl font-bold text-primary'>
                맞춤형 짐싸기 리스트 🎒
              </h2>
              <p className='text-sm leading-relaxed text-text-secondary'>
                목적지, 시기, 목적에 맞는 짐싸기 리스트를 AI가 추천해드립니다.
                기본 필수품과 함께 현지 날씨와 환경을 고려한 아이템을
                확인하세요.
              </p>
            </div>
            <PackingWizard onSubmit={handleWizardSubmit} loading={loading} />
          </div>
        ) : (
          <PackingList
            items={items}
            checkedItems={checkedItems}
            onToggle={handleToggle}
          />
        )}
      </div>
    </main>
  );
}
