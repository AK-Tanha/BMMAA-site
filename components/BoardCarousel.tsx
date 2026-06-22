'use client';

import { useState, useEffect, useCallback } from 'react';
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

  const goTo = useCallback((index: number) => {
    setCurrent(((index % total) + total) % total);
  }, [total]);

  const prev = () => goTo(current - 1);
  const next = useCallback(() => goTo(current + 1), [goTo, current]);

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <div className="relative">
      <div className="relative mx-auto" style={{ width: 420, minHeight: 700 }}>
        <div className="w-full" style={{ animation: 'fade-in 0.4s ease-out' }}>
          <BoardMemberCard member={members[current]} />
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-10 h-10 rounded-full bg-white shadow-card border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-primary-500 hover:border-primary-300 transition-all z-20"
        aria-label="Previous"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-10 h-10 rounded-full bg-white shadow-card border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-primary-500 hover:border-primary-300 transition-all z-20"
        aria-label="Next"
      >
        <ChevronRight size={20} />
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