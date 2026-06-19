'use client';

import React from 'react';

export default function ContactSection() {
  const simulateCVDownload = () => {
    // Generate a temporary mock file download
    const link = document.createElement('a');
    link.href = '#';
    link.setAttribute('download', 'Wahyudi_Alfurqon_CV.pdf');
    document.body.appendChild(link);
    alert('CV download simulated successfully! (Replace link.href with the actual CV path)');
    // link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="bg-[#000000] text-white py-28 px-6 lg:px-16 border-b border-neutral-900 relative z-20 overflow-hidden">
      {/* Abstract delicate structural lines to match premium feel */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-neutral-800"></div>
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-neutral-800"></div>
        <div className="absolute left-0 right-0 top-1/3 h-px bg-neutral-800"></div>
      </div>

      <div className="lg:grid lg:grid-cols-12 lg:gap-12 relative z-10 max-w-[1400px] mx-auto">
        {/* Left Panel */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-block bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 px-4 py-1.5 rounded-full tracking-wider uppercase font-medium">
            Connect
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none">
            Let's Build Something<br/>
            <span className="font-serif italic font-normal text-neutral-300">Meaningful Together</span>
          </h2>
          <p className="text-neutral-400 text-base md:text-lg font-light max-w-xl leading-relaxed">
            Always open for freelance projects, digital collaboration, internships, technical evaluation, or simply chatting about design engineering and scalable software architectures.
          </p>

          {/* Interactive mockup options */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="mailto:hello@wahyudialfurqon.com" 
              className="bg-white hover:bg-neutral-200 text-black px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 group shadow-sm cursor-pointer"
            >
              <span>Let's Talk</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
            <button 
              onClick={simulateCVDownload} 
              className="bg-transparent hover:bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 group cursor-pointer focus:outline-none"
            >
              <svg className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              <span>Download CV</span>
            </button>
          </div>
        </div>

        {/* Right Panel: Grid Directory */}
        <div className="lg:col-span-5 mt-16 lg:mt-0 flex flex-col justify-between">
          <div className="border border-neutral-800 bg-neutral-950/40 p-8 rounded-3xl backdrop-blur-md space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-wider text-neutral-300 border-b border-neutral-900/40 pb-4">Direct Contact</h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-[10px] text-neutral-500 uppercase tracking-widest">Email Address</p>
                <a href="mailto:hello@wahyudialfurqon.com" className="text-base font-semibold hover:text-neutral-300 hover:underline decoration-1 underline-offset-4 mt-1 block">
                  hello@wahyudialfurqon.com
                </a>
              </div>
              <div>
                <p className="text-[10px] text-neutral-500 uppercase tracking-widest">Professional Hub</p>
                <a href="https://linkedin.com/in/wahyudi-alfurqon" target="_blank" rel="noreferrer noopener" className="text-base font-semibold hover:text-neutral-300 hover:underline decoration-1 underline-offset-4 mt-1 block">
                  linkedin.com/in/wahyudi-alfurqon
                </a>
              </div>
              <div>
                <p className="text-[10px] text-neutral-500 uppercase tracking-widest">Source Directory</p>
                <a href="https://github.com/wahyudialfurqon" target="_blank" rel="noreferrer noopener" className="text-base font-semibold hover:text-neutral-300 hover:underline decoration-1 underline-offset-4 mt-1 block">
                  github.com/wahyudialfurqon
                </a>
              </div>
              <div>
                <p className="text-[10px] text-neutral-500 uppercase tracking-widest">Digital Stream</p>
                <a href="https://instagram.com/wahyudi.alfurqon" target="_blank" rel="noreferrer noopener" className="text-base font-semibold hover:text-neutral-300 hover:underline decoration-1 underline-offset-4 mt-1 block">
                  @wahyudi.alfurqon
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
