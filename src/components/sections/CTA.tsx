'use client';

import { useTranslations } from 'next-intl';
import Footer from '@/components/layout/Footer';
import FadeUp from '@/components/ui/FadeUp';

interface CTAProps {
  onContactClick: () => void;
}

export default function CTA({ onContactClick }: CTAProps) {
  const t = useTranslations();

  return (
    <section className="bg-brandDark text-white py-24 relative overflow-hidden flex-grow flex flex-col justify-center">
      {/* Abstract glowing orb design */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-white/5 -top-48 -right-48 filter blur-3xl pointer-events-none"></div>

      <div className="max-w-[1360px] mx-auto w-full px-6 md:px-16 flex flex-col items-center justify-center flex-grow z-10 relative">
        <div className="max-w-2xl mx-auto space-y-6 flex-grow flex flex-col justify-center mb-16 text-center">
          <FadeUp>
            <p className="text-blue-400 font-semibold tracking-wider text-sm uppercase">
              {t('ctaHeading')}
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none">
              {t('ctaSub')}
            </h2>
          </FadeUp>
          <FadeUp delay={0.3} className="pt-4">
            <button 
              onClick={onContactClick} 
              className="bg-brandAccentBlue hover:bg-blue-700 text-white font-medium rounded-full px-8 py-3.5 text-sm transition-all duration-300 hover:scale-105"
            >
              {t('openDiscussion')}
            </button>
          </FadeUp>
        </div>

        <Footer />
      </div>
    </section>
  );
}
