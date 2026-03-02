import { Skeleton } from './Skeleton';

export function PackingListSkeleton() {
  return (
    <div className="space-y-6">
      {/* Progress Bar Skeleton */}
      <div className="rounded-2xl bg-surface p-5">
        <div className="mb-2 flex items-center justify-between">
          <Skeleton width={60} height={16} />
          <Skeleton width={40} height={16} />
        </div>
        <Skeleton height={8} className="rounded-full" />
      </div>

      {/* Essential Items Section */}
      <div>
        <Skeleton width={120} height={20} className="mb-3" />
        <div className="space-y-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={`essential-${i}`}
              className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4"
            >
              <Skeleton variant="circle" width={20} height={20} className="mt-0.5" />
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <Skeleton width={120} height={16} />
                  <Skeleton width={40} height={20} className="rounded" />
                </div>
                <Skeleton width={80} height={12} />
                <Skeleton width="100%" height={12} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Items Section */}
      <div>
        <Skeleton width={140} height={20} className="mb-3" />
        <div className="space-y-2">
          {[...Array(10)].map((_, i) => (
            <div
              key={`ai-${i}`}
              className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4"
            >
              <Skeleton variant="circle" width={20} height={20} className="mt-0.5" />
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <Skeleton width={100} height={16} />
                  <Skeleton width={30} height={20} className="rounded" />
                </div>
                <Skeleton width={60} height={12} />
                <Skeleton width="90%" height={12} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
