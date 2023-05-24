import Skill from "./Skill";

export default function TechStack({ tech }) {
  return (
    <>
      <li>
        {tech.map((skill, index) => (
          <Skill skill={skill} key={index} />
        ))}
      </li>
    </>
  );
}
