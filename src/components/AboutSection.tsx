import React from 'react';
import { MapPin, Search, Layout, Share2, MessageCircle, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenContact: () => void;
}

const PILLARS = [
  {
    title: 'Get discovered',
    line: 'Google Business Profile, local SEO, and search visibility so more customers can find you.',
    icon: Search,
  },
  {
    title: 'Look credible',
    line: 'A premium website that reflects the quality of your actual work.',
    icon: Layout,
  },
  {
    title: 'Stay visible',
    line: 'A practical social system — planning, creatives, captions, and AI-assisted production.',
    icon: Share2,
  },
  {
    title: 'Generate enquiries',
    line: 'WhatsApp, calls, forms, and consultation flows that make the next step easy.',
    icon: MessageCircle,
  },
  {
    title: 'Follow up automatically',
    line: 'AI that qualifies leads, answers common questions, and cuts repetitive follow-up.',
    icon: Cpu,
  },
];

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 border-t border-[#161513]/8 scroll-mt-[4.5rem]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="text-[12px] font-semibold tracking-wider uppercase text-[#8F6641]">
              About Smaran
            </span>
            <span className="text-[#161513]/25 font-light">·</span>
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[#161513]/6 text-[#3E3A34]">
              Digital Growth Partner
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#161513] tracking-tight leading-[1.15] mb-4">
            A digital presence that does more than look good.
          </h2>

          <div className="flex flex-wrap items-center gap-2 mb-6">
            {['Websites', 'Visibility', 'Content', 'Lead Generation', 'AI Automation'].map((pillar) => (
              <span
                key={pillar}
                className="inline-flex items-center text-xs sm:text-[13px] font-medium px-3 py-1 rounded-md bg-[#EAE5DC] text-[#453F38] border border-[#161513]/8"
              >
                {pillar}
              </span>
            ))}
          </div>

          <p className="text-base sm:text-lg text-[#554F47] font-normal leading-relaxed">
            Your website should help people <strong className="font-semibold text-[#161513]">discover you, trust you, and take the next step.</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#E9E4DB] border border-[#161513]/10 shadow-[0_16px_40px_rgba(0,0,0,0.06)] aspect-[4/5] max-w-md mx-auto group">
              <img
                src={`${import.meta.env.BASE_URL}smaran.jpg`}
                alt="Smaran — Digital Growth Partner"
                className="w-full h-full object-cover object-top filter grayscale contrast-[1.04] brightness-95 transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#161513]/95 via-[#161513]/40 to-transparent flex flex-col justify-end p-6 text-[#FBF9F5]">
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-70" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22C55E] shadow-[0_0_0_2px_rgba(34,197,94,0.35)]" />
                  </span>
                  <span className="text-[11px] font-mono tracking-wider uppercase text-[#D8D2C4]">
                    Available for Client Projects
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-white tracking-tight leading-tight">
                  Smaran
                </h3>

                <p className="text-xs sm:text-[13px] text-[#D0C9BD] font-normal mt-1 leading-snug">
                  AI-Accelerated Digital Design, Engineering & Growth
                </p>

                <div className="mt-3.5 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] text-[#A8A296]">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#D0C9BD]" />
                    Bangalore, India · Serving clients nationally
                  </span>
                  <a
                    href={PERSONAL_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E4DFD5] hover:text-white underline underline-offset-2 transition-colors font-medium"
                  >
                    LinkedIn Profile →
                  </a>
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-[#7A746B] mt-3 font-medium">
              Direct founder collaboration · No account managers · No junior handoffs
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="text-[12px] font-semibold tracking-wider uppercase text-[#8F6641] mb-2">
              The Digital System
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#161513] tracking-tight leading-snug">
              I don't just build the website.
            </h3>
            <p className="text-xl sm:text-2xl font-semibold text-[#8F6641] tracking-tight mt-1">
              I build the system around it.
            </p>

            <ul className="mt-8 divide-y divide-[#161513]/10 border-y border-[#161513]/10">
              {PILLARS.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.title} className="py-4 sm:py-5 flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-[#161513] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-[#C29B72]" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-[#161513]">
                        {item.title}
                      </h4>
                      <p className="text-sm text-[#605A52] mt-1 leading-relaxed">
                        {item.line}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <button
              onClick={onOpenContact}
              className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium text-[#FBF9F5] bg-[#161513] hover:bg-[#282522] rounded-full transition-all duration-200"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
