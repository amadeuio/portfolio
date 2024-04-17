import styles from "./Skills.module.scss";
import { skillsTitle } from "../../data/locales";
import { useLangContext } from "../../context/LangContext";
import { skillsData } from "./SkillsData/SkillsData";

const Skills = () => {
  const { lang } = useLangContext();

  return (
    <div className={styles.skills}>
      <h2>{skillsTitle[lang]}</h2>
      <ul className={styles.skillList}>
        {skillsData.map((skill, index) => (
          <li key={index} className={styles.skillTag}>
            {skill.icon}
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
