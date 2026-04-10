import { DarkSwitch } from '@/components';
import { useDarkModeContext } from '@/context/DarkModeContext';

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkModeContext();

  return (
    <nav className="mb-5 flex items-center justify-between py-4 sm:py-8">
      <div className="text-xl font-semibold">amadeuio</div>
      <div className="flex items-center gap-x-6">
        <DarkSwitch isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
      </div>
    </nav>
  );
};

export default Navbar;
