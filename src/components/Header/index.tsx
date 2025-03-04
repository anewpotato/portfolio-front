import '@styles/header.scss';

import { pacificoFont } from 'src/constant/font/pacifico';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="header">
      <span className={`text-3xl  ${pacificoFont.className}`}>
        Yu SeungJong&apos;s Portfolio
      </span>
      <Navigation />
    </header>
  );
}
