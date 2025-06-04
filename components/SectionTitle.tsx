
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12`}>
      {subtitle && <p className="text-base text-red-500 font-semibold tracking-wide uppercase">{subtitle}</p>}
      <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
    </div>
  );
};
