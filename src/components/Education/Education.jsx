import { useState } from "react";
import { GradesTable } from "./GradesTable";
import gradesData from "../../data/grades.json";
import styles from "./Education.module.css";
import { Fade } from "react-awesome-reveal";

export const Education = () => {
  const [pageIndex, setPageIndex] = useState(0);

  const nextPage = () => {
    setPageIndex((old) => (old + 1) % gradesData.length);
  };

  const previousPage = () => {
    setPageIndex((old) => (old - 1 + gradesData.length) % gradesData.length);
  };

  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <Fade direction="right">
          <div className={styles.tableCont}>
            <GradesTable semesterData={gradesData[pageIndex]} />
            <div className={styles.pagination}>
              <button onClick={previousPage}>&lt; Previous</button>
              <span>
                {pageIndex + 1} / {gradesData.length}
              </span>
              <button onClick={nextPage}>Next &gt;</button>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};
