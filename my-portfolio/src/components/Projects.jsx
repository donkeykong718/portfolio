// import "../globals.css";

import Project from "./Project";

const projects = [
  {
    title: "BuyPass",
    route: "buypass",
    projectType: "React App",
    thumbnail: "/projects/buypass_thumb.png",
    description:
      "Bypass the middle-man by searching Amazon's database, filtering results for small businesses, then get redirected straight to your chosen company's home page.",
    tech: ["Next.js", "React", "Tailwind", "HTML", "CSS"],
    url: "https://buy-pass.vercel.app/",
    git: "https://github.com/donkeykong718/BuyPass",
  },
  {
    title: "BuyU",
    thumbnail: "/projects/buyu-thumb.png",
    projectType: "MERN-Stack",
    description:
      "Built in conjunction with the AFL-CIO as part of a larger project helping to identify whether any given product is made by union labor. This prototype database has full CRUD functionality, a functional front-end, and utilizes a barcode scanner to automatically pre-fill product information.",
    tech: ["Express.js", "MongoDB", "JavaScript", "HTML", "CSS"],
    url: "https://buyu.vercel.app/",
    git: "https://github.com/donkeykong718/BuyU",
  },
  {
    title: "A/S/L?",
    thumbnail: "/projects/asl_thumb.png",
    projectType: "Full-Stack Application",
    description:
      "Party like it's 1998 with this throwback to the heydey of AOL chatrooms. Make a screenname, make a chatroom, make friends! Just don't tell anyone your real A/S/L (it was a simpler time.) Utilizes Django Channels and websockets to implement full, real-time messaging functionality",
    tech: [
      "Django",
      "PostgreSQL",
      "Next.js",
      "React",
      "Python",
      "JavaScript",
      "HTML",
      "CSS",
      "Notion",
    ],
    // url: "https://asl-front.vercel.app/",
    git: "https://github.com/donkeykong718/ASL-Front",
  },
  {
    title: "Moo-Cha-Cha",
    projectType: "Mobile App",
    thumbnail: "/projects/MooChaCha-thumb.jpeg",
    description: `Collaboration with a UX design team to build a responsive mobile website for a fake ice cream company. Follows their specifications to the pixel. 
    (Please note that links within the app are for show only)`,
    tech: ["React", "HTML", "CSS", "Notion", "Figma"],
    url: "https://moo-cha-cha.vercel.app/",
    git: "https://github.com/donkeykong718/sei-uxdi",
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
