export interface Programs {
  id: number;
  navigation: string;
  image: string;
  title: string;
  description: string;
  quote: string;
  benefits: string[];
  professors: string;
}

export const programs: Programs[] = [
  {
    id: 1,
    navigation: "iniciante",
    image: "/images/programs/basico.webp",
    title: "Treino Básico",
    description:
      "O Treino Básico é a fundação sólida sobre a qual todo o seu desenvolvimento no Jiu-Jitsu será construído. Neste programa, você aprenderá os princípios fundamentais que sustentam toda a arte suave: postura correta, base estável, equilíbrio dinâmico, mobilidade no solo, controle de distância e os conceitos essenciais de alavanca e biomecânica. Trabalhamos desde as posições básicas (guarda, montada, costas, lado) até as transições fundamentais entre elas. Você descobrirá como aplicar técnicas de defesa pessoal em situações reais, entenderá a importância da respiração e do controle emocional durante o treino, e aprenderá a se movimentar com eficiência e segurança. As aulas são estruturadas de forma progressiva, garantindo que cada conceito seja assimilado antes de avançarmos para o próximo nível. Aqui, não há pressa — há método. Mesmo praticantes mais experientes frequentam essas aulas para refinar e fortalecer sua base técnica, pois sabemos que os fundamentos são o que separa um faixa branca de um futuro campeão. Venha construir sua base com a metodologia comprovada de mais de 30 anos de experiência.",
    quote:
      "“A verdadeira vitória no Jiu Jitsu não é sobre os outros, mas sobre você mesmo.” – Fabiano Índio.",
    benefits: [
      "Aprendizado do Jiu Jitsu Básico",
      "Defesa Pessoal",
      "Aumento de energia e concentração",
      "Melhora do condicionamento físico",
      "Auto-confiança",
      "Se tornar parte da família JA",
    ],
    professors: "Fabiano Índio, Jeronimo Goulart e Roni Júnior",
  },
  {
    id: 2,
    navigation: "intermediario",
    image: "/images/programs/intermediario.webp",
    title: "Treino Intermediário",
    description:
      "O Treino Intermediário é onde você começa a ver o Jiu-Jitsu como um jogo de xadrez tridimensional. Com uma base sólida já estabelecida, agora você explorará variações técnicas mais sofisticadas, aprenderá a encadear movimentos, desenvolverá armadilhas e sequências de ataque, e começará a entender as estratégias por trás de cada posição. Trabalhamos transições fluidas entre guardas (fechada, aberta, de pés, meia-guarda), escapes mais complexos, finalizações em cadeia e o conceito de pressão e controle posicional. Você aprenderá a ler o jogo do oponente, antecipar movimentos e criar oportunidades de ataque a partir da defesa. As aulas incluem situações específicas de combate, drills de repetição para fixar movimentos e rolas direcionadas que simulam cenários reais. Esta é a fase onde você desenvolve sua 'assinatura técnica' — aqueles movimentos que começam a se tornar naturais no seu jogo. O ritmo é mais intenso que o básico, mas ainda com atenção individualizada para garantir que cada técnica seja executada com precisão. Prepare-se para expandir significativamente seu repertório técnico e elevar seu nível de jogo.",
    quote:
      "“O faixa preta nada mais é que um faixa branca que não desistiu.” – Fabiano Índio.",
    benefits: [
      "Aprimoramento técnico",
      "Fluidez nos movimentos",
      "Aumento da autoconfiança",
      "Leitura de luta",
      "Condicionamento físico",
    ],
    professors: "Fabiano Índio",
  },
  {
    id: 3,
    navigation: "avancado",
    image: "/images/programs/avancado.webp",
    title: "Treino Avançado",
    description:
      "O Treino Avançado é o ambiente onde a técnica se transforma em arte e a estratégia se torna intuitiva. Voltado para faixas roxa em diante, este programa trabalha com conceitos de alto nível: timing perfeito, pressão estratégica, combinações encadeadas em múltiplas direções, ajustes milimétricos que fazem a diferença entre uma finalização e uma defesa, e a capacidade de adaptar seu jogo instantaneamente ao estilo do oponente. Aqui, você não apenas aprende técnicas — você aprende a pensar o Jiu-Jitsu. Trabalhamos situações complexas de luta, contra-ataques sofisticados, transições não convencionais, e refinamos cada detalhe da sua execução técnica. As aulas são intensas e desafiadoras, com rolas de alto nível que testam sua capacidade física e mental. Você desenvolverá um estilo pessoal mais definido, aprenderá a identificar e explorar fraquezas do adversário, e dominará a arte de criar oportunidades onde aparentemente não existem. Este é o treino para quem busca excelência técnica, eficiência máxima e aquele nível de jogo que impressiona. Prepare-se para ser desafiado constantemente e para evoluir além do que imaginava ser possível.",
    quote:
      "“A maior lição que aprendi com o Jiu-Jitsu foi como me conhecer profundamente.” – Carlos Gracie.",
    benefits: [
      "Refinamento técnico e tático",
      "Estudo de situações complexas de luta",
      "Desenvolvimento do estilo pessoal",
      "Treinamento com alta intensidade",
      "Visão crítica e autoconhecimento",
    ],
    professors: "Fabiano Índio",
  },
  {
    id: 4,
    navigation: "competicao",
    image: "/images/programs/competicao.webp",
    title: "Treino de Competição",
    description:
      "O Treino de Competição é onde atletas sérios se preparam para o mais alto nível. Este programa é voltado para quem tem o objetivo claro de competir, seja em campeonatos locais, estaduais, nacionais ou internacionais. O treino combina intensidade física extrema com refinamento técnico cirúrgico. Trabalhamos simulações realistas de combate, estratégias específicas para diferentes regras (IBJJF, ADCC, submissão), análise de adversários, gestão de tempo de luta, e preparação psicológica para lidar com pressão, nervosismo e adversidades durante a competição. As aulas incluem condicionamento físico específico para Jiu-Jitsu, drills de repetição em alta intensidade, rolas direcionadas com cenários de pontuação, e treinamento de situações críticas (últimos minutos de luta, vantagem por pontos, etc.). Você aprenderá a otimizar seu cardio, desenvolverá resistência mental para manter a técnica sob pressão, e entenderá como ajustar seu jogo para diferentes formatos de competição. Este não é um treino para todos — é para quem está disposto a dar 100% de si, treinar com leões e se tornar um leão. Aqui, você se prepara não apenas para competir, mas para vencer.",
    quote:
      "Se você quer ser um leão, deve treinar com leões.” – Carlos Gracie Sr.",
    benefits: [
      "Condicionamento de competição",
      "Estratégias e táticas de combate",
      "Resistência física e psicológica",
      "Análise de adversários e regras",
      "Espírito de equipe e superação",
    ],
    professors: "Fabiano Índio",
  },
  {
    id: 5,
    navigation: "baby-kids-teen",
    image: "/images/programs/kids.webp",
    title: "Treino Baby, Kids e Teen",
    description:
      "O Treino Baby, Kids e Teen é muito mais que apenas Jiu-Jitsu — é uma escola de vida através da arte suave. Nossas aulas são cuidadosamente estruturadas para cada faixa etária, respeitando o desenvolvimento físico, cognitivo e emocional de cada criança e adolescente. Para os mais pequenos (Baby), trabalhamos coordenação motora básica, equilíbrio, noções espaciais e introdução ao Jiu-Jitsu através de jogos e brincadeiras lúdicas. Para as crianças (Kids), desenvolvemos disciplina, respeito, trabalho em equipe, técnicas básicas adaptadas e valores como persistência e humildade. Para os adolescentes (Teen), aprofundamos o aspecto técnico, trabalhamos condicionamento físico, disciplina mental e preparamos para a transição para o treino adulto. Em todas as idades, o foco está em criar um ambiente seguro, respeitoso e acolhedor onde cada criança se sinta valorizada. Trabalhamos bullying, autodefesa, autoestima, e ensinamos que o Jiu-Jitsu é uma ferramenta de crescimento pessoal, não de agressão. As aulas são supervisionadas por instrutores especializados em pedagogia infantil e juvenil, garantindo que cada criança receba atenção individualizada. Venha fazer parte de uma geração que cresce com valores, disciplina e respeito.",
    quote:
      "“No Jiu Jitsu, o respeito pelo oponente é tão importante quanto a técnica.” – Fabiano Índio.",
    benefits: [
      "Coordenação motora e disciplina",
      "Socialização e trabalho em equipe",
      "Autoconfiança e respeito",
      "Saúde física e mental",
      "Iniciação técnica ao Jiu-Jitsu",
    ],
    professors: "Monique Valadão",
  },
  {
    id: 6,
    navigation: "executivo",
    image: "/images/programs/executivo.webp",
    title: "Treino Executivo(35+)",
    description:
      "O Treino Executivo (35+) foi criado especialmente para profissionais que buscam equilibrar excelência técnica com qualidade de vida e longevidade no esporte. Entendemos que após os 35 anos, o corpo responde de forma diferente ao treino, e por isso adaptamos completamente nossa metodologia. O ritmo é controlado, mas não menos eficiente — focamos em técnica refinada, movimentos inteligentes que preservam as articulações, e um condicionamento físico que respeita os limites individuais. Trabalhamos alongamento específico, fortalecimento preventivo, técnicas de recuperação, e um Jiu-Jitsu que prioriza eficiência sobre força bruta. As aulas são estruturadas para minimizar riscos de lesão, com aquecimento adequado, drills adaptados e rolas que respeitam a intensidade que cada um pode suportar. Você aprenderá a usar a experiência e inteligência técnica para compensar qualquer diferença física, desenvolverá um jogo mais estratégico e eficiente, e descobrirá que o Jiu-Jitsu pode ser praticado com excelência em qualquer idade. Este programa também é ideal para quem está retornando ao esporte após um período afastado ou para iniciantes mais maduros que buscam um ambiente mais adequado ao seu perfil. Aqui, você treina para a vida toda, não apenas para o próximo campeonato.",
    quote:
      "“O Jiu Jitsu ensina que a força mental é tão poderosa quanto a força física.” – Fabiano Índio.",
    benefits: [
      "Atividade física segura e eficiente",
      "Estímulo cognitivo e coordenação",
      "Controle de estresse",
      "Bem-estar físico e emocional",
      "Integração com a comunidade",
    ],
    professors: "Fabiano Índio",
  },
  {
    id: 7,
    navigation: "nogi",
    image: "/images/programs/nogi.webp",
    title: "Treino NO GI (sem kimono)",
    description:
      "O Treino NO GI (sem kimono) representa uma evolução natural do Jiu-Jitsu tradicional, oferecendo uma experiência mais dinâmica, rápida e adaptada à realidade moderna. Sem as pegadas do kimono, você desenvolverá um jogo completamente diferente: controle por ganchos, underhooks, overhooks, controle de cabeça, e uma movimentação mais fluida e atlética. Este estilo exige adaptação técnica significativa — finalizações que funcionam no kimono precisam ser ajustadas, guardas são mais dinâmicas, e a velocidade de transição entre posições aumenta consideravelmente. O NO GI é excelente para desenvolver cardio de alto nível, melhorar a capacidade de explosão e reação, e aprender a aplicar o Jiu-Jitsu em situações onde não há kimono disponível. Trabalhamos técnicas específicas do NO GI (leg locks, wrestling, controle de distância), drills de alta intensidade, e rolas que simulam o ritmo acelerado das competições de submission wrestling. Este treino complementa perfeitamente o jogo no kimono, criando um praticante mais completo e versátil. Se você busca um desafio diferente, quer melhorar seu condicionamento cardiovascular, ou tem interesse em competições de submission wrestling e ADCC, este é o programa ideal. Prepare-se para suar, aprender e evoluir em um ritmo completamente novo.",
    quote:
      "Jiu Jitsu é perfeito. São os humanos que cometem erros.” – Rickson Gracie.",
    benefits: [
      "Jogo mais dinâmico e rápido",
      "Aprimoramento da movimentação",
      "Aplicações adaptadas à realidade",
      "Treinamento complementar ao Gi",
      "Alta intensidade cardiovascular",
    ],
    professors: "Fabiano Índio",
  },
  {
    id: 8,
    navigation: "feminino",
    image: "/images/programs/feminino-2.webp",
    title: "Treino Feminino",
    description:
      "O Treino Feminino foi criado com a missão de empoderar mulheres através do Jiu-Jitsu, oferecendo um ambiente seguro, acolhedor e respeitoso onde cada aluna pode desenvolver seu potencial máximo. Reconhecemos que mulheres têm necessidades, desafios e objetivos específicos, e por isso adaptamos completamente nossa metodologia. Trabalhamos técnicas de autodefesa realistas que funcionam independentemente de diferenças de força ou tamanho, focando em alavancas, posicionamento e eficiência técnica. As aulas incluem condicionamento físico específico para mulheres, fortalecimento funcional, e um Jiu-Jitsu adaptado que valoriza técnica sobre força bruta. Além do aspecto técnico, este programa fortalece a autoestima, desenvolve confiança, ensina a estabelecer limites, e cria uma rede de apoio entre as alunas. O ambiente é livre de julgamentos, onde cada mulher pode aprender no seu ritmo, fazer perguntas sem constrangimento, e se sentir completamente à vontade. Trabalhamos também aspectos psicológicos como controle do medo, assertividade, e a capacidade de se defender em situações reais. Seja você uma iniciante completa ou uma praticante experiente, aqui você encontrará um espaço onde pode crescer técnica e pessoalmente, rodeada por outras mulheres que compartilham os mesmos objetivos. O Jiu-Jitsu feminino não é sobre ser melhor que os homens — é sobre ser a melhor versão de si mesma.",
    quote:
      "O verdadeiro lutador de Jiu-Jitsu não sai por aí batendo nas pessoas. Nossa defesa é feita para neutralizar a agressão.” – Hélio Gracie.",
    benefits: [
      "Autodefesa eficaz",
      "Ambiente seguro e respeitoso",
      "Empoderamento feminino",
      "Condicionamento físico",
      "Autoconfiança e foco mental",
      "Integração e apoio entre alunas",
    ],
    professors: "Monique Valadão e Fabiano Índio",
  },
  {
    id: 9,
    navigation: "corujao",
    image: "/images/programs/noturno.webp",
    title: "Treino Corujão",
    description:
      "O Treino Corujão é a solução perfeita para profissionais, estudantes e pessoas com rotinas que não se encaixam nos horários tradicionais. Realizado no período noturno, este programa oferece a mesma qualidade técnica e metodologia dos outros treinos, mas em um ambiente mais tranquilo e descontraído. É o momento ideal para descomprimir após um dia intenso de trabalho ou estudos, transformando o estresse do dia em energia positiva no tatame. As aulas mantêm o foco técnico e a intensidade adequada, mas com um ritmo que permite maior absorção dos detalhes, já que há menos distrações e o ambiente é mais calmo. Você terá acesso a todo o conteúdo programático, drills específicos, e rolas que respeitam o horário mas não comprometem a qualidade do aprendizado. Este treino é perfeito para quem trabalha em turnos, estuda à noite, ou simplesmente prefere treinar quando a cidade está mais tranquila. Não há necessidade de sacrificar qualidade por conveniência — aqui você mantém sua evolução técnica mesmo com uma agenda apertada. Venha fazer parte de um grupo de pessoas dedicadas que escolheram priorizar seu desenvolvimento no Jiu-Jitsu, mesmo quando a maioria está descansando. Enquanto a cidade dorme, nós evoluímos.",
    quote:
      "“Enquanto a cidade dorme, a disciplina desperta.” – Autor Desconhecido.",
    benefits: [
      "Flexibilidade de horário",
      "Descompressão após o dia",
      "Foco na técnica",
      "Ambiente tranquilo",
      "Continuidade nos treinos",
    ],
    professors: "Matheus Pereira",
  },
  {
    id: 10,
    navigation: "particulares",
    image: "/images/programs/particular.webp",
    title: "Aula Particular",
    description:
      "A Aula Particular é o investimento mais direto e eficiente na sua evolução no Jiu-Jitsu. Com atenção 100% focada em você, cada sessão é completamente personalizada para suas necessidades específicas, nível técnico atual, objetivos e limitações físicas. Seja você um iniciante que quer acelerar o aprendizado dos fundamentos, um intermediário que precisa corrigir detalhes técnicos específicos, um avançado que busca refinar aspectos particulares do seu jogo, ou alguém que precisa adaptar o treino a limitações físicas ou lesões — a aula particular oferece uma solução sob medida. Durante a sessão, trabalhamos exclusivamente nos pontos que você precisa desenvolver: técnicas específicas que não estão saindo, ajustes de posicionamento, estratégias para seu estilo de jogo, correção de erros recorrentes, ou desenvolvimento de um jogo completo do zero. Você terá a oportunidade de fazer todas as perguntas que precisa, repetir movimentos quantas vezes for necessário, e receber feedback imediato e detalhado sobre cada aspecto da sua execução. As aulas podem ser agendadas conforme sua disponibilidade, permitindo que você mantenha a consistência mesmo com uma rotina irregular. Se você busca resultados mais rápidos, correções precisas, ou simplesmente prefere um ambiente de aprendizado mais focado, a aula particular é o caminho mais eficiente para sua evolução.",
    quote:
      "“Cada detalhe faz diferença. E cada aula particular acelera sua evolução.” – Fabiano Índio.",
    benefits: [
      "Atenção individualizada",
      "Correções precisas",
      "Maior progresso técnico",
      "Adaptação à agenda pessoal",
      "Foco em metas específicas",
    ],
    professors: "Fabiano Índio",
  },
  {
    id: 11,
    navigation: "livre",
    image: "/images/programs/livre.webp",
    title: "Treino livre",
    description:
      "O Treino Livre é o momento de autonomia e liberdade criativa no tatame. Com o espaço aberto e sem estruturação rígida de aula, você tem a oportunidade de revisar técnicas aprendidas durante a semana, trabalhar pontos específicos do seu jogo, ou simplesmente rolar livremente com colegas de diferentes níveis e turmas. Este é o ambiente ideal para experimentar, testar novas técnicas em situações reais, e desenvolver seu estilo pessoal através da prática livre. Você pode escolher rolas mais leves para trabalhar técnica, rolas intensas para testar seu condicionamento, ou focar em situações específicas que quer desenvolver. O treino livre também é um excelente momento para integração entre diferentes turmas e níveis, permitindo que faixas brancas aprendam com faixas mais graduadas, e que praticantes mais experientes ajudem os iniciantes. Há liberdade para revisar posições, trabalhar drills específicos com um parceiro, ou simplesmente rolar de forma descontraída. Este é o momento onde você consolida tudo que aprendeu durante a semana, transformando conhecimento teórico em experiência prática. O treino livre não substitui as aulas estruturadas, mas é o complemento perfeito que permite aplicar, testar e refinar seu jogo em um ambiente mais flexível. Venha explorar, experimentar e evoluir no seu próprio ritmo.",
    quote:
      "“No treino livre, você se testa, se diverte e se supera.” – Fabiano Índio.",
    benefits: [
      "Revisão prática de técnicas",
      "Rolas leves ou intensos",
      "Integração entre turmas",
      "Desenvolvimento do estilo pessoal",
      "Liberdade para explorar o Jiu-Jitsu",
    ],
    professors: "Fabiano Índio",
  },
];
