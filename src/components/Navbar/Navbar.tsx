import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';
import NightSwitch from './NightSwitch/NightSwitch';

const Navbar = () => {
  const { i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.logo}>amadeuio</div>
      </div>
      <div className={styles.right}>
        <div className={styles.toggleLang} onClick={toggleLang}>
          {i18n.language === 'en' ? 'ES' : 'EN'}
        </div>
        <NightSwitch />
      </div>
    </nav>
  );
};

export default Navbar;
