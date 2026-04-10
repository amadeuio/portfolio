import { ContactEmail, ContactLink, Section } from '@/components';
import { CONTACT, TEXT } from '@/data';

const Contact = () => (
  <Section title={TEXT.contact} childrenClassName="flex flex-col gap-y-6">
    <div className="flex flex-wrap items-center justify-center gap-5 md:justify-start">
      <ContactEmail email={CONTACT.email} />
      {CONTACT.links.map((link) => (
        <ContactLink key={link.href} {...link} />
      ))}
    </div>
  </Section>
);

export default Contact;
