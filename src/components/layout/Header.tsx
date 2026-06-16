'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';

interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  const t = useTranslations();
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLangToggle = (newLocale: 'en' | 'id') => {
    if (newLocale === currentLocale) return;
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <header className="w-full py-8 z-50">
      <div className="max-w-[1360px] mx-auto px-6 md:px-16 flex justify-between items-center w-full">
        <nav className="flex items-center gap-8 text-sm font-medium text-brandPrimary">
          <a href="#about" className="hover:text-brandAccentBlue transition-colors">
            {t('navAbout')}
          </a>
          <a href="#portfolio" className="hover:text-brandAccentBlue transition-colors">
            {t('navPortfolio')}
          </a>
        </nav>
        
        {/* Interactive Right Controls: Language toggle & Contact CTA */}
        <div className="flex items-center gap-4">
          {/* Language Switcher Switch */}
          <div className="flex items-center bg-neutral-100 p-1 rounded-full border border-neutral-200 select-none">
            <button 
              onClick={() => handleLangToggle('en')}
              className={`text-xs font-bold px-3 py-1 rounded-full transition-all ${
                currentLocale === 'en' 
                  ? 'bg-white text-brandPrimary shadow-sm' 
                  : 'text-brandSecondary hover:text-brandPrimary'
              }`}
            >
              EN
            </button>
            <button 
              onClick={() => handleLangToggle('id')}
              className={`text-xs font-bold px-3 py-1 rounded-full transition-all ${
                currentLocale === 'id' 
                  ? 'bg-white text-brandPrimary shadow-sm' 
                  : 'text-brandSecondary hover:text-brandPrimary'
              }`}
            >
              ID
            </button>
          </div>
          
          <button 
            onClick={onContactClick}
            className="border border-brandPrimary hover:bg-brandPrimary hover:text-white text-sm font-medium rounded-full px-6 py-2.5 transition-all duration-300"
          >
            {t('contactBtn')}
          </button>
        </div>
      </div>
    </header>
  );
}
