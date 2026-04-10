import { Section } from '@/components';
import TestimonialCard from '@/components/TestimonialCard';
import { TESTIMONIALS } from '@/data/testimonials';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <Section title={t('testimonialsTitle')}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
