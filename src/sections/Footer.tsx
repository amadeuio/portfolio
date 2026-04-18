import { Link, Paragraph } from '@/components';
import { TEXT } from '@/data';
import { LuGithub } from 'react-icons/lu';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-6 py-6 md:flex-row md:gap-16">
      <Paragraph level={2} className="text-center text-sm">
        {TEXT.credits} <Link href="https://github.com/amadeuserras">@amadeuserras</Link>
      </Paragraph>
      <Link
        href="https://github.com/amadeuserras/portfolio"
        className="text-accent flex items-center gap-2 text-sm"
      >
        <LuGithub size={18} className="text-accent" />
        Portfolio Repo
      </Link>
    </footer>
  );
};

export default Footer;
