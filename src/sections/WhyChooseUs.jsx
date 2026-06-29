import { motion } from 'framer-motion';
import { whyChooseUs } from '../data/content';
import { DynamicIcon } from '../utils/icons';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import AnimatedCard from '../components/AnimatedCard';
import { staggerContainer, staggerItem } from '../animations/variants';

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-accent blur-3xl" />
      </div>

      <Container className="relative z-10">
        <SectionTitle
          subtitle="Why Choose Us"
          title="The Akshay Argade Difference"
          description="What sets us apart in a competitive market — unwavering commitment to your success."
          light
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {whyChooseUs.map((item) => (
              <motion.div key={item.title} variants={staggerItem}>
                <AnimatedCard className="glass p-8 h-full group cursor-default border-white/10">
                  <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent transition-all duration-300">
                    <DynamicIcon name={item.icon} className="w-7 h-7 text-accent group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
                </AnimatedCard>
              </motion.div>
            ))}
        </motion.div>
      </Container>
    </section>
  );
}
