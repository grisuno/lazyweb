
import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { Button } from '../components/ui/Button';
import { FRAMEWORK_FEATURES, SITE_NAME } from '../constants';
import { PuzzlePieceIcon } from '../components/icons/PuzzlePieceIcon';

export const FrameworkPage: React.FC = () => {
  return (
    <div className="py-16 lg:py-24 bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <PuzzlePieceIcon className="w-24 h-24 text-red-500 mx-auto mb-6"/>
            <SectionTitle title={`The ${SITE_NAME} Framework`} subtitle="Innovation in Cyber Defense" centered />
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">
            Our proprietary Framework is the cornerstone of our advanced cybersecurity services. Developed by our expert team, it provides a powerful, flexible, and intelligent platform for simulating threats, identifying vulnerabilities, and enhancing your security posture.
            </p>
        </div>
        
        {/* Features Section */}
        <section className="mt-12">
          <h3 className="text-3xl font-semibold text-white text-center mb-12">Key Features & Benefits</h3>
          <div className="grid md:grid-cols-2 gap-10">
            {FRAMEWORK_FEATURES.map((feature) => (
              <div key={feature.id} className="bg-slate-800 p-8 rounded-lg shadow-xl flex items-start space-x-6">
                <div className="flex-shrink-0">
                  {React.cloneElement(feature.icon, { className: 'w-12 h-12 text-red-500' })}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{feature.name}</h4>
                  <p className="text-slate-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Integration Section */}
        <section className="mt-20 py-16 bg-slate-800 rounded-lg shadow-xl">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Seamless Service Integration" subtitle="How It Works" centered/>
            <p className="mt-4 text-lg text-slate-300 text-center">
              The {SITE_NAME} Framework is not a standalone product but an integral part of our service delivery. It enhances each of our core offerings:
            </p>
            <ul className="mt-8 space-y-4 text-slate-300 list-disc list-inside marker:text-red-500 text-left max-w-2xl mx-auto">
              <li>
                <span className="font-semibold text-white">Adversarial Emulation:</span> Powers realistic attack simulations with customizable TTPs and automated execution.
              </li>
              <li>
                <span className="font-semibold text-white">Penetration Testing:</span> Streamlines vulnerability discovery and provides deeper insights through intelligent data correlation.
              </li>
              <li>
                <span className="font-semibold text-white">Red Team Operations:</span> Enables sophisticated, multi-stage campaign management and covert C2 capabilities.
              </li>
            </ul>
            <p className="mt-8 text-lg text-slate-300 text-center">
              This synergy ensures that our clients receive the most comprehensive and effective cybersecurity assessments possible, leveraging the latest technology and threat intelligence.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-20 text-center">
          <SectionTitle title="Experience the Framework Advantage" subtitle="Request a Demo" centered/>
          <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto">
            See firsthand how the {SITE_NAME} Framework can revolutionize your approach to cybersecurity. Contact us for a personalized demonstration and discover its power.
          </p>
          <div className="mt-10">
            <Button to="/contact" variant="primary" sizeLg className="text-lg px-8 py-4">
              Request a Demo
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};
