'use client';

import { useTranslations } from 'next-intl';
import { X, Send } from 'lucide-react';
import { useState, useEffect, FormEvent } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const t = useTranslations();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [projectBrief, setProjectBrief] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setSubmitted(false);
      setFullName('');
      setEmail('');
      setProjectBrief('');
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real application, you would submit to an API route here
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99] flex items-center justify-center p-4">
      <div className="bg-white rounded-[28px] max-w-xl w-full p-8 space-y-6 premium-shadow relative">
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 text-brandSecondary hover:text-brandPrimary"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="space-y-2 text-center">
          <h3 className="text-3xl font-extrabold text-brandPrimary">{t('collabTitle')}</h3>
          <p className="text-brandSecondary text-sm">{t('collabSub')}</p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-brandPrimary uppercase tracking-wider mb-2">
                {t('fullName')}
              </label>
              <input 
                type="text" 
                required 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border border-brandBorder rounded-2xl px-4 py-3 text-sm bg-neutral-50/50 focus:bg-white focus:border-brandAccentBlue outline-none transition-all" 
                placeholder="John Doe" 
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-brandPrimary uppercase tracking-wider mb-2">
                {t('emailAddress')}
              </label>
              <input 
                type="email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-brandBorder rounded-2xl px-4 py-3 text-sm bg-neutral-50/50 focus:bg-white focus:border-brandAccentBlue outline-none transition-all" 
                placeholder="john@example.com" 
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-brandPrimary uppercase tracking-wider mb-2">
                {t('projectBrief')}
              </label>
              <textarea 
                required 
                value={projectBrief}
                onChange={(e) => setProjectBrief(e.target.value)}
                className="w-full border border-brandBorder rounded-2xl px-4 py-3 text-sm bg-neutral-50/50 focus:bg-white focus:border-brandAccentBlue outline-none transition-all h-28 resize-none" 
                placeholder="Let's build a secure Web app, or mobile ecosystem..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-brandAccentBlue hover:bg-blue-700 text-white font-medium rounded-full py-3.5 text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>{t('sendInquiry')}</span>
            </button>
          </form>
        ) : (
          <div className="bg-emerald-50 text-emerald-800 text-sm p-6 rounded-2xl text-center border border-emerald-100 space-y-2">
            <div className="text-4xl">🎉</div>
            <div>
              <strong className="block text-base mb-1">{t('inquirySuccess')}</strong> 
              <span>{t('inquiryRespond')}</span>
            </div>
            <button 
              onClick={onClose}
              className="mt-4 border border-emerald-300 hover:bg-emerald-100 text-emerald-950 text-xs font-semibold rounded-full px-6 py-2 transition-all"
            >
              {t('close')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
