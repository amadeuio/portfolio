import { cn } from '../utils/cn';
import Title from './Title';

interface SectionProps {
  title: React.ReactNode;
  level?: 1 | 2 | 3;
  className?: string;
  children: React.ReactNode;
}

const Section = ({ title, level = 2, className = '', children }: SectionProps) => (
  <section className={cn('flex flex-col gap-y-8', className)}>
    <Title level={level}>{title}</Title>
    <div>{children}</div>
  </section>
);

export default Section;
