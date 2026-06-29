import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { statsSection } from '../data/content';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import AnimatedCounter from '../components/AnimatedCounter';
import { staggerContainer, staggerItem } from '../animations/variants';

export default function Stats() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt=""
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </motion.div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/20 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <SectionTitle
          subtitle="Our Impact"
          title="Numbers That Define Excellence"
          description="A track record built on trust, results, and lasting relationships."
          light
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {statsSection.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="text-center glass rounded-2xl p-8"
            >
              <p className="text-4xl sm:text-5xl font-bold text-white mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm text-white/60 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
