import styles from "./Projects.module.scss";
import projects from "../../data/projects";
import ProjectCard from "./ProjectCard/ProjectCard";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.projects}>
      <h2>{t("projectsTitle")}</h2>
      <div className={styles.projectsGallery}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
