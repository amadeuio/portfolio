import GitHubIcon from "../../icons/GitHubIcon";
import LinkedInIcon from "../../icons/LinkedInIcon";
import StackoverflowIcon from "../../icons/StackoverflowIcon";
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
        <div className={styles.iconContainer}>
          <LinkedInIcon className={styles.linkedInIcon} />
        </div>
        <div className={styles.iconContainer}>
          <GitHubIcon className={styles.gitHubIcon} />
        </div>
        <div className={styles.iconContainer}>
          <StackoverflowIcon className={styles.stackOverflowIcon} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
