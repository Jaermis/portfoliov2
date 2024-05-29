import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Ahoy There! I'm Josh</h1>
        <p className={styles.description}>
          I'm a BS in Computer Engineering student at Cebu Institute of
          Technology - University. I am a frontend developer using Angular and
          React. I am also a UI/UX and Graphic Designer with Figma and Photosop
          as my main tools. Reach out if you'd like to know more.
        </p>
        <a
          className={styles.contactBtn}
          href="mailto:jermynejosh.kaquilala@gmail.com"
        >
          Contact Me
        </a>
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
