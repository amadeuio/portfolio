import { cn } from '../utils/cn';
import Title from './Title';

interface SectionProps {
  title: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

const Section = ({ title, className, children }: SectionProps) => (
  <section className={cn('flex flex-col gap-y-8', className)}>
    <Title level={2}>{title}</Title>
    <div>{children}</div>
  </section>
);

export default Section;
