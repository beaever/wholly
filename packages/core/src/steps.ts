import type { Step, StepStatus } from '@wholly/types';

export const WORKING_HOLIDAY_STEPS: Step[] = [
  {
    id: 'preparation',
    title: '워킹홀리데이 준비 시작',
    description: '자격 요건 확인 및 예산 계획',
    order: 1,
    status: 'not_started',
    checklist: [],
  },
  {
    id: 'visa-application',
    title: '워홀 비자 신청',
    description: '온라인 비자 신청 및 서류 준비',
    order: 2,
    status: 'not_started',
    checklist: [],
  },
  {
    id: 'pre-departure',
    title: '출국 준비',
    description: '항공권 예약 및 여행자 보험 가입',
    order: 3,
    status: 'not_started',
    checklist: [],
  },
  {
    id: 'accommodation',
    title: '임시 숙소 예약',
    description: '초기 정착을 위한 숙소 예약',
    order: 4,
    status: 'not_started',
    checklist: [],
  },
  {
    id: 'arrival',
    title: '입국 및 도착',
    description: '입국 심사 및 현지 SIM 카드 구매',
    order: 5,
    status: 'not_started',
    checklist: [],
  },
  {
    id: 'bank-account',
    title: '은행 계좌 개설',
    description: '현지 은행 계좌 개설 및 체크카드 발급',
    order: 6,
    status: 'not_started',
    checklist: [],
  },
  {
    id: 'tfn',
    title: 'TFN 신청',
    description: '세금 번호(Tax File Number) 신청',
    order: 7,
    status: 'not_started',
    checklist: [],
  },
  {
    id: 'settlement',
    title: '장기 정착',
    description: '쉐어하우스 구하기 및 일자리 찾기',
    order: 8,
    status: 'not_started',
    checklist: [],
  },
];

export function getStepById(stepId: string): Step | undefined {
  return WORKING_HOLIDAY_STEPS.find((step) => step.id === stepId);
}

export function getNextStep(currentStepId: string): Step | undefined {
  const currentStep = getStepById(currentStepId);
  if (!currentStep) return undefined;

  return WORKING_HOLIDAY_STEPS.find(
    (step) => step.order === currentStep.order + 1,
  );
}

export function getPreviousStep(currentStepId: string): Step | undefined {
  const currentStep = getStepById(currentStepId);
  if (!currentStep) return undefined;

  return WORKING_HOLIDAY_STEPS.find(
    (step) => step.order === currentStep.order - 1,
  );
}

export function calculateStepStatus(
  stepId: string,
  completedItems: string[],
  totalItems: number,
): StepStatus {
  if (completedItems.length === 0) return 'not_started';
  if (completedItems.length >= totalItems) return 'completed';
  return 'in_progress';
}
