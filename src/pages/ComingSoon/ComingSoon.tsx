import { Link } from '@/components';
import styles from './ComingSoon.module.scss';

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
            <Link href="https://github.com/amadeuio/fruits-store">
              Fruits Store
            </Link>
          </li>
          <li>
            <Link href="https://github.com/amadeuio/make-your-cv">
              Make Your CV
            </Link>
          </li>
          <li>
            <Link href="https://github.com/amadeuio/battleship">
              Battleship
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ComingSoon;
