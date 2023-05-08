import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from './page.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <header style={{ textAlign: 'center' }}>
        <h1>David Koll</h1>
        <h2>Software Engineer</h2>
        <Image src={'/assets/NYBG Headshot.jpg'}
          width={4032}
          height={3024}
          alt="headshot" style={{ height: '400px', width: 'auto' }} />
      </header>
      <h3>About Me</h3>
      <p>Great at: systems and structures, attention to detail, putting out fires, stepping into leadership roles when needed, being that guy to whom everyone can turn when they need to know what’s actually going on, following instructions, general competence, just sitting down and doing the damn thing, word games.</p>

      <p>Not so great at: selling myself, using buzzwords, allowing grammatical mistakes to go unremarked upon, keeping my tongue out of my cheek, accepting compliments, networking, basketball.</p>

      <h4>SKILLS</h4>
      <p>Tech Stack: Python, Django, Flask, Express.js, React, Next.js, PostgreSQL, MongoDB, Mongoose, Node.js, JavaScript, HTML, CSS </p>
      <p>Film Industry Software: Final Draft, Final Cut, Scenechronize, Movie Magic, Prodigal (Netflix)</p>
    </main >
  )
}
