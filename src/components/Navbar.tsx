import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useRouter, PageRoute } from '../navigation/RouterContext';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenWhatsApp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenWhatsApp }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<PageRoute>('home');
  const { currentPage, navigate } = useRouter();

  // Scroll spy for smooth, accurate navbar highlighting
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      if (currentPage === 'home') {
        const sections: { id: string; route: PageRoute }[] = [
          { id: 'contact', route: 'contact' },
          { id: 'about', route: 'about' },
          { id: 'process', route: 'process' },
          { id: 'services', route: 'services' },
          { id: 'work', route: 'work' },
          { id: 'hero', route: 'home' },
        ];

        // Bottom of page detection
        const isNearBottom =
          window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;
        if (isNearBottom) {
          setActiveSection('contact');
          return;
        }

        const scrollY = window.scrollY + 180; // Offset for navbar height
        for (const sec of sections) {
          const el = document.getElementById(sec.id);
          if (el) {
            const top = el.offsetTop;
            if (scrollY >= top) {
              setActiveSection(sec.route);
              break;
            }
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const navLinks: { name: string; route: PageRoute }[] = [
    { name: 'Work', route: 'work' },
    { name: 'Services', route: 'services' },
    { name: 'Process', route: 'process' },
    { name: 'About', route: 'about' },
    { name: 'Contact', route: 'contact' },
  ];

  const handleNavClick = (route: PageRoute) => {
    setMobileMenuOpen(false);

    if (currentPage === 'home') {
      if (route === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveSection('home');
        return;
      }
      const el = document.getElementById(route);
      if (el) {
        const nav = document.getElementById('main-navbar');
        const navHeight = nav?.getBoundingClientRect().height ?? 72;
        // Tuck a bit of section top padding under the navbar so the title sits tight underneath.
        const top = el.getBoundingClientRect().top + window.scrollY - navHeight + 36;
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
        setActiveSection(route);
        return;
      }
    }

    navigate(route);
  };

  const isRouteActive = (route: PageRoute) => {
    if (currentPage === 'home') {
      return activeSection === route;
    }
    if (route === 'work' && currentPage === 'project-detail') return true;
    return currentPage === route;
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FBF9F5]/92 backdrop-blur-md border-b border-[#161513]/8 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.03)]'
          : 'bg-[#FBF9F5]/60 backdrop-blur-xs py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#161513] text-left"
          aria-label="Smaran — Home"
        >
          <div className="w-7 h-7 rounded-full bg-[#161513] text-[#FBF9F5] flex items-center justify-center font-serif text-sm font-semibold tracking-wider transition-transform duration-300 group-hover:scale-105">
            S
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-[#161513] leading-none">
              Smaran
            </span>
            <span className="text-[10px] text-[#78736B] tracking-normal mt-0.5 font-normal">
              Digital Presence Specialist
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-1 text-xs font-medium bg-[#EFECE6]/80 p-1 rounded-full border border-[#161513]/8"
          aria-label="Main Navigation"
        >
          <button
            onClick={() => handleNavClick('home')}
            className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
              isRouteActive('home')
                ? 'bg-[#161513] text-[#FBF9F5] shadow-xs'
                : 'text-[#5A554E] hover:text-[#161513]'
            }`}
          >
            Overview
          </button>
          {navLinks.map((link) => {
            const active = isRouteActive(link.route);

            return (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.route)}
                className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                  active
                    ? 'bg-[#161513] text-[#FBF9F5] shadow-xs'
                    : 'text-[#5A554E] hover:text-[#161513]'
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Actions (Simple & Premium Style) */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Quick WhatsApp Link */}
          <button
            id="nav-whatsapp-btn"
            onClick={onOpenWhatsApp}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#1B4D2E] hover:text-[#133A21] bg-[#1B4D2E]/8 hover:bg-[#1B4D2E]/14 border border-[#1B4D2E]/20 rounded-full transition-all duration-200"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>WhatsApp</span>
          </button>

          {/* Primary CTA */}
          <button
            id="nav-discuss-project-btn"
            onClick={onOpenContact}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-[#FBF9F5] bg-[#161513] hover:bg-[#282522] rounded-full transition-all duration-200 shadow-xs group"
          >
            <span>Discuss a Project</span>
            <ArrowUpRight className="w-3 h-3 text-[#C4BEB4] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            id="mobile-quick-whatsapp-btn"
            onClick={onOpenWhatsApp}
            aria-label="Quick WhatsApp"
            className="p-2 text-[#1B4D2E] bg-[#1B4D2E]/10 rounded-full"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
          </button>
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#161513] hover:text-[#48443E] rounded-md focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FBF9F5] border-b border-[#161513]/10 px-5 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1.5 py-2">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left text-sm font-medium py-2 px-3 rounded-lg transition-colors ${
                isRouteActive('home')
                  ? 'bg-[#161513] text-[#FBF9F5]'
                  : 'text-[#2E2B27] hover:bg-[#161513]/5'
              }`}
            >
              Overview
            </button>
            {navLinks.map((link) => {
              const active = isRouteActive(link.route);

              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.route)}
                  className={`text-left text-sm font-medium py-2 px-3 rounded-lg transition-colors ${
                    active
                      ? 'bg-[#161513] text-[#FBF9F5]'
                      : 'text-[#2E2B27] hover:bg-[#161513]/5'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          <div className="pt-3 flex flex-col gap-2 border-t border-[#161513]/8 mt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 bg-[#161513] text-[#FBF9F5] rounded-full text-xs font-medium flex items-center justify-center gap-1.5"
            >
              <span>Discuss a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C4BEB4]" />
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsApp();
              }}
              className="w-full py-2.5 bg-[#1B4D2E]/10 text-[#1B4D2E] rounded-full text-xs font-medium flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Me</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
