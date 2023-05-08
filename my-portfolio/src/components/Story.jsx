import Image from "next/image";

export default function Story() {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Great at: systems and structures, attention to detail, putting out
            fires, stepping into leadership roles when needed, being that guy to
            whom everyone can turn when they need to know what&apos;s actually
            going on, following instructions, general competence, just sitting
            down and doing the damn thing, word games.
          </p>

          <p className="py-2 text-gray-600">
            Not so great at: selling myself, using buzzwords, allowing
            grammatical mistakes to go unremarked upon, keeping my tongue out of
            my cheek, accepting compliments, networking, basketball.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
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
      </div>
    </div>
  );
}
