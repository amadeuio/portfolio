import { cn } from '../utils/cn';

interface ParagraphProps {
  level?: 1 | 2;
  children: React.ReactNode;
  className?: string;
}

const levelClasses: Record<ParagraphProps['level'], string> = {
  1: 'text-secondary leading-8',
  2: 'text-tertiary leading-6',
};

const Paragraph = ({ level = 1, children, className }: ParagraphProps) => (
  <p className={cn(levelClasses[level], className)}>{children}</p>
);

export default Paragraph;
