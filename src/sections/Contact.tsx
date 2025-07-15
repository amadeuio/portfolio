import { ContactEmail, ContactLink, Paragraph, Section } from '@/components';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Section title={t('contact')} childrenClassName="flex flex-col gap-y-6">
      <Paragraph>{t('contactDescription')}</Paragraph>
      <div className="flex flex-wrap items-center justify-center gap-5 md:justify-start">
        <ContactEmail />
        <ContactLink contactKey="linkedin" />
        <ContactLink contactKey="github" />
      </div>
    </Section>
  );
};

export default Contact;
