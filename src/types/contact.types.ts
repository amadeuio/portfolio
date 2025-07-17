import type { ComponentType } from 'react';
import type { IconType } from 'react-icons/lib';

export interface ContactLink {
  href: string;
  icon: IconType | ComponentType;
  iconProps: {
    size: number;
    className: string;
  };
}

export interface Contact {
  email: string;
  links: ContactLink[];
}
