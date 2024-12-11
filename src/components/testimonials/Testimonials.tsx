import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TestimonialCard } from './TestimonialCard';
import { TestimonialControls } from './TestimonialControls';
import { testimonialData } from './types';
import { useTestimonialGestures } from './useTestimonialGestures';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonialData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setIsAutoPlaying(false);
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const nextIndex = prev + newDirection;
      if (nextIndex < 0) return testimonialData.length - 1;
      if (nextIndex >= testimonialData.length) return 0;
      return nextIndex;
    });
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useTestimonialGestures(
    () => paginate(1),  // Swipe left
    () => paginate(-1)  // Swipe right
  );

  return (
    <div className="bg-gray-900 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2340&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Palavras de Nossos Parceiros
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Experiências reais de quem já transformou sua produção com nossas soluções
            </p>
          </motion.div>
        </div>

        <div className="relative h-[500px] md:h-[400px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full cursor-grab active:cursor-grabbing"
            >
              <TestimonialCard 
                testimonial={testimonialData[currentIndex]}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              />
            </motion.div>
          </AnimatePresence>

          <TestimonialControls
            currentIndex={currentIndex}
            totalTestimonials={testimonialData.length}
            onPrevious={() => paginate(-1)}
            onNext={() => paginate(1)}
            onDotClick={handleDotClick}
          />
        </div>
      </div>
    </div>
  );
}