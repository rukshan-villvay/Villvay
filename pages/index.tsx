import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
export default function Work() {
  const [isVisible, setIsVisible] = useState(true);

  setInterval(() => {
    setIsVisible(!isVisible);
  }, 4000);
  return (
    <div>
      <Head>
        <title>Villvay | Work</title>
      </Head>
      <div className="bg-gray-800">
        <div className="py-20">
          <div className="grid grid-cols-4 ">
            <div className="col-start-2 col-span-2 ">
              <h1 className="text-white text-center text-5xl py-5 font-bold ">
                WE BUILD APPLICATIONS FOR{" "}
                {isVisible && <span id="span-1">START-UPS</span>}{" "}
                {!isVisible && <span id="span-1">ENTERPRISES</span>}
              </h1>
              <h3 className="text-gray-400 py-10 text-xl font-medium">
                Villvay is an expert Web development company based in Colombo.
                We build world class web solutions to solve challenging business
                problems using leading edge web technology.
              </h3>
            </div>

            <div className="col-start-2 col-span-2">
              <div className="flex items-center justify-center">
                <div className="item">
                  <Link href="#ourWork">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3">
                      OUR WORK
                    </button>
                  </Link>
                  <Link href="/about">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3">
                      OUR APPROCH
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />

      <div className="col-start-2 col-span-2 bg-cyan-50" id="ourWork">
        <div className="flex flex-wrap py-5 px-20 -mx-3 mb-6">
          <div className="w-full md:w-1/2">
            <h3 className="text-gray-500 text-left text-xl  bg-white">
              HTML5 / CSS3 / JS
            </h3>
            <h1 className="text-slate-900 text-left text-5xl my-7">
              Answer Financial
            </h1>
            <h3 className="text-gray-500 text-left text-xl my-3">
              Answer Financial (a subsidiary of Allstate) is an online insurance
              comparison service that wanted to have a comprehensive design
              overhaul to its website.
            </h3>
          </div>
          <div className="w-full md:w-1/2 ">
            <Image
              src="/mobile-app-development.png"
              height={400}
              width={400}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 py-10">
        <div className="col-start-2 col-span-2 ">
          <h1 className="text-slate-900 text-center text-4xl py-10 font-bold">
            What we do
          </h1>
          <h3 className="text-zinc-600  text-xl text-center font-medium">
            Whether you want to redesign a website or create something entirely
            new, we are excited to help you out either way. Find out about what
            we usually build and the services that we specialize in.
          </h3>

          <div className="text-center text-blue-800 py-10 text-lg">
            <Link href="/services">
              <a>Take me to services page {">"}</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
