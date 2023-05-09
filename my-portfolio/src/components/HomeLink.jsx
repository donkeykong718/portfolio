import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomeLink() {
  return (
    <div>
      <Link href="/">
        <Image src="/assets/DK_logo.png" alt="DK logo" width="64" height="64" />
      </Link>
    </div>
  );
}
