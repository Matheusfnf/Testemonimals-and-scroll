import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ChevronDown, Home, Package, Info, Mail, Phone } from 'lucide-react';
import { Logo } from './Logo';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState('/');
  const [showContactMenu, setShowContactMenu] = useState(false);
  const contactButtonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollY } = useScroll();

  useEffect(() => {
    setActiveSection(location.pathname);
  }, [location]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Produtos', path: '/produtos', icon: Package },
    { name: 'Sobre', path: '/sobre', icon: Info },
  ];

  const handleContactClick = (type: 'whatsapp' | 'email') => {
    if (type === 'whatsapp') {
      window.open('https://wa.me/5534996992806', '_blank');
    } else {
      window.location.href = 'mailto:contato@viomaagro.com.br';
    }
    setShowContactMenu(false);
    setIsOpen(false);
  };

  const handleNavigation = (path: string) => {
    window.scrollTo(0, 0);
    navigate(path);
    setIsOpen(false);
  };

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="fixed w-full z-40 px-4 sm:px-6 lg:px-8 top-4"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={false}
          animate={{ backgroundColor: isOpen ? 'rgba(17, 24, 39, 0.95)' : 'rgba(17, 24, 39, 0.8)' }}
          className="backdrop-blur-md rounded-2xl border border-white/10"
        >
          <div className="px-4 sm:px-6">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <button onClick={() => handleNavigation('/')} className="flex items-center">
                  <Logo className="h-12" />
                </button>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center justify-center flex-1">
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-1.5 flex items-center mx-auto">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavigation(item.path)}
                      className={`px-6 py-1.5 rounded-lg flex items-center space-x-2 transition-all duration-200 ${
                        activeSection === item.path
                          ? 'bg-white/10 text-white'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Button - Desktop Only */}
              <div className="hidden md:block">
                <div className="relative">
                  <button
                    ref={contactButtonRef}
                    onClick={() => setShowContactMenu(!showContactMenu)}
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-xl transition-all duration-200 flex items-center space-x-2 group"
                  >
                    <span>Contato</span>
                    <motion.div
                      animate={{ rotate: showContactMenu ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </button>

                  {/* Contact Dropdown */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: showContactMenu ? 1 : 0, y: showContactMenu ? 0 : 10 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 ${
                      showContactMenu ? 'block' : 'hidden'
                    }`}
                  >
                    <div className="py-1">
                      <button
                        onClick={() => handleContactClick('whatsapp')}
                        className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                      >
                        <Phone className="h-4 w-4" />
                        <span>WhatsApp</span>
                      </button>
                      <button
                        onClick={() => handleContactClick('email')}
                        className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                      >
                        <Mail className="h-4 w-4" />
                        <span>E-mail</span>
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={false}
            animate={{ height: isOpen ? 'auto' : 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    activeSection === item.path
                      ? 'bg-white/10 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </button>
              ))}
              
              {/* Contact Options in Mobile Menu */}
              <div className="pt-2 border-t border-white/10">
                <button
                  onClick={() => handleContactClick('whatsapp')}
                  className="w-full flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>WhatsApp</span>
                </button>
                <button
                  onClick={() => handleContactClick('email')}
                  className="w-full flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>E-mail</span>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
}