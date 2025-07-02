import { cn } from '../utils/cn';

interface TitleProps {
  level?: 1 | 2 | 3;
  children: React.ReactNode;
  className?: string;
}

const baseClasses = 'font-semibold';

const levelClasses: Record<TitleProps['level'], string> = {
  1: 'text-[70px] tracking-[-3.7px]',
  2: 'text-[40px] tracking-[-2.6px]',
  3: 'text-[20px] tracking-[-0.3px]',
};

const Title = ({ level = 1, children, className = '' }: TitleProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag className={cn(baseClasses, levelClasses[level], className)}>{children}</Tag>;
};

export default Title;
