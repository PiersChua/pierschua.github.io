import { Project } from "../../types/project";
import "./ProjectsItem.css";

interface Props {
  project: Project;
}

const ProjectsItem = ({ project }: Props) => (
  <div className="project-item">
    <a className="project-item-link" href="#">
      <img
        title="View Details"
        className="project-item-img"
        src={project.image}
        alt={project.title}
      />
    </a>
    <div className="project-item-content">
      <h2 className="project-item-title">{project.title}</h2>
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

export default ProjectsItem;
