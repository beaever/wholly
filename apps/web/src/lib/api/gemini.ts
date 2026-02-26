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
    category: '전자기기',
    name: '휴대폰 충전기',
    reason: '필수 전자기기',
    isRequired: true,
    isAIGenerated: false,
  },
  {
    id: 'essential-5',
    category: '의류',
    name: '속옷/양말 (1주일분)',
    reason: '기본 의류',
    isRequired: true,
    isAIGenerated: false,
  },
];

export async function generatePackingList(
  input: PackingInput
): Promise<PackingItem[]> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const prompt = `당신은 워킹홀리데이 준비 전문가입니다. 다음 정보를 바탕으로 짐싸기 리스트를 추천해주세요.

목적지: ${input.destination}
출발 시기: ${input.departureMonth}
주요 목적: ${input.purpose}

다음 형식으로 10개의 추천 아이템을 JSON 배열로 반환해주세요:
[
  {
    "category": "카테고리명",
    "name": "아이템명",
    "reason": "추천 이유 (한 문장)"
  }
]

카테고리는 다음 중 하나를 사용하세요: 의류, 전자기기, 생활용품, 의약품, 기타

현지 날씨, 계절, 목적을 고려하여 실용적인 아이템을 추천해주세요.
JSON 배열만 반환하고 다른 설명은 포함하지 마세요.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    const jsonMatch = text.match(/\[[\s\S]*\]/);
    if (!jsonMatch) {
      throw new Error('Invalid response format');
    }

    const aiItems = JSON.parse(jsonMatch[0]);
    
    const generatedItems: PackingItem[] = aiItems.map((item: any, index: number) => ({
      id: `ai-${index + 1}`,
      category: item.category,
      name: item.name,
      reason: item.reason,
      isRequired: false,
      isAIGenerated: true,
    }));

    return [...ESSENTIAL_ITEMS, ...generatedItems];
  } catch (error) {
    console.error('Error generating packing list:', error);
    return ESSENTIAL_ITEMS;
  }
}
