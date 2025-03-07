'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import useUnderline from '@hooks/useUnderline';
import {
  NavigationSliceType,
  setSelectedNavigationIndex,
} from '@src/store/navigation/navigationSlice';
import useRedux from '@src/hooks/useRedux';

export default function NavigationList() {
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [{ list: menuList, selectedIndex }, updater] =
    useRedux<NavigationSliceType>('navigation');

  const underlineStyle = useUnderline(itemRefs, selectedIndex);

  const handleNavigationClick = (index: number) => {
    updater(setSelectedNavigationIndex, index);
  };

  return (
    <>
      {menuList.map(({ id, to }, index: number) => (
        <motion.li
          ref={(el) => {
            if (el) itemRefs.current[index] = el;
          }}
          key={id}
          className="text-2xl font-bold italic cursor-pointer"
          whileHover={{
            scale: 0.8,
          }}
        >
          <Link href={to} onClick={() => handleNavigationClick(index)}>
            {id}
          </Link>
        </motion.li>
      ))}
      <motion.div
        layoutId="underline"
        className="absolute bottom-[-17px] h-1 rounded-sm bg-[#2D594A] transition-all duration-500"
        style={{
          width: `${underlineStyle.width}px`,
          left: `${underlineStyle.left}px`,
        }}
      />
    </>
  );
}
