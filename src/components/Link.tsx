import { cn } from '@/utils/cn';
import { ReactNode } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

const Link = ({
  href,
  children,
  className,
  target = '_blank',
  rel = 'noopener noreferrer',
  ...props
}: LinkProps) => (
  <a href={href} className={cn('text-accent', className)} target={target} rel={rel} {...props}>
    {children}
  </a>
);

export default Link;
