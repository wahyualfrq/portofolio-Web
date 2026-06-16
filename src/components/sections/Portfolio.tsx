'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { projectsData, Project } from '@/data/projects';
import FadeUp from '@/components/ui/FadeUp';

export default function Portfolio() {
  const t = useTranslations();
  const [selectedTag, setSelectedTag] = useState<'all' | 'web' | 'mobile' | 'ai'>('all');
  const [scrollOffset, setScrollOffset] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const cardWidth = 512; // width + gap (480px + 32px gap)

  const filteredProjects = projectsData.filter(
    (project) => selectedTag === 'all' || project.tags.includes(selectedTag)
  );

  // Reset scroll on filter change
  useEffect(() => {
    setScrollOffset(0);
  }, [selectedTag]);

  const handleScroll = (direction: 'prev' | 'next') => {
    if (!trackRef.current || !containerRef.current) return;
    
    const containerWidth = containerRef.current.clientWidth;
    const trackWidth = trackRef.current.scrollWidth;
    const maxScroll = -(trackWidth - containerWidth);

    if (direction === 'next') {
      setScrollOffset((prev) => {
        const nextOffset = prev - cardWidth;
        return nextOffset < maxScroll ? maxScroll : nextOffset;
      });
    } else {
      setScrollOffset((prev) => {
        const nextOffset = prev + cardWidth;
        return nextOffset > 0 ? 0 : nextOffset;
      });
    }
  };

  const renderMockup = (type: string, url?: string) => {
    switch (type) {
      case 'kawan-kampus':
        return (
          <div className="w-full h-full bg-gradient-to-tr from-neutral-900 to-neutral-700 flex flex-col justify-between p-6 text-white select-none">
            <div className="flex justify-between items-center">
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs text-neutral-400 font-mono">{url}</span>
            </div>
            <div className="space-y-2">
              <span className="bg-white/20 text-[10px] px-2 py-1 rounded">Interactive Chatbot Active</span>
              <div className="h-28 bg-white/10 rounded-xl p-4 flex flex-col justify-between border border-white/10">
                <div className="flex justify-between items-center">
                  <div className="w-20 h-3 bg-neutral-300/40 rounded"></div>
                  <div className="w-12 h-3 bg-brandAccentBlue rounded"></div>
                </div>
                <div className="w-full h-12 bg-neutral-900/50 rounded-lg border border-white/5 flex items-center px-3">
                  <div className="w-32 h-2 bg-neutral-300/30 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'thrift-cycle':
        return (
          <div className="w-full h-full bg-gradient-to-tr from-emerald-950 to-emerald-800 flex justify-center items-center p-6 text-white relative overflow-hidden select-none">
            <div className="w-[170px] h-[95%] bg-neutral-900 rounded-[28px] border-4 border-neutral-700 p-3 shadow-2xl flex flex-col justify-between">
              <div className="w-12 h-3 bg-neutral-800 rounded-full mx-auto"></div>
              <div className="space-y-2 my-auto">
                <div className="text-[10px] font-bold text-center text-emerald-400">ThriftCycle Marketplace</div>
                <div className="h-16 bg-neutral-800 rounded-xl p-2 flex flex-col justify-between">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 mx-auto"></div>
                  <div className="w-full h-1.5 bg-neutral-700 rounded"></div>
                </div>
              </div>
              <div className="h-1.5 bg-neutral-800 rounded-full w-full"></div>
            </div>
          </div>
        );
      case 'pasti':
        return (
          <div className="w-full h-full bg-gradient-to-tr from-indigo-950 to-indigo-800 flex flex-col justify-between p-6 text-white select-none">
            <div className="flex justify-between items-center">
              <div className="flex gap-1">
                <div className="w-3.5 h-3.5 rounded-full border-2 border-indigo-400 flex items-center justify-center">
                  <span className="text-[6px]">A</span>
                </div>
                <span className="text-[10px] tracking-widest font-bold">PASTI SYSTEM</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white/10 rounded-xl p-2.5 border border-white/10 text-center space-y-1">
                <span className="text-[8px] text-indigo-200 block">Sign Lang</span>
                <div className="h-7 bg-white/20 rounded flex items-center justify-center text-xs">🤟</div>
              </div>
              <div className="bg-white/10 rounded-xl p-2.5 border border-white/10 text-center space-y-1">
                <span className="text-[8px] text-indigo-200 block">Audio Guide</span>
                <div className="h-7 bg-white/20 rounded flex items-center justify-center text-xs">🔊</div>
              </div>
              <div className="bg-white/10 rounded-xl p-2.5 border border-white/10 text-center space-y-1">
                <span className="text-[8px] text-indigo-200 block">Contrast</span>
                <div className="h-7 bg-white/20 rounded flex items-center justify-center text-xs">🌓</div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="portfolio" className="py-20 border-t border-brandBorder/60 bg-neutral-50/30">
      <div className="max-w-[1360px] mx-auto px-6 md:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
          <div className="space-y-4 max-w-2xl">
            <FadeUp>
              <h3 className="text-brandSecondary font-semibold text-lg tracking-wider uppercase">
                {t('portfolioTitle')}
              </h3>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brandPrimary tracking-tight">
                {t('portfolioSubtitle')}
              </h2>
            </FadeUp>
          </div>
          
          {/* Carousel buttons */}
          <FadeUp delay={0.3} className="flex gap-4 self-end">
            <button 
              onClick={() => handleScroll('prev')} 
              className="w-14 h-14 bg-brandDark text-white hover:bg-neutral-800 transition-colors flex items-center justify-center rounded-2xl shadow-md"
              aria-label="Previous Slide"
            >
              <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button 
              onClick={() => handleScroll('next')} 
              className="w-14 h-14 bg-brandDark text-white hover:bg-neutral-800 transition-colors flex items-center justify-center rounded-2xl shadow-md"
              aria-label="Next Slide"
            >
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </FadeUp>
        </div>

        {/* Filter buttons */}
        <FadeUp delay={0.4} className="flex flex-wrap gap-3 mb-8">
          {(['all', 'web', 'mobile', 'ai'] as const).map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-6 py-2 rounded-full border text-sm font-medium transition-all ${
                selectedTag === tag
                  ? 'border-brandPrimary bg-brandPrimary text-white'
                  : 'border-brandBorder hover:border-brandPrimary text-brandSecondary hover:text-brandPrimary'
              }`}
            >
              {t(tag)}
            </button>
          ))}
        </FadeUp>

        {/* Projects horizontal sliding strip */}
        <div ref={containerRef} className="overflow-hidden py-4 -mx-4 px-4">
          <motion.div 
            ref={trackRef}
            animate={{ x: scrollOffset }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-8 cursor-grab active:cursor-grabbing"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="project-card min-w-[300px] md:min-w-[480px] max-w-[480px] bg-white border border-brandBorder rounded-[28px] overflow-hidden group hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <div className={`absolute top-4 left-4 z-10 text-white text-xs font-bold px-3 py-1.5 rounded-full ${project.badgeColor}`}>
                      {project.category === 'mobile' || project.category === 'web' ? t(project.category) : project.badge}
                    </div>
                    {renderMockup(project.mockType, project.mockUrl)}
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h4 className="text-2xl font-bold text-brandPrimary group-hover:text-brandAccentBlue transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-xs text-brandSecondary mt-1">
                        {project.date}
                      </p>
                    </div>
                    <p className="text-brandSecondary text-sm min-h-[60px]">
                      {t(project.descriptionKey)}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techStack.map((tech) => (
                        <span 
                          key={tech}
                          className="bg-neutral-100 text-brandPrimary text-xs px-3 py-1 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
