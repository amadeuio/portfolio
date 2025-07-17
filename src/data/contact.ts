import type { Contact } from '@/types';
import { FaLinkedinIn } from 'react-icons/fa';
import { LuGithub } from 'react-icons/lu';

export const CONTACT: Contact = {
  email: 'amadeuserras@gmail.com',
  links: [
    {
      href: 'https://www.linkedin.com/in/amadeuio',
      icon: FaLinkedinIn,
      iconProps: {
        size: 22,
        className: 'text-primary',
      },
    },
    {
      href: 'https://github.com/amadeuio',
      icon: LuGithub,
      iconProps: {
        size: 22,
        className: 'text-primary',
      },
    },
  ],
};
