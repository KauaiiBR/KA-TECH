import { ExternalLink, Code2, Sparkles, Cpu, Layers, CheckCircle2, User, Globe, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

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
              className="relative h-full flex flex-col justify-between rounded-2xl bg-gradient-to-b from-[#141414] to-[#0d0d0d] border border-neutral-800/80 p-8 shadow-2xl overflow-hidden group"
            >
              {/* Decorative light effect */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#7C3AED]/10 rounded-full filter blur-3xl group-hover:bg-[#7C3AED]/20 transition-all duration-500" />
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-[#7C3AED] to-purple-400 p-0.5 shadow-md shadow-purple-900/30">
                    <div className="w-full h-full rounded-[10px] bg-neutral-900 flex items-center justify-center text-white">
                      <User size={28} className="text-[#7C3AED]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display font-black text-xl text-white tracking-wide">
                      Kauã Ribeiro da Paixão
                    </h3>
                    <p className="text-xs text-[#7C3AED] font-mono tracking-wider uppercase font-semibold">
                      Desenvolvedor Principal & Fundador
                    </p>
                  </div>
                </div>

                <div className="space-y-4 font-sans text-sm text-gray-300 leading-relaxed font-light">
                  <p>
                    Olá! Sou o idealizador da <strong className="text-white font-medium">KA Tech Solutions</strong>. Sou desenvolvedor de software focado em criar soluções que realmente geram valor econômico e operacional.
                  </p>
                  <p>
                    Acredito que o comércio e os prestadores de serviços de Pirapora e região merecem tecnologia de ponta, sem enrolação e sem amarras. Por isso, fundei a KA Tech com um objetivo claro: <strong className="text-white font-medium">unir design impecável, código de alta performance e transparência total</strong>.
                  </p>
                </div>

                {/* Skills Showcase list */}
                <div className="space-y-3 pt-4 border-t border-neutral-900">
                  <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest font-semibold">
                    Habilidades Destacadas
                  </h4>
                  <div className="space-y-2">
                    {skills.map((skill, index) => (
                      <div key={index} className="flex items-center justify-between text-xs bg-black/40 border border-neutral-900/60 rounded px-3 py-2">
                        <span className="text-gray-300 flex items-center space-x-2">
                          <CheckCircle2 size={12} className="text-[#7C3AED]" />
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
                  className="group/btn flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] hover:from-[#6D28D9] hover:to-[#5B21B6] text-white py-3.5 px-5 rounded-lg font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(124,58,237,0.15)] hover:shadow-[0_0_25px_rgba(124,58,237,0.35)] hover:scale-[1.01]"
                >
                  <Globe size={14} />
                  <span>Conhecer Meu Portfólio</span>
                  <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
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
                  className="flex items-start space-x-4 rounded-xl bg-[#141414] border border-neutral-900/80 p-5 hover:border-neutral-800 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 p-2.5 rounded-lg bg-[#7C3AED]/10 border border-[#7C3AED]/20">
                    {pillar.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-sm text-white sm:text-base">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-400 font-sans font-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick quote block */}
            <div className="rounded-xl border border-dashed border-neutral-800 p-5 bg-neutral-950/40 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#7C3AED] font-semibold">
                  Quer ver os projetos desenvolvidos?
                </span>
                <p className="text-xs text-gray-400 font-sans">
                  Acesse o portfólio completo do Kauã para ver sistemas de faturamento, landing pages e automações ativas.
                </p>
              </div>
              <a
                href="https://kauapaixaoport.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 text-xs text-white hover:text-[#7C3AED] font-bold uppercase tracking-wider transition-colors py-2 px-3 border border-neutral-800 hover:border-[#7C3AED]/40 rounded bg-black/20"
              >
                <span>Ver Portfólio</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
