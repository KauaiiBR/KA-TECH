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

          {/* Right Column: Pillars & Values (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="font-display font-bold text-2xl text-white tracking-tight">
                Como garantimos resultados extraordinários para o seu negócio?
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-sans font-light">
                Desenvolvemos soluções robustas que realmente resolvem seus problemas cotidianos de vendas, estoque, atração de clientes e fluxos internos de trabalho. Nosso compromisso é com a qualidade do software e com a clareza do processo.
              </p>
            </div>

            {/* Core pillars grid */}
            <div className="grid grid-cols-1 gap-5">
              {pillars.map((pillar, index) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={index}
                  className="flex items-start space-x-4 rounded-xl bg-[#1c1c1c] border border-neutral-700 p-5 hover:border-[#10B981]/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                >
                  <div className="flex-shrink-0 p-2.5 rounded-lg bg-[#7C3AED]/10 border border-[#7C3AED]/20 group-hover:bg-[#10B981]/15 group-hover:border-[#10B981]/40 transition-all duration-300">
                    {pillar.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-base text-white sm:text-lg">
                      {pillar.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-300 font-sans font-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick quote block */}
            <div className="rounded-xl border-2 border-[#7C3AED]/30 p-6 bg-gradient-to-r from-[#1c082f] via-[#0F0D0E] to-[#121212] text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_0_30px_rgba(124,58,237,0.1)]">
              <div className="space-y-2">
                <span className="text-base font-mono uppercase tracking-widest text-[#7C3AED] font-bold">
                  Quer ver os projetos desenvolvidos?
                </span>
                <p className="text-lg text-gray-200 font-sans">
                  Acesse o portfólio completo do Kauã — sistemas, landing pages, automações e mais.
                </p>
              </div>
              <a
                href="https://kauapaixaoport.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-base text-white hover:text-[#7C3AED] font-bold uppercase tracking-wider transition-colors py-3 px-5 border-2 border-[#7C3AED]/40 hover:border-[#7C3AED] rounded-lg bg-[#7C3AED]/10 hover:bg-[#7C3AED]/20 shadow-[0_0_15px_rgba(124,58,237,0.15)]"
              >
                <span>Abrir Portfólio</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
