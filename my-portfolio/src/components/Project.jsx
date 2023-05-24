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

    <div className="relative flex items-center justify-center h-auto w-screen shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] md:w-[45vw]">
      {/* Background/project image */}

      <Image
        className="relativerounded-xl group-hover:opacity-10 w-[100] h-auto"
        src={thumbnail}
        width={1000}
        height={800}
        alt="thumbnail"
      />

      {/* hidden text block */}

      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-h-100">
        <h3 className="text-xl text-white tracking-wider text-center py-2">
          {title} | <span className="text-[.75em]">{projectType}</span>
        </h3>
        {/* <h3 className="pt-1 pb-2 text-white text-center">{projectType}</h3> */}
        <p className="text-white text-left text-sm px-2 mb-2">{description}</p>

        <div className="flex center-items justify-center">
          <Link href={url} target="_blank">
            <button className="px-4 py-1 mt-2 mr-4">Demo</button>
          </Link>
          <Link href={git} target="_blank">
            <button className="px-4 py-1 mt-2">Code</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-1 text-white">
              Technologies
            </p>
            <div className="grid grid-cols-3">
              {tech.map((skill, index) => (
                <TechStack skill={skill} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
