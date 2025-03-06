'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const menuList = [
  { label: 'Profile', to: '#profile' },
  { label: 'Skills', to: '#skills' },
  { label: 'Career', to: '#career' },
  { label: 'Projects', to: '#projects' },
  { label: 'Etc', to: '#etc' },
  { label: 'Contact', to: '#contact' },
];

export default function Navigation() {
  return (
    <nav>
      <ul className="header-navigation header-navigation-lg">
        {menuList.map(({ label, to }) => (
          <motion.li
            className="text-2xl font-bold italic"
            key={label}
            whileHover={{
              scale: 0.8,
              transition: { type: 'spring', stiffness: 200 },
            }}
          >
            <Link href={to}>{label}</Link>
          </motion.li>
        ))}
      </ul>
      <span className="material-icons-round text-4xl visible flex lg:hidden">
        menu
      </span>
    </nav>
  );
}
