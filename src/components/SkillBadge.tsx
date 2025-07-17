import { Skill } from '@/types';

const SkillBadge = ({ icon: Icon, name, iconProps }: Skill) => (
  <div className="border-border flex cursor-default items-center gap-x-2 rounded-md border p-4 whitespace-nowrap">
    <Icon {...iconProps} />
    {name}
  </div>
);

export default SkillBadge;
