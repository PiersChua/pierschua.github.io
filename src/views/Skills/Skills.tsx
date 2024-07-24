import "./Skills.css";
import SkillsItem from "./SkillsItem";
import { skills } from "../../data/skills";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h1 className="title">My skills</h1>
      <div className="skills-container">
        {/* Object.entries returns something like this ["SOFT SKILLS", ["Problem Solving", "Team Collaboration","Self Directed"]] */}
        {Object.entries(skills).map(([category, skills]) => (
          <SkillsItem
            key={category}
            category={category}
            skills={skills}
          ></SkillsItem>
        ))}
      </div>
    </div>
  );
};

export default Skills;
