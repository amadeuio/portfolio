import { useNightModeContext } from '@/context/NightModeContext';
import { cn } from '@/utils/cn';
import { HiMiniMoon, HiMiniSun } from 'react-icons/hi2';

const DarkSwitch = () => {
  const { isNightMode, toggleNightMode } = useNightModeContext();

  return (
    <div
      className={cn(
        'relative h-[32px] w-[60px] cursor-pointer rounded-full p-[5px] transition-colors duration-300',
        isNightMode ? 'bg-[#121417]' : 'bg-[#eaedef]',
      )}
      onClick={toggleNightMode}
    >
      <HiMiniSun size={15} className="absolute top-[8px] left-[9px] text-[#c6c8cc]" />
      <HiMiniMoon size={14} className="absolute top-[8px] right-[9px] text-[#c6c8cc]" />
      <div
        className={cn(
          'h-[22px] w-[22px] rounded-full shadow-[0_0_3px_rgba(0,0,0,0.4)] transition-all duration-300',
          isNightMode ? 'translate-x-[27px] bg-[#1e1f26]' : 'translate-x-0 bg-white',
        )}
      />
    </div>
  );
};

export default DarkSwitch;
