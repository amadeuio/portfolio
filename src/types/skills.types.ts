import type { ComponentType } from 'react';
import type { IconType } from 'react-icons';

export interface Skill {
  name: string;
  icon: IconType | ComponentType;
  iconProps?: {
    size?: number;
    className?: string;
  };
}
