'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function AnimationSection({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const controls = useAnimation();
  const [scrollDir, setScrollDir] = useState<'up' | 'down'>('down');
  const prevScrollY = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY.current) {
        setScrollDir('down');
      } else {
        setScrollDir('up');
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        } else {
          controls.start('hidden');
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <motion.section
      ref={ref}
      id={id}
      className="snap-center scroll-mt-16 h-[calc(100vh-144px)] flex items-center justify-center shadow-2xl border-2 rounded-lg bg-white"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          y: scrollDir === 'down' ? -50 : 50,
          transition: { duration: 0.5, ease: 'easeIn' },
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: 'easeOut' },
        },
      }}
    >
      {children}
    </motion.section>
  );
}
