import { PlanItem, FAQItem } from '../types';

export const PLANS: PlanItem[] = [
  {
    id: 'estrategica',
    name: 'Plano Presença Estratégica',
    tagline: 'Ideal para empresas que buscam consistência, imagem profissional e atração contínua de clientes.',
    frequencyTag: '3 publicações por semana',
    postsVideo: '2 vídeos por semana',
    postsStatic: '1 post estático ou carrossel por semana',
    features: [
      'Produção audiovisual com 8 vídeos mensais',
      'Captação profissional de fotos e vídeos',
      'Imagens aéreas com drone',
      'Gestão de redes sociais com 3 publicações por semana',
      'Gestão de tráfego pago',
    ],
    pricePix: 3797,
    priceCard: 4197,
    highlight: false,
  },
  {
    id: 'performance',
    name: 'Plano Alta Performance',
    badge: 'MAIS COMPLETO',
    tagline: 'Máxima velocidade de crescimento, presença diária nas redes e maior escala em tráfego pago.',
    frequencyTag: '5 publicações por semana',
    postsVideo: '3 vídeos por semana',
    postsStatic: '2 posts estáticos ou carrosséis por semana',
    features: [
      'Produção audiovisual com 8 vídeos mensais',
      'Captação profissional de fotos e vídeos',
      'Imagens aéreas com drone',
      'Gestão de redes sociais com 5 publicações por semana',
      'Gestão de tráfego pago',
    ],
    pricePix: 4097,
    priceCard: 4497,
    highlight: true,
  },
];

export const AUDIOVISUAL_SERVICES = [
  {
    icon: 'Video',
    title: '8 Vídeos por mês',
    description: 'Conteúdos em formato vertical de altíssimo engajamento.',
    included: 'Serviço Incluso no Plano',
  },
  {
    icon: 'Camera',
    title: 'Captação Profissional',
    description: 'Equipamentos de cinema, iluminação avançada e áudio cristalino.',
    included: 'Serviço Incluso no Plano',
  },
  {
    icon: 'Sparkles',
    title: 'Imagens Aéreas com Drone',
    description: 'Takes panorâmicos para dar magnitude e imponência à sua marca.',
    included: 'Serviço Incluso no Plano',
  },
  {
    icon: 'Compass',
    title: 'Planejamento de Conteúdo',
    description: 'Estratégia editorial direcionada para os objetivos do seu negócio.',
    included: 'Serviço Incluso no Plano',
  },
  {
    icon: 'FileText',
    title: 'Criação de Roteiros',
    description: 'Textos alinhados ao posicionamento e tom de voz da sua empresa.',
    included: 'Serviço Incluso no Plano',
  },
  {
    icon: 'Film',
    title: 'Edição e Finalização',
    description: 'Cortes dinâmicos, legendas estilizadas, sound design e color grading.',
    included: 'Serviço Incluso no Plano',
  },
];

export const TRAFEGO_CARDS = [
  {
    icon: 'Target',
    title: 'Planejamento das campanhas estratégicas',
    description: 'Execução analítica constante com foco no menor CPL (Custo por Lead) e maior ROI.',
  },
  {
    icon: 'Settings',
    title: 'Configuração e acompanhamento diário dos anúncios',
    description: 'Execução analítica constante com foco no menor CPL (Custo por Lead) e maior ROI.',
  },
  {
    icon: 'Zap',
    title: 'Definição estratégica e segmentação de públicos',
    description: 'Execução analítica constante com foco no menor CPL (Custo por Lead) e maior ROI.',
  },
  {
    icon: 'BarChart2',
    title: 'Análise detalhada dos resultados e métricas',
    description: 'Execução analítica constante com foco no menor CPL (Custo por Lead) e maior ROI.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Otimização contínua para maior retorno do investimento',
    description: 'Execução analítica constante com foco no menor CPL (Custo por Lead) e maior ROI.',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'Como funciona a captação audiovisual com drone?',
    answer: 'Realizamos o agendamento prévio das gravações na sede da sua empresa ou locações externas estratégicas. Utilizamos drones homologados com captação audiovisual premium e pilotos certificados para registrar takes aéreos cinematográficos que elevam a percepção de valor da sua marca.',
  },
  {
    question: 'Como funciona o investimento em Tráfego Pago?',
    answer: 'Nossa equipe cuida de 100% da estratégia, criação dos anúncios (criativos e roteiros), segmentação de público e otimização diária. O valor da verba de tráfego é pago diretamente às plataformas (Meta Ads/Google Ads) através do seu cartão de crédito ou boleto empresarial.',
  },
  {
    question: 'Qual a diferença entre os planos Presença Estratégica e Alta Performance?',
    answer: 'O Plano Presença Estratégica garante 3 postagens por semana (2 vídeos + 1 post estático/carrossel), sendo ideal para manter constância e atrair clientes. O Plano Alta Performance possui foco em presença diária com 5 postagens por semana (3 vídeos + 2 posts estáticos/carrosséis) e escala acelerada em tráfego pago.',
  },
  {
    question: 'Qual a forma de contratação e início dos trabalhos?',
    answer: 'A contratação é simples e sem burocracia. Após a aceitação da proposta, enviamos o contrato digital para assinatura. Em seguida, realizamos a reunião de onboarding (kickoff) para definir o cronograma de gravações, alinhar os roteiros e iniciar a primeira produção.',
  },
];
