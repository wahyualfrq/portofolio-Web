'use client';

import { useEffect } from 'react';
import TrueFocus from '../components/TrueFocus';
import DecryptedText from '../components/DecryptedText';

export default function HomePage() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.opacity-0');
    elements.forEach((el) => el.classList.remove('opacity-0'));
  }, []);

  return (
    <div className="h-screen overflow-hidden bg-[#F5F5F5] font-body-md text-on-surface antialiased">

      {/* ── Navbar ─────────────────────────────────────────────── */}
      <header className="absolute top-0 left-0 right-0 z-50 animate-reveal-down">
        <nav className="flex justify-between items-center px-5 md:px-gutter h-16 md:h-20 max-w-container-max mx-auto">

          {/* Spacing placeholder */}
          <div />

          {/* Nav links — desktop only */}
          <ul className="hidden md:flex items-center gap-8">
            {[
              { href: '#about',      label: 'About'      },
              { href: '#projects',   label: 'Projects'   },
              { href: '#experience', label: 'Experience' },
              { href: '#contact',    label: 'Contact'    },
            ].map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button className="bg-primary text-on-primary px-4 py-2.5 md:px-6 md:py-3 rounded-full font-label-caps text-label-caps text-[10px] md:text-xs hover:opacity-80 transition-all duration-200 flex items-center gap-1.5 group">
            Let&apos;s Talk
            <span className="material-symbols-outlined text-[14px] md:text-[16px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>
        </nav>
      </header>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      {/*
        Mobile  : relative container — photo absolute RIGHT (68%), content LEFT with gradient blend
        Desktop : 2-column grid via .hero-layout — content 38% | photo 62%
      */}
      {/* ── Hero ─────────────────────────────────────────────────── */}
      {/* ── Mobile Hero (Visible only on mobile/tablet < md) ── */}
      <div className="flex md:hidden flex-col items-center justify-center h-full pt-16 px-6 bg-[#F5F5F5] select-none text-center">
        {/* Profile Sticker/Photo */}
        <div className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] relative flex justify-center items-center mb-6 animate-fade-in">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/fix2.png"
            alt="Wahyudi Alfurqon"
            className="w-full h-full object-contain"
          />

          {/* Floating Badge 1: Designer (Orange) */}
          <div className="absolute left-[-2%] top-[50%] z-20 animate-float-1 select-none">
            <div className="bg-[#D96B43] text-white font-semibold text-[10px] md:text-xs px-3 py-1 rounded-full shadow-md">
              Designer
            </div>
            {/* Cursor pointing at it */}
            <div className="absolute -right-2.5 -bottom-2.5 rotate-180">
              <svg className="w-4 h-4 text-white drop-shadow-md pointer-events-none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 2L20 10L12 12L10 20L4 2Z" fill="white" stroke="black" strokeWidth="2" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Floating Badge 2: Developer (White) */}
          <div className="absolute right-[-2%] top-[68%] z-20 animate-float-2 select-none">
            <div className="bg-white text-black font-semibold text-[10px] md:text-xs px-3 py-1 rounded-full shadow-md border border-gray-100">
              Developer
            </div>
            {/* Cursor pointing at it */}
            <div className="absolute -left-2.5 -top-2.5 rotate-0">
              <svg className="w-4 h-4 text-white drop-shadow-md pointer-events-none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 2L20 10L12 12L10 20L4 2Z" fill="white" stroke="black" strokeWidth="2" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Headline */}
        <h1
          className="font-[800] leading-[1.1] tracking-tight text-primary text-center animate-reveal-up"
          style={{ fontSize: 'clamp(40px, 9vw, 56px)' }}
        >
          <DecryptedText text="Hi, I'm" parentClassName="font-serif italic font-normal text-on-surface-variant" /><br />
          Wahyudi Alfurqon
        </h1>

        {/* Tagline */}
        <div className="text-on-surface-variant mt-4 text-[12.5px] max-w-[345px] mx-auto text-center animate-reveal-up"
             style={{ animationDelay: '0.2s' }}>
          <TrueFocus
            sentence="— a Full Stack Developer building modern|web apps, Android apps & AI-powered solutions."
            separator="|"
            manualMode={false}
            blurAmount={3}
            borderColor="#000000"
            glowColor="rgba(0, 0, 0, 0.15)"
            animationDuration={0.4}
            pauseBetweenAnimations={1.2}
            className="items-center text-center"
          />
        </div>
      </div>

      {/* ── Desktop Hero (Visible only on desktop/tablet ≥ md) ──── */}
      <div className="hidden md:grid hero-layout h-full relative">

        {/* ── Content column ──────────────────────────────────── */}
        <div
          className="h-full relative z-10 flex flex-col justify-center
                     pl-16 pr-6 pt-28 pb-12
                     animate-reveal-up opacity-0"
          style={{ animationDelay: '0.4s' }}
        >
          {/* Middle — headline + tagline + CTA */}
          <div>
            {/* Headline */}
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

        {/* ── Photo column ─────────────────────────────────────── */}
        <div
          className="animate-fade-in opacity-0
                     relative w-auto h-full flex items-center justify-center"
          style={{ animationDelay: '0.2s' }}
        >
          {/* Inner container that has aspect-square and scales with the viewport height */}
          <div className="relative h-full aspect-square max-w-full flex items-end justify-center p-12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/fix.png"
              alt="Wahyudi Alfurqon"
              className="w-full h-full object-contain object-bottom"
            />

            {/* Floating Badge 1: Designer (Orange) */}
            <div className="absolute left-[16%] top-[57%] z-20 animate-float-1 select-none">
              <div className="bg-[#D96B43] text-white font-semibold text-[10px] md:text-xs px-3 py-1 rounded-full shadow-md">
                Designer
              </div>
              {/* Cursor pointing at it */}
              <div className="absolute -right-2.5 -bottom-2.5 rotate-180">
                <svg className="w-4 h-4 text-white drop-shadow-md pointer-events-none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 2L20 10L12 12L10 20L4 2Z" fill="white" stroke="black" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Floating Badge 2: Developer (White) */}
            <div className="absolute right-[10%] top-[72%] z-20 animate-float-2 select-none">
              <div className="bg-white text-black font-semibold text-[10px] md:text-xs px-3 py-1 rounded-full shadow-md border border-gray-100">
                Developer
              </div>
              {/* Cursor pointing at it */}
              <div className="absolute -left-2.5 -top-2.5 rotate-0">
                <svg className="w-4 h-4 text-white drop-shadow-md pointer-events-none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 2L20 10L12 12L10 20L4 2Z" fill="white" stroke="black" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* Desktop gradient — narrower fade on left edge */}
          <div className="absolute inset-y-0 left-0 w-24
                          bg-gradient-to-r from-[#F5F5F5] to-transparent
                          pointer-events-none" />
        </div>

      </div>
    </div>
  );
}
