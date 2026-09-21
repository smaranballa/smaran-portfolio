import React from 'react';
import { UserCheck, Briefcase, Sparkles, HeartHandshake } from 'lucide-react';
import { WHY_WORK_WITH_ME } from '../data/portfolioData';

export const WhyWorkWithMe: React.FC = () => {
  const icons = [UserCheck, Briefcase, Sparkles, HeartHandshake];

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[#F6F3EC]/50 border-t border-[#161513]/8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="text-[12px] font-semibold tracking-wider uppercase text-[#8F6641] mb-3">
            Partnership
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#161513] tracking-tight leading-[1.15] mb-5">
            A focused approach, without the agency overhead.
          </h2>
          <p className="text-lg sm:text-xl text-[#5A554E] font-normal leading-relaxed">
            Direct collaboration with someone who takes full accountability for your digital presence—from first Figma frame to live deployment.
          </p>
        </div>

        {/* 4 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {WHY_WORK_WITH_ME.map((item, index) => {
            const Icon = icons[index] || UserCheck;

            return (
              <div
                key={item.title}
                className="bg-[#FBF9F5] border border-[#161513]/10 rounded-2xl p-7 sm:p-9 flex flex-col justify-between hover:border-[#161513]/25 transition-all duration-200"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#161513]/5 border border-[#161513]/8 flex items-center justify-center text-[#161513] mb-6">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-xl font-semibold text-[#161513] tracking-tight mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#57524A] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
