'use client';

import useRedux from '@src/hooks/useRedux';
import {
  NavigationSliceType,
  setSelectedNavigationIndex,
} from '@src/store/navigation/navigationSlice';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';

const iconClassName =
  'material-symbols-rounded rounded-full sm:p-1 md:p-2 lg:p-3 cursor-pointer border bg-emerald-300 text-white icon-style icon-weight-700 icon-optical-size-24';

export default function ActionButtons() {
  const [{ list: menuList }, updater] =
    useRedux<NavigationSliceType>('navigation');
  const controls = useAnimation();

  const [isOpen, setIsOpen] = useState(false);

  const handleUpButtonClick = () => {
    updater(setSelectedNavigationIndex, 0);
  };

  const handleActionClick = () => {
    setIsOpen(!isOpen);
    controls.start(isOpen ? 'hidden' : 'visible');
  };

  return (
    <div className="fixed bottom-10 right-5 flex flex-col gap-2">
      <motion.div
        className="flex flex-col gap-2"
        initial="hidden"
        animate={controls}
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.3, ease: 'easeIn' }}
      >
        <span className={iconClassName}>file_save</span>
        <span className={iconClassName}>dark_mode</span>
      </motion.div>
      <motion.span
        className={iconClassName}
        onClick={handleActionClick}
        animate={{
          rotate: isOpen ? -45 : 0,
          transition: { duration: 0.1 },
        }}
      >
        add
      </motion.span>
      <Link href={menuList[0].to} onClick={handleUpButtonClick}>
        <span className={iconClassName}>arrow_upward</span>
      </Link>
    </div>
  );
}
