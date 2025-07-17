import { LinuxIcon, ViteIcon } from '@/custom-icons';
import { Skill } from '@/types';
import { BiLogoTypescript } from 'react-icons/bi';
import { LuDatabase, LuTerminal } from 'react-icons/lu';
import {
  SiCss3,
  SiGit,
  SiHtml5,
  SiJest,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiStrapi,
  SiStyledcomponents,
  SiTailwindcss,
  SiWebpack,
} from 'react-icons/si';

export const SKILLS: Skill[] = [
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
    name: 'CSS / SASS',
    icon: SiCss3,
  },
  {
    name: 'NodeJS',
    icon: SiNodedotjs,
  },
  {
    name: 'Vite',
    icon: ViteIcon,
  },
  {
    name: 'Tailwind',
    icon: SiTailwindcss,
  },
  {
    name: 'Redux',
    icon: SiRedux,
  },
  {
    name: 'Next',
    icon: SiNextdotjs,
  },
  {
    name: 'Jest',
    icon: SiJest,
  },
  {
    name: 'Webpack',
    icon: SiWebpack,
  },
  {
    name: 'React Router',
    icon: SiReactrouter,
  },
  {
    name: 'Git',
    icon: SiGit,
  },
  {
    name: 'Bash',
    icon: LuTerminal,
  },
  {
    name: 'Linux',
    icon: LinuxIcon,
  },
  {
    name: 'CSS-in-JS',
    icon: SiStyledcomponents,
  },
  {
    name: 'REST APIs',
    icon: SiStrapi,
  },
  {
    name: 'HTML',
    icon: SiHtml5,
  },
  {
    name: 'Data Structures',
    icon: LuDatabase,
  },
];
