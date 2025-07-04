import { Link } from '@/components';
import { useTranslation } from 'react-i18next';
import GitHubIcon from '../../icons/GitHubIcon';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="text-tertiary flex items-center justify-center gap-15 py-7 text-sm md:flex-col md:gap-5">
      <span className="text-center leading-relaxed">
        {t('credits')} <Link href="https://github.com/amadeuio">@amadeuio</Link>
      </span>

      <Link
        href="https://github.com/amadeuio/portfolio"
        className="text-accent flex items-center justify-center gap-1.25"
      >
        <GitHubIcon className="stroke-accent h-5 w-5" />
        Portfolio Repo
      </Link>
    </footer>
  );
};

export default Footer;
