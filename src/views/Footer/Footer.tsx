import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-divider" />
      <div className="footer-container">
        {/* Left: Branding */}
        <div className="footer-brand">
          <img className="footer-logo" src="./LOGO.svg" alt="Piers Chua" />
          <p className="footer-tagline">
            Computer Engineering Graduate · Incoming NTU Nanyang Global Scholar
          </p>
        </div>

        {/* Middle: Navigation */}
        <nav className="footer-nav">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#achievements">Achievements</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </nav>

        {/* Right: Contact */}
        <div className="footer-contact">
          <h4>Connect</h4>
          <ul>
            <li>
              <span className="bi bi-telephone-fill" />
              <a href="tel:+6587279695">+65 87279695</a>
            </li>
            <li>
              <span className="bi bi-envelope-fill" />

              <a href="mailto:pierschua@gmail.com">pierschua@gmail.com</a>
            </li>
            <li>
              <span className="bi bi-file-earmark-person-fill" />

              <a
                href="./CHUAZHENGLONGPIERS_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
            <li>
              <span className="bi bi-linkedin" />

              <a
                href="https://www.linkedin.com/in/piers-chua/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <span className="bi bi-github" />

              <a
                href="https://github.com/PiersChua"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2025 Piers Chua. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
