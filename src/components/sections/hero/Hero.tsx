"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CtaModal } from "@/components/sections/hero/components/CtaModal";
import { Section } from "@/components/ui/Section";
import { Component } from "@/components/ui/CtaButton";
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
    <Section className="">
      <main className="relative flex min-h-screen flex-col p-6 md:p-15 justify-end">
        <div className="relative w-full justify-end flex flex-col xl:flex-row">
          <div className="relative z-10 flex flex-col gap-8 flex-1 justify-end">
            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-medium leading-[110%] tracking-tight text-white">
              Mais estratégia. <br /> Menos risco. <br /> Melhores resultados.
            </h1>
            <p className="text-sm font-light sm:text-base leading-[150%] max-w-120 md:max-w-170 text-white/70">
              Assessoria estratégica para alinhar seus investimentos ao seu
              perfil, reduzir riscos e construir resultados sólidos no curto,
              médio e longo prazo.
            </p>
            {/* <div className="flex flex-row items-center gap-4">
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
                      className="group relative text-lg font-regular tracking-[-0.01em] justify-center flex items-center cursor-pointer rounded-full"
                    >
                      <motion.div
                        layout
                        layoutId="cta-card"
                        style={{ borderRadius: "100px" }}
                        className="absolute inset-0 bg-white z-0 m-0"
                      />
                      \
                      <div className="relative overflow-hidden flex items-center justify-center">
                        <span className="text-black block translate-y-0 group-hover:-translate-y-6 group-hover:opacity-0 transition-all duration-300 py-3 px-6 font-normal">
                          Marcar reunião
                        </span>
                        <span className="text-black absolute top-full group-hover:top-0 opacity-0 group-hover:opacity-100 transition-all duration-300 py-3 px-6 font-normal">
                          Marcar reunião
                        </span>
                      </div>
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
              <button className="text-lg text-white py-3 px-6  rounded-full cursor-pointer hover:bg-white/5 transition-colors">
                <CornerDownRight className="w-4 h-4 inline mr-2" /> Ler Mais
              </button>
              <div></div>
            </div> */}
          </div>
          <div className="flex items-end xl:justify-end justify-start mt-10 xl:mt-0">
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
                        className="absolute inset-0 bg-white z-0 m-0"
                      />
                      <div className="relative overflow-hidden flex items-center justify-center">
                        <div className="text-black flex items-center gap-2 translate-y-0 group-hover:-translate-y-6 group-hover:opacity-0 transition-all duration-300 py-2.5 px-5 md:py-3 md:px-6">
                          <span className="">Marcar reunião</span>{" "}
                          <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
                        </div>
                        <div className="text-black absolute flex items-center gap-2 top-full group-hover:top-0 opacity-0 group-hover:opacity-100 transition-all duration-300 py-2.5 px-5 md:py-3 md:px-6">
                          <span className="">Marcar reunião</span>{" "}
                          <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
                        </div>
                      </div>
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
              <button className="text-md md:text-lg text-white py-2.5 px-5 md:py-3 md:px-6 rounded-full cursor-pointer hover:bg-white/5 transition-colors">
                <CornerDownRight className="w-3 h-3 md:w-4 md:h-4 inline mr-2" />{" "}
                Ler Mais
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 pt-15 mt-15">
          <div className=" gap-8 flex justify-between flex-wrap lg:flex-nowrap">
            <div>
              <div className="mb-4">
                <BarChart3 strokeWidth={1.25} className="text-white" />
              </div>
              <p className="text-sm sm:text-base text-white/70 leading-[150%] max-w-60 md:max-w-70">
                Análise clara da sua situação financeira atual.
              </p>
            </div>

            <div>
              <div className="mb-4">
                <Fingerprint strokeWidth={1.25} className="text-white" />
              </div>
              <p className="text-sm sm:text-base text-white/70 leading-[150%] max-w-60 md:max-w-70">
                Estratégias alinhadas aos seus objetivos e perfil.
              </p>
            </div>

            <div>
              <div className="mb-4">
                <BadgeCheck strokeWidth={1.25} className="text-white" />
              </div>
              <p className="text-sm sm:text-base text-white/70 leading-[150%] max-w-60 md:max-w-70">
                Decisões de investimento mais seguras e conscientes.
              </p>
            </div>

            <div>
              <div className="mb-4">
                <Compass strokeWidth={1.25} className="text-white" />
              </div>
              <p className="text-sm sm:text-base text-white/70 leading-[150%] max-w-60 md:max-w-70">
                Acompanhamento profissional para evoluir seu patrimônio.
              </p>
            </div>
          </div>
        </div>
      </main>

      <CtaModal isOpen={isExpanded} onClose={() => setIsExpanded(false)} />
    </Section>
  );
}
