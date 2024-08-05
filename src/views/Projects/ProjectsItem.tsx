import { Project } from "../../types/project";
import "./ProjectsItem.css";

interface Props {
  project: Project;
  onSetModalVisible: (id: number) => void;
}

const ProjectsItem = ({ project, onSetModalVisible }: Props) => {
  return (
    <div className="project-item">
      <img
        className="project-item-img"
        src={project.cardImage}
        alt={project.title}
      />
      <div className="project-item-content">
        <a title="View Project" onClick={() => onSetModalVisible(project.id)}>
          <h2 className="project-item-title">
            {project.title} <span className="bi bi-arrow-up-right"></span>
          </h2>
        </a>
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
