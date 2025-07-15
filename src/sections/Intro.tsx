import { Collapse, Paragraph, ProfilePicture, Title } from '@/components';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ExpandIcon from '@/icons/ExpandIcon';

const Intro = () => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandBioClick = () => {
    setIsExpanded(!isExpanded);
  };

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
      <div className="flex max-w-3xl flex-col">
        <Paragraph>{t('bio.short')}</Paragraph>
        <Collapse isExpanded={isExpanded}>
          <div className="flex flex-col gap-8 pt-8">
            <Paragraph>{t('bio.expanded.paragraph1')}</Paragraph>
            <Paragraph>{t('bio.expanded.paragraph2')}</Paragraph>
            <Paragraph>{t('bio.expanded.paragraph3')}</Paragraph>
          </div>
        </Collapse>
        <button
          className="text-tertiary mt-5 flex cursor-pointer items-center gap-2 self-center"
          onClick={handleExpandBioClick}
        >
          <ExpandIcon className="fill-tertiary h-5 w-5" isExpanded={isExpanded} />
          {isExpanded ? t('collapseLabel') : t('expandLabel')}
        </button>
      </div>
    </div>
  );
};

export default Intro;
