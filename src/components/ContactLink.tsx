import { Link } from '@/components';
import type { ContactLink as ContactLinkType } from '@/types';

const ContactLink = ({ href, icon: Icon }: ContactLinkType) => (
  <Link
    href={href}
    className="hover:bg-border text-primary cursor-pointer rounded p-3 transition-colors duration-200"
  >
    <Icon size={22} />
  </Link>
);

export default ContactLink;
