import { ProjectCard, Section } from '@/components';
import { PROJECTS, TEXT } from '@/data';

const Projects = () => {
  return (
    <Section title={TEXT.projectsTitle}>
      <div className="flex flex-col gap-12">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
