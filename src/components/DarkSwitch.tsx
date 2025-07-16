import { cn } from '@/utils/cn';
import { HiMiniMoon, HiMiniSun } from 'react-icons/hi2';

interface DarkSwitchProps {
  className?: string;
  isDarkMode: boolean;
  onToggle: () => void;
}

const DarkSwitch = ({ className, isDarkMode, onToggle }: DarkSwitchProps) => (
  <div
    className={cn(
      className,
      'relative h-[32px] w-[60px] cursor-pointer rounded-full p-[5px] transition-colors duration-300',
      isDarkMode ? 'bg-[#121417]' : 'bg-[#eaedef]',
    )}
    onClick={onToggle}
  >
    <HiMiniSun size={14} className="absolute top-[8px] left-[9px] text-[#c6c8cc]" />
    <HiMiniMoon size={13} className="absolute top-[9px] right-[9px] text-[#c6c8cc]" />
    <div
      className={cn(
        'h-[22px] w-[22px] rounded-full shadow-[0_0_3px_rgba(0,0,0,0.4)] transition-all duration-300',
        isDarkMode ? 'translate-x-[27px] bg-[#1e1f26]' : 'translate-x-0 bg-white',
      )}
    />
  </div>
);

export default DarkSwitch;
