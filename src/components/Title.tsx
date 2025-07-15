import { cn } from '@/utils/cn';

interface TitleProps {
  level?: 1 | 2 | 3;
  children: React.ReactNode;
  className?: string;
}

const levelClasses: Record<TitleProps['level'], string> = {
  1: 'text-5xl sm:text-7xl tracking-tightest',
  2: 'text-3xl sm:text-4xl tracking-tight',
  3: 'text-xl tracking-tight',
};

const Title = ({ level = 1, children, className = '' }: TitleProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag className={cn('font-semibold', levelClasses[level], className)}>{children}</Tag>;
};

export default Title;
