import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { successStories } from '../data/content';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import { staggerContainer, staggerItem } from '../animations/variants';

export default function SuccessStories() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <Container>
        <SectionTitle
          subtitle="Success Stories"
          title="Proven Results That Speak"
          description="Real outcomes from real clients — see how we've delivered exceptional value."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="relative"
        >
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent hidden md:block" />

          <div className="space-y-12">
            {successStories.map((story, i) => (
              <motion.div
                key={story.id}
                variants={staggerItem}
                className="relative md:pl-20"
              >
                <div className="hidden md:flex absolute left-6 top-8 w-5 h-5 rounded-full bg-accent border-4 border-white shadow-gold items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="bg-surface rounded-3xl p-8 shadow-premium hover:shadow-premium-lg transition-shadow duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <span className="text-xs font-bold text-accent uppercase tracking-wider">{story.year}</span>
                      <h3 className="text-xl font-bold text-primary mt-1">{story.title}</h3>
                      <p className="text-sm text-muted">{story.client}</p>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
                      <TrendingUp className="w-4 h-4 text-accent" />
                      <span className="text-sm font-bold text-accent">{story.growth}</span>
                    </div>
                  </div>

                  <p className="text-muted text-sm leading-relaxed mb-6">{story.description}</p>

                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-surface-dark">
                    <div>
                      <p className="text-xs text-muted uppercase tracking-wider mb-1">Before</p>
                      <p className="text-lg font-bold text-primary">{story.before}</p>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-full h-px bg-accent/30 relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-accent rotate-45" />
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted uppercase tracking-wider mb-1">After</p>
                      <p className="text-lg font-bold text-accent">{story.after}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
