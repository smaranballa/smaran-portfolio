import React from 'react';
import { Code2, Server, BarChart3, Workflow } from 'lucide-react';
import { TECH_CATEGORIES } from '../data/portfolioData';

export const TechnologySection: React.FC = () => {
  const icons = [Code2, Server, BarChart3, Workflow];

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[#F6F3EC]/50 border-t border-[#161513]/8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="text-[12px] font-semibold tracking-wider uppercase text-[#8F6641] mb-3">
            Technology
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#161513] tracking-tight leading-[1.15] mb-5">
            Built with modern technology.
          </h2>
          <p className="text-lg sm:text-xl text-[#5A554E] font-normal leading-relaxed">
            The technology is chosen around the requirements of the project—not the other way around.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_CATEGORIES.map((cat, idx) => {
            const Icon = icons[idx] || Code2;

            return (
              <div
                key={cat.category}
                className="bg-[#FBF9F5] border border-[#161513]/10 rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-[#161513]/5 border border-[#161513]/8 flex items-center justify-center text-[#161513] mb-5">
                    <Icon className="w-4 h-4" />
                  </div>

                  <h3 className="text-base font-semibold text-[#161513] tracking-tight mb-2">
                    {cat.category}
                  </h3>

                  <p className="text-xs text-[#706B62] leading-relaxed mb-6">
                    {cat.summary}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-[#161513]/8">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="text-xs">
                      <div className="font-semibold text-[#161513]">
                        {item.name}
                      </div>
                      <div className="text-[11px] text-[#706B62] leading-tight mt-0.5">
                        {item.role}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Philosophy Note */}
        <div className="mt-8 text-center text-xs text-[#78726A] max-w-2xl mx-auto">
          No bloated WordPress page builders or sluggish plugins. Clean, semantic, accessible code that delivers sub-second page loads on real-world 4G networks.
        </div>
      </div>
    </section>
  );
};
