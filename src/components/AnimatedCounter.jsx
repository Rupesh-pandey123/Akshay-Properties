import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useCountUp } from 'react-countup';

export default function AnimatedCounter({ value, suffix = '', prefix = '', duration = 2.5, className = '' }) {
  const ref = useRef(null);
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const setRefs = (node) => {
    ref.current = node;
    inViewRef(node);
  };

  const { start, update } = useCountUp({
    ref,
    start: 0,
    end: value,
    duration,
    separator: ',',
    suffix,
    prefix,
  });

  useEffect(() => {
    if (inView) {
      start();
    }
  }, [inView, start]);

  useEffect(() => {
    update(value);
  }, [value, update]);

  return (
    <span ref={setRefs} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
