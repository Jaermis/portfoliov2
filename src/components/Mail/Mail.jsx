import { IoMdMail } from "react-icons/io";
import styles from "./Mail.module.css";
import { Fade } from "react-awesome-reveal";

export const Mail = () => {
  return (
    <Fade delay={5200} triggerOnce>
      <button className={styles.contactButton}>
        <IoMdMail />
      </button>
    </Fade>
  );
};
