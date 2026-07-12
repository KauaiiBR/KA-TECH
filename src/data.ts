import { ServiceItem, DifferentialItem, TestimonialItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'sites-comerciais',
    iconName: 'Monitor',
    title: 'Criação de Sites Comerciais',
    description: 'Desenvolvimento de websites modernos, focados em atrair clientes locais e posicionar sua marca no Google com alta performance.',
    features: [
      'Design 100% responsivo (perfeito em celular e desktop)',
      'Otimização avançada para o Google (SEO local)',
      'Vitrine digital de produtos e serviços autogerenciável',
      'Integração com WhatsApp e botões de contato rápido'
    ]
  },
  {
    id: 'automacoes',
    iconName: 'Cpu',
    title: 'Automações de Processos',
    description: 'Elimine tarefas manuais repetitivas e faça sua equipe produzir 10x mais com integrações inteligentes e automatizadas.',
    features: [
      'Disparos inteligentes e chatbots de WhatsApp',
      'Fluxos automatizados de e-mail marketing e nutrição',
      'Sincronização de contatos com ferramentas de CRM',
      'Sistemas automatizados de alertas e relatórios internos'
    ]
  },
  {
    id: 'landing-pages',
    iconName: 'Zap',
    title: 'Landing Pages de Alta Conversão',
    description: 'Páginas de vendas altamente persuasivas projetadas milimetricamente com foco em transformar cliques em faturamento.',
    features: [
      'Velocidade de carregamento ultrarrápida (abaixo de 1.5s)',
      'Escrita persuasiva estruturada (Copywriting de elite)',
      'Rastreamento completo (Pixel do Facebook e Google Analytics)',
      'Testes A/B focados na melhor taxa de de conversão'
    ]
  },
  {
    id: 'erp-sistemas',
    iconName: 'BarChart3',
    title: 'Sistema ERP + Painel de Vendas',
    description: 'Sistemas web robustos sob medida para gerenciar suas vendas, estoque e equipe de forma integrada e visualmente impecável.',
    features: [
      'Painel de controle visual (Dashboard de faturamento/metas)',
      'Controle completo de estoque e fluxo financeiro',
      'Emissão de relatórios em tempo real e gráficos dinâmicos',
      'Gerenciamento simplificado de equipe e comissões'
    ]
  }
];

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    id: 'atendimento-local',
    iconName: 'MapPin',
    title: 'Atendimento Local em Pirapora',
    description: 'Entendemos a dinâmica econômica e as necessidades reais do comércio regional do norte de Minas Gerais.'
  },
  {
    id: 'suporte-rapido',
    iconName: 'Clock',
    title: 'Suporte Rápido e Próximo',
    description: 'Nada de chamados em plataformas frias. Fale diretamente com quem desenvolveu seu sistema via WhatsApp ou presencialmente.'
  },
  {
    id: 'solucoes-personalizadas',
    iconName: 'Sliders',
    title: 'Soluções Personalizadas',
    description: 'Nós não forçamos sua empresa a se adaptar a um sistema engessado. Criamos a solução de acordo com seu fluxo de processos.'
  },
  {
    id: 'pos-implantacao',
    iconName: 'ShieldCheck',
    title: 'Suporte Pós-Implantação',
    description: 'Treinamos sua equipe, acompanhamos o lançamento e continuamos ao seu lado para otimizar os resultados continuamente.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'depo-1',
    name: 'Geraldo Fonseca',
    role: 'Proprietário',
    company: 'Distribuidora São Francisco (Pirapora - MG)',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    content: 'O Sistema ERP integrado que a K&A desenvolveu revolucionou nosso controle de vendas e estoque. O que antes levava horas de digitação manual agora é feito em segundos. Nosso faturamento e controle de metas são demonstrados em tempo real na tela. Excelente equipe local!',
    rating: 5
  },
  {
    id: 'depo-2',
    name: 'Mariana Silveira',
    role: 'Fundadora e CEO',
    company: 'Silveira Boutique & Moda (Pirapora - MG)',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    content: 'A Landing Page de alta conversão e a automação de atendimento de WhatsApp criada pela KA Tech Solutions literalmente salvaram meu estoque. Nossas campanhas online triplicaram o número de leads qualificados e o atendimento automático organiza as vendas sem sobrecarregar minha equipe.',
    rating: 5
  },
  {
    id: 'depo-3',
    name: 'Roberto Amaral',
    role: 'Sócio-Diretor',
    company: 'Amaral Agrocomercial (Norte de Minas)',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    content: 'Estávamos procurando uma assessoria de tecnologia de confiança que conhecesse nosso mercado. O novo site comercial posicionado no Google nos trouxe contatos valiosos de várias cidades vizinhas como Várzea da Palma e Buritizeiro. O suporte presencial é sensacional.',
    rating: 5
  }
];
