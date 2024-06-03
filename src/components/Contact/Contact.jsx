import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import styles from "./Contact.module.css";
import { Fade } from "react-awesome-reveal";

export const Contact = () => {
  return (
    <Fade triggerOnce direction="up">
      <footer id="contact" className={styles.container}>
        <div className={styles.text}>
          <h1>Contact</h1>
          <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.contacts}>
          <li>
            <a
              href="https://github.com/Jaermis"
              target="_blank"
              className={styles.socialIcon}
            >
              <FaGithub className={styles.icons} />
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jermyne-josh-kaquilala-6a8716295/"
              target="_blank"
              className={styles.socialIcon}
            >
              <FaLinkedin className={styles.icons} />
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/boiwasabi"
              target="_blank"
              className={styles.socialIcon}
            >
              <FaFacebook className={styles.icons} />
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/josh.kakicks"
              target="_blank"
              className={styles.socialIcon}
            >
              <FaInstagram className={styles.icons} />
              Instagram
            </a>
          </li>
          <li>
            <a
              href="mailto:jermynejosh.kaquilala@gmail.com"
              className={styles.socialIcon}
            >
              <BiLogoGmail className={styles.icons} />
              Email
            </a>
          </li>
        </ul>
      </footer>
    </Fade>
  );
};
