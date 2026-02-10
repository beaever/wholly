'use client';

export function MapHeader() {
  return (
    <header className='sticky top-0 z-10 rounded-b-[30px] bg-[#0F172A] px-6 pb-5 pt-[60px] text-white shadow-[0_10px_20px_rgba(0,0,0,0.1)] dark:bg-surface'>
      <div className='text-xs font-bold uppercase tracking-wider text-accent'>
        Progress
      </div>
      <h1 className='mt-[5px] text-2xl font-extrabold dark:text-primary'>
        시드니 정착 라인 🇦🇺
      </h1>
    </header>
  );
}
