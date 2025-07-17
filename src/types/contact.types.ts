import type { IconType } from 'react-icons/lib';

export interface ContactLink {
  href: string;
  icon: IconType;
}

export interface Contact {
  email: string;
  links: ContactLink[];
}
