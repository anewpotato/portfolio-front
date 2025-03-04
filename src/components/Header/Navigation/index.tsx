import Link from 'next/link';

const menuList = [
  { label: 'Profile', to: '/' },
  { label: 'Skils', to: '/' },
  { label: 'Carrer', to: '/' },
  { label: 'Projects', to: '/' },
  { label: 'Contect', to: '/' },
];

export default function Navigation() {
  return (
    <nav>
      <ul className="header-navigation header-navigation-lg">
        {menuList.map(({ label, to }) => (
          <li className="text-2xl font-bold italic" key={label}>
            <Link href={to}>{label}</Link>
          </li>
        ))}
      </ul>
      <span className="material-icons-round text-4xl visible flex lg:hidden">
        menu
      </span>
    </nav>
  );
}
