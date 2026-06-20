'use client';

import { useEffect, useRef, useState } from 'react';
import TiltedCard from './TiltedCard';
import ScrollReveal from './ScrollReveal';
import ScrollVelocity from './ScrollVelocity';

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Animate stats numbers counting up when section is visible
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    const statNumbers = section.querySelectorAll<HTMLElement>('[data-count]');


    const animateCount = (el: HTMLElement) => {
      const target = parseInt(el.getAttribute('data-count') || '0', 10);
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = 1800;
      const start = performance.now();

      const tick = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out expo
        const eased = 1 - Math.pow(1 - progress, 4);
        el.textContent = Math.round(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            statNumbers.forEach((el) => animateCount(el));
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const imgWidth = isMobile ? '195px' : '300px';
  const imgHeight = isMobile ? '260px' : '400px';

  return (
    <section
      id="about"
      ref={sectionRef}
      className="about-section"
      aria-label="About Wahyudi Alfurqon"
    >
      <div className="about-inner">
        <div className="container" ref={contentRef}>
          <div className="about-grid">

            <div className="about-label-col fade-up-init">
              <TiltedCard
                imageSrc="/images/about.jpg"
                altText="Wahyudi Alfurqon"
                captionText="Hi guys"
                containerWidth={imgWidth}
                containerHeight={imgHeight}
                imageWidth={imgWidth}
                imageHeight={imgHeight}
                rotateAmplitude={12}
                scaleOnHover={1.08}
                showMobileWarning={false}
                showTooltip={true}
              />
            </div>

            <div className="about-content">
              <div className="space-y-4 md:space-y-6">
                <h3 className="font-serif italic font-bold text-neutral-200 text-3xl md:text-4xl lg:text-5xl select-none fade-in-init">
                  About me
                </h3>

                <ScrollReveal
                  textClassName="text-[9.5px] min-[360px]:text-[10.5px] min-[480px]:text-[12px] md:text-[18px] lg:text-[22px] font-bold leading-[1.3] min-[360px]:leading-[1.35] min-[480px]:leading-[1.4] md:leading-[1.5] lg:leading-[1.6] text-white/85 tracking-[-0.01em] text-justify [text-justify:inter-word] break-words [hyphens:auto] [-webkit-hyphens:auto] [-ms-hyphens:auto]"
                  baseOpacity={0.15}
                  enableBlur={true}
                  blurStrength={6}
                  baseRotation={0}
                  highlightWords={["Full", "Stack", "Developer", "digital", "products"]}
                >
                  I'm a Full Stack Developer and Informatics student at Universitas Multi Data Palembang, focused on building scalable digital products through code, design, and innovation. With a blend of engineering and creative thinking, I create experiences that are functional, user-centered, and visually engaging.
                </ScrollReveal>
              </div>

              <div className="about-stats fade-up-init">
                <div className="stat-item justify-center">
                  <a 
                    href="/Wahyudi Alfurqon-resume.pdf"
                    download="Wahyudi_Alfurqon_CV.pdf"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-neutral-800 hover:border-neutral-700 bg-neutral-950/40 hover:bg-neutral-900/80 text-neutral-300 hover:text-white rounded-full text-xs md:text-sm font-semibold transition-all duration-300 group cursor-pointer backdrop-blur-sm w-fit whitespace-nowrap"
                  >
                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-neutral-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                    <span>Download CV</span>
                  </a>
                </div>
                <div className="stat-item">
                  <span
                    className="stat-number"
                    data-count="15"
                    data-suffix="+"
                  >
                    0+
                  </span>
                  <span className="stat-label">Projects Delivered</span>
                </div>
                <div className="stat-item">
                  <span
                    className="stat-number"
                    data-count="2"
                    data-suffix="+"
                  >
                    0+
                  </span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span
                    className="stat-number"
                    data-count="20"
                    data-suffix="+"
                  >
                    0+
                  </span>
                  <span className="stat-label">Professional Certifications</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ScrollVelocity Text Scroll at the very bottom of the section */}
      <div className="relative w-full z-30 flex flex-col gap-1 md:gap-2 overflow-hidden pointer-events-none mt-12 md:mt-auto pb-6 md:pb-8">
        <ScrollVelocity
          texts={[
            'WEB DEVELOPMENT • MOBILE DEVELOPMENT • AI SOLUTIONS • UI/UX DESIGNER',
            'CODE • DESIGN • INNOVATION • LEADERSHIP'
          ]}
          velocity={30}
          parallaxClassName="relative overflow-hidden w-full flex items-center py-1 md:py-2"
          scrollerClassName="flex whitespace-nowrap text-center pointer-events-auto"
          className="shrink-0 inline-flex items-center text-[20px] md:text-[44px] lg:text-[60px] font-extrabold tracking-tighter uppercase text-white/15 md:text-white/5 md:hover:text-white/15 transition-colors duration-300 select-none"
        />
      </div>
    </section>
  );
}
