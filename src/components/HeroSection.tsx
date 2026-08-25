import React, { useState } from 'react';
import { ContactButton } from './ContactButton';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { Menu, X } from 'lucide-react';

interface HeroSectionProps {
  onScrollToSection: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0C0C0C]">
      {/* Absolute Portrait */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[130vw] max-w-[680px] sm:w-[800px] md:w-[950px] lg:w-[1100px] xl:w-[1200px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-none">
        <FadeIn delay={0.6} y={30} duration={0.8} className="w-full h-full flex justify-center items-end">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full h-full pointer-events-auto"
          >
            <img
              src="images/Avatar-Hero.avif"
              alt="Moatez Portrait"
              className="w-full h-auto object-contain select-none"
              draggable="false"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Navbar */}
      <div className="w-full flex justify-center px-6 pt-6 md:pt-8 z-20 relative">
        <FadeIn
          delay={0}
          y={-20}
          as="nav"
          className="bg-white/60 backdrop-blur-md rounded-2xl shadow-sm pl-3 sm:pl-4 pr-2 py-2 w-full sm:w-auto flex items-center justify-between sm:justify-start gap-3 sm:gap-6 relative"
        >
          {/* Logo SVG */}
          <svg width="32" height="32" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
            <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" fill="black" />
          </svg>

          {/* Links */}
          <div className="hidden sm:flex items-center gap-3 sm:gap-6">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                onScrollToSection('about');
              }}
              className="text-gray-800 text-sm font-medium hover:opacity-60 transition-opacity whitespace-nowrap select-none"
            >
              Über mich
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                onScrollToSection('services');
              }}
              className="text-gray-800 text-sm font-medium hover:opacity-60 transition-opacity whitespace-nowrap select-none"
            >
              Leistungen
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                onScrollToSection('projects');
              }}
              className="text-gray-800 text-sm font-medium hover:opacity-60 transition-opacity whitespace-nowrap select-none"
            >
              Projekte
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onScrollToSection('contact');
              }}
              className="text-gray-800 text-sm font-medium hover:opacity-60 transition-opacity whitespace-nowrap select-none"
            >
              Kontakt
            </a>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => onScrollToSection('services')}
            className="hidden sm:block bg-black text-white text-sm font-medium px-4 sm:px-5 py-2 rounded-xl hover:bg-gray-800 transition-colors whitespace-nowrap"
          >
            Projekt starten
          </button>

          {/* Mobile Sandwich Icon Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-gray-800 p-1.5 hover:bg-black/5 rounded-lg transition-colors ml-auto flex items-center justify-center"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Mobile Dropdown Menu */}
          {menuOpen && (
            <div className="absolute top-[calc(100%+8px)] left-0 right-0 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 p-4 flex flex-col gap-4 sm:hidden z-30">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  onScrollToSection('about');
                }}
                className="text-gray-800 text-sm font-semibold hover:opacity-60 transition-opacity py-1.5 border-b border-gray-100"
              >
                Über mich
              </a>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  onScrollToSection('services');
                }}
                className="text-gray-800 text-sm font-semibold hover:opacity-60 transition-opacity py-1.5 border-b border-gray-100"
              >
                Leistungen
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  onScrollToSection('projects');
                }}
                className="text-gray-800 text-sm font-semibold hover:opacity-60 transition-opacity py-1.5 border-b border-gray-100"
              >
                Projekte
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  onScrollToSection('contact');
                }}
                className="text-gray-800 text-sm font-semibold hover:opacity-60 transition-opacity py-1.5 border-b border-gray-100"
              >
                Kontakt
              </a>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onScrollToSection('services');
                }}
                className="bg-black text-white text-sm font-medium px-4 py-2.5 rounded-xl hover:bg-gray-800 transition-colors w-full text-center"
              >
                Projekt starten
              </button>
            </div>
          )}
        </FadeIn>
      </div>

      {/* Hero Heading */}
      <div className="w-full overflow-hidden flex items-center justify-center z-0 px-6">
        <FadeIn delay={0.15} y={40} className="w-full text-center mt-6 sm:mt-4 md:-mt-5">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[12vw] select-none">
            Websy Service
          </h1>
        </FadeIn>
      </div>

      {/* Spacer */}
      <div className="flex-1 min-h-[2rem]" />

      {/* Bottom Bar */}
      <div className="w-full flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px] select-none"
          >
            Webdesign, QR-Speisekarten & digitale Visitenkarten für kleine Unternehmen in Erfurt.
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={() => onScrollToSection('contact')} />
        </FadeIn>
      </div>
    </section>
  );
};
