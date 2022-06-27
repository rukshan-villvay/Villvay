import Link from "next/link";
import Head from "next/head";
import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Villvay | About</title>
      </Head>
      <div className="bg-gray-800">
        <div className="grid grid-cols-4 py-20">
          <div className="col-start-2 col-span-2 ">
            <h1 className="text-white text-center text-5xl py-5 font-bold">
              VILL+VAY
            </h1>
            <h3 className="text-gray-400 text-xl font-medium">
              We are a team of web development enthusiasts striving to be the
              best offshore web development partner for our clients.
            </h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 py-20">
        <div className="col-start-2 col-span-3">
          <h3 className="text-slate-900 text-center text-3xl font-semibold">
            Our Approach 10 offshore development problems we solve
          </h3>
          <div className="flex flex-wrap items-center justify-center">
            <div className="h-60 w-60 mx-14 my-10">
              <h1 className="text-slate-900 text-left text-2xl my-7">
                1. Client requirement
              </h1>
              <h3 className="text-gray-500 text-left text-xl my-3">
                Developers analyze and understand your problem
              </h3>
              <h3 className="text-gray-500 text-left text-xl my-3">
                Preparation and agreement on clearly defined statement of work
              </h3>
            </div>
            <div className="h-60 w-60 mx-14 my-10">
              <h1 className="text-slate-900 text-left text-2xl my-7">
                2. Communication
              </h1>
              <h3 className="text-gray-500 text-left text-xl my-3">
                Project coordinators with English language fluency and clear
                accents
              </h3>
              <h3 className="text-gray-500 text-left text-xl my-3">
                Regular progress updates of projects
              </h3>
            </div>
            <div className="h-50 w-60 mx-14 my-10">
              <h1 className="text-slate-900 text-left text-2xl my-7">
                3. Availability
              </h1>
              <h3 className="text-gray-500 text-left text-xl my-3">
                24 hours we are available - call us anytime
              </h3>
              <h3 className="text-gray-500 text-left text-xl my-3">
                Continents apart but only a skype call away
              </h3>
            </div>
            <div className="h-50 w-60 mx-14 my-10">
              <h1 className="text-slate-900 text-left text-2xl my-7">
                4. Delivery
              </h1>
              <h3 className="text-gray-500 text-left text-xl my-3">
                Agile, iterative and incremental development with comps and
                prototypes
              </h3>
              <h3 className="text-gray-500 text-left text-xl my-3">
                Sticking to timeplans and meeting deadlines
              </h3>
            </div>
            <div className="h-50 w-60 mx-14 my-10">
              <h1 className="text-slate-900 text-left text-2xl my-7">
                5. Team
              </h1>
              <h3 className="text-gray-500 text-left text-xl my-3">
                Expert developers, designers, QA engineers and project managers
              </h3>
              <h3 className="text-gray-500 text-left text-xl my-3">
                Continuous Training, learning and development
              </h3>
            </div>
            <div className="h-50 w-60 mx-14 my-10">
              <h1 className="text-slate-900 text-left text-2xl my-7">
                6. Technology
              </h1>
              <h3 className="text-gray-500 text-left text-xl my-3">
                Studying latest development methods and techniques
              </h3>
              <h3 className="text-gray-500 text-left text-xl my-3">
                Knowing how to develop your website or app to solve your unique
                problems
              </h3>
            </div>
            <div className="h-50 w-60 mx-14 my-10">
              <h1 className="text-slate-900 text-left text-2xl my-7">
                7. Development standards
              </h1>
              <h3 className="text-gray-500 text-left text-xl my-3">
                Clean, easy to understand, reusable and modular code
              </h3>
              <h3 className="text-gray-500 text-left text-xl my-3">
                Coding with website performance in mind
              </h3>
            </div>
            <div className="h-50 w-60 mx-14 my-10">
              <h1 className="text-slate-900 text-left text-2xl my-7">
                8. Quality Assurance and testing
              </h1>
              <h3 className="text-gray-500 text-left text-xl my-3">
                QA plans for understanding use cases
              </h3>
              <h3 className="text-gray-500 text-left text-xl my-3">
                Deliver high quality, bug free user experiences
              </h3>
            </div>
            <div className="h-50 w-60 mx-14 my-10">
              <h1 className="text-slate-900 text-left text-2xl my-7">
                9. Collaboration and transparency
              </h1>
              <h3 className="text-gray-500 text-left text-xl my-3">
                Code collaboration and version control via GIT or Bitbucket
              </h3>
              <h3 className="text-gray-500 text-left text-xl my-3">
                Review code by accessing staging environments
              </h3>
            </div>
            <div className="h-50 w-60 mx-14 my-10">
              <h1 className="text-slate-900 text-left text-2xl my-7">
                10. Pricing
              </h1>
              <h3 className="text-gray-500 text-left text-xl my-3">
                Fixed price projects
              </h3>
              <h3 className="text-gray-500 text-left text-xl my-3">
                Great value for your budget
              </h3>
            </div>
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
              <a>Take me to services page{">"}</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
