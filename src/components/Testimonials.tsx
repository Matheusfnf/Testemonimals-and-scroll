import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Os biológicos da Vioma apresentam realmente a concentração que dizem no rótulo, um diferencial de mercado com tantos produtos milagrosos!!",
    author: "Clisman Vaz",
    role: "Especialista em Controle de Qualidade",
    image: "https://i.imgur.com/NPSnLJk.png"
  },
  {
    id: 2,
    content: "A Vioma é uma empresa de qualidade e confiança tanto sobre a concentração dos profissionais quanto do produto final",
    author: "Leslie Franco",
    role: "Consultor de Algodão",
    image: "https://i.imgur.com/8tW4wfb.jpeg"
  },
  {
    id: 3,
    content: "Aqui no laboratório, temos muita consistência sobre os resultados dos laudos, e as soluções da Vioma nunca decepcionam",
    author: "Fernanda Vaz",
    role: "Representante Proativa Lab",
    image: "https://i.imgur.com/o8vexnR.png"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setIsAutoPlaying(false);
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const nextIndex = prev + newDirection;
      if (nextIndex < 0) return testimonials.length - 1;
      if (nextIndex >= testimonials.length) return 0;
      return nextIndex;
    });
  };

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

        <div className="relative h-[400px] md:h-[300px]">
          <AnimatePresence initial={false} custom={direction}>
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
              className="absolute w-full"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].author}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <Quote className="h-8 w-8 text-primary/80 mb-4" />
                    <p className="text-gray-100 text-lg md:text-xl leading-relaxed mb-6">
                      {testimonials[currentIndex].content}
                    </p>
                    <div>
                      <p className="text-white font-semibold">
                        {testimonials[currentIndex].author}
                      </p>
                      <p className="text-gray-400">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-lg transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-lg transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}