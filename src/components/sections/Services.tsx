'use client';

import { useTranslations } from 'next-intl';
import Stagger, { staggerItemVariants } from '@/components/ui/Stagger';
import { motion } from 'framer-motion';
import FadeUp from '@/components/ui/FadeUp';

export default function Services() {
  const t = useTranslations();

  const servicesList = [
    {
      key: 'webDev',
      nameKey: 'webDevName',
      descKey: 'webDevDesc',
      price: 'Rp99K+',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      key: 'androidDev',
      nameKey: 'androidDevName',
      descKey: 'androidDevDesc',
      price: 'Rp99K+',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      key: 'uiux',
      nameKey: 'uiuxName',
      descKey: 'uiuxDesc',
      price: 'Rp50K+',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 border-t border-brandBorder/60">
      <div className="max-w-[1360px] mx-auto px-6 md:px-16">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <FadeUp>
            <h3 className="text-brandSecondary font-semibold text-lg tracking-wider uppercase">
              {t('servicesTitle')}
            </h3>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brandPrimary tracking-tight">
              {t('servicesSubtitle')}
            </h2>
          </FadeUp>
        </div>

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <motion.div 
              key={service.key}
              variants={staggerItemVariants}
              className="border border-brandBorder p-8 rounded-[28px] hover:border-brandAccentBlue transition-all duration-300 bg-white group flex flex-col justify-between space-y-6"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-brandAccentBlue mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-brandPrimary mb-2">
                  {t(service.nameKey)}
                </h4>
                <p className="text-brandSecondary text-sm">
                  {t(service.descKey)}
                </p>
              </div>
              <div>
                <span className="text-xs text-brandSecondary font-medium tracking-wider uppercase block font-sans">
                  {t('startingFrom')}
                </span>
                <span className="text-2xl font-bold text-brandAccentBlue">
                  {service.price}
                </span>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
