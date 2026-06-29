import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Send } from 'lucide-react';
import { footerLinks, socialLinks, contactInfo } from '../data/content';
import { DynamicIcon } from '../utils/icons';
import { scrollToSection } from '../utils';
import Container from '../components/Container';
import Logo from '../components/Logo';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletter = (e) => {
    e.preventDefault();
    setEmail('');
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-primary text-white pt-20 pb-8">
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="inline-block mb-6 transition-transform duration-300 hover:scale-105"
            >
              <Logo size="md" />
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Premium real estate advisory delivering exceptional properties and investment opportunities worldwide.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                  <a
                    key={social.icon}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300"
                    aria-label={social.label}
                  >
                    <DynamicIcon name={social.icon} className="w-4 h-4" />
                  </a>
                ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quick.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-sm text-white/60 hover:text-accent transition-colors link-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-sm text-white/60 hover:text-accent transition-colors link-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-sm text-white/60 mb-4">Stay updated with market insights and exclusive listings.</p>
            <form onSubmit={handleNewsletter} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/40 text-sm outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-3 rounded-xl bg-accent text-primary hover:bg-accent-light transition-colors"
                aria-label="Subscribe"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <div className="mt-6 space-y-2 text-sm text-white/60">
              <p>{contactInfo.phone}</p>
              <p>{contactInfo.email}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Akhshay Property. All rights reserved.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollTop}
            className="flex items-center gap-2 text-sm text-white/60 hover:text-accent transition-colors"
          >
            Back to top
            <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <ArrowUp className="w-4 h-4" />
            </span>
          </motion.button>
        </div>
      </Container>
    </footer>
  );
}
