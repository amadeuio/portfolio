import { Section } from '@/components';
import TestimonialCard from '@/components/TestimonialCard';
import { TESTIMONIALS, TEXT } from '@/data';

const Testimonials = () => {
  return (
    <Section title={TEXT.testimonialsTitle}>
      <div className="grid grid-cols-1 gap-12 p-2 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
