
import React from 'react';
import { Button } from './ui/Button';
import { TAGLINE } from '../constants';
import { ChevronRightIcon } from './icons/ChevronRightIcon';
import { CodeIcon } from './icons/CodeIcon';


export const HeroSection: React.FC = () => {
  return (
    <div className="bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {/* Subtle background pattern or abstract image could go here */}
        {/* Example: SVG pattern or a very dark, blurred image */}
         <CodeIcon className="absolute -left-1/4 -top-1/4 w-3/4 h-3/4 text-slate-700 transform rotate-12" />
         <CodeIcon className="absolute -right-1/4 -bottom-1/4 w-3/4 h-3/4 text-slate-700 transform -rotate-12 opacity-50" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block">LazyOwn</span>
            <span className="block text-red-500">RedTeam</span>
          </h1>
          <p className="mt-6 max-w-md mx-auto text-lg text-slate-300 sm:text-xl md:mt-8 md:max-w-3xl">
            {TAGLINE}
          </p>
          <div className="mt-10 max-w-md mx-auto sm:flex sm:justify-center md:mt-12">
            <div className="rounded-md shadow">
              <Button to="/services" variant="primary" className="w-full sm:w-auto" rightIcon={<ChevronRightIcon />}>
                Explore Services
              </Button>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Button to="/contact" variant="outline" className="w-full sm:w-auto">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
