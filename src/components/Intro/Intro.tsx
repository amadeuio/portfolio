import styles from "./Intro.module.scss";
import ExpandIcon from "../../icons/ExpandIcon";
import Collapse from "./Collapse/Collapse";
import { useState } from "react";
import { hi, name, profession, bio, expandLabel, collapseLabel } from "../../data/locales";
import { useLangContext } from "../../context/LangContext";

const Intro = () => {
  const { lang } = useLangContext();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandBioClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.intro}>
      <div className={styles.profile}>
        <img className={styles.profilePic} src="images/profile-pic2.jpg" />
        <h1>
          {hi[lang]},
          <img className={styles.hand} src="images/waving-hand-emoji.png" />
        </h1>
        <h1>{name[lang]}</h1>
        <h4>{profession[lang]}</h4>
      </div>

      <div className={styles.bio}>
        {bio.short[lang]}
        <Collapse isExpanded={isExpanded}>
          <div className={styles.expandedBio}>{bio.expanded[lang]}</div>
        </Collapse>
        <button className={styles.expandBioButton} onClick={handleExpandBioClick}>
          <ExpandIcon className={styles.expandIcon} isExpanded={isExpanded} />
          {isExpanded ? collapseLabel[lang] : expandLabel[lang]}
        </button>
      </div>
    </div>
  );
};

export default Intro;
