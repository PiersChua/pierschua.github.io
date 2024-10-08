import { Achievement } from "../../types/achievement";
import "./AchievementModal.css";
import { Modal } from "react-bootstrap";

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
  achievement: Achievement | null;
}

const AchievementModal = ({ modalVisible, closeModal, achievement }: Props) => {
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
        <Modal.Title>{achievement?.title}</Modal.Title>
        <span className="btn-close" onClick={closeModal}></span>
      </Modal.Header>
      <Modal.Body className="achievement-modal-body">
        <div className="modal-image-container">
          {achievement?.modalImage.map((image) => (
            <img className="modal-image" key={image} src={image} />
          ))}
        </div>
        <p
          dangerouslySetInnerHTML={{
            __html: achievement?.desc || "",
          }}
        ></p>
      </Modal.Body>
      <Modal.Footer>
        <button className="modal-btn" onClick={closeModal}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default AchievementModal;
