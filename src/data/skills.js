export const skillsData = {
  lenguajes: [
    { name: 'Python', level: 'Avanzado' },
    { name: 'R', level: 'Avanzado' },
    { name: 'C++ (C++17, CUDA)', level: 'Intermedio - Avanzado' },
    { name: 'SQL (PostgreSQL)', level: 'Avanzado' },
    { name: 'Kotlin', level: 'Intermedio' },
    { name: 'Go', level: 'Intermedio' },
    { name: 'DAX', level: 'Intermedio' },
  ],
  cienciaDeDatos: [
    { name: 'pandas' },
    { name: 'NumPy' },
    { name: 'SciPy' },
    { name: 'Scikit-Learn' },
    { name: 'OpenCV (cv2)' },
    { name: 'Matplotlib' },
    { name: 'ggplot2' },
    { name: 'tidymodels' },
    { name: 'dplyr' },
    { name: 'data.table' },
    { name: 'Rcpp / RcppArmadillo' },
    { name: 'parLapply / Clústeres' },
    { name: 'Fibonacci Hashing' },
    { name: 'Jupyter Notebook' },
  ],
  biCloud: [
    { name: 'Power BI (PL-300)' },
    { name: 'Microsoft Fabric' },
    { name: 'Tableau' },
    { name: 'Microsoft Azure' },
    { name: 'Google Cloud Platform (GCP)' },
    { name: 'Excel Avanzado' },
  ],
  ingenieriaSoftware: [
    { name: 'Kotlin Multiplatform (KMP)' },
    { name: 'Compose Multiplatform' },
    { name: 'Docker' },
    { name: 'Git & GitHub' },
    { name: 'Linux' },
    { name: 'MongoDB' },
    { name: 'Flask' },
    { name: 'React' },
    { name: 'Next.js' },
    { name: 'Scrum' },
  ],
  idiomas: [
    {
      idioma: { es: 'Español', en: 'Spanish' },
      nivel: { es: 'Nativo', en: 'Native' },
    },
    {
      idioma: { es: 'Inglés', en: 'English' },
      nivel: {
        es: 'A2 (Elemental / En curso en Wall Street English)',
        en: 'A2 (Elementary / Ongoing at Wall Street English)',
      },
    },
  ],
};

export const certificationsData = [
  {
    title: {
      es: 'Google Data Analytics Professional Certificate',
      en: 'Google Data Analytics Professional Certificate',
    },
    issuer: 'Google — Coursera',
    date: { es: 'Octubre 2026', en: 'October 2026' },
    badge: 'Data Analytics',
  },
  {
    title: {
      es: 'Google AI Essentials Specialization',
      en: 'Google AI Essentials Specialization',
    },
    issuer: 'Google — Coursera',
    date: { es: 'Agosto 2026', en: 'August 2026' },
    badge: 'Artificial Intelligence',
  },
  {
    title: {
      es: 'Microsoft Certified: Power BI Data Analyst Associate (PL-300)',
      en: 'Microsoft Certified: Power BI Data Analyst Associate (PL-300)',
    },
    issuer: 'Microsoft',
    date: { es: '2025 — 2027', en: '2025 — 2027' },
    badge: 'Business Intelligence',
  },
  {
    title: {
      es: 'Programa de Inglés General (Nivel A2 en curso)',
      en: 'General English Program (A2 Level in progress)',
    },
    issuer: 'Wall Street English',
    date: { es: '2025 — Actualidad', en: '2025 — Present' },
    badge: 'Idiomas / Languages',
  },
  {
    title: {
      es: 'Workshop: Fundamentals of Accelerated Computing with CUDA C/C++',
      en: 'Workshop: Fundamentals of Accelerated Computing with CUDA C/C++',
    },
    issuer: 'NVIDIA Deep Learning Institute',
    date: { es: 'Abril 2024', en: 'April 2024' },
    badge: 'HPC & CUDA',
  },
];

