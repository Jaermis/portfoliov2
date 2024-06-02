import PropTypes from "prop-types";
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { title, imageSrc, description, tech, github },
}) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={getImageUrl(imageSrc)} alt={title} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.techs}>
        {tech.map((tech, techId) => (
          <li className={styles.tech} key={techId}>
            {tech}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={github} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string.isRequired,
  }).isRequired,
};
