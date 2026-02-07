import type { ChecklistItem } from '@wholly/types';

export const CHECKLIST_ITEMS: Record<string, ChecklistItem[]> = {
  preparation: [
    {
      id: 'prep-1',
      stepId: 'preparation',
      title: '여권 유효기간 확인',
      description: '비자 신청 시 여권 유효기간이 충분한지 확인',
      order: 1,
      isRequired: true,
    },
    {
      id: 'prep-2',
      stepId: 'preparation',
      title: '자격 요건 확인',
      description: '나이, 학력 등 워킹홀리데이 자격 요건 확인',
      order: 2,
      isRequired: true,
    },
    {
      id: 'prep-3',
      stepId: 'preparation',
      title: '예산 계획 수립',
      description: '초기 정착 비용 및 생활비 계획',
      order: 3,
      isRequired: false,
    },
  ],
  'visa-application': [
    {
      id: 'visa-1',
      stepId: 'visa-application',
      title: '비자 신청서 작성',
      description: '온라인 비자 신청서 작성',
      order: 1,
      isRequired: true,
    },
    {
      id: 'visa-2',
      stepId: 'visa-application',
      title: '필요 서류 준비',
      description: '사진, 은행 잔고 증명서 등 준비',
      order: 2,
      isRequired: true,
    },
    {
      id: 'visa-3',
      stepId: 'visa-application',
      title: '비자 수수료 납부',
      description: '비자 신청 수수료 결제',
      order: 3,
      isRequired: true,
    },
  ],
  'pre-departure': [
    {
      id: 'dep-1',
      stepId: 'pre-departure',
      title: '항공권 예약',
      description: '편도 또는 왕복 항공권 예약',
      order: 1,
      isRequired: true,
    },
    {
      id: 'dep-2',
      stepId: 'pre-departure',
      title: '여행자 보험 가입',
      description: '해외 체류 기간 동안의 보험 가입',
      order: 2,
      isRequired: true,
    },
    {
      id: 'dep-3',
      stepId: 'pre-departure',
      title: '숙소 예약',
      description: '초기 숙소 예약 (최소 1-2주)',
      order: 3,
      isRequired: false,
    },
  ],
  arrival: [
    {
      id: 'arr-1',
      stepId: 'arrival',
      title: '입국 심사',
      description: '공항 입국 심사 통과',
      order: 1,
      isRequired: true,
    },
    {
      id: 'arr-2',
      stepId: 'arrival',
      title: '현지 SIM 카드 구매',
      description: '현지 통신사 SIM 카드 개통',
      order: 2,
      isRequired: false,
    },
    {
      id: 'arr-3',
      stepId: 'arrival',
      title: '숙소 체크인',
      description: '예약한 숙소에 체크인',
      order: 3,
      isRequired: true,
    },
  ],
  settlement: [
    {
      id: 'set-1',
      stepId: 'settlement',
      title: '은행 계좌 개설',
      description: '현지 은행 계좌 개설',
      order: 1,
      isRequired: true,
    },
    {
      id: 'set-2',
      stepId: 'settlement',
      title: '세금 번호 신청',
      description: 'TFN/IRD 등 세금 번호 신청',
      order: 2,
      isRequired: true,
    },
    {
      id: 'set-3',
      stepId: 'settlement',
      title: '장기 숙소 구하기',
      description: '쉐어하우스 또는 장기 숙소 계약',
      order: 3,
      isRequired: false,
    },
  ],
};

export function getChecklistByStepId(stepId: string): ChecklistItem[] {
  return CHECKLIST_ITEMS[stepId] ?? [];
}

export function getChecklistItemById(itemId: string): ChecklistItem | undefined {
  for (const items of Object.values(CHECKLIST_ITEMS)) {
    const found = items.find((item) => item.id === itemId);
    if (found) return found;
  }
  return undefined;
}

export function getRequiredItems(stepId: string): ChecklistItem[] {
  return getChecklistByStepId(stepId).filter((item) => item.isRequired);
}

export function getOptionalItems(stepId: string): ChecklistItem[] {
  return getChecklistByStepId(stepId).filter((item) => !item.isRequired);
}
