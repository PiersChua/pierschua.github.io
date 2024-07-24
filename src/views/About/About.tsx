import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <h1 className="title">About me</h1>
      <div className="about-container">
        <div className="about-desc desc">
          <p>
            With a passion for leveraging technology to solve complex
            challenges, I possess a solid foundation in multiple programming
            languages, coupled with a strong aptitude for problem-solving and
            critical thinking
          </p>
          <br />
          <p>
            Currently, I am a final year student pursuing a Diploma in
            <span className="about-desc-highlight">
              {" "}
              Computer Engineering
            </span>{" "}
            at Temasek Polytechnic
          </p>
        </div>
        <img className="about-logo" src="./ABOUT.jpeg" />
      </div>
    </div>
  );
};

export default About;
