
import React, { useState } from 'react';
import { Button } from './ui/Button';

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here (e.g., API call)
    console.log({ name, email, message });
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => setSubmitted(false), 5000); // Reset message after 5 seconds
  };

  if (submitted) {
    return (
      <div className="text-center p-8 bg-slate-800 rounded-lg shadow-xl">
        <h3 className="text-2xl font-semibold text-white">Thank You!</h3>
        <p className="mt-2 text-slate-300">Your message has been sent. We'll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-slate-800 rounded-lg shadow-xl">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-300">
          Full name
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full shadow-sm py-3 px-4 placeholder-slate-500 focus:ring-red-500 focus:border-red-500 border-slate-700 rounded-md bg-slate-700 text-white"
            placeholder="Your Name"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-300">
          Email
        </label>
        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full shadow-sm py-3 px-4 placeholder-slate-500 focus:ring-red-500 focus:border-red-500 border-slate-700 rounded-md bg-slate-700 text-white"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-300">
          Message
        </label>
        <div className="mt-1">
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="block w-full shadow-sm py-3 px-4 placeholder-slate-500 focus:ring-red-500 focus:border-red-500 border-slate-700 rounded-md bg-slate-700 text-white"
            placeholder="How can we help you?"
          />
        </div>
      </div>
      <div>
        <Button type="submit" variant="primary" className="w-full">
          Send Message
        </Button>
      </div>
    </form>
  );
};
