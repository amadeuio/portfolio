import { Link, Paragraph } from '@/components';
import GitHubIcon from '@/icons/GitHubIcon';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="flex flex-col items-center justify-center gap-6 py-6 md:flex-row md:gap-16">
      <Paragraph level={2} className="text-center text-sm">
        {t('credits')} <Link href="https://github.com/amadeuio">@amadeuio</Link>
      </Paragraph>
      <Link
        href="https://github.com/amadeuio/portfolio"
        className="text-accent flex items-center gap-2 text-sm"
      >
        <GitHubIcon className="stroke-accent h-5 w-5" />
        Portfolio Repo
      </Link>
    </footer>
  );
};

export default Footer;
