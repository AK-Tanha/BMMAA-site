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
        <div className="relative">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-secondary-500 to-secondary-600 flex items-center justify-center mb-4 md:mb-5 shadow-lg shadow-secondary-500/20">
            <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">Get in Touch</h3>
          <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
            Have questions about BMMAA, membership, or events? Reach out and we&apos;ll get back to you.
          </p>
        </div>

        <div className="space-y-3 md:space-y-4">
          <a href={`mailto:${ORGANIZATION.email}`} className="flex items-center gap-3 md:gap-4 group p-3 md:p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-secondary-500/10 flex items-center justify-center shrink-0 group-hover:bg-secondary-500 group-hover:text-white transition-all duration-300">
              <Mail className="w-4 h-4 md:w-5 md:h-5 text-secondary-500 group-hover:text-white transition-colors" />
            </div>
            <div>
              <p className="text-xs md:text-sm text-neutral-500 font-medium">Email</p>
              <p className="text-neutral-900 font-semibold text-sm md:text-base">{ORGANIZATION.email}</p>
            </div>
          </a>

          <a href={`tel:${ORGANIZATION.phone}`} className="flex items-center gap-3 md:gap-4 group p-3 md:p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-secondary-500/10 flex items-center justify-center shrink-0 group-hover:bg-secondary-500 group-hover:text-white transition-all duration-300">
              <Phone className="w-4 h-4 md:w-5 md:h-5 text-secondary-500 group-hover:text-white transition-colors" />
            </div>
            <div>
              <p className="text-xs md:text-sm text-neutral-500 font-medium">Phone</p>
              <p className="text-neutral-900 font-semibold text-sm md:text-base">{ORGANIZATION.phone}</p>
            </div>
          </a>

          <div className="flex items-center gap-3 md:gap-4 group p-3 md:p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 cursor-default">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-secondary-500/10 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-secondary-500" />
            </div>
            <div>
              <p className="text-xs md:text-sm text-neutral-500 font-medium">Address</p>
              <p className="text-neutral-900 font-semibold text-sm md:text-base">{ORGANIZATION.address}</p>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <p className="text-xs md:text-sm font-semibold text-neutral-500 mb-3 md:mb-4 uppercase tracking-wider">Follow Us</p>
          <div className="flex gap-3 md:gap-4">
            <a href={ORGANIZATION.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-secondary-500 hover:text-white hover:shadow-lg hover:shadow-secondary-500/20 transition-all duration-300" aria-label="Facebook">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href={ORGANIZATION.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-secondary-500 hover:text-white hover:shadow-lg hover:shadow-secondary-500/20 transition-all duration-300" aria-label="Instagram">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href={ORGANIZATION.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-secondary-500 hover:text-white hover:shadow-lg hover:shadow-secondary-500/20 transition-all duration-300" aria-label="LinkedIn">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="lg:col-span-3 bg-white rounded-2xl shadow-xl shadow-neutral-200/50 p-6 md:p-8 space-y-5 md:space-y-6 border border-neutral-100">
        <div>
          <h4 className="text-lg md:text-xl font-bold text-neutral-900 mb-1">Send us a Message</h4>
          <p className="text-sm text-neutral-500">We&apos;ll respond within 24 hours</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          <div>
            <label htmlFor="name" className="block text-xs md:text-sm font-semibold text-neutral-700 mb-1.5 md:mb-2">Your Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 md:pl-4 flex items-center pointer-events-none text-neutral-400">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              </div>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full pl-10 md:pl-12 pr-4 py-3 md:py-3.5 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary-500/30 focus:border-secondary-500 focus:bg-white transition-all text-sm md:text-base"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-xs md:text-sm font-semibold text-neutral-700 mb-1.5 md:mb-2">Your Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 md:pl-4 flex items-center pointer-events-none text-neutral-400">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full pl-10 md:pl-12 pr-4 py-3 md:py-3.5 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary-500/30 focus:border-secondary-500 focus:bg-white transition-all text-sm md:text-base"
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-xs md:text-sm font-semibold text-neutral-700 mb-1.5 md:mb-2">Subject</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 md:pl-4 flex items-center pointer-events-none text-neutral-400">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
            </div>
            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              placeholder="How can we help?"
              className="w-full pl-10 md:pl-12 pr-4 py-3 md:py-3.5 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary-500/30 focus:border-secondary-500 focus:bg-white transition-all text-sm md:text-base"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs md:text-sm font-semibold text-neutral-700 mb-1.5 md:mb-2">Message</label>
          <div className="relative">
            <div className="absolute top-3 md:top-3.5 left-0 pl-3 md:pl-4 flex items-start pointer-events-none text-neutral-400">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
            </div>
            <textarea
              id="message"
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Write your message here..."
              className="w-full pl-10 md:pl-12 pr-4 py-3 md:py-3.5 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary-500/30 focus:border-secondary-500 focus:bg-white transition-all resize-none text-sm md:text-base"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto px-8 md:px-10 py-3.5 md:py-4 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white font-semibold rounded-xl hover:from-secondary-600 hover:to-secondary-700 hover:shadow-xl hover:shadow-secondary-500/20 transition-all duration-300 inline-flex items-center justify-center gap-2.5 active:scale-[0.98] text-sm md:text-base"
        >
          <Send size={16} className="md:w-[18px] md:h-[18px]" />
          {sent ? 'Message Ready!' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
