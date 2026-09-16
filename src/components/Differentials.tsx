import React from 'react';
import { MapPin, Clock, Sliders, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { DIFFERENTIALS } from '../data';

export default function Differentials() {
  const iconMap: { [key: string]: React.ComponentType<{ className?: string; size?: number }> } = {
    MapPin: MapPin,
    Clock: Clock,
    Sliders: Sliders,
    ShieldCheck: ShieldCheck
  };

  return (
    <section id="diferenciais" className="py-24 bg-[#0D0D0D] border-t border-neutral-900 relative overflow-hidden">
      {/* Background Visual Design Grid Accent */}
      <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-2 flex flex-col justify-around pointer-events-none">
        <div className="text-[#7C3AED] font-display font-black text-9xl tracking-widest select-none -mr-16 rotate-90">
          PIRAPORA
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-neutral-800 border border-neutral-700 px-3 py-1 rounded-full text-xs font-mono font-medium text-gray-300 uppercase tracking-widest">
            Por que Escolher a K&A?
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
            Nossos <span className="text-[#7C3AED]">Diferenciais</span> Reais
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-sans max-w-lg mx-auto">
            Além de criar códigos limpos, nós entregamos parceria comercial estratégica e presença local que nenhuma agência distante consegue oferecer.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="differentials-grid">
          {DIFFERENTIALS.map((diff, index) => {
            const IconComp = iconMap[diff.iconName] || MapPin;
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                key={diff.id}
                className="group relative rounded-lg bg-[#1c1c1c] border border-neutral-700 p-6 hover:border-[#10B981]/40 transition-all duration-300 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                id={`differential-card-${diff.id}`}
              >
                <div className="space-y-4">
                  {/* Icon badge */}
                  <div className="flex items-center justify-center w-12 h-12 rounded bg-[#252525] border border-white/10 text-[#7C3AED] group-hover:bg-[#10B981]/15 group-hover:border-[#10B981]/50 group-hover:text-[#10B981] group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.25)] transition-all duration-300">
                    <IconComp size={22} />
                  </div>

                  {/* Title and description */}
                  <div className="space-y-2">
                    <h3 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-wide group-hover:text-[#10B981] transition-colors duration-300">
                      {diff.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
                      {diff.description}
                    </p>
                  </div>
                </div>

                {/* Left accent vertical neon marker bar */}
                <div className="absolute top-4 bottom-4 left-0 w-[2px] bg-[#10B981] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />
              </motion.div>
            );
          })}
        </div>

        {/* Highlight Banner / Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-[#1c082f] via-[#0F0D0E] to-[#121212] border border-[#7C3AED]/20 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl"
          id="differentials-local-banner"
        >
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-display font-black text-2xl sm:text-3xl text-white uppercase">
              Procurando uma reunião presencial?
            </h4>
            <p className="text-base sm:text-lg text-gray-300 max-w-xl font-sans">
              Estamos baseados em <span className="text-[#7C3AED] font-bold">Pirapora, MG</span>. Atendemos comerciantes, clínicas, distribuidoras e prestadores de serviços de forma próxima. Agende um café com nosso time técnico.
            </p>
          </div>
          <a
            href="#contato"
            className="shrink-0 bg-transparent hover:bg-white/5 border border-white/10 hover:border-white/20 text-white font-display font-bold text-sm uppercase tracking-widest px-6 py-3.5 rounded transition-all duration-300"
          >
            Agendar Reunião Presencial
          </a>
        </motion.div>

      </div>
    </section>
  );
}
