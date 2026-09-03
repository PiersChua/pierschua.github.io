import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <h2 className="title">About me</h2>
      <div className="about-container" data-aos="custom-fade-up">
        <div className="about-desc desc">
          <p>
            With a passion for leveraging technology to solve complex
            challenges, I possess a solid foundation in multiple programming
            languages, coupled with a strong aptitude for problem-solving and
            critical thinking
          </p>
          <br />
          <p>
            Today, I am a proud graduate with a Diploma in
            <span className="about-desc-highlight">
              {" "}
              Computer Engineering with Merit
            </span>{" "}
            from Temasek Polytechnic
          </p>
        </div>
        <img
          className="about-logo"
          src="./ABOUT.jpg"
          alt="Portrait of Piers Chua"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default About;
