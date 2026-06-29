import { motion } from 'framer-motion';
import { services } from '../data/content';
import { DynamicIcon } from '../utils/icons';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import AnimatedCard from '../components/AnimatedCard';
import { staggerContainer, staggerItem } from '../animations/variants';

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-surface">
      <Container>
        <SectionTitle
          subtitle="Our Services"
          title="Comprehensive Real Estate Solutions"
          description="From finding your perfect home to building an investment portfolio, we offer end-to-end services tailored to your needs."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
              <motion.div key={service.title} variants={staggerItem}>
                <AnimatedCard className="bg-white p-6 h-full group cursor-default">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:shadow-gold transition-all duration-300">
                    <DynamicIcon name={service.icon} className="w-7 h-7 text-accent group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{service.description}</p>
                </AnimatedCard>
              </motion.div>
            ))}
        </motion.div>
      </Container>
    </section>
  );
}
