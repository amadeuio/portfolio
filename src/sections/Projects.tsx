import { ProjectCard, Section } from '@/components';
import { useTranslation } from 'react-i18next';
import projects from '@/data/projects';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <Section title={t('projectsTitle')}>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
