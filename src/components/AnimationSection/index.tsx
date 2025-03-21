'use client';

import useRedux from '@src/hooks/useRedux';
import {
  NavigationSliceType,
  setSelectedNavigationIndex,
} from '@src/store/navigation/navigationSlice';
import { NavigationType } from '@src/types/header';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Title from './Title';

export default function AnimationSection({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  const [{ list }, updater] = useRedux<NavigationSliceType>('navigation');
  const ref = useRef<HTMLElement>(null);
  const controls = useAnimation();

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
      className="relative snap-center scroll-mt-16 h-[calc(100vh-144px)] flex items-center justify-center shadow-xl border-2 rounded-lg bg-white dark:bg-slate-800 dark:border-yellow-300/90 sm:overflow-y-auto sm:overflow-x-hidden"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          transition: { duration: 0.5, ease: 'easeIn' },
        },
        visible: {
          opacity: 1,
          transition: { duration: 1, ease: 'easeOut' },
        },
      }}
    >
      <Title title={id} />
      {children}
    </motion.section>
  );
}
