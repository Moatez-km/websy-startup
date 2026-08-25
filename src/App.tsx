import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';


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
      <footer className="bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 pt-20 pb-12 w-full border-t border-[#D7E2EA]/5 flex flex-col items-center relative z-20">
        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 lg:gap-12">

          {/* Column 1 - Brand Info */}
          <div className="flex flex-col gap-4">
            <h3 className="hero-heading font-black uppercase text-xl sm:text-2xl tracking-tight select-none">
              Websy Service
            </h3>
            <p className="text-xs sm:text-sm font-light text-[#D7E2EA]/60 leading-relaxed">
              Eine Premium-Digitalagentur, die moderne Websites, maßgeschneidertes Marketing und außergewöhnliche Markenidentitäten kreiert, um lokalen Unternehmen zum Erfolg zu verhelfen.
            </p>
          </div>

          {/* Column 2 - Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[#D7E2EA] font-semibold text-xs sm:text-sm tracking-wider uppercase">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm font-light text-[#D7E2EA]/60">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="hover:text-white transition-colors duration-300 hover:underline underline-offset-4 cursor-pointer text-left"
                >
                  Startseite
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-white transition-colors duration-300 hover:underline underline-offset-4 cursor-pointer text-left"
                >
                  Über uns
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors duration-300 hover:underline underline-offset-4 cursor-pointer text-left"
                >
                  Leistungen
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="hover:text-white transition-colors duration-300 hover:underline underline-offset-4 cursor-pointer text-left"
                >
                  Projekte
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 - Information */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[#D7E2EA] font-semibold text-xs sm:text-sm tracking-wider uppercase">
              Informationen
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm font-light text-[#D7E2EA]/60">
              <li>
                <a
                  href="tel:+4917654452376"
                  className="hover:text-white transition-colors duration-300 hover:underline underline-offset-4"
                >
                  +49 176 544 52376
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@websy-service.de"
                  className="hover:text-white transition-colors duration-300 hover:underline underline-offset-4 break-all"
                >
                  info@websy-service.de
                </a>
              </li>
              <li>
                <span className="leading-relaxed">
                  Juri-Gagarin-Ring 22, 99084 Erfurt, Thüringen - Deutschland.
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4 - Opening Hours */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[#D7E2EA] font-semibold text-xs sm:text-sm tracking-wider uppercase">
              Öffnungszeiten
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm font-light text-[#D7E2EA]/60">
              <li className="flex justify-between">
                <span>Mo - Do:</span>
                <span className="font-medium text-[#D7E2EA]/80">9:00 - 21:00 Uhr</span>
              </li>
              <li className="flex justify-between">
                <span>Fr:</span>
                <span className="font-medium text-[#D7E2EA]/80">8:00 - 21:00 Uhr</span>
              </li>
              <li className="flex justify-between">
                <span>Sa:</span>
                <span className="font-medium text-[#D7E2EA]/80">9:30 - 15:00 Uhr</span>
              </li>
              <li className="flex justify-between text-[#D7E2EA]/40">
                <span>So:</span>
                <span>Geschlossen</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section - Copyright & Social Links */}
        <div className="w-full max-w-5xl border-t border-[#D7E2EA]/10 mt-16 pt-8 flex flex-col items-center gap-6">


          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-[#D7E2EA]/20 flex items-center justify-center text-[#D7E2EA]/60 hover:text-white hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA]/50 transition-all duration-300"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-[#D7E2EA]/20 flex items-center justify-center text-[#D7E2EA]/60 hover:text-white hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA]/50 transition-all duration-300"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-[#D7E2EA]/20 flex items-center justify-center text-[#D7E2EA]/60 hover:text-white hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA]/50 transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-[#D7E2EA]/20 flex items-center justify-center text-[#D7E2EA]/60 hover:text-white hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA]/50 transition-all duration-300"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
