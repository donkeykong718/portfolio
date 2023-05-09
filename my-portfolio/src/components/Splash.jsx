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
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Great at: systems and structures, attention to detail, putting out
            fires, stepping into leadership roles when needed, being that guy to
            whom everyone can turn when they need to know what&apos;s actually
            going on, following instructions, general competence, just sitting
            down and doing the damn thing, word games.
          </p>

          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Not so great at: selling myself, using buzzwords, allowing
            grammatical mistakes to go unremarked upon, keeping my tongue out of
            my cheek, accepting compliments, networking, basketball.
          </p>
          <ContactBox mobile="false" />
        </div>
      </div>
    </div>
  );
}
