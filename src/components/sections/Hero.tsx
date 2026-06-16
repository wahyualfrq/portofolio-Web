'use client';

import { useTranslations } from 'next-intl';
import RotatingText from '@/components/ui/RotatingText';
import FadeUp from '@/components/ui/FadeUp';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  const t = useTranslations();

  // Load rotating roles from translation
  // If translations don't support arrays, next-intl allows loading them as JSON
  const roles = t.raw('heroRoles') as string[];

  // Fallback if not found
  const rolesArray = Array.isArray(roles) 
    ? roles 
    : ['Full Stack Developer', 'Android Developer', 'UI/UX Designer'];

  return (
    <section className="relative w-full flex flex-col items-center justify-center text-center pt-16 pb-24 px-6 overflow-hidden">
      
      {/* Abstract Vector Line Artwork */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-center opacity-[0.08]">
        <svg className="w-full max-w-[1000px] h-auto" viewBox="0 0 1000 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 200 C 200 80, 400 320, 600 150 C 800 -20, 900 280, 950 200" stroke="#111" stroke-width={6} strokeLinecap="round" />
          <path d="M50 230 C 180 300, 320 100, 520 220 C 720 340, 850 120, 950 180" stroke="#111" stroke-width={2} strokeDasharray="10 10" strokeLinecap="round" />
        </svg>
      </div>

      <div className="z-10 max-w-4xl space-y-8">
        <FadeUp>
          <p className="text-2xl md:text-3xl font-normal italic font-serif text-brandPrimary">
            {t('heroGreeting')}
          </p>
        </FadeUp>
        
        {/* Huge typography */}
        <FadeUp delay={0.2}>
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-brandPrimary">
            <span>{t('heroIm')}</span>
            <RotatingText 
              texts={rolesArray} 
              interval={4000}
              className="text-brandAccentBlue border-b-4 border-brandAccentBlue/20"
            />
            <br />
            <span className="text-neutral-400 font-light">{t('andRole')}</span>
            <span>{t('designerRole')}</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.4} className="pt-4">
          <button 
            onClick={onContactClick} 
            className="bg-brandAccentBlue hover:bg-blue-700 text-white font-medium rounded-full px-8 py-3.5 text-sm transition-all duration-300 shadow-lg shadow-brandAccentBlue/20 hover:shadow-xl hover:shadow-brandAccentBlue/30 hover:scale-105 active:scale-95"
          >
            {t('openDiscussion')}
          </button>
        </FadeUp>
      </div>
    </section>
  );
}
