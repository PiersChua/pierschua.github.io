import ProjectsItem from "./ProjectsItem";
import ProjectModal from "./ProjectModal";
import "./Projects.css";
import { projects } from "../../data/projects";
import { Project } from "../../types/project";
import { useState } from "react";

const Projects = () => {
  const sortedProjects = projects.sort((a, b) => {
    return b.id - a.id;
  });

  const [modalVisible, setModalVisible] = useState(false);
  // account for null projects
  const [modalProject, setModalProject] = useState<Project | null>();
  const handleModalVisible = (id: number) => {
    setModalVisible(!modalVisible);
    // find the first element that corresponds to the same id
    setModalProject(projects.find((data) => data.id == id) || null);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <div>
      <ProjectModal
        modalVisible={modalVisible}
        closeModal={closeModal}
        project={modalProject || null}
      ></ProjectModal>
      <div className="projects" id="projects">
        <h1 className="title">My projects</h1>
        <div className="py-4">
          {sortedProjects.map((project) => (
            <ProjectsItem
              key={project.id}
              project={project}
              onSetModalVisible={handleModalVisible}
            ></ProjectsItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
