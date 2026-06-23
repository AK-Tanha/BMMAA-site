'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BoardMemberCard from './BoardMemberCard';

interface BoardMember {
  id: string;
  name: string;
  designation: string;
  bio?: string;
  image?: string;
}

interface BoardCarouselProps {
  members: BoardMember[];
}

export default function BoardCarousel({ members }: BoardCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<'right' | 'left'>('right');
  const total = members.length;
  const desktopRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const animKeyRef = useRef(0);

  const triggerSlide = useCallback((dir: 'right' | 'left') => {
    const cls = dir === 'right' ? 'slide-from-right' : 'slide-from-left';
    const other = dir === 'right' ? 'slide-from-left' : 'slide-from-right';

    [desktopRef, mobileRef].forEach((ref) => {
      const el = ref.current;
      if (!el) return;
      el.classList.remove(other);
      void el.offsetWidth;
      el.classList.add(cls);
    });
  }, []);

  const goTo = useCallback((index: number) => {
    setCurrent(((index % total) + total) % total);
  }, [total]);

  const prev = () => {
    if (animKeyRef.current) return;
    animKeyRef.current = 1;
    const dir = 'left';
    setDirection(dir);
    triggerSlide(dir);
    goTo(current - 1);
    setTimeout(() => { animKeyRef.current = 0; }, 400);
  };

  const next = useCallback(() => {
    if (animKeyRef.current) return;
    animKeyRef.current = 1;
    const dir = 'right';
    setDirection(dir);
    triggerSlide(dir);
    goTo(current + 1);
    setTimeout(() => { animKeyRef.current = 0; }, 400);
  }, [goTo, current, triggerSlide]);

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [next]);

  const prevMember = members[(current - 1 + total) % total];
  const nextMember = members[(current + 1) % total];

  return (
    <div className="relative">
      <style>{`
        @keyframes slide-right {
          from { transform: translateX(45px); }
          to { transform: translateX(0); }
        }
        @keyframes slide-left {
          from { transform: translateX(-45px); }
          to { transform: translateX(0); }
        }
        .slide-from-right {
          animation: slide-right 0.4s cubic-bezier(0.22, 1, 0.36, 1) !important;
        }
        .slide-from-left {
          animation: slide-left 0.4s cubic-bezier(0.22, 1, 0.36, 1) !important;
        }
      `}</style>

      {/* Desktop: 3-card carousel */}
      <div className="hidden lg:flex items-center justify-center">
        <div
          ref={desktopRef}
          className="flex items-center justify-center gap-6 w-full max-w-5xl mx-auto will-change-transform"
        >
          <div className="flex-1 max-w-[35%] shrink-0 z-0">
            <div className="scale-[0.75] transition-all duration-500">
              <BoardMemberCard member={prevMember} brackets={false} hover={false} />
            </div>
          </div>
          <div className="flex-[1.3] shrink-0 z-10">
            <BoardMemberCard member={members[current]} hover={false} />
          </div>
          <div className="flex-1 max-w-[35%] shrink-0 z-0">
            <div className="scale-[0.75] transition-all duration-500">
              <BoardMemberCard member={nextMember} brackets={false} hover={false} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet: single card */}
      <div className="lg:hidden">
        <div className="relative mx-auto w-full max-w-[420px] px-0">
          <div ref={mobileRef} className="w-full will-change-transform">
            <BoardMemberCard member={members[current]} hover={false} />
          </div>
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white shadow-card border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-primary-500 hover:border-primary-300 transition-all z-20"
        aria-label="Previous"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={next}
        className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white shadow-card border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-primary-500 hover:border-primary-300 transition-all z-20"
        aria-label="Next"
      >
        <ChevronRight size={18} />
      </button>

      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              current === i ? 'bg-primary-500 w-6' : 'bg-neutral-300 hover:bg-neutral-400'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
