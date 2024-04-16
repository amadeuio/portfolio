import { useLangContext } from "../../context/LangContext";
import { useNightModeContext } from "../../context/NightModeContext";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const { toggleNightMode } = useNightModeContext();
  const { lang, toggleLang } = useLangContext();

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.logo}>amadeuio</div>
      </div>
      <div className={styles.right}>
        <div className={styles.toggleLang} onClick={toggleLang}>
          {lang.toUpperCase()}
        </div>
        <div className={styles.toggleNight} onClick={toggleNightMode}>
          🌃
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
