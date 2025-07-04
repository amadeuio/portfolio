import { ContactLink } from '@/components';
import { useTranslation } from 'react-i18next';
import ContactEmail from './ContactEmail/ContactEmail';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-8">
      <h2>{t('contact')}</h2>
      <p>{t('contactDescription')}</p>
      <div className="flex flex-wrap items-center justify-center gap-5 md:justify-start md:gap-10">
        <ContactEmail />
        <ContactLink contactKey="linkedin" />
        <ContactLink contactKey="github" />
      </div>
    </div>
  );
};

export default Contact;
