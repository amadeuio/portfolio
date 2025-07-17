import { ComponentType } from 'react';
import { IconType } from 'react-icons';

export interface Skill {
  name: string;
  icon: IconType | ComponentType;
  iconProps?: {
    size?: number;
    className?: string;
  };
}
