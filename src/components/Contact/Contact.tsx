import GitHubIcon from "../../icons/GitHubIcon";
import LinkedInIcon from "../../icons/LinkedInIcon";
import ContactEmail from "./ContactEmail/ContactEmail";
import styles from "./Contact.module.scss";
import { contact, contactDescription } from "../../data/locales";
import { useLangContext } from "../../context/LangContext";

const Contact = () => {
  const { lang } = useLangContext();

  return (
    <div className={styles.contact}>
      <h2>{contact[lang]}</h2>
      <p>{contactDescription[lang]}</p>
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
