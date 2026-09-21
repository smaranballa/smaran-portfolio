import React from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-16 sm:py-20 lg:py-24 border-t border-[#161513]/8 scroll-mt-[4.5rem]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="text-[12px] font-semibold tracking-wider uppercase text-[#8F6641] mb-2.5">
            Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#161513] tracking-tight leading-[1.15]">
            Simple process. Serious execution.
          </h2>
        </div>

        {/* 5-Step Process Timeline List */}
        <div className="border-t border-[#161513]/12 divide-y divide-[#161513]/10">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-start"
            >
              <div className="lg:col-span-4 flex items-baseline gap-4">
                <span className="font-mono text-2xl sm:text-3xl font-bold text-[#8F6641] tracking-tight">
                  {step.step}
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#161513]">
                    {step.title}
                  </h3>
                  <span className="text-xs text-[#7A746B] font-medium block mt-0.5">
                    {step.duration}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-8">
                <p className="text-sm sm:text-base text-[#57524A] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
