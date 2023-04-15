import '../globals.css'

import Project from './Project'

const projects = [
  { title: "A/S/L?", thumbnail: "/asl_thumb.png", description: "Party like it\'s 1998 with this throwback to the heydey of AOL chatrooms. Make a screenname, make a chat, make friends! Just don't tell anyone your real A/S/L (it was a simpler time.)", tech: ['django', 'django channels', 'PostgresSQL', 'next js', 'react', 'python', 'js', 'html', 'css'], url: "https://asl-front.vercel.app/", git: "https://github.com/donkeykong718/ASL-Front" },

  { title: "Frankenstory", thumbnail: "/frankenstory-thumb.png", description: "An 'exquisite-corpse' style collaborative storytelling game.", tech: ['express', 'mongoDB', 'react', 'python', 'js', 'html', 'css'], url: "N/A", git: "https://github.com/donkeykong718/frankenstory" },

  { title: "Moo-Cha-Cha", thumbnail: "/moochacha-thumb.png", description: "Collaborated with a UX design team to build a responsive mobile website for a fake ice cream company. Followed their specifications nearly to the pixel.", tech: ['react', 'js', 'html', 'css'], url: "https://sei-uxdi-seven.vercel.app/", git: "https://github.com/donkeykong718/sei-uxdi" },

  { title: "BuyU", thumbnail: "/buyu-thumb.png", description: "Building a web application in conjunction with the AFL-CIO that will identify whether any given product is made by union labor. As part of that, assisting in the creation of a national database of union-made projects.", tech: ['express', 'mongoDB', 'js', 'html', 'css'], url: "https://buyu.vercel.app/", git: "https://github.com/donkeykong718/BuyU" },

  { title: "BuyPass", thumbnail: "", description: "Built a web application that searches Amazon’s database for a user-specified product, filters results by small-businesses, then provides user with a link to those companies’ individual websites", tech: ['vanilla js', 'html', 'css'], url: "N/A", git: "https://github.com/donkeykong718/Buy-Pass" }
]

export default function projectpage() {
  return (
    <>
      <h1>Projects</h1>
      <div className="project-gallery">
        {projects.map((project, index) => (
          <Project project={project} key={index} />))}
      </div>
    </>
  )

}