import "./ExperienceItem.css";
import AOS from "aos";
import Card from "react-bootstrap/Card";
import { Experience } from "../../types/experience";
import { useEffect, useState } from "react";

interface Props {
  experience: Experience;
}
const ExperienceItem = ({ experience }: Props) => {
  const [fadeRight, setFadeRight] = useState("");
  const [fadeLeft, setFadeLeft] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 800,
      anchorPlacement: "top-bottom",
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1023) {
        setFadeRight("fade"); // No animation for smaller screens
        setFadeLeft("fade");
      } else {
        setFadeRight("fade-right"); // Animation for larger screens
        setFadeLeft("fade-left");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={`timeline ${experience.id % 2 == 0 ? "left" : "right"}`}>
      <img
        src={experience.timelineImage}
        alt="Timeline circle"
        className="timeline-img"
      />
      <Card
        data-aos={experience.id % 2 == 0 ? fadeRight : fadeLeft}
        className="timeline-card"
      >
        <Card.Body className="p-4">
          <h3>
            {experience.title}
            <img src={experience.titleImage} />
          </h3>
          <p className="mb-0">{experience.desc}</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ExperienceItem;
