
import React from 'react';
import { Link } from 'react-router-dom';
import { Service } from '../types';
import { ChevronRightIcon } from './icons/ChevronRightIcon';

interface ServiceCardProps {
  service: Service;
  showLearnMore?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, showLearnMore = true }) => {
  return (
    <div className="bg-slate-800 rounded-lg shadow-xl overflow-hidden flex flex-col h-full transform hover:scale-105 transition-transform duration-300">
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex-shrink-0 mx-auto">
          {service.icon ? service.icon : <div className="w-12 h-12 bg-red-500 rounded-md mb-4"></div>}
        </div>
        <h3 className="text-xl font-semibold text-white text-center mt-2">{service.title}</h3>
        <p className="mt-3 text-base text-slate-400 text-center flex-grow">
          {service.description}
        </p>
      </div>
      {showLearnMore && (
         <div className="p-6 bg-slate-700/50 text-center">
            <Link 
              to={`/services#${service.id}`} // Or a dedicated page: `/services/${service.id}`
              className="text-red-500 hover:text-red-400 font-medium inline-flex items-center group"
            >
              Learn More 
              <ChevronRightIcon className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
      )}
    </div>
  );
};
