import { cn } from '../utils/cn';

interface ProfilePictureProps {
  className?: string;
}

const ProfilePicture = ({ className }: ProfilePictureProps) => (
  <img
    className={cn('border-secondary aspect-square w-32 rounded-full border-3 sm:w-34', className)}
    src="images/profile-pic.jpg"
    alt="Profile picture"
  />
);

export default ProfilePicture;
