import { useTranslation } from 'react-i18next';
import { Link } from '@/components';
import GitHubIcon from '../../icons/GitHubIcon';
import styles from './Footer.module.scss';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <span className={styles.credits}>
        {t('credits')}{' '}
        <Link href="https://github.com/amadeuio">
          @amadeuio
        </Link>
      </span>

      <Link
        href="https://github.com/amadeuio/portfolio"
        className={styles.portfolioRepo}
      >
        <GitHubIcon className={styles.gitHubIcon} />
        Portfolio Repo
      </Link>
    </footer>
  );
};

export default Footer;
