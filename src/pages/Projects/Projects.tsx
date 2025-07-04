import { Section } from '@/components';
import { useTranslation } from 'react-i18next';
import projects from '../../data/projects';
import ProjectCard from './ProjectCard/ProjectCard';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <Section title={t('projectsTitle')}>
      <div className="grid grid-cols-3 gap-8 max-[1125px]:grid-cols-2 max-[738px]:grid-cols-1 max-[738px]:justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
