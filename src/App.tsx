import styles from './App.module.scss';
import Contact from './pages/Contact/Contact';
import Footer from './pages/Footer/Footer';
import Intro from './pages/Intro/Intro';
import Navbar from './pages/Navbar/Navbar';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';
import { useNightModeContext } from './context/NightModeContext';

const App = () => {
  const { isNightMode } = useNightModeContext();

  return (
    <div className={`${styles.app} ${isNightMode ? styles.nightMode : ''}`}>
      <div className={styles.content}>
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
