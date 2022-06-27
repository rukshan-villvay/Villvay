import api from "../../lib/api";
import HttpStatus from "http-status-codes";
const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = {
      data: {
        name: req.body.name,
        company: req.body.company,
        email: req.body.email,
        message: req.body.message,
      },
    };
    try {
      const response = await api.post("/api/messages", data, {
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`,
        },
      });
      res.status(HttpStatus.OK).json({ message: "done!!" });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({ error: error });
    }
  }
};
export default handler;
