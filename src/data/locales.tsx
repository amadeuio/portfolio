export const greeting = {
  en: "Hi",
  es: "Hola",
};

export const name = {
  en: "I'm Amadeu",
  es: "Soy Amadeu",
};

export const profession = {
  en: "Frontend Developer",
  es: "Desarrollador Frontend",
};

export const bio = {
  p1: {
    en: `Developer from Barcelona, I love programming! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    es: `Desarollador de Barcelona, me encanta programar! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  p2: {
    en: (() => {
      return (
        <>
          EN: Ut enim ad minim veniam, <a href="">quis</a> nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
        </>
      );
    })(),
    es: (() => {
      return (
        <>
          ES: Ut enim ad minim veniam, <a href="">quis</a> nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
        </>
      );
    })(),
  },
  p3: {
    en: (() => {
      return (
        <>
          EN: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia{" "}
          <a href="">deserunt</a> mollit anim id est laborum.
        </>
      );
    })(),
    es: (() => {
      return (
        <>
          ES: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia{" "}
          <a href="">deserunt</a> mollit anim id est laborum.
        </>
      );
    })(),
  },
};

export const expandLabel = {
  en: "Expand Bio",
  es: "Expandir Bio",
};

export const collapseLabel = {
  en: "Collapse Bio",
  es: "Colapsar Bio",
};

export const projectsTitle = {
  en: "Projects",
  es: "Proyectos",
};

export const skillsTitle = {
  en: "Skills",
  es: "Conocimientos",
};

export const contact = {
  en: "Contact",
  es: "Contacto",
};

export const contactDescription = {
  en: "I'm currently actively applying and interviewing. Please contact me through email or LinkedIn below.",
  es: "Actualmente estoy aplicando y entrevistando. Se me puede contactar a traves de email o LinkedIn siguientes.",
};

export const credits = {
  en: "All projects and portfolio coded from scratch 👨🏻‍💻 by",
  es: "Proyectos y portafolio programados 👨🏻‍💻 por",
};
