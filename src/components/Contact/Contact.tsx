import GitHubIcon from "../../icons/GitHubIcon";
import LinkedInIcon from "../../icons/LinkedInIcon";
import ContactEmail from "./ContactEmail/ContactEmail";
import styles from "./Contact.module.scss";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.contact}>
      <h2>{t("contact")}</h2>
      <p>{t("contactDescription")}</p>
      <div className={styles.links}>
        <ContactEmail />
        <a href="https://www.linkedin.com/in/amadeuio" target="_blank" rel="noopener noreferrer">
          <div className={styles.iconContainer}>
            <LinkedInIcon className={styles.linkedInIcon} />
          </div>
        </a>
        <a href="https://github.com/amadeuio" target="_blank" rel="noopener noreferrer">
          <div className={styles.iconContainer}>
            <GitHubIcon className={styles.gitHubIcon} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
