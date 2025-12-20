import "./ProjectModal.css";
import Carousel from "react-bootstrap/Carousel";
import { Modal } from "react-bootstrap";
import { Project } from "../../types/project";
import { useState, useEffect } from "react";

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
  project: Project | null;
}

const ProjectModal = ({ modalVisible, closeModal, project }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    setActiveIndex(0);
  }, [modalVisible]);

  const handleSelect = (selectedIndex: number) => {
    setActiveIndex(selectedIndex);
  };
  return (
    <Modal
      show={modalVisible}
      onHide={closeModal}
      backdrop="static"
      keyboard={false}
      size="lg"
      centered
      scrollable={true}
    >
      <Modal.Header>
        <Modal.Title>{project?.title}</Modal.Title>
        <span className="btn-close" onClick={closeModal}></span>
      </Modal.Header>
      <Modal.Body className="project-modal-body">
        <Carousel
          slide={false}
          interval={null}
          activeIndex={activeIndex}
          onSelect={handleSelect}
          indicators={false}
        >
          {project?.modalImages.map((image) => (
            <Carousel.Item className="project-modal-carousel-item">
              <img src={image} />
            </Carousel.Item>
          ))}
        </Carousel>

        <ul className="project-modal-carousel-indicators">
          {project?.modalImages.map((image, index) => (
            <li
              key={index}
              className={`carousel-indicators-item ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => handleSelect(index)}
            >
              <img src={image} alt={`Thumbnail ${index}`} />
            </li>
          ))}
        </ul>
        {project?.problemStatement && (
          <p className="project-problem">
            <b className="project-modal-desc-title">Problem Statement:</b>
            <p>{project?.problemStatement}</p>
          </p>
        )}
        <ul>
          <b className="project-modal-desc-title">Deliverables:</b>
          {project?.modalDescs.map((desc) => (
            <li>{desc}</li>
          ))}
        </ul>
        {project?.repository && (
          <p className="project-repository">
            <b className="project-modal-desc-title">Still interested? </b>
            Check out the project in my{" "}
            <a href={project?.repository} target="_blank">
              GitHub
            </a>
          </p>
        )}
        {project?.webUrl && (
          <p className="project-repository">
            <b className="project-modal-desc-title">Still interested? </b>
            Check out the live website{" "}
            <a href={project?.webUrl} target="_blank">
              here
            </a>
          </p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <button className="modal-btn" onClick={closeModal}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectModal;
