import { ContactEmail, ContactLink, Paragraph, Section } from '@/components';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Section title={t('contact')}>
      <Paragraph>{t('contactDescription')}</Paragraph>
      <div className="flex flex-wrap items-center justify-center gap-5 md:justify-start md:gap-10">
        <ContactEmail />
        <ContactLink contactKey="linkedin" />
        <ContactLink contactKey="github" />
      </div>
    </Section>
  );
};

export default Contact;
