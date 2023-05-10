"use client";

import Image from "next/image";
import Link from "next/link";
import TechStack from "./TechStack";
import React, { useState } from "react";

// export const ProjectContext = React.createContext();

export default function Project({ project }) {
  const { title, route, thumbnail, description, tech, url, git } = project;

  // const [selection, setSelection] = useState(project);

  return (
    <div className="relative flex items-center justify-center h-auto w-screen shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] md:w-[45vw]">
      <Image
        className="relativerounded-xl group-hover:opacity-10 w-[100] h-auto"
        src={thumbnail}
        width={1000}
        height={800}
        alt="thumbnail"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">
          PROP: type of project ex. &ldquo;react js&rdquo;
        </p>
        <Link href={`/projects//${route}`}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
}
