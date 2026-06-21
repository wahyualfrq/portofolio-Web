'use client';

import React, { useState } from 'react';

type ExperienceItem = {
  date: string;
  role: string;
  company: string;
  type: string;
  typeColor: string;
  description: string;
  bullets?: string[];
  logo?: string;
  logoClass?: string;
};

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<'work' | 'org'>('work');

  const workItems: ExperienceItem[] = [
    {
      date: 'Oct 2026 - Des 2026',
      role: 'Full Stack Web Developer Intern',
      company: 'Dinas Komunikasi dan Informatika Provinsi Sumatera Selatan',
      type: 'Government',
      typeColor: 'bg-emerald-500',
      description: 'Government institution responsible for digital transformation, information systems, and public technology services in South Sumatra Province.',
      bullets: [
        'Developed the Sumsel United web platform using Laravel, delivering 10+ scalable features within a 3-month internship program.',
        'Designed and implemented 5 core modules and database structures to support club management, scheduling, and ticketing operations.',
        'Implemented authentication, role-based access control, and admin dashboards to streamline system administration.',
        'Delivered a complete digital ticketing solution that improved user access and centralized ticket management.'      
      ],
      logo: '/images/logosumsel.webp'
    },
    {
      date: 'Feb 2026 - Jul 2026',
      role: 'Full Stack Web Developer Cohort',
      company: 'Coding Camp powered by DBS Foundation',
      type: 'Scholarship Program',
      typeColor: 'bg-blue-500',
      description: 'National technology upskilling program by DBS Foundation and Dicoding focused on Full Stack Web Development and real-world software engineering projects.',
      bullets: [
        'Developed an AI-powered student productivity platform integrating chatbot, Kanban task management, and location-based recommendations in a 6-member cross-functional team.',
        'Designed and implemented responsive web interfaces while integrating REST APIs across frontend, backend, and AI services.',
        'Collaborated with AI Engineers and Data Science teams to deliver scalable features and a unified user experience.',
        'Optimized application quality and performance, achieving Google PageSpeed scores of 99 (Desktop), 89 (Mobile), 100 Best Practices, and 92 SEO.'
      ],
      logo: '/images/LogoCoding.webp',
    },
    {
      date: 'Mar 2026 - Apr 2026',
      role: 'Freelance Full Stack Developer',
      company: 'PT. Rextechnology',
      type: 'Freelance',
      typeColor: 'bg-indigo-500',
      description: 'Technology company providing digital solutions, software development, and IT services for businesses.',
      bullets: [
        'Developed and deployed a bilingual corporate website using Next.js, delivering a scalable and maintainable multi-page architecture',
        'Engineered responsive frontend components to ensure seamless user experiences across desktop and mobile devices.',
        'Improved website quality through performance optimization, achieving Lighthouse scores of 98 Performance, 96 Best Practices, and 91 SEO.'
      ],
      logo: '/images/LogoRex.webp'
    }
  ];

  const orgItems: ExperienceItem[] = [
    {
      date: '2025 - 2026',
      role: 'Creative & Multimedia Division Lead',
      company: 'Himpunan Mahasiswa Informatika, Universitas Multi Data Palembang',
      type: 'Leadership',
      typeColor: 'bg-black',
      description: 'Led a creative team of 10+ members while managing 100+ design and multimedia projects, overseeing visual branding, social media content, video production, and promotional materials. Collaborated across divisions to ensure consistent communication and strengthen HIMIF’s public image through strategic visual initiatives.',
      logo: '/images/LogoHimif.webp'
    },
    {
      date: '2024 - 2025',
      role: 'Education & Technology Division Member',
      company: 'Himpunan Mahasiswa Informatika, Universitas Multi Data Palembang',
      type: 'Mentor',
      typeColor: 'bg-purple-500',
      description: 'Contributed to community service and educational technology programs by conducting Canva design training for 25+ participants, developing learning materials, and collaborating with the team to deliver engaging and impactful learning experiences.',
      logo: '/images/LogoHimif.webp'
    },
    {
      date: '2025 - 2026',
      role: 'Machine Learning Division Member & Multimedia Division Lead',
      company: 'Unit Kegiatan Mahasiswa Programming, Universitas Multi Data Palembang',
      type: 'Mentor',
      typeColor: 'bg-teal-500',
      description: 'Led the Multimedia Division by managing a team of 15+ members and producing 30+ visual contents, including designs and event documentation, to support organizational branding and communication. Coordinated documentation for 10+ events, mentored new members to improve team productivity and collaboration, contributed to machine learning projects using real-world datasets, and guided 10+ members from various study programs in learning fundamental programming concepts.',
      logo: '/images/LogoUKMProgramming.webp'
    },
    {
      date: '2025 - 2026',
      role: 'Photography & Videography Division Member',
      company: 'Unit Kegiatan Mahasiswa MDP TV, Universitas Multi Data Palembang',
      type: 'Coordinator',
      typeColor: 'bg-rose-500',
      description: 'Led a team of 10+ members in planning and executing event documentation and creative campaigns, delivering 15+ visual and multimedia assets that enhanced event visibility, engagement, and overall participant experience.',
      logo: '/images/LogoMDPTv.webp'
    }
  ];

  return (
    <section id="experience" className="relative z-20 py-12 md:py-24 px-6 lg:px-16 border-b border-neutral-200 bg-[#F5F5F5]">
      <div className="max-w-[1400px] mx-auto">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-end pb-6 md:pb-12">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-block border border-black/10 bg-white/60 text-xs px-4 py-1.5 rounded-full tracking-wider uppercase font-medium fade-in-init">
              Experience
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight fade-up-init">
              My Journey Through<br/>
              <span className="font-serif italic font-normal text-neutral-800">Work & Leadership</span>
            </h2>
          </div>
          <div className="lg:col-span-5 mt-4 lg:mt-0">
            <p className="text-brandTextSecondary text-sm md:text-base leading-relaxed text-neutral-600 fade-in-init">
              A collection of professional experiences, internships, and organizational leadership roles that shaped my growth and sharpened my engineering mindset.
            </p>
          </div>
        </div>

        {/* Custom Styled Segmented Tab Controller */}
        <div className="flex border-b border-neutral-200 mt-4 mb-6 md:mt-8 md:mb-12 fade-up-init">
          <button 
            onClick={() => setActiveTab('work')} 
            className={`px-8 py-4 font-semibold text-sm tracking-wide uppercase border-b-2 transition-all duration-300 relative focus:outline-none cursor-pointer ${
              activeTab === 'work' ? 'border-black text-black' : 'border-transparent text-neutral-400 hover:text-black'
            }`}
          >
            Work History
            <span className={`absolute -top-1 -right-1 text-[9px] px-1.5 py-0.5 rounded-full ${
              activeTab === 'work' ? 'bg-black text-white' : 'bg-neutral-200 text-neutral-600'
            }`}>
              3
            </span>
          </button>
          <button 
            onClick={() => setActiveTab('org')} 
            className={`px-8 py-4 font-semibold text-sm tracking-wide uppercase border-b-2 transition-all duration-300 relative focus:outline-none cursor-pointer ${
              activeTab === 'org' ? 'border-black text-black' : 'border-transparent text-neutral-400 hover:text-black'
            }`}
          >
            Organization & Leadership
            <span className={`absolute -top-1 -right-1 text-[9px] px-1.5 py-0.5 rounded-full ${
              activeTab === 'org' ? 'bg-black text-white' : 'bg-neutral-200 text-neutral-600'
            }`}>
              4
            </span>
          </button>
        </div>

        {/* Tab Contents Wrapper */}
        <div className="relative min-h-[400px]">
          {/* Tab: WORK */}
          <div className={`transition-all duration-500 ${activeTab === 'work' ? 'opacity-100 block space-y-4' : 'hidden'}`}>
            {workItems.map((item, index) => (
              <div key={index} className="border border-transparent border-b-neutral-200 py-5 md:py-8 px-4 md:px-6 hover:bg-white hover:border-neutral-200/60 hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1 rounded-2xl transition-all duration-300 group fade-up-init">
                <div className="grid md:grid-cols-12 gap-3 md:gap-6 items-center">
                  <div className="md:col-span-6 flex items-center gap-4">
                    {item.logo && (
                      <img 
                        src={item.logo} 
                        alt="" 
                        className={`${item.logoClass || 'w-12 h-12 md:w-14 md:h-14'} object-contain shrink-0 select-none`} 
                      />
                    )}
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-neutral-900 group-hover:text-black transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-neutral-500 text-sm mt-1">{item.company}</p>
                    </div>
                  </div>
                  <div className="md:col-span-3 text-neutral-500 font-medium text-sm lg:text-base md:text-center">
                    {item.date}
                  </div>
                  <div className="md:col-span-3 md:text-right">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-neutral-200">
                      <span className={`w-1.5 h-1.5 rounded-full ${item.typeColor}`}></span> {item.type}
                    </span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-neutral-100/60 text-neutral-600 text-sm max-w-4xl leading-relaxed space-y-2">
                  <p>{item.description}</p>
                  {item.bullets && item.bullets.length > 0 && (
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      {item.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Tab: ORGANIZATION */}
          <div className={`transition-all duration-500 ${activeTab === 'org' ? 'opacity-100 block space-y-4' : 'hidden'}`}>
            {orgItems.map((item, index) => (
              <div key={index} className="border border-transparent border-b-neutral-200 py-5 md:py-8 px-4 md:px-6 hover:bg-white hover:border-neutral-200/60 hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1 rounded-2xl transition-all duration-300 group fade-up-init">
                <div className="grid md:grid-cols-12 gap-3 md:gap-6 items-center">
                  <div className="md:col-span-6 flex items-center gap-4">
                    {item.logo && (
                      <img 
                        src={item.logo} 
                        alt="" 
                        className={`${item.logoClass || 'w-12 h-12 md:w-14 md:h-14'} object-contain shrink-0 select-none`} 
                      />
                    )}
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-neutral-900 group-hover:text-black transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-neutral-500 text-sm mt-1">{item.company}</p>
                    </div>
                  </div>
                  <div className="md:col-span-3 text-neutral-500 font-medium text-sm lg:text-base md:text-center">
                    {item.date}
                  </div>
                  <div className="md:col-span-3 md:text-right">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-neutral-200">
                      <span className={`w-1.5 h-1.5 rounded-full ${item.typeColor}`}></span> {item.type}
                    </span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-neutral-100/60 text-neutral-600 text-sm max-w-4xl leading-relaxed">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
