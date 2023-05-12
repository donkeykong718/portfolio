// import "../globals.css";

import Project from "./Project";

const projects = [
  {
    title: "A/S/L?",
    thumbnail: "/projects/asl_thumb.png",
    projectType: "Full-Stack Application",
    description:
      "Party like it's 1998 with this throwback to the heydey of AOL chatrooms. Make a screenname, make a chatroom, make friends! Just don't tell anyone your real A/S/L (it was a simpler time.)",
    tech: [
      "Django",
      "Django Channels",
      "Postgre SQL",
      "Next JS",
      "React",
      "Python",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    url: "https://asl-front.vercel.app/",
    git: "https://github.com/donkeykong718/ASL-Front",
  },

  {
    title: "Frankenstory",
    thumbnail: "/projects/frankenstory_thumb.jpeg",
    projectType: "Full-Stack Application",
    description: "An 'exquisite-corpse' style collaborative storytelling game.",
    tech: [
      "Express JS",
      "Mongo DB",
      "React",
      "Python",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    url: "N/A",
    git: "https://github.com/donkeykong718/frankenstory",
  },

  {
    title: "Moo-Cha-Cha",
    thumbnail: "/projects/moochacha-thumb.jpeg",
    projectType: "Mobile App UI",
    description:
      "Collaborated with a UX design team to build a responsive mobile website for a fake ice cream company. Followed their specifications to the pixel.",
    tech: ["React", "JavaScript", "HTML", "CSS"],
    url: "https://moo-cha-cha.vercel.app/",
    git: "https://github.com/donkeykong718/sei-uxdi",
  },

  {
    title: "BuyU",
    thumbnail: "/projects/buyu-thumb.png",
    projectType: "MERN-Stack Application",
    description:
      "Building a web application in conjunction with the AFL-CIO that will identify whether any given product is made by union labor. As part of that, assisting in the creation of a national database of union-made projects.",
    tech: ["Express JS", "Mongo DB", "JavaScript", "HTML", "CSS"],
    url: "https://buyu.vercel.app/",
    git: "https://github.com/donkeykong718/BuyU",
  },

  {
    title: "BuyPass",
    route: "buypass",
    thumbnail: "",
    projectType: "Responsive Webpage",
    description:
      "Built a web application that searches Amazon's database for a user-specified product, filters results by small-businesses, then provides user with a link to those companies&apos; individual websites",
    tech: ["JavaScript", "HTML", "CSS"],
    url: "N/A",
    git: "https://github.com/donkeykong718/Buy-Pass",
  },
];

export default function Projects() {
  return (
    <div className="grid max-w-screen md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <Project project={project} key={index} />
      ))}
    </div>
  );
}
