import styles from "./Intro.module.scss";
import ExpandIcon from "../../icons/ExpandIcon";
import Collapse from "./Collapse/Collapse";
import { useState } from "react";
import { greeting, name, profession, bio, expandLabel, collapseLabel } from "../../data/locales";
import { useLangContext } from "../../context/LangContext";

const Intro = () => {
  const { lang } = useLangContext();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandBioClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.intro}>
      <div className={styles.title}>
        <h1 className={styles.hi}>
          {greeting[lang]},
          <img className={styles.hand} src="images/waving-hand-emoji.png" />
        </h1>
        <h1>{name[lang]}</h1>
        <h4>{profession[lang]}</h4>
      </div>

      <div className={styles.bio}>
        <p>{bio.p1[lang]}</p>
        <Collapse isExpanded={isExpanded}>
          <div className={styles.expandedBio}>
            <p>{bio.p2[lang]}</p>
            <p>{bio.p3[lang]}</p>
          </div>
        </Collapse>
        <div className={styles.expandBioContainer}>
          <button className={styles.expandBioButton} onClick={handleExpandBioClick}>
            <ExpandIcon className={styles.expandIcon} isExpanded={isExpanded} />
            {isExpanded ? collapseLabel[lang] : expandLabel[lang]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
