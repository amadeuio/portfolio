import { useDarkModeContext } from '@/context/DarkModeContext';
import { Contact, Footer, Intro, Navbar, Projects, Skills } from '@/sections';
import { cn } from '@/utils/cn';

const App = () => {
  const { isDarkMode } = useDarkModeContext();

  return (
    <div
      className={cn(
        'text-primary bg-background box-border flex flex-col items-center px-5 transition-[background-color] duration-200 sm:px-10',
        isDarkMode ? 'dark' : '',
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
