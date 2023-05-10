import React from "react";

import Contact from "./Contact";
import Projects from "./Projects";
import Resume from "./Resume";
import Skills from "./Skills";
import Story from "./Story";

export default function Section({ section }) {
  const { header, subheader, navId } = section;

  let activeSection;
  let d1Class;
  let d2Class;

  switch (navId) {
    case "contact":
      activeSection = <Contact />;
      d1Class = "pt-20 w-full lg:h-screen";
      d2Class = "max-w-[1240px] m-auto px-2 w-full";
      break;
    case "projects":
      activeSection = <Projects />;
      d1Class = "pt-20 w-full";
      d2Class = "max-w-[1240px] mx-auto px-2";
      break;
    case "resume":
      activeSection = <Resume />;
      d1Class = "pt-20 w-full lg:h-full p-2";
      d2Class = "max-w-[1240px] mx-auto flex flex-col justify-center h-full";
      break;
    case "skills":
      activeSection = <Skills />;
      d1Class = "pt-20 w-full lg:h-full p-2";
      d2Class = "max-w-[1240px] mx-auto flex flex-col justify-center h-full";
      break;
    case "story":
      activeSection = <Story />;
      d1Class = "pt-20 w-full md:h-full p-2 flex items-center py-16";
      d2Class = "max-w-[1240px] m-auto md:grid grid-cols-3 gap-8";
      break;
    default:
  }

  return (
    <>
      {navId === "story" ? (
        <div id={navId} className={d1Class}>
          <div className={d2Class}>
            <div className="col-span-2">
              <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                {header}
              </p>
              <h2 className="py-4">{subheader}</h2>
              {activeSection}
            </div>
          </div>
        </div>
      ) : (
        <div id={navId} className={d1Class}>
          <div className={d2Class}>
            <p className="text-xl tracking-widest uppercase text-[#5651e5]">
              {header}
            </p>
            <h2 className="py-4">{subheader}</h2>
            {activeSection}
          </div>
        </div>
      )}
    </>
  );
}
