import React, { useState } from 'react';
import { Check, Tag, X, Calendar, Clock } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { motion, AnimatePresence } from 'framer-motion';

const FEATURES = [
  'Individuelles, Conversion-orientiertes Design',
  '100% responsive (mobilfreundlich)',
  'SEO-Optimierung',
  'Sicherheit & DSGVO-Konformität',
  'Einfacher E-Mail-Support verfügbar.',
  'Schulung zur Website-Verwaltung',
];
const FEATURES1 = [
  'Individuelles, Conversion-orientiertes Design',
  '100% responsive (mobilfreundlich)',
  'Mehrere Seiten (Dienstleistungen, Kontakt, Über uns...)',
  'SEO-Optimierung',
  'Umfassende SEO-Strategie für Google',
  'Sicherheit & DSGVO-Konformität',
  'Einfacher E-Mail-Support verfügbar.',
  'Schulung zur Website-Verwaltung',
];
const FEATURES2 = [
  'Individuelles, Conversion-orientiertes Design',
  '100% responsive (mobilfreundlich)',
  'SEO-Optimierung',
  'Sicherheit & DSGVO-Konformität',
  'Produktkatalog (bis zu 25 Produkte)',
  'Sichere Zahlung über Stripe',
  'Einfacher E-Mail-Support verfügbar.',
  'Schulung zur Website-Verwaltung',
];

export const ServicesSection: React.FC = () => {
  const today = new Date();
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: todayStr,
    time: '',
    description: '',
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleOpen = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsOpen(true);
    setIsSuccess(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset form after close animation finishes
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: todayStr,
        time: '',
        description: '',
      });
      setIsSuccess(false);
    }, 300);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    // Web3Forms Access Key
    // Replace with your real Web3Forms Access Key from https://web3forms.com/
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Neue Terminbuchung: ${formData.name}`,
          from_name: 'Websy Online',
          replyto: formData.email,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          date: formData.date,
          time: formData.time,
          description: formData.description,
          service: selectedService,
          message: `Sie haben eine neue Terminbuchungsanfrage über Websy erhalten:

Name des Kunden: ${formData.name}
E-Mail des Kunden: ${formData.email}
Telefon des Kunden: ${formData.phone}
Angeforderter Service: ${selectedService}
Gewünschtes Datum: ${formData.date}
Gewünschte Uhrzeit: ${formData.time}

