import { ProjectCard, Section } from '@/components';
import { PROJECTS } from '@/data';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <Section title={t('projectsTitle')}>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
