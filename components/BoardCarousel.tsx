'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
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
  const total = members.length;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const animatingRef = useRef(false);

  const goTo = useCallback((index: number) => {
    setCurrent(((index % total) + total) % total);
  }, [total]);

  const prev = () => {
    if (animatingRef.current) return;
    animatingRef.current = true;
    goTo(current - 1);
    setTimeout(() => { animatingRef.current = false; }, 500);
  };

  const next = useCallback(() => {
    if (animatingRef.current) return;
    animatingRef.current = true;
    goTo(current + 1);
    setTimeout(() => { animatingRef.current = false; }, 500);
  }, [goTo, current]);

  useEffect(() => {
    intervalRef.current = setInterval(next, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [next]);

  const extendedDesktop = [...members.slice(-2), ...members, ...members.slice(0, 2)];
  const extendedMobile = [members[total - 1], ...members, members[0]];

  const desktopOffset = (1 + current) * (100 / 3);
  const mobileOffset = (1 + current) * 100;

  return (
    <div className="relative">
      <div className="hidden lg:block overflow-hidden py-5">
        <div
          className="flex transition-transform duration-500 ease-out will-change-transform"
          style={{ transform: `translateX(-${desktopOffset}%)` }}
        >
          {extendedDesktop.map((member, i) => {
            const isPrev = i === 1 + current;
            const isCurrent = i === 2 + current;
            const isNext = i === 3 + current;
            const visible = isPrev || isCurrent || isNext;
            return (
              <div key={`${member.id}-${i}`} className="w-1/3 shrink-0 px-3">
                <div
                  className={`transition-all duration-500 ${
                    isCurrent
                      ? 'scale-100 opacity-100 z-10'
                      : visible
                        ? 'scale-[0.65] opacity-60'
                        : 'scale-[0.6] opacity-0 pointer-events-none'
                  }`}
                >
                  <BoardMemberCard member={member} brackets={isCurrent} hover={false} cardClassName="shadow-none" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="lg:hidden overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out will-change-transform"
          style={{ transform: `translateX(-${mobileOffset}%)` }}
        >
          {extendedMobile.map((member, i) => (
            <div key={`${member.id}-m-${i}`} className="w-full shrink-0 px-4">
              <BoardMemberCard member={member} hover={false} cardClassName="shadow-none" />
            </div>
          ))}
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
