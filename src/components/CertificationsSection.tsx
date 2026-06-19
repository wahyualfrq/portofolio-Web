'use client';

import React, { useRef } from 'react';

type Certification = {
  tag: string;
  year: string;
  title: string;
  issuer: string;
  verifyLink: string;
  imageUrl?: string;
};

export default function CertificationsSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const certifications: Certification[] = [
    {
      tag: 'DBS Foundation',
      year: '2026',
      title: 'Coding Camp 2026 Developer Certification',
      issuer: 'Dicoding',
      verifyLink: '#',
      imageUrl: '/images/cert-mockup.png'
    },
    {
      tag: 'Google Developers',
      year: '2025',
      title: 'Machine Learning Specialization',
      issuer: 'Google Developer',
      verifyLink: '#',
      imageUrl: '/images/cert-mockup.png'
    },
    {
      tag: 'Professional Suite',
      year: '2025',
      title: 'Advanced Web Development Certification',
      issuer: 'freeCodeCamp',
      verifyLink: '#',
      imageUrl: '/images/cert-mockup.png'
    },
    {
      tag: 'Interface Standards',
      year: '2025',
      title: 'UI/UX Design Specialist Framework',
      issuer: 'Google UX',
      verifyLink: '#',
      imageUrl: '/images/cert-mockup.png'
    },
    {
      tag: 'Google Developers',
      year: '2024',
      title: 'Google Developer Groups Cloud Program',
      issuer: 'GDG Organizer',
      verifyLink: '#',
      imageUrl: '/images/cert-mockup.png'
    }
  ];

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const container = sliderRef.current;
      const cardWidth = container.querySelector('.snap-start')?.clientWidth || 380;
      const scrollAmount = direction === 'left' ? -(cardWidth + 24) : (cardWidth + 24);
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="certifications" className="relative z-20 py-24 px-6 lg:px-16 border-b border-neutral-200 bg-[#F5F5F5] overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-end pb-12">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-block border border-black/10 bg-white/60 text-xs px-4 py-1.5 rounded-full tracking-wider uppercase font-medium">
              Certifications
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Continuous Learning<br/>
              <span className="font-serif italic font-normal text-neutral-800">And Growth</span>
            </h2>
          </div>
          <div className="lg:col-span-5 mt-4 lg:mt-0 flex flex-col justify-between items-start md:items-end gap-4">
            <p className="text-neutral-500 text-sm md:text-base leading-relaxed max-w-md md:text-right">
              Professional credentials, technology programs, and standard architecture courses completed across modern development ecosystems.
            </p>
            {/* Arrow indicators */}
            <div className="hidden md:flex gap-2">
              <button 
                onClick={() => scrollSlider('left')} 
                className="p-3.5 rounded-full bg-white border border-neutral-200 text-neutral-800 hover:bg-black hover:text-white hover:border-black transition-all duration-300 focus:outline-none shadow-sm cursor-pointer" 
                aria-label="Slide Left"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/></svg>
              </button>
              <button 
                onClick={() => scrollSlider('right')} 
                className="p-3.5 rounded-full bg-white border border-neutral-200 text-neutral-800 hover:bg-black hover:text-white hover:border-black transition-all duration-300 focus:outline-none shadow-sm cursor-pointer" 
                aria-label="Slide Right"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Slider Container */}
        <div 
          ref={sliderRef}
          id="certifications-slider" 
          className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory projects-slider-container pb-12 select-none scroll-smooth"
        >
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="snap-start flex-shrink-0 w-[260px] md:w-[340px] aspect-[4/3] bg-stone-100 border border-neutral-200/60 rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 card-transition group cursor-pointer relative"
            >
              {/* Visual Certificate Area */}
              <div className="absolute inset-0 w-full h-full overflow-hidden bg-neutral-100">
                {cert.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img 
                    src={cert.imageUrl} 
                    alt={cert.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col justify-center items-center p-8 text-center bg-gradient-to-br from-neutral-50 to-neutral-200">
                    <span className="text-[11px] font-bold tracking-widest text-neutral-400 uppercase bg-black/5 px-3 py-1 rounded-full">{cert.tag}</span>
                    <h3 className="text-lg md:text-xl font-bold text-neutral-800 mt-4 leading-snug">{cert.title}</h3>
                    <p className="text-xs text-neutral-500 mt-2">Issuer: {cert.issuer} ({cert.year})</p>
                  </div>
                )}
              </div>

              {/* Hover Dark Overlay Info Area */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto md:pointer-events-none md:group-hover:pointer-events-auto z-10">
                <div className="transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300 flex justify-between items-end text-white">
                  <div className="space-y-1 pr-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-white/60">
                      {cert.tag} • {cert.year}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-white tracking-tight leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-white/80 mt-1">
                      Issuer: {cert.issuer}
                    </p>
                  </div>
                  {cert.verifyLink && (
                    <a 
                      href={cert.verifyLink} 
                      target="_blank" 
                      rel="noreferrer noopener" 
                      onClick={(e) => e.stopPropagation()} // Prevent card click propagation
                      className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center text-sm hover:scale-105 active:scale-95 transition-all flex-shrink-0 shadow-lg cursor-pointer"
                      aria-label="Verify Certificate"
                    >
                      <svg className="w-4 h-4 transition-transform duration-300 md:group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 4h6m0 0v6m0-6L10 14"/></svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider Controls (Centered under the cards) */}
        <div className="flex md:hidden justify-center items-center gap-3 mt-4">
          <button 
            onClick={() => scrollSlider('left')} 
            className="w-12 h-12 rounded-full bg-white border border-neutral-200 text-neutral-800 hover:bg-black hover:text-white hover:border-black transition-all duration-300 focus:outline-none shadow-sm cursor-pointer flex items-center justify-center" 
            aria-label="Slide Left"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/></svg>
          </button>
          <button 
            onClick={() => scrollSlider('right')} 
            className="w-12 h-12 rounded-full bg-white border border-neutral-200 text-neutral-800 hover:bg-black hover:text-white hover:border-black transition-all duration-300 focus:outline-none shadow-sm cursor-pointer flex items-center justify-center" 
            aria-label="Slide Right"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
