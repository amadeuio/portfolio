import { Contact, Footer, Intro, Navbar, Projects, Skills } from '@/sections';
import { cn } from '@/utils/cn';
import { useNightModeContext } from './context/NightModeContext';

const App = () => {
  const { isNightMode } = useNightModeContext();

  return (
    <div
      className={cn(
        'text-primary bg-background box-border flex flex-col items-center px-5 transition-[background-color] duration-200 sm:px-10',
        isNightMode ? 'dark' : '',
      )}
    >
      <div className="flex max-w-5xl flex-col gap-24">
        <Navbar />
        <Intro />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
