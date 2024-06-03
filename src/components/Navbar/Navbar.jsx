import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { Fade } from "react-awesome-reveal";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setInitialLoad(false);
    }, 7000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Fade direction="down" triggerOnce delay={initialLoad ? 5200 : 0}>
      <nav className={styles.navbar}>
        <a className={styles.title} href="/">
          Josh
        </a>
        <div className={styles.menu}>
          <img
            className={styles.menuBtn}
            src={
              menuOpen
                ? getImageUrl("nav/closeIcon.png")
                : getImageUrl("nav/menuIcon.png")
            }
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <ul
            className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}
          >
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </Fade>
  );
};
