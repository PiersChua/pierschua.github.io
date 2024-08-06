import "./ProjectModal.css";
import Carousel from "react-bootstrap/Carousel";
import { Modal } from "react-bootstrap";
import { Project } from "../../types/project";

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
  project: Project | null;
}

const ProjectModal = ({ modalVisible, closeModal, project }: Props) => {
  return (
    <Modal
      show={modalVisible}
      onHide={closeModal}
      backdrop="static"
      keyboard={false}
      size="lg"
      centered
      scrollable={false}
    >
      <Modal.Header>
        <Modal.Title>{project?.title}</Modal.Title>
        <span className="btn-close" onClick={closeModal}></span>
      </Modal.Header>
      <Carousel fade interval={null}>
        {project?.modalImages.map((image) => (
          <Carousel.Item className="project-modal-carousel-item">
            <img src={image} loading="lazy" />
          </Carousel.Item>
        ))}
      </Carousel>
      <Modal.Body>
        <ul>
          {project?.modalDesc.map((desc) => (
            <li>{desc}</li>
          ))}
        </ul>
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
