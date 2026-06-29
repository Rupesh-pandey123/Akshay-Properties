import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { properties } from '../data/content';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import PropertyCard from '../components/PropertyCard';
import { fadeInUp } from '../animations/variants';


const filters = [
  { id: 'all', label: 'All' },
  { id: 'buy', label: 'Buy' },
  { id: 'rent', label: 'Rent' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'luxury', label: 'Luxury' },
];

export default function FeaturedProperties() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = properties.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'buy' || activeFilter === 'rent') return p.type === activeFilter;
    return p.category === activeFilter;
  });



  return (
    <section id="properties" className="py-24 lg:py-32 bg-white">
      <Container>
        <SectionTitle
          subtitle="Featured Properties"
          title="Discover Exceptional Listings"
          description="Handpicked properties that represent the finest in design, location, and value."
        />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary text-white shadow-premium'
                  : 'bg-surface text-muted hover:bg-secondary hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {filtered.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </motion.div>
        </AnimatePresence>


      </Container>
    </section>
  );
}
