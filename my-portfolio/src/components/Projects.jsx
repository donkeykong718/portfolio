// import "../globals.css";

import Project from "./Project";

const projects = [
  {
    title: "A/S/L?",
    route: "asl",
    thumbnail: "/projects/asl_thumb.png",
    description:
      "Party like it's 1998 with this throwback to the heydey of AOL chatrooms. Make a screenname, make a chat, make friends! Just don't tell anyone your real A/S/L (it was a simpler time.)",
    tech: [
      "django",
      "django channels",
      "PostgresSQL",
      "next js",
      "react",
      "python",
      "js",
      "html",
      "css",
    ],
    url: "https://asl-front.vercel.app/",
    git: "https://github.com/donkeykong718/ASL-Front",
  },

  {
    title: "BuyPass",
    route: "buypass",
    thumbnail: "",
    description:
      "Built a web application that searches Amazon&apos;s database for a user-specified product, filters results by small-businesses, then provides user with a link to those companies&apos; individual websites",
    tech: ["next js", "react", "tailwind", "html", "css"],
    url: "https://buy-pass.vercel.app/",
    git: "https://github.com/donkeykong718/Buy-Pass",
  },
  {
    title: "BuyU",
    route: "buyu",
    thumbnail: "/projects/buyu-thumb.png",
    description:
      "Building a web application in conjunction with the AFL-CIO that will identify whether any given product is made by union labor. As part of that, assisting in the creation of a national database of union-made projects.",
    tech: ["express", "mongoDB", "js", "html", "css"],
    url: "https://buyu.vercel.app/",
    git: "https://github.com/donkeykong718/BuyU",
  },
  {
    title: "Moo-Cha-Cha",
    route: "moo-cha-cha",
    thumbnail: "/projects/MooChaCha-thumb.jpeg",
    description:
      "Collaborated with a UX design team to build a responsive mobile website for a fake ice cream company. Followed their specifications to the pixel.",
    tech: ["react", "js", "html", "css"],
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
