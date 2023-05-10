import Link from "next/link";
import Image from "next/image";

import { HiOutlineChevronDoubleUp } from "react-icons/hi";

import ContactBox from "./ContactBox";

export default function Contact() {
  return (
    <>
      <div className="grid lg:grid-cols-5 gap-8">
        {/* left  */}
        <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p4">
          <div className="lg:p-4 h-full">
            <div>
              <Image
                className="rounded-xl hover:scale-105 ease-in duration-300"
                src="/assets/navigating.png"
                width={200}
                height={200}
                alt="photo"
              />
            </div>
            <div>
              <h2 className="py-2">David Koll</h2>
              <p>Full-stack Developer</p>
              <p className="py-4">
                I am available for freelance or full-time positions. Contact me
                and let&apos;s talk
              </p>
            </div>
            <div>
              <p className="uppercase pt-8">Connect With Me</p>
              <ContactBox mobile="false" />
            </div>
          </div>
        </div>

        {/* right */}
        <div className="col-span-3 w-full h-full shadow-xl shadow-gray-400 rounded-xl lg:p4">
          <div className="p-4">
            <form>
              <div>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">E-mail</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                  ></textarea>
                </div>
              </div>
              <button className="w-full p-4 text-gray-100 mt-4 ">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="flex justify-center py-12">
        <Link href="/#splash">
          <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursort-pointer hover:scale-110 ease-in duraction-300">
            <HiOutlineChevronDoubleUp
              className="m-auto text-[#5651e5]"
              size={30}
            />
          </div>
        </Link>
      </div>
    </>
  );
}
