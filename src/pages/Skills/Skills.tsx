import { useTranslation } from 'react-i18next';
import { SkillBadge } from '@/components';
import { skillsData } from './SkillsData/SkillsData';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-8">
      <h2>{t('skillsTitle')}</h2>
      <div className="flex items-center flex-wrap gap-2">
        {skillsData.map((skill, index) => (
          <SkillBadge key={index} icon={skill.icon} name={skill.name} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
