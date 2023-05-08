import Image from "next/image";

import { AiOutlineMail } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";

// import { Inter } from 'next/font/google'
// import styles from './page.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET&apos;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m <span className="text={#5651e5}">David Koll</span>
          </h1>
          <h1 className="py-4 text-gray-700">Full-stack Developer</h1>
          <p className="py-4 text-gray-600 max-w-{70%} m-auto">
            Great at: systems and structures, attention to detail, putting out
            fires, stepping into leadership roles when needed, being that guy to
            whom everyone can turn when they need to know what&apos;s actually
            going on, following instructions, general competence, just sitting
            down and doing the damn thing, word games.
          </p>

          <p className="py-4 text-gray-600 max-w-{70%} m-auto">
            Not so great at: selling myself, using buzzwords, allowing
            grammatical mistakes to go unremarked upon, keeping my tongue out of
            my cheek, accepting compliments, networking, basketball.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedin />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsPersonLinesFill />
            </div>
          </div>
          {/* <main> 
      <header style={{ textAlign: 'center' }}>
        <h1>David Koll</h1>
        <h2>Software Engineer</h2>
        <Image src={'/assets/NYBG Headshot.jpg'}
          width={4032}
          height={3024}
          alt="headshot" style={{ height: '400px', width: 'auto' }} />
      </header>
      <h3>About Me</h3>
      <p>Great at: systems and structures, attention to detail, putting out fires, stepping into leadership roles when needed, being that guy to whom everyone can turn when they need to know what&apos;s actually going on, following instructions, general competence, just sitting down and doing the damn thing, word games.</p>

      <p>Not so great at: selling myself, using buzzwords, allowing grammatical mistakes to go unremarked upon, keeping my tongue out of my cheek, accepting compliments, networking, basketball.</p>

      <h4>SKILLS</h4>
      <p>Tech Stack: Python, Django, Flask, Express.js, React, Next.js, PostgreSQL, MongoDB, Mongoose, Node.js, JavaScript, HTML, CSS </p>
      <p>Film Industry Software: Final Draft, Final Cut, Scenechronize, Movie Magic, Prodigal (Netflix)</p>
    </main > */}
        </div>
      </div>
    </div>
  );
}
