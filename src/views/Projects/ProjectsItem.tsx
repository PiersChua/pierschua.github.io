import { Project } from "../../types/project";
import "./ProjectsItem.css";

interface Props {
  project: Project;
}

const ProjectsItem = ({ project }: Props) => {
  return (
    <div className="project-item">
      <img
        className="project-item-img"
        src={project.image}
        alt={project.title}
      />
      <div className="project-item-content">
        <a title="View Project" href="#">
          <h2 className="project-item-title">
            {project.title} <span className="bi bi-arrow-up-right"></span>
          </h2>
        </a>
        <small>
          <span className="bi bi-calendar3"></span> {project.startDate} -{" "}
          {project.endDate}
        </small>
        <div className="project-item-bar"></div>
        <div className="project-item-desc">{project.desc}</div>
        <ul className="project-item-skills">
          {project.skills.map((skill) => (
            <li key={skill} className="project-item-skill">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectsItem;
