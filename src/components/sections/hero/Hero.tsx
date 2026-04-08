"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CtaModal } from "@/components/sections/hero/components/CtaModal";
import { Section } from "@/components/ui/Section";
import {
  ArrowUpRight,
  CornerDownRight,
  BarChart3,
  Compass,
  BadgeCheck,
  Fingerprint,
} from "lucide-react";

export default function Hero() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(true);
  };

  useEffect(() => {
    document.body.style.overflow = isExpanded ? "hidden" : "unset";
  }, [isExpanded]);

  return (
    <Section>
      <main className="relative flex min-h-screen flex-col justify-end p-6 md:p-15 bg-black overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: "url('/barco2.jpg')",
          }}
        />
        {/* <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/barco.jpg')",
          }}
        />
       <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-black to-transparent" />*/}

        {/* Conteúdo */}
        <div className="relative z-10 w-full flex flex-col xl:flex-col">
          <div className="flex flex-col flex-1 justify-end gap-4">
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-semibold leading-[110%] tracking-tight text-white">
                Mais estratégia. <br /> Menos risco. <br /> Melhores resultados.
              </h1>
              <p className="text-sm font-light  sm:text-base md:text-lg leading-[150%] max-w-120 md:max-w-170 text-white/70">
                Assessoria estratégica para alinhar seus investimentos ao seu
                perfil, reduzir riscos e construir resultados sólidos no curto,
                médio e longo prazo.
              </p>
            </div>

            <div className="flex flex-row items-center gap-4">
              <AnimatePresence initial={false}>
                {!isExpanded && (
                  <motion.div className="inline-block relative">
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ delay: 0.2 }}
                      layout={false}
                      onClick={handleExpand}
                      className="group relative text-md md:text-lg font-regular tracking-[-0.01em] justify-center flex items-center cursor-pointer rounded-full"
                    >
                      <motion.div
                        layout
                        layoutId="cta-card"
                        style={{ borderRadius: "100px" }}
                        className="absolute inset-0 bg-white z-0"
                      />
                      <div className="relative overflow-hidden flex items-center justify-center">
                        <div className="text-black flex items-center gap-2 translate-y-0 group-hover:-translate-y-6 group-hover:opacity-0 transition-all duration-300 py-3.5 px-7 md:py-4 md:px-8">
                          <span>Marcar reunião</span>
                          <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
                        </div>
                        <div className="text-black absolute flex items-center gap-2 top-full group-hover:top-0 opacity-0 group-hover:opacity-100 transition-all duration-300 py-3.5 px-7 md:py-4 md:px-8">
                          <span>Marcar reunião</span>
                          <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
                        </div>
                      </div>
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>

              <button className="text-md md:text-lg text-white bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 py-3.5 px-7 md:py-4 md:px-8 rounded-full cursor-pointer btransition-colors">
                <CornerDownRight className="w-3 h-3 md:w-4 md:h-4 inline mr-2" />
                Ler Mais
              </button>
            </div>
          </div>

          <div className="border-t border-white/20 pt-10 mt-10 sm:pt-12 sm:mt-12 lg:pt-16 lg:mt-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <div
                className="bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300
                    p-5 sm:p-6 lg:p-8 rounded-2xl"
              >
                <div className="mb-3 sm:mb-4">
                  <BarChart3
                    strokeWidth={1.25}
                    className="text-white w-5 h-5 sm:w-6 sm:h-6"
                  />
                </div>
                <p className="text-sm sm:text-base text-white/70 leading-[150%]">
                  Análise clara da sua situação financeira atual.
                </p>
              </div>

              <div
                className="bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300
                    p-5 sm:p-6 lg:p-8 rounded-2xl"
              >
                <div className="mb-3 sm:mb-4">
                  <Fingerprint
                    strokeWidth={1.25}
                    className="text-white w-5 h-5 sm:w-6 sm:h-6"
                  />
                </div>
                <p className="text-sm sm:text-base text-white/70 leading-[150%]">
                  Estratégias alinhadas aos seus objetivos e perfil.
                </p>
              </div>

              <div
                className="bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300
                    p-5 sm:p-6 lg:p-8 rounded-2xl"
              >
                <div className="mb-3 sm:mb-4">
                  <BadgeCheck
                    strokeWidth={1.25}
                    className="text-white w-5 h-5 sm:w-6 sm:h-6"
                  />
                </div>
                <p className="text-sm sm:text-base text-white/70 leading-[150%]">
                  Decisões de investimento mais seguras e conscientes.
                </p>
              </div>

              <div
                className="bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300
                    p-5 sm:p-6 lg:p-8 rounded-2xl"
              >
                <div className="mb-3 sm:mb-4">
                  <Compass
                    strokeWidth={1.25}
                    className="text-white w-5 h-5 sm:w-6 sm:h-6"
                  />
                </div>
                <p className="text-sm sm:text-base text-white/70 leading-[150%]">
                  Acompanhamento profissional para evoluir seu patrimônio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <CtaModal isOpen={isExpanded} onClose={() => setIsExpanded(false)} />
    </Section>
  );
}
