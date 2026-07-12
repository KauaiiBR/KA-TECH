import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onOpenBudgetModal: () => void;
}

export default function Header({ onOpenBudgetModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track active section on scroll
      const sections = ['inicio', 'servicos', 'diferenciais', 'depoimentos', 'contato'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'diferenciais', label: 'Diferenciais' },
    { id: 'depoimentos', label: 'Depoimentos' },
    { id: 'contato', label: 'Contato' }
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0Ac0] backdrop-blur-md border-b border-[#1e082f]/60 py-3 shadow-lg shadow-[#000000]/80'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo initials: K & A */}
            <div 
              onClick={() => handleNavClick('inicio')}
              className="flex items-center space-x-2 cursor-pointer group"
              id="header-logo"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded border border-[#7C3AED]/50 bg-black group-hover:border-[#7C3AED] transition-all duration-300 shadow-[0_0_10px_rgba(124,58,237,0.15)] group-hover:shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                <span className="font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-[#7C3AED] text-lg tracking-tighter">
                  KA
                </span>
                <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-[#7C3AED] rounded-full animate-ping opacity-60" />
                <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-[#7C3AED] rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-white text-base leading-none tracking-wider group-hover:text-[#7C3AED] transition-colors duration-300">
                  KA TECH
                </span>
                <span className="text-[9px] text-gray-500 font-mono tracking-widest uppercase">
                  SOLUTIONS
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8" id="desktop-nav">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`font-sans text-xs uppercase tracking-wider font-semibold transition-colors duration-300 cursor-pointer relative py-1 ${
                    activeSection === item.id ? 'text-[#7C3AED]' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#7C3AED]"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* CTAs and Menu Trigger */}
            <div className="flex items-center space-x-4">
              <button
                onClick={onOpenBudgetModal}
                className="hidden sm:flex items-center space-x-1.5 bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-4 py-2 rounded font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer border border-[#a78bfa]/20 hover:border-[#a78bfa]/40 hover:scale-101 hover:shadow-[0_0_15px_rgba(124,58,237,0.4)]"
                id="header-cta-btn"
              >
                <span>Orçamento Rápido</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-gray-300 hover:text-white p-1 cursor-pointer focus:outline-none"
                aria-label="Toggle menu"
                id="header-mobile-menu-trigger"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop & Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/95 z-40 md:hidden flex flex-col justify-center px-6"
            id="mobile-nav-overlay"
          >
            <div className="space-y-6 flex flex-col items-center">
              {menuItems.map((item, index) => (
                <motion.button
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ delay: index * 0.05 }}
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`font-display font-black text-2xl uppercase tracking-widest ${
                    activeSection === item.id ? 'text-[#7C3AED]' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ delay: menuItems.length * 0.05 }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBudgetModal();
                }}
                className="mt-6 flex items-center space-x-2 bg-[#7C3AED] text-white px-6 py-3.5 rounded-md font-display font-extrabold text-sm uppercase tracking-widest w-full justify-center"
              >
                <span>Orçamento Rápido</span>
                <ArrowRight size={16} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
