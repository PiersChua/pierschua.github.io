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
      img.src = achievement.modalImage;
      img.onload = () => setModalImageLoaded(true);
    } else setModalImageLoaded(false);
  }, [modalVisible]);
  return (
    <div>
      <div className={`modal ${modalImageLoaded ? "modal-show" : ""}`}>
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{achievement?.title}</h5>
              <button
                type="button"
                className="btn-close"
                onClick={closeModal}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img className="modal-image" src={achievement?.modalImage} />
              <p
                dangerouslySetInnerHTML={{
                  __html: achievement?.desc || "",
                }}
              ></p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                onClick={closeModal}
                className="btn btn-secondary"
              >
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
