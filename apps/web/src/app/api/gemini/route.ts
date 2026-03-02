import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(request: NextRequest) {
  try {
    const { destination, season, purpose, duration } = await request.json();

    if (!destination || !season || !purpose || !duration) {
      return NextResponse.json(
        { error: '모든 필드를 입력해주세요.' },
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });

    const prompt = `당신은 워킹홀리데이 준비 전문가입니다. 다음 조건에 맞는 짐싸기 리스트를 JSON 형식으로 생성해주세요.

목적지: ${destination}
계절: ${season}
목적: ${purpose}
기간: ${duration}

다음 JSON 형식으로 응답해주세요:
{
  "items": [
    {
      "id": "unique-id",
      "name": "아이템 이름",
      "category": "카테고리",
      "isRequired": true/false,
      "description": "간단한 설명"
    }
  ]
}

카테고리는 다음 중 하나를 사용하세요: "의류", "전자기기", "서류", "생활용품", "의약품", "기타"
최소 20개 이상의 아이템을 추천해주세요.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('JSON 파싱 실패');
    }

    const data = JSON.parse(jsonMatch[0]);

    return NextResponse.json(data);
  } catch (error) {
    console.error('Gemini API Error:', error);
    return NextResponse.json(
      { error: 'AI 분석 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
