
import React from 'react';
import { NavLink, Service, TeamMember, BlogPost, Testimonial, SocialLink, FrameworkFeature } from './types';
import { ShieldIcon } from './components/icons/ShieldIcon';
import { TargetIcon } from './components/icons/TargetIcon';
import { CodeIcon } from './components/icons/CodeIcon';
import { LinkedInIcon } from './components/icons/LinkedInIcon';
import { TwitterIcon } from './components/icons/TwitterIcon';
import { PuzzlePieceIcon } from './components/icons/PuzzlePieceIcon';
import { NetworkIcon } from './components/icons/NetworkIcon';
import { LockIcon } from './components/icons/LockIcon';


export const SITE_NAME = "LazyOwn RedTeam";
export const TAGLINE = "Securing Your Future Through Adversarial Excellence.";
export const CONTACT_EMAIL = "contact@lazyown.redteam";
export const CONTACT_PHONE = "+1 (555) 123-4567";


export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Framework', path: '/framework' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'adversarial-emulation',
    title: 'Adversarial Emulation',
    description: 'Simulating real-world cyber threats to test and strengthen client defenses.',
    longDescription: 'Our Adversarial Emulation service meticulously replicates the tactics, techniques, and procedures (TTPs) of known threat actors. We go beyond standard penetration testing to provide a realistic assessment of your organization\'s ability to detect, respond to, and recover from sophisticated attacks. This service helps identify blind spots in your security posture and improve your overall resilience.',
    icon: React.createElement(TargetIcon, { className: 'w-12 h-12 text-red-500 mb-4' }),
  },
  {
    id: 'penetration-testing',
    title: 'Penetration Testing',
    description: 'Comprehensive pentesting to identify vulnerabilities in systems, networks, and applications.',
    longDescription: 'LazyOwn RedTeam offers thorough penetration testing services covering your entire digital footprint. We assess web applications, mobile applications, network infrastructure, and cloud environments. Our certified experts use a combination of automated tools and manual techniques to uncover exploitable vulnerabilities, providing actionable recommendations to mitigate risks effectively.',
    icon: React.createElement(LockIcon, { className: 'w-12 h-12 text-red-500 mb-4' }),
  },
  {
    id: 'red-team-services',
    title: 'Red Team Operations',
    description: 'Full-spectrum red team operations mimicking advanced persistent threats.',
    longDescription: 'Our Red Team Operations are objective-based engagements designed to test your organization\'s security program against a simulated persistent adversary. We conduct covert operations, employ social engineering, and attempt to achieve specific goals, providing a holistic view of your defensive capabilities and incident response readiness. This service is crucial for organizations looking to validate their security investments and mature their security programs.',
    icon: React.createElement(ShieldIcon, { className: 'w-12 h-12 text-red-500 mb-4' }),
  },
];

export const FRAMEWORK_FEATURES: FrameworkFeature[] = [
  {
    id: 'modular-design',
    name: 'Modular Design',
    description: 'Easily customizable and extensible to adapt to various testing scenarios and client needs.',
    icon: React.createElement(PuzzlePieceIcon, {className: 'w-10 h-10 text-red-500'})
  },
  {
    id: 'advanced-automation',
    name: 'Advanced Automation',
    description: 'Automates complex attack chains and data collection, enabling deeper and faster insights.',
    icon: React.createElement(CodeIcon, {className: 'w-10 h-10 text-red-500'})
  },
  {
    id: 'real-time-reporting',
    name: 'Real-time Reporting',
    description: 'Provides live dashboards and detailed reports for immediate understanding of security posture.',
    icon: React.createElement(NetworkIcon, {className: 'w-10 h-10 text-red-500'})
  },
  {
    id: 'threat-intelligence-integration',
    name: 'Threat Intelligence Integration',
    description: 'Incorporates the latest threat intelligence to simulate current and emerging attack vectors.',
    icon: React.createElement(TargetIcon, {className: 'w-10 h-10 text-red-500'})
  }
];

export const TEAM_MEMBERS_DATA: TeamMember[] = [
  {
    id: 'member-1',
    name: 'Dr. Evelyn Reed',
    title: 'Lead Security Architect & Framework Developer',
    bio: 'With over 15 years in cybersecurity, Evelyn is the visionary behind the LazyOwn Framework, driving innovation in threat simulation.',
    imageUrl: 'https://picsum.photos/300/300?random=1',
  },
  {
    id: 'member-2',
    name: 'Marcus "Shadow" Kane',
    title: 'Head of Red Team Operations',
    bio: 'Marcus specializes in covert operations and advanced persistent threat emulation, ensuring our clients face the most realistic scenarios.',
    imageUrl: 'https://picsum.photos/300/300?random=2',
  },
  {
    id: 'member-3',
    name: 'Aisha Sharma',
    title: 'Senior Penetration Tester',
    bio: 'Aisha possesses deep expertise in network and application security, uncovering critical vulnerabilities with precision.',
    imageUrl: 'https://picsum.photos/300/300?random=3',
  },
   {
    id: 'member-4',
    name: 'John "Glitch" Doe',
    title: 'Cybersecurity Analyst',
    bio: 'John is a master at analyzing threat landscapes and developing defensive strategies. His work on the Framework enhances its adaptability.',
    imageUrl: 'https://picsum.photos/300/300?random=4',
  },
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: 'post-1',
    title: 'The Evolution of Adversarial Emulation',
    excerpt: 'Discover how adversarial emulation has transformed from simple scripts to sophisticated AI-driven simulations, and what it means for your defense strategy...',
    imageUrl: 'https://picsum.photos/400/250?random=blog1&grayscale',
    author: 'Dr. Evelyn Reed',
    date: 'October 26, 2023',
    slug: 'evolution-adversarial-emulation',
  },
  {
    id: 'post-2',
    title: 'Inside the LazyOwn Framework: A Deep Dive',
    excerpt: 'An exclusive look into the architecture and capabilities of our groundbreaking cybersecurity framework. Learn how it powers our services...',
    imageUrl: 'https://picsum.photos/400/250?random=blog2&grayscale',
    author: 'Marcus Kane',
    date: 'November 05, 2023',
    slug: 'inside-lazyown-framework',
  },
  {
    id: 'post-3',
    title: 'Top 5 Vulnerabilities We Uncovered in Q3 2023',
    excerpt: 'A summary of common yet critical vulnerabilities found during our recent penetration tests, and tips on how to avoid them...',
    imageUrl: 'https://picsum.photos/400/250?random=blog3&grayscale',
    author: 'Aisha Sharma',
    date: 'November 15, 2023',
    slug: 'top-5-vulnerabilities-q3-2023',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote: 'LazyOwn RedTeam provided unparalleled insights into our security posture. Their framework and expertise are game-changers.',
    author: 'Jane Doe',
    company: 'CEO, Tech Solutions Inc.',
  },
  {
    id: 'testimonial-2',
    quote: 'The adversarial emulation service was incredibly realistic and helped us identify critical gaps we never knew existed. Highly recommend!',
    author: 'John Smith',
    company: 'CISO, Global Finance Corp.',
  },
  {
    id: 'testimonial-3',
    quote: 'Professional, thorough, and innovative. LazyOwn RedTeam is our go-to partner for all things cybersecurity.',
    author: 'Alice Brown',
    company: 'IT Director, SecureHealth LLC',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://linkedin.com/company/lazyown-redteam', icon: React.createElement(LinkedInIcon, { className: 'w-6 h-6' }) },
  { name: 'Twitter', url: 'https://twitter.com/lazyownredteam', icon: React.createElement(TwitterIcon, { className: 'w-6 h-6' }) },
];
