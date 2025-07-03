import { cn } from '../utils/cn';

interface ProfilePictureProps {
  className?: string;
}

const ProfilePicture = ({ className }: ProfilePictureProps) => (
  <img
    className={cn('h-34 w-34 rounded-full border-3 border-[var(--color-700)]', className)}
    src="images/profile-pic.jpg"
    alt="Profile picture"
  />
);

export default ProfilePicture;
