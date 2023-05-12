import Image from "next/image";
import Link from "next/link";

import { AiOutlineMail } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ContactBox from "./ContactBox";

export default function Splash() {
  return (
    <div id="splash" className="pt-20 w-full h-full text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET&apos;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m <span className="text-[#5651e5]">David Koll</span>
          </h1>
          <div className="flex justify-center items-center">
            <Image
              src={"/assets/NYBG Headshot.jpg"}
              width={4032}
              height={3024}
              alt="headshot"
              style={{ height: "200px", width: "auto" }}
            />
          </div>
          <h1 className="py-2 text-gray-700">A Full-stack Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] text-left m-auto">
            I am a versatile professional with a passion for software
            engineering. I recently completed a Software Engineering Fellowship
            at General Assembly, where I developed skills in front-end and
            back-end web development, full-stack development, JavaScript, and
            React.js.<br></br>
            <br></br> Prior to that, I spent several years working in the film
            and television industry, where I often collaborated with tech
            departments to create and improve large-scale systems. I had the
            pleasure of creating Marvel's first secure script distribution
            system, working closely with Netflix to improve their in-house
            production software, and automating the COVID testing protocols on
            "Inventing Anna." <br></br>
            <br></br>I am excited to bring my unique combination of software
            engineering and production experience to new projects and
            challenges.
          </p>
          <ContactBox mobile="false" />
        </div>
      </div>
    </div>
  );
}
