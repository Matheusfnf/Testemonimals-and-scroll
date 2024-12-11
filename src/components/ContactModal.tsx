import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  buttonRef: React.RefObject<HTMLButtonElement>;
}

export function ContactModal({ isOpen, onClose, buttonRef }: ContactModalProps) {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5534996992806', '_blank');
    onClose();
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:contato@viomaagro.com.br';
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: 'absolute',
              top: buttonRef.current ? buttonRef.current.offsetHeight + 8 : 0,
              right: 0,
            }}
            className="z-40 min-w-[200px]"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
              <button
                onClick={handleWhatsAppClick}
                className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors text-gray-700"
              >
                <Phone className="h-5 w-5 text-[#25D366]" />
                <span>WhatsApp</span>
              </button>
              <button
                onClick={handleEmailClick}
                className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors text-gray-700"
              >
                <Mail className="h-5 w-5 text-primary" />
                <span>E-mail</span>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}