'use client';

import { useState, use } from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import TechStack from '@/components/sections/TechStack';
import CTA from '@/components/sections/CTA';
import CVModal from '@/components/project/CVModal';
import ContactModal from '@/components/project/ContactModal';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function LandingPage({ params }: PageProps) {
  // Await params using React.use() to comply with Next.js 15 Client Component rules
  const { locale } = use(params);
  
  const [cvOpen, setCvOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  // Structured Data JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    'name': 'Wahyudi Alfurqon',
    'jobTitle': 'Full Stack Developer & Android Developer',
    'url': `https://wahyudialfurqon.dev/${locale}`,
    'sameAs': [
      'https://linkedin.com/in/wahyudi-alfurqon',
      'https://instagram.com'
    ],
    'knowsAbout': [
      'Web Development',
      'Next.js',
      'Laravel',
      'Flutter',
      'Mobile Development',
      'UI/UX Design'
    ]
  };

  return (
    <>
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="w-full bg-brandCanvas overflow-hidden flex flex-col min-h-screen relative">
        <Header onContactClick={() => setContactOpen(true)} />
        
        <main className="flex-grow">
          <Hero onContactClick={() => setContactOpen(true)} />
          <About onCVClick={() => setCvOpen(true)} />
          <Services />
          <Portfolio />
          <TechStack />
          <CTA onContactClick={() => setContactOpen(true)} />
        </main>
      </div>

      {/* Modals */}
      <CVModal isOpen={cvOpen} onClose={() => setCvOpen(false)} />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
