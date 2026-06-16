'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function Reveal({
  children,
  delay = 0,
  className = '',
}: RevealProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: '100%' }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: '-5%' }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.16, 1, 0.3, 1], // easeOutExpo
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
