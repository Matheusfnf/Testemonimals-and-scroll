import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { products } from '../data/products';

interface ProductModalProps {
  productId: string | null;
  onClose: () => void;
}

export function ProductModal({ productId, onClose }: ProductModalProps) {
  const product = products.find(p => p.id === productId);

  if (!product) return null;

  return (
    <AnimatePresence>
      {productId && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {product.category}
                    </span>
                    <h2 className="mt-4 text-2xl font-bold text-gray-900">{product.name}</h2>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900">Componente</h3>
                  <p className="mt-2 text-gray-600">{product.component}</p>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900">Descrição</h3>
                  <p className="mt-2 text-gray-600">{product.description}</p>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900">Benefícios</h3>
                  <ul className="mt-2 space-y-2">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3 text-gray-600">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}