import { motion } from 'framer-motion';
import { trustStats } from '../data/content';
import Container from '../components/Container';
import AnimatedCounter from '../components/AnimatedCounter';
import { staggerContainer, staggerItem } from '../animations/variants';

export default function Trust() {
  return (
    <section className="py-16 bg-surface border-y border-surface-dark">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {trustStats.map((stat) => (
            <motion.div key={stat.label} variants={staggerItem} className="text-center">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm sm:text-base text-muted font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
