import { Link, Paragraph, Title } from '@/components';
import { Project } from '@/data/projects';
import EyeIcon from '@/icons/EyeIcon';
import GitHubIcon from '@/icons/GitHubIcon';
import { useTranslation } from 'react-i18next';

interface ButtonProps {
  label: 'Demo' | 'Repo';
}

const ProjectButton = ({ label }: ButtonProps) => (
  <button className="text-primary border-border hover:bg-border flex cursor-pointer items-center justify-center gap-2 rounded-md border px-4.5 py-3 text-sm transition-colors duration-100">
    {label === 'Demo' ? (
      <EyeIcon className="fill-primary h-5 w-5" />
    ) : (
      <GitHubIcon className="stroke-primary h-5 w-5" />
    )}
    {label}
  </button>
);

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
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
        <Title level={3}>{name}</Title>
        <Paragraph level={2}>{t(descriptionKey)}</Paragraph>
      </div>
      <div className="flex gap-x-2">
        <Link href={demo}>
          <ProjectButton label="Demo" />
        </Link>
        <Link href={repo}>
          <ProjectButton label="Repo" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
