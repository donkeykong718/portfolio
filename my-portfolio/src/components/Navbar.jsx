"use client";

import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { usePathname } from "next/navigation";

import ContactBox from "./ContactBox";
import MenuLink from "./MenuLink";
import HomeLink from "./HomeLink";

export const NavContext = React.createContext();

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const pathname = usePathname();

  const links = [
    { display: "Home", navId: "#splash" },
    { display: "My Story", navId: "#story" },
    { display: "Skills", navId: "#skills" },
    { display: "Projects", navId: "#projects" },
    { display: "Resume", navId: "#resume" },
    { display: "Contact", navId: "#contact" },
  ];

  useEffect(() => {
    // console.log(pathname.substring(0, 9));
    if (pathname.substring(0, 9) === "/projects") {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [pathname]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <NavContext.Provider value={{ nav, setNav }}>
      <div
        style={{ backgroundColor: `${navBg}` }}
        className={
          shadow
            ? "fixed w-full h-20 shadow-xl z-[100]"
            : "fixed w-full h-20 z-[100]"
        }
      >
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
          <HomeLink />
          <div>
            <ul
              style={{ color: `${linkColor}` }}
              className="hidden md:flex text-sm uppercase"
            >
              {links.map((link, index) => (
                <MenuLink link={link} key={index} mobile={nav} />
              ))}
            </ul>

            <div onClick={handleNav} className="md:hidden">
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>

        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 bottom-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 ease-in duration-500"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <HomeLink />
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className="border-b border-gray-300 my-4">
                <p className="w-[85%] md:w-[90%] py-4">
                  Let&apos;s build something legendary together.
                </p>
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                {links.map((link, index) => (
                  <MenuLink link={link} key={index} mobile={nav} />
                ))}
              </ul>
              <div className="pt-4">
                <p className="uppercase tracking-widest text-[#5651e5]">
                  Let&apos;s Connect
                </p>
                <ContactBox mobile="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavContext.Provider>
  );
}
