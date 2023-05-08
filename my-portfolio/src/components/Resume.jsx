import Link from "next/link";

export default function Resume() {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Resume
        </p>
        <h2 className="py-4">What I&apos;ve Done'</h2>
        <object
          data="/uploads/David_Koll_Resume.pdf"
          type="application/pdf"
          width="100%"
          height="500px"
        />
        <Link href="/uploads/David_Koll_Resume.pdf">Download as PDF</Link>
      </div>
    </div>
  );
}
