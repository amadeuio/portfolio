import { ReactNode } from 'react';

interface SkillBadgeProps {
  icon: ReactNode;
  name: string;
}

const SkillBadge = ({ icon, name }: SkillBadgeProps) => (
  <div className="border-border flex cursor-default items-center gap-x-2 rounded-md border p-4 whitespace-nowrap">
    {icon}
    {name}
  </div>
);

export default SkillBadge;
