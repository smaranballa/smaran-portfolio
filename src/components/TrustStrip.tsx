import React from 'react';
import { Palette, Smartphone, Zap, Search, Target, MessageCircle } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const capabilities = [
    { label: 'Premium Design', icon: Palette },
    { label: 'Responsive Development', icon: Smartphone },
    { label: 'Performance', icon: Zap },
    { label: 'SEO Foundation', icon: Search },
    { label: 'Lead Generation', icon: Target },
    { label: 'WhatsApp Integration', icon: MessageCircle },
  ];

  return (
    <section className="border-y border-[#161513]/8 bg-[#F5F2EC]/60 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 sm:gap-6 items-start">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col gap-1.5 group transition-colors duration-200"
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-[#7A746B] group-hover:text-[#161513] transition-colors" />
                  <span className="text-[13px] sm:text-[14px] font-semibold text-[#161513] tracking-tight">
                    {item.label}
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
