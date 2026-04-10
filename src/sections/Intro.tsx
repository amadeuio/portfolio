import { Paragraph, ProfilePicture, Title } from '@/components';
import { useTranslation } from 'react-i18next';

const Intro = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex max-w-lg flex-col gap-2 sm:relative">
        <ProfilePicture className="-translate-y-12 self-center sm:absolute sm:-top-8 sm:right-0 sm:translate-y-0" />
        <div className="flex items-center gap-x-4">
          <Title>{t('hi')},</Title>
          <img className="aspect-square w-12 sm:w-16" src="images/waving-hand-emoji.png" />
        </div>
        <Title>{t('name')}</Title>
        <span className="text-accent text-3xl font-light tracking-tight sm:text-4xl">
          {t('profession')}
        </span>
      </div>
      <div className="flex flex-col">
        <Paragraph>{t('bio')}</Paragraph>
      </div>
    </div>
  );
};

export default Intro;
