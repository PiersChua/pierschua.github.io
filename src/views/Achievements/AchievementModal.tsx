import { Achievement } from "../../types/achievement";
import "./AchievementModal.css";
import { useEffect, useState } from "react";

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
  achievement: Achievement | null;
}

const AchievementModal = ({ modalVisible, closeModal, achievement }: Props) => {
  const [modalImageLoaded, setModalImageLoaded] = useState(false);

  // fix text appearing before image - ensures image is loaded first
  useEffect(() => {
    if (modalVisible && achievement) {
      const img = new Image();
      img.src = achievement.modalImage[0];
      img.onload = () => setModalImageLoaded(true);
    } else setModalImageLoaded(false);
  }, [modalVisible]);
  return (
    <div>
      <div className={`modal ${modalImageLoaded ? "modal-show" : ""}`}>
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{achievement?.title}</h5>
              <span
                className="btn-close"
                onClick={closeModal}
                aria-label="Close"
              ></span>
            </div>
            <div className="modal-body">
              <div className="modal-image-container">
                {achievement?.modalImage.map((image) => (
                  <img className="modal-image" src={image} />
                ))}
              </div>
              <p
                dangerouslySetInnerHTML={{
                  __html: achievement?.desc || "",
                }}
              ></p>
            </div>
            <div className="modal-footer">
              <button type="button" onClick={closeModal} className="modal-btn">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementModal;
