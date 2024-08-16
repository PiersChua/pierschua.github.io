import { Project } from "../../types/project";
import "./ProjectsItem.css";
import { useState, useEffect } from "react";

interface Props {
  project: Project;
  onSetModalVisible: (id: number) => void;
}

const ProjectsItem = ({ project, onSetModalVisible }: Props) => {
  const [fadeRight, setFadeRight] = useState("");
  const [fadeLeft, setFadeLeft] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1023) {
        setFadeRight("custom-fade-up"); // Fade animation for smaller screens
        setFadeLeft("custom-fade-up");
      } else {
        setFadeRight("custom-fade-right"); // Fade slide animation for larger screens
        setFadeLeft("custom-fade-left");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className="project-item"
      data-aos={project.id % 2 == 0 ? fadeRight : fadeLeft}
    >
      <img
        className="project-item-img"
        src={project.cardImage}
        alt={project.title}
      />
      <div className="project-item-content">
        <h2
          className="project-item-title"
          title="View Project"
          onClick={() => onSetModalVisible(project.id)}
        >
          {project.title} <span className="bi bi-arrow-up-right"></span>
        </h2>
        <small>
          <span className="bi bi-calendar3"></span> {project.startDate} -{" "}
          {project.endDate}
        </small>
        <div className="project-item-bar"></div>
        <div className="project-item-desc">{project.cardDesc}</div>
        <ul className="project-item-skills">
          <li className="project-item-tag type">
            <span className="bi bi-tag-fill"></span> {project.type}
          </li>
          {project.skills.map((skill) => (
            <li key={skill} className="project-item-tag">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectsItem;
