import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { Mail, Github, Linkedin, MessageSquare } from 'lucide-react';
import { FadeIn } from './components/FadeIn';

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="main-wrapper bg-[#0C0C0C]">
      {/* 1. Hero Section */}
      <HeroSection onScrollToSection={scrollToSection} />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. About Section */}
      <AboutSection onScrollToSection={scrollToSection} />

      {/* 4. Services Section */}
      <ServicesSection />

      {/* 5. Projects Section */}
      <ProjectsSection />

      {/* Footer / Contact Block */}
      <footer
        id="contact"
        className="bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-20 w-full border-t border-[#D7E2EA]/10 flex flex-col items-center relative z-20"
      >
        <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-center gap-10">
          <FadeIn delay={0} y={30} className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <h2 className="hero-heading font-black uppercase text-4xl sm:text-5xl md:text-6xl tracking-tight leading-none select-none">
              Start a project
            </h2>
            <p className="text-sm sm:text-base font-light uppercase tracking-widest opacity-60">
              Let&apos;s build something incredible together
            </p>
          </FadeIn>

          <FadeIn delay={0.2} y={30} className="flex flex-col items-center md:items-end gap-4">
            <a
              href="mailto:moatez@websy.com"
              className="flex items-center gap-3 bg-[#D7E2EA]/5 hover:bg-[#D7E2EA]/10 border border-[#D7E2EA]/20 hover:border-[#D7E2EA]/40 px-6 py-4 rounded-full text-base sm:text-lg font-medium tracking-wide uppercase transition-all duration-300 select-none"
            >
              <Mail className="w-5 h-5" />
              moatez@websy.com
            </a>

            <div className="flex gap-4 mt-2">
              <a
                href="#"
                className="w-12 h-12 rounded-full border border-[#D7E2EA]/20 flex items-center justify-center hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA]/50 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full border border-[#D7E2EA]/20 flex items-center justify-center hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA]/50 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full border border-[#D7E2EA]/20 flex items-center justify-center hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA]/50 transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </FadeIn>
        </div>

        <div className="w-full max-w-5xl border-t border-[#D7E2EA]/10 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm font-light tracking-wide uppercase opacity-40">
          <span>&copy; {new Date().getFullYear()} Websy-Startup. All rights reserved.</span>
          <span>Designed &amp; Developed for Moatez</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
