import React, { useState } from 'react';
import {
  Mail,
  FileText,
  ExternalLink,
  Code2,
  Database,
  Cpu,
  Layers,
  Sparkles,
  Award,
  Briefcase,
  Terminal,
  Lock,
  Globe,
  Menu,
  X,
  TrendingUp,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './components/Icons';
import { projectsData } from './data/projects';
import { skillsData, certificationsData, experienceData } from './data/skills';
import { translations } from './data/translations';
import './App.css';

export default function App() {
  const [lang, setLang] = useState('es');
  const [activeTab, setActiveTab] = useState('data-science');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translations[lang];

  const filteredProjects = projectsData.filter((p) => p.category === activeTab);
  const dataProjectsCount = projectsData.filter((p) => p.category === 'data-science').length;
  const softProjectsCount = projectsData.filter((p) => p.category === 'software-engineering').length;

  const toggleLang = () => {
    setLang((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  const coreTechnologies = ['Python', 'R', 'C++', 'Azure', 'Fabric', 'SQL', 'Power BI'];

  return (
    <div className="portfolio-app">
      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#" className="nav-brand">
            <span className="brand-dot" title="Disponible para trabajar"></span>
            {t.nav.brand}
          </a>

          {/* Desktop Navigation Links */}
          <div className="nav-links">
            <a href="#proyectos">{t.nav.projects}</a>
            <a href="#experiencia">{t.nav.experience}</a>
            <a href="#habilidades">{t.nav.skills}</a>
            <a href="#certificaciones">{t.nav.certs}</a>
            <a href="#contacto">{t.nav.contact}</a>
          </div>

          {/* Action Buttons */}
          <div className="nav-actions">
            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              className="lang-btn"
              title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
              aria-label="Cambiar idioma"
            >
              <Globe size={15} style={{ color: '#38bdf8' }} />
              <span>{lang === 'es' ? 'ES' : 'EN'}</span>
              <span className="lang-badge">{lang === 'es' ? 'EN' : 'ES'}</span>
            </button>

            <a
              href="https://github.com/Xcristian007X"
              target="_blank"
              rel="noreferrer"
              className="icon-btn"
              title="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>

            <a
              href="https://linkedin.com/in/cristian-angulo-gonzalez-111046279"
              target="_blank"
              rel="noreferrer"
              className="icon-btn"
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="menu-toggle-btn"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-menu-drawer">
            <a
              href="#proyectos"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>{t.nav.projects}</span>
            </a>
            <a
              href="#experiencia"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>{t.nav.experience}</span>
            </a>
            <a
              href="#habilidades"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>{t.nav.skills}</span>
            </a>
            <a
              href="#certificaciones"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>{t.nav.certs}</span>
            </a>
            <a
              href="#contacto"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>{t.nav.contact}</span>
            </a>
          </div>
        )}
      </nav>

      {/* ================= HERO SECTION ================= */}
      <header className="hero-section">
        <div className="container">
          <div className="hero-layout">
            <div className="hero-content">
              <div className="hero-pill">
                <Sparkles size={14} />
                <span>{t.hero.pill}</span>
              </div>

              <h1 className="hero-title">Cristian Angulo González</h1>

              <div className="hero-role">
                <span className="gradient-text">{t.hero.role}</span>
              </div>

              {/* Horizontal Itemize of Core Technologies */}
              <div className="hero-tech-stack">
                {coreTechnologies.map((tech, idx) => (
                  <span key={idx} className="hero-tech-item">
                    <span>{tech}</span>
                    {idx < coreTechnologies.length - 1 && (
                      <span className="hero-tech-separator">&bull;</span>
                    )}
                  </span>
                ))}
              </div>

              <p className="hero-subtitle">{t.hero.subtitle}</p>

              <div className="hero-actions">
                <a href="#proyectos" className="btn-primary">
                  <Code2 size={16} />
                  <span>{t.hero.viewProjects}</span>
                </a>
                <a
                  href={
                    lang === 'es'
                      ? './cv_cristian_angulo_harvard_es.pdf'
                      : './cv_cristian_angulo_harvard_en.pdf'
                  }
                  download={
                    lang === 'es'
                      ? 'CV_Cristian_Angulo_Harvard_ES.pdf'
                      : 'CV_Cristian_Angulo_Harvard_EN.pdf'
                  }
                  className="btn-outline"
                  title={
                    lang === 'es'
                      ? 'Descargar CV Harvard en Español (PDF)'
                      : 'Download Harvard Resume in English (PDF)'
                  }
                >
                  <FileText size={16} />
                  <span>{t.hero.downloadCv}</span>
                </a>
                <a href="#contacto" className="btn-outline">
                  <Mail size={16} />
                  <span>{t.hero.contactMe}</span>
                </a>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="hero-avatar-wrapper">
              <img
                src="./profile.jpg"
                alt="Cristian Angulo González"
                className="hero-avatar"
              />
            </div>
          </div>
        </div>
      </header>

      {/* ================= PROYECTOS ================= */}
      <section id="proyectos" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">
              <Layers size={14} />
              <span>{t.projects.tag}</span>
            </div>
            <h2 className="section-title">{t.projects.title}</h2>
            <p className="section-desc">{t.projects.desc}</p>
          </div>

          {/* Category Tabs: Only 2 tabs */}
          <div className="tabs-container">
            <button
              onClick={() => setActiveTab('data-science')}
              className={`tab-btn ${activeTab === 'data-science' ? 'active' : ''}`}
            >
              <Database size={16} />
              <span>
                {t.projects.tabData} ({dataProjectsCount})
              </span>
            </button>
            <button
              onClick={() => setActiveTab('software-engineering')}
              className={`tab-btn ${activeTab === 'software-engineering' ? 'active' : ''}`}
            >
              <Terminal size={16} />
              <span>
                {t.projects.tabOther} ({softProjectsCount})
              </span>
            </button>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((p) => (
              <div key={p.id} className="glass-panel project-card">
                <div>
                  <div className="card-top">
                    <span className={`badge badge-${p.badgeColor}`}>{p.status[lang]}</span>
                    {p.impact && (
                      <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: 600 }}>
                        {p.impact[lang]}
                      </span>
                    )}
                  </div>

                  <h3 className="card-title">{p.title}</h3>
                  <h4 className="card-subtitle">{p.subtitle[lang]}</h4>
                  <p className="card-desc">{p.description[lang]}</p>

                  {/* Metrics Box */}
                  {p.metrics && (
                    <div className="metrics-box">
                      {p.metrics.map((m, idx) => (
                        <div key={idx} className="metric-item">
                          <span className="metric-value">{m.value}</span>
                          <span className="metric-label">{m.label[lang]}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="tags-list">
                    {p.tags.map((tag, idx) => (
                      <span key={idx} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="card-actions">
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="action-link"
                    >
                      <GithubIcon size={15} />
                      <span>{t.projects.viewCode}</span>
                    </a>
                  )}

                  {p.externalUrl && (
                    <a
                      href={p.externalUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="action-link"
                    >
                      <ExternalLink size={15} />
                      <span>{t.projects.viewCran}</span>
                    </a>
                  )}

                  {p.isPrivate && (
                    <div className="private-badge" title="Propiedad privada">
                      <Lock size={14} />
                      <span>{t.projects.commercialCode}</span>
                    </div>
                  )}

                  {p.privateOrgUrl && (
                    <a
                      href={p.privateOrgUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="action-link"
                      style={{ marginLeft: 'auto' }}
                      title="Nissi Coach — Plataforma de gestión y planificación del entrenamiento"
                    >
                      <span>{p.orgLabel?.[lang] || t.projects.viewPlatform}</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCIA ================= */}
      <section id="experiencia" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">
              <Briefcase size={14} />
              <span>{t.experience.tag}</span>
            </div>
            <h2 className="section-title">{t.experience.title}</h2>
            <p className="section-desc">{t.experience.desc}</p>
          </div>

          <div className="timeline">
            {experienceData.map((exp, idx) => (
              <div key={idx} className="timeline-item">
                <span className="timeline-dot"></span>
                <div className="glass-panel exp-card">
                  <div className="exp-header">
                    <div>
                      <h3 className="exp-role">{exp.role[lang]}</h3>
                      <div className="exp-company">{exp.company}</div>
                    </div>
                    <span className="exp-period">{exp.period[lang]}</span>
                  </div>
                  <div className="exp-location">{exp.location[lang]}</div>

                  <ul className="exp-bullets">
                    {exp.bullets[lang].map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HABILIDADES ================= */}
      <section id="habilidades" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">
              <Cpu size={14} />
              <span>{t.skills.tag}</span>
            </div>
            <h2 className="section-title">{t.skills.title}</h2>
            <p className="section-desc">{t.skills.desc}</p>
          </div>

          <div className="skills-grid">
            {/* Lenguajes */}
            <div className="glass-panel skill-category">
              <h3 className="skill-cat-title">
                <Code2 size={18} style={{ color: '#38bdf8' }} />
                <span>{t.skills.categories.lenguajes}</span>
              </h3>
              <div className="skills-pills">
                {skillsData.lenguajes.map((s, idx) => (
                  <span key={idx} className="skill-pill">
                    {s.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Ciencia de Datos */}
            <div className="glass-panel skill-category">
              <h3 className="skill-cat-title">
                <Database size={18} style={{ color: '#34d399' }} />
                <span>{t.skills.categories.cienciaDeDatos}</span>
              </h3>
              <div className="skills-pills">
                {skillsData.cienciaDeDatos.map((s, idx) => (
                  <span key={idx} className="skill-pill">
                    {s.name}
                  </span>
                ))}
              </div>
            </div>

            {/* BI & Cloud */}
            <div className="glass-panel skill-category">
              <h3 className="skill-cat-title">
                <TrendingUp size={18} style={{ color: '#fbbf24' }} />
                <span>{t.skills.categories.biCloud}</span>
              </h3>
              <div className="skills-pills">
                {skillsData.biCloud.map((s, idx) => (
                  <span key={idx} className="skill-pill">
                    {s.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Software Engineering */}
            <div className="glass-panel skill-category">
              <h3 className="skill-cat-title">
                <Terminal size={18} style={{ color: '#c084fc' }} />
                <span>{t.skills.categories.ingenieriaSoftware}</span>
              </h3>
              <div className="skills-pills">
                {skillsData.ingenieriaSoftware.map((s, idx) => (
                  <span key={idx} className="skill-pill">
                    {s.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Idiomas */}
            <div className="glass-panel skill-category">
              <h3 className="skill-cat-title">
                <Globe size={18} style={{ color: '#818cf8' }} />
                <span>{t.skills.categories.idiomas}</span>
              </h3>
              <div className="languages-list">
                {skillsData.idiomas.map((i, idx) => (
                  <div key={idx} className="language-row">
                    <span className="language-name">{i.idioma[lang]}</span>
                    <span className="language-badge">{i.nivel[lang]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CERTIFICACIONES ================= */}
      <section id="certificaciones" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">
              <Award size={14} />
              <span>{t.certs.tag}</span>
            </div>
            <h2 className="section-title">{t.certs.title}</h2>
            <p className="section-desc">{t.certs.desc}</p>
          </div>

          <div className="cert-grid">
            {certificationsData.map((c, idx) => (
              <div key={idx} className="glass-panel cert-card">
                <span
                  className="badge badge-sky"
                  style={{ alignSelf: 'flex-start', marginBottom: '0.35rem' }}
                >
                  {c.badge}
                </span>
                <h3 className="cert-title">{c.title[lang]}</h3>
                <span className="cert-issuer">{c.issuer}</span>
                <span className="cert-date">{c.date[lang]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACTO ================= */}
      <section id="contacto" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="glass-panel" style={{ padding: '3.5rem 2rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '1rem' }}>
              {t.contact.title}
            </h2>
            <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              {t.contact.desc}
            </p>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <a href="mailto:cristian_world@hotmail.cl" className="btn-primary">
                <Mail size={16} />
                <span>cristian_world@hotmail.cl</span>
              </a>
              <a
                href="https://linkedin.com/in/cristian-angulo-gonzalez-111046279"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/Xcristian007X"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="container">
          <p style={{ marginBottom: '0.5rem' }}>
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <p style={{ fontSize: '0.78rem' }}>
            {t.footer.hosting}{' '}
            <a
              href="https://github.com/Xcristian007X/Xcristian007X.github.io"
              style={{ color: '#38bdf8', textDecoration: 'underline' }}
            >
              Xcristian007X.github.io
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
