import { Instagram, Linkedin, Phone, MessageSquareCode, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleFooterNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#050505] border-t border-neutral-900 pt-16 pb-8 relative overflow-hidden" id="rodape">
      {/* Background graphic touch */}
      <div className="absolute inset-x-0 bottom-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-neutral-900 pb-12 mb-12">
          
          {/* Col 1: Logo & Brand Pitch */}
          <div className="md:col-span-1.5 flex flex-col space-y-4 text-left">
            <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => handleFooterNavClick('inicio')}>
              <div className="flex items-center justify-center w-8 h-8 rounded border border-[#7C3AED]/40 bg-black shadow-[0_0_8px_rgba(124,58,237,0.1)]">
                <span className="font-display font-extrabold text-white text-sm">KA</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-white text-sm leading-none tracking-wide">
                  KA TECH
                </span>
                <span className="text-[8px] text-gray-500 font-mono tracking-widest uppercase">
                  SOLUTIONS
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-400 font-sans leading-relaxed max-w-xs">
              Aceleração comercial através de engenharia de software de alta performance. Desenvolvido sob medida para impulsionar empresas de Pirapora, MG e região norte-mineira.
            </p>

            {/* Social media connections */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://www.instagram.com/kaua._paixao?igsh=enJqbDhjaWhvM3Fp"
                target="_blank"
                rel="noreferrer noopener"
                className="w-8 h-8 rounded bg-neutral-900 border border-white/5 hover:border-[#7C3AED]/30 text-gray-400 hover:text-[#7C3AED] flex items-center justify-center transition-all duration-300"
                aria-label="Acessar Instagram da KA Tech Solutions"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://www.linkedin.com/in/kaua-ribeiro-003951300/"
                target="_blank"
                rel="noreferrer noopener"
                className="w-8 h-8 rounded bg-neutral-900 border border-white/5 hover:border-[#7C3AED]/30 text-gray-400 hover:text-[#7C3AED] flex items-center justify-center transition-all duration-300"
                aria-label="Acessar LinkedIn da KA Tech Solutions"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5538999406432"
                target="_blank"
                rel="noreferrer noopener"
                className="w-8 h-8 rounded bg-neutral-900 border border-white/5 hover:border-[#7C3AED]/30 text-gray-400 hover:text-green-500 flex items-center justify-center transition-all duration-300"
                aria-label="Acessar WhatsApp da KA Tech Solutions"
              >
                <Phone size={14} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="text-left flex flex-col space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#7C3AED]">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-sans">
              <li>
                <button onClick={() => handleFooterNavClick('inicio')} className="hover:text-white transition-colors cursor-pointer">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => handleFooterNavClick('servicos')} className="hover:text-white transition-colors cursor-pointer">
                  Nossos Serviços
                </button>
              </li>
              <li>
                <button onClick={() => handleFooterNavClick('diferenciais')} className="hover:text-white transition-colors cursor-pointer">
                  Diferenciais de Mercado
                </button>
              </li>
              <li>
                <button onClick={() => handleFooterNavClick('depoimentos')} className="hover:text-white transition-colors cursor-pointer">
                  Histórias de Clientes
                </button>
              </li>
              <li>
                <button onClick={() => handleFooterNavClick('contato')} className="hover:text-white transition-colors cursor-pointer">
                  Fale Conosco
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services shortcuts */}
          <div className="text-left flex flex-col space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#7C3AED]">
              O que Desenvolvemos
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-sans">
              <li>
                <span className="text-gray-400">Sites Comerciais Otimizados</span>
              </li>
              <li>
                <span className="text-gray-400">Automações Inteligentes de WhatsApp</span>
              </li>
              <li>
                <span className="text-gray-400">Landing Pages Persuasivas (Vendas)</span>
              </li>
              <li>
                <span className="text-gray-400">Sistemas ERP com Gráficos Financeiros</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Regional Base */}
          <div className="text-left flex flex-col space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#7C3AED]">
              Base Operacional
            </h4>
            <div className="space-y-3 text-xs text-gray-400 font-sans leading-relaxed">
              <p className="font-bold text-white uppercase tracking-wide">
                KA Tech Solutions Ltda.
              </p>
              <p>
             <br />

              </p>
              <p className="text-[10px] text-gray-500 font-mono">
              </p>
            </div>
          </div>

        </div>

        {/* Bottom credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div>
            <span>&copy; {currentYear} KA Tech Solutions. Todos os direitos reservados.</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>Desenvolvido com</span>
            <Heart size={10} className="text-[#7C3AED] fill-[#7C3AED]" />
            <span>em Pirapora (MG)</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
