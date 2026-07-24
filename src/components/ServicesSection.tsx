import React from 'react';
import { Check, Tag } from 'lucide-react';
import { FadeIn } from './FadeIn';

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
            Explore Our <span style={{ fontFamily: "'Instrument Serif', serif" }} className="italic lowercase font-normal text-blue-600">affordable</span> Service !
          </h2>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.15} y={20}>
          <p className="text-center text-sm sm:text-base font-light text-gray-500 max-w-xl mb-8 leading-relaxed select-none">
            Hosting and maintenance are available as options. These rates give you an idea of ​​the budget based on project complexity. Each site is built according to your needs—the final price is determined collaboratively.
          </p>
        </FadeIn>



        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch">
          {/* Card 1: Free Trial */}
          <FadeIn
            delay={0.25}
            y={40}
            className="border border-gray-200 rounded-[32px] p-6 sm:p-8 flex flex-col justify-between bg-transparent hover:shadow-lg transition-all duration-300 select-none relative overflow-hidden"
          >
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Landing page</h3>
              <p className="text-xs text-gray-500 mb-6">Landing Page Starting at €199 / project</p>

              <button className="w-full border border-gray-300 text-gray-800 rounded-xl py-2.5 font-medium hover:bg-gray-50 transition-colors text-center text-sm mb-8">
                Request a Quote
              </button>

              <div className="h-[1px] bg-gray-100 w-full mb-6" />

              <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Features Included</h4>
              <ul className="flex flex-col gap-3.5">
                {FEATURES.map((feature, idx) => {
                  const isIncluded = idx < 5;
                  return (
                    <li key={idx} className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${isIncluded ? 'bg-blue-600' : 'bg-gray-100'
                          }`}
                      >
                        <Check className={`w-3 h-3 ${isIncluded ? 'text-white' : 'text-gray-300'}`} />
                      </div>
                      <span className={`text-sm ${isIncluded ? 'text-gray-700' : 'text-gray-400 line-through'}`}>
                        {feature}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </FadeIn>

          {/* Card 2: Business (Popular) */}
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

              <h3 className="text-xl font-bold text-gray-900 mb-2">Showcase Website</h3>
              <p className="text-xs text-gray-500 mb-6">Quote-based, tailored to your project</p>


              <button
                style={{
                  background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                }}
                className="w-full text-white rounded-xl py-2.5 font-medium hover:opacity-90 transition-opacity text-center text-sm mb-8 shadow-sm"
              >
                Request a Quote
              </button>

              <div className="h-[1px] bg-gray-100 w-full mb-6" />

              <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Features Included</h4>
              <ul className="flex flex-col gap-3.5">
                {FEATURES1.map((feature, idx) => {
                  const isIncluded = idx < 8;
                  return (
                    <li key={idx} className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${isIncluded ? 'bg-blue-600' : 'bg-gray-100'
                          }`}
                      >
                        <Check className={`w-3 h-3 ${isIncluded ? 'text-white' : 'text-gray-300'}`} />
                      </div>
                      <span className={`text-sm ${isIncluded ? 'text-gray-700' : 'text-gray-400 line-through'}`}>
                        {feature}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </FadeIn>

          {/* Card 3: Enterprise */}
          <FadeIn
            delay={0.35}
            y={40}
            className="border border-gray-200 rounded-[32px] p-6 sm:p-8 flex flex-col justify-between bg-transparent hover:shadow-lg transition-all duration-300 select-none relative overflow-hidden"
          >
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">E-commerce site</h3>
              <p className="text-xs text-gray-500 mb-6">Quote-based, tailored to your project</p>


              <button className="w-full border border-gray-300 text-gray-800 rounded-xl py-2.5 font-medium hover:bg-gray-50 transition-colors text-center text-sm mb-8">
                Request a Quote
              </button>

              <div className="h-[1px] bg-gray-100 w-full mb-6" />

              <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Features Included</h4>
              <ul className="flex flex-col gap-3.5">
                {FEATURES2.map((feature, idx) => {
                  const isIncluded = idx < 8;
                  return (
                    <li key={idx} className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${isIncluded ? 'bg-blue-600' : 'bg-gray-100'
                          }`}
                      >
                        <Check className={`w-3 h-3 ${isIncluded ? 'text-white' : 'text-gray-300'}`} />
                      </div>
                      <span className={`text-sm ${isIncluded ? 'text-gray-700' : 'text-gray-400 line-through'}`}>
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
    </section>
  );
};
