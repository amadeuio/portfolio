import styles from "./ComingSoon.module.scss";

const ComingSoon = () => {
  return (
    <div className={styles.comingSoon}>
      <div className={styles.title}>
        <h1>Hi, I'm Amadeu 👋</h1>
        <p>Portfolio coming soon...</p>
      </div>
      <div className={styles.projects}>
        <p> Meanwhile, check out some of my projects ⬇️</p>
        <ul className={styles.list}>
          <li>
            <a href="https://github.com/amadeuio/fruits-store" target="_blank">
              Fruits Store
            </a>
          </li>
          <li>
            <a href="https://github.com/amadeuio/make-your-cv" target="_blank">
              Make Your CV
            </a>
          </li>
          <li>
            <a href="https://github.com/amadeuio/battleship" target="_blank">
              Battleship
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ComingSoon;
