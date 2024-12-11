import React from 'react';
import { Quote } from 'lucide-react';
import { TestimonialType } from './types';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  testimonial: TestimonialType;
  onTouchStart: (e: React.TouchEvent) => void;
  onTouchMove: (e: React.TouchEvent) => void;
  onTouchEnd: () => void;
}

export function TestimonialCard({ 
  testimonial,
  onTouchStart,
  onTouchMove,
  onTouchEnd
}: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 touch-pan-y"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="flex-shrink-0">
          <motion.div 
            className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={testimonial.image}
              alt={testimonial.author}
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </div>
        <div className="flex-1">
          <Quote className="h-8 w-8 text-primary/80 mb-4" />
          <p className="text-gray-100 text-lg md:text-xl leading-relaxed mb-6">
            {testimonial.content}
          </p>
          <div>
            <p className="text-white font-semibold">
              {testimonial.author}
            </p>
            <p className="text-gray-400">
              {testimonial.role}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}