import { useLangContext } from "../../context/LangContext";
import NightSwitch from "./NightSwitch/NightSwitch";
import styles from "./Navbar.module.scss";

const Navbar = () => {
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
        <NightSwitch />
      </div>
    </nav>
  );
};

export default Navbar;
