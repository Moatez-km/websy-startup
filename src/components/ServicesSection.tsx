import React, { useState } from 'react';
import { Check, Tag, X, Calendar, Clock } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { motion, AnimatePresence } from 'framer-motion';

const FEATURES = [
  'Custom, conversion-focused design',
  '100% responsive',
  'SEO optimization',
  'Security and GDPR compliance',
  'Basic email support available.',
  'Training on site management',
];
const FEATURES1 = [
  'Custom, conversion-focused design',
  '100% responsive',
  'Multiple pages (services, contact, about...)',
  'SEO optimization',
  'Comprehensive SEO strategy for Google',
  'Security and GDPR compliance',
  'Basic email support available.',
  'Training on site management',
];
const FEATURES2 = [
  'Custom, conversion-focused design',
  '100% responsive',
  'SEO optimization',
  'Security and GDPR compliance',
  'Product catalog (up to 25 products)',
  'Secure payment via Stripe',
  'Basic email support available.',
  'Training on site management',
];

export const ServicesSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    description: '',
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleOpen = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsOpen(true);
    setIsSuccess(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset form after close animation finishes
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        description: '',
      });
      setIsSuccess(false);
    }, 300);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Meeting Booking Request:', {
      service: selectedService,
      ...formData,
    });
    setIsSuccess(true);
    // Automatically close after showing success screen
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full flex flex-col items-center z-20 relative"
    >
      <div className="w-full max-w-5xl flex flex-col items-center">
        {/* Top Pill Tag */}
        <FadeIn delay={0} y={20}>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs font-semibold uppercase text-gray-600 mb-6 select-none">
            <Tag className="w-3.5 h-3.5 text-blue-600" />
            Pricing Plan
          </div>
        </FadeIn>

        {/* Section Heading */}
        <FadeIn delay={0.1} y={30}>
          <h2 className="text-center font-black uppercase text-[clamp(2rem,6vw,64px)] text-[#0C0C0C] leading-tight mb-4 select-none">
            Explore Our{' '}
            <span
              style={{ fontFamily: "'Instrument Serif', serif" }}
              className="italic lowercase font-normal text-blue-600"
            >
              affordable
            </span>{' '}
            Service !
          </h2>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.15} y={20}>
          <p className="text-center text-sm sm:text-base font-light text-gray-500 max-w-xl mb-8 leading-relaxed select-none">
            Hosting and maintenance are available as options. These rates give
            you an idea of ​​the budget based on project complexity. Each site
            is built according to your needs—the final price is determined
            collaboratively.
          </p>
        </FadeIn>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch">
          {/* Card 1: Landing page */}
          <FadeIn
            delay={0.25}
            y={40}
            className="border border-gray-200 rounded-[32px] p-6 sm:p-8 flex flex-col justify-between bg-transparent hover:shadow-lg transition-all duration-300 select-none relative overflow-hidden"
          >
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Landing page
              </h3>
              <p className="text-xs text-gray-500 mb-6">
                Landing Page Starting at €199 / project
              </p>

              <button
                onClick={() => handleOpen('Landing page')}
                className="w-full border border-gray-300 text-gray-800 rounded-xl py-2.5 font-medium hover:bg-gray-50 transition-colors text-center text-sm mb-8 cursor-pointer"
              >
                Request a Quote
              </button>

              <div className="h-[1px] bg-gray-100 w-full mb-6" />

              <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Features Included
              </h4>
              <ul className="flex flex-col gap-3.5">
                {FEATURES.map((feature, idx) => {
                  const isIncluded = idx < 5;
                  return (
                    <li key={idx} className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isIncluded ? 'bg-blue-600' : 'bg-gray-100'
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            isIncluded ? 'text-white' : 'text-gray-300'
                          }`}
                        />
                      </div>
                      <span
                        className={`text-sm ${
                          isIncluded
                            ? 'text-gray-700'
                            : 'text-gray-400 line-through'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </FadeIn>

          {/* Card 2: Showcase Website (Popular) */}
          <FadeIn
            delay={0.3}
            y={40}
            className="border-2 border-pink-500/40 rounded-[32px] p-6 sm:p-8 flex flex-col justify-between bg-transparent shadow-md hover:shadow-xl transition-all duration-300 select-none relative overflow-hidden"
          >
            <div>
              {/* Popular Badge */}
              <div className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                Popular
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Showcase Website
              </h3>
              <p className="text-xs text-gray-500 mb-6">
                Quote-based, tailored to your project
              </p>

              <button
                onClick={() => handleOpen('Showcase Website')}
                style={{
                  background:
                    'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                }}
                className="w-full text-white rounded-xl py-2.5 font-medium hover:opacity-90 transition-opacity text-center text-sm mb-8 shadow-sm cursor-pointer"
              >
                Request a Quote
              </button>

              <div className="h-[1px] bg-gray-100 w-full mb-6" />

              <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Features Included
              </h4>
              <ul className="flex flex-col gap-3.5">
                {FEATURES1.map((feature, idx) => {
                  const isIncluded = idx < 8;
                  return (
                    <li key={idx} className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isIncluded ? 'bg-blue-600' : 'bg-gray-100'
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            isIncluded ? 'text-white' : 'text-gray-300'
                          }`}
                        />
                      </div>
                      <span
                        className={`text-sm ${
                          isIncluded
                            ? 'text-gray-700'
                            : 'text-gray-400 line-through'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </FadeIn>

          {/* Card 3: E-commerce Website */}
          <FadeIn
            delay={0.35}
            y={40}
            className="border border-gray-200 rounded-[32px] p-6 sm:p-8 flex flex-col justify-between bg-transparent hover:shadow-lg transition-all duration-300 select-none relative overflow-hidden"
          >
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                E-commerce site
              </h3>
              <p className="text-xs text-gray-500 mb-6">
                Quote-based, tailored to your project
              </p>

              <button
                onClick={() => handleOpen('E-commerce site')}
                className="w-full border border-gray-300 text-gray-800 rounded-xl py-2.5 font-medium hover:bg-gray-50 transition-colors text-center text-sm mb-8 cursor-pointer"
              >
                Request a Quote
              </button>

              <div className="h-[1px] bg-gray-100 w-full mb-6" />

              <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Features Included
              </h4>
              <ul className="flex flex-col gap-3.5">
                {FEATURES2.map((feature, idx) => {
                  const isIncluded = idx < 8;
                  return (
                    <li key={idx} className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isIncluded ? 'bg-blue-600' : 'bg-gray-100'
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            isIncluded ? 'text-white' : 'text-gray-300'
                          }`}
                        />
                      </div>
                      <span
                        className={`text-sm ${
                          isIncluded
                            ? 'text-gray-700'
                            : 'text-gray-400 line-through'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-lg bg-[#0C0C0C] border border-[#D7E2EA]/10 rounded-[32px] p-6 sm:p-8 text-[#D7E2EA] z-10 shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-5 right-5 w-8 h-8 rounded-full border border-[#D7E2EA]/10 flex items-center justify-center hover:bg-[#D7E2EA]/10 transition-colors cursor-pointer text-[#D7E2EA]/60 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>

              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-6"
                  >
                    <div>
                      <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-[#D7E2EA]/50 uppercase">
                        Request Service Call
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mt-1">
                        Book a Meeting
                      </h3>
                      <div className="inline-block bg-[#D7E2EA]/10 border border-[#D7E2EA]/20 rounded-full px-3 py-1 mt-2.5 text-xs font-medium text-[#D7E2EA]/85">
                        Selected: {selectedService}
                      </div>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-4"
                    >
                      {/* Name */}
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your Name*"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 rounded-xl px-4 py-2.5 focus:border-[#B600A8] focus:ring-1 focus:ring-[#B600A8]/20 focus:outline-none transition-all text-sm font-light text-[#D7E2EA] placeholder:text-[#D7E2EA]/30"
                      />

                      {/* Email & Phone Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="Email Address*"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 rounded-xl px-4 py-2.5 focus:border-[#B600A8] focus:ring-1 focus:ring-[#B600A8]/20 focus:outline-none transition-all text-sm font-light text-[#D7E2EA] placeholder:text-[#D7E2EA]/30"
                        />
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="Phone Number*"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 rounded-xl px-4 py-2.5 focus:border-[#B600A8] focus:ring-1 focus:ring-[#B600A8]/20 focus:outline-none transition-all text-sm font-light text-[#D7E2EA] placeholder:text-[#D7E2EA]/30"
                        />
                      </div>

                      {/* Date & Time Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="relative">
                          <input
                            type="date"
                            name="date"
                            required
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 rounded-xl pl-10 pr-4 py-2.5 focus:border-[#B600A8] focus:ring-1 focus:ring-[#B600A8]/20 focus:outline-none transition-all text-sm font-light text-[#D7E2EA] [color-scheme:dark]"
                          />
                          <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D7E2EA]/40 pointer-events-none" />
                        </div>
                        <div className="relative">
                          <input
                            type="time"
                            name="time"
                            required
                            value={formData.time}
                            onChange={handleChange}
                            className="w-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 rounded-xl pl-10 pr-4 py-2.5 focus:border-[#B600A8] focus:ring-1 focus:ring-[#B600A8]/20 focus:outline-none transition-all text-sm font-light text-[#D7E2EA] [color-scheme:dark]"
                          />
                          <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D7E2EA]/40 pointer-events-none" />
                        </div>
                      </div>

                      {/* Description */}
                      <textarea
                        name="description"
                        required
                        placeholder="Tell us about your project needs...*"
                        rows={3}
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 rounded-xl px-4 py-2.5 focus:border-[#B600A8] focus:ring-1 focus:ring-[#B600A8]/20 focus:outline-none transition-all text-sm font-light text-[#D7E2EA] placeholder:text-[#D7E2EA]/30 resize-none"
                      />

                      {/* Submit */}
                      <button
                        type="submit"
                        style={{
                          background:
                            'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                          boxShadow:
                            'inset 0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
                          outline: '2px solid #FFFFFF',
                          outlineOffset: '-3px',
                        }}
                        className="w-full rounded-full text-white font-medium uppercase tracking-widest py-3 hover:opacity-90 active:scale-98 transition-all text-xs cursor-pointer mt-2"
                      >
                        Confirm Booking
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-10 gap-4 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500 flex items-center justify-center text-green-500">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold">Booking Confirmed!</h3>
                    <p className="text-sm font-light text-[#D7E2EA]/60 max-w-xs leading-relaxed">
                      Thank you for booking a call. We will contact you at your
                      chosen date and time:
                      <br />
                      <strong className="text-white mt-1.5 block">
                        {formData.date} at {formData.time}
                      </strong>
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
