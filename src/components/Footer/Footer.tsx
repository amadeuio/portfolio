import { useLangContext } from "../../context/LangContext";
import { credits } from "../../data/locales";
import GitHubIcon from "../../icons/GitHubIcon";
import styles from "./Footer.module.scss";

const Footer = () => {
  const { lang } = useLangContext();

  return (
    <footer className={styles.footer}>
      <span className={styles.credits}>
        {credits[lang]}{" "}
        <a href="https://github.com/amadeuio" target="_blank" rel="noopener noreferrer">
          @amadeuio
        </a>
      </span>

      <a
        href="https://github.com/amadeuio/portfolio"
        className={styles.portfolioRepo}
        target="_blank"
        rel="noopener noreferrer">
        <GitHubIcon className={styles.gitHubIcon} />
        Portfolio Repo
      </a>
    </footer>
  );
};

export default Footer;
