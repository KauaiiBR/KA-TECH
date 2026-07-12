import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-[#0A0A0A] border-t border-neutral-900 relative overflow-hidden">
      
      {/* Background visual purple glow dot */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#7C3AED]/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#17052e] to-[#310c59] border border-[#7C3AED]/20 px-3 py-1 rounded-full text-xs font-mono font-medium text-[#7C3AED] uppercase tracking-widest">
            Casos de Sucesso Locais
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
            Quem <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#7C3AED]">Confia na K&A</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-sans max-w-lg mx-auto">
            Veja como ajudamos líderes empresariais e comerciantes em Pirapora e região norte-mineira a obter resultados reais através da internet.
          </p>
        </div>

        {/* Testimonials List Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="testimonials-grid">
          {TESTIMONIALS.map((testi, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={testi.id}
                className="relative rounded-lg bg-[#141414] border border-neutral-900 p-6 flex flex-col justify-between hover:border-neutral-800 transition-all duration-300 group shadow-md"
                id={`testimonial-card-${testi.id}`}
              >
                {/* Accent Quote Icon in background */}
                <div className="absolute top-6 right-6 text-neutral-800/20 group-hover:text-[#7C3AED]/10 transition-colors duration-300">
                  <Quote size={40} />
                </div>

                <div className="space-y-4 relative z-10">
                  {/* Rating star render */}
                  <div className="flex items-center space-x-1">
                    {[...Array(testi.rating)].map((_, rIdx) => (
                      <Star key={rIdx} size={14} className="fill-[#7C3AED] text-[#7C3AED]" />
                    ))}
                  </div>

                  {/* Feedback Text quote */}
                  <p className="text-xs sm:text-sm text-gray-300 italic leading-relaxed font-sans font-light">
                    "{testi.content}"
                  </p>
                </div>

                {/* User Bio Line */}
                <div className="flex items-center space-x-3.5 pt-6 mt-6 border-t border-neutral-900 group-hover:border-neutral-800 transition-colors duration-300">
                  {testi.avatarUrl ? (
                    <img
                      src={testi.avatarUrl}
                      alt={testi.name}
                      className="w-10 h-10 rounded bg-[#1C1C1C] object-cover border border-white/5"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded bg-[#7C3AED]/10 border border-[#7C3AED]/30 flex items-center justify-center font-display font-black text-xs text-[#7C3AED]">
                      {testi.name.slice(0, 2).toUpperCase()}
                    </div>
                  )}

                  <div className="flex flex-col text-left">
                    <span className="font-display font-bold text-xs sm:text-sm text-white group-hover:text-[#7C3AED] transition-colors duration-300">
                      {testi.name}
                    </span>
                    <span className="text-[10px] sm:text-xs text-gray-500 font-medium">
                      {testi.role}, <span className="text-gray-400">{testi.company}</span>
                    </span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
