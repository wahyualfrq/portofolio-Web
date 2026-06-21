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
  desktopImage: string;
  mobileImage: string;
  timeline: string;
  techs: string[];
  features: string[];
  contributions: string[];
  demoLink: string;
  mockupBg: string; // Gradient background classes for modal cover
  mockupIcon: React.ReactNode; // Icon for modal cover
  secondaryLink?: {
    label: string;
    url: string;
  };
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
      desktopImage: "/images/projects/kawankampus.webp",
      mobileImage: "/images/projects/kawankampus2.png",
      timeline: "Feb 2026 - Juli 2026",
      techs: ["React", "Node.js","Express.js", "PostgreSQL", "Tailwind CSS", "OpenAI API"],
      features: [
        "<strong>AI Academic Assistant:</strong> Provides instant academic support through AI-powered conversations, helping students brainstorm ideas, answer study-related questions, and access learning resources.",
        "<strong>Kanban Task Management:</strong> Organizes academic workloads using a structured workflow with To Do, In Progress, and Done stages to track assignments efficiently.",
        "<strong>Location-Based Recommendations:</strong> Helps students discover nearby places such as photocopy services, study spaces, restaurants, and stationery stores based on campus location and preferences.",
        "<strong>Interactive Campus Map:</strong> Displays recommended locations through an integrated digital map for easier navigation and exploration around campus.",
        "<strong>Favorites & Activity History:</strong> Allows users to save important locations, revisit previous interactions, and manage recommendation and AI usage history."
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
      title: "ThriftCycle",
      category: "Mobile Design",
      description: "ThriftCycle is a sustainability-focused mobile application for sharing and exchanging reusable items. Developed by Wahyudi Alfurqon (UI/UX Designer & Front-End Flutter Developer), Muhammad Tri Setianto (Back-End Developer), and Muhammad Reizan (Front-End Developer), the platform promotes responsible consumption through a simple and accessible user experience.",
      desktopImage: "/images/projects/thriftscycle.webp",
      mobileImage: "/images/projects/thriftcycle2.png",
      timeline: "Mei 2025 - Juni 2025",
      techs: ["Figma", "Flutter", "Laravel", "Mysql"],
      features: [
        "<strong>Item Sharing Platform:</strong> Allows users to donate, exchange, and discover reusable items within the community.",
        "<strong>Quick Item Listing:</strong> Users can easily upload item photos, descriptions, and availability details.",
        "<strong>Sustainable Lifestyle Support:</strong> Encourages waste reduction by extending the lifecycle of usable products.",
        "<strong>User-Friendly Mobile Experience:</strong> Designed with intuitive navigation and responsive interactions for seamless usage.",
        "<strong>Flutter-Powered Performance:</strong> Built using Flutter and Dart to deliver a fast and consistent cross-platform experience."
      ],
      contributions: [
        "Designed the complete UI/UX experience, including user flows, wireframes, and high-fidelity mobile interfaces.",
        "Developed responsive frontend features using Flutter and Dart to ensure smooth user interactions.",
        "Collaborated closely with backend development to integrate application features and data flows.",
        "Contributed to project refinement and testing, helping the application achieve an evaluation score of 98/100."
      ],
      demoLink: "https://www.figma.com/proto/yfUo2lWGXfAXikwaTMDJms/ThriftCycle?node-id=1-2112&t=r54kPAclrTaJYj3q-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A2&starting-point-node-id=1%3A2112&show-proto-sidebar=1",
      mockupBg: "bg-gradient-to-br from-amber-100 to-orange-100",
      mockupIcon: <FaMobileScreenButton />,
      secondaryLink: {
        label: "Figma Project",
        url: "https://www.figma.com/design/yfUo2lWGXfAXikwaTMDJms/ThriftCycle?node-id=1-2&t=pFqVj3Yx45lzpo4G-1"
      }
    },
    {
      id: 3,
      title: "Sumsel United",
      category: "Information System",
      description: "Sumsel United Web is an official digital platform designed to provide match information, ticket purchasing services, and club updates for supporters of Sumsel United. Developed during an internship at the Dinas Komunikasi dan Informatika Provinsi Sumatera Selatan, Wahyudi Alfurqon contributed as a Full Stack Web Developer, building core system features, developing backend services, designing responsive interfaces, and delivering seamless user experiences through fullstack web development.",
      desktopImage: "/images/projects/sumselunited.webp",
      mobileImage: "/images/projects/sumselunited2.png",
      timeline: "Oct 2025 - Des 2025",
      techs: ["Laravel", "My Sql", "Tailwind CSS", "PHP"],
      features: [
        "<strong>Match Information Hub:</strong> Access match schedules, results, standings, and team updates in one centralized platform.",
        "<strong>Online Ticketing System:</strong> Purchase match tickets through a streamlined and user-friendly checkout process.",
        "<strong>Official Club News:</strong> Receive verified announcements, match reports, and club-related information directly from the platform.",
        "<strong>Admin Management Dashboard:</strong> Manage match data, news content, ticketing information, and user activities efficiently.",
        "<strong>Responsive User Experience:</strong> Optimized for desktop and mobile devices to ensure accessibility across platforms."
      ],
      contributions: [
        "Developed the fullstack web application using Laravel 12 and MySQL.",
        "Implemented 45+ use cases covering both public user and administrative workflows.",
        "Built 15+ backend features including match management, standings, news, and ticketing systems.",
        "Designed and developed 20+ responsive user interfaces using Tailwind CSS.",
        "Integrated frontend and backend services to support complete end-to-end user journeys."
      ],
      demoLink: "#",
      mockupBg: "bg-gradient-to-br from-emerald-950 to-teal-900",
      mockupIcon: <FaFutbol />
    },
    {
      id: 4,
      title: "EcoCycle",
      category: "Mobile Design",
      description: "EcoCycle is an AI-powered mobile application prototype designed to encourage sustainable waste management through education, community engagement, and personalized recycling experiences. The project was developed for the SIFEST Competition hosted by Universitas Kristen Satya Wacana (UKSW) by a team consisting of Wahyudi Alfurqon (UI Designer), Muhammad Radja Juang Jamemiko, and Migel Orvin. As the UI Designer, Wahyudi was responsible for crafting the overall user experience and visual design, resulting in a user-centered prototype that achieved a final score of 89.33 from the competition judges.",
      desktopImage: "/images/projects/ecocycle.webp",
      mobileImage: "/images/projects/ecocycle2.png",
      timeline: "Sep 2025",
      techs: ["Figma"],
      features: [
        "<strong>Smart Recycling Education:</strong> Provides educational content and interactive guidance to encourage sustainable waste management habits.",
        "<strong>AI-Powered Personalization:</strong> Delivers tailored recommendations and recycling insights based on user behavior and preferences.",
        "<strong>Eco Community Network:</strong> Connects users with recycling banks, green businesses, and eco-conscious communities.",
        "<strong>Reward-Based Sustainability:</strong> Encourages positive environmental actions through engagement and achievement-driven experiences.",
        "<strong>Accessible User Experience:</strong> Designed with usability and inclusivity principles to ensure a seamless experience for diverse users."
      ],
      contributions: [
        "Designed the complete UI/UX experience and visual identity of the application using Figma.",
        "Created 30+ mobile screens and designed 3 core AI-powered features focused on accessibility and personalization.",
        "Developed responsive and interactive prototypes to validate user flows across normal and emergency scenarios.",
        "Collaborated with team members to maintain design consistency and ensure timely project delivery.",
        "Presented the final prototype to competition judges, contributing to a final score of 89.33."
      ],
      demoLink: "https://www.figma.com/proto/3AYo5eQXG0KpsGJbfx0joF/ECOCYCLE_KERANGAJAIB?node-id=6-100&t=Gmp8SSE3fR7Keq3N-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A3&starting-point-node-id=7%3A5&show-proto-sidebar=1",
      mockupBg: "bg-gradient-to-br from-emerald-100 to-green-200",
      mockupIcon: <FaLaptopCode />,
      secondaryLink: {
        label: "Figma Project",
        url: "https://www.figma.com/design/3AYo5eQXG0KpsGJbfx0joF/ECOCYCLE_KERANGAJAIB?node-id=1-3&t=RO6XG7TO9w2FgeCu-1"
      }
    },
    {
      id: 5,
      title: "Pitch Planner",
      category: "Web Application",
      description: "IPL Match Scheduler is a web-based scheduling optimization system developed as an academic project for the Algorithmic Strategy course. The project compares the effectiveness of Greedy and Backtracking algorithms in generating Indian Premier League (IPL) 2022 match schedules while minimizing conflicts related to match timing and venue allocation. Developed independently by Wahyudi Alfurqon as a Full Stack Developer, the system demonstrates how algorithmic approaches can solve real-world scheduling problems through efficient decision-making and optimization techniques.",
      desktopImage: "/images/projects/pitchplanner.webp",
      mobileImage: "/images/projects/pitchplanner2.png",
      timeline: "Mei 2026 - Jun 2026",
      techs: ["React.Js", "Rest API"],
      features: [
        "<strong>Automated Match Scheduling:</strong> Generates IPL 2022 match schedules automatically based on predefined constraints and optimization rules.",
        "<strong>Greedy Algorithm Optimization:</strong> Selects locally optimal scheduling decisions to reduce conflicts and improve efficiency.",
        "<strong>Backtracking Comparison:</strong> Evaluates alternative scheduling possibilities to compare optimization outcomes against the Greedy approach.",
        "<strong>Conflict Detection:</strong> Identifies scheduling issues such as overlapping match times and venue conflicts.",
        "<strong>Interactive Schedule Visualization:</strong> Displays generated schedules and optimization results through a responsive React-based interface."
      ],
      contributions: [
        "Designed and developed the complete web application as a Full Stack Developer.",
        "Implemented Greedy and Backtracking algorithms to compare scheduling optimization strategies.",
        "Integrated IPL 2022 match data through REST API services and processed scheduling constraints dynamically.",
        "Built responsive interfaces using React to visualize schedules, conflicts, and optimization results.",
        "Conducted algorithm performance analysis to evaluate efficiency and scheduling accuracy."
      ],
      demoLink: "https://pitchplanner-demo.netlify.app/",
      mockupBg: "bg-gradient-to-br from-purple-100 to-indigo-100",
      mockupIcon: <FaLaptopCode />
    },
    {
      id: 6,
      title: "PT. Rex Technology",
      category: "Company Profile Website",
      description: "Rextechnology Company Profile is a multilingual corporate website developed for PT Rextechnology to strengthen the company's digital presence and showcase its services through a modern and professional web experience. The project was developed by Wahyudi Alfurqon as a Full Stack Developer, responsible for designing and implementing a scalable multipage architecture, bilingual content support, responsive user interfaces, and performance optimization. Built with Next.js, the website achieved Lighthouse scores of 98 Performance, 96 Best Practices, and 91 SEO, ensuring an optimized experience across devices and search engines.",
      desktopImage: "/images/projects/rextechnology.webp",
      mobileImage: "/images/projects/rextechnology2.png",
      timeline: "Mar 2026 - Apr 2026",
      techs: ["Next.js", "TypeScript", "Tailwind CSS"],
      features: [
        "<strong>Corporate Company Profile:</strong> Presents company information, services, and business solutions through a professional digital presence.",
        "<strong>Multi-Page Architecture:</strong> Structured navigation and dedicated pages for improved content organization and scalability.",
        "<strong>Multi-Language Support:</strong> Enables visitors to access content in multiple languages for broader audience reach.",
        "<strong>Responsive Design:</strong> Delivers a seamless experience across desktop, tablet, and mobile devices.",
        "<strong>Performance & SEO Optimization:</strong> Optimized for fast loading, accessibility, search engine visibility, and best development practices."
      ],
      contributions: [
        "Designed and developed the complete company profile website using Next.js with a scalable multipage architecture.",
        "Implemented bilingual support to provide seamless content accessibility for multiple audiences.",
        "Built responsive and professional user interfaces optimized for desktop, tablet, and mobile devices.",
        "Optimized website performance, accessibility, and SEO, achieving Lighthouse scores of 98 Performance, 96 Best Practices, and 91 SEO.",
        "Managed both frontend implementation and deployment preparation to ensure production readiness."
      ],
      demoLink: "https://rextech.id/en/",
      mockupBg: "bg-gradient-to-br from-zinc-800 to-neutral-900",
      mockupIcon: <FaLaptopCode />
    },
    {
      id: 7,
      title: "Skillora",
      category: "Web Design",
      description: "Skillora is an AI-powered career development platform concept designed to help students and fresh graduates understand their personalities, explore career opportunities, and improve professional readiness through AI-assisted features. The project was created by Wahyudi Alfurqon, Adit Jansa, and Afna Putra Yulianto as a UI/UX Design Team, focusing on user research, interface design, user flow, and interactive prototyping.",
      desktopImage: "/images/projects/skillora.webp",
      mobileImage: "/images/projects/skillora2.png",
      timeline: "Nov 2025",
      techs: ["Figma"],
      features: [
        "<strong>Lora Personality Test:</strong> Interactive personality assessment designed to identify user strengths and work preferences.",
        "<strong>Job Matching Experience:</strong> Personalized job recommendation flow based on personality and career interests.",
        "<strong>AI Career Mentor:</strong> Conversational career guidance interface powered by AI-driven assistance.",
        "<strong>CV Analyzer:</strong> Resume evaluation experience that provides insights and improvement suggestions."
      ],
      contributions: [
        "Designed user flows, wireframes, and high-fidelity interfaces for key platform features.",
        "Created interactive prototypes for personality testing, job matching, CV analysis, and AI mentoring experiences.",
        "Conducted UI exploration and design system development to ensure visual consistency.",
        "Collaborated with the design team to deliver a user-centered and engaging product experience."
      ],
      demoLink: "https://www.figma.com/proto/xs5IUbIpySt7Z2GXUOQMOA/SKILLORA-RAJAWALI-CREATIFY?node-id=129-312&p=f&t=YtfiiJXqxmzoItoA-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=129%3A312",
      mockupBg: "bg-gradient-to-br from-blue-100 to-sky-200",
      mockupIcon: <FaLaptopCode />,
      secondaryLink: {
        label: "Figma Project",
        url: "https://www.figma.com/design/xs5IUbIpySt7Z2GXUOQMOA/SKILLORA-RAJAWALI-CREATIFY?node-id=0-1&t=5uQwB3TzVPAubdVN-1"
      }
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
                <img 
                  src={project.desktopImage} 
                  alt={`${project.title} Desktop`} 
                  className="hidden md:block w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 select-none pointer-events-none"
                />
                <img 
                  src={project.mobileImage} 
                  alt={`${project.title} Mobile`} 
                  className="block md:hidden w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 select-none pointer-events-none"
                />
              </div>
              
              {/* Hover Dark Overlay Info Area */}
              <div className="absolute bottom-0 left-0 right-0 h-[50%] md:h-[55%] bg-gradient-to-t from-black/95 via-black/50 to-transparent flex flex-col justify-end p-6 md:p-8 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto md:pointer-events-none md:group-hover:pointer-events-auto z-10">
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
                <img 
                  src={activeProject.desktopImage} 
                  alt={activeProject.title} 
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
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
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                        {activeProject.category}
                      </span>
                      <h3 className="text-2xl lg:text-3xl font-black text-neutral-900 tracking-tight leading-tight uppercase">
                        {activeProject.title}
                      </h3>
                    </div>

                    {/* Metadata Cards */}
                    <div className="grid grid-cols-2 gap-3 border-t border-b border-black/5 py-4">
                      <div className="bg-neutral-50/80 border border-neutral-100 p-3 rounded-2xl flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-sm flex-shrink-0">
                          <FaUser />
                        </div>
                        <div>
                          <span className="text-[9px] uppercase font-bold text-neutral-400 tracking-wider block">
                            Role
                          </span>
                          <span className="text-xs font-bold text-neutral-800">
                            {["EcoCycle", "ThriftCycle", "Skillora"].includes(activeProject.title) 
                              ? "UI/UX Designer" 
                              : "Fullstack Web Developer"}
                          </span>
                        </div>
                      </div>
                      
                      <div className="bg-neutral-50/80 border border-neutral-100 p-3 rounded-2xl flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-sm flex-shrink-0">
                          {activeProject.category === "Mobile Application" ? <FaMobileScreenButton /> : <FaLaptopCode />}
                        </div>
                        <div>
                          <span className="text-[9px] uppercase font-bold text-neutral-400 tracking-wider block">
                            Timeline
                          </span>
                          <span className="text-xs font-bold text-neutral-800">
                            {activeProject.timeline}
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
                            className="px-2.5 py-1 bg-blue-50/40 border border-blue-100/40 text-blue-700 rounded-md text-[9px] font-bold tracking-wider uppercase transition-colors cursor-default"
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
                            <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px]">
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
                  {activeProject?.secondaryLink ? (
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a 
                        href={activeProject.demoLink} 
                        target="_blank" 
                        rel="noreferrer noopener"
                        className="flex-1 py-3.5 bg-gradient-to-r from-neutral-900 to-neutral-800 hover:from-blue-600 hover:to-blue-500 active:scale-[0.98] rounded-full text-xs font-bold text-white transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
                      >
                        <span>Check Live Demo</span>
                        <FaArrowUpRightFromSquare className="text-xs" />
                      </a>
                      <a 
                        href={activeProject.secondaryLink.url} 
                        target="_blank" 
                        rel="noreferrer noopener"
                        className="flex-1 py-3.5 bg-neutral-100 hover:bg-neutral-200 active:scale-[0.98] rounded-full text-xs font-bold text-neutral-800 transition-all duration-300 border border-black/5 flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
                      >
                        <span>{activeProject.secondaryLink.label}</span>
                        <FaArrowUpRightFromSquare className="text-xs" />
                      </a>
                    </div>
                  ) : activeProject?.demoLink === "#" || !activeProject?.demoLink ? (
                    <button 
                      disabled
                      className="w-full py-3.5 bg-neutral-100 text-neutral-400 rounded-full text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-not-allowed uppercase tracking-wider border border-black/5"
                    >
                      <span>Live Demo Coming Soon</span>
                    </button>
                  ) : (
                    <a 
                      id="modalActionLink" 
                      href={activeProject.demoLink} 
                      target="_blank" 
                      rel="noreferrer noopener"
                      className="w-full py-3.5 bg-gradient-to-r from-neutral-900 to-neutral-800 hover:from-blue-600 hover:to-blue-500 active:scale-[0.98] rounded-full text-xs font-bold text-white transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
                    >
                      <span>Check Live Project</span>
                      <FaArrowUpRightFromSquare className="text-xs" />
                    </a>
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
