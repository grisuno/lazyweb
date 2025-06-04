
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SectionTitle } from '../components/SectionTitle';
import { SERVICES_DATA, SITE_NAME } from '../constants';
import { Button } from '../components/ui/Button';

export const ServicesPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="py-16 lg:py-24 bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Our Cybersecurity Services" subtitle="Comprehensive Protection" centered />
        <p className="mt-4 text-lg text-slate-300 text-center max-w-3xl mx-auto">
          {SITE_NAME} offers a suite of specialized services designed to identify vulnerabilities, simulate real-world attacks, and strengthen your organization's security posture. We tailor our approach to meet your unique needs, ensuring maximum impact and value.
        </p>

        <div className="mt-20 space-y-20">
          {SERVICES_DATA.map((service, index) => (
            <section key={service.id} id={service.id} className={`py-12 lg:py-16 ${index % 2 === 0 ? 'bg-slate-800' : 'bg-slate-800/50'} rounded-lg shadow-xl`}>
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-3 lg:gap-12 lg:items-center">
                  <div className={`lg:col-span-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} flex justify-center mb-8 lg:mb-0`}>
                    {service.icon ? React.cloneElement(service.icon, { className: 'w-24 h-24 text-red-500' }) : <div className="w-24 h-24 bg-red-600 rounded-md"></div>}
                  </div>
                  <div className={`lg:col-span-2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-lg text-slate-300 mb-6">
                      {service.longDescription || service.description}
                    </p>
                    <Button to="/contact" variant={index % 2 === 0 ? "primary" : "secondary"}>
                      Inquire About {service.title}
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
         <div className="mt-20 text-center">
            <SectionTitle title="Ready to Secure Your Assets?" subtitle="Take the Next Step" centered/>
            <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
                Our expert team is ready to help you navigate the complexities of cybersecurity. Contact us today for a consultation.
            </p>
            <div className="mt-8">
                <Button to="/contact" variant="primary" sizeLg className="text-lg px-8 py-4">
                    Contact Us Now
                </Button>
            </div>
        </div>
      </div>
    </div>
  );
};
