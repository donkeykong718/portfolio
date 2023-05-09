import React, { useContext } from "react";
import Link from "next/link";
import { NavContext } from "./Navbar";

export default function Menu({ mobile, link }) {
  const mobileLink = "py-4";
  const deskLink = "pl-10 hover:border-b";

  const { display, navId } = link;

  const { nav, setNav } = useContext(NavContext);

  console.log(link);
  console.log(mobile);

  return (
    <Link href={`/${navId}`}>
      <li
        onClick={() => {
          setNav(false);
        }}
        className={mobile ? mobileLink : deskLink}
      >
        {display}
      </li>
    </Link>
  );
}
