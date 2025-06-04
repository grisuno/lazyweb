import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  sizeLg?: boolean; // Added new prop
}

export const Button: React.FC<ButtonProps> = ({ 
  to, 
  variant = 'primary', 
  children, 
  className = '', 
  leftIcon,
  rightIcon,
  sizeLg = false, // Initialize sizeLg
  ...props 
}) => {
  const paddingStyles = sizeLg ? 'px-8 py-4' : 'px-6 py-3';
  const textSizeStyles = sizeLg ? 'text-lg' : 'text-base';
  
  const baseStyles = `inline-flex items-center justify-center ${paddingStyles} ${textSizeStyles} border border-transparent font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors duration-150`;
  
  let variantStyles = '';
  switch (variant) {
    case 'primary':
      variantStyles = 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500';
      break;
    case 'secondary':
      variantStyles = 'bg-slate-700 text-white hover:bg-slate-600 focus:ring-slate-500';
      break;
    case 'outline':
      variantStyles = 'border-red-500 text-red-500 hover:bg-red-500 hover:text-white focus:ring-red-500';
      break;
  }

  const content = (
    <>
      {leftIcon && <span className="mr-2 -ml-1 h-5 w-5">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2 -mr-1 h-5 w-5">{rightIcon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${baseStyles} ${variantStyles} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {content}
    </button>
  );
};