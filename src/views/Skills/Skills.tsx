import "./Skills.css";
import SkillsItem from "./SkillsItem";
import { skills } from "../../data/skills";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h1 className="title">My skills</h1>
      <div className="skills-container">
        {skills.map((skill) => (
          <SkillsItem key={skill.id} skill={skill}></SkillsItem>
        ))}
      </div>
    </div>
  );
};

export default Skills;
