import { motion } from 'framer-motion';
import { cardHover } from '../animations/variants';

export default function AnimatedCard({ children, className = '', onClick }) {
  return (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.99 }}
      onClick={onClick}
      className={`rounded-2xl shadow-premium transition-shadow duration-300 hover:shadow-premium-lg ${className}`}
    >
      {children}
    </motion.div>
  );
}
