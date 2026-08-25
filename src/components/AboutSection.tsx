import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';

interface AboutSectionProps {
  onScrollToSection: (sectionId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onScrollToSection }) => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col justify-center items-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* Corner Decorative 3D Images */}
      {/* Top-Left: Moon Icon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="hidden sm:block absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none select-none z-0"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="3D Moon Icon"
          className="w-full h-auto object-contain"
          draggable="false"
        />
      </FadeIn>

      {/* Bottom-Left: 3D Object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="hidden sm:block absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none select-none z-0"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D Shape"
          className="w-full h-auto object-contain"
          draggable="false"
        />
      </FadeIn>

      {/* Top-Right: Lego Icon */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="hidden sm:block absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none select-none z-0"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="3D Lego Icon"
          className="w-full h-auto object-contain"
          draggable="false"
        />
      </FadeIn>

      {/* Bottom-Right: 3D Group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="hidden sm:block absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none select-none z-0"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D Shape Group"
          className="w-full h-auto object-contain"
          draggable="false"
        />
      </FadeIn>

      {/* Centered Content Stack */}
      <div className="flex flex-col items-center z-10 w-full max-w-4xl">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)] select-none">
            Über mich
          </h2>
        </FadeIn>

        {/* Gap between heading and text */}
        <div className="mt-10 sm:mt-14 md:mt-16 w-full flex flex-col items-center gap-6 sm:gap-8 px-4">
          <AnimatedText text="Mein Name ist Moatez. Bevor ich in die Webbranche eingestiegen bin, habe ich jahrelang Informatik studiert – was mir ein echtes Verständnis für die Realität und den Alltag der Fachkräfte vermittelt hat, die die lokale Wirtschaft antreiben." />
          <AnimatedText text="Nach dem Abschluss von zwei Weiterbildungen im Bereich digitales Marketing und einem Jahr in einer Webagentur, in der ich Websites für lokale Unternehmen erstellt habe, gründete ich WebWebsy-Startup (jetzt mit Sitz in Bourges). Mein Ziel ist es, Handwerker, Ladenbesitzer, Gastronomen und Freiberufler zu unterstützen, die bei Google gefunden werden wollen." />
          <AnimatedText text="Kein Fachchinesisch, keine Agenturaufschläge. Einfach ein einziger, persönlicher Ansprechpartner, der Ihr Unternehmen wirklich versteht." />
        </div>

        {/* Gap between text block and button */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <FadeIn delay={0.4} y={30}>
            <ContactButton onClick={() => onScrollToSection('contact')} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
