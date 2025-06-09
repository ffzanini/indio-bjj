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
    image: '/images/programs/basico.webp',
    title: 'Treino Básico',
    description:
      'Os Fundamentos do Jiu-Jitsu representam a espinha dorsal da arte suave. Nesta seção, exploramos os princípios técnicos e conceituais que sustentam toda a prática — como postura, base, equilíbrio, mobilidade no solo, controle de distância, defesa pessoal e noções de alavanca e biomecânica. Cada movimento, posição ou transição avançada nasce da compreensão sólida desses fundamentos. Aqui, você terá acesso a explicações detalhadas, vídeos demonstrativos e dicas práticas que servem tanto para quem está começando quanto para praticantes avançados que desejam refinar sua base. Aprender, revisar e dominar os fundamentos é essencial para evoluir com segurança, inteligência e eficiência no tatame.',
    quote:
      '“A verdadeira vitória no Jiu Jitsu não é sobre os outros, mas sobre você mesmo.” – Fabiano Índio.',
    benefits: [
      'Aprendizado do Jiu Jitsu Básico',
      'Defesa Pessoal',
      'Aumento de energia e concentração',
      'Melhora do condicionamento físico',
      'Auto-confiança',
      'Se tornar parte da família JA',
    ],
    professors: 'Fabiano Índio, Jeronimo Goulart e Roni Júnior',
  },
  {
    id: 2,
    navigation: 'intermediario',
    image: '/images/programs/intermediario.webp',
    title: 'Treino Intermediário',
    description:
      'No nível intermediário, o praticante já possui uma base sólida e começa a explorar variações técnicas mais complexas, transições entre posições, armadilhas e estratégias de combate. Essa fase visa ampliar o repertório técnico e preparar o aluno para situações mais realistas, tanto em treinos quanto em competições.',
    quote:
      '“O faixa preta nada mais é que um faixa branca que não desistiu.” – Fabiano Índio.',
    benefits: [
      'Aprimoramento técnico',
      'Fluidez nos movimentos',
      'Aumento da autoconfiança',
      'Leitura de luta',
      'Condicionamento físico',
    ],
    professors: 'Fabiano Índio',
  },
  {
    id: 3,
    navigation: 'avancado',
    image: '/images/programs/avancado.webp',
    title: 'Treino Avançado',
    description:
      'As aulas avançadas são voltadas para faixas roxa em diante, com foco em estratégias de alto nível, combinações encadeadas, pressão, tempo de execução e adaptação. O aluno aprende a ajustar seu jogo ao oponente e refinar sua eficiência técnica ao máximo.',
    quote:
      '“A maior lição que aprendi com o Jiu-Jitsu foi como me conhecer profundamente.” – Carlos Gracie.',
    benefits: [
      'Refinamento técnico e tático',
      'Estudo de situações complexas de luta',
      'Desenvolvimento do estilo pessoal',
      'Treinamento com alta intensidade',
      'Visão crítica e autoconhecimento',
    ],
    professors: 'Fabiano Índio',
  },
  {
    id: 4,
    navigation: 'competicao',
    image: '/images/programs/competicao.webp',
    title: 'Treino de Competição',
    description:
      'Voltado para atletas que desejam competir ou se testar em um ambiente de alta performance. O treino é intenso e técnico, com foco em ajustes milimétricos, simulações de combate e preparação física e mental.',
    quote:
      'Se você quer ser um leão, deve treinar com leões.” – Carlos Gracie Sr.',
    benefits: [
      'Condicionamento de competição',
      'Estratégias e táticas de combate',
      'Resistência física e psicológica',
      'Análise de adversários e regras',
      'Espírito de equipe e superação',
    ],
    professors: 'Fabiano Índio',
  },
  {
    id: 5,
    navigation: 'baby-kids-teen',
    image: '/images/programs/kids.webp',
    title: 'Treino Baby, Kids e Teen',
    description:
      'Aulas lúdicas e educativas adaptadas para cada faixa etária. O foco está no desenvolvimento motor, disciplina, autoestima, respeito e introdução às técnicas básicas do Jiu-Jitsu de forma divertida e segura.',
    quote:
      '“No Jiu Jitsu, o respeito pelo oponente é tão importante quanto a técnica.” – Fabiano Índio.',
    benefits: [
      'Coordenação motora e disciplina',
      'Socialização e trabalho em equipe',
      'Autoconfiança e respeito',
      'Saúde física e mental',
      'Iniciação técnica ao Jiu-Jitsu',
    ],
    professors: 'Monique Valadão e Henrique Passos',
  },
  {
    id: 6,
    navigation: 'executivo',
    image: '/images/programs/executivo.webp',
    title: 'Treino Executivo(35+)',
    description:
      'Pensado para quem busca qualidade de vida, superação pessoal e aprendizado técnico com segurança e cuidado. Ritmo adaptado, foco na longevidade e bem-estar dentro e fora do tatame.',
    quote:
      '“O Jiu Jitsu ensina que a força mental é tão poderosa quanto a força física.” – Fabiano Índio.',
    benefits: [
      'Atividade física segura e eficiente',
      'Estímulo cognitivo e coordenação',
      'Controle de estresse',
      'Bem-estar físico e emocional',
      'Integração com a comunidade',
    ],
    professors: 'Fabiano Índio',
  },
  {
    id: 7,
    navigation: 'nogi',
    image: '/images/programs/nogi.webp',
    title: 'Treino NO GI (sem kimono)',
    description:
      'O treino sem kimono, ou NO GI, é mais dinâmico e exige adaptação das pegadas e movimentação. Excelente para complementar o jogo técnico, aumentar o cardio e aplicar o Jiu-Jitsu de forma mais fluida.',
    quote:
      'Jiu Jitsu é perfeito. São os humanos que cometem erros.” – Rickson Gracie.',
    benefits: [
      'Jogo mais dinâmico e rápido',
      'Aprimoramento da movimentação',
      'Aplicações adaptadas à realidade',
      'Treinamento complementar ao Gi',
      'Alta intensidade cardiovascular',
    ],
    professors: 'Fabiano Índio',
  },
  {
    id: 8,
    navigation: 'feminino',
    image: '/images/programs/feminino-2.webp',
    title: 'Treino Feminino',
    description:
      'Aulas voltadas para o público feminino com um ambiente acolhedor, técnicas adaptadas, foco na autodefesa, condicionamento físico e fortalecimento da autoestima.',
    quote:
      'O verdadeiro lutador de Jiu-Jitsu não sai por aí batendo nas pessoas. Nossa defesa é feita para neutralizar a agressão.” – Hélio Gracie.',
    benefits: [
      'Autodefesa eficaz',
      'Ambiente seguro e respeitoso',
      'Empoderamento feminino',
      'Condicionamento físico',
      'Autoconfiança e foco mental',
      'Integração e apoio entre alunas',
    ],
    professors: 'Monique Valadão, Felipe Zanini e Matheus Pereira',
  },
  {
    id: 9,
    navigation: 'corujao',
    image: '/images/programs/noturno.webp',
    title: 'Treino Corujão',
    description:
      'Treino noturno pensado para quem tem rotinas diferentes. Uma ótima opção para manter o ritmo de treinos mesmo com uma agenda apertada. Energia, técnica e descontração no horário mais tranquilo do dia.',
    quote:
      '“Enquanto a cidade dorme, a disciplina desperta.” – Autor Desconhecido.',
    benefits: [
      'Flexibilidade de horário',
      'Descompressão após o dia',
      'Foco na técnica',
      'Ambiente tranquilo',
      'Continuidade nos treinos',
    ],
    professors: 'Matheus Pereira',
  },
  {
    id: 10,
    navigation: 'particulares',
    image: '/images/programs/particular.webp',
    title: 'Aula Particular',
    description:
      'Aulas 100% personalizadas para suas necessidades, ritmo e objetivos. Ideal para quem busca acelerar o aprendizado, corrigir detalhes ou adaptar treinos à rotina pessoal.',
    quote:
      '“Cada detalhe faz diferença. E cada aula particular acelera sua evolução.” – Fabiano Índio.',
    benefits: [
      'Atenção individualizada',
      'Correções precisas',
      'Maior progresso técnico',
      'Adaptação à agenda pessoal',
      'Foco em metas específicas',
    ],
    professors: 'Fabiano Índio',
  },
  {
    id: 11,
    navigation: 'livre',
    image: '/images/programs/livre.webp',
    title: 'Treino livre',
    description:
      'Momento com o tatame aberto para rolas livres, revisões técnicas ou troca de experiências com colegas. Liberdade para explorar e reforçar o que foi aprendido durante a semana.',
    quote:
      '“No treino livre, você se testa, se diverte e se supera.” – Fabiano Índio.',
    benefits: [
      'Revisão prática de técnicas',
      'Rolas leves ou intensos',
      'Integração entre turmas',
      'Desenvolvimento do estilo pessoal',
      'Liberdade para explorar o Jiu-Jitsu',
    ],
    professors: 'Fabiano Índio',
  },
]
