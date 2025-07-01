import { useTranslation } from 'react-i18next';
import styles from './Skills.module.scss';
import { skillsData } from './SkillsData/SkillsData';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.skills}>
      <h2>{t('skillsTitle')}</h2>
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
