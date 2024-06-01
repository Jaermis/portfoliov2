import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { Fade } from "react-awesome-reveal";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <Fade>
          <h1 className={styles.title}>Ahoy There! I&apos;m Josh</h1>
        </Fade>

        <Fade>
          <p className={styles.description}>
            I&apos;m a BS in Computer Engineering student at Cebu Institute of
            Technology - University. I am a frontend developer using Angular and
            React. I am also a UI/UX and Graphic Designer with Figma and
            Photosop as my main tools. Reach out if you&apos;d like to know
            more.
          </p>
        </Fade>

        <Fade>
          <a
            className={styles.contactBtn}
            href="https://drive.usercontent.google.com/u/0/uc?id=1MlJN4xJloprqTS39MHdyshMEMHzoR8mL&export=download"
          >
            Download CV
          </a>
        </Fade>

        <Fade>
          <div className={styles.socials}>
            <a
              href="https://github.com/Jaermis"
              target="_blank"
              className={styles.socialIcon}
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jermyne-josh-kaquilala-6a8716295/"
              target="_blank"
              className={styles.socialIcon}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/boiwasabi"
              target="_blank"
              className={styles.socialIcon}
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/josh.kakicks"
              target="_blank"
              className={styles.socialIcon}
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:jermynejosh.kaquilala@gmail.com"
              className={styles.socialIcon}
            >
              <BiLogoGmail />
            </a>
          </div>
        </Fade>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero Image"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
