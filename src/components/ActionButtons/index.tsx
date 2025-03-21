'use client';

import useRedux from '@src/hooks/useRedux';
import {
  NavigationSliceType,
  setSelectedNavigationIndex,
} from '@src/store/navigation/navigationSlice';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';
import FileSaver from 'file-saver';
import Button from './Button';

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

  const handleFileDownloadClick = () => {
    FileSaver.saveAs('/pdf/download.pdf', '[유승종]이력서.pdf');
  };

  return (
    <div className="fixed bottom-10 right-5 flex flex-col gap-2">
      <motion.div
        className="flex flex-col gap-2"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, display: 'none' },
          visible: { opacity: 1, display: 'flex' },
        }}
        transition={{ duration: 0.3, ease: 'easeIn' }}
      >
        <Button onButtonClick={handleFileDownloadClick}>file_save</Button>

        <Button>dark_mode</Button>
      </motion.div>
      <Button
        onButtonClick={handleActionClick}
        animate={{
          rotate: isOpen ? -45 : 0,
          transition: { duration: 0.1 },
        }}
      >
        add
      </Button>
      <Link href={menuList[0].to} onClick={handleUpButtonClick}>
        <Button>arrow_upward</Button>
      </Link>
    </div>
  );
}
