import { useState } from 'react';

interface TouchState {
  startX: number;
  isDragging: boolean;
}

export function useTestimonialGestures(
  onSwipeLeft: () => void,
  onSwipeRight: () => void
) {
  const [touch, setTouch] = useState<TouchState>({ startX: 0, isDragging: false });
  const threshold = 50; // Minimum distance for swipe

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouch({
      startX: e.touches[0].clientX,
      isDragging: true
    });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touch.isDragging) return;

    const currentX = e.touches[0].clientX;
    const diff = touch.startX - currentX;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        onSwipeLeft();
      } else {
        onSwipeRight();
      }
      setTouch({ startX: 0, isDragging: false });
    }
  };

  const handleTouchEnd = () => {
    setTouch({ startX: 0, isDragging: false });
  };

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd
  };
}