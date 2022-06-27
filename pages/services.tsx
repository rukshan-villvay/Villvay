import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function Services() {
  return (
    <div>
      <Head>
        <title>Villvay | Services</title>
      </Head>
      <div className="bg-gray-800">
        <div className="grid grid-cols-4 py-20">
          <div className="col-start-2 col-span-2 ">
            <h1 className="text-white text-center text-5xl py-5 font-bold ">
              WHAT WE DO
            </h1>
            <h3 className="text-gray-400 text-xl font-medium">
              We collaborate with clients to build great experiences in web,
              ecommerce and mobile. Below are the services we specialize in, to
              provide solutions to our clients.
            </h3>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-4 py-10">
          <div className="col-start-2 col-span-2 ">
            <div className="flex flex-nowrap items-center justify-center">
              <div className="w-1/4  hover:scale-110  p-2">
                <Image
                  className="rounded-full hover:bg-blue-50"
                  src="/technical-support.png"
                  height={100}
                  width={100}
                  alt=" Web Application Development"
                />
              </div>
              <div className="w-3/4 items-start">
                <h3 className="text-black text-left text-3xl  font-bold ">
                  Web Application Development
                </h3>
                <p>
                  PHP and Python development Javascript and Node.js development
                  API integration
                </p>
              </div>
            </div>
            <hr />
            <br />
            <div className="flex flex-nowrap items-center justify-center">
              <div className="w-1/4  hover:scale-110  p-2">
                <Image
                  className="rounded-full hover:bg-blue-50"
                  src="/ecommerce.png"
                  height={100}
                  width={100}
                  alt=" Web Application Development"
                />
              </div>
              <div className="w-3/4 items-start">
                <h3 className="text-black text-left text-3xl  font-bold ">
                  Ecommerce
                </h3>
                <p>
                  Magento and Woocommerce Development Email design and email
                  marketing set up GA, GTM and other analytical tools setup
                </p>
              </div>
            </div>
            <hr />
            <br />
            <div className="flex flex-nowrap items-center justify-center py-10 ">
              <div className="w-1/4  hover:scale-110 p-2">
                <Image
                  className="rounded-full hover:bg-blue-50 "
                  src="/world-wide-web.png"
                  height={100}
                  width={100}
                  alt=" Web Application Development"
                />
              </div>
              <div className="w-3/4 items-start">
                <h3 className="text-black text-left text-3xl  font-bold ">
                  Web Design and Development
                </h3>
                <p>
                  Web design and HTML Conversion UI design and prototyping
                  Wordpress theme and plugin development
                </p>
              </div>
            </div>
            <hr />
            <br />
            <div className="flex flex-nowrap items-center justify-center py-10 ">
              <div className="w-1/4  hover:scale-110 p-2">
                <Image
                  className="rounded-full hover:bg-blue-50 "
                  src="/app-development.png"
                  height={100}
                  width={100}
                  alt=" Web Application Development"
                />
              </div>
              <div className="w-3/4 items-start">
                <h3 className="text-black text-left text-3xl  font-bold ">
                  Mobile Apps Development
                </h3>
                <p>
                  App design and prototype iOS and Android app development Cross
                  platform Development
                </p>
              </div>
            </div>
            <hr />
            <br />
          </div>
        </div>
        <div className="grid grid-cols-4 py-10">
          <div className="col-start-2 col-span-2 ">
            <h1 className="text-slate-900 text-center text-4xl py-10 font-bold">
              We can help you to expand your production capacity — cost
              effectively
            </h1>
            <h3 className="text-zinc-600  text-xl text-center font-medium">
              Reliability, professional people, latest technology, good
              communication, easy contactability, transparency and sensible
              project management are the key ingredients for a successful
              project and a happy client. Therefore we focus all our efforts
              towards solving the problems you face when dealing with offshore
              develpment partner.
            </h3>
            <div className="text-center text-blue-800 py-10 text-lg">
              <Link href="/about">
                <a>Show me how {">"}</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
