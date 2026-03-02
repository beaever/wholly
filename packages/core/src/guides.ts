// 목데이터 제거됨 - Supabase API에서 데이터를 가져옵니다
// 타입 정의만 유지

export interface GuideSection {
  title: string;
  content: Array<{
    subtitle: string;
    text: string;
  }>;
}

export interface PromoCard {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

export interface GuideContent {
  id: string;
  stepNumber: number;
  step: string;
  title: string;
  imageUrl: string;
  intro: string;
  sections: GuideSection[];
  tips: string[];
  warnings: string[];
  promo?: PromoCard;
}

export function getGuideById(id: string): GuideContent | undefined {
  // API 호출로 대체되어야 함
  return undefined;
}

export function getAllGuides(): GuideContent[] {
  // API 호출로 대체되어야 함
  return [];
}
