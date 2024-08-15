import "./AchievementsItem.css";
import Card from "react-bootstrap/Card";
import { Achievement } from "../../types/achievement";

interface Props {
  achievement: Achievement;
  onSetModalVisible: (id: number) => void;
}
const AchievementsItem = ({ achievement, onSetModalVisible }: Props) => {
  return (
    <div data-aos-duration="400" data-aos="custom-fade-up">
      <Card className="achievement-card">
        <a
          className="card-image-container"
          title="View Achievement"
          onClick={() => onSetModalVisible(achievement.id)}
        >
          <img src={achievement.cardImage} className="card-img-top" alt="..." />
          <span className="bi bi-box-arrow-up-right"></span>
        </a>
        <Card.Body>
          <h5 className="card-title">{achievement.title}</h5>
          <p
            className="card-text"
            dangerouslySetInnerHTML={{ __html: achievement.desc }}
          ></p>
        </Card.Body>
        <Card.Footer>
          <button
            className="card-btn"
            onClick={() => onSetModalVisible(achievement.id)}
          >
            View Award
          </button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default AchievementsItem;
