import React, { useState } from 'react';
import { FAQSection } from './FAQSection';
import { FadeIn } from './FadeIn';
import { Menu, X, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const FaqApp: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="main-wrapper min-h-screen bg-[#0C0C0C] flex flex-col justify-between relative text-[#D7E2EA]">
      {/* Navbar */}
      <div className="w-full flex justify-center px-6 pt-6 md:pt-8 z-50 relative">
        <FadeIn
          delay={0}
          y={-20}
          as="nav"
          className="bg-white/60 backdrop-blur-md rounded-2xl shadow-sm pl-3 sm:pl-4 pr-2 py-2 w-full sm:w-auto flex items-center justify-between sm:justify-start gap-3 sm:gap-6 relative"
        >
          {/* Logo SVG */}
          <a href="/index.html" className="flex items-center">
            <svg width="32" height="32" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
              <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" fill="black" />
            </svg>
          </a>

          {/* Links */}
          <div className="hidden sm:flex items-center gap-3 sm:gap-6">
            <a
              href="/index.html"
              className="text-gray-800 text-sm font-medium hover:opacity-60 transition-opacity whitespace-nowrap select-none"
            >
              Startseite
            </a>
            <a
              href="/index.html#about"
              className="text-gray-800 text-sm font-medium hover:opacity-60 transition-opacity whitespace-nowrap select-none"
            >
              Über mich
            </a>
            <a
              href="/index.html#services"
              className="text-gray-800 text-sm font-medium hover:opacity-60 transition-opacity whitespace-nowrap select-none"
            >
              Leistungen
            </a>
            <a
              href="/index.html#projects"
              className="text-gray-800 text-sm font-medium hover:opacity-60 transition-opacity whitespace-nowrap select-none"
            >
              Projekte
            </a>
            <a
              href="/index.html#contact"
              className="text-gray-800 text-sm font-medium hover:opacity-60 transition-opacity whitespace-nowrap select-none"
            >
              Kontakt
            </a>
          </div>

          {/* CTA Button */}
          <a
            href="/index.html#services"
            className="hidden sm:block bg-black text-white text-sm font-medium px-4 sm:px-5 py-2 rounded-xl hover:bg-gray-800 transition-colors whitespace-nowrap"
          >
            Projekt starten
          </a>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="block sm:hidden text-black p-1 hover:bg-black/5 rounded-lg transition-colors cursor-pointer"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Mobile Dropdown */}
          {menuOpen && (
            <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-white/95 backdrop-blur-md border border-gray-100 rounded-2xl shadow-lg p-4 flex flex-col gap-3.5 z-50 sm:hidden">
              <a
                href="/index.html"
                onClick={() => setMenuOpen(false)}
                className="text-gray-800 text-sm font-semibold hover:opacity-60 transition-opacity"
              >
                Startseite
              </a>
              <a
                href="/index.html#about"
                onClick={() => setMenuOpen(false)}
                className="text-gray-800 text-sm font-semibold hover:opacity-60 transition-opacity"
              >
                Über mich
              </a>
              <a
                href="/index.html#services"
                onClick={() => setMenuOpen(false)}
                className="text-gray-800 text-sm font-semibold hover:opacity-60 transition-opacity"
              >
                Leistungen
              </a>
              <a
                href="/index.html#projects"
                onClick={() => setMenuOpen(false)}
                className="text-gray-800 text-sm font-semibold hover:opacity-60 transition-opacity"
              >
                Projekte
              </a>
              <a
                href="/index.html#contact"
                onClick={() => setMenuOpen(false)}
                className="text-gray-800 text-sm font-semibold hover:opacity-60 transition-opacity"
              >
                Kontakt
              </a>
              <a
                href="/index.html#services"
                onClick={() => setMenuOpen(false)}
                className="bg-black text-white text-center text-sm font-semibold py-2.5 rounded-xl hover:bg-gray-800 transition-colors"
              >
                Projekt starten
              </a>
            </div>
          )}
        </FadeIn>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow pt-16 md:pt-24 relative">
        {/* Background Grid Pattern (Subtle) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>

        {/* Glow effect */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

        <div className="z-10 relative">
          <FAQSection
            title="Häufig gestellte Fragen"
            subtitle="Finden Sie Antworten auf häufige Fragen zu unseren Webentwicklungs- und QR-Dienstleistungen bei Websy Service. Wenn Sie weitere Fragen haben, können Sie sich jederzeit an uns wenden."
            isStandalone={true}
          />
        </div>
      </main>

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
                <a
                  href="/index.html"
                  className="hover:text-white transition-colors duration-300 hover:underline underline-offset-4 cursor-pointer text-left"
                >
                  Startseite
                </a>
              </li>
              <li>
                <a
                  href="/index.html#about"
                  className="hover:text-white transition-colors duration-300 hover:underline underline-offset-4 cursor-pointer text-left"
                >
                  Über uns
                </a>
              </li>
              <li>
                <a
                  href="/index.html#services"
                  className="hover:text-white transition-colors duration-300 hover:underline underline-offset-4 cursor-pointer text-left"
                >
                  Leistungen
                </a>
              </li>
              <li>
                <a
                  href="/index.html#projects"
                  className="hover:text-white transition-colors duration-300 hover:underline underline-offset-4 cursor-pointer text-left"
                >
                  Projekte
                </a>
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
              <li>
                <a
                  href="/faq.html"
                  className="hover:text-white transition-colors duration-300 hover:underline underline-offset-4 font-semibold text-white"
                >
                  FAQ (Häufige Fragen)
                </a>
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
};
