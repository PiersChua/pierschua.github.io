interface ButtonProps {
  onClick: () => void;
  isMore?: boolean;
}
const ShowMoreButton = ({ onClick, isMore }: ButtonProps) => {
  return (
    <button className="show-more-btn" onClick={onClick}>
      {isMore ? "Show less" : "Show more"}
    </button>
  );
};

export default ShowMoreButton;
