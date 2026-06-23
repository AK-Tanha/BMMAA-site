'use client';

import { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { ORGANIZATION } from '@/lib/constants';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0A%0D%0A${form.message}`;
    window.location.href = `mailto:${ORGANIZATION.email}?subject=${encodeURIComponent(form.subject || 'BMMAA Contact')}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
      {/* Contact Info */}
      <div className="lg:col-span-2 space-y-6 lg:space-y-8">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4 md:mb-6">Get in Touch</h3>
          <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
            Have questions about BMMAA, membership, or events? Reach out and we&apos;ll get back to you.
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          <a href={`mailto:${ORGANIZATION.email}`} className="flex items-center gap-3 md:gap-4 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-secondary-500/10 flex items-center justify-center shrink-0 group-hover:bg-secondary-500/20 transition-colors">
              <Mail className="w-4 h-4 md:w-5 md:h-5 text-secondary-500" />
            </div>
            <div>
              <p className="text-sm text-neutral-500">Email</p>
              <p className="text-neutral-900 font-semibold">{ORGANIZATION.email}</p>
            </div>
          </a>

          <a href={`tel:${ORGANIZATION.phone}`} className="flex items-center gap-3 md:gap-4 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-secondary-500/10 flex items-center justify-center shrink-0 group-hover:bg-secondary-500/20 transition-colors">
              <Phone className="w-4 h-4 md:w-5 md:h-5 text-secondary-500" />
            </div>
            <div>
              <p className="text-sm text-neutral-500">Phone</p>
              <p className="text-neutral-900 font-semibold">{ORGANIZATION.phone}</p>
            </div>
          </a>

          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-secondary-500/10 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-secondary-500" />
            </div>
            <div>
              <p className="text-sm text-neutral-500">Address</p>
              <p className="text-neutral-900 font-semibold">{ORGANIZATION.address}</p>
            </div>
          </div>
        </div>

        <div className="flex gap-3 md:gap-4 pt-2">
          <a href={ORGANIZATION.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-secondary-500 hover:text-white transition-all" aria-label="Facebook">
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href={ORGANIZATION.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-secondary-500 hover:text-white transition-all" aria-label="Instagram">
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a href={ORGANIZATION.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-secondary-500 hover:text-white transition-all" aria-label="LinkedIn">
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-4 md:space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          <div>
            <label htmlFor="name" className="block text-xs md:text-sm font-semibold text-neutral-700 mb-1 md:mb-1.5">Your Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary-500/30 focus:border-secondary-500 transition-all text-sm md:text-base"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs md:text-sm font-semibold text-neutral-700 mb-1 md:mb-1.5">Your Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary-500/30 focus:border-secondary-500 transition-all text-sm md:text-base"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-xs md:text-sm font-semibold text-neutral-700 mb-1 md:mb-1.5">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={form.subject}
            onChange={handleChange}
            placeholder="How can we help?"
            className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary-500/30 focus:border-secondary-500 transition-all text-sm md:text-base"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-xs md:text-sm font-semibold text-neutral-700 mb-1 md:mb-1.5">Message</label>
          <textarea
            id="message"
            name="message"
            required
            value={form.message}
            onChange={handleChange}
            rows={4}
            placeholder="Write your message here..."
            className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary-500/30 focus:border-secondary-500 transition-all resize-none text-sm md:text-base"
          />
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-3.5 bg-secondary-500 text-white font-semibold rounded-xl hover:bg-secondary-600 hover:shadow-glow transition-all duration-300 inline-flex items-center justify-center gap-2 active:scale-[0.98] text-sm md:text-base"
        >
          <Send size={16} className="md:w-[18px] md:h-[18px]" />
          {sent ? 'Message Ready!' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
