import Image from "next/image";
import Link from "next/link";

export default function Story() {
  return (
    <>
      <div>
        <p className="py-2 text-gray-600">
          Great at: systems and structures, attention to detail, putting out
          fires, stepping into leadership roles when needed, being that guy to
          whom everyone can turn when they need to know what&apos;s actually
          going on, following instructions, general competence, just sitting
          down and doing the damn thing, word games.
        </p>

        <p className="py-2 text-gray-600">
          Not so great at: selling myself, using buzzwords, allowing grammatical
          mistakes to go unremarked upon, keeping my tongue out of my cheek,
          accepting compliments, networking, basketball.
        </p>
        <Link href="/#projects">
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </Link>
      </div>
      <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
        <Image
          className="rounded-xl"
          src={"/assets/NYBG Headshot.jpg"}
          width={4032}
          height={3024}
          alt="headshot"
        />
      </div>
    </>
  );
}
