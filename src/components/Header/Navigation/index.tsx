import NavigationList from './NavigationList';

export default function Navigation() {
  return (
    <nav>
      <ul className="relative space-x-6 sm:hidden lg:flex">
        <NavigationList />
      </ul>
      <span className="material-icons-round text-4xl visible flex lg:hidden">
        menu
      </span>
    </nav>
  );
}
