import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, Mail, Send, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [businessType, setBusinessType] = useState('Local / Service Business');
  const [currentGoal, setCurrentGoal] = useState('Build a new website');
  const [businessName, setBusinessName] = useState('');
  const [senderName, setSenderName] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi Smaran, I'm ${senderName || 'reaching out'}${
      businessName ? ` from ${businessName}` : ''
    } (${businessType}). We're looking to: ${currentGoal}.${
      notes ? ` Notes: ${notes}` : ''
    }`;

    window.open(
      `https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
    setSubmitted(true);
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent(`Website Discussion: ${businessName || businessType}`);
    const body = encodeURIComponent(
      `Hi Smaran,\n\nName: ${senderName}\nBusiness: ${businessName}\nType: ${businessType}\nGoal: ${currentGoal}\n\nDetails: ${notes}\n\nLooking forward to hearing from you.`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#161513]/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FBF9F5] w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden border border-[#161513]/10 relative"
          >
            {/* Header */}
            <div className="px-6 py-5 border-b border-[#161513]/8 flex items-center justify-between bg-[#F5F2EA]/60">
              <div>
                <h3 id="contact-modal-title" className="text-xl font-semibold text-[#161513]">
                  Start a Conversation
                </h3>
                <p className="text-xs text-[#7A746B] mt-0.5">
                  Direct with Smaran · No agency sales reps
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full text-[#6E6860] hover:text-[#161513] hover:bg-[#161513]/5 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-7">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-[#2E7D32] mx-auto" />
                  <h4 className="text-lg font-semibold text-[#161513]">
                    Message Initialized
                  </h4>
                  <p className="text-sm text-[#5C564E] max-w-xs mx-auto">
                    Thank you! Smaran typically responds within a few hours to review your requirements.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      onClose();
                    }}
                    className="px-6 py-2.5 bg-[#161513] text-[#FBF9F5] rounded-full text-sm font-medium hover:bg-[#2A2724]"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSendWhatsApp} className="space-y-4">
                  {/* Business Type Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-[#48443D] mb-1.5">
                      Your Business Type
                    </label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {[
                        'Local / Service Business',
                        'Clinic / Healthcare',
                        'Consultancy / Agency',
                        'Retail / Other',
                      ].map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setBusinessType(type)}
                          className={`px-3 py-2 rounded-xl text-left font-medium border transition-all ${
                            businessType === type
                              ? 'border-[#161513] bg-[#161513] text-[#FBF9F5]'
                              : 'border-[#161513]/10 bg-white text-[#4D4942] hover:border-[#161513]/25'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Primary Objective */}
                  <div>
                    <label className="block text-xs font-semibold text-[#48443D] mb-1.5">
                      What are you looking to improve?
                    </label>
                    <select
                      value={currentGoal}
                      onChange={(e) => setCurrentGoal(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#161513]/15 bg-white text-xs sm:text-sm text-[#161513] focus:outline-none focus:border-[#161513]"
                    >
                      <option value="Build a new website">Build a new website from scratch</option>
                      <option value="Redesign existing outdated site">Redesign an existing outdated website</option>
                      <option value="Increase WhatsApp & consultation enquiries">Generate more WhatsApp enquiries & site visits</option>
                      <option value="Improve local Google search & Google Business Profile">Improve local Google search rankings</option>
                      <option value="Ongoing monthly maintenance & updates">Ongoing maintenance & project updates</option>
                    </select>
                  </div>

                  {/* Names */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#48443D] mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        placeholder="e.g. Priya Sharma"
                        className="w-full px-3 py-2 rounded-xl border border-[#161513]/15 bg-white text-xs text-[#161513] focus:outline-none focus:border-[#161513]"
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
                        className="w-full px-3 py-2 rounded-xl border border-[#161513]/15 bg-white text-xs text-[#161513] focus:outline-none focus:border-[#161513]"
                      />
                    </div>
                  </div>

                  {/* Optional Notes */}
                  <div>
                    <label className="block text-xs font-semibold text-[#48443D] mb-1">
                      Brief details or Instagram link (optional)
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. We have photos of 4 completed residential villas ready to showcase."
                      className="w-full px-3 py-2 rounded-xl border border-[#161513]/15 bg-white text-xs text-[#161513] focus:outline-none focus:border-[#161513] resize-none"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                    {/* Send via WhatsApp (Fastest) */}
                    <button
                      type="submit"
                      className="flex-1 py-3 px-4 rounded-xl bg-[#256B3E] hover:bg-[#1E5732] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Send via WhatsApp (Fastest)</span>
                    </button>

                    {/* Send via Email */}
                    <button
                      type="button"
                      onClick={handleSendEmail}
                      className="py-3 px-4 rounded-xl bg-[#161513]/5 hover:bg-[#161513]/10 text-[#161513] text-xs sm:text-sm font-medium flex items-center justify-center gap-2 transition-colors"
                    >
                      <Mail className="w-4 h-4 text-[#7A746B]" />
                      <span>Email</span>
                    </button>
                  </div>

                  <p className="text-center text-[11px] text-[#7C776F] pt-1">
                    Zero spam. Direct conversation with Smaran.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

