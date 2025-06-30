import styles from "./Intro.module.scss";
import ExpandIcon from "../../icons/ExpandIcon";
import Collapse from "./Collapse/Collapse";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Intro = () => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandBioClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.intro}>
      <div className={styles.profile}>
        <img className={styles.profilePic} src="images/profile-pic.jpg" />
        <h1>
          {t("hi")},
          <img className={styles.hand} src="images/waving-hand-emoji.png" />
        </h1>
        <h1>{t("name")}</h1>
        <h4>{t("profession")}</h4>
      </div>

      <div className={styles.bio}>
        <p>{t("bio.short")}</p>
        <Collapse isExpanded={isExpanded}>
          <div className={styles.expandedBio}>
            <p>{t("bio.expanded.paragraph1")}</p>
            <p>{t("bio.expanded.paragraph2")}</p>
            <p>{t("bio.expanded.paragraph3")}</p>
          </div>
        </Collapse>
        <button
          className={styles.expandBioButton}
          onClick={handleExpandBioClick}
        >
          <ExpandIcon className={styles.expandIcon} isExpanded={isExpanded} />
          {isExpanded ? t("collapseLabel") : t("expandLabel")}
        </button>
      </div>
    </div>
  );
};

export default Intro;
