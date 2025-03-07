'use client';

import useRedux from '@src/hooks/useRedux';
import {
  NavigationSliceType,
  setSelectedNavigationIndex,
} from '@src/store/navigation/navigationSlice';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';

import { useEffect, useState } from 'react';

const animationDuration = 0.1;

export default function Menu() {
  const controls = useAnimation();

  const [isOpen, setIsOpen] = useState(false);

  const [{ list: menuList, selectedIndex }, updater] =
    useRedux<NavigationSliceType>('navigation');

  useEffect(() => {
    if (isOpen) controls.start('visible');
    else controls.start('hidden');
  }, [isOpen]);

  const handleNavigationClick = (index: number) => {
    updater(setSelectedNavigationIndex, index);
  };

  return (
    <>
      <motion.span
        className="block material-icons-round text-4xl visible lg:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        animate={{
          rotate: isOpen ? -90 : 0,
          transition: { duration: animationDuration },
        }}
      >
        menu
      </motion.span>
      <motion.div
        className="absolute top-5 right-0 h-screen w-screen bg-black/10 text-white backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {
            opacity: 0,
            y: 50,
            transition: { duration: animationDuration, ease: 'easeIn' },
          },
          visible: {
            opacity: 1,

            transition: { duration: animationDuration, ease: 'easeOut' },
          },
        }}
      >
        <div className=" divide-solid divide-y-2 float-right border-l-4 border-[#2d594adb] p-6 w-56 h-screen text-white text-2xl font-bold bg-header-middle">
          {menuList.map(({ id, to }, index: number) => (
            <div
              key={id}
              className={`py-2 hover:text-black ${selectedIndex === index && 'text-[#ff4949]'}`}
            >
              <Link href={to} onClick={() => handleNavigationClick(index)}>
                {id}
              </Link>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
