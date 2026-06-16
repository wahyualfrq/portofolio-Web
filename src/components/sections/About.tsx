'use client';

import { useTranslations } from 'next-intl';
import { Download } from 'lucide-react';
import FadeUp from '@/components/ui/FadeUp';

interface AboutProps {
  onCVClick: () => void;
}

export default function About({ onCVClick }: AboutProps) {
  const t = useTranslations();

  return (
    <section id="about" className="py-20 border-t border-brandBorder/60 bg-neutral-50/50">
      <div className="max-w-[1360px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Highly accurate Editorial Image Block */}
        <div className="lg:col-span-5 flex justify-center">
          <FadeUp className="w-full max-w-[420px]">
            <div className="relative w-full aspect-square rounded-[32px] overflow-hidden shadow-2xl group">
              {/* Overlay Grain Styling mimicking editorial photo */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
              
              {/* Profile Wrapper with raw styling */}
              <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
                {/* Background icon layout */}
                <svg className="absolute inset-0 w-full h-full text-brandAccentBlue/10 p-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                </svg>
                {/* Profile portrait */}
                <img 
                  src="/images/profile.png" 
                  alt="Wahyudi Alfurqon Profile" 
                  className="w-full h-full object-cover filter grayscale contrast-[1.15] mix-blend-luminosity hover:scale-105 transition-all duration-700 relative z-10"
                />
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Right Side: Clean Typography About Me details */}
        <div className="lg:col-span-7 space-y-6">
          <FadeUp delay={0.2}>
            <h3 className="text-brandSecondary font-semibold text-lg tracking-wider uppercase">
              {t('aboutMeTitle')}
            </h3>
          </FadeUp>
          
          <FadeUp delay={0.3}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brandPrimary tracking-tight">
              {t('aboutMeSubtitle')}
            </h2>
          </FadeUp>

          <FadeUp delay={0.4} className="text-brandSecondary text-base leading-relaxed space-y-4">
            <p>
              {t('aboutPara1')}
            </p>
            <p>
              {t('aboutPara2')}
            </p>
          </FadeUp>

          {/* Interactive controls */}
          <FadeUp delay={0.5} className="flex flex-wrap items-center gap-4 pt-4">
            <button 
              onClick={onCVClick}
              className="flex items-center gap-2 bg-brandAccentBlue hover:bg-blue-700 text-white font-medium rounded-full px-6 py-3 text-sm transition-all shadow-md hover:shadow-lg"
            >
              <span>{t('downloadCV')}</span>
              <div className="bg-white/20 p-1 rounded-full">
                <Download className="w-4 h-4 text-white" />
              </div>
            </button>

            {/* Social Icons inside perfectly rounded outlines */}
            <div className="flex gap-3">
              <a 
                href="https://linkedin.com/in/wahyudi-alfurqon" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-neutral-300 flex items-center justify-center text-brandSecondary hover:text-brandAccentBlue hover:border-brandAccentBlue transition-all bg-white" 
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-neutral-300 flex items-center justify-center text-brandSecondary hover:text-pink-600 hover:border-pink-600 transition-all bg-white" 
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="mailto:wahyudialfurqon109@gmail.com" 
                className="w-11 h-11 rounded-full border border-neutral-300 flex items-center justify-center text-brandSecondary hover:text-brandAccentBlue hover:border-brandAccentBlue transition-all bg-white" 
                aria-label="Email"
              >
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
