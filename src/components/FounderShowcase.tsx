import { ExternalLink, Globe, ArrowUpRight, ShoppingCart, Scissors, Pizza, Utensils, Rocket } from 'lucide-react';
import { motion } from 'motion/react';
import fundadorPhoto from '../assets/images/fundador.png';

export default function FounderShowcase() {
  const projects = [
    {
      title: 'KARPE Company',
      description: 'E-commerce com catálogo, carrinho, integração administrativa e identidade visual moderna para marca jovem.',
      url: 'https://karpcompany.netlify.app',
      icon: ShoppingCart,
      gradient: 'from-[#1a1a1a] to-[#2d2d2d]',
      tags: ['E-commerce', 'Node.js', 'API'],
    },
    {
      title: 'Barbearia Blade',
      description: 'Site premium para barbearia com estética clássica, agendamento online e experiência responsiva.',
      url: 'https://barbearia-blade.netlify.app',
      icon: Scissors,
      gradient: 'from-[#c9a96e] to-[#1a1a1a]',
      tags: ['Next.js', 'Tailwind', 'MongoDB'],
    },
    {
      title: 'Sonic Pizzas',
      description: 'Landing page comercial para pizzaria com cardápio, visual chamativo e pedido via WhatsApp.',
      url: 'https://sonicpizzas.netlify.app',
      icon: Pizza,
      gradient: 'from-[#e63946] to-[#1a1a1a]',
      tags: ['HTML', 'CSS', 'WhatsApp'],
    },
    {
      title: 'Restaurante Elegante',
      description: 'Site institucional para restaurante com cardápio digital, galeria, reservas e visual sofisticado.',
      url: 'https://restauranteelegancy.netlify.app',
      icon: Utensils,
      gradient: 'from-[#2d2d2d] to-[#1a1a1a]',
      tags: ['HTML', 'CSS', 'Responsivo'],
    },
    {
      title: 'Trajetória Descubra+',
      description: 'Sistema de hackathon com login, perfis de simulação, dashboard e trilhas de inclusão profissional.',
      url: 'https://descubramais.netlify.app',
      icon: Rocket,
      gradient: 'from-[#10B981] to-[#1a1a1a]',
      tags: ['React', 'Dashboard', 'Auth'],
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Founder Profile Card (5 cols) */}
          <div className="lg:col-span-4 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex flex-col rounded-2xl bg-gradient-to-b from-[#1c1c1c] to-[#141414] border border-neutral-700 p-8 shadow-2xl overflow-hidden group"
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
          <div className="lg:col-span-8 flex flex-col justify-center space-y-7">
            <div className="space-y-3">
              <h3 className="font-display font-black text-3xl text-white uppercase tracking-tight">
                Projetos Desenvolvidos
              </h3>
              <p className="text-base text-gray-300 font-sans leading-relaxed">
                Uma vitrine dos projetos entregues, com links diretos para você navegar e avaliar o resultado final.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {projects.map((project) => {
                const ProjectIcon = project.icon;

                return (
                <a
                  key={project.title}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl bg-[#1c1c1c] border border-neutral-700 transition-all duration-300 hover:-translate-y-1 hover:border-[#10B981]/50 hover:shadow-[0_18px_45px_rgba(16,185,129,0.14)]"
                >
                  <div className={`relative h-28 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.20),transparent_35%)] opacity-70" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-[#10B981]/10 transition-colors duration-300" />
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-black/25 text-white shadow-2xl transition-transform duration-300 group-hover:scale-110">
                      <ProjectIcon size={30} strokeWidth={2.4} />
                    </div>
                  </div>

                  <div className="space-y-3 p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="font-display text-lg font-black uppercase leading-tight text-white transition-colors duration-300 group-hover:text-[#10B981]">
                        {project.title}
                      </h4>
                      <ExternalLink size={16} className="mt-1 shrink-0 text-gray-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#10B981]" />
                    </div>

                    <p className="min-h-[60px] text-sm leading-relaxed text-gray-300">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-neutral-700 bg-black/25 px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-gray-300 group-hover:border-[#10B981]/30 group-hover:text-[#10B981] transition-colors duration-300">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 pt-2 text-xs font-display font-bold uppercase tracking-widest text-white transition-colors duration-300 group-hover:text-[#10B981]">
                      <span>Acessar projeto</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </a>
                );
              })}
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
