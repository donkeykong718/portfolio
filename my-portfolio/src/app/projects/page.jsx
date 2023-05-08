import "../globals.css";

import Project from "./Project";

const projects = [
  {
    title: "A/S/L?",
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
    title: "Frankenstory",
    thumbnail: "/projects/frankenstory_thumb.jpeg",
    description: "An 'exquisite-corpse' style collaborative storytelling game.",
    tech: ["express", "mongoDB", "react", "python", "js", "html", "css"],
    url: "N/A",
    git: "https://github.com/donkeykong718/frankenstory",
  },

  {
    title: "Moo-Cha-Cha",
    thumbnail: "/projects/moochacha-thumb.jpeg",
    description:
      "Collaborated with a UX design team to build a responsive mobile website for a fake ice cream company. Followed their specifications to the pixel.",
    tech: ["react", "js", "html", "css"],
    url: "https://moo-cha-cha.vercel.app/",
    git: "https://github.com/donkeykong718/sei-uxdi",
  },

  {
    title: "BuyU",
    thumbnail: "/projects/buyu-thumb.png",
    description:
      "Building a web application in conjunction with the AFL-CIO that will identify whether any given product is made by union labor. As part of that, assisting in the creation of a national database of union-made projects.",
    tech: ["express", "mongoDB", "js", "html", "css"],
    url: "https://buyu.vercel.app/",
    git: "https://github.com/donkeykong718/BuyU",
  },

  {
    title: "BuyPass",
    thumbnail: "",
    description:
      "Built a web application that searches Amazon&apos;s database for a user-specified product, filters results by small-businesses, then provides user with a link to those companies&apos; individual websites",
    tech: ["vanilla js", "html", "css"],
    url: "N/A",
    git: "https://github.com/donkeykong718/Buy-Pass",
  },
];

export default function projectpage() {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Project project={project} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
