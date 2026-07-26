import React, { useState } from 'react';
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', website: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-24 w-full relative z-20 flex flex-col items-center border-t border-[#D7E2EA]/5"
    >
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24 items-stretch">
        {/* Left Column - Contact Info */}
        <div className="flex-1 flex flex-col justify-between gap-10">
          <FadeIn delay={0} y={40} className="flex flex-col gap-6">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#D7E2EA]/50 uppercase">
              Contact Info Section
            </span>
            <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(2.5rem,6vw,80px)] select-none">
              Get in<br />Touch
            </h2>
            <p className="text-sm sm:text-base font-light text-[#D7E2EA]/70 leading-relaxed max-w-md">
              We're here to discuss your project and bring your ideas to life with premium design & development.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} y={30} className="flex flex-col gap-6 sm:gap-8">
            {/* Email info */}
            <a
              href="mailto:moatez@websy.com"
              className="flex items-center gap-4 group cursor-pointer w-fit"
            >
              <div className="w-12 h-12 rounded-full border border-[#D7E2EA]/10 flex items-center justify-center bg-transparent group-hover:bg-[#D7E2EA]/5 group-hover:border-[#D7E2EA]/30 transition-all duration-300">
                <Mail className="w-5 h-5 text-[#D7E2EA]/60 group-hover:text-[#D7E2EA] transition-colors" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-[#D7E2EA]/40 font-medium">Email Us</span>
                <span className="text-sm sm:text-base font-medium text-[#D7E2EA]/85 group-hover:text-white transition-colors">
                  moatez@websy.com
                </span>
              </div>
            </a>

            {/* Address info */}
            <div className="flex items-center gap-4 w-fit">
              <div className="w-12 h-12 rounded-full border border-[#D7E2EA]/10 flex items-center justify-center bg-transparent">
                <MapPin className="w-5 h-5 text-[#D7E2EA]/60" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-[#D7E2EA]/40 font-medium">Visit Us</span>
                <span className="text-sm sm:text-base font-medium text-[#D7E2EA]/85">
                  912 Nova Street, Sector 14, Berlin
                </span>
              </div>
            </div>

            {/* Phone info */}
            <a
              href="tel:+491529988411"
              className="flex items-center gap-4 group cursor-pointer w-fit"
            >
              <div className="w-12 h-12 rounded-full border border-[#D7E2EA]/10 flex items-center justify-center bg-transparent group-hover:bg-[#D7E2EA]/5 group-hover:border-[#D7E2EA]/30 transition-all duration-300">
                <Phone className="w-5 h-5 text-[#D7E2EA]/60 group-hover:text-[#D7E2EA] transition-colors" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-[#D7E2EA]/40 font-medium">Call Us</span>
                <span className="text-sm sm:text-base font-medium text-[#D7E2EA]/85 group-hover:text-white transition-colors">
                  +49 152 998 8411
                </span>
              </div>
            </a>
          </FadeIn>
        </div>

        {/* Right Column - Contact Form */}
        <div className="flex-1 flex flex-col justify-center">
          <FadeIn delay={0.15} y={40} className="w-full">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6 w-full">
              <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#D7E2EA]/50 uppercase mb-2 block md:hidden">
                Contact Form
              </span>
              
              {/* Name field */}
              <div className="relative w-full">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name*"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 rounded-2xl px-5 py-4 focus:border-[#B600A8] focus:ring-1 focus:ring-[#B600A8]/20 focus:outline-none transition-all duration-300 text-sm sm:text-base font-light text-[#D7E2EA] placeholder:text-[#D7E2EA]/30"
                />
              </div>

              {/* Email field */}
              <div className="relative w-full">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address*"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 rounded-2xl px-5 py-4 focus:border-[#B600A8] focus:ring-1 focus:ring-[#B600A8]/20 focus:outline-none transition-all duration-300 text-sm sm:text-base font-light text-[#D7E2EA] placeholder:text-[#D7E2EA]/30"
                />
              </div>

              {/* Website field */}
              <div className="relative w-full">
                <input
                  type="text"
                  name="website"
                  placeholder="Your Website (Optional)"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 rounded-2xl px-5 py-4 focus:border-[#B600A8] focus:ring-1 focus:ring-[#B600A8]/20 focus:outline-none transition-all duration-300 text-sm sm:text-base font-light text-[#D7E2EA] placeholder:text-[#D7E2EA]/30"
                />
              </div>

              {/* Message field */}
              <div className="relative w-full">
                <textarea
                  name="message"
                  required
                  placeholder="Write your message..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 rounded-2xl px-5 py-4 focus:border-[#B600A8] focus:ring-1 focus:ring-[#B600A8]/20 focus:outline-none transition-all duration-300 text-sm sm:text-base font-light text-[#D7E2EA] placeholder:text-[#D7E2EA]/30 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="mt-2">
                <button
                  type="submit"
                  style={{
                    background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                    boxShadow: 'inset 0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
                    outline: '2px solid #FFFFFF',
                    outlineOffset: '-3px',
                  }}
                  className="w-full sm:w-auto rounded-full text-white font-medium uppercase tracking-widest px-8 py-3.5 sm:px-10 sm:py-4 md:px-12 md:py-4.5 text-xs sm:text-sm hover:opacity-90 active:scale-95 transition-all duration-200 select-none flex items-center justify-center gap-2 cursor-pointer"
                >
                  Send Message
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
