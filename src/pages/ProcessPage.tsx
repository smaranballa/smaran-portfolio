import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, UserCheck, Briefcase, Sparkles, HeartHandshake, Calendar, MessageSquare, Clock } from 'lucide-react';
import { PROCESS_STEPS, WHY_WORK_WITH_ME } from '../data/portfolioData';

interface ProcessPageProps {
  onOpenContact: () => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onOpenContact }) => {
  const whyIcons = [UserCheck, Briefcase, Sparkles, HeartHandshake];

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
            Process
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#161513] tracking-tight leading-[1.14] mb-6">
            Simple process. Serious execution.
          </h1>
          <p className="text-lg sm:text-xl text-[#5A554E] font-normal leading-relaxed">
            Every project is structured to eliminate friction, keep feedback cycles fast, and deliver a website your business is proud to share.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="border-t border-[#161513]/12 divide-y divide-[#161513]/10 mb-24 sm:mb-32">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            >
              {/* Step indicator */}
              <div className="lg:col-span-3 flex items-baseline gap-4">
                <span className="font-mono text-3xl sm:text-4xl font-bold text-[#8F6641] tracking-tight">
                  {step.step}
                </span>
                <div>
                  <h2 className="text-2xl font-semibold text-[#161513]">
                    {step.title}
                  </h2>
                  <span className="text-xs text-[#7A746B] font-medium block mt-1">
                    Timeline: {step.duration}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="lg:col-span-5">
                <p className="text-base sm:text-lg text-[#524E47] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Milestone checklist */}
              <div className="lg:col-span-4 bg-[#F5F2EA]/80 rounded-2xl p-5 sm:p-6 border border-[#161513]/8">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#7C766E] block mb-3">
                  Key Checkpoints & Deliverables
                </span>
                <ul className="space-y-2.5">
                  {step.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#45413A]">
                      <Check className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Why Work With Me */}
        <div className="border-t border-[#161513]/10 pt-20 mb-20">
          <div className="max-w-3xl mb-14">
            <div className="text-[12px] font-semibold tracking-wider uppercase text-[#8F6641] mb-2">
              The Independent Advantage
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#161513] mb-4">
              A focused approach, without the agency overhead.
            </h2>
            <p className="text-base sm:text-lg text-[#5A554E] leading-relaxed">
              When you work with me, you work directly with the person designing the interfaces, writing the code, and optimizing the outcome.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
            {WHY_WORK_WITH_ME.map((item, index) => {
              const Icon = whyIcons[index] || UserCheck;
              return (
                <div
                  key={item.title}
                  className="bg-[#FBF9F5] border border-[#161513]/10 rounded-2xl p-8 flex flex-col justify-between hover:border-[#161513]/25 transition-all"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#161513]/5 border border-[#161513]/8 flex items-center justify-center text-[#161513] mb-5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#161513] mb-3">
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

          {/* Communication Charter */}
          <div className="p-8 rounded-2xl bg-[#F5F2EA]/70 border border-[#161513]/8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-[#524E47]">
            <div className="flex items-start gap-3">
              <MessageSquare className="w-5 h-5 text-[#8F6641] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-sm text-[#161513] mb-1">Direct WhatsApp & Slack</strong>
                <span>Quick async updates and questions answered without waiting days for an email reply.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-[#8F6641] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-sm text-[#161513] mb-1">Staging Environment</strong>
                <span>Preview and click through your website on private staging URLs as it gets built.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#8F6641] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-sm text-[#161513] mb-1">Guaranteed Deadlines</strong>
                <span>Clear milestone sign-offs so projects launch on schedule without scope drift.</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#161513] text-[#FBF9F5] hover:bg-[#2A2724] text-sm font-semibold rounded-full shadow-sm transition-colors"
          >
            <span>Plan Your Project Timeline</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
