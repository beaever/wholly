import { cn } from '@wholly/ui-web';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circle' | 'rectangle' | 'card';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'shimmer';
}

export function Skeleton({
  className,
  variant = 'rectangle',
  width,
  height,
  animation = 'pulse',
}: SkeletonProps) {
  const baseClasses = 'bg-border-light dark:bg-border';
  
  const variantClasses = {
    text: 'h-4 rounded',
    circle: 'rounded-full',
    rectangle: 'rounded-lg',
    card: 'rounded-xl',
  };

  const animationClasses = {
    pulse: 'animate-pulse',
    shimmer: 'animate-shimmer bg-gradient-to-r from-border-light via-border to-border-light bg-[length:200%_100%]',
  };

  const style: React.CSSProperties = {};
  if (width) style.width = typeof width === 'number' ? `${width}px` : width;
  if (height) style.height = typeof height === 'number' ? `${height}px` : height;

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        animationClasses[animation],
        className
      )}
      style={style}
    />
  );
}
