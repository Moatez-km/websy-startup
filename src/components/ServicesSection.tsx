import React, { useState } from 'react';
import { Check, Tag } from 'lucide-react';
import { FadeIn } from './FadeIn';

const FEATURES = [
  'Streamline up to five workflows.',
  'Manage project tasks effectively.',
  'Dashboard with real-time updates.',
  'Get easy notifications and reminders.',
  'Basic email support available.',
  '10 GB of file storage.',
];

export const ServicesSection: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  const getPrice = (basePrice: number) => {
    if (basePrice === 0) return 0;
    return billingPeriod === 'annual' ? Math.round(basePrice * 0.8) : basePrice;
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
            Explore Our <span style={{ fontFamily: "'Instrument Serif', serif" }} className="italic lowercase font-normal text-blue-600">affordable</span> Pricing!
          </h2>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.15} y={20}>
          <p className="text-center text-sm sm:text-base font-light text-gray-500 max-w-xl mb-8 leading-relaxed select-none">
            Discover tools built to simplify tasks, reduce friction, and keep your creative momentum flowing.
          </p>
        </FadeIn>

        {/* Toggle Switches */}
        <FadeIn delay={0.2} y={20} className="mb-16">
          <div className="flex items-center bg-gray-100 p-1 rounded-full relative select-none">
            <button
              onClick={() => setBillingPeriod('monthly')}
              style={{
                background:
                  billingPeriod === 'monthly'
                    ? 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)'
                    : 'transparent',
              }}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                billingPeriod === 'monthly' ? 'text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              style={{
                background:
                  billingPeriod === 'annual'
                    ? 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)'
                    : 'transparent',
              }}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                billingPeriod === 'annual' ? 'text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Annual
              <span className="text-[10px] bg-blue-500 text-white px-1.5 py-0.5 rounded-full font-bold">
                Save 20%
              </span>
            </button>
          </div>
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free Trial</h3>
              <p className="text-xs text-gray-500 mb-6">Predict bottlenecks and optimize team</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl sm:text-5xl font-black text-gray-900">$0</span>
                <span className="text-sm text-gray-500">/ Month</span>
              </div>

              <button className="w-full border border-gray-300 text-gray-800 rounded-xl py-2.5 font-medium hover:bg-gray-50 transition-colors text-center text-sm mb-8">
                Start For Free
              </button>

              <div className="h-[1px] bg-gray-100 w-full mb-6" />

              <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Features Included</h4>
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

              <h3 className="text-xl font-bold text-gray-900 mb-2">Business</h3>
              <p className="text-xs text-gray-500 mb-6">Predict bottlenecks and optimize team</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl sm:text-5xl font-black text-gray-900">${getPrice(299)}</span>
                <span className="text-sm text-gray-500">/ Month</span>
              </div>

              <button
                style={{
                  background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                }}
                className="w-full text-white rounded-xl py-2.5 font-medium hover:opacity-90 transition-opacity text-center text-sm mb-8 shadow-sm"
              >
                Start For Free
              </button>

              <div className="h-[1px] bg-gray-100 w-full mb-6" />

              <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Features Included</h4>
              <ul className="flex flex-col gap-3.5">
                {FEATURES.map((feature, idx) => {
                  const isIncluded = idx < 6;
                  return (
                    <li key={idx} className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isIncluded ? 'bg-blue-600' : 'bg-gray-100'
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <p className="text-xs text-gray-500 mb-6">Predict bottlenecks and optimize team</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl sm:text-5xl font-black text-gray-900">${getPrice(999)}</span>
                <span className="text-sm text-gray-500">/ Month</span>
              </div>

              <button className="w-full border border-gray-300 text-gray-800 rounded-xl py-2.5 font-medium hover:bg-gray-50 transition-colors text-center text-sm mb-8">
                Start For Free
              </button>

              <div className="h-[1px] bg-gray-100 w-full mb-6" />

              <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Features Included</h4>
              <ul className="flex flex-col gap-3.5">
                {FEATURES.map((feature, idx) => {
                  const isIncluded = idx < 6;
                  return (
                    <li key={idx} className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isIncluded ? 'bg-blue-600' : 'bg-gray-100'
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
