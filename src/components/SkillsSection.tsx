'use client';

import React from 'react';

type SkillItem = {
  name: string;
  tag: string;
};

type SkillCategory = {
  title: string;
  sub: string;
  items: SkillItem[];
};

export default function SkillsSection() {
  const categories: SkillCategory[] = [
    {
      title: 'Frontend',
      sub: '01 // UI Engine',
      items: [
        { name: 'Next.js', tag: 'Frame / SSR' },
        { name: 'React', tag: 'Component Architecture' },
        { name: 'TypeScript', tag: 'Type Safety' },
        { name: 'Tailwind CSS', tag: 'Functional Styling' },
        { name: 'Flutter', tag: 'Native Mobile' }
      ]
    },
    {
      title: 'Backend',
      sub: '02 // Services',
      items: [
        { name: 'Laravel', tag: 'PHP Architecture' },
        { name: 'Node.js', tag: 'JS Ecosystem' },
        { name: 'PostgreSQL', tag: 'Relational DB' },
        { name: 'MySQL', tag: 'Enterprise DB' },
        { name: 'REST API', tag: 'Secure Integration' }
      ]
    },
    {
      title: 'Tools',
      sub: '03 // Workspace',
      items: [
        { name: 'Git & GitHub', tag: 'Version Control' },
        { name: 'Docker', tag: 'Containerization' },
        { name: 'Figma', tag: 'Product Design' },
        { name: 'Postman', tag: 'API Evaluation' },
        { name: 'VS Code', tag: 'Main IDE' }
      ]
    }
  ];

  return (
    <section id="skills" className="relative z-20 py-12 md:py-24 px-6 lg:px-16 border-b border-neutral-200 bg-[#F5F5F5]">
      <div className="max-w-[1400px] mx-auto">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-end pb-6 md:pb-16">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-block border border-black/10 bg-white/60 text-xs px-4 py-1.5 rounded-full tracking-wider uppercase font-medium fade-in-init">
              Skills
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight fade-up-init">
              Technologies I Use<br/>
              <span className="font-serif italic font-normal text-neutral-800">To Build Products</span>
            </h2>
          </div>
          <div className="lg:col-span-5 mt-4 lg:mt-0">
            <p className="text-neutral-500 text-sm md:text-base leading-relaxed fade-in-init">
              A clinical, high-performance toolkit compiled to engineer responsive, robust layouts and digital environments from concept to live production.
            </p>
          </div>
        </div>

        {/* 3-Column Minimal Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-5 md:p-8 border border-neutral-200 shadow-sm flex flex-col justify-between fade-up-init">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-neutral-100 mb-4">
                  <h3 className="text-lg font-bold uppercase tracking-wider text-black">{category.title}</h3>
                  <span className="text-xs text-neutral-400 font-medium">{category.sub}</span>
                </div>
                <div className="space-y-3">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="group flex items-center justify-between p-3.5 rounded-xl border border-neutral-100 hover:border-black/20 hover:bg-neutral-50 transition-all duration-300">
                      <span className="font-semibold text-neutral-800 text-sm md:text-base">{item.name}</span>
                      <span className="text-xs text-neutral-400 group-hover:text-black font-semibold transition-colors">{item.tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
