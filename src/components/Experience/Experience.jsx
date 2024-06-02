import { useState } from "react";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css";
import { Fade } from "react-awesome-reveal";
import { Tooltip } from "react-tooltip";

export const Experience = () => {
  const [selectedTab, setSelectedTab] = useState("All");

  // Get unique skill types
  const skillTypes = ["All", ...new Set(skills.map((skill) => skill.type))];

  // Filter skills based on selected tab
  const filteredSkills =
    selectedTab === "All"
      ? skills
      : skills.filter((skill) => skill.type === selectedTab);

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>

      <div className={styles.content}>
        <div className={styles.skillsCont}>
          <Fade duration={2000}>
            <div className={styles.tabContainer}>
              {skillTypes.map((type) => (
                <button
                  key={type}
                  className={
                    type === selectedTab ? styles.activeTab : styles.tab
                  }
                  onClick={() => setSelectedTab(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </Fade>

          <Tooltip id="skillTooltip" />
          <Fade key={selectedTab} triggerOnce duration={300}>
            <Fade duration={2000}>
              <div className={styles.skills}>
                {filteredSkills.map((skill, id) => (
                  <div key={id} className={styles.skill}>
                    <div
                      className={styles.skillImageContainer}
                      data-tooltip-id="skillTooltip"
                      data-tooltip-content={`${skill.title}`}
                    >
                      <img
                        src={getImageUrl(skill.imageSrc)}
                        alt={skill.title}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Fade>
          </Fade>
        </div>

        <Fade cascade damping={0.2} direction="right">
          <ul className={styles.history}>
            {history.map((historyItem, id) => (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={historyItem.organization}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organization}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => (
                      <li key={id}>{experience}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </Fade>
      </div>
    </section>
  );
};
