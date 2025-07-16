import { DarkSwitch } from '@/components';
import { useNightModeContext } from '@/context/NightModeContext';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { i18n } = useTranslation();
  const { isNightMode, toggleNightMode } = useNightModeContext();

  const handleLanguageClick = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  return (
    <nav className="mb-5 flex justify-between py-4 sm:py-8">
      <div className="flex items-center">
        <div className="text-xl font-semibold">amadeuio</div>
      </div>
      <div className="flex items-center gap-x-6">
        <div className="text-tertiary w-[23px] cursor-pointer" onClick={handleLanguageClick}>
          {i18n.language === 'en' ? 'ES' : 'EN'}
        </div>
        <DarkSwitch isDarkMode={isNightMode} onToggle={toggleNightMode} />
      </div>
    </nav>
  );
};

export default Navbar;
