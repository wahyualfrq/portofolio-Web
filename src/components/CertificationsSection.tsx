'use client';

import React, { useRef, useState, useEffect } from 'react';

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
  const [activeCert, setActiveCert] = useState<Certification | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [modalOpen]);

  const handleCardClick = (cert: Certification) => {
    setActiveCert(cert);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => {
      setActiveCert(null);
    }, 300);
  };

  const certifications: Certification[] = [
      {
    tag: 'Project Management',
    year: '2025',
    title: 'Build a Product Management Plan Framework in Trello',
    issuer: 'Coursera',
    verifyLink: 'https://www.coursera.org/account/accomplishments/verify/M0B67ZH4GVC0',

        imageUrl: '/images/certif/CERTIFICATE_LANDING_PAGE~M0B67ZH4GVC0.jpeg'
  },
  {
    tag: 'AI',
    year: '2025',
    title: 'Google Gemini Academy Certification',
    issuer: 'Google for Education',
    verifyLink: 'https://edu.google.accredible.com/7271db66-0792-42f2-9fed-77ecb44b2a6d#acc.bk4wa6Dy',
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
    verifyLink: 'https://www.dicoding.com/certificates/JLX1VV4G2Z72',
    imageUrl: '/images/certif/sertifikat_course_271_3582698_120526190053_page-0001.jpg'
  },
  {
    tag: 'React Developer',
    year: '2026',
    title: 'Belajar Membuat Aplikasi Web dengan React',
    issuer: 'Dicoding Academy',
    verifyLink: 'https://www.dicoding.com/certificates/07Z670R2JPQR',
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
    verifyLink: 'https://www.dicoding.com/certificates/1OP8RD0WLZQK',
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
    <section id="certifications" className={`relative py-12 md:py-24 px-6 lg:px-16 border-b border-neutral-200 bg-[#F5F5F5] overflow-hidden ${modalOpen ? 'z-[60]' : 'z-20'}`}>
      <div className="max-w-[1400px] mx-auto">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-end pb-6 md:pb-12">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-block border border-black/10 bg-white/60 text-xs px-4 py-1.5 rounded-full tracking-wider uppercase font-medium fade-in-init">
              Certifications
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight fade-up-init">
              Continuous Learning<br/>
              <span className="font-serif italic font-normal text-neutral-800">And Growth</span>
            </h2>
          </div>
          <div className="lg:col-span-5 mt-4 lg:mt-0 flex flex-col justify-between items-start md:items-end gap-4">
            <p className="text-neutral-500 text-sm md:text-base leading-relaxed max-w-md md:text-right fade-in-init">
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
              onClick={() => handleCardClick(cert)}
              className="snap-start flex-shrink-0 w-[300px] sm:w-[320px] md:w-[340px] aspect-[4/3] bg-stone-100 border border-neutral-200/60 rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 card-transition group cursor-pointer relative fade-up-init"
            >
              {/* Visual Certificate Area */}
              <div className="absolute inset-0 w-full h-full overflow-hidden bg-white">
                {cert.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img 
                    src={cert.imageUrl} 
                    alt={cert.title} 
                    className="w-full h-full object-contain p-2 bg-white group-hover:scale-105 transition-transform duration-500"
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

      {/* Certification Details Modal */}
      <div 
        id="certModal" 
        onClick={(e) => { if (e.target === e.currentTarget) handleCloseModal(); }}
        className={`fixed inset-0 bg-neutral-900/80 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6 transition-opacity duration-300 ${
          modalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className={`w-full max-w-4xl bg-white shadow-2xl rounded-[32px] overflow-hidden transform transition-all duration-300 ease-out flex flex-col md:flex-row h-auto md:h-[400px] max-h-[90vh] ${
            modalOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
          }`}
        >
          {activeCert && (
            <>
              {/* Left Side: Large Certificate Image Preview */}
              <div className="w-full md:w-[60%] h-[250px] min-[375px]:h-[300px] md:h-full relative overflow-hidden bg-neutral-100 flex items-center justify-center p-0 md:p-8 flex-shrink-0 border-r border-black/5">
                {activeCert.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img 
                    src={activeCert.imageUrl} 
                    alt={activeCert.title} 
                    className="w-full h-full object-cover md:object-contain md:max-h-[380px] rounded-none md:rounded-lg md:shadow-sm"
                  />
                ) : (
                  <div className="text-neutral-400 text-xs">No Preview Available</div>
                )}
              </div>

              {/* Right Side: Details Pane */}
              <div className="w-full md:w-[40%] flex flex-col relative bg-white min-h-0 md:h-full">
                
                {/* Close Button */}
                <button 
                  onClick={handleCloseModal} 
                  className="absolute top-4 right-4 md:top-6 md:right-6 w-9 h-9 rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900 flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer z-30 focus:outline-none" 
                  aria-label="Close Modal"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>

                {/* Scrollable details */}
                <div className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-10 pr-3 scrollbar-hide">
                  <div className="space-y-3 mt-2 md:space-y-6 md:mt-4">
                    
                    {/* Tag & Title */}
                    <div className="space-y-1">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-stone-100 text-neutral-800 text-[9px] font-bold uppercase tracking-wider">
                        {activeCert.tag}
                      </span>
                      <h3 className="text-sm min-[375px]:text-base md:text-xl font-black text-neutral-900 tracking-tight leading-tight uppercase">
                        {activeCert.title}
                      </h3>
                    </div>

                    {/* Metadata */}
                    <div className="grid grid-cols-2 gap-4 border-t border-b border-black/5 py-3 md:py-4">
                      <div>
                        <span className="text-[9px] uppercase font-bold text-neutral-400 tracking-wider block">
                          Issuer
                        </span>
                        <span className="text-xs md:text-sm font-bold text-neutral-800">
                          {activeCert.issuer}
                        </span>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase font-bold text-neutral-400 tracking-wider block">
                          Year
                        </span>
                        <span className="text-xs md:text-sm font-bold text-neutral-800">
                          {activeCert.year}
                        </span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Verification Link Button */}
                <div className="p-4 md:p-6 md:px-8 border-t border-black/5 bg-white flex-shrink-0 z-20">
                  {activeCert.verifyLink && activeCert.verifyLink !== '#' ? (
                    <a 
                      href={activeCert.verifyLink} 
                      target="_blank" 
                      rel="noreferrer noopener"
                      className="w-full py-2.5 md:py-3.5 bg-gradient-to-r from-neutral-900 to-neutral-800 hover:from-black hover:to-neutral-900 active:scale-[0.98] rounded-full text-xs font-bold text-white transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider text-center"
                    >
                      <span>Verify Credential</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 4h6m0 0v6m0-6L10 14"/></svg>
                    </a>
                  ) : (
                    <button 
                      disabled
                      className="w-full py-2.5 md:py-3.5 bg-neutral-100 text-neutral-400 rounded-full text-xs font-bold flex items-center justify-center gap-2 cursor-not-allowed uppercase tracking-wider"
                    >
                      <span>No Verification Link</span>
                    </button>
                  )}
                </div>

              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
