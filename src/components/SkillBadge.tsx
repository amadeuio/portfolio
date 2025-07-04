import { ReactNode } from 'react';

interface SkillBadgeProps {
  icon: ReactNode;
  name: string;
}

const SkillBadge = ({ icon, name }: SkillBadgeProps) => (
  <div className="cursor-default flex items-center gap-x-2 border border-border rounded-md p-4 whitespace-nowrap">
    {icon}
    {name}
  </div>
);

export default SkillBadge; 