import Menu from '../Menu';
import NavigationList from './NavigationList';

export default function Navigation() {
  return (
    <nav>
      <ul className="relative space-x-6 sm:hidden lg:flex">
        <NavigationList />
      </ul>
      <Menu />
    </nav>
  );
}
