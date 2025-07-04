import { Link } from '@/components';
import GitHubIcon from '../icons/GitHubIcon';
import LinkedInIcon from '../icons/LinkedInIcon';

type ContactKey = 'linkedin' | 'github';

interface ContactLinkProps {
  contactKey: ContactKey;
}

const ContactLink = ({ contactKey }: ContactLinkProps) => {
  const contactConfig: Record<ContactKey, { href: string; icon: React.ReactNode }> = {
    linkedin: {
      href: 'https://www.linkedin.com/in/amadeuio',
      icon: <LinkedInIcon className="fill-primary h-6 w-6" />,
    },
    github: {
      href: 'https://github.com/amadeuio',
      icon: <GitHubIcon className="stroke-primary h-6 w-6" />,
    },
  };

  return (
    <Link
      href={contactConfig[contactKey].href}
      className="hover:bg-border cursor-pointer rounded p-3 transition-colors duration-200"
    >
      {contactConfig[contactKey].icon}
    </Link>
  );
};

export default ContactLink;
