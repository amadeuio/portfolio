import { ProjectCard, Section } from '@/components';
import { PROJECTS, TEXT } from '@/data';

const Projects = () => {
  return (
    <Section title={TEXT.projectsTitle}>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
