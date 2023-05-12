import { RiRadioButtonFill } from "react-icons/ri";
import data from "../skills.json" assert { type: "json" };
import Image from "next/image";

export default function TechStack({ skill, index }) {
  const skillset = data.map((item) => {
    const skill = {};
    skill.name = item.name.toLowerCase();
    skill.logo = item.logo;
    return skill;
  });

  let skillObj = skillset.find((s) => s.name === skill.toLowerCase());

  return (
    <p className="text-gray-600 flex items-center">
      {skillObj ? (
        <Image
          className="pr-1"
          src={skillObj.logo}
          width="16"
          height="16"
          alt="logo"
        />
      ) : (
        <RiRadioButtonFill className="pr-1" />
      )}
      {skill}
    </p>
  );
}
