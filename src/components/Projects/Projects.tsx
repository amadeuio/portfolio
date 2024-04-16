import styles from "./Projects.module.scss";
import projects from "../../data/projects";
import ProjectCard from "./ProjectCard/ProjectCard";
import { projectsTitle } from "../../data/locales";
import { useLangContext } from "../../context/LangContext";

const Projects = () => {
  const { lang } = useLangContext();

  return (
    <div className={styles.projects}>
      <h2>{projectsTitle[lang]}</h2>
      <div className={styles.projectsGallery}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
