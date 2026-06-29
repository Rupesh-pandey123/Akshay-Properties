import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/content';
import { useNavbarScroll, useActiveSection } from '../hooks';
import { scrollToSection } from '../utils';
import AnimatedButton from './AnimatedButton';
import Container from './Container';
import Logo from './Logo';
import { drawerVariants, overlayVariants } from '../animations/variants';

const sectionIds = ['home', 'about', 'services', 'properties', 'process', 'gallery', 'contact'];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrolled, hidden } = useNavbarScroll();
  const activeSection = useActiveSection(sectionIds);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    scrollToSection(href);
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/90 backdrop-blur-xl shadow-premium py-3"
      >
        <Container>
          <nav className="flex items-center justify-between" aria-label="Main navigation">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center group"
            >
              <Logo size="md" className="transition-transform duration-300 group-hover:scale-105" />
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`link-underline text-sm font-medium transition-colors ${
                      isActive ? 'text-accent' : 'text-primary hover:text-accent'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            <div className="hidden lg:block">
              <AnimatedButton
                href="#contact"
                variant="primary"
                size="sm"
                onClick={(e) => handleNavClick(e, '#contact')}
              >
                Book Consultation
              </AnimatedButton>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-lg transition-colors text-primary hover:bg-surface"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </nav>
        </Container>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[60] bg-primary/60 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              variants={drawerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-sm bg-white shadow-premium-lg lg:hidden"
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex items-center justify-between mb-8">
                  <Logo size="sm" />
                  <button
                    type="button"
                    onClick={() => setMobileOpen(false)}
                    className="p-2 rounded-lg text-primary hover:bg-surface"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex flex-col gap-1 flex-1">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="py-3 px-4 text-lg font-medium text-primary hover:text-accent hover:bg-surface rounded-xl transition-colors"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>

                <AnimatedButton
                  href="#contact"
                  variant="primary"
                  className="w-full"
                  onClick={(e) => handleNavClick(e, '#contact')}
                >
                  Book Consultation
                </AnimatedButton>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
