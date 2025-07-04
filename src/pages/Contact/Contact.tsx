import { useTranslation } from 'react-i18next';
import { Link } from '@/components';
import GitHubIcon from '../../icons/GitHubIcon';
import LinkedInIcon from '../../icons/LinkedInIcon';
import styles from './Contact.module.scss';
import ContactEmail from './ContactEmail/ContactEmail';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.contact}>
      <h2>{t('contact')}</h2>
      <p>{t('contactDescription')}</p>
      <div className={styles.links}>
        <ContactEmail />
        <Link href="https://www.linkedin.com/in/amadeuio">
          <div className={styles.iconContainer}>
            <LinkedInIcon className={styles.linkedInIcon} />
          </div>
        </Link>
        <Link href="https://github.com/amadeuio">
          <div className={styles.iconContainer}>
            <GitHubIcon className={styles.gitHubIcon} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
