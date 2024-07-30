import "./AchievementsItem.css";
import Card from "react-bootstrap/Card";

interface Props {
  id: number;
  cardImage: string;
  title: string;
  desc: string;
  onSetModalVisible: (id: number) => void;
}
const AchievementsItem = ({
  id,
  cardImage,
  title,
  desc,
  onSetModalVisible,
}: Props) => {
  return (
    <Card className="achievement-card">
      <a
        className="card-image-container"
        title="View Details"
        onClick={() => onSetModalVisible(id)}
      >
        <img src={cardImage} className="card-img-top" alt="..." />
        <span className="bi bi-box-arrow-up-right"></span>
      </a>
      <Card.Body>
        <h5 className="card-title">{title}</h5>
        <p className="card-text" dangerouslySetInnerHTML={{ __html: desc }}></p>
      </Card.Body>
      <Card.Footer>
        <button className="card-btn" onClick={() => onSetModalVisible(id)}>
          View Details
        </button>
      </Card.Footer>
    </Card>
  );
};

export default AchievementsItem;
