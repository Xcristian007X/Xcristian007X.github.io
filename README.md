# Portafolio Profesional — Cristian Angulo González

Portafolio web moderno de alto rendimiento desarrollado con **React 19 + Vite**, diseñado específicamente para perfiles de **Data Science & Software Engineering** y preparado para despliegue automático 100% gratuito en **GitHub Pages** (`https://xcristian007x.github.io/`).

---

## 🚀 Características Principales

- **Arquitectura de Proyectos por Áreas:**
  - 📊 **Ciencia de Datos & HPC:** `mutualinf` (CRAN / C++17), Módulo Analítico Escala de Borg (PostgreSQL) y `SuperSolutionGraphicsSimplex` (C++).
  - 💻 **Otros Proyectos (Software & Mobile):** `Nissi-Gym` (Kotlin Multiplatform / Go), `MicroMatic` (Python / React / MongoDB) y `TwinSanity`.
- **Métricas de Impacto Visibles:** Cada tarjeta destaca métricas técnicas reales ($>120\times$ aceleración, $>85\%$ código compartido, O(1) hashing).
- **Descarga Directa de CV en 1 Clic:** Modal interactivo para descargar el CV en formato Harvard o Canadiense.
- **Stack & Certificaciones:** Sección de competencias categorizadas y acreditaciones oficiales (Google, Microsoft, NVIDIA, Wall Street English).
- **Diseño Ejecutivo Dark Mode:** Tipografía *Plus Jakarta Sans*, Glassmorphism, CSS puro sin dependencias pesadas y 100% responsivo.

---

## 💻 Ejecución Local

Para probar la página en tu máquina:

```bash
cd portfolio
npm run dev
```

Abre en tu navegador la URL que te indique la terminal (usualmente `http://localhost:5173`).

Para generar la compilación de producción:

```bash
npm run build
npm run preview
```

---

## 🌐 Publicación 100% Gratuita en GitHub Pages (`Xcristian007X.github.io`)

Tu web se mantendrá en línea **sin ningún costo monetario** usando GitHub Actions.

### Pasos para publicar:

1. **Si ya tienes el repositorio `Xcristian007X.github.io` clonado o creado en GitHub:**
   - Copia los archivos de esta carpeta `portfolio` dentro de tu repositorio local `Xcristian007X.github.io`.
   - Sube los cambios con Git:
     ```bash
     git add .
     git commit -m "feat: portafolio interactivo en React 19 y Vite"
     git push origin main
     ```

2. **Habilitar GitHub Actions en GitHub Pages (Solo se hace una vez):**
   - Entra a tu repositorio en GitHub: `https://github.com/Xcristian007X/Xcristian007X.github.io`
   - Ve a **Settings** $\rightarrow$ **Pages** (en el menú lateral izquierdo).
   - En la sección **Build and deployment** $\rightarrow$ **Source**, selecciona:
     **`GitHub Actions`** (en lugar de `Deploy from a branch`).
   - ¡Listo! El archivo `.github/workflows/deploy.yml` que dejamos configurado compilará y publicará tu web automáticamente en un par de minutos.
