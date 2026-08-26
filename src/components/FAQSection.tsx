import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Was ist Websy Service und welche Leistungen bieten Sie an?",
    answer: "Websy Service ist eine Premium-Digitalagentur mit Sitz in Erfurt, Thüringen. Wir erstellen moderne, maßgeschneiderte Websites, conversion-optimierte Landingpages, digitale QR-Speisekarten für die Gastronomie und digitale QR-Visitenkarten für Selbstständige und Unternehmen."
  },
  {
    question: "Wie viel kostet die Erstellung einer Website bei Websy Service?",
    answer: "Unsere Preise sind transparent und fair. Eine Landingpage startet ab 199 €, eine mehrseitige Website ab 399 € und ein individueller Onlineshop ab 699 €. Der Endpreis richtet sich nach der Komplexität Ihres Projekts und wird im kostenlosen Erstgespräch gemeinsam festgelegt."
  },
  {
    question: "Sind die erstellten Websites für Mobilgeräte optimiert (responsive)?",
    answer: "Ja, absolut. Jede Website wird von Grund auf so entwickelt, dass sie auf Smartphones, Tablets, Laptops und großen Monitoren (Desktop) perfekt aussehen und reibungslos funktionieren. Mobilfreundlichkeit ist heute ein entscheidender Faktor für den Erfolg im Web."
  },
  {
    question: "Bieten Sie Suchmaschinenoptimierung (SEO) an?",
    answer: "Ja, eine grundlegende SEO-Optimierung (Metadaten, schnelle Ladezeiten, semantische Struktur) ist bei jedem Projekt inklusive. Bei unseren mehrseitigen Websites und Onlineshops entwickeln wir zudem eine umfassende SEO-Strategie, damit Ihr Unternehmen in Erfurt und Umgebung bei Google ganz oben gefunden wird."
  },
  {
    question: "Sind die Websites rechtssicher und DSGVO-konform?",
    answer: "Ja, Datenschutz hat bei uns höchste Priorität. Alle Websites werden nach aktuellen DSGVO-Richtlinien erstellt. Wir integrieren standardmäßig ein rechtssicheres Impressum, eine Datenschutzerklärung sowie einen professionellen, DSGVO-konformen Cookie-Consent-Banner."
  },
  {
    question: "Wie läuft der Entwicklungsprozess ab?",
    answer: "Zuerst führen wir ein kostenloses Erstgespräch, um Ihre Ziele zu besprechen. Anschließend erhalten Sie ein Festpreis-Angebot. Nach Freigabe erstellen wir ein individuelles Design. Nach Ihrer Rückmeldung entwickeln wir die Website und schulen Sie abschließend in der einfachen Verwaltung Ihrer neuen Website."
  },
  {
    question: "Welchen Support bieten Sie nach dem Go-Live?",
    answer: "Wir lassen Sie nach der Fertigstellung nicht allein. Wir bieten optional kostengünstige Pakete für monatliches Hosting, regelmäßige Sicherheitsupdates, Backups und schnellen Support per E-Mail oder Telefon an, damit Ihre Website immer sicher und online bleibt."
  }
];

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  isStandalone?: boolean;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  title = "Häufige Fragen",
  subtitle = "Haben Sie Fragen zu unseren Leistungen? Hier finden Sie schnelle Antworten auf die am häufigsten gestellten Fragen rund um Webdesign, SEO und QR-Lsolutions.",
  isStandalone = false
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Structured Data (FAQPage JSON-LD)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section
      id="faq"
      className={`w-full flex flex-col items-center relative z-20 ${
        isStandalone 
          ? "bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-16 sm:py-24" 
          : "bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-24 border-t border-[#D7E2EA]/5"
      }`}
    >
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="w-full max-w-4xl flex flex-col items-center">
        {/* Top Pill Tag */}
        {!isStandalone && (
          <FadeIn delay={0} y={20}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold uppercase text-[#D7E2EA]/70 mb-6 select-none">
              <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
              FAQ
            </div>
          </FadeIn>
        )}

        {/* Section Heading */}
        <FadeIn delay={0.1} y={30}>
          <h2 className="text-center font-black uppercase text-[clamp(2rem,5vw,56px)] text-[#D7E2EA] leading-tight mb-4 select-none">
            {title}
          </h2>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.15} y={20}>
          <p className="text-center text-xs sm:text-sm md:text-base font-light text-[#D7E2EA]/60 max-w-2xl mb-12 sm:mb-16 leading-relaxed select-none">
            {subtitle}
          </p>
        </FadeIn>

        {/* Accordion list */}
        <div className="w-full flex flex-col gap-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <FadeIn
                key={index}
                delay={0.05 * index}
                y={20}
                className="w-full"
              >
                <div
                  className={`w-full rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-white/[0.04] border-[#D7E2EA]/20 shadow-[0_0_20px_rgba(255,255,255,0.02)]"
                      : "bg-white/[0.01] border-[#D7E2EA]/5 hover:border-[#D7E2EA]/15 hover:bg-white/[0.02]"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between text-left p-5 sm:p-6 cursor-pointer select-none gap-4 focus:outline-none bg-transparent border-none text-[#D7E2EA]"
                  >
                    <span className="font-semibold text-sm sm:text-base md:text-lg text-[#D7E2EA] tracking-wide transition-colors duration-300">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#D7E2EA]/70 hover:text-white transition-colors"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-xs sm:text-sm leading-relaxed text-[#D7E2EA]/70 font-light border-t border-white/5 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
