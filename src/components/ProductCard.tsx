import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
              {product.category}
            </span>
            {product.logoUrl ? (
              <div className="mt-4 h-16">
                <img 
                  src={product.logoUrl} 
                  alt={`${product.name} logo`}
                  className="h-full w-auto object-contain"
                />
              </div>
            ) : (
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{product.name}</h3>
            )}
          </div>
        </div>
        
        <p className="mt-2 text-sm font-medium text-gray-600">{product.component}</p>
        <p className="mt-4 text-gray-600 line-clamp-3">{product.description}</p>
        
        <button
          onClick={onClick}
          className="mt-6 w-full inline-flex items-center justify-center space-x-2 px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white rounded-lg transition-colors duration-300"
        >
          <span>Saiba mais</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
}