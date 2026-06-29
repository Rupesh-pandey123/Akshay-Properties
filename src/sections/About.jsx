import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { aboutTimeline } from '../data/content';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import { fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '../animations/variants';

const highlights = [
  'Award-winning advisory team',
  'Exclusive off-market access',
  'End-to-end transaction support',
  'Personalized client experience',
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <Container>
        <SectionTitle
          subtitle="About Us"
          title="Redefining Real Estate Excellence"
          description="For over a decade, we've been the trusted partner for discerning clients seeking exceptional properties and investment opportunities."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-premium-lg aspect-[4/5]">
              <img
                src="/about-owner.jpg"
                alt="About Akshay Argade Property"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-accent text-primary rounded-2xl p-6 shadow-gold hidden sm:block"
            >
              <p className="text-4xl font-bold">10+</p>
              <p className="text-sm font-semibold">Years of Excellence</p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <h3 className="text-2xl font-bold text-primary mb-4">Our Story</h3>
            <p className="text-muted leading-relaxed mb-6">
              Founded with a vision to elevate the real estate experience, Akshay Argade Property has grown
              from a boutique advisory firm into a nationally recognized leader in luxury and commercial
              real estate.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-bold text-primary mb-2">Mission</h4>
                <p className="text-sm text-muted leading-relaxed">
                  To deliver unparalleled real estate experiences through integrity, expertise, and personalized service.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2">Vision</h4>
                <p className="text-sm text-muted leading-relaxed">
                  To be the most trusted name in premium real estate, setting the standard for excellence worldwide.
                </p>
              </div>
            </div>

            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-primary">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="relative"
        >
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-surface-dark sm:-translate-x-1/2 hidden sm:block" />
          <div className="space-y-8">
            {aboutTimeline.map((item, i) => (
              <motion.div
                key={item.year}
                variants={staggerItem}
                className={`relative flex flex-col sm:flex-row gap-4 sm:gap-8 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
              >
                <div className="sm:w-1/2 sm:text-right" style={{ textAlign: i % 2 === 0 ? undefined : 'left' }}>
                  <span className="inline-block px-3 py-1 text-xs font-bold text-accent bg-accent/10 rounded-full mb-2">
                    {item.year}
                  </span>
                  <h4 className="text-lg font-bold text-primary mb-1">{item.title}</h4>
                  <p className="text-sm text-muted">{item.description}</p>
                </div>
                <div className="hidden sm:flex items-center justify-center w-8 relative z-10">
                  <div className="w-4 h-4 rounded-full bg-accent border-4 border-white shadow-gold" />
                </div>
                <div className="sm:w-1/2" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