Nachricht/Beschreibung des Kunden:
${formData.description}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        // Automatically close popup after 3 seconds
        setTimeout(() => {
          handleClose();
        }, 3000);
      } else {
        setErrorMsg(result.message || 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMsg('Verbindung zum E-Mail-Dienst fehlgeschlagen. Bitte überprüfen Sie Ihre Internetverbindung.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full flex flex-col items-center z-20 relative"
    >
      <div className="w-full max-w-5xl flex flex-col items-center">
        {/* Top Pill Tag */}
        <FadeIn delay={0} y={20}>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs font-semibold uppercase text-gray-600 mb-6 select-none">
            <Tag className="w-3.5 h-3.5 text-blue-600" />
            Preispakete
          </div>
        </FadeIn>

        {/* Section Heading */}
        <FadeIn delay={0.1} y={30}>
          <h2 className="text-center font-black uppercase text-[clamp(2rem,6vw,64px)] text-[#0C0C0C] leading-tight mb-4 select-none">
            Entdecken Sie unseren{' '}
            <span
              style={{ fontFamily: "'Instrument Serif', serif" }}
              className="italic lowercase font-normal text-blue-600"
            >
              preiswerten
            </span>{' '}
            Service !
          </h2>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.15} y={20}>
          <p className="text-center text-sm sm:text-base font-light text-gray-500 max-w-xl mb-8 leading-relaxed select-none">
            Hosting und Wartung sind optional verfügbar. Diese Preise geben Ihnen eine Vorstellung des Budgets basierend auf der Komplexität des Projekts. Jede Website wird individuell nach Ihren Wünschen erstellt – der Endpreis wird gemeinsam festgelegt.
          </p>
        </FadeIn>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch">
          {/* Card 1: Landing page */}
          <FadeIn
            delay={0.25}
            y={40}
            className="border border-gray-200 rounded-[32px] p-6 sm:p-8 flex flex-col justify-between bg-transparent hover:shadow-lg transition-all duration-300 select-none relative overflow-hidden"
          >
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Landingpage
              </h3>
              <p className="text-xs text-gray-500 mb-6">
                Landingpage ab 199 € / Projekt
              </p>

              <button
                onClick={() => handleOpen('Landingpage')}
                className="w-full border border-gray-300 text-gray-800 rounded-xl py-2.5 font-medium hover:bg-gray-50 transition-colors text-center text-sm mb-8 cursor-pointer"
              >
                Angebot anfragen
              </button>

              <div className="h-[1px] bg-gray-100 w-full mb-6" />

              <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Inklusive Leistungen
              </h4>
              <ul className="flex flex-col gap-3.5">
                {FEATURES.map((feature, idx) => {
                  const isIncluded = idx < 5;
                  return (
                    <li key={idx} className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isIncluded ? 'bg-blue-600' : 'bg-gray-100'
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            isIncluded ? 'text-white' : 'text-gray-300'
                          }`}
                        />
                      </div>
                      <span
                        className={`text-sm ${
                          isIncluded
                            ? 'text-gray-700'
                            : 'text-gray-400 line-through'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </FadeIn>

          {/* Card 2: Showcase Website (Popular) */}
          <FadeIn
            delay={0.3}
            y={40}
            className="border-2 border-pink-500/40 rounded-[32px] p-6 sm:p-8 flex flex-col justify-between bg-transparent shadow-md hover:shadow-xl transition-all duration-300 select-none relative overflow-hidden"
          >
            <div>
              {/* Popular Badge */}
              <div className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                Beliebt
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Showcase-Website
              </h3>
              <p className="text-xs text-gray-500 mb-6">
                Auf Anfrage, individuell auf Ihr Projekt abgestimmt
              </p>

              <button
                onClick={() => handleOpen('Showcase-Website')}
                style={{
                  background:
                    'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                }}
                className="w-full text-white rounded-xl py-2.5 font-medium hover:opacity-90 transition-opacity text-center text-sm mb-8 shadow-sm cursor-pointer"
              >
                Angebot anfragen
              </button>

              <div className="h-[1px] bg-gray-100 w-full mb-6" />

              <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Inklusive Leistungen
              </h4>
              <ul className="flex flex-col gap-3.5">
                {FEATURES1.map((feature, idx) => {
                  const isIncluded = idx < 8;
                  return (
                    <li key={idx} className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isIncluded ? 'bg-blue-600' : 'bg-gray-100'
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            isIncluded ? 'text-white' : 'text-gray-300'
                          }`}
                        />
                      </div>
                      <span
                        className={`text-sm ${
                          isIncluded
                            ? 'text-gray-700'
                            : 'text-gray-400 line-through'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </FadeIn>

          {/* Card 3: E-commerce Website */}
          <FadeIn
            delay={0.35}
            y={40}
            className="border border-gray-200 rounded-[32px] p-6 sm:p-8 flex flex-col justify-between bg-transparent hover:shadow-lg transition-all duration-300 select-none relative overflow-hidden"
          >
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Onlineshop
              </h3>
              <p className="text-xs text-gray-500 mb-6">
                Auf Anfrage, individuell auf Ihr Projekt abgestimmt
              </p>

              <button
                onClick={() => handleOpen('Onlineshop')}
                className="w-full border border-gray-300 text-gray-800 rounded-xl py-2.5 font-medium hover:bg-gray-50 transition-colors text-center text-sm mb-8 cursor-pointer"
              >
                Angebot anfragen
              </button>

              <div className="h-[1px] bg-gray-100 w-full mb-6" />

              <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Inklusive Leistungen
              </h4>
              <ul className="flex flex-col gap-3.5">
                {FEATURES2.map((feature, idx) => {
                  const isIncluded = idx < 8;
                  return (
                    <li key={idx} className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isIncluded ? 'bg-blue-600' : 'bg-gray-100'
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            isIncluded ? 'text-white' : 'text-gray-300'
                          }`}
                        />
                      </div>
                      <span
                        className={`text-sm ${
                          isIncluded
                            ? 'text-gray-700'
                            : 'text-gray-400 line-through'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-lg bg-[#0C0C0C] border border-[#D7E2EA]/10 rounded-[32px] p-6 sm:p-8 text-[#D7E2EA] z-10 shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-5 right-5 w-8 h-8 rounded-full border border-[#D7E2EA]/10 flex items-center justify-center hover:bg-[#D7E2EA]/10 transition-colors cursor-pointer text-[#D7E2EA]/60 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>

              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-6"
                  >
                    <div>
                      <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-[#D7E2EA]/50 uppercase">
                        Serviceanfrage
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mt-1">
                        Termin vereinbaren
                      </h3>
                      <div className="inline-block bg-[#D7E2EA]/10 border border-[#D7E2EA]/20 rounded-full px-3 py-1 mt-2.5 text-xs font-medium text-[#D7E2EA]/85">
                        Ausgewählt: {selectedService}
                      </div>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-4"
                    >
                      {/* Name */}
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Ihr Name*"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 rounded-xl px-4 py-2.5 focus:border-[#B600A8] focus:ring-1 focus:ring-[#B600A8]/20 focus:outline-none transition-all text-sm font-light text-[#D7E2EA] placeholder:text-[#D7E2EA]/30"
                      />

                      {/* Email & Phone Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="E-Mail-Adresse*"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 rounded-xl px-4 py-2.5 focus:border-[#B600A8] focus:ring-1 focus:ring-[#B600A8]/20 focus:outline-none transition-all text-sm font-light text-[#D7E2EA] placeholder:text-[#D7E2EA]/30"
                        />
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="Telefonnummer*"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 rounded-xl px-4 py-2.5 focus:border-[#B600A8] focus:ring-1 focus:ring-[#B600A8]/20 focus:outline-none transition-all text-sm font-light text-[#D7E2EA] placeholder:text-[#D7E2EA]/30"
                        />
                      </div>

                      {/* Date & Time Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="relative">
                          <input
                            type="date"
                            name="date"
                            required
                            min={todayStr}
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 rounded-xl pl-10 pr-4 py-2.5 focus:border-[#B600A8] focus:ring-1 focus:ring-[#B600A8]/20 focus:outline-none transition-all text-sm font-light text-[#D7E2EA] [color-scheme:dark]"
                          />
                          <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D7E2EA]/40 pointer-events-none" />
                        </div>
                        <div className="relative">
                          <input
                            type="time"
                            name="time"
                            required
                            value={formData.time}
                            onChange={handleChange}
                            className="w-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 rounded-xl pl-10 pr-4 py-2.5 focus:border-[#B600A8] focus:ring-1 focus:ring-[#B600A8]/20 focus:outline-none transition-all text-sm font-light text-[#D7E2EA] [color-scheme:dark]"
                          />
                          <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D7E2EA]/40 pointer-events-none" />
                        </div>
                      </div>

                      {/* Description */}
                      <textarea
                        name="description"
                        required
                        placeholder="Erzählen Sie uns von Ihren Projektanforderungen...*"
                        rows={3}
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 rounded-xl px-4 py-2.5 focus:border-[#B600A8] focus:ring-1 focus:ring-[#B600A8]/20 focus:outline-none transition-all text-sm font-light text-[#D7E2EA] placeholder:text-[#D7E2EA]/30 resize-none"
                      />

                      {errorMsg && (
                        <p className="text-xs text-red-500 text-center font-medium mt-1">
                          {errorMsg}
                        </p>
                      )}

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        style={{
                          background: isSubmitting
                            ? '#333'
                            : 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                          boxShadow: isSubmitting
                            ? 'none'
                            : 'inset 0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
                          outline: isSubmitting ? 'none' : '2px solid #FFFFFF',
                          outlineOffset: '-3px',
                        }}
                        className={`w-full rounded-full text-white font-medium uppercase tracking-widest py-3 transition-all text-xs mt-2 ${
                          isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90 active:scale-98 cursor-pointer'
                        }`}
                      >
                        {isSubmitting ? 'Wird gesendet...' : 'Buchung bestätigen'}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-10 gap-4 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500 flex items-center justify-center text-green-500">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold">Termin bestätigt!</h3>
                    <p className="text-sm font-light text-[#D7E2EA]/60 max-w-xs leading-relaxed">
                      Vielen Dank für Ihre Buchungsanfrage. Wir werden Sie zum gewünschten Datum und der gewünschten Uhrzeit kontaktieren:
                      <strong className="text-white mt-1.5 block">
                        {formData.date} um {formData.time} Uhr
                      </strong>
                    </p>
                    <p className="text-xs text-[#D7E2EA]/40 mt-1">
                      Eine Bestätigungs-E-Mail wurde an Ihre Adresse gesendet.
                    </p>
                    <button
                      onClick={handleClose}
                      style={{
                        background:
                          'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                        boxShadow:
                          'inset 0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
                        outline: '2px solid #FFFFFF',
                        outlineOffset: '-3px',
                      }}
                      className="w-full rounded-full text-white font-medium uppercase tracking-widest py-3 hover:opacity-90 active:scale-98 transition-all text-xs cursor-pointer mt-4"
                    >
                      Fenster schließen
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
