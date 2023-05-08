import Image from "next/image";

import { AiOutlineMail } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Skills from "../components/Skills";
import Splash from "../components/Splash";
import Story from "../components/Story";

// import { Inter } from 'next/font/google'
// import styles from './page.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Splash />
      <Story />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </>
  );
}
