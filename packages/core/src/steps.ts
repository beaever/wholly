import type { Step, StepStatus } from '@wholly/types';

export const WORKING_HOLIDAY_STEPS: Step[] = [
  {
    id: 'preparation',
    title: '준비 단계',
    description: '워킹홀리데이 비자 신청 전 준비사항',
    order: 1,
    status: 'not_started',
    checklist: [],
  },
  {
    id: 'visa-application',
    title: '비자 신청',
    description: '워킹홀리데이 비자 신청 및 발급',
    order: 2,
    status: 'not_started',
    checklist: [],
  },
  {
    id: 'pre-departure',
    title: '출국 준비',
    description: '출국 전 준비사항',
    order: 3,
    status: 'not_started',
    checklist: [],
  },
  {
    id: 'arrival',
    title: '도착 후',
    description: '현지 도착 후 해야 할 일',
    order: 4,
    status: 'not_started',
    checklist: [],
  },
  {
    id: 'settlement',
    title: '정착',
    description: '현지 정착을 위한 준비',
    order: 5,
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

  return WORKING_HOLIDAY_STEPS.find((step) => step.order === currentStep.order + 1);
}

export function getPreviousStep(currentStepId: string): Step | undefined {
  const currentStep = getStepById(currentStepId);
  if (!currentStep) return undefined;

  return WORKING_HOLIDAY_STEPS.find((step) => step.order === currentStep.order - 1);
}

export function calculateStepStatus(
  stepId: string,
  completedItems: string[],
  totalItems: number
): StepStatus {
  if (completedItems.length === 0) return 'not_started';
  if (completedItems.length >= totalItems) return 'completed';
  return 'in_progress';
}
