import styles from "./Skills.module.scss";
import { skills } from "../../data/locales";
import { useLangContext } from "../../context/LangContext";

const Skills = () => {
  const { lang } = useLangContext();

  return (
    <div className={styles.skills}>
      <h2>{skills[lang]}</h2>
      <ul className={styles.skillList}>
        <li className={styles.skillTag}>React</li>
        <li className={styles.skillTag}>TypeScript / JavaScript</li>
        <li className={styles.skillTag}>CSS / SASS</li>
        <li className={styles.skillTag}>NodeJS</li>
        <li className={styles.skillTag}>Vite</li>
        <li className={styles.skillTag}>Jest</li>
        <li className={styles.skillTag}>Webpack</li>
        <li className={styles.skillTag}>Git</li>
        <li className={styles.skillTag}>Bash</li>
        <li className={styles.skillTag}>Linux</li>
        <li className={styles.skillTag}>CSS-in-JS</li>
        <li className={styles.skillTag}>REST APIs</li>
        <li className={styles.skillTag}>HTML</li>
        <li className={styles.skillTag}>Data Structures</li>
      </ul>
    </div>
  );
};

export default Skills;
