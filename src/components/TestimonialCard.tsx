import { Link, Paragraph } from '@/components';
import { TESTIMONIALS_LINK } from '@/data';
import type { Testimonial } from '@/types';

const TestimonialCard = ({ quote, title, company, emoji }: Testimonial) => (
  <Link href={TESTIMONIALS_LINK} className="self-start">
    <div className="border-border bg-background flex cursor-pointer flex-col gap-4 rounded-lg">
      <div className="border-accent border-l-4 pl-4">
        <Paragraph>{quote}</Paragraph>
      </div>
      <div className="text-tertiary text-sm">
        <span className="font-medium">{title}</span>, {company} {emoji}
      </div>
    </div>
  </Link>
);

export default TestimonialCard;
