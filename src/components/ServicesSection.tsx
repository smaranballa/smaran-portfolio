import React from 'react';
import { Layout, Search, Target, MessageCircle, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';

interface ServicesSectionProps {
  onOpenContact: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact }) => {
  const iconMap: { [key: string]: React.ElementType } = {
    Layout,
    Search,
    Target,
    MessageCircle,
    ShieldCheck,
    Sparkles,
  };

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-[#F6F3EC]/50 border-t border-[#161513]/8 scroll-mt-[4.5rem]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="text-[12px] font-semibold tracking-wider uppercase text-[#8F6641] mb-2.5">
            Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#161513] tracking-tight leading-[1.15]">
            Everything needed to build a stronger digital presence.
          </h2>
        </div>

        {/* Services Grid (6 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => {
            const IconComponent = iconMap[service.icon] || Layout;

            return (
              <div
                key={service.id}
                className="bg-[#FBF9F5] border border-[#161513]/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#161513]/25 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#161513]/5 border border-[#161513]/8 flex items-center justify-center text-[#161513] group-hover:bg-[#161513] group-hover:text-[#FBF9F5] transition-colors duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-[#8F6641] bg-[#8F6641]/10 px-2.5 py-1 rounded-full">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-[#161513] tracking-tight mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-[15px] text-[#5C564E] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Context Banner */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-[#EFECE5] border border-[#161513]/8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="max-w-2xl">
            <h4 className="text-base sm:text-lg font-semibold text-[#161513]">
              Not sure which service fits?
            </h4>
          </div>
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#161513] text-[#FBF9F5] hover:bg-[#2A2724] text-xs sm:text-sm font-medium transition-colors shrink-0"
          >
            <span>Request a Quick Review</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C4BEB4]" />
          </button>
        </div>
      </div>
    </section>
  );
};
