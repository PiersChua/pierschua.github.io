import "./AchievementsItem.css";

interface Props {
  id: number;
  cardImage: string;
  title: string;
  desc: string;
  modalVisible: boolean;
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
    <div>
      <div className="card h-100">
        <a className="card-image-container" title="View Details">
          <img
            src={cardImage}
            className="card-img-top"
            onClick={() => onSetModalVisible(id)}
            alt="..."
          />
          <span className="bi bi-box-arrow-up-right"></span>
        </a>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p
            className="card-text"
            dangerouslySetInnerHTML={{ __html: desc }}
          ></p>
        </div>
        <div className="card-footer text-end w-100">
          <button className="btn btn-secondary">View</button>
        </div>
      </div>
    </div>
  );
};

export default AchievementsItem;
