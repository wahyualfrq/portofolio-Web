'use client';

import { useEffect, useRef, useState } from 'react';
import TiltedCard from './TiltedCard';
import ScrollReveal from './ScrollReveal';

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

  const imgWidth = isMobile ? '195px' : '260px';
  const imgHeight = isMobile ? '260px' : '347px';

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

            <div className="about-label-col">
              <span className="about-label-badge hidden md:inline-flex items-center justify-center">About me</span>
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
              <span className="about-label-badge inline-flex md:hidden items-center justify-center self-start">
                About me
              </span>

              <ScrollReveal
                containerClassName="about-paragraph"
                baseOpacity={0.15}
                enableBlur={true}
                blurStrength={6}
                baseRotation={0}
                highlightWords={["Full", "Stack", "Developer", "AI-powered", "solutions"]}
              >
                I'm a Full Stack Developer and Informatics student at Universitas Multi Data Palembang, focused on building scalable web, mobile, and AI-powered solutions through real-world projects, internships, and technology programs.
              </ScrollReveal>

              <div className="about-stats">
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
    </section>
  );
}
