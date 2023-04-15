import Image from 'next/image'
import Link from 'next/link'
import TechStack from './TechStack'

export default function Project({ project }) {

  const { title, thumbnail, description, tech, url, git } = project

  return (
    <div className="project-box">
      <h1>{title}</h1>
      <Image src={thumbnail}
        width={200}
        height={100}
        alt="thumbnail" />
      <div>{description}</div>
      <div>Tech stack:
        {tech.map((tech, index) => (
          <TechStack tech={tech} key={index} />))}
      </div>
      <p>Deployed: <Link href={url}>{url}</Link></p>
      <p>Github: <Link href={git}>{git}</Link></p>
    </div>)
}