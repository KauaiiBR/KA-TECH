import { ExternalLink, Code2, Sparkles, Cpu, Layers, CheckCircle2, User, Globe, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import fundadorPhoto from '../assets/images/fundador.png';

export default function FounderShowcase() {
  const skills = [
    { name: 'Desenvolvimento Web Full-Stack', level: 'Especialista' },
    { name: 'Criação de Landing Pages & SEO', level: 'Alta Conversão' },
    { name: 'Automações de Processos & APIs', level: 'Otimização' },
    { name: 'Sistemas ERP & Dashboards de Vendas', level: 'Completo' },
    { name: 'UI/UX & Design de Interfaces', level: 'Pixel Perfect' },
  ];

  const pillars = [
    {
      icon: <Code2 className="text-[#7C3AED]" size={20} />,
      title: 'Transparência em Primeiro Lugar',
      description: 'Diferente de agências que usam avaliações falsas, acreditamos na integridade. Nossa garantia é a qualidade técnica comprovada por portfólio real.',
    },
    {
      icon: <Cpu className="text-[#7C3AED]" size={20} />,
      title: 'Tecnologia sob Medida',
      description: 'Sistemas limpos, rápidos e que resolvem gargalos operacionais específicos do comércio e serviços locais.',
    },
    {
      icon: <Sparkles className="text-[#7C3AED]" size={20} />,
      title: 'Parceria de Verdade',
      description: 'Trabalho focado no faturamento da sua empresa. Suporte próximo, rápido e direto com quem constrói a sua solução.',
    },
  ];

  return (
    <section id="fundador" className="py-24 bg-[#0A0A0A] border-t border-neutral-900 relative overflow-hidden">
      {/* Background visual purple glow dots */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#7C3AED]/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-900/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#17052e] to-[#310c59] border border-[#7C3AED]/20 px-4 py-1.5 rounded-full text-xs font-mono font-medium text-[#7C3AED] uppercase tracking-widest">
            Compromisso com a Verdade
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
            Quem <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#7C3AED]">Faz Acontecer</span>
          </h2>
        </div>

        {/* Core Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Founder Profile Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-full flex flex-col justify-between rounded-2xl bg-gradient-to-b from-[#1c1c1c] to-[#141414] border border-neutral-700 p-8 shadow-2xl overflow-hidden group"
            >
              {/* Decorative light effect */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#7C3AED]/10 rounded-full filter blur-3xl group-hover:bg-[#7C3AED]/20 transition-all duration-500" />
              
              <div className="space-y-6 relative z-10">
                <div className="flex flex-col items-center text-center">
                  <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/20 mb-4 flex-shrink-0">
                    <img 
                      src={fundadorPhoto} 
                      alt="Kauã Ribeiro - Fundador da KA Tech" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-2xl text-white tracking-wide">
                      Kauã Ribeiro da Paixão
                    </h3>
                    <p className="text-sm text-[#7C3AED] font-mono tracking-wider uppercase font-semibold mt-1">
                      Desenvolvedor Principal & Fundador
                    </p>
                  </div>
                </div>

                <div className="space-y-4 font-sans text-base text-gray-200 leading-relaxed font-light">
                  <p>
                    Olá! Sou o idealizador da <strong className="text-white font-medium">KA Tech Solutions</strong>. Sou desenvolvedor de software focado em criar soluções que realmente geram valor econômico e operacional.
                  </p>
                  <p>
                    Acredito que o comércio e os prestadores de serviços de Pirapora e região merecem tecnologia de ponta, sem enrolação e sem amarras. Por isso, fundei a KA Tech com um objetivo claro: <strong className="text-white font-medium">unir design impecável, código de alta performance e transparência total</strong>.
                  </p>
                </div>

                {/* Skills Showcase list */}
                <div className="space-y-3 pt-4 border-t border-neutral-700">
                  <h4 className="text-sm font-mono text-gray-300 uppercase tracking-widest font-semibold">
                    Habilidades Destacadas
                  </h4>
                  <div className="space-y-2">
                    {skills.map((skill, index) => (
                      <div key={index} className="flex items-center justify-between text-sm bg-black/40 border border-neutral-700 rounded px-3 py-2">
                        <span className="text-gray-200 flex items-center space-x-2">
                          <CheckCircle2 size={14} className="text-[#7C3AED]" />
                          <span>{skill.name}</span>
                        </span>
                        <span className="text-[10px] font-mono text-purple-400 font-semibold uppercase tracking-wider">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action portfolio Button */}
              <div className="pt-8 mt-8 border-t border-neutral-900 relative z-10">
                <a
                  href="https://kauapaixaoport.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn flex items-center justify-center space-x-3 w-full bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] hover:from-[#6D28D9] hover:to-[#5B21B6] text-white py-5 px-6 rounded-xl font-display font-bold text-base uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(124,58,237,0.2)] hover:shadow-[0_0_35px_rgba(124,58,237,0.45)] hover:scale-[1.02] border border-[#7C3AED]/30"
                >
                  <Globe size={20} />
                  <span>Ver Todos os Meus Projetos</span>
                  <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Projects Grid (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <h3 className="font-display font-bold text-2xl text-white tracking-tight">
                Projetos Desenvolvidos
              </h3>
              <p className="text-sm text-gray-400 font-sans">
                Conheça alguns dos sistemas e sites que já entregamos.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {/* KA Tech */}
              <a href="https://ka-tech.onrender.com" target="_blank" rel="noopener noreferrer"
                className="group relative rounded-xl bg-[#1c1c1c] border border-neutral-700 p-4 hover:border-[#10B981]/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#1a1a1a] flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-bolt text-white text-lg"></i>
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs text-white uppercase group-hover:text-[#10B981] transition-colors">KA Tech</h4>
                  <p className="text-[10px] text-gray-500 mt-1">React • Vite • Tailwind</p>
                </div>
              </a>

              {/* KARPE */}
              <a href="https://karpcompany.netlify.app" target="_blank" rel="noopener noreferrer"
                className="group relative rounded-xl bg-[#1c1c1c] border border-neutral-700 p-4 hover:border-[#10B981]/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-shopping-cart text-[#7C3AED] text-lg"></i>
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs text-white uppercase group-hover:text-[#10B981] transition-colors">KARPE</h4>
                  <p className="text-[10px] text-gray-500 mt-1">E-commerce • Node.js</p>
                </div>
              </a>

              {/* Barbearia Blade */}
              <a href="https://barbearia-blade.netlify.app" target="_blank" rel="noopener noreferrer"
                className="group relative rounded-xl bg-[#1c1c1c] border border-neutral-700 p-4 hover:border-[#10B981]/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#c9a96e] to-[#1a1a1a] flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-cut text-white text-lg"></i>
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs text-white uppercase group-hover:text-[#10B981] transition-colors">Barbearia</h4>
                  <p className="text-[10px] text-gray-500 mt-1">Next.js • MongoDB</p>
                </div>
              </a>

              {/* Sonic Pizzas */}
              <a href="https://sonicpizzas.netlify.app" target="_blank" rel="noopener noreferrer"
                className="group relative rounded-xl bg-[#1c1c1c] border border-neutral-700 p-4 hover:border-[#10B981]/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#e63946] to-[#1a1a1a] flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-pizza-slice text-white text-lg"></i>
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs text-white uppercase group-hover:text-[#10B981] transition-colors">Sonic</h4>
                  <p className="text-[10px] text-gray-500 mt-1">HTML • CSS • JS</p>
                </div>
              </a>

              {/* Restaurante */}
              <a href="https://restauranteelegancy.netlify.app" target="_blank" rel="noopener noreferrer"
                className="group relative rounded-xl bg-[#1c1c1c] border border-neutral-700 p-4 hover:border-[#10B981]/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-utensils text-[#D4AF37] text-lg"></i>
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs text-white uppercase group-hover:text-[#10B981] transition-colors">Restaurante</h4>
                  <p className="text-[10px] text-gray-500 mt-1">HTML • CSS • JS</p>
                </div>
              </a>

              {/* Descubra+ */}
              <a href="https://descubramais.netlify.app" target="_blank" rel="noopener noreferrer"
                className="group relative rounded-xl bg-[#1c1c1c] border border-neutral-700 p-4 hover:border-[#10B981]/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#10B981] to-[#1a1a1a] flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-rocket text-white text-lg"></i>
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs text-white uppercase group-hover:text-[#10B981] transition-colors">Descubra+</h4>
                  <p className="text-[10px] text-gray-500 mt-1">React • Dashboard</p>
                </div>
              </a>
            </div>

            {/* Ver portfólio completo */}
            <a
              href="https://kauapaixaoport.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 text-sm text-white hover:text-[#10B981] font-bold uppercase tracking-wider transition-colors py-3 px-5 border border-neutral-700 hover:border-[#10B981]/40 rounded-lg bg-[#1c1c1c] hover:bg-[#10B981]/5"
            >
              <span>Ver Portfólio Completo</span>
              <ExternalLink size={14} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
