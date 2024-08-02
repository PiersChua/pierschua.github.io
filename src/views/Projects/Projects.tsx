import ProjectsItem from "./ProjectsItem";
import "./Projects.css";
import { projects } from "../../data/projects";

const Projects = () => (
  <div className="projects" id="projects">
    <h1 className="title">My projects</h1>
    <div className="py-4">
      {projects.map((project) => (
        <ProjectsItem key={project.id} project={project}></ProjectsItem>
      ))}
    </div>
  </div>
);

export default Projects;
