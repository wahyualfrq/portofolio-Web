'use client';

import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { 
  FaArrowsLeftRight, 
  FaArrowLeft, 
  FaArrowRight, 
  FaLaptopCode, 
  FaEyeLowVision, 
  FaMobileScreenButton, 
  FaFutbol, 
  FaArrowUpRightFromSquare, 
  FaXmark, 
  FaCircleCheck, 
  FaWifi,
  FaBatteryThreeQuarters,
  FaBagShopping,
  FaHouse,
  FaMagnifyingGlass,
  FaCirclePlus,
  FaUser
} from 'react-icons/fa6';

// TypeScript interfaces
interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  visualHtml: React.ReactNode;
  techs: string[];
  features: string[];
  contributions: string[];
  demoLink: string;
  mockupBg: string; // Gradient background classes for modal cover
  mockupIcon: React.ReactNode; // Icon for modal cover
}

export default function ProjectsSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Drag-to-Scroll variables (Ref-based for max performance/UX)
  const isDown = useRef(false);
  const startX = useRef(0);
  const startY = useRef(0);
  const scrollLeft = useRef(0);
  const isDragging = useRef(false);
  const dragThreshold = 5; // pixels

  // 1. Projects Data Definition
  const projects: Project[] = useMemo(() => [
    {
      id: 1,
      title: "Kawan Kampus",
      category: "Web Application",
      description: "Kawan Kampus was developed by a multidisciplinary team of six members consisting of Full Stack Developers, AI Engineers, and Data Scientists. The development team included Wahyudi Alfurqon and Muhammad Reizan as Full Stack Developers, Irvan Maulana and Nihlah Auliya as AI Engineers, and Ratu Silma Amalia together with Calvin Constantine Raharjo as Data Scientists. Through close cross-functional collaboration, the team successfully designed, developed, and integrated AI-powered productivity features, recommendation systems, and data-driven solutions to enhance the academic experience for students.",
      visualHtml: (
        <>
          {/* Desktop View */}
          <img 
            src="/images/projects/kawankampus.webp" 
            alt="Kawan Kampus Desktop" 
            className="hidden md:block w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 select-none pointer-events-none"
          />
          {/* Mobile View */}
          <img 
            src="/images/projects/kawankampus2.webp" 
            alt="Kawan Kampus Mobile" 
            className="block md:hidden w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 select-none pointer-events-none"
          />
        </>
      ),
      techs: ["React", "Node.js","Express.js", "PostgreSQL", "Tailwind CSS", "OpenAI API"],
      features: [
        "<strong>AI Academic Assistant:</strong> Provides instant academic assistance through AI-powered conversations, helping students brainstorm ideas, answer study-related questions, and access learning resources more efficiently.",
        "<strong>Smart Task Management:</strong>Organizes academic workloads using a Kanban-based workflow that enables students to manage assignments through To Do, In Progress, and Done stages.",
        "<strong>Gamified Task Progressions:</strong> Level up and tracking algorithms that map productivity patterns against class goals.",
        "<strong>Interactive Campus Map:</strong>Visualizes recommended locations through an integrated digital map, allowing students to discover essential places around campus quickly.",
        "<strong>Favorites & History:</strong>Allows users to save important places, revisit activity history, and manage previously accessed recommendations and AI interactions."
      ],
      contributions: [
        "Designed and implemented responsive UI/UX interfaces to deliver a seamless and user-friendly academic platform.",
        "Developed frontend features, integrated REST APIs, and connected AI-powered services to support student productivity workflows.",
        "Designed PostgreSQL database structures and optimized data management processes for scalability and performance.",
        "Conducted testing, debugging, and performance optimization, contributing to Google PageSpeed scores of 89 on Mobile and 99 on Desktop."
      ],
      demoLink: "https://kawankampus-nine.vercel.app/",
      mockupBg: "bg-gradient-to-br from-slate-100 to-indigo-100",
      mockupIcon: <FaLaptopCode />
    },
    {
      id: 2,
      title: "PASTI",
      category: "Web Application",
      description: "An inclusive compliance dashboard designed around Web Content Accessibility Guidelines (WCAG), delivering instant overlay scripts and automated accessibility compliance audits.",
      visualHtml: (
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-slate-800 flex items-center justify-center p-6 md:p-8 overflow-hidden select-none">
          <div className="absolute inset-0 bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:16px_16px] opacity-60"></div>
          {/* Tablet Mockup */}
          <div className="relative w-[80%] md:w-auto md:h-[82%] aspect-[4/3] transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-rotate-1">
            <div className="absolute inset-0 bg-black/45 rounded-2xl blur-2xl transform translate-y-8 scale-90"></div>
            <div className="relative h-full bg-[#1e1e1e] p-2.5 rounded-2xl border border-neutral-800 shadow-2xl flex flex-col justify-between">
              <div className="relative flex-1 bg-zinc-950 rounded-lg overflow-hidden flex flex-col justify-between p-4">
                <div className="flex justify-between items-center text-neutral-400">
                  <div className="flex items-center gap-1.5">
                    <FaEyeLowVision className="text-emerald-400 text-xs" />
                    <span className="text-[8px] tracking-wide font-bold text-white uppercase">PASTI ACCESSIBILITY</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[7px] text-zinc-500">Contrast: AAA</span>
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  </div>
                </div>
                <div className="my-auto space-y-2 text-center">
                  <div className="text-white text-xs font-bold max-w-[200px] mx-auto">Adaptive User Interfaces for Diverse Abilities</div>
                  <div className="flex justify-center items-center space-x-1 py-1">
                    <span className="w-1 h-3 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                    <span className="w-1 h-6 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-1 h-8 bg-emerald-300 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></span>
                    <span className="w-1 h-5 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                    <span className="w-1 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></span>
                  </div>
                  <p className="text-[7px] text-zinc-400 max-w-[180px] mx-auto leading-relaxed">Empowering digital accessibility compliance, user magnification modules, and screen narration overlays.</p>
                </div>
                <div className="grid grid-cols-2 gap-2 text-left">
                  <div className="bg-zinc-900 border border-zinc-800 rounded p-1.5 flex justify-between items-center">
                    <span className="text-[6px] text-zinc-300">Screen Reader Mode</span>
                    <span className="text-[5px] bg-emerald-500/20 text-emerald-400 px-1 py-0.5 rounded font-bold">ACTIVE</span>
                  </div>
                  <div className="bg-zinc-900 border border-zinc-800 rounded p-1.5 flex justify-between items-center">
                    <span className="text-[6px] text-zinc-300">Color Blindness Filter</span>
                    <span className="text-[5px] bg-zinc-800 text-zinc-400 px-1 py-0.5 rounded font-bold">DEACTIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      techs: ["Next.js", "Express.js", "Puppeteer Web Scraper", "Tailwind CSS", "Aria Labs Engine"],
      features: [
        "<strong>Real-time Audit Scanners:</strong> Highlights color contrast ratio faults, keyboard navigation hitches, and missing image alternative tokens.",
        "<strong>Accessibility Overlay Toolbar:</strong> Instantly allows visitors to activate text-to-speech, layout spacing increases, and colorblind filters.",
        "<strong>Compliance Reporting:</strong> Export compliant and certified PDF layouts detailing strict guidelines met by the organization."
      ],
      contributions: [
        "Created inclusive UI theme controls conforming to strict WCAG AAA color contrast constraints.",
        "Built overlay adjustment controls for layout magnification, text-to-speech narration, and contrast filters.",
        "Implemented backend scanner modules using headless page loaders to audit website accessibility."
      ],
      demoLink: "#",
      mockupBg: "bg-gradient-to-br from-zinc-900 to-slate-800",
      mockupIcon: <FaEyeLowVision />
    },
    {
      id: 3,
      title: "ThriftCycle",
      category: "Mobile Application",
      description: "ThriftCycle is a sustainability-focused mobile application for sharing and exchanging reusable items. Developed by Wahyudi Alfurqon (UI/UX Designer & Front-End Flutter Developer), Muhammad Tri Setianto (Back-End Developer), and Muhammad Reizan (Front-End Developer), the platform promotes responsible consumption through a simple and accessible user experience.",
      visualHtml: (
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center p-6 md:p-8 overflow-hidden select-none">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-60"></div>
          {/* Mobile Mockup */}
          <div className="relative h-[80%] md:h-[85%] aspect-[9/19] transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-2">
            <div className="absolute inset-0 bg-neutral-900/15 rounded-[36px] blur-xl transform translate-y-7 scale-95"></div>
            <div className="relative h-full bg-[#1a1a1a] p-2 rounded-[32px] border border-neutral-800 shadow-2xl flex flex-col justify-between">
              <div className="relative flex-1 bg-white rounded-[24px] overflow-hidden flex flex-col justify-between p-3.5">
                <div className="flex justify-between items-center text-[7px] text-stone-600 px-1">
                  <span className="font-bold">9:41</span>
                  <div className="flex items-center gap-1">
                    <FaWifi />
                    <FaBatteryThreeQuarters />
                  </div>
                </div>
                <div className="my-auto space-y-2.5 flex-1 mt-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <div className="w-3.5 h-3.5 rounded-full bg-stone-900 flex items-center justify-center text-[6px] text-white">♻️</div>
                      <span className="text-[8px] font-bold">ThriftCycle</span>
                    </div>
                    <FaBagShopping className="text-stone-700 text-[8px]" />
                  </div>
                  <div className="bg-[#111111] text-white p-2 rounded-xl text-left relative overflow-hidden">
                    <span className="text-[5px] uppercase text-emerald-400 font-bold">Sustainable Fashion</span>
                    <h5 className="text-[8px] font-bold mt-0.5 leading-tight">Zero Waste Shopping</h5>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    <div className="bg-stone-50 rounded-lg p-1 text-left relative border border-stone-100">
                      <div className="aspect-square bg-stone-200 rounded-md mb-1 flex items-center justify-center text-xs">🧥</div>
                      <span className="text-[5px] text-stone-400">Vintage Jacket</span>
                      <div className="text-[6px] font-bold text-stone-800">$24.00</div>
                      <span className="absolute top-1 right-1 text-[4px] bg-emerald-500/10 text-emerald-600 px-0.5 py-0.2 rounded font-bold">Eco A</span>
                    </div>
                    <div className="bg-stone-50 rounded-lg p-1 text-left relative border border-stone-100">
                      <div className="aspect-square bg-stone-200 rounded-md mb-1 flex items-center justify-center text-xs">👟</div>
                      <span className="text-[5px] text-stone-400">Eco Sneakers</span>
                      <div className="text-[6px] font-bold text-stone-800">$48.00</div>
                      <span className="absolute top-1 right-1 text-[4px] bg-emerald-500/10 text-emerald-600 px-0.5 py-0.2 rounded font-bold">Eco A+</span>
                    </div>
                  </div>
                </div>
                <div className="bg-stone-100 rounded-full py-1.5 px-3 flex justify-between items-center text-[7px] text-stone-600">
                  <FaHouse className="text-stone-900" />
                  <FaMagnifyingGlass />
                  <FaCirclePlus />
                  <FaUser />
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      techs: ["React Native", "Tailwind CSS", "GraphQL", "Supabase", "Stripe API"],
      features: [
        "<strong>Carbon Eco-Rating System:</strong> Instantly evaluates listed fashion items relative to materials and assigns detailed green certifications.",
        "<strong>Circular Exchange Ledger:</strong> Users can effortlessly coordinate direct trades, shipping returns, and local wardrobe drops.",
        "<strong>Stylist AI Feed Selection:</strong> Personalized outfit matching powered by machine vision analysis of user taste portfolios."
      ],
      contributions: [
        "Architected clean card carousel views and screen transition systems for smooth navigation flows.",
        "Integrated Supabase databases and Stripe API to process peer-to-peer checkout transactions.",
        "Designed and coded the algorithm that calculates material eco-ratings for vintage products."
      ],
      demoLink: "#",
      mockupBg: "bg-gradient-to-br from-amber-100 to-orange-100",
      mockupIcon: <FaMobileScreenButton />
    },
    {
      id: 4,
      title: "Sumsel United",
      category: "Information System",
      description: "Sumsel United Web is an official digital platform designed to provide match information, ticket purchasing services, and club updates for supporters of Sumsel United. Developed during an internship at the Dinas Komunikasi dan Informatika Provinsi Sumatera Selatan, Wahyudi Alfurqon contributed as a Full Stack Web Developer, building core system features, developing backend services, designing responsive interfaces, and delivering seamless user experiences through fullstack web development.",
      visualHtml: (
        <div className="absolute inset-0 bg-gradient-to-br from-[#064e3b]/5 to-[#047857]/10 flex items-center justify-center p-6 md:p-8 overflow-hidden select-none">
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
          {/* Laptop Mockup */}
          <div className="relative w-[82%] md:w-auto md:h-[80%] aspect-[16/10] transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-rotate-2">
            <div className="absolute inset-0 bg-black/15 rounded-lg blur-2xl transform translate-y-6 scale-95"></div>
            <div className="relative h-full bg-[#111] p-2 pb-2.5 rounded-2xl border border-neutral-800 shadow-2xl flex flex-col justify-between">
              <div className="relative flex-1 bg-zinc-950 rounded-lg overflow-hidden flex flex-col justify-between">
                <div className="bg-zinc-900 px-3 py-2 flex items-center justify-between border-b border-zinc-800">
                  <div className="flex items-center gap-1">
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-600 flex items-center justify-center text-[7px] text-white">⚽</div>
                    <span className="text-[8px] font-bold text-white tracking-wide">Sumsel United</span>
                  </div>
                  <div className="w-12 h-2.5 rounded-full bg-emerald-500/20 flex items-center justify-center text-[5px] text-emerald-400 font-bold uppercase">LIVE HUB</div>
                </div>
                <div className="p-3 flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start text-left mb-2">
                    <div>
                      <h6 className="text-[8px] font-bold text-zinc-300">Sumatera Sports Analytics</h6>
                      <h5 className="text-xs font-bold text-white leading-tight">Next Match: 22 June 2026</h5>
                    </div>
                    <div className="text-right">
                      <span className="text-[6px] text-zinc-400">Roster Health</span>
                      <div className="text-[8px] font-bold text-emerald-400">96.5% Solid</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 flex-1 items-center">
                    <div className="bg-zinc-900/80 rounded-md p-1.5 border border-zinc-800 text-left">
                      <span className="text-[5px] text-zinc-500">Active Fan Club</span>
                      <h6 className="text-[10px] font-bold text-emerald-400">14.2k</h6>
                      <div className="w-full bg-zinc-800 h-1 rounded-full mt-1 overflow-hidden">
                        <div className="bg-emerald-400 h-full" style={{ width: '78%' }}></div>
                      </div>
                    </div>
                    <div className="bg-zinc-900/80 rounded-md p-1.5 border border-zinc-800 text-left">
                      <span className="text-[5px] text-zinc-500">Win Rate Ratio</span>
                      <h6 className="text-[10px] font-bold text-yellow-400">84.2%</h6>
                      <div className="w-full bg-zinc-800 h-1 rounded-full mt-1 overflow-hidden">
                        <div className="bg-yellow-400 h-full" style={{ width: '84%' }}></div>
                      </div>
                    </div>
                    <div className="bg-zinc-900/80 rounded-md p-1.5 border border-zinc-800 text-left flex flex-col justify-between">
                      <span className="text-[5px] text-zinc-500">Pro Players</span>
                      <h6 className="text-[10px] font-bold text-indigo-400">42 Members</h6>
                      <div className="w-full bg-zinc-800 h-1 rounded-full mt-1 overflow-hidden">
                        <div className="bg-indigo-400 h-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-1 w-16 mx-auto bg-neutral-600 rounded-b-md shadow-md"></div>
          </div>
        </div>
      ),
      techs: ["VueJS", "PostgreSQL", "Tailwind CSS", "D3.js Charts", "Socket.io"],
      features: [
        "<strong>Athletic Performance Analytics:</strong> Monitors fitness levels, player roster speed, and strategic performance ratios in clear visualizations.",
        "<strong>Fan Engagement Gateway:</strong> Streamlines fan membership profiles, digital entry ticketing, and exclusive live game updates.",
        "<strong>Interactive Tactician Board:</strong> Real-time visual playbook editor enabling coaches to update coordinates and notify athletic rosters."
      ],
      contributions: [
        "Developed interactive stadium metrics dashboards using clean vector graphic elements.",
        "Implemented coordinate synchronization systems to support athletic playbook visual editors.",
        "Built secure entry pass validators to facilitate digital stadium check-ins for fan clubs."
      ],
      demoLink: "#",
      mockupBg: "bg-gradient-to-br from-emerald-950 to-teal-900",
      mockupIcon: <FaFutbol />
    }
  ], []);



  // 3. Scroll locking when modal is active
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

  // 4. Drag-to-Scroll handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    isDown.current = true;
    isDragging.current = false;
    startX.current = e.pageX;
    startY.current = e.pageY;
    scrollLeft.current = sliderRef.current.scrollLeft;
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDown.current || !sliderRef.current) return;
    const dx = e.pageX - startX.current;
    const dy = e.pageY - startY.current;

    // Check if dragging distance exceeds threshold to differentiate from a click
    if (Math.abs(dx) > dragThreshold || Math.abs(dy) > dragThreshold) {
      isDragging.current = true;
      e.preventDefault();
      sliderRef.current.scrollLeft = scrollLeft.current - dx * 1.5;
    }
  }, []);

  const handleMouseUp = useCallback(() => {
    isDown.current = false;
  }, []);

  const handleMouseLeave = useCallback(() => {
    isDown.current = false;
  }, []);

  const handleCardClick = useCallback((project: Project) => {
    if (isDragging.current) return; // Prevent clicking during drag
    setActiveProject(project);
    setModalOpen(true);
  }, []);

  // Programmatic Button Scroll Actions
  const scrollPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.clientWidth * 0.7,
        behavior: 'smooth'
      });
    }
  };

  const scrollNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.clientWidth * 0.7,
        behavior: 'smooth'
      });
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => {
      setActiveProject(null);
    }, 500); // Wait for transition animation to end
  };

  return (
    <section id="projects" className={`relative pt-10 md:pt-20 pb-6 md:pb-12 overflow-hidden bg-white ${modalOpen ? 'z-[60]' : 'z-20'}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
        
        {/* Section Label (Top mini label) */}
        <div className="mb-3 md:mb-6 fade-in-init">
          <span className="inline-block border border-black/10 bg-white/60 text-xs px-4 py-1.5 rounded-full tracking-wider uppercase font-medium">
            Projects
          </span>
        </div>

        {/* Top Row Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-end mb-4 md:mb-12">
          {/* Left Heading */}
          <div className="fade-in-init">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111111] leading-[1.1]">
              Building Digital<br/>
              <span className="font-serif italic font-normal text-neutral-800">Experiences</span>
            </h2>
          </div>
          {/* Right Description */}
          <div className="md:text-right fade-in-init">
            <p className="text-base md:text-lg lg:text-xl text-[#666666] max-w-md md:ml-auto leading-relaxed">
              Explore web applications, mobile products, and user-centered design solutions.
            </p>
          </div>
        </div>

        {/* Slider Controls Bar */}
        <div className="flex justify-between items-center mb-4">
          <div className="text-xs font-semibold tracking-wide text-[#666666] flex items-center gap-2 select-none">
            <FaArrowsLeftRight className="opacity-60 animate-pulse text-sm" />
            <span>DRAG OR SWIPE TO EXPLORE</span>
          </div>
          {/* Navigation Arrows */}
          <div className="hidden md:flex items-center space-x-3">
            <button 
              onClick={scrollPrev} 
              aria-label="Previous Slide" 
              className="w-12 h-12 rounded-full border border-black/10 bg-white flex items-center justify-center text-sm text-neutral-800 hover:bg-neutral-900 hover:text-white transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
            >
              <FaArrowLeft />
            </button>
            <button 
              onClick={scrollNext} 
              aria-label="Next Slide" 
              className="w-12 h-12 rounded-full border border-black/10 bg-white flex items-center justify-center text-sm text-neutral-800 hover:bg-neutral-900 hover:text-white transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Drag-to-Scroll Slider Container */}
      <div className="relative w-full">
        <div 
          id="sliderWrapper"
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className="grab-container flex gap-4 md:gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory projects-slider-container pb-6 md:pb-12 select-none scroll-smooth"
        >
          {projects.map((project) => (
            <div 
              key={project.id}
              onClick={() => handleCardClick(project)} 
              className="snap-start flex-shrink-0 w-[calc(100vw-64px)] md:w-[calc(50vw-40px)] lg:w-[calc(50vw-48px)] max-w-[95vw] aspect-[3/4] md:aspect-[16/9] bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 card-transition group cursor-pointer relative fade-up-init"
            >

              {/* Visual Mockup Area */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                {project.visualHtml}
              </div>
              
              {/* Hover Dark Overlay Info Area */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto md:pointer-events-none md:group-hover:pointer-events-auto z-10">
                <div className="transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300 flex justify-between items-end text-white">
                  <div className="space-y-1 pr-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-white/60">
                      {project.category}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-white tracking-tight leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-white/80 line-clamp-2 mt-1">
                      {project.description}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center text-sm hover:scale-105 active:scale-95 transition-all flex-shrink-0 shadow-lg">
                    <FaArrowUpRightFromSquare className="transition-transform duration-300 md:group-hover:rotate-45" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Slider Controls (Centered under the cards) */}
      <div className="flex md:hidden justify-center items-center gap-3 mt-4">
        <button 
          onClick={scrollPrev} 
          aria-label="Previous Slide" 
          className="w-12 h-12 rounded-full border border-black/10 bg-white flex items-center justify-center text-sm text-neutral-800 hover:bg-neutral-900 hover:text-white transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
        >
          <FaArrowLeft />
        </button>
        <button 
          onClick={scrollNext} 
          aria-label="Next Slide" 
          className="w-12 h-12 rounded-full border border-black/10 bg-white flex items-center justify-center text-sm text-neutral-800 hover:bg-neutral-900 hover:text-white transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Case Study / Project Details Modal */}
      <div 
        id="projectModal" 
        onClick={(e) => { if (e.target === e.currentTarget) handleCloseModal(); }}
        className={`fixed inset-0 bg-neutral-900/80 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6 transition-opacity duration-300 ${
          modalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Centered Modal Content Card (Split-pane) */}
        <div 
          className={`w-full max-w-5xl h-[85vh] lg:h-[650px] bg-white shadow-2xl rounded-[32px] overflow-hidden transform transition-all duration-300 ease-out flex flex-col lg:flex-row ${
            modalOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
          }`}
        >
          {activeProject && (
            <>
              {/* Left Side: Mockup Image / Visual HTML */}
              <div className="w-full lg:w-[55%] h-[260px] lg:h-full relative overflow-hidden bg-neutral-100 flex-shrink-0 border-r border-black/5">
                {activeProject.visualHtml}
              </div>

              {/* Right Side: Details Pane */}
              <div className="w-full lg:w-[45%] h-[calc(85vh-260px)] lg:h-full flex flex-col relative bg-white">
                
                {/* Minimalist Close Button */}
                <button 
                  onClick={handleCloseModal} 
                  className="absolute top-6 right-6 w-9 h-9 rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900 flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer z-30" 
                  aria-label="Close Modal"
                >
                  <FaXmark className="text-base" />
                </button>

                {/* Scrollable Content Container */}
                <div data-lenis-prevent className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10 pr-4 scrollbar-hide">
                  
                  {/* Content area */}
                  <div className="space-y-6 mt-4">
                    
                    {/* Category & Title */}
                    <div className="space-y-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse"></span>
                        {activeProject.category}
                      </span>
                      <h3 className="text-2xl lg:text-3xl font-black text-neutral-900 tracking-tight leading-tight uppercase">
                        {activeProject.title}
                      </h3>
                    </div>

                    {/* Metadata Cards */}
                    <div className="grid grid-cols-2 gap-3 border-t border-b border-black/5 py-4">
                      <div className="bg-neutral-50/80 border border-neutral-100 p-3 rounded-2xl flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-sm flex-shrink-0">
                          <FaUser />
                        </div>
                        <div>
                          <span className="text-[9px] uppercase font-bold text-neutral-400 tracking-wider block">
                            Role
                          </span>
                          <span className="text-xs font-bold text-neutral-800">
                            {activeProject.id === 3 ? "UI/UX Designer" : "Fullstack Web Developer"}
                          </span>
                        </div>
                      </div>
                      
                      <div className="bg-neutral-50/80 border border-neutral-100 p-3 rounded-2xl flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-sm flex-shrink-0">
                          {activeProject.id === 3 ? <FaMobileScreenButton /> : <FaLaptopCode />}
                        </div>
                        <div>
                          <span className="text-[9px] uppercase font-bold text-neutral-400 tracking-wider block">
                            Timeline
                          </span>
                          <span className="text-xs font-bold text-neutral-800">
                            {activeProject.id === 1 ? "Nov 2025 - Jan 2026" : activeProject.id === 2 ? "Aug 2025 - Oct 2025" : "Feb 2026 - Present"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Overview */}
                    <div className="space-y-2">
                      <span className="text-[9px] uppercase font-bold text-neutral-400 tracking-wider block">
                        Overview
                      </span>
                      <p className="text-xs text-neutral-600 leading-relaxed font-light">
                        {activeProject.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-2.5">
                      <span className="text-[9px] uppercase font-bold text-neutral-400 tracking-wider block">
                        Tech Stack
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeProject.techs.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="px-2.5 py-1 bg-indigo-50/40 border border-indigo-100/40 text-indigo-700 rounded-md text-[9px] font-bold tracking-wider uppercase transition-colors cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Core Features */}
                    <div className="space-y-3">
                      <span className="text-[9px] uppercase font-bold text-neutral-400 tracking-wider block">
                        Core Features
                      </span>
                      <ul className="space-y-2.5 text-neutral-700">
                        {activeProject.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-xs leading-relaxed">
                            <span className="w-5 h-5 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px]">
                              <FaCircleCheck />
                            </span>
                            <span 
                              className="text-neutral-600"
                              dangerouslySetInnerHTML={{ __html: feature }}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* My Contribution */}
                    <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/50 space-y-3">
                      <span className="text-[9px] uppercase font-bold text-neutral-400 tracking-wider flex items-center gap-1.5">
                        <span>My Contribution</span>
                      </span>
                      <ul className="space-y-2 text-xs text-neutral-600 font-light list-disc pl-4 leading-relaxed">
                        {activeProject.contributions.map((contribution, idx) => (
                          <li key={idx}>
                            {contribution}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                  
                </div>

                {/* Fixed Footer Action */}
                <div className="p-6 md:px-8 border-t border-black/5 bg-white flex-shrink-0 z-20">
                  <a 
                    id="modalActionLink" 
                    href={activeProject?.demoLink || '#'} 
                    target="_blank" 
                    rel="noreferrer noopener"
                    className="w-full py-3.5 bg-gradient-to-r from-neutral-900 to-neutral-800 hover:from-indigo-600 hover:to-indigo-500 active:scale-[0.98] rounded-full text-xs font-bold text-white transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
                  >
                    <span>Check Live Project</span>
                    <FaArrowUpRightFromSquare className="text-xs" />
                  </a>
                </div>

              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
