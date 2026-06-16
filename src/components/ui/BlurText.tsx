'use client';

import { motion } from 'framer-motion';

interface BlurTextProps {
  text: string;
  delay?: number; // delay between items in ms
  duration?: number; // animation duration in ms
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
}

export default function BlurText({
  text,
  delay = 50,
  duration = 500,
  className = '',
  animateBy = 'words',
  direction = 'top',
}: BlurTextProps) {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: delay / 1000,
      },
    },
  };

  const childVariants = {
    hidden: {
      filter: 'blur(8px)',
      opacity: 0,
      y: direction === 'top' ? -10 : 10,
    },
    visible: {
      filter: 'blur(0px)',
      opacity: 1,
      y: 0,
      transition: {
        duration: duration / 1000,
        ease: [0.16, 1, 0.3, 1] as any, // easeOutExpo
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10%' }}
      className={`inline-flex flex-wrap ${className}`}
    >
      {elements.map((el, i) => (
        <motion.span
          key={i}
          variants={childVariants}
          className="inline-block whitespace-pre"
        >
          {el}
          {animateBy === 'words' && i < elements.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </motion.span>
  );
}
