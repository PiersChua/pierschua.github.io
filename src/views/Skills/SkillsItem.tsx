import "./SkillsItem.css";

interface Props {
  category: string;
  skills: string[];
}
const SkillsItem = ({ category, skills }: Props) => {
  return (
    <div className="skill-item">
      <h2 className="skill-item-title">{category}</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsItem;
