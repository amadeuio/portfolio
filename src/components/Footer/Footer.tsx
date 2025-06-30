import { useTranslation } from "react-i18next";
import GitHubIcon from "../../icons/GitHubIcon";
import styles from "./Footer.module.scss";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <span className={styles.credits}>
        {t("credits")}{" "}
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
