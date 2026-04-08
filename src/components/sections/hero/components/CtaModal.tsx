"use client";

import { Calendar, Target, UserCheck, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Select from "@/components/ui/Select";

type CtaModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function CtaModal({ isOpen, onClose }: CtaModalProps) {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-2">
          <motion.div
            layout
            layoutId="cta-card"
            style={{ borderRadius: "24px" }}
            className="relative flex h-full w-full overflow-hidden bg-white transform-gpu will-change-transform"
          >
            <div className="h-full w-full overflow-y-auto scrollbar-hide">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative py-8 z-10 min-h-full flex flex-col lg:flex-row w-full max-w-[1100px] mx-auto items-center p-6 sm:p-10 lg:p-16 gap-8 lg:gap-16"
              >
                {/* LADO ESQUERDO */}
                <div className="flex-1 flex flex-col justify-center space-y-3 w-full">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-black leading-none tracking-[-0.03em]">
                    Fale com Especialistas
                  </h2>

                  <div className="space-y-4 sm:space-y-6 pt-4">
                    <div className="flex gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-black/10 flex items-center justify-center">
                        <Calendar color="black" />
                      </div>
                      <p className="text-sm sm:text-base text-black leading-[150%]">
                        A reunião será adaptada às suas necessidades, entendendo
                        seu cenário atual e seus objetivos.
                      </p>
                    </div>

                    <div className="flex gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-black/10 flex items-center justify-center">
                        <Target color="black" />
                      </div>
                      <p className="text-sm sm:text-base text-black leading-[150%]">
                        Vamos analisar sua situação e identificar os principais
                        pontos de melhoria e oportunidades.
                      </p>
                    </div>
                    <div className="flex gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-black/10 flex items-center justify-center">
                        <UserCheck color="black" />
                      </div>
                      <p className="text-sm sm:text-base text-black leading-[150%]">
                        Nossa equipe estará disponível para tirar dúvidas e
                        orientar suas decisões.
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-black/20">
                    <p className="text-xl text-black leading-[150%] mb-4">
                      Uma reunião estratégica, pensada para gerar clareza, foco
                      e direcionar seus próximos passos.
                    </p>
                    {/* <div className="flex items-center gap-3 sm:gap-4">
                      <img
                        src="/professional-headshot.png"
                        alt="Sarah Chen"
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-base sm:text-lg lg:text-xl text-white">
                          Sarah Chen
                        </p>
                        <p className="text-sm sm:text-base text-white/70">
                          Chrono
                        </p>
                      </div>
                    </div> */}
                  </div>
                </div>

                {/* FORMULÁRIO */}
                <div className="flex-1 w-full">
                  <form className="space-y-4 sm:space-y-5">
                    <div>
                      <label className="block text-[10px] font-mono text-black mb-2 uppercase">
                        Nome
                      </label>
                      <input className="w-full h-10 rounded-lg bg-black/10 px-4 text-black focus:outline-none" />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-black mb-2 uppercase">
                        Telefone
                      </label>
                      <input
                        type="email"
                        className="w-full h-10 rounded-lg bg-black/10 px-4 text-black focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-black mb-2 uppercase">
                        E-mail
                      </label>
                      <input className="w-full h-10 rounded-lg bg-black/10 px-4 text-black focus:outline-none" />
                    </div>

                    <div className="flex gap-4 flex-col sm:flex-row">
                      <div className="flex flex-1 flex-col">
                        <label className="block text-[10px] font-mono text-black  mb-2 uppercase">
                          Total investido:
                        </label>
                        <Select
                          placeholder="Selecione uma opção"
                          options={[
                            "Abaixo de 100 mil",
                            "Entre 100 e 300 mil",
                            "Acima de 300 mil",
                            "Acima de 1 milhão",
                            "Acima de 5 milhões",
                          ]}
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <label className="block text-[10px] font-mono text-black mb-2 uppercase">
                          Como você investe?
                        </label>
                        <Select
                          placeholder="Selecione uma opção"
                          options={["Banco", "Assessoria", "Invisto sozinho"]}
                        />
                      </div>
                    </div>
                    <label className="flex gap-2">
                      <input
                        type="checkbox"
                        className="mt-[2px] mr-1 h-4 w-4"
                      />
                      <span className="text-sm sm:text-base text-black leading-[150%]">
                        Aceito o tratamento de dados de acordo com a
                        <a href="" className="underline">
                          {" "}
                          Política de Privacidade e Segurança
                        </a>{" "}
                        da Selezione Investimentos em conformidade com a LGPD
                      </span>
                    </label>
                    {/* <label className="block text-[10px] font-mono text-white mb-2 uppercase">
                      AYTHING ELSE?
                    </label>
                    <textarea
                      rows={3}
                      placeholder="..."
                      className="w-full rounded-lg bg-[#101121] px-4 py-3 text-white focus:outline-none resize-none"
                    /> */}

                    <button
                      type="submit"
                      className="w-full py-3 rounded-full bg-[#101121] text-white font-medium cursor-pointer"
                    >
                      Agendar Reunião
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>

            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0, scale: 2 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, delay: 0.05 }}
              className="absolute inset-0 pointer-events-none"
              style={{ borderRadius: "24px" }}
            />

            {/* CLOSE */}
            <motion.button
              onClick={onClose}
              className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center text-black bg-transparent cursor-pointer transition-colors hover:bg-black/10 rounded-full"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </motion.button>
            {/* <button
              onClick={onClose}
              className="absolute right-6 top-6 z-10 h-10 w-10 rounded-full text-white hover:bg-white/10"
            >
              <X />
            </button> */}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
