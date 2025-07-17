import type { Contact } from '@/types';
import { FaLinkedinIn } from 'react-icons/fa';
import { LuGithub } from 'react-icons/lu';

export const CONTACT: Contact = {
  email: 'amadeuserras@gmail.com',
  links: [
    {
      href: 'https://www.linkedin.com/in/amadeuio',
      icon: FaLinkedinIn,
    },
    {
      href: 'https://github.com/amadeuio',
      icon: LuGithub,
    },
  ],
};
