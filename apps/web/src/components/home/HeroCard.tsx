'use client';

import Link from 'next/link';

export function HeroCard() {
  return (
    <section className="px-6 pb-6">
      <div className="relative overflow-hidden rounded-3xl bg-[#0F172A] p-6 text-white shadow-[0_10px_30px_-10px_rgba(15,23,42,0.3)]">
        {/* Background glow */}
        <div className="absolute -right-5 -top-5 h-[100px] w-[100px] rounded-full bg-accent opacity-30 blur-[40px]" />

        <span className="relative mb-3 inline-block rounded-full border border-accent/30 bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-accent backdrop-blur-[10px]">
          Current Station
        </span>

        <h2 className="relative mb-2 text-[22px] font-bold leading-tight">
          임시 숙소 예약하기
        </h2>

        <p className="relative mb-5 text-[13px] opacity-70">
          입국 후 일주일간 머물 숙소를
          <br />
          한국에서 미리 예약하세요.
        </p>

        <Link
          href="/guide/3"
          className="relative block w-full rounded-[14px] bg-accent py-3.5 text-center text-sm font-bold text-[#0F172A]"
        >
          가이드 보러가기 →
        </Link>
      </div>
    </section>
  );
}
