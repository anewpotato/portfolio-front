import Link from 'next/link';

import { pacificoFont } from '@src/constant/fonts';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between flex-row text-gray-100 dark:from-[black] dark:via-slate-700 dark:to-slate-800 bg-gradient-to-r from-header-start via-header-middle to-header-end p-4 shadow-lg sticky top-0 z-10">
      <Link href="/">
        <span className={`text-3xl  ${pacificoFont.className}`}>
          Yu SeungJong&apos;s Portfolio
        </span>
      </Link>
      <Navigation />
    </header>
  );
}
