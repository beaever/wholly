import { Skeleton } from './Skeleton';

export function ExchangeRateSkeleton() {
  return (
    <div className="flex h-[120px] flex-col justify-between rounded-[20px] border border-border-light bg-surface p-5 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02)]">
      <Skeleton variant="circle" width={44} height={44} />
      <div className="space-y-1">
        <Skeleton width={80} height={16} />
        <Skeleton width={120} height={12} />
      </div>
    </div>
  );
}
