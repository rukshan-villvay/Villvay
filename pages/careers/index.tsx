import Link from "next/link";
import api from "../../lib/api";
import Head from "next/head";
import type { GetStaticProps, NextPage } from "next";

type Props = {
  careers: [
    {
      id: number;
      attributes: {
        type: string;
        description: string;
        requirement: { list: string[] };
        active: boolean;
      };
    }
  ];
};
const Careers: NextPage<Props> = ({ careers }) => {
  return (
    <div>
      <Head>
        <title>Villvay | Careers</title>
      </Head>
      <div className="bg-gray-800">
        <div className="grid grid-cols-4 py-20">
          <div className="col-start-2 col-span-2 ">
            <h1 className="text-white text-center text-5xl py-5 font-bold ">
              Why work with us?
            </h1>
            <h3 className="text-gray-400 text-xl font-medium">
              We are a fast growing application development company with
              expertise in web, mobile, and backend development for tech
              startups and enterprises in the US. We are organized around a
              strong product development philosophy and our culture emphasizes
              creative problem solving, fast iteration and execution.
            </h3>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 py-20">
        <div className="col-start-2 col-span-3 ">
          <h2 className="text-slate-900 text-center text-5xl">
            We are hiring...
          </h2>
          <p className="text-zinc-600 justify-start text-xl py-5">
            Our technology stack is mainly based on Node.js, Python, and php on
            the backend and Javascript, CSS, HTML on the frontend. We have a
            wide range of opportunities for different skill levels and
            experiences.
          </p>

          <ul className="list-none text-center text-xl text-gray-400 py-7">
            {careers.map((career) => {
              if (career.attributes.active)
                return (
                  <li key={career.id} className="hover:text-black">
                    <Link href={`/careers/${career.id}`}>
                      {career.attributes.type}
                    </Link>
                  </li>
                );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data } = await api.get<{
      data: {
        id: number;
        attributes: {
          type: string;
          description: string;
          requirement: { list: [string] };
          active: boolean;
        };
      }[];
      meta: {
        pagination: {
          page: number;
          pageSize: number;
          pageCount: number;
          total: number;
        };
      };
    }>(`/api/careers`, {
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
    });
    return { props: { careers: data.data }, revalidate: 3600 };
  } catch (error) {
    return { notFound: true };
  }
};
export default Careers;
