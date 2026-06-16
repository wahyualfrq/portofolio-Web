'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations();

  return (
    <div className="w-full pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-xs text-neutral-400">
        &copy; {new Date().getFullYear()} Wahyudi Alfurqon. {t('allRights')}
      </p>
      <div className="flex flex-wrap gap-4">
        <a 
          href="https://linkedin.com/in/wahyudi-alfurqon" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs text-neutral-400 hover:text-white transition-colors"
        >
          LinkedIn
        </a>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs text-neutral-400 hover:text-white transition-colors"
        >
          Instagram
        </a>
        <a 
          href="mailto:wahyudialfurqon109@gmail.com" 
          className="text-xs text-neutral-400 hover:text-white transition-colors"
        >
          Email
        </a>
      </div>
    </div>
  );
}
