import ProjectsItem from "./ProjectsItem";
import ProjectModal from "./ProjectModal";
import "./Projects.css";
import { projects } from "../../data/projects";
import { Project } from "../../types/project";
import { useState, useEffect } from "react";

const Projects = () => {
  const sortedProjects = projects.sort((a, b) => {
    return b.id - a.id;
  });

  const [modalVisible, setModalVisible] = useState(false);
  // account for null projects
  const [modalProject, setModalProject] = useState<Project | null>();
  const handleModalVisible = (id: number) => {
    // find the first element that corresponds to the same id
    setModalProject(projects.find((data) => data.id == id) || null);
    setModalVisible(!modalVisible);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const preloadImages = (images: string[]) => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  };

  useEffect(() => {
    const allImages = sortedProjects.flatMap((project) => project.modalImages);
    preloadImages(allImages);
  }, []);
  return (
    <div>
      <ProjectModal
        modalVisible={modalVisible}
        closeModal={closeModal}
        project={modalProject || null}
      />
      <div className="projects" id="projects">
        <h1 className="title">My projects</h1>
        <div>
          {sortedProjects.map((project) => (
            <ProjectsItem
              key={project.id}
              project={project}
              onSetModalVisible={handleModalVisible}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
