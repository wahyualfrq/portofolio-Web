'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeUp({
  children,
  delay = 0,
  className = '',
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{
        duration: 1.0,
        delay,
        ease: [0.16, 1, 0.3, 1], // cubic-bezier(0.16, 1, 0.3, 1)
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
