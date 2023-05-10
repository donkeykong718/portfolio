import Splash from "../components/Splash";

import Section from "../components/Section";

// import Contact from "../components/Contact";
// import Projects from "../components/Projects";
// import Resume from "../components/Resume";
// import Skills from "../components/Skills";
// import Story from "../components/Story";

//  These components all have the same template:
// Contact -
//    <div id="contact" className="pt-20 w-full lg:h-screen">
//      <div className="max-w-[1240px] m-auto px-2 w-full">
//        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
//         Contact
//        </p>
//      <h2 className="py-4">Get In Touch</h2>
//          ACTUAL CONTENT
//     </div>
//  </div >

// Projects
//     <div id="projects" className="pt-20 w-full">
//     <div className="max-w-[1240px] mx-auto px-2">
//   <p className="text-xl tracking-widest uppercase text-[#5651e5]">
//     Projects
//   </p>
//   <h2 className="py-4">What I&apos;ve Built</h2>
//   </div></div >

//   Resume
//   <div id="resume" className="pt-20 w-full lg:h-full p-2">
//   <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
//     <p className="text-xl tracking-widest uppercase text-[#5651e5]">
//       Resume
//     </p>
//       <h2 className="py-4">What I&apos;ve Done</h2>

//   Skills
//     <div id="skills" className="pt-20 w-full lg:h-full p-2">
//      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
//         <p className="text-xl tracking-widest uppercase text-[#5651e5]">
//           Skills
//         </p>
//         <h2 className="py-4">What I Can Do</h2>

// Story
//         <div id="story" className="pt-20 w-full md:h-full p-2 flex items-center py-16">
//       <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
//         <div className="col-span-2">
//           <p className="uppercase text-xl tracking-widest text-[#5651e5]">
//             About
//           </p>
//           <h2 className="py-4">Who I Am</h2>

export default function Home() {
  const sections = [
    { header: "My Story", subheader: "Who I Am", navId: "story" },
    { header: "Skills", subheader: "What I've Learned", navId: "skills" },
    {
      header: "Projects",
      subheader: "What I've Built",
      navId: "projects",
    },
    { header: "Resume", subheader: "Where I've Been", navId: "resume" },
    { header: "Contact", subheader: "Where I Can Be Found", navId: "contact" },
  ];

  return (
    <>
      <Splash />
      {sections.map((section, index) => (
        <Section section={section} key={index} />
      ))}
    </>
  );
}
