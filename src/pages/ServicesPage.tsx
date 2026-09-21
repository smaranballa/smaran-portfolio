import React from 'react';
import { motion } from 'motion/react';
import { Layout, Search, Target, MessageCircle, ShieldCheck, Sparkles, Check, ArrowRight, Code2, Server, BarChart3, Workflow } from 'lucide-react';
import { SERVICES_DATA, TECH_CATEGORIES, VALUE_FRAMEWORK } from '../data/portfolioData';

interface ServicesPageProps {
  onOpenContact: () => void;
  onOpenWhatsApp: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenContact, onOpenWhatsApp }) => {
  const iconMap: { [key: string]: React.ElementType } = {
    Layout,
    Search,
    Target,
    MessageCircle,
    ShieldCheck,
    Sparkles,
  };

  const techIcons = [Code2, Server, BarChart3, Workflow];

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="pt-24 sm:pt-28 pb-24 sm:pb-32"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="text-[12px] font-semibold tracking-wider uppercase text-[#8F6641] mb-3">
            Services
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#161513] tracking-tight leading-[1.14] mb-6">
            Everything needed to build a stronger digital presence.
          </h1>
          <p className="text-lg sm:text-xl text-[#5A554E] font-normal leading-relaxed">
            Websites, search, and enquiry paths for any growing business.
          </p>
        </div>

        {/* 6 Core Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-24 sm:mb-32">
          {SERVICES_DATA.map((service) => {
            const IconComponent = iconMap[service.icon] || Layout;

            return (
              <div
                key={service.id}
                className="bg-[#FBF9F5] border border-[#161513]/10 rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:border-[#161513]/25 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#161513]/5 border border-[#161513]/8 flex items-center justify-center text-[#161513]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-[#8F6641] bg-[#8F6641]/10 px-2.5 py-1 rounded-full">
                      {service.badge}
                    </span>
                  </div>

                  <h2 className="text-xl font-semibold text-[#161513] tracking-tight mb-3">
                    {service.title}
                  </h2>

                  <p className="text-sm text-[#5C564E] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#161513]/8">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#7C766E] block mb-3">
                    Key Deliverables
                  </span>
                  <ul className="space-y-2.5">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#423E37]">
                        <Check className="w-3.5 h-3.5 text-[#2E7D32] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* What I Actually Care About (Value Framework) */}
        <div className="border-t border-[#161513]/10 pt-20 mb-24 sm:mb-32">
          <div className="max-w-3xl mb-14">
            <div className="text-[12px] font-semibold tracking-wider uppercase text-[#8F6641] mb-2">
              Strategic Foundation
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#161513] mb-4">
              A website is more than a website.
            </h2>
            <p className="text-base sm:text-lg text-[#5A554E] leading-relaxed">
              The goal isn't to simply put a business online. It's to create a digital experience that communicates trust, presents the business professionally and makes the next step obvious.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUE_FRAMEWORK.map((item) => (
              <div
                key={item.pillar}
                className="bg-[#F5F2EA]/60 border border-[#161513]/8 rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-semibold text-[#8F6641] tracking-wider block mb-4">
                    PILLAR {item.pillar}
                  </span>
                  <h3 className="text-lg font-semibold text-[#161513] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C564E] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Architecture */}
        <div className="border-t border-[#161513]/10 pt-20 mb-20">
          <div className="max-w-3xl mb-12">
            <div className="text-[12px] font-semibold tracking-wider uppercase text-[#8F6641] mb-2">
              Technical Standards
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#161513] mb-4">
              Built with modern technology.
            </h2>
            <p className="text-base sm:text-lg text-[#5A554E] leading-relaxed">
              The technology is chosen around the requirements of the project—not the other way around.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TECH_CATEGORIES.map((cat, idx) => {
              const Icon = techIcons[idx] || Code2;
              return (
                <div
                  key={cat.category}
                  className="bg-[#FBF9F5] border border-[#161513]/10 rounded-2xl p-6"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#161513]/5 flex items-center justify-center text-[#161513] mb-4">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#161513] mb-3">
                    {cat.category}
                  </h3>
                  <div className="space-y-2 pt-3 border-t border-[#161513]/8">
                    {cat.items.map((it, i) => (
                      <div key={i} className="text-xs font-semibold text-[#161513]">
                        {it.name}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#161513] text-[#FBF9F5] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              Want a tailored proposal for your business?
            </h3>
            <p className="text-sm text-[#B8B2A6]">
              Share your existing link or goals and I'll outline a suggested scope and timeline.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenWhatsApp}
              className="px-5 py-3 bg-[#256B3E] hover:bg-[#1E5732] text-white text-xs sm:text-sm font-semibold rounded-full transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Me</span>
            </button>
            <button
              onClick={onOpenContact}
              className="px-5 py-3 bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-medium rounded-full transition-colors"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
