'use client';

interface FloatingButtonProps {
  text: string;
  onClick?: () => void;
}

export function FloatingButton({ text, onClick }: FloatingButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-5 left-5 right-5 z-50 mx-auto max-w-[360px] rounded-2xl bg-[#0F172A] py-4 text-center text-base font-bold text-white shadow-[0_10px_20px_rgba(15,23,42,0.3)] transition-transform active:scale-[0.98] dark:bg-accent dark:text-[#0F172A]"
    >
      {text}
    </button>
  );
}
