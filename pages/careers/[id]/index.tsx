import api from "../../../lib/api";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
type Props = {
  careerDetails: {
    data: {
      id: number;
      attributes: {
        type: string;
        description: string;
        requirement: { list: string[] };
      };
    };
  };
};
const Career: NextPage<Props> = ({ careerDetails }) => {
  return (
    <div className="grid grid-cols-4 py-20">
      <Head>
        <title>Villvay | Careers |{careerDetails.data.attributes.type} </title>
      </Head>
      <div className="col-start-2 col-span-2 ">
        <Link href={`/careers/${careerDetails.data.id}/application`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Apply
          </button>
        </Link>
        <div className="py-10">
          <h2 className="text-slate-900 text-center text-5xl">
            {careerDetails.data.attributes.type}
          </h2>
          <p className="text-zinc-600 justify-start text-xl">
            {careerDetails.data.attributes.description}
          </p>
        </div>
        <ul className="list-disc text-xl px-14">
          {careerDetails.data.attributes.requirement.list.map((ele, index) => {
            return (
              <li key={index} className="hover:text-black">
                {ele}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "3" } }, { params: { id: "4" } }],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const { id } = params;
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
      };
      meta: {
        pagination: {
          page: number;
          pageSize: number;
          pageCount: number;
          total: number;
        };
      };
    }>(`/api/careers/${id}`, {
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
    });
    if (!data.data.attributes.active) {
      return { notFound: true };
    }
    return { props: { careerDetails: data }, revalidate: 3600 };
  } catch (error) {
    return { notFound: true };
  }
};
export default Career;
