import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Sprout, BarChart, Droplets, Sun } from 'lucide-react';

const floatingIcons = [
  { Icon: Leaf, delay: 0, position: 'top-1/4 left-1/4' },
  { Icon: Recycle, delay: 0.2, position: 'top-1/3 right-1/4' },
  { Icon: Droplets, delay: 0.4, position: 'bottom-1/3 left-1/3' },
  { Icon: Sun, delay: 0.6, position: 'bottom-1/4 right-1/3' },
  { Icon: Sprout, delay: 0.8, position: 'top-1/2 right-1/4' },
  { Icon: BarChart, delay: 1, position: 'bottom-1/2 left-1/4' },
];

export function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=2340&q=80')] bg-cover bg-center opacity-10"></div>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full"
            >
              <Leaf className="h-5 w-5 text-primary" />
              <span className="text-white text-sm">Soluções Biológicas</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold text-white leading-tight"
            >
              Vioma Agro
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl text-gray-300 max-w-xl mx-auto lg:mx-0"
            >
              Estamos transformando a agricultura moderna a partir da sustentabilidade
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <button 
                onClick={() => navigate('/produtos')}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors w-full sm:w-auto"
              >
                Explorar Soluções
              </button>
              <button 
                onClick={() => navigate('/sobre')}
                className="border border-white/30 hover:border-white/50 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors backdrop-blur-sm w-full sm:w-auto"
              >
                Saiba Mais
              </button>
            </motion.div>
          </motion.div>

          {/* Right column - Globe visualization */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="relative h-[400px] lg:h-[600px] block"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Glowing effect */}
              <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
              
              {/* Globe container */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0]
                }}
                transition={{ 
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                  alt="Sustentabilidade Global"
                  className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-full shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent rounded-full"></div>
              </motion.div>

              {/* Floating icons - Now visible on all screens */}
              {floatingIcons.map(({ Icon, delay, position }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay,
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 2
                  }}
                  className={`absolute ${position} bg-white/10 backdrop-blur-md p-2 sm:p-3 rounded-full`}
                >
                  <Icon className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}