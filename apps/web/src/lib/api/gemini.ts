import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || '';
const genAI = new GoogleGenerativeAI(apiKey);

export interface PackingInput {
  destination: string;
  departureMonth: string;
  purpose: string;
}

export interface PackingItem {
  id: string;
  category: string;
  name: string;
  reason: string;
  isRequired: boolean;
  isAIGenerated: boolean;
}

export interface PackingListResponse {
  items: PackingItem[];
}

const ESSENTIAL_ITEMS: PackingItem[] = [
  {
    id: 'essential-1',
    category: '필수 서류',
    name: '여권',
    reason: '입국 필수',
    isRequired: true,
    isAIGenerated: false,
  },
  {
    id: 'essential-2',
    category: '필수 서류',
    name: '비자 승인 레터',
    reason: '입국 심사 시 제출',
    isRequired: true,
    isAIGenerated: false,
  },
  {
    id: 'essential-3',
    category: '금융',
    name: '신용카드/체크카드',
    reason: '현지 결제 수단',
    isRequired: true,
    isAIGenerated: false,
  },
  {
    id: 'essential-4',
    name: '여행자 보험',
    category: '서류',
    reason: '워홀 전용 보험',
    isRequired: true,
    isAIGenerated: false,
  },
  {
    id: 'essential-5',
    name: '잔고 증명서',
    category: '서류',
    reason: 'AUD $5,000 이상',
    isRequired: true,
    isAIGenerated: false,
  },
];

export async function generatePackingList(data: {
  destination: string;
  season: string;
  purpose: string;
  duration: string;
}): Promise<PackingItem[]> {
  try {
    const response = await fetch('/api/gemini', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('API 요청 실패');
    }

    const parsed: PackingListResponse = await response.json();

    return [...ESSENTIAL_ITEMS, ...parsed.items];
  } catch (error) {
    console.error('Error generating packing list:', error);
    throw new Error('짐싸기 리스트 생성에 실패했습니다.');
  }
}
