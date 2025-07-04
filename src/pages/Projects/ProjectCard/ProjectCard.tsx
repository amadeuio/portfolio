import { Link } from '@/components';
import { useTranslation } from 'react-i18next';
import { Project } from '../../../data/projects';
import EyeIcon from '../../../icons/EyeIcon';
import GitHubIcon from '../../../icons/GitHubIcon';

interface ButtonProps {
  label: 'Demo' | 'Repo';
}

const ProjectButton: React.FC<ButtonProps> = ({ label }) => {
  const demo = label === 'Demo';

  return (
    <button className="text-primary border-border hover:bg-border flex cursor-pointer items-center justify-center gap-2 rounded-md border px-4.5 py-3 text-sm transition-colors duration-100">
      {demo ? (
        <EyeIcon className="fill-primary h-5 w-5" />
      ) : label === 'Repo' ? (
        <GitHubIcon className="stroke-primary h-5 w-5" />
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
    <div className="flex flex-col justify-between gap-4">
      <Link href={demo}>
        <img
          src={`images/${img}`}
          alt={name}
          className="hover:border-tertiary max-w-full cursor-pointer rounded-lg border-2 border-200 transition-transform duration-200 hover:scale-104"
        />
      </Link>
      <div className="flex flex-col gap-1">
        <h3>{name}</h3>
        <p className="text-tertiary">{t(descriptionKey)}</p>
      </div>
      <div className="flex gap-x-2">
        <Link href={demo}>
          <ProjectButton label={'Demo'} />
        </Link>
        <Link href={repo}>
          <ProjectButton label={'Repo'} />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
