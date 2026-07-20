import React from 'react';
import { Monitor, Cpu, Zap, BarChart3, CheckSquare, Wrench } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES } from '../data';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  // Map string icon names to Lucide react components
  const iconMap: { [key: string]: React.ComponentType<{ className?: string; size?: number }> } = {
    Monitor: Monitor,
    Cpu: Cpu,
    Zap: Zap,
    BarChart3: BarChart3,
    Wrench: Wrench
  };

  return (
    <section id="servicos" className="py-24 bg-[#0A0A0A] border-t border-white/5 relative overflow-hidden">
      {/* Background visual geometric grid overlay */}
      <div className="absolute inset-0 z-0 opacity-2" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-[#7C3AED]/10 border border-[#7C3AED]/20 px-3 py-1 rounded-full text-xs font-mono font-semibold text-[#7C3AED] uppercase tracking-widest">
            Nossas Especialidades
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
            Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-purple-500">Serviços Premium</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-sans max-w-xl mx-auto">
            Soluções completas e de alta performance tecnológica desenhadas para converter acessos em lucros reais e automatizar processos desgastantes.
          </p>
        </div>

        {/* Bento/Grid Layout for Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="services-grid">
          {SERVICES.map((srv, index) => {
            const IconComponent = iconMap[srv.iconName] || Monitor;
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={srv.id}
                className="group relative rounded-xl bg-gradient-to-b from-[#141414] to-[#0D0D0D] border border-neutral-900 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#7C3AED]/40 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.6)] shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                id={`service-card-${srv.id}`}
              >
                {/* Purple subtle gradient glow effect on Hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[#7C3AED]/0 via-[#7C3AED]/0 to-[#7C3AED]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="space-y-6">
                  {/* Top line with Icon and index count */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center w-12 h-12 rounded bg-gradient-to-br from-[#1C1C1C] to-black border border-white/5 text-[#7C3AED] group-hover:bg-[#7C3AED]/10 group-hover:border-[#7C3AED]/50 transition-all duration-300 shadow-md">
                      <IconComponent size={24} className="group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-gray-600 tracking-widest uppercase">
                      KA_TECH // 0{index + 1}
                    </span>
                  </div>

                  {/* Title and description */}
                  <div className="space-y-2">
                    <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase group-hover:text-[#7C3AED] transition-colors duration-300">
                      {srv.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  {/* Checklist items */}
                  <div className="space-y-2 pt-2 border-t border-neutral-900 group-hover:border-[#7C3AED]/10 transition-colors duration-300">
                    {srv.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-gray-300 font-sans">
                        <CheckSquare size={14} className="text-[#7C3AED] mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Link */}
                <div className="pt-6 mt-4">
                  <button
                    onClick={() => onSelectService(srv.title)}
                    className="inline-flex items-center space-x-2 text-xs font-bold font-display uppercase tracking-widest text-white group-hover:text-[#7C3AED] transition-colors duration-300 cursor-pointer"
                  >
                    <span>Solicitar Orçamento</span>
                    <span className="transform group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </button>
                </div>

                {/* Subtle bottom edge lines wrapping card */}
                <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#7C3AED] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
