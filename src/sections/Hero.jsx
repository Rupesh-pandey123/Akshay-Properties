import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { heroStats } from '../data/content';
import { scrollToSection } from '../utils';
import Container from '../components/Container';
import AnimatedButton from '../components/AnimatedButton';
import AnimatedCounter from '../components/AnimatedCounter';
import { staggerContainer, staggerItem } from '../animations/variants';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
          alt="Luxury property"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
      </motion.div>

      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(212,175,55,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(212,175,55,0.2) 0%, transparent 50%)',
          backgroundSize: '200% 200%',
        }}
      />

      <motion.div style={{ opacity }} className="relative z-10 w-full pt-32 pb-20">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div variants={staggerItem} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-white/90 font-medium">Premium Real Estate Advisory</span>
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6"
            >
              Find Your Dream Property{' '}
              <span className="text-gradient-gold">With Confidence</span>
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-lg sm:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed"
            >
              Experience world-class real estate advisory. From luxury estates to smart investments,
              we guide you every step of the way.
            </motion.p>

            <motion.div variants={staggerItem} className="flex flex-wrap gap-4 mb-16">
              <AnimatedButton
                href="#contact"
                variant="primary"
                size="sm"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}
              >
                <Play className="w-4 h-4 fill-current" />
                Book Consultation
              </AnimatedButton>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
            >
              {heroStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={staggerItem}
                  className="glass rounded-2xl p-5 text-center sm:text-left"
                >
                  <p className="text-3xl sm:text-4xl font-bold text-white mb-1">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-sm text-white/60">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
