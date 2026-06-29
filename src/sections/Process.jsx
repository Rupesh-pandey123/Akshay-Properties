import { motion } from 'framer-motion';
import { processSteps } from '../data/content';
import { DynamicIcon } from '../utils/icons';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import { staggerContainer, staggerItem } from '../animations/variants';

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-surface">
      <Container>
        <SectionTitle
          subtitle="Our Process"
          title="Your Journey to Success"
          description="A proven five-step process designed to make your real estate experience seamless and rewarding."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="relative"
        >
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, i) => (
                <motion.div key={step.step} variants={staggerItem} className="relative text-center group">
                  <div className="relative inline-flex mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-white shadow-premium flex items-center justify-center group-hover:shadow-gold group-hover:bg-accent transition-all duration-300">
                      <DynamicIcon name={step.icon} className="w-8 h-8 text-accent group-hover:text-primary transition-colors duration-300" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-accent text-xs font-bold flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{step.description}</p>
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-4 w-8 text-accent/40">
                      →
                    </div>
                  )}
                </motion.div>
              ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
