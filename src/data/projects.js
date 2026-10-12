export const projectsData = [
  // ================= CIENCIA DE DATOS =================
  {
    id: 'mutualinf',
    category: 'data-science',
    title: 'mutualinf',
    subtitle: {
      es: 'Paquete de R publicado en CRAN para Teoría de la Información',
      en: 'Official CRAN R Package for Information Theory Metrics',
    },
    description: {
      es: 'Rediseño algorítmico y matemático del cálculo de segregación multivariada. Migración de bucles críticos a C++17, diseño de tablas hash con Fibonacci Hashing O(1) y paralelización multihilo en clústeres para Windows y Linux.',
      en: 'Algorithmic and mathematical redesign of multivariate segregation metrics. Critical loops re-engineered in C++17, hash tables with O(1) Fibonacci Hashing, and multi-core cluster parallelization for Windows and Linux.',
    },
    impact: {
      es: '>120× Aceleración',
      en: '>120× Speedup',
    },
    metrics: [
      { label: { es: 'Rendimiento', en: 'Performance' }, value: '>120× faster' },
      { label: { es: 'Tiempo de cómputo', en: 'Compute Time' }, value: '120s → <1s' },
      { label: { es: 'Complejidad', en: 'Complexity' }, value: 'O(1) Hash Lookup' },
      { label: { es: 'Distribución', en: 'Distribution' }, value: 'CRAN' },
    ],
    tags: ['R', 'C++17', 'RcppArmadillo', 'HPC', 'Fibonacci Hashing', 'CRAN'],
    githubUrl: 'https://github.com/RafaelFuentealbaC/mutualinf',
    externalUrl: 'https://cran.r-project.org/package=mutualinf',
    status: {
      es: 'Publicado en CRAN',
      en: 'Published on CRAN',
    },
    featured: true,
    badgeColor: 'emerald',
  },
  {
    id: 'simplex-solver',
    category: 'data-science',
    title: 'SuperSolutionGraphicsSimplex',
    subtitle: {
      es: 'Simulador Gráfico del Método Simplex en C++',
      en: 'Interactive Simplex Method Visual Solver in C++',
    },
    description: {
      es: 'Herramienta interactiva para la resolución paso a paso de modelos de optimización lineal mediante el algoritmo Simplex y visualización geométrica del poliedro de soluciones factibles.',
      en: 'Interactive desktop computational tool for step-by-step linear programming problem resolution via the Simplex algorithm, with geometric visualization of the feasible region polyhedron.',
    },
    impact: {
      es: 'Optimización Lineal',
      en: 'Linear Programming',
    },
    metrics: [
      { label: { es: 'Algoritmo', en: 'Algorithm' }, value: 'Simplex Primal' },
      { label: { es: 'Visualización', en: 'Visualization' }, value: '2D Geometry' },
      { label: { es: 'Lenguaje', en: 'Language' }, value: 'Native C++' },
    ],
    tags: ['C++', 'Optimización Lineal', 'Álgebra Matricial', 'Investigación de Operaciones'],
    githubUrl: 'https://github.com/Xcristian007X/SuperSolutionGraphicsSimplex',
    externalUrl: null,
    status: {
      es: 'Open Source',
      en: 'Open Source',
    },
    featured: false,
    badgeColor: 'indigo',
  },

  // ================= OTROS PROYECTOS =================
  {
    id: 'nissi-gym',
    category: 'software-engineering',
    title: 'Nissi-Gym App',
    subtitle: {
      es: 'Solución Móvil Multiplataforma para Centros Deportivos',
      en: 'Multiplatform Mobile Solution for Athletic Centers',
    },
    description: {
      es: 'Plataforma integral para Android e iOS con arquitectura limpia, Compose Multiplatform y backend en Go. Gestiona agendamiento en tiempo real, membresías y autenticación robusta con rotación de JWT y almacenamiento encriptado.',
      en: 'Production-ready mobile solution for Android and iOS using clean architecture, Compose Multiplatform, and Go backend microservices. Handles real-time class booking, memberships, and secure encrypted authentication.',
    },
    impact: {
      es: '>85% Código Compartido',
      en: '>85% Shared Code',
    },
    metrics: [
      { label: { es: 'Código Compartido', en: 'Shared Code' }, value: '>85% Android/iOS' },
      { label: { es: 'UI Toolkit', en: 'UI Toolkit' }, value: 'Compose Multiplatform' },
      { label: { es: 'Seguridad', en: 'Security' }, value: 'Credential Manager API' },
      { label: { es: 'Backend', en: 'Backend' }, value: 'Go REST Microservices' },
    ],
    tags: ['Kotlin Multiplatform', 'Compose Multiplatform', 'Go', 'PostgreSQL', 'JWT', 'Material 3'],
    githubUrl: null,
    privateOrgUrl: 'https://www.dnissi.com/',
    orgLabel: {
      es: 'Nissi Coach (Web)',
      en: 'Nissi Coach (Web)',
    },
    isPrivate: true,
    status: {
      es: 'Empresarial',
      en: 'Commercial',
    },
    featured: true,
    badgeColor: 'purple',
  },
  {
    id: 'micromatic',
    category: 'software-engineering',
    title: 'MicroMatic',
    subtitle: {
      es: 'Simulador y Tracking de Transporte Urbano en Tiempo Real',
      en: 'Real-Time Urban Public Transit Tracking & Simulation',
    },
    description: {
      es: 'Sistema integral para estimar tiempos de llegada y monitorear recorridos del transporte público en Temuco. Arquitectura full-stack con backend reactivo en Python, base de datos de coordenadas en MongoDB y portal web interactivo en React.',
      en: 'End-to-end system for arrival time estimation and route tracking across Temuco public microbus network. Full-stack architecture with Python backend, MongoDB geo-coordinate storage, and reactive React frontend.',
    },
    impact: {
      es: 'Simulación Urbana en Vivo',
      en: 'Live Urban Simulation',
    },
    metrics: [
      { label: { es: 'Base de Datos', en: 'Database' }, value: 'MongoDB NoSQL' },
      { label: { es: 'Frontend', en: 'Frontend' }, value: 'React SPA' },
      { label: { es: 'Backend', en: 'Backend' }, value: 'Python API' },
      { label: { es: 'Enfoque', en: 'Focus' }, value: 'Geo-Tracking Temuco' },
    ],
    tags: ['Python', 'React', 'MongoDB', 'Render', 'Geolocalización', 'NoSQL'],
    githubUrl: 'https://github.com/Xcristian007X/MicroMatic',
    externalUrl: null,
    status: {
      es: 'Open Source',
      en: 'Open Source',
    },
    featured: true,
    badgeColor: 'amber',
  },
  {
    id: 'twinsanity',
    category: 'software-engineering',
    title: 'TwinSanity',
    subtitle: {
      es: 'Plataforma Web Empresarial Modular',
      en: 'Modular Enterprise Web Application',
    },
    description: {
      es: 'Desarrollo de aplicación web modular implementando patrones arquitectónicos de software empresarial, gestión de usuarios, consumo de servicios y diseño responsivo para la Universidad Católica de Temuco.',
      en: 'Modular enterprise web platform showcasing software engineering design patterns, user session state management, API consumption, and responsive layouts.',
    },
    impact: {
      es: 'Arquitectura Modular',
      en: 'Modular Architecture',
    },
    metrics: [
      { label: { es: 'Frontend', en: 'Frontend' }, value: 'Modern JavaScript' },
      { label: { es: 'Estilo', en: 'Styling' }, value: 'Responsive CSS3' },
      { label: { es: 'Paradigma', en: 'Paradigm' }, value: 'Component-Based' },
    ],
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Arquitectura Web'],
    githubUrl: 'https://github.com/Xcristian007X/TwinSanity',
    externalUrl: null,
    status: {
      es: 'Open Source',
      en: 'Open Source',
    },
    featured: false,
    badgeColor: 'slate',
  },
];
