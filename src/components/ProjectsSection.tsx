import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { LiveProjectButton } from './LiveProjectButton';
import { FadeIn } from './FadeIn';

const PROJECTS = [
  {
    num: '01',
    category: 'Client',
    name: 'Nextlevel Studio',
    img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    img3: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    num: '02',
    category: 'Personal',
    name: 'Aura Brand Identity',
    img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    img3: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    num: '03',
    category: 'Client',
    name: 'Solaris Digital',
    img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    img3: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
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
            />
            <img
              src={project.img2}
              alt={`${project.name} layout 2`}
              className="w-full object-cover rounded-[20px] sm:rounded-[35px] md:rounded-[40px] flex-grow"
              style={{ height: 'clamp(140px, 20vw, 300px)' }}
            />
          </div>

          {/* Right Column (60%) */}
          <div className="col-span-6 h-full">
            <img
              src={project.img3}
              alt={`${project.name} layout 3`}
              className="w-full h-full object-cover rounded-[20px] sm:rounded-[35px] md:rounded-[40px]"
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
