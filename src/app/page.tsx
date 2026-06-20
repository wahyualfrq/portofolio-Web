'use client';

import { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TrueFocus from '../components/TrueFocus';
import DecryptedText from '../components/DecryptedText';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import SkillsSection from '../components/SkillsSection';
import CertificationsSection from '../components/CertificationsSection';
import ContactSection from '../components/ContactSection';
import GooeyNav from '../components/GooeyNav';

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (lenisRef.current) {
      lenisRef.current.scrollTo(href, {
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    } else {
      const el = document.querySelector(href);
      if (el) {
        const offset = window.innerWidth >= 768 ? 80 : 64; // Navbar height
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const isMobileDevice = window.innerWidth <= 768;
    let lenis: Lenis | null = null;
    let updateTicker: ((time: number) => void) | null = null;

    if (!isMobileDevice) {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 2.0,
        infinite: false,
      });

      lenis.on('scroll', () => {
        ScrollTrigger.update();
      });

      updateTicker = (time: number) => {
        lenis?.raf(time * 1000);
      };

      gsap.ticker.add(updateTicker);
      gsap.ticker.lagSmoothing(0);
      lenisRef.current = lenis;
    }

    const elements = document.querySelectorAll<HTMLElement>('.hero-layout .opacity-0');
    elements.forEach((el) => el.classList.remove('opacity-0'));

    return () => {
      if (lenis && updateTicker) {
        gsap.ticker.remove(updateTicker);
        lenis.destroy();
      }
      lenisRef.current = null;
    };
  }, []);

  // Global Scroll Reveal Observer for all sections
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const cards = document.querySelectorAll('.fade-up-init');
    const texts = document.querySelectorAll('.fade-in-init');
    
    const observer = new IntersectionObserver(
      (entries) => {
        let cardIntersectCount = 0;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('fade-up-init')) {
              setTimeout(() => {
                entry.target.classList.add('fade-up-active');
              }, cardIntersectCount * 120);
              cardIntersectCount++;
            } else if (entry.target.classList.contains('fade-in-init')) {
              entry.target.classList.add('fade-in-active');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    cards.forEach((card) => observer.observe(card));
    texts.forEach((text) => observer.observe(text));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const aboutEl = document.getElementById('about');
      const contactEl = document.getElementById('contact');
      
      let isOverDark = false;
      const navbarHeight = window.innerWidth >= 768 ? 80 : 64;

      if (aboutEl) {
        const rect = aboutEl.getBoundingClientRect();
        if (rect.top <= navbarHeight && rect.bottom > navbarHeight) {
          isOverDark = true;
        }
      }

      if (contactEl) {
        const rect = contactEl.getBoundingClientRect();
        if (rect.top <= navbarHeight && rect.bottom > navbarHeight) {
          isOverDark = true;
        }
      }

      if (aboutEl || contactEl) {
        setIsDarkBg(isOverDark);
      } else {
        const heroHeight = window.innerHeight;
        setIsDarkBg(scrollY >= heroHeight - 80);
      }
      setScrolled(scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const headerBgClass = isDarkBg || menuOpen
    ? 'bg-black/75 backdrop-blur-md border-b border-white/10'
    : scrolled
    ? 'bg-[#F5F5F5]/75 backdrop-blur-md border-b border-black/5 shadow-sm'
    : 'bg-transparent border-b border-transparent';



  const buttonClass = isDarkBg
    ? 'bg-white text-black hover:bg-white/90 shadow-md'
    : 'bg-primary text-on-primary hover:opacity-80';

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-body-md text-on-surface antialiased relative">
      <header className={`fixed top-0 left-0 right-0 z-50 overflow-hidden transition-all duration-300 ease-in-out ${headerBgClass} animate-reveal-down`}>
        <nav className="flex justify-between items-center px-5 md:px-gutter h-16 md:h-20 max-w-container-max mx-auto">
          <div />

          {/* Desktop GooeyNav — only rendered on md+ */}
          <div className="hidden md:block">
            <GooeyNav
              items={[
                { href: '#about',          label: 'About'          },
                { href: '#projects',       label: 'Projects'       },
                { href: '#experience',     label: 'Experience'     },
                { href: '#skills',         label: 'Skills'         },
                { href: '#certifications', label: 'Certifications' },
                { href: '#contact',        label: 'Contact'        },
              ]}
              particleCount={12}
              particleDistances={[80, 8]}
              particleR={80}
              animationTime={500}
              timeVariance={250}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
              initialActiveIndex={0}
              isDarkNavbar={isDarkBg}
              onItemClick={(e, href) => handleNavClick(e, href)}
            />
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className={`hidden sm:flex px-4 py-2.5 md:px-6 md:py-3 rounded-full font-label-caps text-label-caps text-[10px] md:text-xs transition-all duration-300 items-center gap-1.5 group ${buttonClass}`}
            >
              Let&apos;s Talk
              <span className="material-symbols-outlined text-[14px] md:text-[16px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>

            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full border transition-all duration-300 relative z-50 ${
                isDarkBg || menuOpen
                  ? 'border-white/20 text-white hover:bg-white/10' 
                  : 'border-black/10 text-on-surface hover:bg-black/5'
              }`}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 relative">
                <span className={`absolute h-[2px] w-5 bg-current rounded-full transition-all duration-300 top-[9px] left-0 ${menuOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
                <span className={`absolute h-[2px] w-5 bg-current rounded-full transition-all duration-300 top-[9px] left-0 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`absolute h-[2px] w-5 bg-current rounded-full transition-all duration-300 top-[9px] left-0 ${menuOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
              </div>
            </button>
          </div>
        </nav>
      </header>

      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 flex flex-col justify-center items-center px-8 ${
          menuOpen 
            ? 'opacity-100 pointer-events-auto backdrop-blur-xl bg-black/95' 
            : 'opacity-0 pointer-events-none backdrop-blur-none bg-black/0'
        }`}
      >
        <ul className="flex flex-col items-center gap-6 text-center">
          {[
            { href: '#about',          label: 'About'          },
            { href: '#projects',       label: 'Projects'       },
            { href: '#experience',     label: 'Experience'     },
            { href: '#skills',         label: 'Skills'         },
            { href: '#certifications', label: 'Certifications' },
            { href: '#contact',        label: 'Contact'        },
          ].map(({ href, label }, idx) => (
            <li 
              key={href}
              className={`transform transition-all duration-500 ${
                menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${idx * 75}ms` }}
            >
              <a
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="font-label-caps text-2xl tracking-widest text-white/80 hover:text-white transition-colors duration-300 block py-2"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        
        <div 
          className={`mt-10 transform transition-all duration-500 ${
            menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="bg-white text-black px-8 py-4 rounded-full font-label-caps text-xs tracking-widest hover:bg-white/90 transition-all duration-200 flex items-center gap-2 group shadow-lg"
          >
            Let&apos;s Talk
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
        </div>
      </div>

      <div className="sticky top-0 h-screen w-full z-10 overflow-hidden bg-[#F5F5F5] flex flex-col justify-center will-change-transform">
        {/* Mobile Hero View */}
        <div className="flex md:hidden flex-col items-center justify-center h-full pt-[2vh] pb-[10vh] px-6 select-none text-center">
          <div className="hero-avatar-container relative flex justify-center items-center mb-[2vh] animate-fade-in">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/fix2.png"
              alt="Wahyudi Alfurqon"
              className="w-full h-full object-contain"
            />
            <div className="absolute left-[-2%] top-[50%] z-20 animate-float-1 select-none">
              <div className="bg-[#D96B43] text-white font-semibold text-[10px] md:text-xs px-3 py-1 rounded-full shadow-md">
                Designer
              </div>
              <div className="absolute -right-2.5 -bottom-2.5 rotate-180">
                <svg className="w-4 h-4 text-white drop-shadow-md pointer-events-none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 2L20 10L12 12L10 20L4 2Z" fill="white" stroke="black" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="absolute right-[-2%] top-[68%] z-20 animate-float-2 select-none">
              <div className="bg-white text-black font-semibold text-[10px] md:text-xs px-3 py-1 rounded-full shadow-md border border-gray-100">
                Developer
              </div>
              <div className="absolute -left-2.5 -top-2.5 rotate-0">
                <svg className="w-4 h-4 text-white drop-shadow-md pointer-events-none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 2L20 10L12 12L10 20L4 2Z" fill="white" stroke="black" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          <h1
            className="font-[800] leading-[1.1] tracking-tight text-primary text-center animate-reveal-up"
            style={{ fontSize: 'clamp(30px, 6vh, 44px)' }}
          >
            <DecryptedText text="Hi, I'm" parentClassName="font-serif italic font-normal text-on-surface-variant" /><br />
            Wahyudi Alfurqon
          </h1>

          <div className="text-on-surface-variant mt-[1vh] text-[12px] max-w-[345px] mx-auto text-center animate-reveal-up"
               style={{ animationDelay: '0.2s' }}>
            <TrueFocus
              sentence="— a Full Stack Developer building modern|web apps, Android apps & AI-powered solutions."
              separator="|"
              manualMode={false}
              blurAmount={1.5}
              borderColor="#000000"
              glowColor="rgba(0, 0, 0, 0.15)"
              animationDuration={0.4}
              pauseBetweenAnimations={1.2}
              className="items-center text-center"
            />
          </div>
        </div>

        {/* Desktop Hero View */}
        <div className="hidden md:grid grid-cols-[42%_58%] max-w-[1280px] mx-auto h-full relative">
          <div
            className="h-full relative z-10 flex flex-col justify-center
                       pl-8 md:pl-12 lg:pl-16 pr-6 pt-20 md:pt-28 pb-12
                       animate-reveal-up opacity-0"
            style={{ animationDelay: '0.4s' }}
          >
            <div>
              <h1
                className="font-[800] leading-[1.1] tracking-tight text-primary"
                style={{ fontSize: 'clamp(50px, 7vw, 96px)' }}
              >
                <DecryptedText text="Hi, I'm" parentClassName="font-serif italic font-normal text-on-surface-variant" /><br />
                Wahyudi Alfurqon
              </h1>
              <div
                className="text-on-surface-variant mt-3
                           text-[clamp(14px,1.05vw,16px)] max-w-[450px]"
              >
                <TrueFocus
                  sentence="— a Full Stack Developer building modern|web apps, Android apps & AI-powered solutions."
                  separator="|"
                  manualMode={false}
                  blurAmount={3}
                  borderColor="#000000"
                  glowColor="rgba(0, 0, 0, 0.15)"
                  animationDuration={0.4}
                  pauseBetweenAnimations={1.2}
                  className="items-start text-left"
                />
              </div>
            </div>
          </div>

          <div
            className="animate-fade-in opacity-0 relative w-auto h-full flex items-center justify-center"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="relative h-full aspect-square max-w-full flex items-end justify-center p-6 md:p-8 lg:p-12">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/fix2.png"
                alt="Wahyudi Alfurqon"
                className="w-full h-full object-contain object-bottom"
              />
              <div className="absolute left-[16%] top-[57%] z-20 animate-float-1 select-none">
                <div className="bg-[#D96B43] text-white font-semibold text-[10px] md:text-xs px-3 py-1 rounded-full shadow-md">
                  Designer
                </div>
                <div className="absolute -right-2.5 -bottom-2.5 rotate-180">
                  <svg className="w-4 h-4 text-white drop-shadow-md pointer-events-none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 2L20 10L12 12L10 20L4 2Z" fill="white" stroke="black" strokeWidth="2" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute right-[10%] top-[72%] z-20 animate-float-2 select-none">
                <div className="bg-white text-black font-semibold text-[10px] md:text-xs px-3 py-1 rounded-full shadow-md border border-gray-100">
                  Developer
                </div>
                <div className="absolute -left-2.5 -top-2.5 rotate-0">
                  <svg className="w-4 h-4 text-white drop-shadow-md pointer-events-none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 2L20 10L12 12L10 20L4 2Z" fill="white" stroke="black" strokeWidth="2" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F5F5F5] to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* About Section: Scrolls up and overlaps the sticky Hero section */}
      <AboutSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Certifications Section */}
      <CertificationsSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}


