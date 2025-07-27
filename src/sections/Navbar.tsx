import { DarkSwitch } from '@/components';
import { useDarkModeContext } from '@/context/DarkModeContext';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { i18n } = useTranslation();
  const { isDarkMode, toggleDarkMode } = useDarkModeContext();

  const handleLanguageClick = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  return (
    <nav className="mb-5 flex items-center justify-between py-4 sm:py-8">
      <div className="text-xl font-semibold">amadeuio</div>
      <div className="flex items-center gap-x-6">
        <div className="text-tertiary w-[23px] cursor-pointer" onClick={handleLanguageClick}>
          {i18n.language === 'en' ? 'ES' : 'EN'}
        </div>
        <DarkSwitch isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
      </div>
    </nav>
  );
};

export default Navbar;
