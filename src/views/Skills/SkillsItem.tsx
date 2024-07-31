import "./SkillsItem.css";
import { Skill } from "../../types/skill";

interface Props {
  skill: Skill;
}
const SkillsItem = ({ skill }: Props) => {
  return (
    <div className="skill-item">
      <h2 className="skill-item-title">{skill.title}</h2>
      <ul>
        {skill.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsItem;
