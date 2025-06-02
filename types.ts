import React from 'react';

export interface NavLink {
  label: string;
  path: string;
  icon?: React.ReactNode; // Kept as ReactNode as it's not typically cloned with new props in Nav
}

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  icon?: React.ReactElement; // Changed from React.ReactNode
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  date: string;
  slug: string; 
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactElement; // Changed from React.ReactNode
}

export interface FrameworkFeature {
  id: string;
  name: string;
  description: string;
  icon: React.ReactElement; // Changed from React.ReactNode
}