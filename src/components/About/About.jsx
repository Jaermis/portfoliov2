import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/*<img className={styles.aboutImg} src={getImageUrl("about/aboutImage.png")} alt="me sitting" />*/}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              className={styles.aboutImage}
              src={getImageUrl("about/cursorIcon.png")}
              alt="Cursor icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I&apos;m a frontend developer with experience in building
                responsive sites in Angular and React.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              className={styles.aboutImage}
              src={getImageUrl("about/backendIcon.png")}
              alt="Cursor icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have a little experience with backend using Access and
                Firebase.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              className={styles.aboutImage}
              src={getImageUrl("about/uiIcon.png")}
              alt="Cursor icon"
            />
            <div className={styles.aboutItemText}>
              <h3>UI/UX Designer</h3>
              <p>
                I have designed a number of UI designs ranging from mobile
                applications to web applications using Figma.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
