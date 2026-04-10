import { Section, SkillBadge } from '@/components';
import { SKILLS, TEXT } from '@/data';

const Skills = () => {
  return (
    <Section title={TEXT.skillsTitle}>
      <div className="flex flex-wrap gap-2">
        {SKILLS.map((skill) => (
          <SkillBadge key={skill.name} {...skill} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;
