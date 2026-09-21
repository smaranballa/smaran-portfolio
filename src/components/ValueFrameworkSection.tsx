import React from 'react';
import { Shield, Eye, Compass, MessageSquareCode } from 'lucide-react';
import { VALUE_FRAMEWORK } from '../data/portfolioData';

export const ValueFrameworkSection: React.FC = () => {
  const iconList = [Shield, Eye, Compass, MessageSquareCode];

  return (
    <section className="py-20 sm:py-28 lg:py-32 border-t border-[#161513]/8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="text-[12px] font-semibold tracking-wider uppercase text-[#8F6641] mb-3">
            Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#161513] tracking-tight leading-[1.15] mb-6">
            A website is more than a website.
          </h2>
          <p className="text-lg sm:text-xl text-[#5A554E] font-normal leading-relaxed">
            The goal isn't to simply put a business online. It's to create a digital experience that communicates trust, presents the business professionally and makes the next step obvious.
          </p>
        </div>

        {/* 4-Part Framework Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {VALUE_FRAMEWORK.map((item, index) => {
            const Icon = iconList[index] || Shield;

            return (
              <div
                key={item.pillar}
                className="bg-[#F5F2EA]/60 border border-[#161513]/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:bg-[#F5F2EA] transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-semibold text-[#8F6641] tracking-wider">
                      PILLAR {item.pillar}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#161513]/5 flex items-center justify-center text-[#161513]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-[#161513] mb-2 tracking-tight">
                    {item.title}
                  </h3>

                  <div className="text-xs font-medium text-[#7C766E] mb-3">
                    {item.summary}
                  </div>

                  <p className="text-sm text-[#5C564E] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#161513]/8">
                  <span className="text-[11px] font-medium text-[#8F6641] block">
                    Business Outcome:
                  </span>
                  <span className="text-xs font-semibold text-[#161513]">
                    {item.metricFocus}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
