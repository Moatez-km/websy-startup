import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { LiveProjectButton } from './LiveProjectButton';
import { FadeIn } from './FadeIn';

const PROJECTS = [
  {
    num: '01',
    category: 'Client',
    name: 'Bohnea Café & Rösterei',
    img1: 'images/bohnea3.png',
    img2: 'images/bohnea2.png',
    img3: 'images/bohnea1.png',
  },
  {
    num: '02',
    category: 'Client',
    name: 'Roofing Company',
    img1: 'images/roofing3.png',
    img2: 'images/roofing2.png',
    img3: 'images/roofing1.png',
  },
  {
    num: '03',
    category: 'Client',
    name: 'Café & Bar Rosé',
    img1: 'images/rose2.png',
    img2: 'images/rose3.png',
    img3: 'images/rose1.png',
  },
];

interface ProjectCardProps {
  project: typeof PROJECTS[0];
  index: number;
  total: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, total }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position of the card's container relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] flex justify-center items-start sticky w-full"
      style={{
        top: `calc(${index * 28}px + clamp(6rem, 10vw, 8rem))`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6 justify-between h-[75vh] overflow-hidden select-none"
      >
        {/* Top Row */}
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              style={{ fontSize: 'clamp(2.5rem, 8vw, 90px)' }}
              className="font-black text-[#D7E2EA] leading-none select-none"
            >
              {project.num}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA] text-xs sm:text-sm font-light uppercase tracking-wider opacity-60">
                {project.category}
              </span>
              <h3 className="text-[#D7E2EA] text-sm sm:text-lg md:text-2xl font-bold uppercase tracking-tight">
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton />
        </div>

        {/* Bottom Row - Two Column Image Grid */}
        <div className="grid grid-cols-10 gap-3 sm:gap-4 md:gap-6 flex-grow overflow-hidden items-stretch">
          {/* Left Column (40%) */}
          <div className="col-span-4 flex flex-col gap-3 sm:gap-4 md:gap-6 justify-between h-full">
            <img
              src={project.img1}
              alt={`${project.name} layout 1`}
              className="w-full object-cover rounded-[20px] sm:rounded-[35px] md:rounded-[40px] flex-shrink-0"
              style={{ height: 'clamp(110px, 15vw, 210px)' }}
              loading="lazy"
            />
            <img
              src={project.img2}
              alt={`${project.name} layout 2`}
              className="w-full object-cover rounded-[20px] sm:rounded-[35px] md:rounded-[40px] flex-grow"
              style={{ height: 'clamp(140px, 20vw, 300px)' }}
              loading="lazy"
            />
          </div>

          {/* Right Column (60%) */}
          <div className="col-span-6 h-full">
            <img
              src={project.img3}
              alt={`${project.name} layout 3`}
              className="w-full h-full object-contain rounded-[20px] sm:rounded-[35px] md:rounded-[40px]"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 pb-32 -mt-10 sm:-mt-12 md:-mt-14 z-10 relative flex flex-col items-center"
    >
      <div className="w-full max-w-5xl mb-16 sm:mb-20 md:mb-28 text-center">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase text-[clamp(3rem,12vw,160px)] leading-none select-none">
            Project
          </h2>
        </FadeIn>
      </div>

      <div className="w-full max-w-5xl flex flex-col gap-[10vh]">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.num}
            project={project}
            index={index}
            total={PROJECTS.length}
          />
        ))}
      </div>
    </section>
  );
};
