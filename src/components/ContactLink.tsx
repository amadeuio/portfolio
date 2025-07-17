import { Link } from '@/components';
import { ContactLink as ContactLinkType } from '@/types';

const ContactLink = ({ href, icon: Icon, iconProps }: ContactLinkType) => (
  <Link
    href={href}
    className="hover:bg-border cursor-pointer rounded p-3 transition-colors duration-200"
  >
    <Icon {...iconProps} />
  </Link>
);

export default ContactLink;
