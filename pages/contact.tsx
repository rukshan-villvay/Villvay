import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Modal from "../components/Modal";
import { useState } from "react";
import Head from "next/head";
import ProgressBar from "../components/ProgressBar";

export default function Contact() {
  const [msg, setMsg] = useState("");
  const [isProgress, setisProgress] = useState(false);
  const [isShowMsg, setIsShowMsg] = useState(false);
  const closeModal = () => {
    setIsShowMsg(false);
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      company: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .trim()
        .max(100, "Must be less than 100")
        .min(5, "Must be more than 5")
        .required("Required"),
      company: Yup.string()
        .trim()
        .max(20, "Must be less than 100")
        .min(5, "Must be more than 5")
        .notRequired(),
      email: Yup.string()
        .trim()
        .email("Invalid Email Address")
        .required("Required"),
      message: Yup.string()
        .trim()
        .max(1000, "Must be less than 100")
        .min(5, "Must be more than 5")
        .required("Required"),
    }),
    onSubmit: async (values: {
      name: string;
      company: string;
      email: string;
      message: string;
    }) => {
      try {
        const response = await axios.post("/api/messages", values);
        setMsg(response.status === 200 ? "successfull!!" : "Try again!!");
        setisProgress(false);
        setIsShowMsg(true);
        formik.values.name = "";
        formik.values.company = "";
        formik.values.email = "";
        formik.values.message = "";
      } catch (error) {
        setMsg("Try again!!");
        setIsShowMsg(true);
        setisProgress(false);
      }
    },
  });

  return (
    <div>
      <Head>
        <title>Villvay | Contact</title>
      </Head>
      {isProgress && <ProgressBar isProgress={isProgress} />}
      <div>
        <div className="bg-gray-800">
          <div className="grid grid-cols-4 py-20">
            <div className="col-start-2 col-span-2 ">
              <h1 className="text-white text-center text-5xl py-5 font-bold">
                GET IN TOUCH WITH US
              </h1>
              <h3 className="text-gray-400  text-xl font-medium">
                If you{"'"}re looking for a reliable offshore development team
                to work on your next web or mobile project, then we{"'"}d love
                to hear from you.
              </h3>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="grid grid-cols-6 ">
          <div className="col-start-3 col-span-3 ">
            <form className="w-full max-w-lg " onSubmit={formik.handleSubmit}>
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
                    <p className="font-bold text-red-600">
                      {formik.errors.name}
                    </p>
                  ) : null}
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="company"
                  >
                    Company(Optional)
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="company"
                    type="text"
                    placeholder="Company(Optional)"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.company}
                  />
                  {formik.touched.company && formik.errors.company ? (
                    <p className="font-bold text-red-600">
                      {formik.errors.company}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="email"
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
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="message"
                  >
                    Your Massage
                  </label>
                  <textarea
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="message"
                    placeholder="Message that you want to send us"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                  />
                  {formik.touched.message && formik.errors.message ? (
                    <p className="font-bold text-red-600">
                      {formik.errors.message}
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
        <div>
          <div className="grid grid-cols-4 py-20">
            <div className="col-start-2 col-span-2 ">
              <h1 className="text-slate-900 text-center text-5xl py-10 font-bold">
                Send us an email to info@villvay.com
              </h1>
              <hr />
            </div>

            <div className="col-start-2 col-span-2 ">
              <div className="flex flex-wrap  justify-center">
                <div className="w-60 px-12  my-10">
                  <h1 className="text-slate-900 text-left text-lg my-7">
                    USA Office
                  </h1>
                  <h1 className="text-slate-900 text-left text-lg my-7">
                    Shiran: (323) 315-0318
                  </h1>
                </div>
                <div className="w-60 px-12  my-10">
                  <h1 className="text-slate-900 text-left text-lg my-7">
                    USA Office
                  </h1>
                  <h1 className="text-slate-900 text-left text-lg my-7">
                    Sri Lanka Office
                  </h1>
                  <h1 className="text-slate-900 text-left text-lg my-7">
                    245/16, Hill House Gardens, Dehiwala, Sri Lanka
                  </h1>
                  <h1 className="text-slate-900 text-left text-lg my-7">
                    Shiran: 077 359 5390
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isShowMsg && <Modal message={msg} closeModal={closeModal} />}
    </div>
  );
}
