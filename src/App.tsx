import { cn } from '@/utils/cn';
import { useNightModeContext } from './context/NightModeContext';
import Contact from './pages/Contact/Contact';
import Footer from './pages/Footer/Footer';
import Intro from './pages/Intro/Intro';
import Navbar from './pages/Navbar/Navbar';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';

const App = () => {
  const { isNightMode } = useNightModeContext();

  return (
    <div
      className={cn(
        'text-primary bg-background box-border flex min-h-screen flex-col items-center overflow-x-hidden px-10 text-base transition-colors duration-200',
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
