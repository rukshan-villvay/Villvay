import api from "../../../lib/api";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useFormik } from "formik";
import * as Yup from "yup";
import Head from "next/head";
import { useRef, useState } from "react";
import Modal from "../../../components/Modal";
import ProgressBar from "../../../components/ProgressBar";
import axios from "axios";
import Router from "next/router";
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
const Application: NextPage<Props> = ({ careerDetails }) => {
  const [fileArr, setFileArr] = useState([]);
  const [isProgress, setisProgress] = useState(false);

  const fileRef = useRef(null);
  const [msg, setMsg] = useState("");
  const [isShowMsg, setIsShowMsg] = useState(false);
  const closeModal = () => {
    setIsShowMsg(false);
    if (msg === "successfull!!") {
      Router.push("/careers");
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      conNumber: "",
      email: "",
      fileCV: undefined,
      fileCover: undefined,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .trim()
        .max(100, "Must be less than 100")
        .min(5, "Must be more than 5")
        .required("Required"),
      conNumber: Yup.string()
        .trim()
        .matches(/^(0)[0-9]{9}$/, "check your contact number")
        .length(10, "only have to  10 number in contact number")
        .required("Required"),
      email: Yup.string()
        .trim()
        .email("Invalid Email Address")
        .required("Required"),
      fileCV: Yup.mixed().required("Required"),
      fileCover: Yup.mixed(),
    }),
    onSubmit: async (values) => {
      const data = {
        data: {
          type: careerDetails.data.attributes.type,
          name: values.name,
          email: values.email,
          contactNumber: values.conNumber,
        },
      };
      setisProgress(true);
      try {
        const res1 = await axios.post("/api/application", data);
        if (res1.status !== 200) {
          throw new Error("Data pass error");
        }
        const files = {
          fileCV: values.fileCV[0],
        };

        if (values.fileCover !== undefined && values.fileCover.length !== 0) {
          files["fileCover"] = values.fileCover[0];
        }

        for (const key in files) {
          let formData = new FormData();
          formData.append("files", files[key]);
          formData.append("refId", res1.data.id);
          formData.append("ref", "api::application.application");
          formData.append("field", key);
          try {
            let res2 = await api.post(
              "https://villvay.herokuapp.com/api/upload",
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            );
            if (res2.status !== 200) {
              throw new Error("File upload error");
            }
          } catch (error) {
            setMsg("Try again!!");
            setisProgress(false);
            setIsShowMsg(true);
          }
        }
        try {
          const dataId = {
            data: {
              id: res1.data.id,
            },
          };
          console.log("came");
          const res3 = await axios.post("/api/email", dataId);
          if (res3.status !== 200) {
            console.log("came");
            throw new Error("Email sending error");
          }
          setMsg("successfull!!");
          setisProgress(false);
          setIsShowMsg(true);
          formik.values.name = "";
          formik.values.conNumber = "";
          formik.values.email = "";
          formik.values.fileCV = undefined;
          formik.values.fileCover = undefined;
          fileRef.current = null;
          setFileArr([]);
        } catch (error) {
          setMsg("Try again!!");
          setisProgress(false);
          setIsShowMsg(true);
        }
      } catch (error) {
        setMsg("Try again!!");
        setisProgress(false);
        setIsShowMsg(true);
      }
    },
  });

  const onFileChange = (e, key) => {
    formik.setFieldValue(key, e.target.files);
    const file = e.target.files;
    setFileArr([...fileArr, file[0]]);
  };

  return (
    <div>
      <Head>
        <title>Villvay | Careers |{careerDetails.data.attributes.type} </title>
      </Head>
      {isProgress && <ProgressBar />}
      <h1 className="text-slate-900 text-center  text-3xl py-10">
        Application for the {careerDetails.data.attributes.type}
      </h1>
      <div className="grid grid-cols-6 py-5">
        <div className="col-start-3 col-span-3 ">
          <form
            className="w-full max-w-lg bg-slate-400 p-10 px-5"
            onSubmit={formik.handleSubmit}
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <p className="font-bold text-red-600">{formik.errors.name}</p>
                ) : null}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="conNumber"
                >
                  Contact Number
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="conNumber"
                  type="tel"
                  placeholder="0123456789"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.conNumber}
                />
                {formik.touched.conNumber && formik.errors.conNumber ? (
                  <p className="font-bold text-red-600">
                    {formik.errors.conNumber}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="Email"
                >
                  Email Address
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  placeholder="Example@gamil.com"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className="font-bold text-red-600">
                    {formik.errors.email}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  htmlFor="fileCV"
                >
                  Upload the CV
                </label>
                <input
                  className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  aria-describedby="file_input_help"
                  id="fileCV"
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => {
                    onFileChange(e, "fileCV");
                  }}
                  ref={fileRef}
                />
                <p
                  className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                  id="file_input_help"
                >
                  PDF
                </p>
                {formik.touched.fileCV && formik.errors.fileCV ? (
                  <p className="font-bold text-red-600">
                    {formik.errors.fileCV.toString()}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  htmlFor="fileCover"
                >
                  Upload The Cover Letter
                </label>
                <input
                  className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  aria-describedby="file_input_help"
                  id="fileCover"
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => {
                    onFileChange(e, "fileCover");
                  }}
                  ref={fileRef}
                />
                <p
                  className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                  id="file_input_help"
                >
                  PDF
                </p>
                {formik.touched.fileCover && formik.errors.fileCover ? (
                  <p className="font-bold text-red-600">
                    {formik.errors.fileCover.toString()}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="grid grid-cols-5">
              <div className="col-start-3 col-span-2 ">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded-full"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {isShowMsg && <Modal message={msg} closeModal={closeModal} />}
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
    const { data } = await api.get(`/careers/${id}`, {
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
export default Application;
