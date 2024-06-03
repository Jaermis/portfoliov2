import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact">
      <div>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul>
        <li>
          <a
            href="https://github.com/Jaermis"
            target="_blank"
            className={styles.socialIcon}
          >
            <FaGithub />
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jermyne-josh-kaquilala-6a8716295/"
            target="_blank"
            className={styles.socialIcon}
          >
            <FaLinkedin />
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/boiwasabi"
            target="_blank"
            className={styles.socialIcon}
          >
            <FaFacebook />
            Facebook
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/josh.kakicks"
            target="_blank"
            className={styles.socialIcon}
          >
            <FaInstagram />
            Instagram
          </a>
        </li>
        <li>
          <a
            href="mailto:jermynejosh.kaquilala@gmail.com"
            className={styles.socialIcon}
          >
            <BiLogoGmail />
            Email
          </a>
        </li>
      </ul>
    </footer>
  );
};
