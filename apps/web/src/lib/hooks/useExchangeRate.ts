'use client';

import { useState, useEffect } from 'react';
import { getExchangeRate, formatExchangeRate } from '@/lib/api/exchange';

export function useExchangeRate(from: string = 'AUD', to: string = 'KRW') {
  const [rate, setRate] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRate() {
      try {
        setLoading(true);
        const data = await getExchangeRate(from, to);
        
        if (data && data.rates[to]) {
          setRate(data.rates[to]);
        } else {
          setError('환율 정보를 가져올 수 없습니다');
        }
      } catch (err) {
        setError('환율 정보를 가져오는 중 오류가 발생했습니다');
      } finally {
        setLoading(false);
      }
    }

    fetchRate();
  }, [from, to]);

  return {
    rate,
    formattedRate: rate ? formatExchangeRate(rate) : null,
    loading,
    error,
  };
}
