import { useDarkModeContext } from '@/context/DarkModeContext';
import { Contact, Footer, Intro, Navbar, Projects, Skills, Testimonials } from '@/sections';
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
      <div className="flex max-w-5xl flex-col gap-16">
        <Navbar />
        <Intro />
        <Projects />
        <Testimonials />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
