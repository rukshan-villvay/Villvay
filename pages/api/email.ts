import api from "../../lib/api";
import HttpStatus from "http-status-codes";
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});
const handleMail = async (data) => {
  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.EMAIL_ADDRESS_TO,
    subject: `APPLICATION FOR THE ${data.type}`,
    html: `<div style="padding:20px;">
            <p>Hi,</p>
            <p>type: ${data.type}</p>
            <p>name:${data.name}</p>
            <p>email:${data.email}</p>
            <p>contact number:${data.conNumber}</p>
          </div> `,
    attachments: data.files.map((file) => {
      return {
        path: file,
      };
    }),
  };
  await transporter.sendMail(mailOptions);
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const id = req.body.data.id;
      const res1 = await api.get(
        `/applications/${id}?populate=fileCV,fileCover`,
        {
          headers: {
            Authorization: `Bearer ${process.env.TOKEN}`,
          },
        }
      );
      if (res1.status !== 200) {
        throw new Error("Email data geting error");
      }
      const data = {
        type: res1.data.data.attributes.type,
        name: res1.data.data.attributes.name,
        email: res1.data.data.attributes.email,
        conNumber: res1.data.data.attributes.contactNumber,
        files: [
          `${process.env.MAIN_URL}${res1.data.data.attributes.fileCV.data.attributes.url}`,
          `${process.env.MAIN_URL}${res1.data.data.attributes.fileCover.data.attributes.url}`,
        ],
      };
      try {
        await handleMail(data);
        res.status(HttpStatus.OK).json({ message: "done!!" });
      } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({ error: error });
      }
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({ error: error });
    }
  }
};
export default handler;
