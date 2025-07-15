import { Title } from '@/components';
import { cn } from '@/utils/cn';

interface SectionProps {
  title: React.ReactNode;
  className?: string;
  children: React.ReactNode;
  childrenClassName?: string;
}

const Section = ({ title, className, children, childrenClassName }: SectionProps) => (
  <section className={cn('flex flex-col gap-y-8', className)}>
    <Title level={2}>{title}</Title>
    <div className={childrenClassName}>{children}</div>
  </section>
);

export default Section;
