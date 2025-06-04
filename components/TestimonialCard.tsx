
import React from 'react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-slate-800 p-6 rounded-lg shadow-xl flex flex-col h-full">
      <blockquote className="flex-grow">
        <p className="text-lg text-slate-300 leading-relaxed">"{testimonial.quote}"</p>
      </blockquote>
      <footer className="mt-6">
        <p className="text-base font-medium text-white">{testimonial.author}</p>
        <p className="text-sm text-red-400">{testimonial.company}</p>
      </footer>
    </div>
  );
};
