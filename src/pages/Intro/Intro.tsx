import { Collapse, Paragraph, ProfilePicture, Title } from '@/components';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ExpandIcon from '../../icons/ExpandIcon';

const Intro = () => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandBioClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="relative flex max-w-lg flex-col gap-2">
        <ProfilePicture className="absolute -top-8 right-0 max-[580px]:-top-16 max-[494px]:static max-[494px]:top-auto max-[494px]:right-auto max-[494px]:translate-y-[-10] max-[494px]:self-center" />
        <div className="flex items-center gap-x-4">
          <Title level={1}>{t('hi')},</Title>
          <img className="h-16 w-16" src="images/waving-hand-emoji.png" />
        </div>
        <Title level={1} className="max-[419px]:text-5xl">
          {t('name')}
        </Title>

        <span className="text-accent text-4xl font-light tracking-tight max-[419px]:text-3xl">
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
          className="text-tertiary mt-5 flex cursor-pointer items-center justify-start gap-2.5 self-center"
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
