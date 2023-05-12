import Image from "next/image";
import React from "react";
import Skill from "./Skill";
import data from "../skills.json" assert { type: "json" };

export default function Skills() {
  const skillset = data.map((item) => {
    const skill = {};
    skill.name = item.name;
    skill.logo = item.logo;
    return skill;
  });

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {skillset.map((skill, index) => (
        <Skill skill={skill} key={index} />
      ))}
    </div>
  );
}
