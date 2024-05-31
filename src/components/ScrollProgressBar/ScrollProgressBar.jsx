import { useEffect, useState } from "react";
import styles from "./ScrollProgressBar.module.css";

export const ScrollProgressBar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollWidth(progress);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.scrollContainer}>
      <div
        className={styles.scrollProgress}
        style={{ width: `${scrollWidth}%` }}
      ></div>
    </div>
  );
};
