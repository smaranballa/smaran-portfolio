import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';
import { useRouter, PageRoute } from '../navigation/RouterContext';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const links: { name: string; route: PageRoute }[] = [
    { name: 'Overview', route: 'home' },
    { name: 'Work', route: 'work' },
    { name: 'Services', route: 'services' },
    { name: 'Process', route: 'process' },
    { name: 'About', route: 'about' },
    { name: 'Contact', route: 'contact' },
  ];

  return (
    <footer className="bg-[#121110] text-[#E5E0D8] border-t border-white/8 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 pb-12 border-b border-white/8">
          {/* Brand Note */}
          <div className="space-y-3 max-w-sm">
            <button
              onClick={() => navigate('home')}
              className="flex items-center gap-2.5 text-left focus:outline-none"
            >
              <div className="w-7 h-7 rounded-full bg-white text-[#161513] flex items-center justify-center font-serif-heading text-sm font-semibold">
                S
              </div>
              <span className="text-lg font-semibold tracking-tight text-white">
                {PERSONAL_INFO.name}
              </span>
            </button>
            <p className="text-sm text-[#8C867E] leading-relaxed">
              Websites for businesses that want more than a pretty homepage.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-6 sm:gap-8 text-sm font-medium text-[#B0AAA0]">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => navigate(link.route)}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Direct channels */}
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
            <a
              href={PERSONAL_INFO.whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#34A853] hover:text-[#46C368] transition-colors"
            >
              WhatsApp
            </a>
            <span className="text-white/20">·</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-[#D0CAC0] hover:text-white transition-colors"
            >
              {PERSONAL_INFO.email}
            </a>
            <span className="text-white/20">·</span>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D0CAC0] hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom Sub-row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#706B62]">
          <div>
            © {new Date().getFullYear()} Smaran. All design & code rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Bangalore, India</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#9E978D] hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
