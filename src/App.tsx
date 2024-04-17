import styles from "./App.module.scss";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import { useNightModeContext } from "./context/NightModeContext";

const App = () => {
  const { isNightMode } = useNightModeContext();

  return (
    <div className={`${styles.app} ${isNightMode ? styles.nightMode : ""}`}>
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
