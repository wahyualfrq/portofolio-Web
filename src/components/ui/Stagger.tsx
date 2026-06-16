'use client';

import { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

interface StaggerProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // easeOutExpo
    },
  },
};

export default function Stagger({
  children,
  delay = 0.1,
  className = '',
}: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-10%' }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
