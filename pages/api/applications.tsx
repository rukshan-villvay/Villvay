import api from "../../lib/api";
import nextConnect from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import HttpStatus from "http-status-codes";
import FormData from "form-data";
const nodemailer = require("nodemailer");
const multer = require("multer");
const dotenv = require("dotenv");
const fs = require("fs");

dotenv.config();
const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});
const handleMail = async (body, files) => {
  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.EMAIL_ADDRESS_TO,
    subject: `APPLICATION FOR THE ${body.type}`,
    text: "Hi,",
    html: `<div style="background-color:black;color:white;padding:20px;">
            <p>type: ${body.type}</p>
            <p>name:${body.name}</p>
            <p>email:${body.email}</p>
            <p>contact number:${body.conNumber}</p>
          </div> `,
    attachments: files.map((file) => {
      return {
        filename: file.originalname,
        path: file.path,
      };
    }),
  };
  await transporter.sendMail(mailOptions);
  files.forEach((file) => {
    fs.unlink(file.path, () => {
      console.log(`deleted :${file.path}`);
    });
  });
};
const handler = nextConnect<NextApiRequest, NextApiResponse>({
  onError(error, req, res) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});
// Returns middleware that processes multiple files sharing the same field name.
const uploadMiddleware = upload.fields([
  { name: "fileCV", maxCount: 1 },
  { name: "fileCover", maxCount: 1 },
]);

// Adds the middleware to Next-Connect
handler.use(uploadMiddleware);

handler.post(async (req, response) => {
  const data = {
    data: {
      name: req["body"].name,
      email: req["body"].email,
      contactNumber: req["body"].conNumber,
    },
  };
  api
    .post("/api/applications", data, {
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
    })
    .then((res) => {
      return res.data.data.id;
    })
    .then((refId) => {
      console.log("come:", refId);
      let files = [];
      for (const key in req["files"]) {
        files.push(req["files"][key][0]);
        let blob = fs.readFileSync(req["files"][key][0]["path"]);
        let formData = new FormData();
        formData.append("files", blob, req["files"][key][0]["originalname"]);
        formData.append("refId", refId);
        formData.append("ref", "application");
        formData.append("field", key);
        api.post("/api/upload", formData, {
          headers: {
            Authorization: `Bearer ${process.env.TOKEN}`,
          },
        });
      }
      return files;
    })
    .then((res) => {
      handleMail(req["body"], res);
    })
    .then(() => {
      response.status(HttpStatus.OK).json({ message: "done!!" });
    })
    .catch((error) => {
      response.status(HttpStatus.BAD_REQUEST).json({ error: error });
    });
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
