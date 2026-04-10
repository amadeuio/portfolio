import { Paragraph } from '@/components';
import type { Testimonial } from '@/data/testimonials';

const TestimonialCard = ({ quote, title, company }: Testimonial) => {
  return (
    <div className="border-border bg-background flex flex-col gap-4 rounded-lg border p-6">
      <div className="border-l-accent border-l-4 pl-4">
        <Paragraph className="italic">&ldquo;{quote}&rdquo;</Paragraph>
      </div>
      <div className="text-tertiary text-sm">
        <span className="font-medium">{title}</span>, {company}
      </div>
    </div>
  );
};

export default TestimonialCard;
