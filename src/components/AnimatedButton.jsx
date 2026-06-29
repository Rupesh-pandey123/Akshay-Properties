import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AnimatedButton({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
}) {
  const [ripples, setRipples] = useState([]);

  const variants = {
    primary:
      'bg-accent text-primary hover:bg-accent-light shadow-gold hover:shadow-lg',
    secondary:
      'bg-transparent text-white border-2 border-white/30 hover:border-accent hover:text-accent',
    outline:
      'bg-transparent text-primary border-2 border-primary/20 hover:border-accent hover:text-accent',
    ghost:
      'bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 border border-white/20',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-sm',
    lg: 'px-9 py-4 text-base',
  };

  const handleRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((prev) => [...prev, { id, x, y }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 600);
  };

  const baseClasses = `relative overflow-hidden inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 pointer-events-none"
          initial={{ width: 0, height: 0, x: ripple.x, y: ripple.y, opacity: 0.5 }}
          animate={{ width: 300, height: 300, x: ripple.x - 150, y: ripple.y - 150, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      ))}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={(e) => {
          handleRipple(e);
          onClick?.(e);
        }}
        className={baseClasses}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={(e) => {
        handleRipple(e);
        onClick?.(e);
      }}
      className={baseClasses}
    >
      {content}
    </motion.button>
  );
}
