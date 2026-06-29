import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/variants';

export default function SectionTitle({
  subtitle,
  title,
  description,
  align = 'center',
  light = false,
  className = '',
}) {
  const alignClass = {
    center: 'text-center mx-auto',
    left: 'text-left',
    right: 'text-right ml-auto',
  }[align];

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={`mb-12 md:mb-16 max-w-3xl ${alignClass} ${className}`}
    >
      {subtitle && (
        <span
          className={`inline-block text-sm font-semibold uppercase tracking-[0.2em] mb-3 ${
            light ? 'text-accent' : 'text-accent'
          }`}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
          light ? 'text-white' : 'text-primary'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-base sm:text-lg leading-relaxed ${light ? 'text-white/70' : 'text-muted'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
