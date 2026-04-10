import { Paragraph, ProfilePicture, Title } from '@/components';
import { TEXT } from '@/data';

const Intro = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex max-w-lg flex-col gap-2 sm:relative">
        <ProfilePicture className="-translate-y-12 self-center sm:absolute sm:-top-8 sm:right-0 sm:translate-y-0" />
        <div className="flex items-center gap-x-4">
          <Title>{TEXT.hi},</Title>
          <img className="aspect-square w-12 sm:w-16" src="images/waving-hand-emoji.png" />
        </div>
        <Title>{TEXT.name}</Title>
        <span className="text-accent text-3xl font-light tracking-tight sm:text-4xl">
          {TEXT.profession}
        </span>
      </div>
      <div className="flex flex-col">
        <Paragraph className="whitespace-pre-line">{TEXT.bio}</Paragraph>
      </div>
    </div>
  );
};

export default Intro;
