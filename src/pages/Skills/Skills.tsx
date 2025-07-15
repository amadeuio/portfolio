import { Section, SkillBadge } from '@/components';
import { useTranslation } from 'react-i18next';
import { skillsData } from './SkillsData/SkillsData';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <Section title={t('skillsTitle')}>
      <div className="flex flex-wrap gap-2">
        {skillsData.map((skill, index) => (
          <SkillBadge key={index} icon={skill.icon} name={skill.name} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;
