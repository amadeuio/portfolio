import styles from "./ProjectCard.module.scss";
import { Project } from "../../../data/projects";
import GitHubIcon from "../../../icons/GitHubIcon";
import EyeIcon from "../../../icons/EyeIcon";
import { useLangContext } from "../../../context/LangContext";

interface ButtonProps {
  label: "Demo" | "Repo";
}

const ProjectButton: React.FC<ButtonProps> = ({ label }) => {
  const demo = label === "Demo";

  return (
    <button className={`${styles.button} ${demo ? styles.demo : ""}`}>
      {demo ? (
        <EyeIcon className={styles.eyeIcon} />
      ) : label === "Repo" ? (
        <GitHubIcon className={styles.gitHubIcon} />
      ) : null}
      {label}
    </button>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { name, img, demo, repo, description } = project;
  const { lang } = useLangContext();

  return (
    <div className={styles.projectCard}>
      <a className={styles.link} href={demo} target="_blank" rel="noopener noreferrer">
        <img src={`images/${img}`} alt={name} className={styles.image} />
      </a>
      <div className={styles.projectInfo}>
        <h3>{name}</h3>
        <p className={styles.description}>{description[lang]}</p>
      </div>
      <div className={styles.buttons}>
        <a className={styles.link} href={demo} target="_blank" rel="noopener noreferrer">
          <ProjectButton label={"Demo"} />
        </a>
        <a className={styles.link} href={repo} target="_blank" rel="noopener noreferrer">
          <ProjectButton label={"Repo"} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
