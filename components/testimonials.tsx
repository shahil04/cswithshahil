import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Before this course I only knew theory. The projects helped me understand how things actually work in industry.',
    name: 'Rahul',
    role: 'Data Analyst',
  },
  {
    quote:
      'The practical breakdown of Python, SQL and ML made it easy to move from beginner to confident professional.',
    name: 'Neha',
    role: 'Business Analyst',
  },
  {
    quote:
      'I liked the structured learning path and the final deployment projects. It felt like learning real-world skills, not just theory.',
    name: 'Aman',
    role: 'Junior Developer',
  },
  {
    quote:
      'The mentor guidance and interview prep made a huge difference in my confidence before applying for IT jobs.',
    name: 'Priya',
    role: 'Data Science Intern',
  },
];

export function Testimonials() {
  return (
    <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
      {testimonials.map((testimonial) => (
        <div key={testimonial.name} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <Quote className="h-8 w-8 text-blue-600" />
          <p className="mt-5 text-base leading-7 text-slate-700">“{testimonial.quote}”</p>
          <div className="mt-6 border-t border-slate-200 pt-4">
            <p className="font-bold text-slate-900">{testimonial.name}</p>
            <p className="text-sm text-slate-500">{testimonial.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
