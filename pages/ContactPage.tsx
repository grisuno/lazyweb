
import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { ContactForm } from '../components/ContactForm';
import { SOCIAL_LINKS, CONTACT_EMAIL, CONTACT_PHONE, SITE_NAME } from '../constants';
import { LockIcon } from '../components/icons/LockIcon'; // Re-using for general security theme

export const ContactPage: React.FC = () => {
  return (
    <div className="py-16 lg:py-24 bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Get In Touch" subtitle="Contact Us" centered />
        <p className="mt-4 text-lg text-slate-300 text-center max-w-3xl mx-auto">
          We're here to help you strengthen your security. Reach out to discuss your needs, request a demo of our Framework, or learn more about our services.
        </p>

        <div className="mt-16 lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-1">
            <ContactForm />
          </div>

          {/* Contact Information & Map */}
          <div className="mt-12 lg:mt-0 lg:col-span-1">
            <div className="bg-slate-800 p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4 text-slate-300">
                <p>
                  <strong className="text-red-400">Email:</strong> <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-red-300 transition-colors">{CONTACT_EMAIL}</a>
                </p>
                <p>
                  <strong className="text-red-400">Phone:</strong> <a href={`tel:${CONTACT_PHONE.replace(/[^\d+]/g, '')}`} className="hover:text-red-300 transition-colors">{CONTACT_PHONE}</a>
                </p>
                <p>
                  <strong className="text-red-400">Headquarters (Placeholder):</strong><br />
                  123 Cyber Street<br />
                  Tech City, TX 75001<br />
                  United States
                </p>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-medium text-white mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  {SOCIAL_LINKS.map((link) => (
                    <a 
                      key={link.name} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-slate-400 hover:text-red-500 transition-colors"
                      aria-label={link.name}
                    >
                      {React.cloneElement(link.icon, { className: 'w-8 h-8' })}
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="mt-10">
                 <h4 className="text-lg font-medium text-white mb-3">Our Location (Placeholder)</h4>
                 <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md border-2 border-slate-700">
                    <img 
                        src="https://picsum.photos/800/450?grayscale&blur=1&random=map" 
                        alt="Placeholder Map of LazyOwn RedTeam Headquarters" 
                        className="w-full h-full object-cover"
                    />
                    {/* For a real map:
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..." // Your embed URL
                        className="w-full h-full"
                        style={{ border:0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Headquarters Location"
                    ></iframe>
                    */}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
