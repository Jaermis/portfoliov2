import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import styles from "./Project.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

//add swiperslide tomorrow
export const Project = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <Swiper>
        <SwiperSlide>
          <div className={styles.projects}>
            {projects.map((project, id) => {
              return <ProjectCard key={id} project={project} />;
            })}
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
