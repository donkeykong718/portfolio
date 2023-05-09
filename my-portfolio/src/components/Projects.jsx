// import "../globals.css";

import Project from "./Project";

const projects = [
  {
    title: "A/S/L?",
    route: "asl",
    thumbnail: "/projects/asl_thumb.png",
    description:
      "Party like it&apos;s 1998 with this throwback to the heydey of AOL chatrooms. Make a screenname, make a chat, make friends! Just don't tell anyone your real A/S/L (it was a simpler time.)",
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
    route: "frankenstory",
    thumbnail: "/projects/frankenstory_thumb.jpeg",
    description:
      "An &lsquo;exquisite-corpse&rsquo; style collaborative storytelling game.",
    tech: ["express", "mongoDB", "react", "python", "js", "html", "css"],
    url: "N/A",
    git: "https://github.com/donkeykong718/frankenstory",
  },

  {
    title: "Moo-Cha-Cha",
    route: "moo-cha-cha",
    thumbnail: "/projects/moochacha-thumb.jpeg",
    description:
      "Collaborated with a UX design team to build a responsive mobile website for a fake ice cream company. Followed their specifications to the pixel.",
    tech: ["react", "js", "html", "css"],
    url: "https://moo-cha-cha.vercel.app/",
    git: "https://github.com/donkeykong718/sei-uxdi",
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
    title: "BuyPass",
    route: "buypass",
    thumbnail: "",
    description:
      "Built a web application that searches Amazon&apos;s database for a user-specified product, filters results by small-businesses, then provides user with a link to those companies&apos; individual websites",
    tech: ["vanilla js", "html", "css"],
    url: "N/A",
    git: "https://github.com/donkeykong718/Buy-Pass",
  },
];

export default function Projects() {
  return (
    <div id="projects" className="pt-20 w-full">
      <div className="max-w-[1240px] mx-auto px-2">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Project project={project} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}