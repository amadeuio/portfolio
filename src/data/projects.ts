export interface Project {
  name: string;
  img: string;
  demo: string;
  repo: string;
  description: object;
}

const projects: Project[] = [
  {
    name: "Fruits Store",
    img: "fruits-store.png",
    demo: "https://fruitsstoremarket.netlify.app",
    repo: "https://github.com/amadeuio/fruits-store",
    description: {
      en: "Static e-commerce store with React",
      es: "Tienda e-commerce estática con React",
    },
  },
  {
    name: "Battleship",
    img: "battleship.png",
    demo: "https://battleshipgameapp.netlify.app",
    repo: "https://github.com/amadeuio/battleship",
    description: {
      en: "Battleship game with vanilla TypeScript",
      es: "Juego de Battleship con vanilla TypeScript",
    },
  },
  {
    name: "Make Your CV",
    img: "make-your-cv.png",
    demo: "https://makeyourresumeapp.netlify.app",
    repo: "https://github.com/amadeuio/make-your-cv",
    description: { en: "CV builder with React", es: "Creador de CV con React" },
  },
];

export default projects;
