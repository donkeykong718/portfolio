import Splash from "../components/Splash";
import Section from "../components/Section";

export default function Home() {
  const sections = [
    { header: "My Story", subheader: "Who I Am", navId: "story" },
    { header: "Skills", subheader: "What I've Learned", navId: "skills" },
    {
      header: "Projects",
      subheader: "What I've Built",
      navId: "projects",
    },
    { header: "Resume", subheader: "Where I've Worked", navId: "resume" },
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
