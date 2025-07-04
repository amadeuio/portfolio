import { useTranslation } from 'react-i18next';
import { Link } from '@/components';
import { Project } from '../../../data/projects';
import EyeIcon from '../../../icons/EyeIcon';
import GitHubIcon from '../../../icons/GitHubIcon';
import styles from './ProjectCard.module.scss';

interface ButtonProps {
  label: 'Demo' | 'Repo';
}

const ProjectButton: React.FC<ButtonProps> = ({ label }) => {
  const demo = label === 'Demo';

  return (
    <button className={`${styles.button} ${demo ? styles.demo : ''}`}>
      {demo ? (
        <EyeIcon className={styles.eyeIcon} />
      ) : label === 'Repo' ? (
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
  const { name, img, demo, repo, descriptionKey } = project;
  const { t } = useTranslation();

  return (
    <div className={styles.projectCard}>
      <Link className={styles.link} href={demo}>
        <img src={`images/${img}`} alt={name} className={styles.image} />
      </Link>
      <div className={styles.projectInfo}>
        <h3>{name}</h3>
        <p className={styles.description}>{t(descriptionKey)}</p>
      </div>
      <div className={styles.buttons}>
        <Link className={styles.link} href={demo}>
          <ProjectButton label={'Demo'} />
        </Link>
        <Link className={styles.link} href={repo}>
          <ProjectButton label={'Repo'} />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
