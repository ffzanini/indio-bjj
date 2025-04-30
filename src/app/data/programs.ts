export interface Programs {
  id: number
  navigation: string
  image: string
  title: string
  description: string
  quote: string
  benefits: string[]
  professors: string
}

export const programs: Programs[] = [
  {
    id: 1,
    navigation: 'iniciante',
    image: '/images/slider/slider5.jpeg',
    title: 'Fundamentos do Jiu Jitsu',
    description:
      'Os Fundamentos do Jiu-Jitsu representam a espinha dorsal da arte suave. Nesta seção, exploramos os princípios técnicos e conceituais que sustentam toda a prática — como postura, base, equilíbrio, mobilidade no solo, controle de distância, defesa pessoal e noções de alavanca e biomecânica. Cada movimento, posição ou transição avançada nasce da compreensão sólida desses fundamentos. Aqui, você terá acesso a explicações detalhadas, vídeos demonstrativos e dicas práticas que servem tanto para quem está começando quanto para praticantes avançados que desejam refinar sua base. Aprender, revisar e dominar os fundamentos é essencial para evoluir com segurança, inteligência e eficiência no tatame.',
    quote:
      '“O faixa preta nada mais é que um faixa branca que não desistiu.” – Fabiano Índio.',
    benefits: [
      'Aprendizado do Jiu Jitsu Básico',
      'Defesa Pessoal',
      'Aumento de energia e concentração',
      'Melhora do condicionamento físico',
      'Auto-confiança',
      'Se fornar parte da família JA',
    ],
    professors: 'Fabiano Índio',
  },
  {
    id: 2,
    navigation: 'intermediario',
    image: '/images/slider/slider5.jpeg',
    title: 'Intermediário',
    description: 'texto em construção',
    quote: '“frase de efeito” – Índio.',
    benefits: ['Auto-confiança', 'Se fornar parte da família JA'],
    professors: 'Fabiano Índio',
  },
  {
    id: 3,
    navigation: 'avancado',
    image: '/images/slider/slider5.jpeg',
    title: 'Avançado',
    description: 'texto em construção',
    quote: '“frase de efeito” – Índio.',
    benefits: ['Auto-confiança', 'Se fornar parte da família JA'],
    professors: 'Fabiano Índio',
  },
  {
    id: 4,
    navigation: 'competicao',
    image: '/images/slider/slider5.jpeg',
    title: 'Competição',
    description: 'texto em construção',
    quote: '“frase de efeito” – Índio.',
    benefits: ['Auto-confiança', 'Se fornar parte da família JA'],
    professors: 'Fabiano Índio',
  },
  {
    id: 4,
    navigation: 'baby-kids-teen',
    image: '/images/slider/slider5.jpeg',
    title: 'Baby, Kids e Teen',
    description: 'texto em construção',
    quote: '“frase de efeito” – Índio.',
    benefits: ['Auto-confiança', 'Se fornar parte da família JA'],
    professors: 'Monique Valadão',
  },
  {
    id: 5,
    navigation: 'executivo',
    image: '/images/slider/slider5.jpeg',
    title: 'Executivo(35+)',
    description: 'texto em construção',
    quote: '“frase de efeito” – Índio.',
    benefits: ['Auto-confiança', 'Se fornar parte da família JA'],
    professors: 'Fabiano Índio',
  },
  {
    id: 6,
    navigation: 'nogi',
    image: '/images/slider/slider5.jpeg',
    title: 'NO GI (sem kimono)',
    description: 'texto em construção',
    quote: '“frase de efeito” – Índio.',
    benefits: ['Auto-confiança', 'Se fornar parte da família JA'],
    professors: 'Fabiano Índio',
  },
  {
    id: 7,
    navigation: 'feminino',
    image: '/images/slider/slider5.jpeg',
    title: 'Feminino',
    description: 'texto em construção',
    quote: '“frase de efeito” – Índio.',
    benefits: ['Auto-confiança', 'Se fornar parte da família JA'],
    professors: 'Felipe Zanini e Matheus Pereira',
  },
  {
    id: 8,
    navigation: 'corujao',
    image: '/images/slider/slider5.jpeg',
    title: 'Corujão',
    description: 'texto em construção',
    quote: '“frase de efeito” – Índio.',
    benefits: ['Auto-confiança', 'Se fornar parte da família JA'],
    professors: 'Matheus Pereira',
  },
  {
    id: 9,
    navigation: 'particulares',
    image: '/images/slider/slider5.jpeg',
    title: 'Aula Particular',
    description: 'texto em construção',
    quote: '“frase de efeito” – Índio.',
    benefits: ['Auto-confiança', 'Se fornar parte da família JA'],
    professors: 'Fabiano Índio',
  },
  {
    id: 9,
    navigation: 'livre',
    image: '/images/slider/slider5.jpeg',
    title: 'Treino livre',
    description: 'Aulão com o tatame aberto',
    quote: '“frase de efeito” – Índio.',
    benefits: [],
    professors: 'Fabiano Índio',
  },
]
