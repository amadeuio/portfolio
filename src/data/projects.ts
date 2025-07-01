export interface Project {
  name: string;
  img: string;
  demo: string;
  repo: string;
  descriptionKey: string;
}

const projects: Project[] = [
  {
    name: 'Fruits Store',
    img: 'fruits-store.png',
    demo: 'https://fruitsstoremarket.netlify.app',
    repo: 'https://github.com/amadeuio/fruits-store',
    descriptionKey: 'projects.fruitsStore',
  },
  {
    name: 'Battleship',
    img: 'battleship.png',
    demo: 'https://battleshipgameapp.netlify.app',
    repo: 'https://github.com/amadeuio/battleship',
    descriptionKey: 'projects.battleship',
  },
  {
    name: 'Make Your CV',
    img: 'make-your-cv.png',
    demo: 'https://makeyourresumeapp.netlify.app',
    repo: 'https://github.com/amadeuio/make-your-cv',
    descriptionKey: 'projects.makeYourCv',
  },
];

export default projects;
