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

export const skillsData: Skill[] = [
  {
    icon: SiReact,
    name: 'React',
  },
  {
    icon: BiLogoTypescript,
    name: 'TypeScript',
    iconProps: {
      size: 20,
    },
  },
  {
    icon: SiCss3,
    name: 'CSS / SASS',
  },
  {
    icon: SiNodedotjs,
    name: 'NodeJS',
  },
  {
    icon: ViteIcon,
    name: 'Vite',
  },
  {
    icon: SiTailwindcss,
    name: 'Tailwind',
  },
  {
    icon: SiRedux,
    name: 'Redux',
  },
  {
    icon: SiNextdotjs,
    name: 'Next',
  },
  {
    icon: SiJest,
    name: 'Jest',
  },
  {
    icon: SiWebpack,
    name: 'Webpack',
  },
  {
    icon: SiReactrouter,
    name: 'React Router',
  },
  {
    icon: SiGit,
    name: 'Git',
  },
  {
    icon: LuTerminal,
    name: 'Bash',
  },
  {
    icon: LinuxIcon,
    name: 'Linux',
  },
  {
    icon: SiStyledcomponents,
    name: 'CSS-in-JS',
  },
  {
    icon: SiStrapi,
    name: 'REST APIs',
  },
  {
    icon: SiHtml5,
    name: 'HTML',
  },
  {
    icon: LuDatabase,
    name: 'Data Structures',
  },
];
