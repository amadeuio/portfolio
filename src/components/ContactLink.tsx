import { Link } from '@/components';
import { FaLinkedinIn } from 'react-icons/fa';
import { LuGithub } from 'react-icons/lu';

type ContactKey = 'linkedin' | 'github';

interface ContactLinkProps {
  contactKey: ContactKey;
}

const ContactLink = ({ contactKey }: ContactLinkProps) => {
  const contactConfig: Record<ContactKey, { href: string; icon: React.ReactNode }> = {
    linkedin: {
      href: 'https://www.linkedin.com/in/amadeuio',
      icon: <FaLinkedinIn size={22} className="text-primary" />,
    },
    github: {
      href: 'https://github.com/amadeuio',
      icon: <LuGithub size={22} className="text-primary" />,
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
