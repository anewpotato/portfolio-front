'use client';

import useRedux from '@src/hooks/useRedux';
import useScrollDirection from '@src/hooks/useScrollDirection';
import { setSelectedNavigationIndex } from '@src/store/navigation/navigationSlice';
import { NavigationType } from '@src/types/header';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function AnimationSection({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  const [{ list }, updater] = useRedux('navigation');
  const ref = useRef<HTMLElement>(null);
  const controls = useAnimation();
  const scrollDir = useScrollDirection();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const index = list.findIndex((nav: NavigationType) => nav.id === id);

          updater(setSelectedNavigationIndex, index);

          controls.start('visible');
        } else {
          controls.start('hidden');
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls, id, list, updater]);

  return (
    <motion.section
      ref={ref}
      id={String(id).toLowerCase()}
      className="snap-center scroll-mt-16 h-[calc(100vh-144px)] flex items-center justify-center shadow-xl border-2 rounded-lg bg-white"
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
