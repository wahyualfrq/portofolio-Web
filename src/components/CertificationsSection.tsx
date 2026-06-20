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
    tag: 'Project Management',
    year: '2025',
    title: 'Build a Product Management Plan Framework in Trello',
    issuer: 'Coursera',
    verifyLink: '#',

        imageUrl: '/images/certif/CERTIFICATE_LANDING_PAGE~M0B67ZH4GVC0.jpeg'
  },
  {
    tag: 'AI',
    year: '2025',
    title: 'Google Gemini Academy Certification',
    issuer: 'Google for Education',
    verifyLink: '#',
    imageUrl: '/images/certif/k02u4z4t_1778603200237_page-0001.jpg'
  },
 {
  tag: 'JavaScript',
  year: '2026',
  title: 'Belajar Dasar Pemrograman JavaScript',
  issuer: 'Dicoding Academy',
  verifyLink: 'https://www.dicoding.com/certificates/EYX4Q07Y5PDL',
  imageUrl: '/images/certif/sertifikat_course_256_3582698_310326223010_page-0001.jpg'
},
  {
    tag: 'Back-End Developer',
    year: '2026',
    title: 'Belajar Fundamental Back-End dengan JavaScript',
    issuer: 'Dicoding Academy',
    verifyLink: '#',
    imageUrl: '/images/certif/sertifikat_course_271_3582698_120526190053_page-0001.jpg'
  },
  {
    tag: 'React Developer',
    year: '2026',
    title: 'Belajar Membuat Aplikasi Web dengan React',
    issuer: 'Dicoding Academy',
    verifyLink: '#',
    imageUrl: '/images/certif/sertifikat_course_403_3582698_090426153616_page-0001.jpg'
  },
  {
    tag: 'Software Engineering',
    year: '2026',
    title: 'Memulai Dasar Pemrograman untuk Menjadi Pengembang Software',
    issuer: 'Dicoding Academy',
    verifyLink: '#',
    imageUrl: '/images/certif/sertifikat_course_237_3582698_150226143146_page-0001.jpg'
  },
  {
    tag: 'Cloud & AI',
    year: '2026',
    title: 'Belajar Dasar Cloud dan Gen AI di AWS',
    issuer: 'Dicoding Academy x AWS',
    verifyLink: '#',
    imageUrl: '/images/certif/sertifikat_course_251_3582698_150226164022_page-0001.jpg'
  },
  {
  tag: 'Financial Literacy',
  year: '2026',
  title: 'Introduction to Financial Literacy',
  issuer: 'Dicoding Academy',
  verifyLink: 'https://www.dicoding.com/certificates/N9ZO2K8ORPG5',
  imageUrl: '/images/certif/sertifikat_course_905_3582698_130126233917_page-0001.jpg'
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
    <section id="certifications" className="relative z-20 py-12 md:py-24 px-6 lg:px-16 border-b border-neutral-200 bg-[#F5F5F5] overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-end pb-6 md:pb-12">
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
          className="flex gap-4 md:gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory projects-slider-container pb-6 md:pb-12 select-none scroll-smooth"
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent flex flex-col justify-end p-4 md:p-5 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto md:pointer-events-none md:group-hover:pointer-events-auto z-10">
                <div className="transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300 flex justify-between items-end text-white">
                  <div className="space-y-0.5 pr-3">
                    <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-white/60">
                      {cert.tag} • {cert.year}
                    </span>
                    <h3 className="text-xs md:text-sm font-bold text-white tracking-tight leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-[10px] md:text-xs text-white/80 mt-0.5">
                      Issuer: {cert.issuer}
                    </p>
                  </div>
                  {cert.verifyLink && (
                    <a 
                      href={cert.verifyLink} 
                      target="_blank" 
                      rel="noreferrer noopener" 
                      onClick={(e) => e.stopPropagation()} // Prevent card click propagation
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white text-black flex items-center justify-center text-sm hover:scale-105 active:scale-95 transition-all flex-shrink-0 shadow-lg cursor-pointer"
                      aria-label="Verify Certificate"
                    >
                      <svg className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-300 md:group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 4h6m0 0v6m0-6L10 14"/></svg>
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
