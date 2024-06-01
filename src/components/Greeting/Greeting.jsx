import { useEffect, useState } from "react";
import styles from "./Greeting.module.css";
import intro from "../../data/intro.json";

export const Greeting = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timeout = setTimeout(() => {
      setIsScrollable(true);
    }, 6100);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isScrollable) {
      document.body.style.overflow = "auto";
    }
  }, [isScrollable]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % intro.length);
    }, 3000); // Change message every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Looking for a{" "}
          <div className={styles["message-container"]}>
            {intro.map((introItem, index) => (
              <div
                key={index}
                className={styles.message}
                style={{
                  transform: `translateY(-${currentMessageIndex * 50}px)`,
                }}
              >
                {introItem.title}
              </div>
            ))}
          </div>
        </h1>
      </div>
    </div>
  );
};
