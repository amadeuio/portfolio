import { Section, SkillBadge } from '@/components';
import { SKILLS } from '@/data';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <Section title={t('skillsTitle')}>
      <div className="flex flex-wrap gap-2">
        {SKILLS.map((skill) => (
          <SkillBadge key={skill.name} {...skill} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;
