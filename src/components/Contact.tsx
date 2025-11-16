import "./Contact.css";

interface Props {
  isSmallDisplay?: boolean;
}
const Contact = ({ isSmallDisplay = false }: Props) => {
  return (
    <div className={`contact-links ${isSmallDisplay ? "small" : ""}`}>
      <a
        href="https://www.linkedin.com/in/piers-chua/"
        target="_blank"
        title="LinkedIn"
      >
        <span className="bi bi-linkedin"></span>
      </a>
      <a href="mailto:pierschua@gmail.com" target="_blank" title="Email">
        <span className="bi bi-envelope-fill"></span>
      </a>
      <a href="./CHUAZHENGLONGPIERS_Resume.pdf" target="_blank" title="Resume">
        <span className="bi bi-file-earmark-person-fill"></span>
      </a>
    </div>
  );
};

export default Contact;
