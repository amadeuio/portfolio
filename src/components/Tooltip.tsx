import { cn } from '@/utils/cn';
import { useState } from 'react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  onTooltipOpen?: () => void;
}

const Tooltip = ({ content, children, onTooltipOpen }: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <span className="relative">
      <span
        onMouseEnter={() => {
          setVisible(true);
          onTooltipOpen?.();
        }}
        onMouseLeave={() => setVisible(false)}
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
      >
        {children}
      </span>
      <div
        className={cn(
          'absolute -top-8 left-1/2 z-10 -translate-x-1/2 rounded bg-slate-500 px-2 py-1 text-xs text-gray-100 shadow-md transition-all duration-100 ease-in-out',
          visible
            ? 'pointer-events-auto scale-100 opacity-100'
            : 'pointer-events-none scale-80 opacity-0',
        )}
      >
        {content}
        <div
          className="absolute top-full left-1/2 h-0 w-0 -translate-x-1/2 border-x-5 border-t-4 border-x-transparent border-t-slate-500"
          aria-hidden="true"
        />
      </div>
    </span>
  );
};

export default Tooltip;
