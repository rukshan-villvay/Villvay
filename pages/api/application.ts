import api from "../../lib/api";
import HttpStatus from "http-status-codes";
const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    try {
      const response = await api.post("/applications", data, {
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`,
        },
      });
      res
        .status(HttpStatus.OK)
        .json({ message: "done!!", id: response.data.data.id });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({ error: error });
    }
  }
};
export default handler;
