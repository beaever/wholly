export interface ExchangeRate {
  base: string;
  date: string;
  rates: {
    [currency: string]: number;
  };
}

export async function getExchangeRate(
  from: string = 'AUD',
  to: string = 'KRW'
): Promise<ExchangeRate | null> {
  try {
    const response = await fetch(
      `https://api.frankfurter.app/latest?from=${from}&to=${to}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch exchange rate');
    }
    
    const data: ExchangeRate = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching exchange rate:', error);
    return null;
  }
}

export function formatExchangeRate(rate: number): string {
  return new Intl.NumberFormat('ko-KR', {
    maximumFractionDigits: 0,
  }).format(rate);
}
