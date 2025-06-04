
import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const BriefcaseIcon: React.FC<IconProps> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.073c0 .828-.672 1.5-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V14.15M12 18.75V9.75M7.5 9.75L12 4.5l4.5 5.25M21.75 9.75h-4.392c-.225 0-.439.05-.633.142L12 12.101l-4.725-2.21c-.193-.091-.408-.142-.633-.142H2.25" />
  </svg>
);
