import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
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

      {/* 6. Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-12 w-full border-t border-[#D7E2EA]/5 flex flex-col items-center relative z-20">
        <div className="w-full max-w-5xl flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-[#D7E2EA]/20 flex items-center justify-center hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA]/50 transition-all duration-300"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-[#D7E2EA]/20 flex items-center justify-center hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA]/50 transition-all duration-300"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-[#D7E2EA]/20 flex items-center justify-center hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA]/50 transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>

          <div className="flex flex-col sm:items-end gap-1 text-[10px] sm:text-xs font-light tracking-widest uppercase opacity-40 text-center sm:text-right">
            <span>&copy; {new Date().getFullYear()} Websy-Startup. All rights reserved.</span>
            <span>Designed &amp; Developed for Moatez</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
