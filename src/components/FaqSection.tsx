import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/portfolioData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[#F6F3EC]/50 border-t border-[#161513]/8">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="mb-12 sm:mb-16 text-center">
          <div className="text-[12px] font-semibold tracking-wider uppercase text-[#8F6641] mb-3">
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#161513] tracking-tight leading-[1.15]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-[#161513]/10 border-y border-[#161513]/10">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="py-5 sm:py-6">
                <button
                  id={`faq-toggle-${idx}`}
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between gap-4 text-left group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-[#161513] group-hover:text-[#8F6641] transition-colors">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-[#161513]/10 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#161513] text-[#FBF9F5]' : 'bg-[#FBF9F5] text-[#161513]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-3.5 pr-10 text-sm sm:text-base text-[#57524A] leading-relaxed">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
