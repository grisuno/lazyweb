
import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const UserGroupIcon: React.FC<IconProps> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-3.741-5.588M14.25 18.75a9.094 9.094 0 013.741-.479 3 3 0 013.741 5.588m-9.75-8.449A2.25 2.25 0 0012 8.25c-1.03 0-1.9.693-2.168 1.632M12 3.75a3 3 0 100 6 3 3 0 000-6zM6 8.25a2.25 2.25 0 012.25-2.25h1.5a2.25 2.25 0 012.25 2.25m-7.5 0a4.5 4.5 0 004.5 4.5h3a4.5 4.5 0 004.5-4.5M3.75 12a2.25 2.25 0 00-2.25 2.25v4.5A2.25 2.25 0 003.75 21h6a2.25 2.25 0 002.25-2.25v-4.5a2.25 2.25 0 00-2.25-2.25h-6z" />
  </svg>
);
