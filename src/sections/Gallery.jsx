import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryItems } from '../data/content';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import { staggerContainer, staggerItem, imageZoom } from '../animations/variants';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'luxury', label: 'Luxury' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightbox, setLightbox] = useState(null);
  const scrollRef = useRef(null);
  const isPaused = useRef(false);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollRef.current || isPaused.current) return;
      const el = scrollRef.current;
      // If reached end, loop back to start
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: 320, behavior: 'smooth' });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [activeCategory]);

  const filtered = galleryItems.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-white">
      <Container>
        <SectionTitle
          subtitle="Gallery"
          title="Explore Our Portfolio"
          description="A visual journey through exceptional properties and spaces we've helped clients discover."
        />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-accent text-primary shadow-gold'
                  : 'bg-surface text-muted hover:text-primary'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="relative group/slider">
          {/* Left Arrow */}
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scroll(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-11 h-11 rounded-full bg-white shadow-premium flex items-center justify-center text-primary hover:bg-accent hover:text-primary transition-colors opacity-0 group-hover/slider:opacity-100"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Scrollable Row */}
          <motion.div
            key={activeCategory}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            ref={scrollRef}
            className="grid grid-rows-2 grid-flow-col gap-4 overflow-x-auto pb-4 scroll-smooth"
            style={{ scrollbarWidth: 'thin', scrollbarColor: '#c9a84c #f1f0ec' }}
            onMouseEnter={() => { isPaused.current = true; }}
            onMouseLeave={() => { isPaused.current = false; }}
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  variants={staggerItem}
                  layout
                  className="flex-none w-72 h-52 group relative rounded-2xl overflow-hidden cursor-pointer shadow-premium"
                  onClick={() => setLightbox(item)}
                >
                  <motion.img
                    variants={imageZoom}
                    initial="rest"
                    whileHover="hover"
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-semibold text-sm">{item.title}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Right Arrow */}
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scroll(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-11 h-11 rounded-full bg-white shadow-premium flex items-center justify-center text-primary hover:bg-accent hover:text-primary transition-colors opacity-0 group-hover/slider:opacity-100"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={lightbox.image}
              alt={lightbox.title}
              className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-premium-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
