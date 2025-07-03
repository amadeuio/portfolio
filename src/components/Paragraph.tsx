import { cn } from '../utils/cn';

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraph = ({ children, className }: ParagraphProps) => (
  <p className={cn('text-secondary leading-8', className)}>{children}</p>
);

export default Paragraph;
