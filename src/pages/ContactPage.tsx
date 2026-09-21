import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Mail, MapPin, Clock, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactPage: React.FC = () => {
  const [businessType, setBusinessType] = useState('Local / Service Business');
  const [goal, setGoal] = useState('Build a new website');
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');
  const [sent, setSent] = useState(false);

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Smaran, I'm ${name || 'reaching out'}${
      businessName ? ` from ${businessName}` : ''
    } (${businessType}). We're looking to: ${goal}.${
      phone ? ` My phone: ${phone}.` : ''
    }${details ? ` Details: ${details}` : ''}`;

    window.open(
      `https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`,
      '_blank'
    );
    setSent(true);
  };

  const handleEmailSend = () => {
    const subject = encodeURIComponent(`Website Discussion: ${businessName || businessType}`);
    const body = encodeURIComponent(
      `Hi Smaran,\n\nName: ${name}\nBusiness: ${businessName}\nType: ${businessType}\nGoal: ${goal}\nPhone: ${phone}\n\nProject details: ${details}\n\nLooking forward to speaking with you.`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

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
            Contact
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#161513] tracking-tight leading-[1.14] mb-6">
            Let's build something your customers remember.
          </h1>
          <p className="text-lg sm:text-xl text-[#5A554E] font-normal leading-relaxed">
            Tell me what you're trying to improve, and I'll show you what the digital experience could look like.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Channels & Commitments */}
          <div className="lg:col-span-5 space-y-8">
            {/* WhatsApp Priority Card */}
            <div className="bg-[#EAE5DC]/80 border border-[#161513]/10 rounded-3xl p-7 sm:p-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#256B3E]/10 text-[#256B3E] text-xs font-semibold mb-5">
                <span className="w-2 h-2 rounded-full bg-[#2E7D32]" />
                <span>Fastest Response Channel</span>
              </div>

              <h2 className="text-2xl font-semibold text-[#161513] mb-2">
                WhatsApp Me Directly
              </h2>

              <p className="text-sm text-[#5A554E] leading-relaxed mb-6">
                Most business owners prefer WhatsApp for quick discussions, references, and sharing initial thoughts.
              </p>

              <a
                href={PERSONAL_INFO.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#256B3E] hover:bg-[#1E5732] text-white text-sm font-semibold rounded-full shadow-sm transition-all group"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Open WhatsApp Chat</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Direct Details Card */}
            <div className="space-y-4 text-sm text-[#4E4942]">
              <div className="p-5 rounded-2xl bg-[#F5F2EA]/60 border border-[#161513]/8 flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-[#8F6641] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-[#7A746B] uppercase tracking-wider">
                    Direct Email
                  </div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-base font-semibold text-[#161513] hover:text-[#8F6641] transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#F5F2EA]/60 border border-[#161513]/8 flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-[#8F6641] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-[#7A746B] uppercase tracking-wider">
                    Expected Response Time
                  </div>
                  <div className="text-sm font-semibold text-[#161513]">
                    Usually within a few hours on business days
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#F5F2EA]/60 border border-[#161513]/8 flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#8F6641] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-[#7A746B] uppercase tracking-wider">
                    Location & Service Area
                  </div>
                  <div className="text-sm font-semibold text-[#161513]">
                    Bangalore, India · Working nationally via digital collaboration
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7 bg-[#FBF9F5] border border-[#161513]/10 rounded-3xl p-7 sm:p-10 shadow-xs">
            {sent ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#2E7D32] mx-auto" />
                <h3 className="text-2xl font-semibold text-[#161513]">
                  Message Prepared
                </h3>
                <p className="text-sm text-[#57524A] max-w-sm mx-auto">
                  Thank you! Your discussion prompt has been generated. I look forward to speaking with you.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="px-6 py-2.5 bg-[#161513] text-[#FBF9F5] rounded-full text-xs font-semibold hover:bg-[#2A2724]"
                >
                  Start another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleWhatsAppSend} className="space-y-5">
                <div>
                  <h3 className="text-xl font-semibold text-[#161513] mb-1">
                    Send a Project Inquiry
                  </h3>
                  <p className="text-xs text-[#7A746B]">
                    Select your requirements below to start an organized conversation.
                  </p>
                </div>

                {/* Business Type */}
                <div>
                  <label className="block text-xs font-semibold text-[#48443D] mb-2">
                    What type of business do you represent?
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {[
                      'Local / Service Business',
                      'Clinic / Healthcare',
                      'Consultancy / Agency',
                      'Retail / Other',
                    ].map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setBusinessType(t)}
                        className={`p-2.5 rounded-xl text-left font-medium border transition-all ${
                          businessType === t
                            ? 'bg-[#161513] text-[#FBF9F5] border-[#161513]'
                            : 'bg-[#F5F2EA]/60 text-[#4D4841] border-[#161513]/10 hover:border-[#161513]/25'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Main Goal */}
                <div>
                  <label className="block text-xs font-semibold text-[#48443D] mb-2">
                    What is your primary objective?
                  </label>
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#161513]/15 bg-white text-xs sm:text-sm text-[#161513] focus:outline-none focus:border-[#161513]"
                  >
                    <option value="Build a new website">Build a new bespoke website from scratch</option>
                    <option value="Redesign existing website">Redesign an existing outdated website</option>
                    <option value="Generate more WhatsApp consultation enquiries">Generate more client enquiries & WhatsApp consultations</option>
                    <option value="Improve local Google search ranking">Improve Google Search ranking & Local SEO</option>
                    <option value="Complete digital presence overhaul">Complete digital presence overhaul</option>
                  </select>
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#48443D] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Arjun Mehta"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#161513]/15 bg-white text-xs sm:text-sm text-[#161513] focus:outline-none focus:border-[#161513]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#48443D] mb-1">
                      Business Name
                    </label>
                    <input
                      type="text"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="e.g. Your Company Name"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#161513]/15 bg-white text-xs sm:text-sm text-[#161513] focus:outline-none focus:border-[#161513]"
                    />
                  </div>
                </div>

                {/* Phone number */}
                <div>
                  <label className="block text-xs font-semibold text-[#48443D] mb-1">
                    Phone / WhatsApp Number (optional)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#161513]/15 bg-white text-xs sm:text-sm text-[#161513] focus:outline-none focus:border-[#161513]"
                  />
                </div>

                {/* Additional Details */}
                <div>
                  <label className="block text-xs font-semibold text-[#48443D] mb-1">
                    Project notes, current website link, or timeline (optional)
                  </label>
                  <textarea
                    rows={3}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="e.g. We have assets ready and want to launch in 4–6 weeks."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#161513]/15 bg-white text-xs sm:text-sm text-[#161513] focus:outline-none focus:border-[#161513] resize-none"
                  />
                </div>

                {/* Submit buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 px-5 rounded-xl bg-[#256B3E] hover:bg-[#1E5732] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Send via WhatsApp (Fastest)</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleEmailSend}
                    className="py-3.5 px-5 rounded-xl bg-[#161513]/5 hover:bg-[#161513]/10 text-[#161513] text-xs sm:text-sm font-medium flex items-center justify-center gap-2 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#7A746B]" />
                    <span>Send via Email</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
