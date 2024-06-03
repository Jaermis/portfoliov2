import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import styles from "./Project.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Project = () => {
  const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
  };

  const size = useWindowSize();

  return (
    <Fade triggerOnce>
      <section className={styles.container} id="projects">
        <h2 className={styles.title}>Projects</h2>
        {size.width >= 1200 ? (
          <Swiper
            modules={[EffectCoverflow, Pagination, Navigation]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            spaceBetween={30} // Adjust the spacing between slides here
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            className={styles.swiperContainer}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            slidesPerView={3.2}
          >
            {projects.map((project, id) => (
              <SwiperSlide key={id} className={styles.swiperSlide}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className={styles.projectColumn}>
            {projects.map((project, id) => (
              <div key={id} className={styles.projectItem}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        )}
      </section>
    </Fade>
  );
};
