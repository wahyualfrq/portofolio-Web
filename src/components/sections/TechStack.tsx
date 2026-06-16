'use client';

import { useTranslations } from 'next-intl';
import Stagger, { staggerItemVariants } from '@/components/ui/Stagger';
import { motion } from 'framer-motion';
import FadeUp from '@/components/ui/FadeUp';

export default function TechStack() {
  const t = useTranslations();

  const badges = [
    {
      key: 'nextjs',
      icon: <span className="text-2xl font-bold">N</span>,
      category: 'Next.js',
      level: 'advanced',
    },
    {
      key: 'laravel',
      icon: (
        <svg className="w-6 h-6 text-red-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.5 11.52v5.76c0 .8-.56 1.48-1.32 1.68l-8.28 2.21c-.24.06-.48.06-.72 0l-8.28-2.21A1.73 1.73 0 0 1 2.5 17.28v-5.76l8.82 2.35c.44.12.92.12 1.36 0l8.82-2.35zM22.5 5.76v2.88l-9.5 2.53c-.32.08-.68.08-1 0L2.5 8.64V5.76c0-.8.56-1.48 1.32-1.68l8.28-2.21c.24-.06.48-.06.72 0l8.28 2.21c.76.2 1.32.88 1.32 1.68z" />
        </svg>
      ),
      category: 'PHP',
      level: 'advanced',
    },
    {
      key: 'react',
      icon: (
        <svg className="w-6 h-6 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <ellipse rx="10" ry="4" transform="translate(12 12) rotate(0)" />
          <ellipse rx="10" ry="4" transform="translate(12 12) rotate(60)" />
          <ellipse rx="10" ry="4" transform="translate(12 12) rotate(120)" />
        </svg>
      ),
      category: 'React',
      level: 'advanced',
    },
    {
      key: 'flutter',
      icon: (
        <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.33 2.44l-6.16 6.18L2 2.44h12.33M22 12l-6.16 6.17L9.67 12 15.84 5.83 22 12m-12.33 9.56l6.16-6.17H3.5l6.17 6.17z" />
        </svg>
      ),
      category: 'Dart',
      level: 'upperInter',
    },
    {
      key: 'database',
      icon: (
        <svg className="w-6 h-6 text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      ),
      category: 'SQL',
      level: 'upperInter',
    },
    {
      key: 'figma',
      icon: (
        <svg className="w-6 h-6 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
          <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
          <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
          <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
          <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
        </svg>
      ),
      category: 'Design',
      level: 'upperInter',
    },
  ];

  return (
    <section className="bg-brandAccentBlue text-white py-16 relative overflow-hidden">
      {/* Abstract glowing orb */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-white/10 -top-48 -right-48 filter blur-3xl pointer-events-none"></div>

      <div className="max-w-[1360px] mx-auto px-6 md:px-16 flex flex-col lg:flex-row justify-between items-center gap-12 relative z-10 w-full">
        <div className="max-w-md space-y-4">
          <FadeUp>
            <h3 className="text-blue-200 font-bold text-lg tracking-wider uppercase">
              {t('techStackTitle')}
            </h3>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              <span>{t('techStackSubtitle')}</span> <span className="inline-block animate-pulse">♾️</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="text-blue-100 text-sm leading-relaxed">
              {t('techStackDesc')}
            </p>
          </FadeUp>
        </div>

        {/* 3D elevated cards replica */}
        <Stagger className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full lg:max-w-xl">
          {badges.map((badge) => (
            <motion.div
              key={badge.key}
              variants={staggerItemVariants}
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col justify-between hover:translate-y-[-4px] hover:bg-white/15 transition-all select-none"
            >
              <div className="flex justify-between items-start mb-4">
                {badge.icon}
                <span className="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold font-sans">
                  {badge.category}
                </span>
              </div>
              <span className="text-xs text-blue-200 font-medium">
                {t(badge.level)}
              </span>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
