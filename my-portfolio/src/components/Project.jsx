"use client";

import Image from "next/image";
import Link from "next/link";
import TechStack from "./TechStack";
import React, { useState } from "react";
import { RiRadioButtonFill } from "react-icons/ri";

// export const ProjectContext = React.createContext();

export default function Project({ project }) {
  const { title, thumbnail, projectType, description, tech, url, git } =
    project;

  // const [selection, setSelection] = useState(project);

  return (
    // outside container

    <div className="relative flex items-center justify-center min-h-fit h-[50vh] w-screen shadow-xl shadow-gray-400 rounded-xl p-4 group md:w-[45vw]">
      {/* Background/project image */}

      <Image
        className="relative rounded-xl group-hover:opacity-10 w-auto max-h-[50vh]"
        src={thumbnail}
        width={1000}
        height={800}
        alt="thumbnail"
      />

      {/* hidden text block */}

      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-fit min-h-[100%] p-3 bg-gradient-to-r from-[#0c0b2a] to-[#3055a5] bg-transparent rounded-xl">
        <h3 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 tracking-wider text-center py-2">
          {title} | <span className="text-[.75em]">{projectType}</span>
        </h3>
        {/* <h3 className="pt-1 pb-2 text-white text-center">{projectType}</h3> */}
        <p className="text-white text-left text-sm px-2 mb-2">{description}</p>
        <div className="col-span-4 md:col-span-1  p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-1 text-amber-300">
              Technologies
            </p>
            <ul className="flex flex-wrap justify-evenly">
              {tech.map((skill, index) => (
                <TechStack skill={skill} key={index} />
              ))}
            </ul>
          </div>
        </div>
        <div className="flex center-items justify-center bottom-0">
          {url && (
            <>
              <Link href={url} target="_blank">
                <button className="px-4 py-1 mt-2 mr-4 shadow-md shadow-amber-400 bg-gradient-to-r from-[#0c0b2a] to-[#314571]">
                  Demo
                </button>
              </Link>
              <p className="inline text-white text-3xl bold mr-3 translate-y-1">
                |
              </p>{" "}
            </>
          )}
          <Link href={git} target="_blank">
            <button className="px-4 py-1 mt-2 shadow-md shadow-amber-400 bg-gradient-to-r from-[#0c0b2a] to-[#314571]">
              Code
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
