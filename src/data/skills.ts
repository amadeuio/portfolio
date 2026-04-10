import { LinuxIcon, ViteIcon } from '@/custom-icons';
import type { Skill } from '@/types';
import { BiLogoTypescript } from 'react-icons/bi';
import { LuDatabase, LuShield } from 'react-icons/lu';
import {
  SiGit,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiStrapi,
  SiTailwindcss,
  SiTurborepo,
  SiVitest,
  SiZod,
} from 'react-icons/si';

export const SKILLS: Skill[] = [
  // Backend & Full-Stack
  {
    name: 'Node.js',
    icon: SiNodedotjs,
  },
  {
    name: 'NestJS',
    icon: SiNestjs,
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
  },
  {
    name: 'REST APIs',
    icon: SiStrapi,
  },
  {
    name: 'JWT Auth',
    icon: LuShield,
  },
  {
    name: 'Domain-Driven Design',
    icon: LuDatabase,
  },
  {
    name: 'Turborepo',
    icon: SiTurborepo,
  },
  // Frontend
  {
    name: 'React',
    icon: SiReact,
  },
  {
    name: 'TypeScript',
    icon: BiLogoTypescript,
    iconProps: {
      size: 20,
    },
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
  },
  {
    name: 'Zustand',
    icon: LuDatabase,
  },
  {
    name: 'Zod',
    icon: SiZod,
  },
  // Tools & Testing
  {
    name: 'Git',
    icon: SiGit,
  },
  {
    name: 'Vitest',
    icon: SiVitest,
  },
  {
    name: 'Vite',
    icon: ViteIcon,
  },
  {
    name: 'Linux',
    icon: LinuxIcon,
  },
];
