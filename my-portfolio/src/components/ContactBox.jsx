import { AiOutlineMail } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function ContactBox({ mobile }) {
  const mobileContain =
    "flex items-center justify-even max-w-[330px] m-auto py-4";
  const deskContain = "flex items-center justify-even my-4 w-full sm:w-[80%]";

  const mobileLink =
    "rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300";
  const deskLink =
    "rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300";

  return (
    <div className={mobile ? mobileContain : deskContain}>
      <Link href="https://www.linkedin.com/in/davidkoll/" target="_blank">
        <div className={mobile ? mobileLink : deskLink}>
          <FaLinkedin />
        </div>
      </Link>
      <Link href="https://github.com/donkeykong718" target="_blank">
        <div className={mobile ? mobileLink : deskLink}>
          <FaGithub />
        </div>
      </Link>
      <Link href="mailto:koll.david@gmail.com" target="_blank">
        <div className={mobile ? mobileLink : deskLink}>
          <AiOutlineMail />
        </div>
      </Link>
      <Link href="/#contact">
        <div className={mobile ? mobileLink : deskLink}>
          <BsPersonLinesFill />
        </div>
      </Link>
    </div>
  );
}
