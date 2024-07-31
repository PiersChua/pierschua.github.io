import "./Experience.css";
import ExperienceItem from "./ExperienceItem";
import { experiences } from "../../data/experiences";

const Experience = () => {
  const sortedExperiences = experiences.sort((a, b) => {
    return b.id - a.id;
  });
  return (
    <div className="experience" id="experience">
      <h1 className="title">My experience</h1>
      <div className="experience-container py-5">
        <div className="main-timeline">
          {sortedExperiences.map((experience) => (
            <ExperienceItem
              key={experience.id}
              experience={experience}
            ></ExperienceItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
