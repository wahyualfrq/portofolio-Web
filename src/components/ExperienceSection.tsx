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
};

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<'work' | 'org'>('work');

  const workItems: ExperienceItem[] = [
    {
      date: 'Feb 2026 - Present',
      role: 'Full Stack Web Developer Intern',
      company: 'Dinas Komunikasi dan Informatika Provinsi Sumatera Selatan',
      type: 'Government',
      typeColor: 'bg-emerald-500',
      description: 'Currently spearheading the enhancement of digital service architectures for the public sector. Responsible for designing, implementing, and deploying performant application interfaces, standardizing database structures, and building robust backend services using modern JavaScript ecosystems.',
      bullets: [
        'Rebuilt administrative portals, improving layout load times by 40%.',
        'Engineered secure, scalable RESTful APIs connecting department microservices.'
      ]
    },
    {
      date: 'Jan 2026 - May 2026',
      role: 'Coding Camp 2026 Developer',
      company: 'DBS Foundation x Dicoding',
      type: 'Scholarship Program',
      typeColor: 'bg-blue-500',
      description: 'Selected as part of an elite cohort to master enterprise-grade backend development, Cloud architectures, and continuous deployment systems.',
      bullets: [
        'Architected and documented a microservices layout utilizing Node.js, Express, and PostgreSQL.',
        'Earned multiple professional cloud, web, and database administration credentials.'
      ]
    },
    {
      date: 'Jun 2024 - Present',
      role: 'Freelance Full Stack Developer',
      company: 'Self-employed / Remote',
      type: 'Freelance',
      typeColor: 'bg-indigo-500',
      description: 'Partnering with domestic and international small-to-medium enterprises (SMEs) to engineer fully responsive web platforms, mobile products, and internal automated dashboards.',
      bullets: [
        'Delivered 10+ custom web platforms using Next.js, Laravel, and Tailwind CSS.',
        'Configured automated deployment scripts on VPS environments using Docker.'
      ]
    }
  ];

  const orgItems: ExperienceItem[] = [
    {
      date: '2025 - 2026',
      role: 'Head of Information Technology Division',
      company: 'Student Executive Board, Universitas Multi Data Palembang',
      type: 'Leadership',
      typeColor: 'bg-black',
      description: 'Led a highly technical department of 12+ developers and system operators to handle digital infrastructure, including university-wide student platforms, hackathon landing pages, and community databases.'
    },
    {
      date: '2025',
      role: 'UI/UX Competition Coordinator',
      company: 'Annual National IT Festival',
      type: 'Coordinator',
      typeColor: 'bg-purple-500',
      description: 'Curated criteria blueprints and managed operational pipelines for a nationwide UI/UX hackathon. Formulated structured rules, coordinated with high-profile industry judges, and guided 150+ participants.'
    },
    {
      date: '2024 - 2025',
      role: 'Web Development Team Lead',
      company: 'Student Innovation Group',
      type: 'Lead',
      typeColor: 'bg-teal-500',
      description: 'Managed product lifecycle of campus portal software. Introduced structured agile methodologies (Kanban), hosted sprint planning reviews, and reviewed codebase contributions to maintain standard design layouts.'
    },
    {
      date: '2024',
      role: 'Programming Mentor',
      company: 'IT Student Association',
      type: 'Mentor',
      typeColor: 'bg-rose-500',
      description: 'Trained 80+ junior college undergraduates in modern frontend practices (HTML5, CSS3, Tailwind, basic JavaScript). Devised programming lab materials and conducted bi-weekly mentoring evaluations.'
    }
  ];

  return (
    <section id="experience" className="relative z-20 py-24 px-6 lg:px-16 border-b border-neutral-200 bg-[#F5F5F5]">
      <div className="max-w-[1400px] mx-auto">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-end pb-12">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-block border border-black/10 bg-white/60 text-xs px-4 py-1.5 rounded-full tracking-wider uppercase font-medium">
              Experience
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              My Journey Through<br/>
              <span className="font-serif italic font-normal text-neutral-800">Work & Leadership</span>
            </h2>
          </div>
          <div className="lg:col-span-5 mt-4 lg:mt-0">
            <p className="text-brandTextSecondary text-sm md:text-base leading-relaxed text-neutral-600">
              A collection of professional experiences, internships, and organizational leadership roles that shaped my growth and sharpened my engineering mindset.
            </p>
          </div>
        </div>

        {/* Custom Styled Segmented Tab Controller */}
        <div className="flex border-b border-neutral-200 mt-8 mb-12">
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
          {activeTab === 'work' && (
            <div className="transition-all duration-500 opacity-100 block space-y-4">
              {workItems.map((item, index) => (
                <div key={index} className="border-b border-neutral-200 py-8 hover:bg-neutral-100/50 px-4 rounded-xl transition-all duration-300 group">
                  <div className="grid md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-3 text-neutral-500 font-medium text-sm lg:text-base">
                      {item.date}
                    </div>
                    <div className="md:col-span-6">
                      <h3 className="text-xl md:text-2xl font-bold text-neutral-900 group-hover:text-black transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-neutral-500 text-sm mt-1">{item.company}</p>
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
          )}

          {/* Tab: ORGANIZATION */}
          {activeTab === 'org' && (
            <div className="transition-all duration-500 opacity-100 block space-y-4">
              {orgItems.map((item, index) => (
                <div key={index} className="border-b border-neutral-200 py-8 hover:bg-neutral-100/50 px-4 rounded-xl transition-all duration-300 group">
                  <div className="grid md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-3 text-neutral-500 font-medium text-sm lg:text-base">
                      {item.date}
                    </div>
                    <div className="md:col-span-6">
                      <h3 className="text-xl md:text-2xl font-bold text-neutral-900 group-hover:text-black transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-neutral-500 text-sm mt-1">{item.company}</p>
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
          )}
        </div>
      </div>
    </section>
  );
}
