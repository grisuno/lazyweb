
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, SOCIAL_LINKS, SITE_NAME, CONTACT_EMAIL, CONTACT_PHONE } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-400">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <h2 className="text-2xl font-bold text-red-500">{SITE_NAME}</h2>
            <p className="text-slate-400 text-base">
              Securing Your Future Through Adversarial Excellence.
            </p>
            <div className="flex space-x-6">
              {SOCIAL_LINKS.map((link) => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-red-500 transition-colors">
                  <span className="sr-only">{link.name}</span>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase">Navigation</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {NAV_LINKS.slice(0, Math.ceil(NAV_LINKS.length / 2)).map((item) => (
                    <li key={item.label}>
                      <Link to={item.path} className="text-base text-slate-400 hover:text-red-500 transition-colors">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                 <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase opacity-0 md:opacity-100">Navigation</h3> {/* Hidden title for spacing */}
                <ul role="list" className="mt-4 space-y-4">
                  {NAV_LINKS.slice(Math.ceil(NAV_LINKS.length / 2)).map((item) => (
                    <li key={item.label}>
                      <Link to={item.path} className="text-base text-slate-400 hover:text-red-500 transition-colors">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8"> {/* Changed to grid-cols-1 for contact info */}
              <div>
                <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase">Contact Us</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-base text-slate-400 hover:text-red-500 transition-colors">
                      {CONTACT_EMAIL}
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${CONTACT_PHONE.replace(/[^\d+]/g, '')}`} className="text-base text-slate-400 hover:text-red-500 transition-colors">
                      {CONTACT_PHONE}
                    </a>
                  </li>
                   <li>
                      <p className="text-base text-slate-400">123 Cyber Street<br/>Tech City, TX 75001</p>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-700 pt-8">
          <p className="text-base text-slate-500 xl:text-center">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
