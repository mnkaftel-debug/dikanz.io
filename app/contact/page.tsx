'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20 pb-24">
      <div className="bg-dikanz-dark py-20 border-b border-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Whether you&apos;re a prospective student, a potential partner, or an investor, we&apos;d love to hear from you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-dikanz-blue flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Headquarters</h3>
                  <p className="text-gray-600">
                    DIKANZ Innovation Hub<br />
                    [Placeholder Address Line 1]<br />
                    [Placeholder City, State, ZIP]<br />
                    [Country]
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-dikanz-blue flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Email Us</h3>
                  <p className="text-gray-600">
                    General: info@dikanz.com<br />
                    Admissions: admissions@dikanz.com<br />
                    Partnerships: partners@dikanz.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-dikanz-blue flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Call Us</h3>
                  <p className="text-gray-600">
                    +1 (555) 123-4567<br />
                    Mon-Fri, 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-gray-50 rounded-3xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Join our Community</h3>
              <p className="text-gray-600 mb-6">Follow us on social media to stay updated on our latest programs, products, and events.</p>
              <div className="flex gap-4">
                {/* Social Placeholders */}
                <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-dikanz-blue hover:border-dikanz-blue cursor-pointer transition-colors">
                  <span className="text-xs font-bold">IN</span>
                </div>
                <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-dikanz-blue hover:border-dikanz-blue cursor-pointer transition-colors">
                  <span className="text-xs font-bold">TW</span>
                </div>
                <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-dikanz-blue hover:border-dikanz-blue cursor-pointer transition-colors">
                  <span className="text-xs font-bold">IG</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-dikanz-blue focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-dikanz-blue focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-dikanz-blue focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="" disabled>Select a subject</option>
                  <option value="admissions">Admissions Inquiry</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="incubation">Incubation Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-dikanz-blue focus:border-transparent outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-dikanz-blue text-white rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
              >
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
