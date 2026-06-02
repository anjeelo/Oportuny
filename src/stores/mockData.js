export const mockResumeData = {
  name: 'Lucas Mendes Silva',
  email: 'lucas.mendes@email.com',
  phone: '(11) 98765-4321',
  city: 'São Paulo, SP',
  summary: 'Estudante de Ciência da Computação na USP, com experiência em desenvolvimento web e análise de dados. Apaixonado por resolver problemas complexos e criar soluções tecnológicas que impactam pessoas. Conhecimento sólido em Python, JavaScript e bancos de dados relacionais.',
  education: [
    { institution: 'Universidade de São Paulo (USP)', degree: 'Bacharelado em Ciência da Computação', period: '2022 - 2026', gpa: '8.2/10.0' },
  ],
  skills: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'Git', 'React', 'Vue.js', 'Node.js', 'PostgreSQL', 'Docker', 'Linux', 'API REST'],
  projects: [
    { name: 'Sistema de Gestão Acadêmica', description: 'Aplicação web full-stack para gerenciamento de notas e frequência', tech: 'Python, Flask, PostgreSQL' },
    { name: 'Bot de Análise de Dados', description: 'Bot que coleta e analisa dados de redes sociais usando NLP', tech: 'Python, Pandas, NLTK' },
    { name: 'E-commerce API', description: 'API RESTful para plataforma de e-commerce com autenticação JWT', tech: 'Node.js, Express, MongoDB' },
  ],
  disciplines: [
    { name: 'Estruturas de Dados', grade: 9.0 },
    { name: 'Algoritmos', grade: 8.5 },
    { name: 'Banco de Dados', grade: 9.2 },
    { name: 'Engenharia de Software', grade: 8.0 },
    { name: 'Inteligência Artificial', grade: 7.8 },
    { name: 'Redes de Computadores', grade: 8.3 },
    { name: 'Sistemas Operacionais', grade: 7.5 },
    { name: 'Cálculo III', grade: 7.0 },
  ]
}

export const mockJobs = [
  {
    id: 1,
    title: 'Estágio em Desenvolvimento Frontend',
    company: 'Nubank',
    location: 'São Paulo, SP (Remoto)',
    score: 94,
    type: 'Estágio',
    description: 'Desenvolvimento de interfaces web com React e TypeScript',
    url: '#'
  },
  {
    id: 2,
    title: 'Estágio em Engenharia de Software',
    company: 'iFood',
    location: 'Campinas, SP (Híbrido)',
    score: 89,
    type: 'Estágio',
    description: 'Participação no desenvolvimento de microsserviços em Python',
    url: '#'
  },
  {
    id: 3,
    title: 'Desenvolvedor Júnior Python',
    company: 'Mercado Livre',
    location: 'São Paulo, SP',
    score: 85,
    type: 'Júnior',
    description: 'Desenvolvimento backend com Python e Django',
    url: '#'
  },
  {
    id: 4,
    title: 'Estágio em Dados',
    company: 'Itaú Unibanco',
    location: 'São Paulo, SP (Presencial)',
    score: 78,
    type: 'Estágio',
    description: 'Análise de dados e criação de dashboards com Python e SQL',
    url: '#'
  },
  {
    id: 5,
    title: 'Estágio em DevOps',
    company: 'PicPay',
    location: 'São Paulo, SP (Remoto)',
    score: 72,
    type: 'Estágio',
    description: 'Automação de infraestrutura com Docker e Kubernetes',
    url: '#'
  },
  {
    id: 6,
    title: 'Desenvolvedor Full Stack Júnior',
    company: 'Stone',
    location: 'Rio de Janeiro, RJ',
    score: 68,
    type: 'Júnior',
    description: 'Desenvolvimento de aplicações web com Node.js e Vue.js',
    url: '#'
  },
  {
    id: 7,
    title: 'Estágio em Backend',
    company: 'TOTVS',
    location: 'São Paulo, SP (Híbrido)',
    score: 65,
    type: 'Estágio',
    description: 'Desenvolvimento de APIs REST com Java e Spring Boot',
    url: '#'
  },
  {
    id: 8,
    title: 'Estágio em QA / Testes',
    company: 'Globo',
    location: 'Rio de Janeiro, RJ (Remoto)',
    score: 58,
    type: 'Estágio',
    description: 'Testes automatizados e garantia de qualidade de software',
    url: '#'
  },
]

export const mockPublicJobs = [
  {
    id: 101,
    title: 'Estágio em Marketing Digital',
    company: 'Magazine Luiza',
    location: 'São Paulo, SP',
    type: 'Estágio',
    category: 'Marketing',
    description: 'Gestão de campanhas digitais e análise de métricas',
    url: '#'
  },
  {
    id: 102,
    title: 'Estágio em Desenvolvimento Web',
    company: 'Locaweb',
    location: 'São Paulo, SP',
    type: 'Estágio',
    category: 'Software',
    description: 'Desenvolvimento frontend com React e TypeScript',
    url: '#'
  },
  {
    id: 103,
    title: 'Estágio em Ciência de Dados',
    company: 'Bradesco',
    location: 'Osasco, SP',
    type: 'Estágio',
    category: 'Dados',
    description: 'Modelagem preditiva e análise exploratória com Python',
    url: '#'
  },
  {
    id: 104,
    title: 'Analista Júnior de Sistemas',
    company: 'Ambev Tech',
    location: 'São Paulo, SP',
    type: 'Júnior',
    category: 'Software',
    description: 'Sustentação e evolução de sistemas corporativos',
    url: '#'
  },
  {
    id: 105,
    title: 'Estágio em UX/UI Design',
    company: 'Vtex',
    location: 'Rio de Janeiro, RJ (Remoto)',
    type: 'Estágio',
    category: 'Design',
    description: 'Pesquisa com usuários e prototipagem de interfaces',
    url: '#'
  },
  {
    id: 106,
    title: 'Estágio em Infraestrutura',
    company: 'AWS',
    location: 'São Paulo, SP',
    type: 'Estágio',
    category: 'Infraestrutura',
    description: 'Suporte a ambientes cloud e automação de deploys',
    url: '#'
  },
  {
    id: 107,
    title: 'Estágio em Produto',
    company: 'Loft',
    location: 'São Paulo, SP (Remoto)',
    type: 'Estágio',
    category: 'Produto',
    description: 'Apoio na gestão de backlog e métricas de produto',
    url: '#'
  },
  {
    id: 108,
    title: 'Desenvolvedor Mobile Júnior',
    company: 'C6 Bank',
    location: 'São Paulo, SP',
    type: 'Júnior',
    category: 'Software',
    description: 'Desenvolvimento de features para app mobile em React Native',
    url: '#'
  },
]
