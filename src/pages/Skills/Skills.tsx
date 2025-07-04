import { useTranslation } from 'react-i18next';
import { skillsData } from './SkillsData/SkillsData';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-8">
      <h2>{t('skillsTitle')}</h2>
      <ul className="flex items-center flex-wrap gap-2">
        {skillsData.map((skill, index) => (
          <li key={index} className="cursor-default flex items-center gap-2 border border-border rounded-md p-4 whitespace-nowrap">
            {skill.icon}
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
