'use client';

interface StatsCardProps {
  icon: string;
  label: string;
  value: number;
}

export function StatsCard({ icon, label, value }: StatsCardProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center rounded-2xl bg-surface py-6">
      <span className="mb-2 text-3xl">{icon}</span>
      <p className="mb-1 text-2xl font-bold text-primary">{value}</p>
      <p className="text-xs text-text-secondary">{label}</p>
    </div>
  );
}
