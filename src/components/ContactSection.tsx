'use client';

import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#000000] text-white py-14 md:py-28 px-6 lg:px-16 border-b border-neutral-900 relative z-20 overflow-hidden">
      {/* Abstract delicate structural lines to match premium feel */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-neutral-800"></div>
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-neutral-800"></div>
        <div className="absolute left-0 right-0 top-1/3 h-px bg-neutral-800"></div>
      </div>

      <div className="lg:grid lg:grid-cols-12 lg:gap-12 relative z-10 max-w-[1400px] mx-auto">
        {/* Left Panel */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-block bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 px-4 py-1.5 rounded-full tracking-wider uppercase font-medium fade-in-init">
            Connect
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none fade-up-init">
            Let's Build Something<br/>
            <span className="font-serif italic font-normal text-neutral-300">Meaningful Together</span>
          </h2>
          <p className="text-justify md:text-left text-neutral-400 text-base md:text-lg font-light max-w-xl leading-relaxed fade-in-init">
            Always open for freelance projects, digital collaboration, internships, technical evaluation, or simply chatting about design engineering and scalable software architectures.
          </p>
        </div>

        {/* Right Panel: Grid Directory */}
        <div className="lg:col-span-5 mt-16 lg:mt-0 flex flex-col justify-between">
          <div className="border border-neutral-800 bg-neutral-950/40 p-8 rounded-3xl backdrop-blur-md space-y-6 fade-up-init">
            <h3 className="text-lg font-bold uppercase tracking-wider text-neutral-300 border-b border-neutral-900/40 pb-4">Direct Contact</h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-[10px] text-neutral-500 uppercase tracking-widest">Email Address</p>
                <a href="mailto:wahyudialfurqon109@gmail.com" className="text-base font-semibold hover:text-neutral-300 hover:underline decoration-1 underline-offset-4 mt-1 flex items-center gap-2 group">
                  <svg className="w-4 h-4 text-neutral-400 group-hover:text-neutral-300 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>wahyudialfurqon109@gmail.com</span>
                </a>
              </div>
              <div>
                <p className="text-[10px] text-neutral-500 uppercase tracking-widest">GitHub</p>
                <a href="https://github.com/wahyualfrq" target="_blank" rel="noreferrer noopener" className="text-base font-semibold hover:text-neutral-300 hover:underline decoration-1 underline-offset-4 mt-1 flex items-center gap-2 group">
                  <svg className="w-4 h-4 text-neutral-400 group-hover:text-neutral-300 transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.409.678 1.221.678 2.461 0 1.778-.012 3.212-.012 3.647 0 .27.18.583.688.484C19.137 20.198 22 16.442 22 12.017 22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  <span>github.com/wahyualfrq</span>
                </a>
              </div>
              <div>
                <p className="text-[10px] text-neutral-500 uppercase tracking-widest">Instagram</p>
                <a href="https://www.instagram.com/wahyu.alfrqn?igsh=MWExMGZqd2RhcmNneA%3D%3D&utm_source=qr" target="_blank" rel="noreferrer noopener" className="text-base font-semibold hover:text-neutral-300 hover:underline decoration-1 underline-offset-4 mt-1 flex items-center gap-2 group">
                  <svg className="w-4 h-4 text-neutral-400 group-hover:text-neutral-300 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z M17.5 6.5h.01" />
                  </svg>
                  <span>@wahyu.alfrqn</span>
                </a>
              </div>
              <div>
                <p className="text-[10px] text-neutral-500 uppercase tracking-widest">TikTok</p>
                <a href="https://www.tiktok.com/@kelarin.project?_r=1&_t=ZS-97MekWcBOLM" target="_blank" rel="noreferrer noopener" className="text-base font-semibold hover:text-neutral-300 hover:underline decoration-1 underline-offset-4 mt-1 flex items-center gap-2 group">
                  <svg className="w-4 h-4 text-neutral-400 group-hover:text-neutral-300 transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.09-1.51-.71-.54-1.3-1.25-1.73-2.06v7.3c-.07 1.99-.8 4.07-2.35 5.34A6.16 6.16 0 0110.1 20.2c-2.12-.22-4.14-1.63-4.89-3.64A6.24 6.24 0 018.3 8.78c1.37-.53 2.95-.36 4.22.42V.02zm0 0" />
                  </svg>
                  <span>@kelarin.project</span>
                </a>
              </div>
              <div>
                <p className="text-[10px] text-neutral-500 uppercase tracking-widest">Facebook</p>
                <a href="https://www.facebook.com/share/17d9r6bfDm/?mibextid=wwXIfr" target="_blank" rel="noreferrer noopener" className="text-base font-semibold hover:text-neutral-300 hover:underline decoration-1 underline-offset-4 mt-1 flex items-center gap-2 group">
                  <svg className="w-4 h-4 text-neutral-400 group-hover:text-neutral-300 transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 8H7v3h2v9h3v-9h2.72l.42-3H12V6c0-.9.24-1.5 1.53-1.5H15V1.77C14.3 1.68 13.06 1.5 11.96 1.5 9.67 1.5 8 2.89 8 5.48V8h1z" />
                  </svg>
                  <span>Kelarin Dong</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Area */}
      <div className="mt-10 pt-4 md:mt-20 md:pt-8 border-t border-neutral-900 flex justify-between items-center max-w-[1400px] mx-auto">
        <p className="text-neutral-500 text-xs tracking-wider">
          &copy; {new Date().getFullYear()} Wahyudi Alfurqon.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-all flex items-center justify-center cursor-pointer shadow-sm focus:outline-none"
          aria-label="Scroll to top"
        >
          <svg className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </button>
      </div>
    </section>
  );
}
