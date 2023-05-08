import Image from "next/image";
import "./globals.css";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Skills from "../components/Skills";
import Splash from "../components/Splash";
import Story from "../components/Story";

export const metadata = {
  title: "David Koll | Full-stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Image src='/assets/construction.jpg'
          width={678}
          height={370}
          alt="under construction"
          style={{ width: '100vw', height: 'auto', maxHeight: '250px', display: 'flex' }}
        /> */}

        <Navbar />
        <Splash />
        <Story />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </body>
    </html>
  );
}
