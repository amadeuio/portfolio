import { CursorIcon, LinuxIcon, ViteIcon } from '@/custom-icons';
import type { Skill } from '@/types';
import { BiLogoTypescript } from 'react-icons/bi';
import { LuDatabase, LuShield } from 'react-icons/lu';
import {
  SiExpress,
  SiGit,
  SiNestjs,
  SiNextdotjs,
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
  {
    name: 'Node.js',
    icon: SiNodedotjs,
  },
  {
    name: 'Express',
    icon: SiExpress,
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
    name: 'Jose',
    icon: LuShield,
  },
  {
    name: 'Zod',
    icon: SiZod,
  },
  {
    name: 'Domain-Driven Design',
    icon: LuDatabase,
  },
  {
    name: 'Turborepo',
    icon: SiTurborepo,
  },
  {
    name: 'Nest.js',
    icon: SiNestjs,
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
  },
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
    name: 'Cursor',
    icon: CursorIcon,
  },
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
