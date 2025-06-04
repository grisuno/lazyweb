
import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { SectionTitle } from '../components/SectionTitle';
import { ServiceCard } from '../components/ServiceCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { SERVICES_DATA, TESTIMONIALS_DATA, TAGLINE } from '../constants';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '../components/icons/ChevronRightIcon';
import { PuzzlePieceIcon } from '../components/icons/PuzzlePieceIcon';
import { UserGroupIcon } from '../components/icons/UserGroupIcon';

export const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />

      {/* About Us Teaser */}
      <section className="py-16 lg:py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <SectionTitle title="Pioneering Cybersecurity Solutions" subtitle="Who We Are" />
              <p className="mt-4 text-lg text-slate-300">
                LazyOwn RedTeam is at the forefront of cybersecurity, dedicated to developing innovative solutions that protect your digital assets. Our proprietary Framework and expert team empower us to deliver unmatched adversarial emulation, penetration testing, and red team services.
              </p>
              <p className="mt-4 text-lg text-slate-300">
                We believe in proactive defense, rigorously testing your systems against the most sophisticated threats to ensure your organization remains resilient and secure.
              </p>
              <div className="mt-8">
                <Button to="/about" variant="secondary" rightIcon={<ChevronRightIcon />}>
                  Learn More About Us
                </Button>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 flex justify-center">
              <UserGroupIcon className="w-64 h-64 text-red-500 opacity-30" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Core Services" subtitle="What We Offer" centered />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES_DATA.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Framework Teaser */}
      <section className="py-16 lg:py-24 bg-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <PuzzlePieceIcon className="w-24 h-24 text-white opacity-80 mx-auto mb-6" />
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            The LazyOwn RedTeam Framework
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-red-100">
            Discover our unique, innovative tool for cybersecurity. Our Framework integrates seamlessly with our services to provide comprehensive and actionable insights.
          </p>
          <div className="mt-10">
            <Button to="/framework" variant="outline" className="border-white text-white hover:bg-white hover:text-red-700">
              Explore the Framework
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="What Our Clients Say" subtitle="Testimonials" centered />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS_DATA.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Enhance Your Security?
          </h2>
          <p className="mt-4 text-xl text-slate-300">
            Contact LazyOwn RedTeam today to discuss your cybersecurity needs and learn how our expertise can protect your organization.
          </p>
          <div className="mt-10">
            <Button to="/contact" variant="primary" sizeLg className="text-lg px-8 py-4">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
