
import React, { useState } from 'react';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import { NAV_LINKS, SITE_NAME } from '../constants';
import { MenuIcon } from './icons/MenuIcon';
import { XIcon } from './icons/XIcon';
import { ShieldIcon } from './icons/ShieldIcon';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900/70 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <ShieldIcon className="h-10 w-10 text-red-500 group-hover:text-red-400 transition-colors" />
              <span className="ml-3 text-2xl font-bold text-white group-hover:text-red-400 transition-colors">{SITE_NAME}</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAV_LINKS.map((link) => (
                <RouterNavLink
                  key={link.label}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors
                    ${isActive 
                      ? 'bg-red-600 text-white' 
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white'}`
                  }
                >
                  {link.label}
                </RouterNavLink>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <RouterNavLink
                key={link.label}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors
                  ${isActive 
                    ? 'bg-red-600 text-white' 
                    : 'text-slate-300 hover:bg-slate-700 hover:text-white'}`
                }
              >
                {link.label}
              </RouterNavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
