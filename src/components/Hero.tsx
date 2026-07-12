import { ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-black"
    >
      {/* Background Graphic Asset with Dark Overlay Mask */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline
          src="src/assets/images/Firefly Create a seamless infinite looping animation from this futuristic technology background. Kee.mp4"
          alt="KA Tech Solutions Background"
          className="w-full h-full object-cover opacity-06 filter scale-102"
          referrerPolicy="no-referrer"
        />
        {/* Cinematic gradient overlays to make typography drop shadow/pop on dark canvas */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A09] via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />

        {/* Ambient background glow dots */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7C3AED] rounded-full filter blur-[140px] opacity-10 animate-pulse-glow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Main content block */}
          <div className="lg:col-span-8 flex flex-col text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#17052e] to-[#310c59] border border-[#7C3AED]/30 px-3 py-1.5 rounded-full text-white w-fit shadow-[0_0_15px_rgba(124,58,237,0.05)]"
              id="hero-badge"
            >
              <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase">
                TECNOLOGIA & ACELERAÇÃO DE NEGÓCIOS
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white leading-tight tracking-tight drop-shadow-lg uppercase"
              id="hero-title"
            >
              Tecnologia que <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-purple-500 to-[#A78BFA] drop-shadow-[0_0_30px_rgba(124,58,237,0.2)]">
                Acelera seu Negócio
              </span> <br />
              em Pirapora
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed font-sans"
              id="hero-subtitle"
            >
              Desenvolvemos sites comerciais de alto padrão, automações inteligentes,
              landing pages que convertem visitantes em clientes e sistemas ERP sob medida com painéis de vendas integrados.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
              id="hero-ctas"
            >
              <button
                onClick={onCtaClick}
                className="group relative flex items-center justify-center space-x-3 bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-7 py-4 rounded font-display font-extrabold text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer border border-[#A78BFA]/20 hover:border-[#A78BFA]/50 hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] transform hover:-translate-y-0.5 active:translate-y-0"
                id="hero-primary-btn"
              >
                <span>Quero modernizar minha empresa</span>
                <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>

              <a
                href="#servicos"
                className="flex items-center justify-center space-x-2 text-xs uppercase font-extrabold tracking-widest text-gray-300 hover:text-white transition-colors duration-300 py-3 px-4 border border-white/5 hover:border-white/10 rounded bg-white/2 hover:bg-white/5"
                id="hero-secondary-btn"
              >
                Conhecer Serviços
              </a>
            </motion.div>

            {/* Quick check points/badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-[#1C1C1C]"
              id="hero-features"
            >
              <div className="flex items-center space-x-2 text-gray-400">
                <CheckCircle2 size={16} className="text-[#7C3AED]" />
                <span className="text-xs font-medium font-mono">100% Personalizado</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <CheckCircle2 size={16} className="text-[#7C3AED]" />
                <span className="text-xs font-medium font-mono">Código Limpo & Rápido</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Shield size={16} className="text-[#7C3AED]" />
                <span className="text-xs font-medium font-mono">Suporte Regional Presencial</span>
              </div>
            </motion.div>
          </div>

          {/* Geometric Tech Visual Element (Right Side) */}
          <div className="lg:col-span-4 hidden lg:block" id="hero-right-visual">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-sm mx-auto aspect-square rounded-2xl bg-gradient-to-br from-[#121212] to-[#0D0D0D] border border-white/5 p-6 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden"
            >
              {/* Grid texture inside card */}
              <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />

              <div className="relative h-full flex flex-col justify-between z-10">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-600" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-600" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-gray-500 tracking-wider">KA_TECH_V2.0</span>
                </div>

                <div className="space-y-2.5 my-auto py-3">
                  {/* Item 1: Impacto Digital */}
                  <div className="bg-[#181818] border border-white/5 rounded-lg p-2.5 space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] font-mono text-[#7C3AED] uppercase font-bold tracking-widest">Impacto Digital</span>
                      <span className="text-[9px] font-semibold text-green-500 font-mono">+450%</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-sm font-black text-white font-display">Visibilidade & Atração</span>
                    </div>
                    <div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden">
                      <div className="bg-[#7C3AED] h-full rounded-full w-[85%]" />
                    </div>
                  </div>

                  {/* Item 2: Resultados Estimados */}
                  <div className="bg-[#181818] border border-white/5 rounded-lg p-2.5 space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] font-mono text-[#7C3AED] uppercase font-bold tracking-widest">Resultados Estimados</span>
                      <span className="text-[9px] font-semibold text-green-500 font-mono">Alta</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-sm font-black text-white font-display">Aceleração de Vendas</span>
                    </div>
                  </div>

                  {/* Item 3: Potencial de Crescimento */}
                  <div className="bg-[#181818] border border-white/5 rounded-lg p-2.5 space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] font-mono text-[#7C3AED] uppercase font-bold tracking-widest">Potencial de Crescimento</span>
                      <span className="text-[9px] font-semibold text-purple-400 font-mono">5x Mais</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-sm font-black text-white font-display">Escala de Negócios</span>
                    </div>
                    <div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden">
                      <div className="bg-[#7C3AED] h-full rounded-full w-[95%]" />
                    </div>
                  </div>

                  {/* Item 4: Performance do Seu Negócio */}
                  <div className="bg-[#181818] border border-white/5 rounded-lg p-2.5 space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] font-mono text-[#7C3AED] uppercase font-bold tracking-widest">Performance do Seu Negócio</span>
                      <span className="text-[9px] text-green-500 font-mono">100%</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-neutral-800 pt-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded bg-[#7C3AED]/10 border border-[#7C3AED]/30 flex items-center justify-center font-bold text-[10px] text-[#7C3AED]">MG</div>
                    <span className="text-xs text-gray-400 font-medium heading-font font-mono">Pirapora e Região</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                </div>
              </div>

              {/* Intense corner glowing purple neon lines wrapping */}
              <div className="absolute top-0 right-0 w-24 h-0.5 bg-gradient-to-l from-[#7C3AED] to-transparent" />
              <div className="absolute top-0 right-0 w-0.5 h-24 bg-gradient-to-b from-[#7C3AED] to-transparent" />
              <div className="absolute bottom-0 left-0 w-24 h-0.5 bg-gradient-to-r from-[#7C3AED] to-transparent" />
              <div className="absolute bottom-0 left-0 w-0.5 h-24 bg-gradient-to-t from-[#7C3AED] to-transparent" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
