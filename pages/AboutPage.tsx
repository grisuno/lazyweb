
import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { TeamMemberCard } from '../components/TeamMemberCard';
import { TEAM_MEMBERS_DATA, SITE_NAME } from '../constants';
import { ShieldIcon } from '../components/icons/ShieldIcon';
import { TargetIcon } from '../components/icons/TargetIcon';
import { CodeIcon } from '../components/icons/CodeIcon';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-16 lg:py-24 bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={`About ${SITE_NAME}`} subtitle="Our Mission & Vision" centered />

        <div className="mt-12 prose prose-lg prose-invert mx-auto text-slate-300 text-center max-w-3xl">
          <p>
            At {SITE_NAME}, our mission is to deliver top-tier cybersecurity solutions that empower organizations to thrive in an increasingly complex digital landscape. We are driven by a passion for innovation and a commitment to excellence, constantly pushing the boundaries of what's possible in cyber defense.
          </p>
          <p>
            Our vision is to be the leading force in adversarial security, shaping a future where businesses can operate with confidence, knowing their critical assets are protected by the most advanced and adaptive defenses available.
          </p>
        </div>

        {/* Expertise Section */}
        <section className="mt-20">
          <SectionTitle title="Our Expertise" subtitle="Core Competencies" centered />
          <div className="mt-10 grid md:grid-cols-3 gap-10 text-center">
            <div className="bg-slate-800 p-8 rounded-lg shadow-xl">
              <TargetIcon className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">Adversarial Emulation</h3>
              <p className="text-slate-400">
                We expertly simulate real-world cyber-attacks, replicating the TTPs of sophisticated threat actors to rigorously test and fortify your defenses.
              </p>
            </div>
            <div className="bg-slate-800 p-8 rounded-lg shadow-xl">
              <CodeIcon className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">Penetration Testing</h3>
              <p className="text-slate-400">
                Our comprehensive penetration tests identify critical vulnerabilities across your systems, networks, and applications, providing actionable remediation strategies.
              </p>
            </div>
            <div className="bg-slate-800 p-8 rounded-lg shadow-xl">
              <ShieldIcon className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">Red Team Operations</h3>
              <p className="text-slate-400">
                We conduct full-spectrum red team operations, mimicking advanced persistent threats to evaluate and enhance your overall security posture and incident response.
              </p>
            </div>
          </div>
        </section>

        {/* The Framework Section */}
        <section className="mt-20 py-16 bg-slate-800 rounded-lg shadow-xl">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <SectionTitle title="Our Proprietary Framework" subtitle="The LazyOwn Edge" centered/>
              <p className="mt-4 text-lg text-slate-300">
                Central to our success is the LazyOwn RedTeam Framework – a unique, innovative tool developed in-house. This cutting-edge platform enhances our ability to simulate complex threats, automate testing procedures, and provide clients with unparalleled insights into their security vulnerabilities.
              </p>
              <p className="mt-4 text-lg text-slate-300">
                The Framework integrates seamlessly with all our services, ensuring that our methodologies are always at the forefront of cybersecurity technology and practice.
              </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="mt-20">
          <SectionTitle title="Meet Our Experts" subtitle="The Team" centered />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {TEAM_MEMBERS_DATA.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
          <p className="mt-12 text-center text-slate-400 text-lg">
            Our team is comprised of seasoned cybersecurity professionals, each bringing a wealth of experience and specialized skills. (More bios coming soon!)
          </p>
        </section>
      </div>
    </div>
  );
};
