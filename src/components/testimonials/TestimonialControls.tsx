import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialControlsProps {
  currentIndex: number;
  totalTestimonials: number;
  onPrevious: () => void;
  onNext: () => void;
  onDotClick: (index: number) => void;
}

export function TestimonialControls({
  currentIndex,
  totalTestimonials,
  onPrevious,
  onNext,
  onDotClick,
}: TestimonialControlsProps) {
  return (
    <>
      <button
        onClick={onPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-lg transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-lg transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {Array.from({ length: totalTestimonials }).map((_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </>
  );
}