export const experienceData = [
  {
    role: {
      es: 'Ingeniero de Software',
      en: 'Software Engineer',
    },
    company: 'Nissi Advisor S.P.A',
    period: { es: 'Mayo 2026 — Actualidad', en: 'May 2026 — Present' },
    location: { es: 'Temuco, Chile (Remoto)', en: 'Temuco, Chile (Remote)' },
    type: 'Producción',
    bullets: {
      es: [
        'Lidero solución móvil multiplataforma (KMP, Compose Multiplatform, Material 3) en Android e iOS con más del 85% de código compartido.',
        'Desarrollé el consumo reactivo de microservicios RESTful en Go mediante Ktor Client, optimizaciones en PostgreSQL y módulo de analítica con Escala de Borg.',
        'Implementé autenticación robusta con Google Sign-In (Credential Manager API), rotación automática de JWT y almacenamiento encriptado.',
      ],
      en: [
        'Lead multiplatform mobile solution (KMP, Compose Multiplatform, Material 3) across Android & iOS with over 85% shared code.',
        'Engineered reactive consumption of Go RESTful microservices via Ktor Client, PostgreSQL optimizations, and Borg athletic exertion analytics.',
        'Integrated robust multiplatform authentication with Google Sign-In (Credential Manager API), automatic JWT rotation, and encrypted key storage.',
      ],
    },
  },
  {
    role: {
      es: 'Especialista de Soporte TI',
      en: 'IT Support Specialist',
    },
    company: 'Punto Com',
    period: { es: 'Marzo 2025 — Marzo 2026', en: 'March 2025 — March 2026' },
    location: { es: 'Temuco, Chile', en: 'Temuco, Chile' },
    type: 'Infraestructura',
    bullets: {
      es: [
        'Ejecuté diagnóstico técnico y mantenimiento preventivo/correctivo para dispositivos corporativos y móviles, minimizando tiempos de inactividad.',
        'Gestioné la resolución de incidencias complejas para empresas externas cumpliendo estrictos SLAs.',
        'Diseñé un sistema de control de inventario y trazabilidad mediante bases de datos relacionales en Excel.',
      ],
      en: [
        'Executed technical diagnostics and preventive/corrective hardware-software maintenance for corporate and mobile devices, minimizing downtime.',
        'Managed critical support incidents for external enterprise clients, ensuring strict SLA compliance.',
        'Architected an inventory and case traceability system leveraging relational database schemas in Excel.',
      ],
    },
  },
  {
    role: {
      es: 'Práctica Profesional · Optimización Algorítmica & HPC',
      en: 'Professional Internship · Algorithmic Optimization & HPC',
    },
    company: 'Universidad Católica de Temuco (mutualinf)',
    period: { es: 'Agosto 2024 — Noviembre 2024', en: 'August 2024 — November 2024' },
    location: { es: 'Temuco, Chile', en: 'Temuco, Chile' },
    type: 'Investigación & HPC',
    bullets: {
      es: [
        'Rediseñé el núcleo estadístico a C++17 y RcppArmadillo, reduciendo tiempos de 120+ s a menos de 1 s (>120× de aceleración).',
        'Implementé tablas hash con std::unordered_map y Fibonacci Hashing en tiempo O(1) preparadas para publicación oficial en CRAN.',
        'Realicé validación cruzada y pruebas de consistencia matemática frente a la versión original en R.',
      ],
      en: [
        'Redesigned the computational core in C++17 and RcppArmadillo, slashing processing times from 120+ s to under 1 s (>120× speedup).',
        'Implemented hash tables with std::unordered_map and O(1) Fibonacci Hashing prepared for official CRAN submission.',
        'Performed cross-validation benchmarks and mathematical consistency verification against legacy R routines.',
      ],
    },
  },
  {
    role: {
      es: 'Pre-Tesis · Paralelización en Clústeres Multinúcleo',
      en: 'Pre-Thesis · Multi-Core Cluster Parallelization',
    },
    company: 'Universidad Católica de Temuco (mutualinf)',
    period: { es: 'Agosto 2023 — Enero 2024', en: 'August 2023 — January 2024' },
    location: { es: 'Temuco, Chile', en: 'Temuco, Chile' },
    type: 'HPC & Paralelismo',
    bullets: {
      es: [
        'Desarrollé soporte de clústeres para Windows con makePSOCKcluster y parLapply en consultas estadísticas avanzadas.',
        'Creé la función mutual_inv con menor sobrecarga de validaciones y ejecución optimizada.',
        'Implementé salvaguardas de detección y limitación de hilos de CPU en el sistema operativo.',
      ],
      en: [
        'Developed Windows cluster multi-core parallelization with makePSOCKcluster and parLapply for advanced statistical queries.',
        'Built the mutual_inv function with stripped validation overhead and optimized execution path.',
        'Implemented CPU thread auto-detection and safe utilization caps respecting host hardware limits.',
      ],
    },
  },
  {
    role: {
      es: 'Práctica Inicial · Procesamiento de Datos & Prototipado',
      en: 'Initial Internship · Data Processing & Prototyping',
    },
    company: 'Universidad Católica de Temuco (mutualinf)',
    period: { es: 'Diciembre 2022 — Enero 2023', en: 'December 2022 — January 2023' },
    location: { es: 'Temuco, Chile', en: 'Temuco, Chile' },
    type: 'Ciencia de Datos',
    bullets: {
      es: [
        'Procesé y estructuré conjuntos de datos masivos de segregación escolar en Chile utilizando R y Excel.',
        'Evalué prototipos iniciales de paralelización multihilo en C++ con <thread> y Rcpp.',
      ],
      en: [
        'Processed and structured large-scale Chilean school segregation data using R and Excel data pipelines.',
        'Evaluated early multi-threaded concurrency prototypes in native C++ using <thread> and Rcpp.',
      ],
    },
  },
];
