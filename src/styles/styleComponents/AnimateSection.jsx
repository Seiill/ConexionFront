import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const AnimateSection = ({ children }) => {
  const [inView, setInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          setHasAnimated(true);
        } else {
          setInView(false);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0 }}
      animate={{ scale: hasAnimated ? 1 : 0 }}
      transition={{ duration: 0.8, ease: [0.68, -0.55, 0.27, 1.55] }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateSection;
