export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Amadeu has a rare ability to quickly understand requirements and translate them into clean, efficient, and scalable solutions. His strong technical skills combined with his positive attitude make him a standout teammate.',
    author: 'Tech Lead',
    title: 'Tech Lead',
    company: 'Nestlé',
  },
  {
    quote:
      "Amadeu builds every single line of code as if it were a house you'd want to live in for a lifetime. He's a great developer and an even better teammate.",
    author: 'Developer',
    title: 'Developer',
    company: 'Nestlé',
  },
  {
    quote:
      'He has a sharp ability to understand requirements, challenge them constructively, and deliver thoughtful, high-quality solutions. His critical thinking and positive attitude make him a valuable asset to any team.',
    author: 'Project Manager',
    title: 'Project Manager',
    company: 'Nestlé',
  },
];
