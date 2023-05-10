import Image from "next/image";
import React from "react";
import Skill from "./Skill";

export default function Skills() {
  const skillset = [
    { name: "CSS", logo: "/skills/css.png" },
    { name: "Django", logo: "/skills/django.png" },
    { name: "Express JS", logo: "/skills/expressjs.png" },
    { name: "Flask", logo: "/skills/flask.png" },
    { name: "Github", logo: "/skills/github.png" },
    { name: "HTML", logo: "/skills/html.png" },
    { name: "JavaScript", logo: "/skills/js.png" },
    { name: "Mongo dB", logo: "/skills/mongo.png" },
    { name: "Next JS", logo: "/skills/nextjs.png" },
    { name: "Node JS", logo: "/skills/node.png" },
    { name: "Postgre SQL", logo: "/skills/postgresql.png" },
    { name: "Python", logo: "/skills/python.png" },
    { name: "React", logo: "/skills/react.png" },
    { name: "Tailwind", logo: "/skills/tailwind.png" },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {skillset.map((skill, index) => (
        <Skill skill={skill} key={index} />
      ))}
    </div>
  );
}
